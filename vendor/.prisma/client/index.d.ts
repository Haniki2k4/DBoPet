
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model UserInventory
 * 
 */
export type UserInventory = $Result.DefaultSelection<Prisma.$UserInventoryPayload>
/**
 * Model UserHouse
 * 
 */
export type UserHouse = $Result.DefaultSelection<Prisma.$UserHousePayload>
/**
 * Model GuildConfig
 * 
 */
export type GuildConfig = $Result.DefaultSelection<Prisma.$GuildConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PetSpecies: {
  DOG: 'DOG',
  CAT: 'CAT',
  HAMSTER: 'HAMSTER',
  RABBIT: 'RABBIT',
  BIRD: 'BIRD',
  FISH: 'FISH'
};

export type PetSpecies = (typeof PetSpecies)[keyof typeof PetSpecies]


export const Mood: {
  SAD: 'SAD',
  OKAY: 'OKAY',
  HAPPY: 'HAPPY'
};

export type Mood = (typeof Mood)[keyof typeof Mood]


export const HouseType: {
  BASIC: 'BASIC',
  COZY: 'COZY',
  VILLA: 'VILLA'
};

export type HouseType = (typeof HouseType)[keyof typeof HouseType]

}

export type PetSpecies = $Enums.PetSpecies

export const PetSpecies: typeof $Enums.PetSpecies

export type Mood = $Enums.Mood

export const Mood: typeof $Enums.Mood

export type HouseType = $Enums.HouseType

export const HouseType: typeof $Enums.HouseType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userInventory`: Exposes CRUD operations for the **UserInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInventories
    * const userInventories = await prisma.userInventory.findMany()
    * ```
    */
  get userInventory(): Prisma.UserInventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userHouse`: Exposes CRUD operations for the **UserHouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserHouses
    * const userHouses = await prisma.userHouse.findMany()
    * ```
    */
  get userHouse(): Prisma.UserHouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guildConfig`: Exposes CRUD operations for the **GuildConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildConfigs
    * const guildConfigs = await prisma.guildConfig.findMany()
    * ```
    */
  get guildConfig(): Prisma.GuildConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Pet: 'Pet',
    Food: 'Food',
    UserInventory: 'UserInventory',
    UserHouse: 'UserHouse',
    GuildConfig: 'GuildConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pet" | "food" | "userInventory" | "userHouse" | "guildConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      UserInventory: {
        payload: Prisma.$UserInventoryPayload<ExtArgs>
        fields: Prisma.UserInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInventoryPayload>
          }
          findFirst: {
            args: Prisma.UserInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInventoryPayload>
          }
          findMany: {
            args: Prisma.UserInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInventoryPayload>[]
          }
          create: {
            args: Prisma.UserInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInventoryPayload>
          }
          createMany: {
            args: Prisma.UserInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInventoryPayload>[]
          }
          delete: {
            args: Prisma.UserInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInventoryPayload>
          }
          update: {
            args: Prisma.UserInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInventoryPayload>
          }
          deleteMany: {
            args: Prisma.UserInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserInventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInventoryPayload>[]
          }
          upsert: {
            args: Prisma.UserInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInventoryPayload>
          }
          aggregate: {
            args: Prisma.UserInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInventory>
          }
          groupBy: {
            args: Prisma.UserInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserInventoryCountAggregateOutputType> | number
          }
        }
      }
      UserHouse: {
        payload: Prisma.$UserHousePayload<ExtArgs>
        fields: Prisma.UserHouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserHouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserHouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHousePayload>
          }
          findFirst: {
            args: Prisma.UserHouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserHouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHousePayload>
          }
          findMany: {
            args: Prisma.UserHouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHousePayload>[]
          }
          create: {
            args: Prisma.UserHouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHousePayload>
          }
          createMany: {
            args: Prisma.UserHouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserHouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHousePayload>[]
          }
          delete: {
            args: Prisma.UserHouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHousePayload>
          }
          update: {
            args: Prisma.UserHouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHousePayload>
          }
          deleteMany: {
            args: Prisma.UserHouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserHouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserHouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHousePayload>[]
          }
          upsert: {
            args: Prisma.UserHouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHousePayload>
          }
          aggregate: {
            args: Prisma.UserHouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserHouse>
          }
          groupBy: {
            args: Prisma.UserHouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserHouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserHouseCountArgs<ExtArgs>
            result: $Utils.Optional<UserHouseCountAggregateOutputType> | number
          }
        }
      }
      GuildConfig: {
        payload: Prisma.$GuildConfigPayload<ExtArgs>
        fields: Prisma.GuildConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          findFirst: {
            args: Prisma.GuildConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          findMany: {
            args: Prisma.GuildConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          create: {
            args: Prisma.GuildConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          createMany: {
            args: Prisma.GuildConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          delete: {
            args: Prisma.GuildConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          update: {
            args: Prisma.GuildConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          deleteMany: {
            args: Prisma.GuildConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          upsert: {
            args: Prisma.GuildConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          aggregate: {
            args: Prisma.GuildConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuildConfig>
          }
          groupBy: {
            args: Prisma.GuildConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildConfigCountArgs<ExtArgs>
            result: $Utils.Optional<GuildConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pet?: PetOmit
    food?: FoodOmit
    userInventory?: UserInventoryOmit
    userHouse?: UserHouseOmit
    guildConfig?: GuildConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pets: number
    inventory: number
    houses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | UserCountOutputTypeCountPetsArgs
    inventory?: boolean | UserCountOutputTypeCountInventoryArgs
    houses?: boolean | UserCountOutputTypeCountHousesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInventoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHouseWhereInput
  }


  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    inventory: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | FoodCountOutputTypeCountInventoryArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInventoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    level: number | null
    experience: number | null
    gold: number | null
    ownedHouseSlots: number | null
    dailyStreak: number | null
    gamesPlayed: number | null
    gamesToday: number | null
    feedCount: number | null
  }

  export type UserSumAggregateOutputType = {
    level: number | null
    experience: number | null
    gold: number | null
    ownedHouseSlots: number | null
    dailyStreak: number | null
    gamesPlayed: number | null
    gamesToday: number | null
    feedCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    discordId: string | null
    level: number | null
    experience: number | null
    gold: number | null
    activeHouse: $Enums.HouseType | null
    ownedHouseSlots: number | null
    lastDailyAt: Date | null
    dailyStreak: number | null
    gamesPlayed: number | null
    gamesToday: number | null
    lastGameResetAt: Date | null
    feedCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    discordId: string | null
    level: number | null
    experience: number | null
    gold: number | null
    activeHouse: $Enums.HouseType | null
    ownedHouseSlots: number | null
    lastDailyAt: Date | null
    dailyStreak: number | null
    gamesPlayed: number | null
    gamesToday: number | null
    lastGameResetAt: Date | null
    feedCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    discordId: number
    level: number
    experience: number
    gold: number
    activeHouse: number
    ownedHouseSlots: number
    lastDailyAt: number
    dailyStreak: number
    gamesPlayed: number
    gamesToday: number
    lastGameResetAt: number
    feedCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    level?: true
    experience?: true
    gold?: true
    ownedHouseSlots?: true
    dailyStreak?: true
    gamesPlayed?: true
    gamesToday?: true
    feedCount?: true
  }

  export type UserSumAggregateInputType = {
    level?: true
    experience?: true
    gold?: true
    ownedHouseSlots?: true
    dailyStreak?: true
    gamesPlayed?: true
    gamesToday?: true
    feedCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    discordId?: true
    level?: true
    experience?: true
    gold?: true
    activeHouse?: true
    ownedHouseSlots?: true
    lastDailyAt?: true
    dailyStreak?: true
    gamesPlayed?: true
    gamesToday?: true
    lastGameResetAt?: true
    feedCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    discordId?: true
    level?: true
    experience?: true
    gold?: true
    activeHouse?: true
    ownedHouseSlots?: true
    lastDailyAt?: true
    dailyStreak?: true
    gamesPlayed?: true
    gamesToday?: true
    lastGameResetAt?: true
    feedCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    discordId?: true
    level?: true
    experience?: true
    gold?: true
    activeHouse?: true
    ownedHouseSlots?: true
    lastDailyAt?: true
    dailyStreak?: true
    gamesPlayed?: true
    gamesToday?: true
    lastGameResetAt?: true
    feedCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    discordId: string
    level: number
    experience: number
    gold: number
    activeHouse: $Enums.HouseType
    ownedHouseSlots: number
    lastDailyAt: Date | null
    dailyStreak: number
    gamesPlayed: number
    gamesToday: number
    lastGameResetAt: Date
    feedCount: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    level?: boolean
    experience?: boolean
    gold?: boolean
    activeHouse?: boolean
    ownedHouseSlots?: boolean
    lastDailyAt?: boolean
    dailyStreak?: boolean
    gamesPlayed?: boolean
    gamesToday?: boolean
    lastGameResetAt?: boolean
    feedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pets?: boolean | User$petsArgs<ExtArgs>
    inventory?: boolean | User$inventoryArgs<ExtArgs>
    houses?: boolean | User$housesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    level?: boolean
    experience?: boolean
    gold?: boolean
    activeHouse?: boolean
    ownedHouseSlots?: boolean
    lastDailyAt?: boolean
    dailyStreak?: boolean
    gamesPlayed?: boolean
    gamesToday?: boolean
    lastGameResetAt?: boolean
    feedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    level?: boolean
    experience?: boolean
    gold?: boolean
    activeHouse?: boolean
    ownedHouseSlots?: boolean
    lastDailyAt?: boolean
    dailyStreak?: boolean
    gamesPlayed?: boolean
    gamesToday?: boolean
    lastGameResetAt?: boolean
    feedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    discordId?: boolean
    level?: boolean
    experience?: boolean
    gold?: boolean
    activeHouse?: boolean
    ownedHouseSlots?: boolean
    lastDailyAt?: boolean
    dailyStreak?: boolean
    gamesPlayed?: boolean
    gamesToday?: boolean
    lastGameResetAt?: boolean
    feedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discordId" | "level" | "experience" | "gold" | "activeHouse" | "ownedHouseSlots" | "lastDailyAt" | "dailyStreak" | "gamesPlayed" | "gamesToday" | "lastGameResetAt" | "feedCount" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | User$petsArgs<ExtArgs>
    inventory?: boolean | User$inventoryArgs<ExtArgs>
    houses?: boolean | User$housesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pets: Prisma.$PetPayload<ExtArgs>[]
      inventory: Prisma.$UserInventoryPayload<ExtArgs>[]
      houses: Prisma.$UserHousePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      discordId: string
      level: number
      experience: number
      gold: number
      activeHouse: $Enums.HouseType
      ownedHouseSlots: number
      lastDailyAt: Date | null
      dailyStreak: number
      gamesPlayed: number
      gamesToday: number
      lastGameResetAt: Date
      feedCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends User$petsArgs<ExtArgs> = {}>(args?: Subset<T, User$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends User$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, User$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    houses<T extends User$housesArgs<ExtArgs> = {}>(args?: Subset<T, User$housesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly discordId: FieldRef<"User", 'String'>
    readonly level: FieldRef<"User", 'Int'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly gold: FieldRef<"User", 'Int'>
    readonly activeHouse: FieldRef<"User", 'HouseType'>
    readonly ownedHouseSlots: FieldRef<"User", 'Int'>
    readonly lastDailyAt: FieldRef<"User", 'DateTime'>
    readonly dailyStreak: FieldRef<"User", 'Int'>
    readonly gamesPlayed: FieldRef<"User", 'Int'>
    readonly gamesToday: FieldRef<"User", 'Int'>
    readonly lastGameResetAt: FieldRef<"User", 'DateTime'>
    readonly feedCount: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pets
   */
  export type User$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * User.inventory
   */
  export type User$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
    where?: UserInventoryWhereInput
    orderBy?: UserInventoryOrderByWithRelationInput | UserInventoryOrderByWithRelationInput[]
    cursor?: UserInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInventoryScalarFieldEnum | UserInventoryScalarFieldEnum[]
  }

  /**
   * User.houses
   */
  export type User$housesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseInclude<ExtArgs> | null
    where?: UserHouseWhereInput
    orderBy?: UserHouseOrderByWithRelationInput | UserHouseOrderByWithRelationInput[]
    cursor?: UserHouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHouseScalarFieldEnum | UserHouseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    level: number | null
    experience: number | null
    affection: number | null
    comfort: number | null
    dailyPetCount: number | null
  }

  export type PetSumAggregateOutputType = {
    level: number | null
    experience: number | null
    affection: number | null
    comfort: number | null
    dailyPetCount: number | null
  }

  export type PetMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    petCode: string | null
    name: string | null
    species: $Enums.PetSpecies | null
    variant: string | null
    level: number | null
    experience: number | null
    affection: number | null
    comfort: number | null
    mood: $Enums.Mood | null
    dailyPetCount: number | null
    lastPetResetAt: Date | null
    lastFedAt: Date | null
    lastPettedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    petCode: string | null
    name: string | null
    species: $Enums.PetSpecies | null
    variant: string | null
    level: number | null
    experience: number | null
    affection: number | null
    comfort: number | null
    mood: $Enums.Mood | null
    dailyPetCount: number | null
    lastPetResetAt: Date | null
    lastFedAt: Date | null
    lastPettedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    ownerId: number
    petCode: number
    name: number
    species: number
    variant: number
    level: number
    experience: number
    affection: number
    comfort: number
    mood: number
    dailyPetCount: number
    lastPetResetAt: number
    lastFedAt: number
    lastPettedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    level?: true
    experience?: true
    affection?: true
    comfort?: true
    dailyPetCount?: true
  }

  export type PetSumAggregateInputType = {
    level?: true
    experience?: true
    affection?: true
    comfort?: true
    dailyPetCount?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    ownerId?: true
    petCode?: true
    name?: true
    species?: true
    variant?: true
    level?: true
    experience?: true
    affection?: true
    comfort?: true
    mood?: true
    dailyPetCount?: true
    lastPetResetAt?: true
    lastFedAt?: true
    lastPettedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    ownerId?: true
    petCode?: true
    name?: true
    species?: true
    variant?: true
    level?: true
    experience?: true
    affection?: true
    comfort?: true
    mood?: true
    dailyPetCount?: true
    lastPetResetAt?: true
    lastFedAt?: true
    lastPettedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    ownerId?: true
    petCode?: true
    name?: true
    species?: true
    variant?: true
    level?: true
    experience?: true
    affection?: true
    comfort?: true
    mood?: true
    dailyPetCount?: true
    lastPetResetAt?: true
    lastFedAt?: true
    lastPettedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: string
    ownerId: string
    petCode: string
    name: string
    species: $Enums.PetSpecies
    variant: string
    level: number
    experience: number
    affection: number
    comfort: number
    mood: $Enums.Mood
    dailyPetCount: number
    lastPetResetAt: Date
    lastFedAt: Date | null
    lastPettedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    petCode?: boolean
    name?: boolean
    species?: boolean
    variant?: boolean
    level?: boolean
    experience?: boolean
    affection?: boolean
    comfort?: boolean
    mood?: boolean
    dailyPetCount?: boolean
    lastPetResetAt?: boolean
    lastFedAt?: boolean
    lastPettedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    petCode?: boolean
    name?: boolean
    species?: boolean
    variant?: boolean
    level?: boolean
    experience?: boolean
    affection?: boolean
    comfort?: boolean
    mood?: boolean
    dailyPetCount?: boolean
    lastPetResetAt?: boolean
    lastFedAt?: boolean
    lastPettedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    petCode?: boolean
    name?: boolean
    species?: boolean
    variant?: boolean
    level?: boolean
    experience?: boolean
    affection?: boolean
    comfort?: boolean
    mood?: boolean
    dailyPetCount?: boolean
    lastPetResetAt?: boolean
    lastFedAt?: boolean
    lastPettedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    ownerId?: boolean
    petCode?: boolean
    name?: boolean
    species?: boolean
    variant?: boolean
    level?: boolean
    experience?: boolean
    affection?: boolean
    comfort?: boolean
    mood?: boolean
    dailyPetCount?: boolean
    lastPetResetAt?: boolean
    lastFedAt?: boolean
    lastPettedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "petCode" | "name" | "species" | "variant" | "level" | "experience" | "affection" | "comfort" | "mood" | "dailyPetCount" | "lastPetResetAt" | "lastFedAt" | "lastPettedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      petCode: string
      name: string
      species: $Enums.PetSpecies
      variant: string
      level: number
      experience: number
      affection: number
      comfort: number
      mood: $Enums.Mood
      dailyPetCount: number
      lastPetResetAt: Date
      lastFedAt: Date | null
      lastPettedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'String'>
    readonly ownerId: FieldRef<"Pet", 'String'>
    readonly petCode: FieldRef<"Pet", 'String'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly species: FieldRef<"Pet", 'PetSpecies'>
    readonly variant: FieldRef<"Pet", 'String'>
    readonly level: FieldRef<"Pet", 'Int'>
    readonly experience: FieldRef<"Pet", 'Int'>
    readonly affection: FieldRef<"Pet", 'Int'>
    readonly comfort: FieldRef<"Pet", 'Int'>
    readonly mood: FieldRef<"Pet", 'Mood'>
    readonly dailyPetCount: FieldRef<"Pet", 'Int'>
    readonly lastPetResetAt: FieldRef<"Pet", 'DateTime'>
    readonly lastFedAt: FieldRef<"Pet", 'DateTime'>
    readonly lastPettedAt: FieldRef<"Pet", 'DateTime'>
    readonly createdAt: FieldRef<"Pet", 'DateTime'>
    readonly updatedAt: FieldRef<"Pet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    price: number | null
    unlockLevel: number | null
    petExperience: number | null
    ownerExperience: number | null
    comfortGain: number | null
  }

  export type FoodSumAggregateOutputType = {
    price: number | null
    unlockLevel: number | null
    petExperience: number | null
    ownerExperience: number | null
    comfortGain: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    description: string | null
    price: number | null
    unlockLevel: number | null
    petExperience: number | null
    ownerExperience: number | null
    comfortGain: number | null
    preferredBy: $Enums.PetSpecies | null
  }

  export type FoodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    description: string | null
    price: number | null
    unlockLevel: number | null
    petExperience: number | null
    ownerExperience: number | null
    comfortGain: number | null
    preferredBy: $Enums.PetSpecies | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    description: number
    price: number
    unlockLevel: number
    petExperience: number
    ownerExperience: number
    comfortGain: number
    preferredBy: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    price?: true
    unlockLevel?: true
    petExperience?: true
    ownerExperience?: true
    comfortGain?: true
  }

  export type FoodSumAggregateInputType = {
    price?: true
    unlockLevel?: true
    petExperience?: true
    ownerExperience?: true
    comfortGain?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    price?: true
    unlockLevel?: true
    petExperience?: true
    ownerExperience?: true
    comfortGain?: true
    preferredBy?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    price?: true
    unlockLevel?: true
    petExperience?: true
    ownerExperience?: true
    comfortGain?: true
    preferredBy?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    price?: true
    unlockLevel?: true
    petExperience?: true
    ownerExperience?: true
    comfortGain?: true
    preferredBy?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: string
    name: string
    icon: string
    description: string
    price: number
    unlockLevel: number
    petExperience: number
    ownerExperience: number
    comfortGain: number
    preferredBy: $Enums.PetSpecies | null
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    price?: boolean
    unlockLevel?: boolean
    petExperience?: boolean
    ownerExperience?: boolean
    comfortGain?: boolean
    preferredBy?: boolean
    inventory?: boolean | Food$inventoryArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    price?: boolean
    unlockLevel?: boolean
    petExperience?: boolean
    ownerExperience?: boolean
    comfortGain?: boolean
    preferredBy?: boolean
  }, ExtArgs["result"]["food"]>

  export type FoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    price?: boolean
    unlockLevel?: boolean
    petExperience?: boolean
    ownerExperience?: boolean
    comfortGain?: boolean
    preferredBy?: boolean
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    price?: boolean
    unlockLevel?: boolean
    petExperience?: boolean
    ownerExperience?: boolean
    comfortGain?: boolean
    preferredBy?: boolean
  }

  export type FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "description" | "price" | "unlockLevel" | "petExperience" | "ownerExperience" | "comfortGain" | "preferredBy", ExtArgs["result"]["food"]>
  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | Food$inventoryArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      inventory: Prisma.$UserInventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      icon: string
      description: string
      price: number
      unlockLevel: number
      petExperience: number
      ownerExperience: number
      comfortGain: number
      preferredBy: $Enums.PetSpecies | null
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foods and returns the data saved in the database.
     * @param {FoodCreateManyAndReturnArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods and returns the data updated in the database.
     * @param {FoodUpdateManyAndReturnArgs} args - Arguments to update many Foods.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends Food$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Food$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Food model
   */
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'String'>
    readonly name: FieldRef<"Food", 'String'>
    readonly icon: FieldRef<"Food", 'String'>
    readonly description: FieldRef<"Food", 'String'>
    readonly price: FieldRef<"Food", 'Int'>
    readonly unlockLevel: FieldRef<"Food", 'Int'>
    readonly petExperience: FieldRef<"Food", 'Int'>
    readonly ownerExperience: FieldRef<"Food", 'Int'>
    readonly comfortGain: FieldRef<"Food", 'Int'>
    readonly preferredBy: FieldRef<"Food", 'PetSpecies'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
  }

  /**
   * Food createManyAndReturn
   */
  export type FoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food updateManyAndReturn
   */
  export type FoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Food.inventory
   */
  export type Food$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
    where?: UserInventoryWhereInput
    orderBy?: UserInventoryOrderByWithRelationInput | UserInventoryOrderByWithRelationInput[]
    cursor?: UserInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInventoryScalarFieldEnum | UserInventoryScalarFieldEnum[]
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
  }


  /**
   * Model UserInventory
   */

  export type AggregateUserInventory = {
    _count: UserInventoryCountAggregateOutputType | null
    _avg: UserInventoryAvgAggregateOutputType | null
    _sum: UserInventorySumAggregateOutputType | null
    _min: UserInventoryMinAggregateOutputType | null
    _max: UserInventoryMaxAggregateOutputType | null
  }

  export type UserInventoryAvgAggregateOutputType = {
    quantity: number | null
  }

  export type UserInventorySumAggregateOutputType = {
    quantity: number | null
  }

  export type UserInventoryMinAggregateOutputType = {
    userId: string | null
    foodId: string | null
    quantity: number | null
  }

  export type UserInventoryMaxAggregateOutputType = {
    userId: string | null
    foodId: string | null
    quantity: number | null
  }

  export type UserInventoryCountAggregateOutputType = {
    userId: number
    foodId: number
    quantity: number
    _all: number
  }


  export type UserInventoryAvgAggregateInputType = {
    quantity?: true
  }

  export type UserInventorySumAggregateInputType = {
    quantity?: true
  }

  export type UserInventoryMinAggregateInputType = {
    userId?: true
    foodId?: true
    quantity?: true
  }

  export type UserInventoryMaxAggregateInputType = {
    userId?: true
    foodId?: true
    quantity?: true
  }

  export type UserInventoryCountAggregateInputType = {
    userId?: true
    foodId?: true
    quantity?: true
    _all?: true
  }

  export type UserInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInventory to aggregate.
     */
    where?: UserInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInventories to fetch.
     */
    orderBy?: UserInventoryOrderByWithRelationInput | UserInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInventories
    **/
    _count?: true | UserInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInventoryMaxAggregateInputType
  }

  export type GetUserInventoryAggregateType<T extends UserInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInventory[P]>
      : GetScalarType<T[P], AggregateUserInventory[P]>
  }




  export type UserInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInventoryWhereInput
    orderBy?: UserInventoryOrderByWithAggregationInput | UserInventoryOrderByWithAggregationInput[]
    by: UserInventoryScalarFieldEnum[] | UserInventoryScalarFieldEnum
    having?: UserInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInventoryCountAggregateInputType | true
    _avg?: UserInventoryAvgAggregateInputType
    _sum?: UserInventorySumAggregateInputType
    _min?: UserInventoryMinAggregateInputType
    _max?: UserInventoryMaxAggregateInputType
  }

  export type UserInventoryGroupByOutputType = {
    userId: string
    foodId: string
    quantity: number
    _count: UserInventoryCountAggregateOutputType | null
    _avg: UserInventoryAvgAggregateOutputType | null
    _sum: UserInventorySumAggregateOutputType | null
    _min: UserInventoryMinAggregateOutputType | null
    _max: UserInventoryMaxAggregateOutputType | null
  }

  type GetUserInventoryGroupByPayload<T extends UserInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserInventoryGroupByOutputType[P]>
        }
      >
    >


  export type UserInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    foodId?: boolean
    quantity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInventory"]>

  export type UserInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    foodId?: boolean
    quantity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInventory"]>

  export type UserInventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    foodId?: boolean
    quantity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInventory"]>

  export type UserInventorySelectScalar = {
    userId?: boolean
    foodId?: boolean
    quantity?: boolean
  }

  export type UserInventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "foodId" | "quantity", ExtArgs["result"]["userInventory"]>
  export type UserInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }
  export type UserInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }
  export type UserInventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
  }

  export type $UserInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInventory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      food: Prisma.$FoodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      foodId: string
      quantity: number
    }, ExtArgs["result"]["userInventory"]>
    composites: {}
  }

  type UserInventoryGetPayload<S extends boolean | null | undefined | UserInventoryDefaultArgs> = $Result.GetResult<Prisma.$UserInventoryPayload, S>

  type UserInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInventoryCountAggregateInputType | true
    }

  export interface UserInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInventory'], meta: { name: 'UserInventory' } }
    /**
     * Find zero or one UserInventory that matches the filter.
     * @param {UserInventoryFindUniqueArgs} args - Arguments to find a UserInventory
     * @example
     * // Get one UserInventory
     * const userInventory = await prisma.userInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInventoryFindUniqueArgs>(args: SelectSubset<T, UserInventoryFindUniqueArgs<ExtArgs>>): Prisma__UserInventoryClient<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInventoryFindUniqueOrThrowArgs} args - Arguments to find a UserInventory
     * @example
     * // Get one UserInventory
     * const userInventory = await prisma.userInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInventoryClient<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInventoryFindFirstArgs} args - Arguments to find a UserInventory
     * @example
     * // Get one UserInventory
     * const userInventory = await prisma.userInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInventoryFindFirstArgs>(args?: SelectSubset<T, UserInventoryFindFirstArgs<ExtArgs>>): Prisma__UserInventoryClient<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInventoryFindFirstOrThrowArgs} args - Arguments to find a UserInventory
     * @example
     * // Get one UserInventory
     * const userInventory = await prisma.userInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInventoryClient<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInventories
     * const userInventories = await prisma.userInventory.findMany()
     * 
     * // Get first 10 UserInventories
     * const userInventories = await prisma.userInventory.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userInventoryWithUserIdOnly = await prisma.userInventory.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserInventoryFindManyArgs>(args?: SelectSubset<T, UserInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInventory.
     * @param {UserInventoryCreateArgs} args - Arguments to create a UserInventory.
     * @example
     * // Create one UserInventory
     * const UserInventory = await prisma.userInventory.create({
     *   data: {
     *     // ... data to create a UserInventory
     *   }
     * })
     * 
     */
    create<T extends UserInventoryCreateArgs>(args: SelectSubset<T, UserInventoryCreateArgs<ExtArgs>>): Prisma__UserInventoryClient<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInventories.
     * @param {UserInventoryCreateManyArgs} args - Arguments to create many UserInventories.
     * @example
     * // Create many UserInventories
     * const userInventory = await prisma.userInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInventoryCreateManyArgs>(args?: SelectSubset<T, UserInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserInventories and returns the data saved in the database.
     * @param {UserInventoryCreateManyAndReturnArgs} args - Arguments to create many UserInventories.
     * @example
     * // Create many UserInventories
     * const userInventory = await prisma.userInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserInventories and only return the `userId`
     * const userInventoryWithUserIdOnly = await prisma.userInventory.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, UserInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserInventory.
     * @param {UserInventoryDeleteArgs} args - Arguments to delete one UserInventory.
     * @example
     * // Delete one UserInventory
     * const UserInventory = await prisma.userInventory.delete({
     *   where: {
     *     // ... filter to delete one UserInventory
     *   }
     * })
     * 
     */
    delete<T extends UserInventoryDeleteArgs>(args: SelectSubset<T, UserInventoryDeleteArgs<ExtArgs>>): Prisma__UserInventoryClient<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInventory.
     * @param {UserInventoryUpdateArgs} args - Arguments to update one UserInventory.
     * @example
     * // Update one UserInventory
     * const userInventory = await prisma.userInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInventoryUpdateArgs>(args: SelectSubset<T, UserInventoryUpdateArgs<ExtArgs>>): Prisma__UserInventoryClient<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInventories.
     * @param {UserInventoryDeleteManyArgs} args - Arguments to filter UserInventories to delete.
     * @example
     * // Delete a few UserInventories
     * const { count } = await prisma.userInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInventoryDeleteManyArgs>(args?: SelectSubset<T, UserInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInventories
     * const userInventory = await prisma.userInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInventoryUpdateManyArgs>(args: SelectSubset<T, UserInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInventories and returns the data updated in the database.
     * @param {UserInventoryUpdateManyAndReturnArgs} args - Arguments to update many UserInventories.
     * @example
     * // Update many UserInventories
     * const userInventory = await prisma.userInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserInventories and only return the `userId`
     * const userInventoryWithUserIdOnly = await prisma.userInventory.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserInventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, UserInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserInventory.
     * @param {UserInventoryUpsertArgs} args - Arguments to update or create a UserInventory.
     * @example
     * // Update or create a UserInventory
     * const userInventory = await prisma.userInventory.upsert({
     *   create: {
     *     // ... data to create a UserInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInventory we want to update
     *   }
     * })
     */
    upsert<T extends UserInventoryUpsertArgs>(args: SelectSubset<T, UserInventoryUpsertArgs<ExtArgs>>): Prisma__UserInventoryClient<$Result.GetResult<Prisma.$UserInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInventoryCountArgs} args - Arguments to filter UserInventories to count.
     * @example
     * // Count the number of UserInventories
     * const count = await prisma.userInventory.count({
     *   where: {
     *     // ... the filter for the UserInventories we want to count
     *   }
     * })
    **/
    count<T extends UserInventoryCountArgs>(
      args?: Subset<T, UserInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserInventoryAggregateArgs>(args: Subset<T, UserInventoryAggregateArgs>): Prisma.PrismaPromise<GetUserInventoryAggregateType<T>>

    /**
     * Group by UserInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInventoryGroupByArgs['orderBy'] }
        : { orderBy?: UserInventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInventory model
   */
  readonly fields: UserInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserInventory model
   */
  interface UserInventoryFieldRefs {
    readonly userId: FieldRef<"UserInventory", 'String'>
    readonly foodId: FieldRef<"UserInventory", 'String'>
    readonly quantity: FieldRef<"UserInventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserInventory findUnique
   */
  export type UserInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
    /**
     * Filter, which UserInventory to fetch.
     */
    where: UserInventoryWhereUniqueInput
  }

  /**
   * UserInventory findUniqueOrThrow
   */
  export type UserInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
    /**
     * Filter, which UserInventory to fetch.
     */
    where: UserInventoryWhereUniqueInput
  }

  /**
   * UserInventory findFirst
   */
  export type UserInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
    /**
     * Filter, which UserInventory to fetch.
     */
    where?: UserInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInventories to fetch.
     */
    orderBy?: UserInventoryOrderByWithRelationInput | UserInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInventories.
     */
    cursor?: UserInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInventories.
     */
    distinct?: UserInventoryScalarFieldEnum | UserInventoryScalarFieldEnum[]
  }

  /**
   * UserInventory findFirstOrThrow
   */
  export type UserInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
    /**
     * Filter, which UserInventory to fetch.
     */
    where?: UserInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInventories to fetch.
     */
    orderBy?: UserInventoryOrderByWithRelationInput | UserInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInventories.
     */
    cursor?: UserInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInventories.
     */
    distinct?: UserInventoryScalarFieldEnum | UserInventoryScalarFieldEnum[]
  }

  /**
   * UserInventory findMany
   */
  export type UserInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
    /**
     * Filter, which UserInventories to fetch.
     */
    where?: UserInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInventories to fetch.
     */
    orderBy?: UserInventoryOrderByWithRelationInput | UserInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInventories.
     */
    cursor?: UserInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInventories.
     */
    skip?: number
    distinct?: UserInventoryScalarFieldEnum | UserInventoryScalarFieldEnum[]
  }

  /**
   * UserInventory create
   */
  export type UserInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInventory.
     */
    data: XOR<UserInventoryCreateInput, UserInventoryUncheckedCreateInput>
  }

  /**
   * UserInventory createMany
   */
  export type UserInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInventories.
     */
    data: UserInventoryCreateManyInput | UserInventoryCreateManyInput[]
  }

  /**
   * UserInventory createManyAndReturn
   */
  export type UserInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * The data used to create many UserInventories.
     */
    data: UserInventoryCreateManyInput | UserInventoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserInventory update
   */
  export type UserInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInventory.
     */
    data: XOR<UserInventoryUpdateInput, UserInventoryUncheckedUpdateInput>
    /**
     * Choose, which UserInventory to update.
     */
    where: UserInventoryWhereUniqueInput
  }

  /**
   * UserInventory updateMany
   */
  export type UserInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInventories.
     */
    data: XOR<UserInventoryUpdateManyMutationInput, UserInventoryUncheckedUpdateManyInput>
    /**
     * Filter which UserInventories to update
     */
    where?: UserInventoryWhereInput
    /**
     * Limit how many UserInventories to update.
     */
    limit?: number
  }

  /**
   * UserInventory updateManyAndReturn
   */
  export type UserInventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * The data used to update UserInventories.
     */
    data: XOR<UserInventoryUpdateManyMutationInput, UserInventoryUncheckedUpdateManyInput>
    /**
     * Filter which UserInventories to update
     */
    where?: UserInventoryWhereInput
    /**
     * Limit how many UserInventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserInventory upsert
   */
  export type UserInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInventory to update in case it exists.
     */
    where: UserInventoryWhereUniqueInput
    /**
     * In case the UserInventory found by the `where` argument doesn't exist, create a new UserInventory with this data.
     */
    create: XOR<UserInventoryCreateInput, UserInventoryUncheckedCreateInput>
    /**
     * In case the UserInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInventoryUpdateInput, UserInventoryUncheckedUpdateInput>
  }

  /**
   * UserInventory delete
   */
  export type UserInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
    /**
     * Filter which UserInventory to delete.
     */
    where: UserInventoryWhereUniqueInput
  }

  /**
   * UserInventory deleteMany
   */
  export type UserInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInventories to delete
     */
    where?: UserInventoryWhereInput
    /**
     * Limit how many UserInventories to delete.
     */
    limit?: number
  }

  /**
   * UserInventory without action
   */
  export type UserInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInventory
     */
    select?: UserInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInventory
     */
    omit?: UserInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInventoryInclude<ExtArgs> | null
  }


  /**
   * Model UserHouse
   */

  export type AggregateUserHouse = {
    _count: UserHouseCountAggregateOutputType | null
    _min: UserHouseMinAggregateOutputType | null
    _max: UserHouseMaxAggregateOutputType | null
  }

  export type UserHouseMinAggregateOutputType = {
    userId: string | null
    houseType: $Enums.HouseType | null
    boughtAt: Date | null
  }

  export type UserHouseMaxAggregateOutputType = {
    userId: string | null
    houseType: $Enums.HouseType | null
    boughtAt: Date | null
  }

  export type UserHouseCountAggregateOutputType = {
    userId: number
    houseType: number
    boughtAt: number
    _all: number
  }


  export type UserHouseMinAggregateInputType = {
    userId?: true
    houseType?: true
    boughtAt?: true
  }

  export type UserHouseMaxAggregateInputType = {
    userId?: true
    houseType?: true
    boughtAt?: true
  }

  export type UserHouseCountAggregateInputType = {
    userId?: true
    houseType?: true
    boughtAt?: true
    _all?: true
  }

  export type UserHouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHouse to aggregate.
     */
    where?: UserHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHouses to fetch.
     */
    orderBy?: UserHouseOrderByWithRelationInput | UserHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserHouses
    **/
    _count?: true | UserHouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserHouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserHouseMaxAggregateInputType
  }

  export type GetUserHouseAggregateType<T extends UserHouseAggregateArgs> = {
        [P in keyof T & keyof AggregateUserHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserHouse[P]>
      : GetScalarType<T[P], AggregateUserHouse[P]>
  }




  export type UserHouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHouseWhereInput
    orderBy?: UserHouseOrderByWithAggregationInput | UserHouseOrderByWithAggregationInput[]
    by: UserHouseScalarFieldEnum[] | UserHouseScalarFieldEnum
    having?: UserHouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserHouseCountAggregateInputType | true
    _min?: UserHouseMinAggregateInputType
    _max?: UserHouseMaxAggregateInputType
  }

  export type UserHouseGroupByOutputType = {
    userId: string
    houseType: $Enums.HouseType
    boughtAt: Date
    _count: UserHouseCountAggregateOutputType | null
    _min: UserHouseMinAggregateOutputType | null
    _max: UserHouseMaxAggregateOutputType | null
  }

  type GetUserHouseGroupByPayload<T extends UserHouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserHouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserHouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserHouseGroupByOutputType[P]>
            : GetScalarType<T[P], UserHouseGroupByOutputType[P]>
        }
      >
    >


  export type UserHouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    houseType?: boolean
    boughtAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHouse"]>

  export type UserHouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    houseType?: boolean
    boughtAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHouse"]>

  export type UserHouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    houseType?: boolean
    boughtAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHouse"]>

  export type UserHouseSelectScalar = {
    userId?: boolean
    houseType?: boolean
    boughtAt?: boolean
  }

  export type UserHouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "houseType" | "boughtAt", ExtArgs["result"]["userHouse"]>
  export type UserHouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserHouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserHouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserHousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserHouse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      houseType: $Enums.HouseType
      boughtAt: Date
    }, ExtArgs["result"]["userHouse"]>
    composites: {}
  }

  type UserHouseGetPayload<S extends boolean | null | undefined | UserHouseDefaultArgs> = $Result.GetResult<Prisma.$UserHousePayload, S>

  type UserHouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserHouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserHouseCountAggregateInputType | true
    }

  export interface UserHouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserHouse'], meta: { name: 'UserHouse' } }
    /**
     * Find zero or one UserHouse that matches the filter.
     * @param {UserHouseFindUniqueArgs} args - Arguments to find a UserHouse
     * @example
     * // Get one UserHouse
     * const userHouse = await prisma.userHouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserHouseFindUniqueArgs>(args: SelectSubset<T, UserHouseFindUniqueArgs<ExtArgs>>): Prisma__UserHouseClient<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserHouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserHouseFindUniqueOrThrowArgs} args - Arguments to find a UserHouse
     * @example
     * // Get one UserHouse
     * const userHouse = await prisma.userHouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserHouseFindUniqueOrThrowArgs>(args: SelectSubset<T, UserHouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserHouseClient<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHouseFindFirstArgs} args - Arguments to find a UserHouse
     * @example
     * // Get one UserHouse
     * const userHouse = await prisma.userHouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserHouseFindFirstArgs>(args?: SelectSubset<T, UserHouseFindFirstArgs<ExtArgs>>): Prisma__UserHouseClient<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHouseFindFirstOrThrowArgs} args - Arguments to find a UserHouse
     * @example
     * // Get one UserHouse
     * const userHouse = await prisma.userHouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserHouseFindFirstOrThrowArgs>(args?: SelectSubset<T, UserHouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserHouseClient<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserHouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserHouses
     * const userHouses = await prisma.userHouse.findMany()
     * 
     * // Get first 10 UserHouses
     * const userHouses = await prisma.userHouse.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userHouseWithUserIdOnly = await prisma.userHouse.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserHouseFindManyArgs>(args?: SelectSubset<T, UserHouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserHouse.
     * @param {UserHouseCreateArgs} args - Arguments to create a UserHouse.
     * @example
     * // Create one UserHouse
     * const UserHouse = await prisma.userHouse.create({
     *   data: {
     *     // ... data to create a UserHouse
     *   }
     * })
     * 
     */
    create<T extends UserHouseCreateArgs>(args: SelectSubset<T, UserHouseCreateArgs<ExtArgs>>): Prisma__UserHouseClient<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserHouses.
     * @param {UserHouseCreateManyArgs} args - Arguments to create many UserHouses.
     * @example
     * // Create many UserHouses
     * const userHouse = await prisma.userHouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserHouseCreateManyArgs>(args?: SelectSubset<T, UserHouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserHouses and returns the data saved in the database.
     * @param {UserHouseCreateManyAndReturnArgs} args - Arguments to create many UserHouses.
     * @example
     * // Create many UserHouses
     * const userHouse = await prisma.userHouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserHouses and only return the `userId`
     * const userHouseWithUserIdOnly = await prisma.userHouse.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserHouseCreateManyAndReturnArgs>(args?: SelectSubset<T, UserHouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserHouse.
     * @param {UserHouseDeleteArgs} args - Arguments to delete one UserHouse.
     * @example
     * // Delete one UserHouse
     * const UserHouse = await prisma.userHouse.delete({
     *   where: {
     *     // ... filter to delete one UserHouse
     *   }
     * })
     * 
     */
    delete<T extends UserHouseDeleteArgs>(args: SelectSubset<T, UserHouseDeleteArgs<ExtArgs>>): Prisma__UserHouseClient<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserHouse.
     * @param {UserHouseUpdateArgs} args - Arguments to update one UserHouse.
     * @example
     * // Update one UserHouse
     * const userHouse = await prisma.userHouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserHouseUpdateArgs>(args: SelectSubset<T, UserHouseUpdateArgs<ExtArgs>>): Prisma__UserHouseClient<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserHouses.
     * @param {UserHouseDeleteManyArgs} args - Arguments to filter UserHouses to delete.
     * @example
     * // Delete a few UserHouses
     * const { count } = await prisma.userHouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserHouseDeleteManyArgs>(args?: SelectSubset<T, UserHouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserHouses
     * const userHouse = await prisma.userHouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserHouseUpdateManyArgs>(args: SelectSubset<T, UserHouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHouses and returns the data updated in the database.
     * @param {UserHouseUpdateManyAndReturnArgs} args - Arguments to update many UserHouses.
     * @example
     * // Update many UserHouses
     * const userHouse = await prisma.userHouse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserHouses and only return the `userId`
     * const userHouseWithUserIdOnly = await prisma.userHouse.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserHouseUpdateManyAndReturnArgs>(args: SelectSubset<T, UserHouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserHouse.
     * @param {UserHouseUpsertArgs} args - Arguments to update or create a UserHouse.
     * @example
     * // Update or create a UserHouse
     * const userHouse = await prisma.userHouse.upsert({
     *   create: {
     *     // ... data to create a UserHouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserHouse we want to update
     *   }
     * })
     */
    upsert<T extends UserHouseUpsertArgs>(args: SelectSubset<T, UserHouseUpsertArgs<ExtArgs>>): Prisma__UserHouseClient<$Result.GetResult<Prisma.$UserHousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHouseCountArgs} args - Arguments to filter UserHouses to count.
     * @example
     * // Count the number of UserHouses
     * const count = await prisma.userHouse.count({
     *   where: {
     *     // ... the filter for the UserHouses we want to count
     *   }
     * })
    **/
    count<T extends UserHouseCountArgs>(
      args?: Subset<T, UserHouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserHouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserHouseAggregateArgs>(args: Subset<T, UserHouseAggregateArgs>): Prisma.PrismaPromise<GetUserHouseAggregateType<T>>

    /**
     * Group by UserHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserHouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserHouseGroupByArgs['orderBy'] }
        : { orderBy?: UserHouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserHouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserHouse model
   */
  readonly fields: UserHouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserHouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserHouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserHouse model
   */
  interface UserHouseFieldRefs {
    readonly userId: FieldRef<"UserHouse", 'String'>
    readonly houseType: FieldRef<"UserHouse", 'HouseType'>
    readonly boughtAt: FieldRef<"UserHouse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserHouse findUnique
   */
  export type UserHouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseInclude<ExtArgs> | null
    /**
     * Filter, which UserHouse to fetch.
     */
    where: UserHouseWhereUniqueInput
  }

  /**
   * UserHouse findUniqueOrThrow
   */
  export type UserHouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseInclude<ExtArgs> | null
    /**
     * Filter, which UserHouse to fetch.
     */
    where: UserHouseWhereUniqueInput
  }

  /**
   * UserHouse findFirst
   */
  export type UserHouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseInclude<ExtArgs> | null
    /**
     * Filter, which UserHouse to fetch.
     */
    where?: UserHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHouses to fetch.
     */
    orderBy?: UserHouseOrderByWithRelationInput | UserHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHouses.
     */
    cursor?: UserHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHouses.
     */
    distinct?: UserHouseScalarFieldEnum | UserHouseScalarFieldEnum[]
  }

  /**
   * UserHouse findFirstOrThrow
   */
  export type UserHouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseInclude<ExtArgs> | null
    /**
     * Filter, which UserHouse to fetch.
     */
    where?: UserHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHouses to fetch.
     */
    orderBy?: UserHouseOrderByWithRelationInput | UserHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHouses.
     */
    cursor?: UserHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHouses.
     */
    distinct?: UserHouseScalarFieldEnum | UserHouseScalarFieldEnum[]
  }

  /**
   * UserHouse findMany
   */
  export type UserHouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseInclude<ExtArgs> | null
    /**
     * Filter, which UserHouses to fetch.
     */
    where?: UserHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHouses to fetch.
     */
    orderBy?: UserHouseOrderByWithRelationInput | UserHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserHouses.
     */
    cursor?: UserHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHouses.
     */
    skip?: number
    distinct?: UserHouseScalarFieldEnum | UserHouseScalarFieldEnum[]
  }

  /**
   * UserHouse create
   */
  export type UserHouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseInclude<ExtArgs> | null
    /**
     * The data needed to create a UserHouse.
     */
    data: XOR<UserHouseCreateInput, UserHouseUncheckedCreateInput>
  }

  /**
   * UserHouse createMany
   */
  export type UserHouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserHouses.
     */
    data: UserHouseCreateManyInput | UserHouseCreateManyInput[]
  }

  /**
   * UserHouse createManyAndReturn
   */
  export type UserHouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * The data used to create many UserHouses.
     */
    data: UserHouseCreateManyInput | UserHouseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserHouse update
   */
  export type UserHouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseInclude<ExtArgs> | null
    /**
     * The data needed to update a UserHouse.
     */
    data: XOR<UserHouseUpdateInput, UserHouseUncheckedUpdateInput>
    /**
     * Choose, which UserHouse to update.
     */
    where: UserHouseWhereUniqueInput
  }

  /**
   * UserHouse updateMany
   */
  export type UserHouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserHouses.
     */
    data: XOR<UserHouseUpdateManyMutationInput, UserHouseUncheckedUpdateManyInput>
    /**
     * Filter which UserHouses to update
     */
    where?: UserHouseWhereInput
    /**
     * Limit how many UserHouses to update.
     */
    limit?: number
  }

  /**
   * UserHouse updateManyAndReturn
   */
  export type UserHouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * The data used to update UserHouses.
     */
    data: XOR<UserHouseUpdateManyMutationInput, UserHouseUncheckedUpdateManyInput>
    /**
     * Filter which UserHouses to update
     */
    where?: UserHouseWhereInput
    /**
     * Limit how many UserHouses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserHouse upsert
   */
  export type UserHouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseInclude<ExtArgs> | null
    /**
     * The filter to search for the UserHouse to update in case it exists.
     */
    where: UserHouseWhereUniqueInput
    /**
     * In case the UserHouse found by the `where` argument doesn't exist, create a new UserHouse with this data.
     */
    create: XOR<UserHouseCreateInput, UserHouseUncheckedCreateInput>
    /**
     * In case the UserHouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserHouseUpdateInput, UserHouseUncheckedUpdateInput>
  }

  /**
   * UserHouse delete
   */
  export type UserHouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseInclude<ExtArgs> | null
    /**
     * Filter which UserHouse to delete.
     */
    where: UserHouseWhereUniqueInput
  }

  /**
   * UserHouse deleteMany
   */
  export type UserHouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHouses to delete
     */
    where?: UserHouseWhereInput
    /**
     * Limit how many UserHouses to delete.
     */
    limit?: number
  }

  /**
   * UserHouse without action
   */
  export type UserHouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHouse
     */
    select?: UserHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHouse
     */
    omit?: UserHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHouseInclude<ExtArgs> | null
  }


  /**
   * Model GuildConfig
   */

  export type AggregateGuildConfig = {
    _count: GuildConfigCountAggregateOutputType | null
    _min: GuildConfigMinAggregateOutputType | null
    _max: GuildConfigMaxAggregateOutputType | null
  }

  export type GuildConfigMinAggregateOutputType = {
    guildId: string | null
    prefix: string | null
    announcementChannelId: string | null
    lastAnnouncedVersion: string | null
  }

  export type GuildConfigMaxAggregateOutputType = {
    guildId: string | null
    prefix: string | null
    announcementChannelId: string | null
    lastAnnouncedVersion: string | null
  }

  export type GuildConfigCountAggregateOutputType = {
    guildId: number
    prefix: number
    announcementChannelId: number
    lastAnnouncedVersion: number
    _all: number
  }


  export type GuildConfigMinAggregateInputType = {
    guildId?: true
    prefix?: true
    announcementChannelId?: true
    lastAnnouncedVersion?: true
  }

  export type GuildConfigMaxAggregateInputType = {
    guildId?: true
    prefix?: true
    announcementChannelId?: true
    lastAnnouncedVersion?: true
  }

  export type GuildConfigCountAggregateInputType = {
    guildId?: true
    prefix?: true
    announcementChannelId?: true
    lastAnnouncedVersion?: true
    _all?: true
  }

  export type GuildConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildConfig to aggregate.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildConfigs
    **/
    _count?: true | GuildConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildConfigMaxAggregateInputType
  }

  export type GetGuildConfigAggregateType<T extends GuildConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildConfig[P]>
      : GetScalarType<T[P], AggregateGuildConfig[P]>
  }




  export type GuildConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildConfigWhereInput
    orderBy?: GuildConfigOrderByWithAggregationInput | GuildConfigOrderByWithAggregationInput[]
    by: GuildConfigScalarFieldEnum[] | GuildConfigScalarFieldEnum
    having?: GuildConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildConfigCountAggregateInputType | true
    _min?: GuildConfigMinAggregateInputType
    _max?: GuildConfigMaxAggregateInputType
  }

  export type GuildConfigGroupByOutputType = {
    guildId: string
    prefix: string
    announcementChannelId: string | null
    lastAnnouncedVersion: string | null
    _count: GuildConfigCountAggregateOutputType | null
    _min: GuildConfigMinAggregateOutputType | null
    _max: GuildConfigMaxAggregateOutputType | null
  }

  type GetGuildConfigGroupByPayload<T extends GuildConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildConfigGroupByOutputType[P]>
            : GetScalarType<T[P], GuildConfigGroupByOutputType[P]>
        }
      >
    >


  export type GuildConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    prefix?: boolean
    announcementChannelId?: boolean
    lastAnnouncedVersion?: boolean
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    prefix?: boolean
    announcementChannelId?: boolean
    lastAnnouncedVersion?: boolean
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    prefix?: boolean
    announcementChannelId?: boolean
    lastAnnouncedVersion?: boolean
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectScalar = {
    guildId?: boolean
    prefix?: boolean
    announcementChannelId?: boolean
    lastAnnouncedVersion?: boolean
  }

  export type GuildConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"guildId" | "prefix" | "announcementChannelId" | "lastAnnouncedVersion", ExtArgs["result"]["guildConfig"]>

  export type $GuildConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      guildId: string
      prefix: string
      announcementChannelId: string | null
      lastAnnouncedVersion: string | null
    }, ExtArgs["result"]["guildConfig"]>
    composites: {}
  }

  type GuildConfigGetPayload<S extends boolean | null | undefined | GuildConfigDefaultArgs> = $Result.GetResult<Prisma.$GuildConfigPayload, S>

  type GuildConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildConfigCountAggregateInputType | true
    }

  export interface GuildConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildConfig'], meta: { name: 'GuildConfig' } }
    /**
     * Find zero or one GuildConfig that matches the filter.
     * @param {GuildConfigFindUniqueArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildConfigFindUniqueArgs>(args: SelectSubset<T, GuildConfigFindUniqueArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuildConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildConfigFindUniqueOrThrowArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindFirstArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildConfigFindFirstArgs>(args?: SelectSubset<T, GuildConfigFindFirstArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindFirstOrThrowArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuildConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildConfigs
     * const guildConfigs = await prisma.guildConfig.findMany()
     * 
     * // Get first 10 GuildConfigs
     * const guildConfigs = await prisma.guildConfig.findMany({ take: 10 })
     * 
     * // Only select the `guildId`
     * const guildConfigWithGuildIdOnly = await prisma.guildConfig.findMany({ select: { guildId: true } })
     * 
     */
    findMany<T extends GuildConfigFindManyArgs>(args?: SelectSubset<T, GuildConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuildConfig.
     * @param {GuildConfigCreateArgs} args - Arguments to create a GuildConfig.
     * @example
     * // Create one GuildConfig
     * const GuildConfig = await prisma.guildConfig.create({
     *   data: {
     *     // ... data to create a GuildConfig
     *   }
     * })
     * 
     */
    create<T extends GuildConfigCreateArgs>(args: SelectSubset<T, GuildConfigCreateArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuildConfigs.
     * @param {GuildConfigCreateManyArgs} args - Arguments to create many GuildConfigs.
     * @example
     * // Create many GuildConfigs
     * const guildConfig = await prisma.guildConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildConfigCreateManyArgs>(args?: SelectSubset<T, GuildConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuildConfigs and returns the data saved in the database.
     * @param {GuildConfigCreateManyAndReturnArgs} args - Arguments to create many GuildConfigs.
     * @example
     * // Create many GuildConfigs
     * const guildConfig = await prisma.guildConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuildConfigs and only return the `guildId`
     * const guildConfigWithGuildIdOnly = await prisma.guildConfig.createManyAndReturn({
     *   select: { guildId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuildConfig.
     * @param {GuildConfigDeleteArgs} args - Arguments to delete one GuildConfig.
     * @example
     * // Delete one GuildConfig
     * const GuildConfig = await prisma.guildConfig.delete({
     *   where: {
     *     // ... filter to delete one GuildConfig
     *   }
     * })
     * 
     */
    delete<T extends GuildConfigDeleteArgs>(args: SelectSubset<T, GuildConfigDeleteArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuildConfig.
     * @param {GuildConfigUpdateArgs} args - Arguments to update one GuildConfig.
     * @example
     * // Update one GuildConfig
     * const guildConfig = await prisma.guildConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildConfigUpdateArgs>(args: SelectSubset<T, GuildConfigUpdateArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuildConfigs.
     * @param {GuildConfigDeleteManyArgs} args - Arguments to filter GuildConfigs to delete.
     * @example
     * // Delete a few GuildConfigs
     * const { count } = await prisma.guildConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildConfigDeleteManyArgs>(args?: SelectSubset<T, GuildConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildConfigs
     * const guildConfig = await prisma.guildConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildConfigUpdateManyArgs>(args: SelectSubset<T, GuildConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildConfigs and returns the data updated in the database.
     * @param {GuildConfigUpdateManyAndReturnArgs} args - Arguments to update many GuildConfigs.
     * @example
     * // Update many GuildConfigs
     * const guildConfig = await prisma.guildConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuildConfigs and only return the `guildId`
     * const guildConfigWithGuildIdOnly = await prisma.guildConfig.updateManyAndReturn({
     *   select: { guildId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuildConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuildConfig.
     * @param {GuildConfigUpsertArgs} args - Arguments to update or create a GuildConfig.
     * @example
     * // Update or create a GuildConfig
     * const guildConfig = await prisma.guildConfig.upsert({
     *   create: {
     *     // ... data to create a GuildConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildConfig we want to update
     *   }
     * })
     */
    upsert<T extends GuildConfigUpsertArgs>(args: SelectSubset<T, GuildConfigUpsertArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuildConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigCountArgs} args - Arguments to filter GuildConfigs to count.
     * @example
     * // Count the number of GuildConfigs
     * const count = await prisma.guildConfig.count({
     *   where: {
     *     // ... the filter for the GuildConfigs we want to count
     *   }
     * })
    **/
    count<T extends GuildConfigCountArgs>(
      args?: Subset<T, GuildConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildConfigAggregateArgs>(args: Subset<T, GuildConfigAggregateArgs>): Prisma.PrismaPromise<GetGuildConfigAggregateType<T>>

    /**
     * Group by GuildConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildConfigGroupByArgs['orderBy'] }
        : { orderBy?: GuildConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildConfig model
   */
  readonly fields: GuildConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuildConfig model
   */
  interface GuildConfigFieldRefs {
    readonly guildId: FieldRef<"GuildConfig", 'String'>
    readonly prefix: FieldRef<"GuildConfig", 'String'>
    readonly announcementChannelId: FieldRef<"GuildConfig", 'String'>
    readonly lastAnnouncedVersion: FieldRef<"GuildConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GuildConfig findUnique
   */
  export type GuildConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig findUniqueOrThrow
   */
  export type GuildConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig findFirst
   */
  export type GuildConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildConfigs.
     */
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig findFirstOrThrow
   */
  export type GuildConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildConfigs.
     */
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig findMany
   */
  export type GuildConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter, which GuildConfigs to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig create
   */
  export type GuildConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a GuildConfig.
     */
    data: XOR<GuildConfigCreateInput, GuildConfigUncheckedCreateInput>
  }

  /**
   * GuildConfig createMany
   */
  export type GuildConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildConfigs.
     */
    data: GuildConfigCreateManyInput | GuildConfigCreateManyInput[]
  }

  /**
   * GuildConfig createManyAndReturn
   */
  export type GuildConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data used to create many GuildConfigs.
     */
    data: GuildConfigCreateManyInput | GuildConfigCreateManyInput[]
  }

  /**
   * GuildConfig update
   */
  export type GuildConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a GuildConfig.
     */
    data: XOR<GuildConfigUpdateInput, GuildConfigUncheckedUpdateInput>
    /**
     * Choose, which GuildConfig to update.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig updateMany
   */
  export type GuildConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildConfigs.
     */
    data: XOR<GuildConfigUpdateManyMutationInput, GuildConfigUncheckedUpdateManyInput>
    /**
     * Filter which GuildConfigs to update
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to update.
     */
    limit?: number
  }

  /**
   * GuildConfig updateManyAndReturn
   */
  export type GuildConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data used to update GuildConfigs.
     */
    data: XOR<GuildConfigUpdateManyMutationInput, GuildConfigUncheckedUpdateManyInput>
    /**
     * Filter which GuildConfigs to update
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to update.
     */
    limit?: number
  }

  /**
   * GuildConfig upsert
   */
  export type GuildConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the GuildConfig to update in case it exists.
     */
    where: GuildConfigWhereUniqueInput
    /**
     * In case the GuildConfig found by the `where` argument doesn't exist, create a new GuildConfig with this data.
     */
    create: XOR<GuildConfigCreateInput, GuildConfigUncheckedCreateInput>
    /**
     * In case the GuildConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildConfigUpdateInput, GuildConfigUncheckedUpdateInput>
  }

  /**
   * GuildConfig delete
   */
  export type GuildConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Filter which GuildConfig to delete.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig deleteMany
   */
  export type GuildConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildConfigs to delete
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to delete.
     */
    limit?: number
  }

  /**
   * GuildConfig without action
   */
  export type GuildConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    discordId: 'discordId',
    level: 'level',
    experience: 'experience',
    gold: 'gold',
    activeHouse: 'activeHouse',
    ownedHouseSlots: 'ownedHouseSlots',
    lastDailyAt: 'lastDailyAt',
    dailyStreak: 'dailyStreak',
    gamesPlayed: 'gamesPlayed',
    gamesToday: 'gamesToday',
    lastGameResetAt: 'lastGameResetAt',
    feedCount: 'feedCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    petCode: 'petCode',
    name: 'name',
    species: 'species',
    variant: 'variant',
    level: 'level',
    experience: 'experience',
    affection: 'affection',
    comfort: 'comfort',
    mood: 'mood',
    dailyPetCount: 'dailyPetCount',
    lastPetResetAt: 'lastPetResetAt',
    lastFedAt: 'lastFedAt',
    lastPettedAt: 'lastPettedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    description: 'description',
    price: 'price',
    unlockLevel: 'unlockLevel',
    petExperience: 'petExperience',
    ownerExperience: 'ownerExperience',
    comfortGain: 'comfortGain',
    preferredBy: 'preferredBy'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const UserInventoryScalarFieldEnum: {
    userId: 'userId',
    foodId: 'foodId',
    quantity: 'quantity'
  };

  export type UserInventoryScalarFieldEnum = (typeof UserInventoryScalarFieldEnum)[keyof typeof UserInventoryScalarFieldEnum]


  export const UserHouseScalarFieldEnum: {
    userId: 'userId',
    houseType: 'houseType',
    boughtAt: 'boughtAt'
  };

  export type UserHouseScalarFieldEnum = (typeof UserHouseScalarFieldEnum)[keyof typeof UserHouseScalarFieldEnum]


  export const GuildConfigScalarFieldEnum: {
    guildId: 'guildId',
    prefix: 'prefix',
    announcementChannelId: 'announcementChannelId',
    lastAnnouncedVersion: 'lastAnnouncedVersion'
  };

  export type GuildConfigScalarFieldEnum = (typeof GuildConfigScalarFieldEnum)[keyof typeof GuildConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'HouseType'
   */
  export type EnumHouseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HouseType'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'PetSpecies'
   */
  export type EnumPetSpeciesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetSpecies'>
    


  /**
   * Reference to a field of type 'Mood'
   */
  export type EnumMoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mood'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    discordId?: StringFilter<"User"> | string
    level?: IntFilter<"User"> | number
    experience?: IntFilter<"User"> | number
    gold?: IntFilter<"User"> | number
    activeHouse?: EnumHouseTypeFilter<"User"> | $Enums.HouseType
    ownedHouseSlots?: IntFilter<"User"> | number
    lastDailyAt?: DateTimeNullableFilter<"User"> | Date | string | null
    dailyStreak?: IntFilter<"User"> | number
    gamesPlayed?: IntFilter<"User"> | number
    gamesToday?: IntFilter<"User"> | number
    lastGameResetAt?: DateTimeFilter<"User"> | Date | string
    feedCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pets?: PetListRelationFilter
    inventory?: UserInventoryListRelationFilter
    houses?: UserHouseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    discordId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    gold?: SortOrder
    activeHouse?: SortOrder
    ownedHouseSlots?: SortOrder
    lastDailyAt?: SortOrderInput | SortOrder
    dailyStreak?: SortOrder
    gamesPlayed?: SortOrder
    gamesToday?: SortOrder
    lastGameResetAt?: SortOrder
    feedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pets?: PetOrderByRelationAggregateInput
    inventory?: UserInventoryOrderByRelationAggregateInput
    houses?: UserHouseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    discordId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    level?: IntFilter<"User"> | number
    experience?: IntFilter<"User"> | number
    gold?: IntFilter<"User"> | number
    activeHouse?: EnumHouseTypeFilter<"User"> | $Enums.HouseType
    ownedHouseSlots?: IntFilter<"User"> | number
    lastDailyAt?: DateTimeNullableFilter<"User"> | Date | string | null
    dailyStreak?: IntFilter<"User"> | number
    gamesPlayed?: IntFilter<"User"> | number
    gamesToday?: IntFilter<"User"> | number
    lastGameResetAt?: DateTimeFilter<"User"> | Date | string
    feedCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pets?: PetListRelationFilter
    inventory?: UserInventoryListRelationFilter
    houses?: UserHouseListRelationFilter
  }, "id" | "discordId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    discordId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    gold?: SortOrder
    activeHouse?: SortOrder
    ownedHouseSlots?: SortOrder
    lastDailyAt?: SortOrderInput | SortOrder
    dailyStreak?: SortOrder
    gamesPlayed?: SortOrder
    gamesToday?: SortOrder
    lastGameResetAt?: SortOrder
    feedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    discordId?: StringWithAggregatesFilter<"User"> | string
    level?: IntWithAggregatesFilter<"User"> | number
    experience?: IntWithAggregatesFilter<"User"> | number
    gold?: IntWithAggregatesFilter<"User"> | number
    activeHouse?: EnumHouseTypeWithAggregatesFilter<"User"> | $Enums.HouseType
    ownedHouseSlots?: IntWithAggregatesFilter<"User"> | number
    lastDailyAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    dailyStreak?: IntWithAggregatesFilter<"User"> | number
    gamesPlayed?: IntWithAggregatesFilter<"User"> | number
    gamesToday?: IntWithAggregatesFilter<"User"> | number
    lastGameResetAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    feedCount?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: StringFilter<"Pet"> | string
    ownerId?: StringFilter<"Pet"> | string
    petCode?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    species?: EnumPetSpeciesFilter<"Pet"> | $Enums.PetSpecies
    variant?: StringFilter<"Pet"> | string
    level?: IntFilter<"Pet"> | number
    experience?: IntFilter<"Pet"> | number
    affection?: IntFilter<"Pet"> | number
    comfort?: IntFilter<"Pet"> | number
    mood?: EnumMoodFilter<"Pet"> | $Enums.Mood
    dailyPetCount?: IntFilter<"Pet"> | number
    lastPetResetAt?: DateTimeFilter<"Pet"> | Date | string
    lastFedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
    lastPettedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    petCode?: SortOrder
    name?: SortOrder
    species?: SortOrder
    variant?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    affection?: SortOrder
    comfort?: SortOrder
    mood?: SortOrder
    dailyPetCount?: SortOrder
    lastPetResetAt?: SortOrder
    lastFedAt?: SortOrderInput | SortOrder
    lastPettedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId_petCode?: PetOwnerIdPetCodeCompoundUniqueInput
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    ownerId?: StringFilter<"Pet"> | string
    petCode?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    species?: EnumPetSpeciesFilter<"Pet"> | $Enums.PetSpecies
    variant?: StringFilter<"Pet"> | string
    level?: IntFilter<"Pet"> | number
    experience?: IntFilter<"Pet"> | number
    affection?: IntFilter<"Pet"> | number
    comfort?: IntFilter<"Pet"> | number
    mood?: EnumMoodFilter<"Pet"> | $Enums.Mood
    dailyPetCount?: IntFilter<"Pet"> | number
    lastPetResetAt?: DateTimeFilter<"Pet"> | Date | string
    lastFedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
    lastPettedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "ownerId_petCode">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    petCode?: SortOrder
    name?: SortOrder
    species?: SortOrder
    variant?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    affection?: SortOrder
    comfort?: SortOrder
    mood?: SortOrder
    dailyPetCount?: SortOrder
    lastPetResetAt?: SortOrder
    lastFedAt?: SortOrderInput | SortOrder
    lastPettedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pet"> | string
    ownerId?: StringWithAggregatesFilter<"Pet"> | string
    petCode?: StringWithAggregatesFilter<"Pet"> | string
    name?: StringWithAggregatesFilter<"Pet"> | string
    species?: EnumPetSpeciesWithAggregatesFilter<"Pet"> | $Enums.PetSpecies
    variant?: StringWithAggregatesFilter<"Pet"> | string
    level?: IntWithAggregatesFilter<"Pet"> | number
    experience?: IntWithAggregatesFilter<"Pet"> | number
    affection?: IntWithAggregatesFilter<"Pet"> | number
    comfort?: IntWithAggregatesFilter<"Pet"> | number
    mood?: EnumMoodWithAggregatesFilter<"Pet"> | $Enums.Mood
    dailyPetCount?: IntWithAggregatesFilter<"Pet"> | number
    lastPetResetAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    lastFedAt?: DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null
    lastPettedAt?: DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: StringFilter<"Food"> | string
    name?: StringFilter<"Food"> | string
    icon?: StringFilter<"Food"> | string
    description?: StringFilter<"Food"> | string
    price?: IntFilter<"Food"> | number
    unlockLevel?: IntFilter<"Food"> | number
    petExperience?: IntFilter<"Food"> | number
    ownerExperience?: IntFilter<"Food"> | number
    comfortGain?: IntFilter<"Food"> | number
    preferredBy?: EnumPetSpeciesNullableFilter<"Food"> | $Enums.PetSpecies | null
    inventory?: UserInventoryListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unlockLevel?: SortOrder
    petExperience?: SortOrder
    ownerExperience?: SortOrder
    comfortGain?: SortOrder
    preferredBy?: SortOrderInput | SortOrder
    inventory?: UserInventoryOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    name?: StringFilter<"Food"> | string
    icon?: StringFilter<"Food"> | string
    description?: StringFilter<"Food"> | string
    price?: IntFilter<"Food"> | number
    unlockLevel?: IntFilter<"Food"> | number
    petExperience?: IntFilter<"Food"> | number
    ownerExperience?: IntFilter<"Food"> | number
    comfortGain?: IntFilter<"Food"> | number
    preferredBy?: EnumPetSpeciesNullableFilter<"Food"> | $Enums.PetSpecies | null
    inventory?: UserInventoryListRelationFilter
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unlockLevel?: SortOrder
    petExperience?: SortOrder
    ownerExperience?: SortOrder
    comfortGain?: SortOrder
    preferredBy?: SortOrderInput | SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Food"> | string
    name?: StringWithAggregatesFilter<"Food"> | string
    icon?: StringWithAggregatesFilter<"Food"> | string
    description?: StringWithAggregatesFilter<"Food"> | string
    price?: IntWithAggregatesFilter<"Food"> | number
    unlockLevel?: IntWithAggregatesFilter<"Food"> | number
    petExperience?: IntWithAggregatesFilter<"Food"> | number
    ownerExperience?: IntWithAggregatesFilter<"Food"> | number
    comfortGain?: IntWithAggregatesFilter<"Food"> | number
    preferredBy?: EnumPetSpeciesNullableWithAggregatesFilter<"Food"> | $Enums.PetSpecies | null
  }

  export type UserInventoryWhereInput = {
    AND?: UserInventoryWhereInput | UserInventoryWhereInput[]
    OR?: UserInventoryWhereInput[]
    NOT?: UserInventoryWhereInput | UserInventoryWhereInput[]
    userId?: StringFilter<"UserInventory"> | string
    foodId?: StringFilter<"UserInventory"> | string
    quantity?: IntFilter<"UserInventory"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
  }

  export type UserInventoryOrderByWithRelationInput = {
    userId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    user?: UserOrderByWithRelationInput
    food?: FoodOrderByWithRelationInput
  }

  export type UserInventoryWhereUniqueInput = Prisma.AtLeast<{
    userId_foodId?: UserInventoryUserIdFoodIdCompoundUniqueInput
    AND?: UserInventoryWhereInput | UserInventoryWhereInput[]
    OR?: UserInventoryWhereInput[]
    NOT?: UserInventoryWhereInput | UserInventoryWhereInput[]
    userId?: StringFilter<"UserInventory"> | string
    foodId?: StringFilter<"UserInventory"> | string
    quantity?: IntFilter<"UserInventory"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
  }, "userId_foodId">

  export type UserInventoryOrderByWithAggregationInput = {
    userId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    _count?: UserInventoryCountOrderByAggregateInput
    _avg?: UserInventoryAvgOrderByAggregateInput
    _max?: UserInventoryMaxOrderByAggregateInput
    _min?: UserInventoryMinOrderByAggregateInput
    _sum?: UserInventorySumOrderByAggregateInput
  }

  export type UserInventoryScalarWhereWithAggregatesInput = {
    AND?: UserInventoryScalarWhereWithAggregatesInput | UserInventoryScalarWhereWithAggregatesInput[]
    OR?: UserInventoryScalarWhereWithAggregatesInput[]
    NOT?: UserInventoryScalarWhereWithAggregatesInput | UserInventoryScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserInventory"> | string
    foodId?: StringWithAggregatesFilter<"UserInventory"> | string
    quantity?: IntWithAggregatesFilter<"UserInventory"> | number
  }

  export type UserHouseWhereInput = {
    AND?: UserHouseWhereInput | UserHouseWhereInput[]
    OR?: UserHouseWhereInput[]
    NOT?: UserHouseWhereInput | UserHouseWhereInput[]
    userId?: StringFilter<"UserHouse"> | string
    houseType?: EnumHouseTypeFilter<"UserHouse"> | $Enums.HouseType
    boughtAt?: DateTimeFilter<"UserHouse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserHouseOrderByWithRelationInput = {
    userId?: SortOrder
    houseType?: SortOrder
    boughtAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserHouseWhereUniqueInput = Prisma.AtLeast<{
    userId_houseType?: UserHouseUserIdHouseTypeCompoundUniqueInput
    AND?: UserHouseWhereInput | UserHouseWhereInput[]
    OR?: UserHouseWhereInput[]
    NOT?: UserHouseWhereInput | UserHouseWhereInput[]
    userId?: StringFilter<"UserHouse"> | string
    houseType?: EnumHouseTypeFilter<"UserHouse"> | $Enums.HouseType
    boughtAt?: DateTimeFilter<"UserHouse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_houseType">

  export type UserHouseOrderByWithAggregationInput = {
    userId?: SortOrder
    houseType?: SortOrder
    boughtAt?: SortOrder
    _count?: UserHouseCountOrderByAggregateInput
    _max?: UserHouseMaxOrderByAggregateInput
    _min?: UserHouseMinOrderByAggregateInput
  }

  export type UserHouseScalarWhereWithAggregatesInput = {
    AND?: UserHouseScalarWhereWithAggregatesInput | UserHouseScalarWhereWithAggregatesInput[]
    OR?: UserHouseScalarWhereWithAggregatesInput[]
    NOT?: UserHouseScalarWhereWithAggregatesInput | UserHouseScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserHouse"> | string
    houseType?: EnumHouseTypeWithAggregatesFilter<"UserHouse"> | $Enums.HouseType
    boughtAt?: DateTimeWithAggregatesFilter<"UserHouse"> | Date | string
  }

  export type GuildConfigWhereInput = {
    AND?: GuildConfigWhereInput | GuildConfigWhereInput[]
    OR?: GuildConfigWhereInput[]
    NOT?: GuildConfigWhereInput | GuildConfigWhereInput[]
    guildId?: StringFilter<"GuildConfig"> | string
    prefix?: StringFilter<"GuildConfig"> | string
    announcementChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    lastAnnouncedVersion?: StringNullableFilter<"GuildConfig"> | string | null
  }

  export type GuildConfigOrderByWithRelationInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    announcementChannelId?: SortOrderInput | SortOrder
    lastAnnouncedVersion?: SortOrderInput | SortOrder
  }

  export type GuildConfigWhereUniqueInput = Prisma.AtLeast<{
    guildId?: string
    AND?: GuildConfigWhereInput | GuildConfigWhereInput[]
    OR?: GuildConfigWhereInput[]
    NOT?: GuildConfigWhereInput | GuildConfigWhereInput[]
    prefix?: StringFilter<"GuildConfig"> | string
    announcementChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    lastAnnouncedVersion?: StringNullableFilter<"GuildConfig"> | string | null
  }, "guildId">

  export type GuildConfigOrderByWithAggregationInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    announcementChannelId?: SortOrderInput | SortOrder
    lastAnnouncedVersion?: SortOrderInput | SortOrder
    _count?: GuildConfigCountOrderByAggregateInput
    _max?: GuildConfigMaxOrderByAggregateInput
    _min?: GuildConfigMinOrderByAggregateInput
  }

  export type GuildConfigScalarWhereWithAggregatesInput = {
    AND?: GuildConfigScalarWhereWithAggregatesInput | GuildConfigScalarWhereWithAggregatesInput[]
    OR?: GuildConfigScalarWhereWithAggregatesInput[]
    NOT?: GuildConfigScalarWhereWithAggregatesInput | GuildConfigScalarWhereWithAggregatesInput[]
    guildId?: StringWithAggregatesFilter<"GuildConfig"> | string
    prefix?: StringWithAggregatesFilter<"GuildConfig"> | string
    announcementChannelId?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    lastAnnouncedVersion?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    discordId: string
    level?: number
    experience?: number
    gold?: number
    activeHouse?: $Enums.HouseType
    ownedHouseSlots?: number
    lastDailyAt?: Date | string | null
    dailyStreak?: number
    gamesPlayed?: number
    gamesToday?: number
    lastGameResetAt?: Date | string
    feedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetCreateNestedManyWithoutOwnerInput
    inventory?: UserInventoryCreateNestedManyWithoutUserInput
    houses?: UserHouseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    discordId: string
    level?: number
    experience?: number
    gold?: number
    activeHouse?: $Enums.HouseType
    ownedHouseSlots?: number
    lastDailyAt?: Date | string | null
    dailyStreak?: number
    gamesPlayed?: number
    gamesToday?: number
    lastGameResetAt?: Date | string
    feedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutOwnerInput
    inventory?: UserInventoryUncheckedCreateNestedManyWithoutUserInput
    houses?: UserHouseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    activeHouse?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    ownedHouseSlots?: IntFieldUpdateOperationsInput | number
    lastDailyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyStreak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesToday?: IntFieldUpdateOperationsInput | number
    lastGameResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUpdateManyWithoutOwnerNestedInput
    inventory?: UserInventoryUpdateManyWithoutUserNestedInput
    houses?: UserHouseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    activeHouse?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    ownedHouseSlots?: IntFieldUpdateOperationsInput | number
    lastDailyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyStreak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesToday?: IntFieldUpdateOperationsInput | number
    lastGameResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutOwnerNestedInput
    inventory?: UserInventoryUncheckedUpdateManyWithoutUserNestedInput
    houses?: UserHouseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    discordId: string
    level?: number
    experience?: number
    gold?: number
    activeHouse?: $Enums.HouseType
    ownedHouseSlots?: number
    lastDailyAt?: Date | string | null
    dailyStreak?: number
    gamesPlayed?: number
    gamesToday?: number
    lastGameResetAt?: Date | string
    feedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    activeHouse?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    ownedHouseSlots?: IntFieldUpdateOperationsInput | number
    lastDailyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyStreak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesToday?: IntFieldUpdateOperationsInput | number
    lastGameResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    activeHouse?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    ownedHouseSlots?: IntFieldUpdateOperationsInput | number
    lastDailyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyStreak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesToday?: IntFieldUpdateOperationsInput | number
    lastGameResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateInput = {
    id?: string
    petCode: string
    name: string
    species: $Enums.PetSpecies
    variant: string
    level?: number
    experience?: number
    affection?: number
    comfort?: number
    mood?: $Enums.Mood
    dailyPetCount?: number
    lastPetResetAt?: Date | string
    lastFedAt?: Date | string | null
    lastPettedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateInput = {
    id?: string
    ownerId: string
    petCode: string
    name: string
    species: $Enums.PetSpecies
    variant: string
    level?: number
    experience?: number
    affection?: number
    comfort?: number
    mood?: $Enums.Mood
    dailyPetCount?: number
    lastPetResetAt?: Date | string
    lastFedAt?: Date | string | null
    lastPettedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    petCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies
    variant?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    affection?: IntFieldUpdateOperationsInput | number
    comfort?: IntFieldUpdateOperationsInput | number
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    dailyPetCount?: IntFieldUpdateOperationsInput | number
    lastPetResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPettedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    petCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies
    variant?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    affection?: IntFieldUpdateOperationsInput | number
    comfort?: IntFieldUpdateOperationsInput | number
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    dailyPetCount?: IntFieldUpdateOperationsInput | number
    lastPetResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPettedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateManyInput = {
    id?: string
    ownerId: string
    petCode: string
    name: string
    species: $Enums.PetSpecies
    variant: string
    level?: number
    experience?: number
    affection?: number
    comfort?: number
    mood?: $Enums.Mood
    dailyPetCount?: number
    lastPetResetAt?: Date | string
    lastFedAt?: Date | string | null
    lastPettedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    petCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies
    variant?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    affection?: IntFieldUpdateOperationsInput | number
    comfort?: IntFieldUpdateOperationsInput | number
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    dailyPetCount?: IntFieldUpdateOperationsInput | number
    lastPetResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPettedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    petCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies
    variant?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    affection?: IntFieldUpdateOperationsInput | number
    comfort?: IntFieldUpdateOperationsInput | number
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    dailyPetCount?: IntFieldUpdateOperationsInput | number
    lastPetResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPettedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateInput = {
    id: string
    name: string
    icon: string
    description: string
    price: number
    unlockLevel: number
    petExperience: number
    ownerExperience: number
    comfortGain: number
    preferredBy?: $Enums.PetSpecies | null
    inventory?: UserInventoryCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    id: string
    name: string
    icon: string
    description: string
    price: number
    unlockLevel: number
    petExperience: number
    ownerExperience: number
    comfortGain: number
    preferredBy?: $Enums.PetSpecies | null
    inventory?: UserInventoryUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    unlockLevel?: IntFieldUpdateOperationsInput | number
    petExperience?: IntFieldUpdateOperationsInput | number
    ownerExperience?: IntFieldUpdateOperationsInput | number
    comfortGain?: IntFieldUpdateOperationsInput | number
    preferredBy?: NullableEnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies | null
    inventory?: UserInventoryUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    unlockLevel?: IntFieldUpdateOperationsInput | number
    petExperience?: IntFieldUpdateOperationsInput | number
    ownerExperience?: IntFieldUpdateOperationsInput | number
    comfortGain?: IntFieldUpdateOperationsInput | number
    preferredBy?: NullableEnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies | null
    inventory?: UserInventoryUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    id: string
    name: string
    icon: string
    description: string
    price: number
    unlockLevel: number
    petExperience: number
    ownerExperience: number
    comfortGain: number
    preferredBy?: $Enums.PetSpecies | null
  }

  export type FoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    unlockLevel?: IntFieldUpdateOperationsInput | number
    petExperience?: IntFieldUpdateOperationsInput | number
    ownerExperience?: IntFieldUpdateOperationsInput | number
    comfortGain?: IntFieldUpdateOperationsInput | number
    preferredBy?: NullableEnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies | null
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    unlockLevel?: IntFieldUpdateOperationsInput | number
    petExperience?: IntFieldUpdateOperationsInput | number
    ownerExperience?: IntFieldUpdateOperationsInput | number
    comfortGain?: IntFieldUpdateOperationsInput | number
    preferredBy?: NullableEnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies | null
  }

  export type UserInventoryCreateInput = {
    quantity?: number
    user: UserCreateNestedOneWithoutInventoryInput
    food: FoodCreateNestedOneWithoutInventoryInput
  }

  export type UserInventoryUncheckedCreateInput = {
    userId: string
    foodId: string
    quantity?: number
  }

  export type UserInventoryUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutInventoryNestedInput
    food?: FoodUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type UserInventoryUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserInventoryCreateManyInput = {
    userId: string
    foodId: string
    quantity?: number
  }

  export type UserInventoryUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserInventoryUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserHouseCreateInput = {
    houseType: $Enums.HouseType
    boughtAt?: Date | string
    user: UserCreateNestedOneWithoutHousesInput
  }

  export type UserHouseUncheckedCreateInput = {
    userId: string
    houseType: $Enums.HouseType
    boughtAt?: Date | string
  }

  export type UserHouseUpdateInput = {
    houseType?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHousesNestedInput
  }

  export type UserHouseUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    houseType?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHouseCreateManyInput = {
    userId: string
    houseType: $Enums.HouseType
    boughtAt?: Date | string
  }

  export type UserHouseUpdateManyMutationInput = {
    houseType?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHouseUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    houseType?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildConfigCreateInput = {
    guildId: string
    prefix?: string
    announcementChannelId?: string | null
    lastAnnouncedVersion?: string | null
  }

  export type GuildConfigUncheckedCreateInput = {
    guildId: string
    prefix?: string
    announcementChannelId?: string | null
    lastAnnouncedVersion?: string | null
  }

  export type GuildConfigUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    announcementChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnnouncedVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildConfigUncheckedUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    announcementChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnnouncedVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildConfigCreateManyInput = {
    guildId: string
    prefix?: string
    announcementChannelId?: string | null
    lastAnnouncedVersion?: string | null
  }

  export type GuildConfigUpdateManyMutationInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    announcementChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnnouncedVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildConfigUncheckedUpdateManyInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    announcementChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnnouncedVersion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumHouseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseType | EnumHouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HouseType[]
    notIn?: $Enums.HouseType[]
    not?: NestedEnumHouseTypeFilter<$PrismaModel> | $Enums.HouseType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type UserInventoryListRelationFilter = {
    every?: UserInventoryWhereInput
    some?: UserInventoryWhereInput
    none?: UserInventoryWhereInput
  }

  export type UserHouseListRelationFilter = {
    every?: UserHouseWhereInput
    some?: UserHouseWhereInput
    none?: UserHouseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserHouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    gold?: SortOrder
    activeHouse?: SortOrder
    ownedHouseSlots?: SortOrder
    lastDailyAt?: SortOrder
    dailyStreak?: SortOrder
    gamesPlayed?: SortOrder
    gamesToday?: SortOrder
    lastGameResetAt?: SortOrder
    feedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
    gold?: SortOrder
    ownedHouseSlots?: SortOrder
    dailyStreak?: SortOrder
    gamesPlayed?: SortOrder
    gamesToday?: SortOrder
    feedCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    gold?: SortOrder
    activeHouse?: SortOrder
    ownedHouseSlots?: SortOrder
    lastDailyAt?: SortOrder
    dailyStreak?: SortOrder
    gamesPlayed?: SortOrder
    gamesToday?: SortOrder
    lastGameResetAt?: SortOrder
    feedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    gold?: SortOrder
    activeHouse?: SortOrder
    ownedHouseSlots?: SortOrder
    lastDailyAt?: SortOrder
    dailyStreak?: SortOrder
    gamesPlayed?: SortOrder
    gamesToday?: SortOrder
    lastGameResetAt?: SortOrder
    feedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
    gold?: SortOrder
    ownedHouseSlots?: SortOrder
    dailyStreak?: SortOrder
    gamesPlayed?: SortOrder
    gamesToday?: SortOrder
    feedCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumHouseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseType | EnumHouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HouseType[]
    notIn?: $Enums.HouseType[]
    not?: NestedEnumHouseTypeWithAggregatesFilter<$PrismaModel> | $Enums.HouseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHouseTypeFilter<$PrismaModel>
    _max?: NestedEnumHouseTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPetSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | EnumPetSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.PetSpecies[]
    notIn?: $Enums.PetSpecies[]
    not?: NestedEnumPetSpeciesFilter<$PrismaModel> | $Enums.PetSpecies
  }

  export type EnumMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[]
    notIn?: $Enums.Mood[]
    not?: NestedEnumMoodFilter<$PrismaModel> | $Enums.Mood
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PetOwnerIdPetCodeCompoundUniqueInput = {
    ownerId: string
    petCode: string
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    petCode?: SortOrder
    name?: SortOrder
    species?: SortOrder
    variant?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    affection?: SortOrder
    comfort?: SortOrder
    mood?: SortOrder
    dailyPetCount?: SortOrder
    lastPetResetAt?: SortOrder
    lastFedAt?: SortOrder
    lastPettedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
    affection?: SortOrder
    comfort?: SortOrder
    dailyPetCount?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    petCode?: SortOrder
    name?: SortOrder
    species?: SortOrder
    variant?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    affection?: SortOrder
    comfort?: SortOrder
    mood?: SortOrder
    dailyPetCount?: SortOrder
    lastPetResetAt?: SortOrder
    lastFedAt?: SortOrder
    lastPettedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    petCode?: SortOrder
    name?: SortOrder
    species?: SortOrder
    variant?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    affection?: SortOrder
    comfort?: SortOrder
    mood?: SortOrder
    dailyPetCount?: SortOrder
    lastPetResetAt?: SortOrder
    lastFedAt?: SortOrder
    lastPettedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
    affection?: SortOrder
    comfort?: SortOrder
    dailyPetCount?: SortOrder
  }

  export type EnumPetSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | EnumPetSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.PetSpecies[]
    notIn?: $Enums.PetSpecies[]
    not?: NestedEnumPetSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.PetSpecies
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetSpeciesFilter<$PrismaModel>
    _max?: NestedEnumPetSpeciesFilter<$PrismaModel>
  }

  export type EnumMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[]
    notIn?: $Enums.Mood[]
    not?: NestedEnumMoodWithAggregatesFilter<$PrismaModel> | $Enums.Mood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodFilter<$PrismaModel>
    _max?: NestedEnumMoodFilter<$PrismaModel>
  }

  export type EnumPetSpeciesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | EnumPetSpeciesFieldRefInput<$PrismaModel> | null
    in?: $Enums.PetSpecies[] | null
    notIn?: $Enums.PetSpecies[] | null
    not?: NestedEnumPetSpeciesNullableFilter<$PrismaModel> | $Enums.PetSpecies | null
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unlockLevel?: SortOrder
    petExperience?: SortOrder
    ownerExperience?: SortOrder
    comfortGain?: SortOrder
    preferredBy?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    price?: SortOrder
    unlockLevel?: SortOrder
    petExperience?: SortOrder
    ownerExperience?: SortOrder
    comfortGain?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unlockLevel?: SortOrder
    petExperience?: SortOrder
    ownerExperience?: SortOrder
    comfortGain?: SortOrder
    preferredBy?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    price?: SortOrder
    unlockLevel?: SortOrder
    petExperience?: SortOrder
    ownerExperience?: SortOrder
    comfortGain?: SortOrder
    preferredBy?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    price?: SortOrder
    unlockLevel?: SortOrder
    petExperience?: SortOrder
    ownerExperience?: SortOrder
    comfortGain?: SortOrder
  }

  export type EnumPetSpeciesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | EnumPetSpeciesFieldRefInput<$PrismaModel> | null
    in?: $Enums.PetSpecies[] | null
    notIn?: $Enums.PetSpecies[] | null
    not?: NestedEnumPetSpeciesNullableWithAggregatesFilter<$PrismaModel> | $Enums.PetSpecies | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPetSpeciesNullableFilter<$PrismaModel>
    _max?: NestedEnumPetSpeciesNullableFilter<$PrismaModel>
  }

  export type FoodScalarRelationFilter = {
    is?: FoodWhereInput
    isNot?: FoodWhereInput
  }

  export type UserInventoryUserIdFoodIdCompoundUniqueInput = {
    userId: string
    foodId: string
  }

  export type UserInventoryCountOrderByAggregateInput = {
    userId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
  }

  export type UserInventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type UserInventoryMaxOrderByAggregateInput = {
    userId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
  }

  export type UserInventoryMinOrderByAggregateInput = {
    userId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
  }

  export type UserInventorySumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type UserHouseUserIdHouseTypeCompoundUniqueInput = {
    userId: string
    houseType: $Enums.HouseType
  }

  export type UserHouseCountOrderByAggregateInput = {
    userId?: SortOrder
    houseType?: SortOrder
    boughtAt?: SortOrder
  }

  export type UserHouseMaxOrderByAggregateInput = {
    userId?: SortOrder
    houseType?: SortOrder
    boughtAt?: SortOrder
  }

  export type UserHouseMinOrderByAggregateInput = {
    userId?: SortOrder
    houseType?: SortOrder
    boughtAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GuildConfigCountOrderByAggregateInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    announcementChannelId?: SortOrder
    lastAnnouncedVersion?: SortOrder
  }

  export type GuildConfigMaxOrderByAggregateInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    announcementChannelId?: SortOrder
    lastAnnouncedVersion?: SortOrder
  }

  export type GuildConfigMinOrderByAggregateInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    announcementChannelId?: SortOrder
    lastAnnouncedVersion?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PetCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput> | PetCreateWithoutOwnerInput[] | PetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOwnerInput | PetCreateOrConnectWithoutOwnerInput[]
    createMany?: PetCreateManyOwnerInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type UserInventoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserInventoryCreateWithoutUserInput, UserInventoryUncheckedCreateWithoutUserInput> | UserInventoryCreateWithoutUserInput[] | UserInventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInventoryCreateOrConnectWithoutUserInput | UserInventoryCreateOrConnectWithoutUserInput[]
    createMany?: UserInventoryCreateManyUserInputEnvelope
    connect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
  }

  export type UserHouseCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHouseCreateWithoutUserInput, UserHouseUncheckedCreateWithoutUserInput> | UserHouseCreateWithoutUserInput[] | UserHouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHouseCreateOrConnectWithoutUserInput | UserHouseCreateOrConnectWithoutUserInput[]
    createMany?: UserHouseCreateManyUserInputEnvelope
    connect?: UserHouseWhereUniqueInput | UserHouseWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput> | PetCreateWithoutOwnerInput[] | PetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOwnerInput | PetCreateOrConnectWithoutOwnerInput[]
    createMany?: PetCreateManyOwnerInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type UserInventoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserInventoryCreateWithoutUserInput, UserInventoryUncheckedCreateWithoutUserInput> | UserInventoryCreateWithoutUserInput[] | UserInventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInventoryCreateOrConnectWithoutUserInput | UserInventoryCreateOrConnectWithoutUserInput[]
    createMany?: UserInventoryCreateManyUserInputEnvelope
    connect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
  }

  export type UserHouseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHouseCreateWithoutUserInput, UserHouseUncheckedCreateWithoutUserInput> | UserHouseCreateWithoutUserInput[] | UserHouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHouseCreateOrConnectWithoutUserInput | UserHouseCreateOrConnectWithoutUserInput[]
    createMany?: UserHouseCreateManyUserInputEnvelope
    connect?: UserHouseWhereUniqueInput | UserHouseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumHouseTypeFieldUpdateOperationsInput = {
    set?: $Enums.HouseType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PetUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput> | PetCreateWithoutOwnerInput[] | PetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOwnerInput | PetCreateOrConnectWithoutOwnerInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutOwnerInput | PetUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PetCreateManyOwnerInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutOwnerInput | PetUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PetUpdateManyWithWhereWithoutOwnerInput | PetUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type UserInventoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserInventoryCreateWithoutUserInput, UserInventoryUncheckedCreateWithoutUserInput> | UserInventoryCreateWithoutUserInput[] | UserInventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInventoryCreateOrConnectWithoutUserInput | UserInventoryCreateOrConnectWithoutUserInput[]
    upsert?: UserInventoryUpsertWithWhereUniqueWithoutUserInput | UserInventoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserInventoryCreateManyUserInputEnvelope
    set?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    disconnect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    delete?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    connect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    update?: UserInventoryUpdateWithWhereUniqueWithoutUserInput | UserInventoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserInventoryUpdateManyWithWhereWithoutUserInput | UserInventoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserInventoryScalarWhereInput | UserInventoryScalarWhereInput[]
  }

  export type UserHouseUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHouseCreateWithoutUserInput, UserHouseUncheckedCreateWithoutUserInput> | UserHouseCreateWithoutUserInput[] | UserHouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHouseCreateOrConnectWithoutUserInput | UserHouseCreateOrConnectWithoutUserInput[]
    upsert?: UserHouseUpsertWithWhereUniqueWithoutUserInput | UserHouseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHouseCreateManyUserInputEnvelope
    set?: UserHouseWhereUniqueInput | UserHouseWhereUniqueInput[]
    disconnect?: UserHouseWhereUniqueInput | UserHouseWhereUniqueInput[]
    delete?: UserHouseWhereUniqueInput | UserHouseWhereUniqueInput[]
    connect?: UserHouseWhereUniqueInput | UserHouseWhereUniqueInput[]
    update?: UserHouseUpdateWithWhereUniqueWithoutUserInput | UserHouseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHouseUpdateManyWithWhereWithoutUserInput | UserHouseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHouseScalarWhereInput | UserHouseScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput> | PetCreateWithoutOwnerInput[] | PetUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOwnerInput | PetCreateOrConnectWithoutOwnerInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutOwnerInput | PetUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PetCreateManyOwnerInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutOwnerInput | PetUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PetUpdateManyWithWhereWithoutOwnerInput | PetUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type UserInventoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserInventoryCreateWithoutUserInput, UserInventoryUncheckedCreateWithoutUserInput> | UserInventoryCreateWithoutUserInput[] | UserInventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserInventoryCreateOrConnectWithoutUserInput | UserInventoryCreateOrConnectWithoutUserInput[]
    upsert?: UserInventoryUpsertWithWhereUniqueWithoutUserInput | UserInventoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserInventoryCreateManyUserInputEnvelope
    set?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    disconnect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    delete?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    connect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    update?: UserInventoryUpdateWithWhereUniqueWithoutUserInput | UserInventoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserInventoryUpdateManyWithWhereWithoutUserInput | UserInventoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserInventoryScalarWhereInput | UserInventoryScalarWhereInput[]
  }

  export type UserHouseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHouseCreateWithoutUserInput, UserHouseUncheckedCreateWithoutUserInput> | UserHouseCreateWithoutUserInput[] | UserHouseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHouseCreateOrConnectWithoutUserInput | UserHouseCreateOrConnectWithoutUserInput[]
    upsert?: UserHouseUpsertWithWhereUniqueWithoutUserInput | UserHouseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHouseCreateManyUserInputEnvelope
    set?: UserHouseWhereUniqueInput | UserHouseWhereUniqueInput[]
    disconnect?: UserHouseWhereUniqueInput | UserHouseWhereUniqueInput[]
    delete?: UserHouseWhereUniqueInput | UserHouseWhereUniqueInput[]
    connect?: UserHouseWhereUniqueInput | UserHouseWhereUniqueInput[]
    update?: UserHouseUpdateWithWhereUniqueWithoutUserInput | UserHouseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHouseUpdateManyWithWhereWithoutUserInput | UserHouseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHouseScalarWhereInput | UserHouseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPetsInput = {
    create?: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPetSpeciesFieldUpdateOperationsInput = {
    set?: $Enums.PetSpecies
  }

  export type EnumMoodFieldUpdateOperationsInput = {
    set?: $Enums.Mood
  }

  export type UserUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsInput
    upsert?: UserUpsertWithoutPetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPetsInput, UserUpdateWithoutPetsInput>, UserUncheckedUpdateWithoutPetsInput>
  }

  export type UserInventoryCreateNestedManyWithoutFoodInput = {
    create?: XOR<UserInventoryCreateWithoutFoodInput, UserInventoryUncheckedCreateWithoutFoodInput> | UserInventoryCreateWithoutFoodInput[] | UserInventoryUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: UserInventoryCreateOrConnectWithoutFoodInput | UserInventoryCreateOrConnectWithoutFoodInput[]
    createMany?: UserInventoryCreateManyFoodInputEnvelope
    connect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
  }

  export type UserInventoryUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<UserInventoryCreateWithoutFoodInput, UserInventoryUncheckedCreateWithoutFoodInput> | UserInventoryCreateWithoutFoodInput[] | UserInventoryUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: UserInventoryCreateOrConnectWithoutFoodInput | UserInventoryCreateOrConnectWithoutFoodInput[]
    createMany?: UserInventoryCreateManyFoodInputEnvelope
    connect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
  }

  export type NullableEnumPetSpeciesFieldUpdateOperationsInput = {
    set?: $Enums.PetSpecies | null
  }

  export type UserInventoryUpdateManyWithoutFoodNestedInput = {
    create?: XOR<UserInventoryCreateWithoutFoodInput, UserInventoryUncheckedCreateWithoutFoodInput> | UserInventoryCreateWithoutFoodInput[] | UserInventoryUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: UserInventoryCreateOrConnectWithoutFoodInput | UserInventoryCreateOrConnectWithoutFoodInput[]
    upsert?: UserInventoryUpsertWithWhereUniqueWithoutFoodInput | UserInventoryUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: UserInventoryCreateManyFoodInputEnvelope
    set?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    disconnect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    delete?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    connect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    update?: UserInventoryUpdateWithWhereUniqueWithoutFoodInput | UserInventoryUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: UserInventoryUpdateManyWithWhereWithoutFoodInput | UserInventoryUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: UserInventoryScalarWhereInput | UserInventoryScalarWhereInput[]
  }

  export type UserInventoryUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<UserInventoryCreateWithoutFoodInput, UserInventoryUncheckedCreateWithoutFoodInput> | UserInventoryCreateWithoutFoodInput[] | UserInventoryUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: UserInventoryCreateOrConnectWithoutFoodInput | UserInventoryCreateOrConnectWithoutFoodInput[]
    upsert?: UserInventoryUpsertWithWhereUniqueWithoutFoodInput | UserInventoryUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: UserInventoryCreateManyFoodInputEnvelope
    set?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    disconnect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    delete?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    connect?: UserInventoryWhereUniqueInput | UserInventoryWhereUniqueInput[]
    update?: UserInventoryUpdateWithWhereUniqueWithoutFoodInput | UserInventoryUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: UserInventoryUpdateManyWithWhereWithoutFoodInput | UserInventoryUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: UserInventoryScalarWhereInput | UserInventoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInventoryInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    connect?: UserWhereUniqueInput
  }

  export type FoodCreateNestedOneWithoutInventoryInput = {
    create?: XOR<FoodCreateWithoutInventoryInput, FoodUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: FoodCreateOrConnectWithoutInventoryInput
    connect?: FoodWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    upsert?: UserUpsertWithoutInventoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryInput, UserUpdateWithoutInventoryInput>, UserUncheckedUpdateWithoutInventoryInput>
  }

  export type FoodUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<FoodCreateWithoutInventoryInput, FoodUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: FoodCreateOrConnectWithoutInventoryInput
    upsert?: FoodUpsertWithoutInventoryInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutInventoryInput, FoodUpdateWithoutInventoryInput>, FoodUncheckedUpdateWithoutInventoryInput>
  }

  export type UserCreateNestedOneWithoutHousesInput = {
    create?: XOR<UserCreateWithoutHousesInput, UserUncheckedCreateWithoutHousesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHousesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHousesNestedInput = {
    create?: XOR<UserCreateWithoutHousesInput, UserUncheckedCreateWithoutHousesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHousesInput
    upsert?: UserUpsertWithoutHousesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHousesInput, UserUpdateWithoutHousesInput>, UserUncheckedUpdateWithoutHousesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumHouseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseType | EnumHouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HouseType[]
    notIn?: $Enums.HouseType[]
    not?: NestedEnumHouseTypeFilter<$PrismaModel> | $Enums.HouseType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumHouseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseType | EnumHouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HouseType[]
    notIn?: $Enums.HouseType[]
    not?: NestedEnumHouseTypeWithAggregatesFilter<$PrismaModel> | $Enums.HouseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHouseTypeFilter<$PrismaModel>
    _max?: NestedEnumHouseTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPetSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | EnumPetSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.PetSpecies[]
    notIn?: $Enums.PetSpecies[]
    not?: NestedEnumPetSpeciesFilter<$PrismaModel> | $Enums.PetSpecies
  }

  export type NestedEnumMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[]
    notIn?: $Enums.Mood[]
    not?: NestedEnumMoodFilter<$PrismaModel> | $Enums.Mood
  }

  export type NestedEnumPetSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | EnumPetSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.PetSpecies[]
    notIn?: $Enums.PetSpecies[]
    not?: NestedEnumPetSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.PetSpecies
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetSpeciesFilter<$PrismaModel>
    _max?: NestedEnumPetSpeciesFilter<$PrismaModel>
  }

  export type NestedEnumMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[]
    notIn?: $Enums.Mood[]
    not?: NestedEnumMoodWithAggregatesFilter<$PrismaModel> | $Enums.Mood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodFilter<$PrismaModel>
    _max?: NestedEnumMoodFilter<$PrismaModel>
  }

  export type NestedEnumPetSpeciesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | EnumPetSpeciesFieldRefInput<$PrismaModel> | null
    in?: $Enums.PetSpecies[] | null
    notIn?: $Enums.PetSpecies[] | null
    not?: NestedEnumPetSpeciesNullableFilter<$PrismaModel> | $Enums.PetSpecies | null
  }

  export type NestedEnumPetSpeciesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | EnumPetSpeciesFieldRefInput<$PrismaModel> | null
    in?: $Enums.PetSpecies[] | null
    notIn?: $Enums.PetSpecies[] | null
    not?: NestedEnumPetSpeciesNullableWithAggregatesFilter<$PrismaModel> | $Enums.PetSpecies | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPetSpeciesNullableFilter<$PrismaModel>
    _max?: NestedEnumPetSpeciesNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PetCreateWithoutOwnerInput = {
    id?: string
    petCode: string
    name: string
    species: $Enums.PetSpecies
    variant: string
    level?: number
    experience?: number
    affection?: number
    comfort?: number
    mood?: $Enums.Mood
    dailyPetCount?: number
    lastPetResetAt?: Date | string
    lastFedAt?: Date | string | null
    lastPettedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetUncheckedCreateWithoutOwnerInput = {
    id?: string
    petCode: string
    name: string
    species: $Enums.PetSpecies
    variant: string
    level?: number
    experience?: number
    affection?: number
    comfort?: number
    mood?: $Enums.Mood
    dailyPetCount?: number
    lastPetResetAt?: Date | string
    lastFedAt?: Date | string | null
    lastPettedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetCreateOrConnectWithoutOwnerInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput>
  }

  export type PetCreateManyOwnerInputEnvelope = {
    data: PetCreateManyOwnerInput | PetCreateManyOwnerInput[]
  }

  export type UserInventoryCreateWithoutUserInput = {
    quantity?: number
    food: FoodCreateNestedOneWithoutInventoryInput
  }

  export type UserInventoryUncheckedCreateWithoutUserInput = {
    foodId: string
    quantity?: number
  }

  export type UserInventoryCreateOrConnectWithoutUserInput = {
    where: UserInventoryWhereUniqueInput
    create: XOR<UserInventoryCreateWithoutUserInput, UserInventoryUncheckedCreateWithoutUserInput>
  }

  export type UserInventoryCreateManyUserInputEnvelope = {
    data: UserInventoryCreateManyUserInput | UserInventoryCreateManyUserInput[]
  }

  export type UserHouseCreateWithoutUserInput = {
    houseType: $Enums.HouseType
    boughtAt?: Date | string
  }

  export type UserHouseUncheckedCreateWithoutUserInput = {
    houseType: $Enums.HouseType
    boughtAt?: Date | string
  }

  export type UserHouseCreateOrConnectWithoutUserInput = {
    where: UserHouseWhereUniqueInput
    create: XOR<UserHouseCreateWithoutUserInput, UserHouseUncheckedCreateWithoutUserInput>
  }

  export type UserHouseCreateManyUserInputEnvelope = {
    data: UserHouseCreateManyUserInput | UserHouseCreateManyUserInput[]
  }

  export type PetUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutOwnerInput, PetUncheckedUpdateWithoutOwnerInput>
    create: XOR<PetCreateWithoutOwnerInput, PetUncheckedCreateWithoutOwnerInput>
  }

  export type PetUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutOwnerInput, PetUncheckedUpdateWithoutOwnerInput>
  }

  export type PetUpdateManyWithWhereWithoutOwnerInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: StringFilter<"Pet"> | string
    ownerId?: StringFilter<"Pet"> | string
    petCode?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    species?: EnumPetSpeciesFilter<"Pet"> | $Enums.PetSpecies
    variant?: StringFilter<"Pet"> | string
    level?: IntFilter<"Pet"> | number
    experience?: IntFilter<"Pet"> | number
    affection?: IntFilter<"Pet"> | number
    comfort?: IntFilter<"Pet"> | number
    mood?: EnumMoodFilter<"Pet"> | $Enums.Mood
    dailyPetCount?: IntFilter<"Pet"> | number
    lastPetResetAt?: DateTimeFilter<"Pet"> | Date | string
    lastFedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
    lastPettedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
  }

  export type UserInventoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserInventoryWhereUniqueInput
    update: XOR<UserInventoryUpdateWithoutUserInput, UserInventoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserInventoryCreateWithoutUserInput, UserInventoryUncheckedCreateWithoutUserInput>
  }

  export type UserInventoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserInventoryWhereUniqueInput
    data: XOR<UserInventoryUpdateWithoutUserInput, UserInventoryUncheckedUpdateWithoutUserInput>
  }

  export type UserInventoryUpdateManyWithWhereWithoutUserInput = {
    where: UserInventoryScalarWhereInput
    data: XOR<UserInventoryUpdateManyMutationInput, UserInventoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserInventoryScalarWhereInput = {
    AND?: UserInventoryScalarWhereInput | UserInventoryScalarWhereInput[]
    OR?: UserInventoryScalarWhereInput[]
    NOT?: UserInventoryScalarWhereInput | UserInventoryScalarWhereInput[]
    userId?: StringFilter<"UserInventory"> | string
    foodId?: StringFilter<"UserInventory"> | string
    quantity?: IntFilter<"UserInventory"> | number
  }

  export type UserHouseUpsertWithWhereUniqueWithoutUserInput = {
    where: UserHouseWhereUniqueInput
    update: XOR<UserHouseUpdateWithoutUserInput, UserHouseUncheckedUpdateWithoutUserInput>
    create: XOR<UserHouseCreateWithoutUserInput, UserHouseUncheckedCreateWithoutUserInput>
  }

  export type UserHouseUpdateWithWhereUniqueWithoutUserInput = {
    where: UserHouseWhereUniqueInput
    data: XOR<UserHouseUpdateWithoutUserInput, UserHouseUncheckedUpdateWithoutUserInput>
  }

  export type UserHouseUpdateManyWithWhereWithoutUserInput = {
    where: UserHouseScalarWhereInput
    data: XOR<UserHouseUpdateManyMutationInput, UserHouseUncheckedUpdateManyWithoutUserInput>
  }

  export type UserHouseScalarWhereInput = {
    AND?: UserHouseScalarWhereInput | UserHouseScalarWhereInput[]
    OR?: UserHouseScalarWhereInput[]
    NOT?: UserHouseScalarWhereInput | UserHouseScalarWhereInput[]
    userId?: StringFilter<"UserHouse"> | string
    houseType?: EnumHouseTypeFilter<"UserHouse"> | $Enums.HouseType
    boughtAt?: DateTimeFilter<"UserHouse"> | Date | string
  }

  export type UserCreateWithoutPetsInput = {
    id?: string
    discordId: string
    level?: number
    experience?: number
    gold?: number
    activeHouse?: $Enums.HouseType
    ownedHouseSlots?: number
    lastDailyAt?: Date | string | null
    dailyStreak?: number
    gamesPlayed?: number
    gamesToday?: number
    lastGameResetAt?: Date | string
    feedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: UserInventoryCreateNestedManyWithoutUserInput
    houses?: UserHouseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPetsInput = {
    id?: string
    discordId: string
    level?: number
    experience?: number
    gold?: number
    activeHouse?: $Enums.HouseType
    ownedHouseSlots?: number
    lastDailyAt?: Date | string | null
    dailyStreak?: number
    gamesPlayed?: number
    gamesToday?: number
    lastGameResetAt?: Date | string
    feedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: UserInventoryUncheckedCreateNestedManyWithoutUserInput
    houses?: UserHouseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
  }

  export type UserUpsertWithoutPetsInput = {
    update: XOR<UserUpdateWithoutPetsInput, UserUncheckedUpdateWithoutPetsInput>
    create: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPetsInput, UserUncheckedUpdateWithoutPetsInput>
  }

  export type UserUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    activeHouse?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    ownedHouseSlots?: IntFieldUpdateOperationsInput | number
    lastDailyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyStreak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesToday?: IntFieldUpdateOperationsInput | number
    lastGameResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: UserInventoryUpdateManyWithoutUserNestedInput
    houses?: UserHouseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    activeHouse?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    ownedHouseSlots?: IntFieldUpdateOperationsInput | number
    lastDailyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyStreak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesToday?: IntFieldUpdateOperationsInput | number
    lastGameResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: UserInventoryUncheckedUpdateManyWithoutUserNestedInput
    houses?: UserHouseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserInventoryCreateWithoutFoodInput = {
    quantity?: number
    user: UserCreateNestedOneWithoutInventoryInput
  }

  export type UserInventoryUncheckedCreateWithoutFoodInput = {
    userId: string
    quantity?: number
  }

  export type UserInventoryCreateOrConnectWithoutFoodInput = {
    where: UserInventoryWhereUniqueInput
    create: XOR<UserInventoryCreateWithoutFoodInput, UserInventoryUncheckedCreateWithoutFoodInput>
  }

  export type UserInventoryCreateManyFoodInputEnvelope = {
    data: UserInventoryCreateManyFoodInput | UserInventoryCreateManyFoodInput[]
  }

  export type UserInventoryUpsertWithWhereUniqueWithoutFoodInput = {
    where: UserInventoryWhereUniqueInput
    update: XOR<UserInventoryUpdateWithoutFoodInput, UserInventoryUncheckedUpdateWithoutFoodInput>
    create: XOR<UserInventoryCreateWithoutFoodInput, UserInventoryUncheckedCreateWithoutFoodInput>
  }

  export type UserInventoryUpdateWithWhereUniqueWithoutFoodInput = {
    where: UserInventoryWhereUniqueInput
    data: XOR<UserInventoryUpdateWithoutFoodInput, UserInventoryUncheckedUpdateWithoutFoodInput>
  }

  export type UserInventoryUpdateManyWithWhereWithoutFoodInput = {
    where: UserInventoryScalarWhereInput
    data: XOR<UserInventoryUpdateManyMutationInput, UserInventoryUncheckedUpdateManyWithoutFoodInput>
  }

  export type UserCreateWithoutInventoryInput = {
    id?: string
    discordId: string
    level?: number
    experience?: number
    gold?: number
    activeHouse?: $Enums.HouseType
    ownedHouseSlots?: number
    lastDailyAt?: Date | string | null
    dailyStreak?: number
    gamesPlayed?: number
    gamesToday?: number
    lastGameResetAt?: Date | string
    feedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetCreateNestedManyWithoutOwnerInput
    houses?: UserHouseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInventoryInput = {
    id?: string
    discordId: string
    level?: number
    experience?: number
    gold?: number
    activeHouse?: $Enums.HouseType
    ownedHouseSlots?: number
    lastDailyAt?: Date | string | null
    dailyStreak?: number
    gamesPlayed?: number
    gamesToday?: number
    lastGameResetAt?: Date | string
    feedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutOwnerInput
    houses?: UserHouseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInventoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
  }

  export type FoodCreateWithoutInventoryInput = {
    id: string
    name: string
    icon: string
    description: string
    price: number
    unlockLevel: number
    petExperience: number
    ownerExperience: number
    comfortGain: number
    preferredBy?: $Enums.PetSpecies | null
  }

  export type FoodUncheckedCreateWithoutInventoryInput = {
    id: string
    name: string
    icon: string
    description: string
    price: number
    unlockLevel: number
    petExperience: number
    ownerExperience: number
    comfortGain: number
    preferredBy?: $Enums.PetSpecies | null
  }

  export type FoodCreateOrConnectWithoutInventoryInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutInventoryInput, FoodUncheckedCreateWithoutInventoryInput>
  }

  export type UserUpsertWithoutInventoryInput = {
    update: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
  }

  export type UserUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    activeHouse?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    ownedHouseSlots?: IntFieldUpdateOperationsInput | number
    lastDailyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyStreak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesToday?: IntFieldUpdateOperationsInput | number
    lastGameResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUpdateManyWithoutOwnerNestedInput
    houses?: UserHouseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    activeHouse?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    ownedHouseSlots?: IntFieldUpdateOperationsInput | number
    lastDailyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyStreak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesToday?: IntFieldUpdateOperationsInput | number
    lastGameResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutOwnerNestedInput
    houses?: UserHouseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoodUpsertWithoutInventoryInput = {
    update: XOR<FoodUpdateWithoutInventoryInput, FoodUncheckedUpdateWithoutInventoryInput>
    create: XOR<FoodCreateWithoutInventoryInput, FoodUncheckedCreateWithoutInventoryInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutInventoryInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutInventoryInput, FoodUncheckedUpdateWithoutInventoryInput>
  }

  export type FoodUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    unlockLevel?: IntFieldUpdateOperationsInput | number
    petExperience?: IntFieldUpdateOperationsInput | number
    ownerExperience?: IntFieldUpdateOperationsInput | number
    comfortGain?: IntFieldUpdateOperationsInput | number
    preferredBy?: NullableEnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies | null
  }

  export type FoodUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    unlockLevel?: IntFieldUpdateOperationsInput | number
    petExperience?: IntFieldUpdateOperationsInput | number
    ownerExperience?: IntFieldUpdateOperationsInput | number
    comfortGain?: IntFieldUpdateOperationsInput | number
    preferredBy?: NullableEnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies | null
  }

  export type UserCreateWithoutHousesInput = {
    id?: string
    discordId: string
    level?: number
    experience?: number
    gold?: number
    activeHouse?: $Enums.HouseType
    ownedHouseSlots?: number
    lastDailyAt?: Date | string | null
    dailyStreak?: number
    gamesPlayed?: number
    gamesToday?: number
    lastGameResetAt?: Date | string
    feedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetCreateNestedManyWithoutOwnerInput
    inventory?: UserInventoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHousesInput = {
    id?: string
    discordId: string
    level?: number
    experience?: number
    gold?: number
    activeHouse?: $Enums.HouseType
    ownedHouseSlots?: number
    lastDailyAt?: Date | string | null
    dailyStreak?: number
    gamesPlayed?: number
    gamesToday?: number
    lastGameResetAt?: Date | string
    feedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutOwnerInput
    inventory?: UserInventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHousesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHousesInput, UserUncheckedCreateWithoutHousesInput>
  }

  export type UserUpsertWithoutHousesInput = {
    update: XOR<UserUpdateWithoutHousesInput, UserUncheckedUpdateWithoutHousesInput>
    create: XOR<UserCreateWithoutHousesInput, UserUncheckedCreateWithoutHousesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHousesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHousesInput, UserUncheckedUpdateWithoutHousesInput>
  }

  export type UserUpdateWithoutHousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    activeHouse?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    ownedHouseSlots?: IntFieldUpdateOperationsInput | number
    lastDailyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyStreak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesToday?: IntFieldUpdateOperationsInput | number
    lastGameResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUpdateManyWithoutOwnerNestedInput
    inventory?: UserInventoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    gold?: IntFieldUpdateOperationsInput | number
    activeHouse?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    ownedHouseSlots?: IntFieldUpdateOperationsInput | number
    lastDailyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyStreak?: IntFieldUpdateOperationsInput | number
    gamesPlayed?: IntFieldUpdateOperationsInput | number
    gamesToday?: IntFieldUpdateOperationsInput | number
    lastGameResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutOwnerNestedInput
    inventory?: UserInventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PetCreateManyOwnerInput = {
    id?: string
    petCode: string
    name: string
    species: $Enums.PetSpecies
    variant: string
    level?: number
    experience?: number
    affection?: number
    comfort?: number
    mood?: $Enums.Mood
    dailyPetCount?: number
    lastPetResetAt?: Date | string
    lastFedAt?: Date | string | null
    lastPettedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInventoryCreateManyUserInput = {
    foodId: string
    quantity?: number
  }

  export type UserHouseCreateManyUserInput = {
    houseType: $Enums.HouseType
    boughtAt?: Date | string
  }

  export type PetUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    petCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies
    variant?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    affection?: IntFieldUpdateOperationsInput | number
    comfort?: IntFieldUpdateOperationsInput | number
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    dailyPetCount?: IntFieldUpdateOperationsInput | number
    lastPetResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPettedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    petCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies
    variant?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    affection?: IntFieldUpdateOperationsInput | number
    comfort?: IntFieldUpdateOperationsInput | number
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    dailyPetCount?: IntFieldUpdateOperationsInput | number
    lastPetResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPettedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    petCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies
    variant?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    affection?: IntFieldUpdateOperationsInput | number
    comfort?: IntFieldUpdateOperationsInput | number
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    dailyPetCount?: IntFieldUpdateOperationsInput | number
    lastPetResetAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastFedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPettedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInventoryUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    food?: FoodUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type UserInventoryUncheckedUpdateWithoutUserInput = {
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserInventoryUncheckedUpdateManyWithoutUserInput = {
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserHouseUpdateWithoutUserInput = {
    houseType?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHouseUncheckedUpdateWithoutUserInput = {
    houseType?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHouseUncheckedUpdateManyWithoutUserInput = {
    houseType?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    boughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInventoryCreateManyFoodInput = {
    userId: string
    quantity?: number
  }

  export type UserInventoryUpdateWithoutFoodInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type UserInventoryUncheckedUpdateWithoutFoodInput = {
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserInventoryUncheckedUpdateManyWithoutFoodInput = {
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}