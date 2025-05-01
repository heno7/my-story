
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model story
 * 
 */
export type story = $Result.DefaultSelection<Prisma.$storyPayload>
/**
 * Model topic
 * 
 */
export type topic = $Result.DefaultSelection<Prisma.$topicPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const story_status: {
  draft: 'draft',
  publish: 'publish',
  hide: 'hide',
  delete: 'delete'
};

export type story_status = (typeof story_status)[keyof typeof story_status]

}

export type story_status = $Enums.story_status

export const story_status: typeof $Enums.story_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stories
 * const stories = await prisma.story.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Stories
   * const stories = await prisma.story.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.story`: Exposes CRUD operations for the **story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.storyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.topicDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    story: 'story',
    topic: 'topic'
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
      modelProps: "story" | "topic"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      story: {
        payload: Prisma.$storyPayload<ExtArgs>
        fields: Prisma.storyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          findFirst: {
            args: Prisma.storyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          findMany: {
            args: Prisma.storyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>[]
          }
          create: {
            args: Prisma.storyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          createMany: {
            args: Prisma.storyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.storyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>[]
          }
          delete: {
            args: Prisma.storyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          update: {
            args: Prisma.storyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          deleteMany: {
            args: Prisma.storyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.storyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>[]
          }
          upsert: {
            args: Prisma.storyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storyPayload>
          }
          aggregate: {
            args: Prisma.StoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStory>
          }
          groupBy: {
            args: Prisma.storyGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.storyCountArgs<ExtArgs>
            result: $Utils.Optional<StoryCountAggregateOutputType> | number
          }
        }
      }
      topic: {
        payload: Prisma.$topicPayload<ExtArgs>
        fields: Prisma.topicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.topicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.topicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          findFirst: {
            args: Prisma.topicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.topicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          findMany: {
            args: Prisma.topicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>[]
          }
          create: {
            args: Prisma.topicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          createMany: {
            args: Prisma.topicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.topicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>[]
          }
          delete: {
            args: Prisma.topicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          update: {
            args: Prisma.topicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          deleteMany: {
            args: Prisma.topicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.topicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.topicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>[]
          }
          upsert: {
            args: Prisma.topicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.topicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.topicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    story?: storyOmit
    topic?: topicOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    story_story_topicTotopic: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story_story_topicTotopic?: boolean | TopicCountOutputTypeCountStory_story_topicTotopicArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountStory_story_topicTotopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model story
   */

  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryAvgAggregateOutputType = {
    id: number | null
  }

  export type StorySumAggregateOutputType = {
    id: number | null
  }

  export type StoryMinAggregateOutputType = {
    id: number | null
    author: string | null
    title: string | null
    shortintro: string | null
    topic: string | null
    markdowncontent: string | null
    status: $Enums.story_status | null
  }

  export type StoryMaxAggregateOutputType = {
    id: number | null
    author: string | null
    title: string | null
    shortintro: string | null
    topic: string | null
    markdowncontent: string | null
    status: $Enums.story_status | null
  }

  export type StoryCountAggregateOutputType = {
    id: number
    author: number
    title: number
    shortintro: number
    topic: number
    markdowncontent: number
    status: number
    _all: number
  }


  export type StoryAvgAggregateInputType = {
    id?: true
  }

  export type StorySumAggregateInputType = {
    id?: true
  }

  export type StoryMinAggregateInputType = {
    id?: true
    author?: true
    title?: true
    shortintro?: true
    topic?: true
    markdowncontent?: true
    status?: true
  }

  export type StoryMaxAggregateInputType = {
    id?: true
    author?: true
    title?: true
    shortintro?: true
    topic?: true
    markdowncontent?: true
    status?: true
  }

  export type StoryCountAggregateInputType = {
    id?: true
    author?: true
    title?: true
    shortintro?: true
    topic?: true
    markdowncontent?: true
    status?: true
    _all?: true
  }

  export type StoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which story to aggregate.
     */
    where?: storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storyOrderByWithRelationInput | storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type storyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storyWhereInput
    orderBy?: storyOrderByWithAggregationInput | storyOrderByWithAggregationInput[]
    by: StoryScalarFieldEnum[] | StoryScalarFieldEnum
    having?: storyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _avg?: StoryAvgAggregateInputType
    _sum?: StorySumAggregateInputType
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }

  export type StoryGroupByOutputType = {
    id: number
    author: string
    title: string | null
    shortintro: string | null
    topic: string | null
    markdowncontent: string | null
    status: $Enums.story_status | null
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends storyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type storySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    title?: boolean
    shortintro?: boolean
    topic?: boolean
    markdowncontent?: boolean
    status?: boolean
    topic_story_topicTotopic?: boolean | story$topic_story_topicTotopicArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type storySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    title?: boolean
    shortintro?: boolean
    topic?: boolean
    markdowncontent?: boolean
    status?: boolean
    topic_story_topicTotopic?: boolean | story$topic_story_topicTotopicArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type storySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    title?: boolean
    shortintro?: boolean
    topic?: boolean
    markdowncontent?: boolean
    status?: boolean
    topic_story_topicTotopic?: boolean | story$topic_story_topicTotopicArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type storySelectScalar = {
    id?: boolean
    author?: boolean
    title?: boolean
    shortintro?: boolean
    topic?: boolean
    markdowncontent?: boolean
    status?: boolean
  }

  export type storyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author" | "title" | "shortintro" | "topic" | "markdowncontent" | "status", ExtArgs["result"]["story"]>
  export type storyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic_story_topicTotopic?: boolean | story$topic_story_topicTotopicArgs<ExtArgs>
  }
  export type storyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic_story_topicTotopic?: boolean | story$topic_story_topicTotopicArgs<ExtArgs>
  }
  export type storyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic_story_topicTotopic?: boolean | story$topic_story_topicTotopicArgs<ExtArgs>
  }

  export type $storyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "story"
    objects: {
      topic_story_topicTotopic: Prisma.$topicPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      author: string
      title: string | null
      shortintro: string | null
      topic: string | null
      markdowncontent: string | null
      status: $Enums.story_status | null
    }, ExtArgs["result"]["story"]>
    composites: {}
  }

  type storyGetPayload<S extends boolean | null | undefined | storyDefaultArgs> = $Result.GetResult<Prisma.$storyPayload, S>

  type storyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryCountAggregateInputType | true
    }

  export interface storyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['story'], meta: { name: 'story' } }
    /**
     * Find zero or one Story that matches the filter.
     * @param {storyFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storyFindUniqueArgs>(args: SelectSubset<T, storyFindUniqueArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Story that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storyFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storyFindUniqueOrThrowArgs>(args: SelectSubset<T, storyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storyFindFirstArgs>(args?: SelectSubset<T, storyFindFirstArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storyFindFirstOrThrowArgs>(args?: SelectSubset<T, storyFindFirstOrThrowArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyWithIdOnly = await prisma.story.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends storyFindManyArgs>(args?: SelectSubset<T, storyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Story.
     * @param {storyCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
     */
    create<T extends storyCreateArgs>(args: SelectSubset<T, storyCreateArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stories.
     * @param {storyCreateManyArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storyCreateManyArgs>(args?: SelectSubset<T, storyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stories and returns the data saved in the database.
     * @param {storyCreateManyAndReturnArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends storyCreateManyAndReturnArgs>(args?: SelectSubset<T, storyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Story.
     * @param {storyDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
     */
    delete<T extends storyDeleteArgs>(args: SelectSubset<T, storyDeleteArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Story.
     * @param {storyUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storyUpdateArgs>(args: SelectSubset<T, storyUpdateArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stories.
     * @param {storyDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storyDeleteManyArgs>(args?: SelectSubset<T, storyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storyUpdateManyArgs>(args: SelectSubset<T, storyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories and returns the data updated in the database.
     * @param {storyUpdateManyAndReturnArgs} args - Arguments to update many Stories.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.updateManyAndReturn({
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
    updateManyAndReturn<T extends storyUpdateManyAndReturnArgs>(args: SelectSubset<T, storyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Story.
     * @param {storyUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
     */
    upsert<T extends storyUpsertArgs>(args: SelectSubset<T, storyUpsertArgs<ExtArgs>>): Prisma__storyClient<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends storyCountArgs>(
      args?: Subset<T, storyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): Prisma.PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storyGroupByArgs} args - Group by arguments.
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
      T extends storyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storyGroupByArgs['orderBy'] }
        : { orderBy?: storyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, storyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the story model
   */
  readonly fields: storyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic_story_topicTotopic<T extends story$topic_story_topicTotopicArgs<ExtArgs> = {}>(args?: Subset<T, story$topic_story_topicTotopicArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the story model
   */
  interface storyFieldRefs {
    readonly id: FieldRef<"story", 'Int'>
    readonly author: FieldRef<"story", 'String'>
    readonly title: FieldRef<"story", 'String'>
    readonly shortintro: FieldRef<"story", 'String'>
    readonly topic: FieldRef<"story", 'String'>
    readonly markdowncontent: FieldRef<"story", 'String'>
    readonly status: FieldRef<"story", 'story_status'>
  }
    

  // Custom InputTypes
  /**
   * story findUnique
   */
  export type storyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter, which story to fetch.
     */
    where: storyWhereUniqueInput
  }

  /**
   * story findUniqueOrThrow
   */
  export type storyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter, which story to fetch.
     */
    where: storyWhereUniqueInput
  }

  /**
   * story findFirst
   */
  export type storyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter, which story to fetch.
     */
    where?: storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storyOrderByWithRelationInput | storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stories.
     */
    cursor?: storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * story findFirstOrThrow
   */
  export type storyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter, which story to fetch.
     */
    where?: storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storyOrderByWithRelationInput | storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stories.
     */
    cursor?: storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * story findMany
   */
  export type storyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter, which stories to fetch.
     */
    where?: storyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stories to fetch.
     */
    orderBy?: storyOrderByWithRelationInput | storyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stories.
     */
    cursor?: storyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stories.
     */
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * story create
   */
  export type storyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * The data needed to create a story.
     */
    data: XOR<storyCreateInput, storyUncheckedCreateInput>
  }

  /**
   * story createMany
   */
  export type storyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stories.
     */
    data: storyCreateManyInput | storyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * story createManyAndReturn
   */
  export type storyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * The data used to create many stories.
     */
    data: storyCreateManyInput | storyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * story update
   */
  export type storyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * The data needed to update a story.
     */
    data: XOR<storyUpdateInput, storyUncheckedUpdateInput>
    /**
     * Choose, which story to update.
     */
    where: storyWhereUniqueInput
  }

  /**
   * story updateMany
   */
  export type storyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stories.
     */
    data: XOR<storyUpdateManyMutationInput, storyUncheckedUpdateManyInput>
    /**
     * Filter which stories to update
     */
    where?: storyWhereInput
    /**
     * Limit how many stories to update.
     */
    limit?: number
  }

  /**
   * story updateManyAndReturn
   */
  export type storyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * The data used to update stories.
     */
    data: XOR<storyUpdateManyMutationInput, storyUncheckedUpdateManyInput>
    /**
     * Filter which stories to update
     */
    where?: storyWhereInput
    /**
     * Limit how many stories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * story upsert
   */
  export type storyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * The filter to search for the story to update in case it exists.
     */
    where: storyWhereUniqueInput
    /**
     * In case the story found by the `where` argument doesn't exist, create a new story with this data.
     */
    create: XOR<storyCreateInput, storyUncheckedCreateInput>
    /**
     * In case the story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storyUpdateInput, storyUncheckedUpdateInput>
  }

  /**
   * story delete
   */
  export type storyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    /**
     * Filter which story to delete.
     */
    where: storyWhereUniqueInput
  }

  /**
   * story deleteMany
   */
  export type storyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stories to delete
     */
    where?: storyWhereInput
    /**
     * Limit how many stories to delete.
     */
    limit?: number
  }

  /**
   * story.topic_story_topicTotopic
   */
  export type story$topic_story_topicTotopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    where?: topicWhereInput
  }

  /**
   * story without action
   */
  export type storyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
  }


  /**
   * Model topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    id: number | null
  }

  export type TopicSumAggregateOutputType = {
    id: number | null
  }

  export type TopicMinAggregateOutputType = {
    id: number | null
    name: string | null
    author: string | null
    title: string | null
  }

  export type TopicMaxAggregateOutputType = {
    id: number | null
    name: string | null
    author: string | null
    title: string | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    name: number
    author: number
    title: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    id?: true
  }

  export type TopicSumAggregateInputType = {
    id?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
    name?: true
    author?: true
    title?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    name?: true
    author?: true
    title?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    name?: true
    author?: true
    title?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which topic to aggregate.
     */
    where?: topicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicOrderByWithRelationInput | topicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: topicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type topicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: topicWhereInput
    orderBy?: topicOrderByWithAggregationInput | topicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: topicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: number
    name: string | null
    author: string | null
    title: string | null
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends topicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type topicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    author?: boolean
    title?: boolean
    story_story_topicTotopic?: boolean | topic$story_story_topicTotopicArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type topicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    author?: boolean
    title?: boolean
  }, ExtArgs["result"]["topic"]>

  export type topicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    author?: boolean
    title?: boolean
  }, ExtArgs["result"]["topic"]>

  export type topicSelectScalar = {
    id?: boolean
    name?: boolean
    author?: boolean
    title?: boolean
  }

  export type topicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "author" | "title", ExtArgs["result"]["topic"]>
  export type topicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story_story_topicTotopic?: boolean | topic$story_story_topicTotopicArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type topicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type topicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $topicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "topic"
    objects: {
      story_story_topicTotopic: Prisma.$storyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      author: string | null
      title: string | null
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type topicGetPayload<S extends boolean | null | undefined | topicDefaultArgs> = $Result.GetResult<Prisma.$topicPayload, S>

  type topicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<topicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface topicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['topic'], meta: { name: 'topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {topicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends topicFindUniqueArgs>(args: SelectSubset<T, topicFindUniqueArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {topicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends topicFindUniqueOrThrowArgs>(args: SelectSubset<T, topicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends topicFindFirstArgs>(args?: SelectSubset<T, topicFindFirstArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends topicFindFirstOrThrowArgs>(args?: SelectSubset<T, topicFindFirstOrThrowArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends topicFindManyArgs>(args?: SelectSubset<T, topicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {topicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends topicCreateArgs>(args: SelectSubset<T, topicCreateArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {topicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends topicCreateManyArgs>(args?: SelectSubset<T, topicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {topicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends topicCreateManyAndReturnArgs>(args?: SelectSubset<T, topicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topic.
     * @param {topicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends topicDeleteArgs>(args: SelectSubset<T, topicDeleteArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {topicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends topicUpdateArgs>(args: SelectSubset<T, topicUpdateArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {topicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends topicDeleteManyArgs>(args?: SelectSubset<T, topicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends topicUpdateManyArgs>(args: SelectSubset<T, topicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {topicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
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
    updateManyAndReturn<T extends topicUpdateManyAndReturnArgs>(args: SelectSubset<T, topicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topic.
     * @param {topicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends topicUpsertArgs>(args: SelectSubset<T, topicUpsertArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends topicCountArgs>(
      args?: Subset<T, topicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicGroupByArgs} args - Group by arguments.
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
      T extends topicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: topicGroupByArgs['orderBy'] }
        : { orderBy?: topicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, topicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the topic model
   */
  readonly fields: topicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__topicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    story_story_topicTotopic<T extends topic$story_story_topicTotopicArgs<ExtArgs> = {}>(args?: Subset<T, topic$story_story_topicTotopicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the topic model
   */
  interface topicFieldRefs {
    readonly id: FieldRef<"topic", 'Int'>
    readonly name: FieldRef<"topic", 'String'>
    readonly author: FieldRef<"topic", 'String'>
    readonly title: FieldRef<"topic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * topic findUnique
   */
  export type topicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter, which topic to fetch.
     */
    where: topicWhereUniqueInput
  }

  /**
   * topic findUniqueOrThrow
   */
  export type topicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter, which topic to fetch.
     */
    where: topicWhereUniqueInput
  }

  /**
   * topic findFirst
   */
  export type topicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter, which topic to fetch.
     */
    where?: topicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicOrderByWithRelationInput | topicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for topics.
     */
    cursor?: topicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * topic findFirstOrThrow
   */
  export type topicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter, which topic to fetch.
     */
    where?: topicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicOrderByWithRelationInput | topicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for topics.
     */
    cursor?: topicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * topic findMany
   */
  export type topicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter, which topics to fetch.
     */
    where?: topicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicOrderByWithRelationInput | topicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing topics.
     */
    cursor?: topicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * topic create
   */
  export type topicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * The data needed to create a topic.
     */
    data?: XOR<topicCreateInput, topicUncheckedCreateInput>
  }

  /**
   * topic createMany
   */
  export type topicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many topics.
     */
    data: topicCreateManyInput | topicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * topic createManyAndReturn
   */
  export type topicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * The data used to create many topics.
     */
    data: topicCreateManyInput | topicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * topic update
   */
  export type topicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * The data needed to update a topic.
     */
    data: XOR<topicUpdateInput, topicUncheckedUpdateInput>
    /**
     * Choose, which topic to update.
     */
    where: topicWhereUniqueInput
  }

  /**
   * topic updateMany
   */
  export type topicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update topics.
     */
    data: XOR<topicUpdateManyMutationInput, topicUncheckedUpdateManyInput>
    /**
     * Filter which topics to update
     */
    where?: topicWhereInput
    /**
     * Limit how many topics to update.
     */
    limit?: number
  }

  /**
   * topic updateManyAndReturn
   */
  export type topicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * The data used to update topics.
     */
    data: XOR<topicUpdateManyMutationInput, topicUncheckedUpdateManyInput>
    /**
     * Filter which topics to update
     */
    where?: topicWhereInput
    /**
     * Limit how many topics to update.
     */
    limit?: number
  }

  /**
   * topic upsert
   */
  export type topicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * The filter to search for the topic to update in case it exists.
     */
    where: topicWhereUniqueInput
    /**
     * In case the topic found by the `where` argument doesn't exist, create a new topic with this data.
     */
    create: XOR<topicCreateInput, topicUncheckedCreateInput>
    /**
     * In case the topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<topicUpdateInput, topicUncheckedUpdateInput>
  }

  /**
   * topic delete
   */
  export type topicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter which topic to delete.
     */
    where: topicWhereUniqueInput
  }

  /**
   * topic deleteMany
   */
  export type topicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which topics to delete
     */
    where?: topicWhereInput
    /**
     * Limit how many topics to delete.
     */
    limit?: number
  }

  /**
   * topic.story_story_topicTotopic
   */
  export type topic$story_story_topicTotopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the story
     */
    select?: storySelect<ExtArgs> | null
    /**
     * Omit specific fields from the story
     */
    omit?: storyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storyInclude<ExtArgs> | null
    where?: storyWhereInput
    orderBy?: storyOrderByWithRelationInput | storyOrderByWithRelationInput[]
    cursor?: storyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * topic without action
   */
  export type topicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StoryScalarFieldEnum: {
    id: 'id',
    author: 'author',
    title: 'title',
    shortintro: 'shortintro',
    topic: 'topic',
    markdowncontent: 'markdowncontent',
    status: 'status'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    author: 'author',
    title: 'title'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'story_status'
   */
  export type Enumstory_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'story_status'>
    


  /**
   * Reference to a field of type 'story_status[]'
   */
  export type ListEnumstory_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'story_status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type storyWhereInput = {
    AND?: storyWhereInput | storyWhereInput[]
    OR?: storyWhereInput[]
    NOT?: storyWhereInput | storyWhereInput[]
    id?: IntFilter<"story"> | number
    author?: StringFilter<"story"> | string
    title?: StringNullableFilter<"story"> | string | null
    shortintro?: StringNullableFilter<"story"> | string | null
    topic?: StringNullableFilter<"story"> | string | null
    markdowncontent?: StringNullableFilter<"story"> | string | null
    status?: Enumstory_statusNullableFilter<"story"> | $Enums.story_status | null
    topic_story_topicTotopic?: XOR<TopicNullableScalarRelationFilter, topicWhereInput> | null
  }

  export type storyOrderByWithRelationInput = {
    id?: SortOrder
    author?: SortOrder
    title?: SortOrderInput | SortOrder
    shortintro?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    markdowncontent?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    topic_story_topicTotopic?: topicOrderByWithRelationInput
  }

  export type storyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: storyWhereInput | storyWhereInput[]
    OR?: storyWhereInput[]
    NOT?: storyWhereInput | storyWhereInput[]
    author?: StringFilter<"story"> | string
    shortintro?: StringNullableFilter<"story"> | string | null
    topic?: StringNullableFilter<"story"> | string | null
    markdowncontent?: StringNullableFilter<"story"> | string | null
    status?: Enumstory_statusNullableFilter<"story"> | $Enums.story_status | null
    topic_story_topicTotopic?: XOR<TopicNullableScalarRelationFilter, topicWhereInput> | null
  }, "id" | "title">

  export type storyOrderByWithAggregationInput = {
    id?: SortOrder
    author?: SortOrder
    title?: SortOrderInput | SortOrder
    shortintro?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    markdowncontent?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: storyCountOrderByAggregateInput
    _avg?: storyAvgOrderByAggregateInput
    _max?: storyMaxOrderByAggregateInput
    _min?: storyMinOrderByAggregateInput
    _sum?: storySumOrderByAggregateInput
  }

  export type storyScalarWhereWithAggregatesInput = {
    AND?: storyScalarWhereWithAggregatesInput | storyScalarWhereWithAggregatesInput[]
    OR?: storyScalarWhereWithAggregatesInput[]
    NOT?: storyScalarWhereWithAggregatesInput | storyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"story"> | number
    author?: StringWithAggregatesFilter<"story"> | string
    title?: StringNullableWithAggregatesFilter<"story"> | string | null
    shortintro?: StringNullableWithAggregatesFilter<"story"> | string | null
    topic?: StringNullableWithAggregatesFilter<"story"> | string | null
    markdowncontent?: StringNullableWithAggregatesFilter<"story"> | string | null
    status?: Enumstory_statusNullableWithAggregatesFilter<"story"> | $Enums.story_status | null
  }

  export type topicWhereInput = {
    AND?: topicWhereInput | topicWhereInput[]
    OR?: topicWhereInput[]
    NOT?: topicWhereInput | topicWhereInput[]
    id?: IntFilter<"topic"> | number
    name?: StringNullableFilter<"topic"> | string | null
    author?: StringNullableFilter<"topic"> | string | null
    title?: StringNullableFilter<"topic"> | string | null
    story_story_topicTotopic?: StoryListRelationFilter
  }

  export type topicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    story_story_topicTotopic?: storyOrderByRelationAggregateInput
  }

  export type topicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    title?: string
    AND?: topicWhereInput | topicWhereInput[]
    OR?: topicWhereInput[]
    NOT?: topicWhereInput | topicWhereInput[]
    author?: StringNullableFilter<"topic"> | string | null
    story_story_topicTotopic?: StoryListRelationFilter
  }, "id" | "name" | "title">

  export type topicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    _count?: topicCountOrderByAggregateInput
    _avg?: topicAvgOrderByAggregateInput
    _max?: topicMaxOrderByAggregateInput
    _min?: topicMinOrderByAggregateInput
    _sum?: topicSumOrderByAggregateInput
  }

  export type topicScalarWhereWithAggregatesInput = {
    AND?: topicScalarWhereWithAggregatesInput | topicScalarWhereWithAggregatesInput[]
    OR?: topicScalarWhereWithAggregatesInput[]
    NOT?: topicScalarWhereWithAggregatesInput | topicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"topic"> | number
    name?: StringNullableWithAggregatesFilter<"topic"> | string | null
    author?: StringNullableWithAggregatesFilter<"topic"> | string | null
    title?: StringNullableWithAggregatesFilter<"topic"> | string | null
  }

  export type storyCreateInput = {
    author: string
    title?: string | null
    shortintro?: string | null
    markdowncontent?: string | null
    status?: $Enums.story_status | null
    topic_story_topicTotopic?: topicCreateNestedOneWithoutStory_story_topicTotopicInput
  }

  export type storyUncheckedCreateInput = {
    id?: number
    author: string
    title?: string | null
    shortintro?: string | null
    topic?: string | null
    markdowncontent?: string | null
    status?: $Enums.story_status | null
  }

  export type storyUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    shortintro?: NullableStringFieldUpdateOperationsInput | string | null
    markdowncontent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstory_statusFieldUpdateOperationsInput | $Enums.story_status | null
    topic_story_topicTotopic?: topicUpdateOneWithoutStory_story_topicTotopicNestedInput
  }

  export type storyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    shortintro?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    markdowncontent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstory_statusFieldUpdateOperationsInput | $Enums.story_status | null
  }

  export type storyCreateManyInput = {
    id?: number
    author: string
    title?: string | null
    shortintro?: string | null
    topic?: string | null
    markdowncontent?: string | null
    status?: $Enums.story_status | null
  }

  export type storyUpdateManyMutationInput = {
    author?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    shortintro?: NullableStringFieldUpdateOperationsInput | string | null
    markdowncontent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstory_statusFieldUpdateOperationsInput | $Enums.story_status | null
  }

  export type storyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    shortintro?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    markdowncontent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstory_statusFieldUpdateOperationsInput | $Enums.story_status | null
  }

  export type topicCreateInput = {
    name?: string | null
    author?: string | null
    title?: string | null
    story_story_topicTotopic?: storyCreateNestedManyWithoutTopic_story_topicTotopicInput
  }

  export type topicUncheckedCreateInput = {
    id?: number
    name?: string | null
    author?: string | null
    title?: string | null
    story_story_topicTotopic?: storyUncheckedCreateNestedManyWithoutTopic_story_topicTotopicInput
  }

  export type topicUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    story_story_topicTotopic?: storyUpdateManyWithoutTopic_story_topicTotopicNestedInput
  }

  export type topicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    story_story_topicTotopic?: storyUncheckedUpdateManyWithoutTopic_story_topicTotopicNestedInput
  }

  export type topicCreateManyInput = {
    id?: number
    name?: string | null
    author?: string | null
    title?: string | null
  }

  export type topicUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type topicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumstory_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.story_status | Enumstory_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.story_status[] | ListEnumstory_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.story_status[] | ListEnumstory_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstory_statusNullableFilter<$PrismaModel> | $Enums.story_status | null
  }

  export type TopicNullableScalarRelationFilter = {
    is?: topicWhereInput | null
    isNot?: topicWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type storyCountOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    title?: SortOrder
    shortintro?: SortOrder
    topic?: SortOrder
    markdowncontent?: SortOrder
    status?: SortOrder
  }

  export type storyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type storyMaxOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    title?: SortOrder
    shortintro?: SortOrder
    topic?: SortOrder
    markdowncontent?: SortOrder
    status?: SortOrder
  }

  export type storyMinOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    title?: SortOrder
    shortintro?: SortOrder
    topic?: SortOrder
    markdowncontent?: SortOrder
    status?: SortOrder
  }

  export type storySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumstory_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.story_status | Enumstory_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.story_status[] | ListEnumstory_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.story_status[] | ListEnumstory_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstory_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.story_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstory_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumstory_statusNullableFilter<$PrismaModel>
  }

  export type StoryListRelationFilter = {
    every?: storyWhereInput
    some?: storyWhereInput
    none?: storyWhereInput
  }

  export type storyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type topicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    title?: SortOrder
  }

  export type topicAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type topicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    title?: SortOrder
  }

  export type topicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    title?: SortOrder
  }

  export type topicSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type topicCreateNestedOneWithoutStory_story_topicTotopicInput = {
    create?: XOR<topicCreateWithoutStory_story_topicTotopicInput, topicUncheckedCreateWithoutStory_story_topicTotopicInput>
    connectOrCreate?: topicCreateOrConnectWithoutStory_story_topicTotopicInput
    connect?: topicWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumstory_statusFieldUpdateOperationsInput = {
    set?: $Enums.story_status | null
  }

  export type topicUpdateOneWithoutStory_story_topicTotopicNestedInput = {
    create?: XOR<topicCreateWithoutStory_story_topicTotopicInput, topicUncheckedCreateWithoutStory_story_topicTotopicInput>
    connectOrCreate?: topicCreateOrConnectWithoutStory_story_topicTotopicInput
    upsert?: topicUpsertWithoutStory_story_topicTotopicInput
    disconnect?: topicWhereInput | boolean
    delete?: topicWhereInput | boolean
    connect?: topicWhereUniqueInput
    update?: XOR<XOR<topicUpdateToOneWithWhereWithoutStory_story_topicTotopicInput, topicUpdateWithoutStory_story_topicTotopicInput>, topicUncheckedUpdateWithoutStory_story_topicTotopicInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type storyCreateNestedManyWithoutTopic_story_topicTotopicInput = {
    create?: XOR<storyCreateWithoutTopic_story_topicTotopicInput, storyUncheckedCreateWithoutTopic_story_topicTotopicInput> | storyCreateWithoutTopic_story_topicTotopicInput[] | storyUncheckedCreateWithoutTopic_story_topicTotopicInput[]
    connectOrCreate?: storyCreateOrConnectWithoutTopic_story_topicTotopicInput | storyCreateOrConnectWithoutTopic_story_topicTotopicInput[]
    createMany?: storyCreateManyTopic_story_topicTotopicInputEnvelope
    connect?: storyWhereUniqueInput | storyWhereUniqueInput[]
  }

  export type storyUncheckedCreateNestedManyWithoutTopic_story_topicTotopicInput = {
    create?: XOR<storyCreateWithoutTopic_story_topicTotopicInput, storyUncheckedCreateWithoutTopic_story_topicTotopicInput> | storyCreateWithoutTopic_story_topicTotopicInput[] | storyUncheckedCreateWithoutTopic_story_topicTotopicInput[]
    connectOrCreate?: storyCreateOrConnectWithoutTopic_story_topicTotopicInput | storyCreateOrConnectWithoutTopic_story_topicTotopicInput[]
    createMany?: storyCreateManyTopic_story_topicTotopicInputEnvelope
    connect?: storyWhereUniqueInput | storyWhereUniqueInput[]
  }

  export type storyUpdateManyWithoutTopic_story_topicTotopicNestedInput = {
    create?: XOR<storyCreateWithoutTopic_story_topicTotopicInput, storyUncheckedCreateWithoutTopic_story_topicTotopicInput> | storyCreateWithoutTopic_story_topicTotopicInput[] | storyUncheckedCreateWithoutTopic_story_topicTotopicInput[]
    connectOrCreate?: storyCreateOrConnectWithoutTopic_story_topicTotopicInput | storyCreateOrConnectWithoutTopic_story_topicTotopicInput[]
    upsert?: storyUpsertWithWhereUniqueWithoutTopic_story_topicTotopicInput | storyUpsertWithWhereUniqueWithoutTopic_story_topicTotopicInput[]
    createMany?: storyCreateManyTopic_story_topicTotopicInputEnvelope
    set?: storyWhereUniqueInput | storyWhereUniqueInput[]
    disconnect?: storyWhereUniqueInput | storyWhereUniqueInput[]
    delete?: storyWhereUniqueInput | storyWhereUniqueInput[]
    connect?: storyWhereUniqueInput | storyWhereUniqueInput[]
    update?: storyUpdateWithWhereUniqueWithoutTopic_story_topicTotopicInput | storyUpdateWithWhereUniqueWithoutTopic_story_topicTotopicInput[]
    updateMany?: storyUpdateManyWithWhereWithoutTopic_story_topicTotopicInput | storyUpdateManyWithWhereWithoutTopic_story_topicTotopicInput[]
    deleteMany?: storyScalarWhereInput | storyScalarWhereInput[]
  }

  export type storyUncheckedUpdateManyWithoutTopic_story_topicTotopicNestedInput = {
    create?: XOR<storyCreateWithoutTopic_story_topicTotopicInput, storyUncheckedCreateWithoutTopic_story_topicTotopicInput> | storyCreateWithoutTopic_story_topicTotopicInput[] | storyUncheckedCreateWithoutTopic_story_topicTotopicInput[]
    connectOrCreate?: storyCreateOrConnectWithoutTopic_story_topicTotopicInput | storyCreateOrConnectWithoutTopic_story_topicTotopicInput[]
    upsert?: storyUpsertWithWhereUniqueWithoutTopic_story_topicTotopicInput | storyUpsertWithWhereUniqueWithoutTopic_story_topicTotopicInput[]
    createMany?: storyCreateManyTopic_story_topicTotopicInputEnvelope
    set?: storyWhereUniqueInput | storyWhereUniqueInput[]
    disconnect?: storyWhereUniqueInput | storyWhereUniqueInput[]
    delete?: storyWhereUniqueInput | storyWhereUniqueInput[]
    connect?: storyWhereUniqueInput | storyWhereUniqueInput[]
    update?: storyUpdateWithWhereUniqueWithoutTopic_story_topicTotopicInput | storyUpdateWithWhereUniqueWithoutTopic_story_topicTotopicInput[]
    updateMany?: storyUpdateManyWithWhereWithoutTopic_story_topicTotopicInput | storyUpdateManyWithWhereWithoutTopic_story_topicTotopicInput[]
    deleteMany?: storyScalarWhereInput | storyScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumstory_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.story_status | Enumstory_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.story_status[] | ListEnumstory_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.story_status[] | ListEnumstory_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstory_statusNullableFilter<$PrismaModel> | $Enums.story_status | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumstory_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.story_status | Enumstory_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.story_status[] | ListEnumstory_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.story_status[] | ListEnumstory_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstory_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.story_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstory_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumstory_statusNullableFilter<$PrismaModel>
  }

  export type topicCreateWithoutStory_story_topicTotopicInput = {
    name?: string | null
    author?: string | null
    title?: string | null
  }

  export type topicUncheckedCreateWithoutStory_story_topicTotopicInput = {
    id?: number
    name?: string | null
    author?: string | null
    title?: string | null
  }

  export type topicCreateOrConnectWithoutStory_story_topicTotopicInput = {
    where: topicWhereUniqueInput
    create: XOR<topicCreateWithoutStory_story_topicTotopicInput, topicUncheckedCreateWithoutStory_story_topicTotopicInput>
  }

  export type topicUpsertWithoutStory_story_topicTotopicInput = {
    update: XOR<topicUpdateWithoutStory_story_topicTotopicInput, topicUncheckedUpdateWithoutStory_story_topicTotopicInput>
    create: XOR<topicCreateWithoutStory_story_topicTotopicInput, topicUncheckedCreateWithoutStory_story_topicTotopicInput>
    where?: topicWhereInput
  }

  export type topicUpdateToOneWithWhereWithoutStory_story_topicTotopicInput = {
    where?: topicWhereInput
    data: XOR<topicUpdateWithoutStory_story_topicTotopicInput, topicUncheckedUpdateWithoutStory_story_topicTotopicInput>
  }

  export type topicUpdateWithoutStory_story_topicTotopicInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type topicUncheckedUpdateWithoutStory_story_topicTotopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storyCreateWithoutTopic_story_topicTotopicInput = {
    author: string
    title?: string | null
    shortintro?: string | null
    markdowncontent?: string | null
    status?: $Enums.story_status | null
  }

  export type storyUncheckedCreateWithoutTopic_story_topicTotopicInput = {
    id?: number
    author: string
    title?: string | null
    shortintro?: string | null
    markdowncontent?: string | null
    status?: $Enums.story_status | null
  }

  export type storyCreateOrConnectWithoutTopic_story_topicTotopicInput = {
    where: storyWhereUniqueInput
    create: XOR<storyCreateWithoutTopic_story_topicTotopicInput, storyUncheckedCreateWithoutTopic_story_topicTotopicInput>
  }

  export type storyCreateManyTopic_story_topicTotopicInputEnvelope = {
    data: storyCreateManyTopic_story_topicTotopicInput | storyCreateManyTopic_story_topicTotopicInput[]
    skipDuplicates?: boolean
  }

  export type storyUpsertWithWhereUniqueWithoutTopic_story_topicTotopicInput = {
    where: storyWhereUniqueInput
    update: XOR<storyUpdateWithoutTopic_story_topicTotopicInput, storyUncheckedUpdateWithoutTopic_story_topicTotopicInput>
    create: XOR<storyCreateWithoutTopic_story_topicTotopicInput, storyUncheckedCreateWithoutTopic_story_topicTotopicInput>
  }

  export type storyUpdateWithWhereUniqueWithoutTopic_story_topicTotopicInput = {
    where: storyWhereUniqueInput
    data: XOR<storyUpdateWithoutTopic_story_topicTotopicInput, storyUncheckedUpdateWithoutTopic_story_topicTotopicInput>
  }

  export type storyUpdateManyWithWhereWithoutTopic_story_topicTotopicInput = {
    where: storyScalarWhereInput
    data: XOR<storyUpdateManyMutationInput, storyUncheckedUpdateManyWithoutTopic_story_topicTotopicInput>
  }

  export type storyScalarWhereInput = {
    AND?: storyScalarWhereInput | storyScalarWhereInput[]
    OR?: storyScalarWhereInput[]
    NOT?: storyScalarWhereInput | storyScalarWhereInput[]
    id?: IntFilter<"story"> | number
    author?: StringFilter<"story"> | string
    title?: StringNullableFilter<"story"> | string | null
    shortintro?: StringNullableFilter<"story"> | string | null
    topic?: StringNullableFilter<"story"> | string | null
    markdowncontent?: StringNullableFilter<"story"> | string | null
    status?: Enumstory_statusNullableFilter<"story"> | $Enums.story_status | null
  }

  export type storyCreateManyTopic_story_topicTotopicInput = {
    id?: number
    author: string
    title?: string | null
    shortintro?: string | null
    markdowncontent?: string | null
    status?: $Enums.story_status | null
  }

  export type storyUpdateWithoutTopic_story_topicTotopicInput = {
    author?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    shortintro?: NullableStringFieldUpdateOperationsInput | string | null
    markdowncontent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstory_statusFieldUpdateOperationsInput | $Enums.story_status | null
  }

  export type storyUncheckedUpdateWithoutTopic_story_topicTotopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    shortintro?: NullableStringFieldUpdateOperationsInput | string | null
    markdowncontent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstory_statusFieldUpdateOperationsInput | $Enums.story_status | null
  }

  export type storyUncheckedUpdateManyWithoutTopic_story_topicTotopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    shortintro?: NullableStringFieldUpdateOperationsInput | string | null
    markdowncontent?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumstory_statusFieldUpdateOperationsInput | $Enums.story_status | null
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