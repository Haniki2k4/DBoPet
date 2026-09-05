/**
 * Per-user async request queue.
 *
 * Each user gets their own FIFO queue of async tasks. When a new task arrives
 * for a user, it is chained onto the tail of that user's current promise chain.
 * This ensures sequential execution per user while different users run in parallel.
 */

const queues = new Map<string, Promise<unknown>>();

/**
 * Enqueue `task` for `userId`. The task runs after any previously enqueued
 * task for the same user completes (success or failure).
 * Errors are rethrown to the caller, while allowing subsequent queued tasks to proceed.
 */
export function enqueue<T>(userId: string, task: () => Promise<T>): Promise<T> {
  const previous = queues.get(userId) ?? Promise.resolve();

  let executeTask!: () => Promise<unknown>;
  const resultPromise = new Promise<T>((resolve, reject) => {
    executeTask = () => task().then(resolve, reject);
  });

  const next = previous
    .then(() => executeTask())
    .catch(() => {})
    .finally(() => {
      if (queues.get(userId) === next) {
        queues.delete(userId);
      }
    });

  queues.set(userId, next);
  return resultPromise;
}

