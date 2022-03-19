import { api } from 'services/dipdup-api/baseApi'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bigint: any
  jsonb: any
  numeric: any
  smallint: any
  timestamptz: any
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']>
  _gt?: InputMaybe<Scalars['bigint']>
  _gte?: InputMaybe<Scalars['bigint']>
  _in?: InputMaybe<Array<Scalars['bigint']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['bigint']>
  _lte?: InputMaybe<Scalars['bigint']>
  _neq?: InputMaybe<Scalars['bigint']>
  _nin?: InputMaybe<Array<Scalars['bigint']>>
}

/** columns and relationships of "dipdup_contract" */
export type DipdupContract = {
  __typename?: 'dipdup_contract'
  address: Scalars['String']
  createdAt: Scalars['timestamptz']
  name: Scalars['String']
  typename?: Maybe<Scalars['String']>
  updatedAt: Scalars['timestamptz']
}

/** Boolean expression to filter rows from the table "dipdup_contract". All fields are combined with a logical 'AND'. */
export type DipdupContractBoolExp = {
  _and?: InputMaybe<Array<DipdupContractBoolExp>>
  _not?: InputMaybe<DipdupContractBoolExp>
  _or?: InputMaybe<Array<DipdupContractBoolExp>>
  address?: InputMaybe<StringComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  typename?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** Ordering options when selecting data from "dipdup_contract". */
export type DipdupContractOrderBy = {
  address?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  typename?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** select columns of table "dipdup_contract" */
export enum DipdupContractSelectColumn {
  /** column name */
  ADDRESS = 'address',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  NAME = 'name',
  /** column name */
  TYPENAME = 'typename',
  /** column name */
  UPDATEDAT = 'updatedAt',
}

/** columns and relationships of "dipdup_head" */
export type DipdupHead = {
  __typename?: 'dipdup_head'
  createdAt: Scalars['timestamptz']
  hash: Scalars['String']
  level: Scalars['Int']
  name: Scalars['String']
  timestamp: Scalars['timestamptz']
  updatedAt: Scalars['timestamptz']
}

/** Boolean expression to filter rows from the table "dipdup_head". All fields are combined with a logical 'AND'. */
export type DipdupHeadBoolExp = {
  _and?: InputMaybe<Array<DipdupHeadBoolExp>>
  _not?: InputMaybe<DipdupHeadBoolExp>
  _or?: InputMaybe<Array<DipdupHeadBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  hash?: InputMaybe<StringComparisonExp>
  level?: InputMaybe<IntComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  timestamp?: InputMaybe<TimestamptzComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** Ordering options when selecting data from "dipdup_head". */
export type DipdupHeadOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  hash?: InputMaybe<OrderBy>
  level?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  timestamp?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** select columns of table "dipdup_head" */
export enum DipdupHeadSelectColumn {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  HASH = 'hash',
  /** column name */
  LEVEL = 'level',
  /** column name */
  NAME = 'name',
  /** column name */
  TIMESTAMP = 'timestamp',
  /** column name */
  UPDATEDAT = 'updatedAt',
}

/** columns and relationships of "dipdup_head_status" */
export type DipdupHeadStatus = {
  __typename?: 'dipdup_head_status'
  name?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

/** Boolean expression to filter rows from the table "dipdup_head_status". All fields are combined with a logical 'AND'. */
export type DipdupHeadStatusBoolExp = {
  _and?: InputMaybe<Array<DipdupHeadStatusBoolExp>>
  _not?: InputMaybe<DipdupHeadStatusBoolExp>
  _or?: InputMaybe<Array<DipdupHeadStatusBoolExp>>
  name?: InputMaybe<StringComparisonExp>
  status?: InputMaybe<StringComparisonExp>
}

/** Ordering options when selecting data from "dipdup_head_status". */
export type DipdupHeadStatusOrderBy = {
  name?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
}

/** select columns of table "dipdup_head_status" */
export enum DipdupHeadStatusSelectColumn {
  /** column name */
  NAME = 'name',
  /** column name */
  STATUS = 'status',
}

/** columns and relationships of "dipdup_index" */
export type DipdupIndex = {
  __typename?: 'dipdup_index'
  configHash: Scalars['String']
  createdAt: Scalars['timestamptz']
  level: Scalars['Int']
  name: Scalars['String']
  /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
  status: Scalars['String']
  template?: Maybe<Scalars['String']>
  templateValues?: Maybe<Scalars['jsonb']>
  /** operation: operation\nbig_map: big_map\nhead: head */
  type: Scalars['String']
  updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "dipdup_index" */
export type DipdupIndexTemplateValuesArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** Boolean expression to filter rows from the table "dipdup_index". All fields are combined with a logical 'AND'. */
export type DipdupIndexBoolExp = {
  _and?: InputMaybe<Array<DipdupIndexBoolExp>>
  _not?: InputMaybe<DipdupIndexBoolExp>
  _or?: InputMaybe<Array<DipdupIndexBoolExp>>
  configHash?: InputMaybe<StringComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  level?: InputMaybe<IntComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  status?: InputMaybe<StringComparisonExp>
  template?: InputMaybe<StringComparisonExp>
  templateValues?: InputMaybe<JsonbComparisonExp>
  type?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** Ordering options when selecting data from "dipdup_index". */
export type DipdupIndexOrderBy = {
  configHash?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  level?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  template?: InputMaybe<OrderBy>
  templateValues?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** select columns of table "dipdup_index" */
export enum DipdupIndexSelectColumn {
  /** column name */
  CONFIGHASH = 'configHash',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  LEVEL = 'level',
  /** column name */
  NAME = 'name',
  /** column name */
  STATUS = 'status',
  /** column name */
  TEMPLATE = 'template',
  /** column name */
  TEMPLATEVALUES = 'templateValues',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATEDAT = 'updatedAt',
}

/** columns and relationships of "dipdup_schema" */
export type DipdupSchema = {
  __typename?: 'dipdup_schema'
  createdAt: Scalars['timestamptz']
  hash: Scalars['String']
  name: Scalars['String']
  /** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
  reindex?: Maybe<Scalars['String']>
  updatedAt: Scalars['timestamptz']
}

/** Boolean expression to filter rows from the table "dipdup_schema". All fields are combined with a logical 'AND'. */
export type DipdupSchemaBoolExp = {
  _and?: InputMaybe<Array<DipdupSchemaBoolExp>>
  _not?: InputMaybe<DipdupSchemaBoolExp>
  _or?: InputMaybe<Array<DipdupSchemaBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  hash?: InputMaybe<StringComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  reindex?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** Ordering options when selecting data from "dipdup_schema". */
export type DipdupSchemaOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  hash?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  reindex?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** select columns of table "dipdup_schema" */
export enum DipdupSchemaSelectColumn {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  HASH = 'hash',
  /** column name */
  NAME = 'name',
  /** column name */
  REINDEX = 'reindex',
  /** column name */
  UPDATEDAT = 'updatedAt',
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>
  _eq?: InputMaybe<Scalars['jsonb']>
  _gt?: InputMaybe<Scalars['jsonb']>
  _gte?: InputMaybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>
  _in?: InputMaybe<Array<Scalars['jsonb']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['jsonb']>
  _lte?: InputMaybe<Scalars['jsonb']>
  _neq?: InputMaybe<Scalars['jsonb']>
  _nin?: InputMaybe<Array<Scalars['jsonb']>>
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last',
}

/** columns and relationships of "position" */
export type Position = {
  __typename?: 'position'
  avgSharePx: Scalars['numeric']
  id: Scalars['Int']
  realizedPl: Scalars['numeric']
  sharesQty: Scalars['bigint']
  symbol: Scalars['String']
  trader: Scalars['String']
}

/** Boolean expression to filter rows from the table "position". All fields are combined with a logical 'AND'. */
export type PositionBoolExp = {
  _and?: InputMaybe<Array<PositionBoolExp>>
  _not?: InputMaybe<PositionBoolExp>
  _or?: InputMaybe<Array<PositionBoolExp>>
  avgSharePx?: InputMaybe<NumericComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  realizedPl?: InputMaybe<NumericComparisonExp>
  sharesQty?: InputMaybe<BigintComparisonExp>
  symbol?: InputMaybe<StringComparisonExp>
  trader?: InputMaybe<StringComparisonExp>
}

/** Ordering options when selecting data from "position". */
export type PositionOrderBy = {
  avgSharePx?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  realizedPl?: InputMaybe<OrderBy>
  sharesQty?: InputMaybe<OrderBy>
  symbol?: InputMaybe<OrderBy>
  trader?: InputMaybe<OrderBy>
}

/** select columns of table "position" */
export enum PositionSelectColumn {
  /** column name */
  AVGSHAREPX = 'avgSharePx',
  /** column name */
  ID = 'id',
  /** column name */
  REALIZEDPL = 'realizedPl',
  /** column name */
  SHARESQTY = 'sharesQty',
  /** column name */
  SYMBOL = 'symbol',
  /** column name */
  TRADER = 'trader',
}

export type QueryRoot = {
  __typename?: 'query_root'
  /** fetch data from the table: "dipdup_contract" */
  dipdupContract: Array<DipdupContract>
  /** fetch data from the table: "dipdup_contract" using primary key columns */
  dipdupContractByPk?: Maybe<DipdupContract>
  /** fetch data from the table: "dipdup_head" */
  dipdupHead: Array<DipdupHead>
  /** fetch data from the table: "dipdup_head" using primary key columns */
  dipdupHeadByPk?: Maybe<DipdupHead>
  /** fetch data from the table: "dipdup_head_status" */
  dipdupHeadStatus: Array<DipdupHeadStatus>
  /** fetch data from the table: "dipdup_index" */
  dipdupIndex: Array<DipdupIndex>
  /** fetch data from the table: "dipdup_index" using primary key columns */
  dipdupIndexByPk?: Maybe<DipdupIndex>
  /** fetch data from the table: "dipdup_schema" */
  dipdupSchema: Array<DipdupSchema>
  /** fetch data from the table: "dipdup_schema" using primary key columns */
  dipdupSchemaByPk?: Maybe<DipdupSchema>
  /** fetch data from the table: "position" */
  position: Array<Position>
  /** fetch data from the table: "position" using primary key columns */
  positionByPk?: Maybe<Position>
  /** fetch data from the table: "trade" */
  trade: Array<Trade>
  /** fetch data from the table: "trade" using primary key columns */
  tradeByPk?: Maybe<Trade>
}

export type QueryRootDipdupContractArgs = {
  distinct_on?: InputMaybe<Array<DipdupContractSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupContractOrderBy>>
  where?: InputMaybe<DipdupContractBoolExp>
}

export type QueryRootDipdupContractByPkArgs = {
  name: Scalars['String']
}

export type QueryRootDipdupHeadArgs = {
  distinct_on?: InputMaybe<Array<DipdupHeadSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupHeadOrderBy>>
  where?: InputMaybe<DipdupHeadBoolExp>
}

export type QueryRootDipdupHeadByPkArgs = {
  name: Scalars['String']
}

export type QueryRootDipdupHeadStatusArgs = {
  distinct_on?: InputMaybe<Array<DipdupHeadStatusSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupHeadStatusOrderBy>>
  where?: InputMaybe<DipdupHeadStatusBoolExp>
}

export type QueryRootDipdupIndexArgs = {
  distinct_on?: InputMaybe<Array<DipdupIndexSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupIndexOrderBy>>
  where?: InputMaybe<DipdupIndexBoolExp>
}

export type QueryRootDipdupIndexByPkArgs = {
  name: Scalars['String']
}

export type QueryRootDipdupSchemaArgs = {
  distinct_on?: InputMaybe<Array<DipdupSchemaSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupSchemaOrderBy>>
  where?: InputMaybe<DipdupSchemaBoolExp>
}

export type QueryRootDipdupSchemaByPkArgs = {
  name: Scalars['String']
}

export type QueryRootPositionArgs = {
  distinct_on?: InputMaybe<Array<PositionSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<PositionOrderBy>>
  where?: InputMaybe<PositionBoolExp>
}

export type QueryRootPositionByPkArgs = {
  id: Scalars['Int']
}

export type QueryRootTradeArgs = {
  distinct_on?: InputMaybe<Array<TradeSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<TradeOrderBy>>
  where?: InputMaybe<TradeBoolExp>
}

export type QueryRootTradeByPkArgs = {
  id: Scalars['Int']
}

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type SmallintComparisonExp = {
  _eq?: InputMaybe<Scalars['smallint']>
  _gt?: InputMaybe<Scalars['smallint']>
  _gte?: InputMaybe<Scalars['smallint']>
  _in?: InputMaybe<Array<Scalars['smallint']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['smallint']>
  _lte?: InputMaybe<Scalars['smallint']>
  _neq?: InputMaybe<Scalars['smallint']>
  _nin?: InputMaybe<Array<Scalars['smallint']>>
}

export type SubscriptionRoot = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "dipdup_contract" */
  dipdupContract: Array<DipdupContract>
  /** fetch data from the table: "dipdup_contract" using primary key columns */
  dipdupContractByPk?: Maybe<DipdupContract>
  /** fetch data from the table: "dipdup_head" */
  dipdupHead: Array<DipdupHead>
  /** fetch data from the table: "dipdup_head" using primary key columns */
  dipdupHeadByPk?: Maybe<DipdupHead>
  /** fetch data from the table: "dipdup_head_status" */
  dipdupHeadStatus: Array<DipdupHeadStatus>
  /** fetch data from the table: "dipdup_index" */
  dipdupIndex: Array<DipdupIndex>
  /** fetch data from the table: "dipdup_index" using primary key columns */
  dipdupIndexByPk?: Maybe<DipdupIndex>
  /** fetch data from the table: "dipdup_schema" */
  dipdupSchema: Array<DipdupSchema>
  /** fetch data from the table: "dipdup_schema" using primary key columns */
  dipdupSchemaByPk?: Maybe<DipdupSchema>
  /** fetch data from the table: "position" */
  position: Array<Position>
  /** fetch data from the table: "position" using primary key columns */
  positionByPk?: Maybe<Position>
  /** fetch data from the table: "trade" */
  trade: Array<Trade>
  /** fetch data from the table: "trade" using primary key columns */
  tradeByPk?: Maybe<Trade>
}

export type SubscriptionRootDipdupContractArgs = {
  distinct_on?: InputMaybe<Array<DipdupContractSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupContractOrderBy>>
  where?: InputMaybe<DipdupContractBoolExp>
}

export type SubscriptionRootDipdupContractByPkArgs = {
  name: Scalars['String']
}

export type SubscriptionRootDipdupHeadArgs = {
  distinct_on?: InputMaybe<Array<DipdupHeadSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupHeadOrderBy>>
  where?: InputMaybe<DipdupHeadBoolExp>
}

export type SubscriptionRootDipdupHeadByPkArgs = {
  name: Scalars['String']
}

export type SubscriptionRootDipdupHeadStatusArgs = {
  distinct_on?: InputMaybe<Array<DipdupHeadStatusSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupHeadStatusOrderBy>>
  where?: InputMaybe<DipdupHeadStatusBoolExp>
}

export type SubscriptionRootDipdupIndexArgs = {
  distinct_on?: InputMaybe<Array<DipdupIndexSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupIndexOrderBy>>
  where?: InputMaybe<DipdupIndexBoolExp>
}

export type SubscriptionRootDipdupIndexByPkArgs = {
  name: Scalars['String']
}

export type SubscriptionRootDipdupSchemaArgs = {
  distinct_on?: InputMaybe<Array<DipdupSchemaSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupSchemaOrderBy>>
  where?: InputMaybe<DipdupSchemaBoolExp>
}

export type SubscriptionRootDipdupSchemaByPkArgs = {
  name: Scalars['String']
}

export type SubscriptionRootPositionArgs = {
  distinct_on?: InputMaybe<Array<PositionSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<PositionOrderBy>>
  where?: InputMaybe<PositionBoolExp>
}

export type SubscriptionRootPositionByPkArgs = {
  id: Scalars['Int']
}

export type SubscriptionRootTradeArgs = {
  distinct_on?: InputMaybe<Array<TradeSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<TradeOrderBy>>
  where?: InputMaybe<TradeBoolExp>
}

export type SubscriptionRootTradeByPkArgs = {
  id: Scalars['Int']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "trade" */
export type Trade = {
  __typename?: 'trade'
  id: Scalars['Int']
  level: Scalars['bigint']
  price: Scalars['numeric']
  quantity: Scalars['numeric']
  /** BUY: 1\nSELL: 0 */
  side: Scalars['smallint']
  slippage: Scalars['numeric']
  timestamp: Scalars['timestamptz']
  tokenAddress: Scalars['String']
  trader: Scalars['String']
}

/** Boolean expression to filter rows from the table "trade". All fields are combined with a logical 'AND'. */
export type TradeBoolExp = {
  _and?: InputMaybe<Array<TradeBoolExp>>
  _not?: InputMaybe<TradeBoolExp>
  _or?: InputMaybe<Array<TradeBoolExp>>
  id?: InputMaybe<IntComparisonExp>
  level?: InputMaybe<BigintComparisonExp>
  price?: InputMaybe<NumericComparisonExp>
  quantity?: InputMaybe<NumericComparisonExp>
  side?: InputMaybe<SmallintComparisonExp>
  slippage?: InputMaybe<NumericComparisonExp>
  timestamp?: InputMaybe<TimestamptzComparisonExp>
  tokenAddress?: InputMaybe<StringComparisonExp>
  trader?: InputMaybe<StringComparisonExp>
}

/** Ordering options when selecting data from "trade". */
export type TradeOrderBy = {
  id?: InputMaybe<OrderBy>
  level?: InputMaybe<OrderBy>
  price?: InputMaybe<OrderBy>
  quantity?: InputMaybe<OrderBy>
  side?: InputMaybe<OrderBy>
  slippage?: InputMaybe<OrderBy>
  timestamp?: InputMaybe<OrderBy>
  tokenAddress?: InputMaybe<OrderBy>
  trader?: InputMaybe<OrderBy>
}

/** select columns of table "trade" */
export enum TradeSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  LEVEL = 'level',
  /** column name */
  PRICE = 'price',
  /** column name */
  QUANTITY = 'quantity',
  /** column name */
  SIDE = 'side',
  /** column name */
  SLIPPAGE = 'slippage',
  /** column name */
  TIMESTAMP = 'timestamp',
  /** column name */
  TOKENADDRESS = 'tokenAddress',
  /** column name */
  TRADER = 'trader',
}

export type GetTokenPriceHistoryQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars['timestamptz']>
  tokenAddress?: InputMaybe<Scalars['String']>
}>

export type GetTokenPriceHistoryQuery = {
  __typename?: 'query_root'
  trade: Array<{ __typename?: 'trade'; level: any; price: any; timestamp: any }>
}

export type GetProfileTokensPricesQueryVariables = Exact<{
  tokenAdresses?: InputMaybe<Array<Scalars['String']> | Scalars['String']>
  date?: InputMaybe<Scalars['timestamptz']>
}>

export type GetProfileTokensPricesQuery = {
  __typename?: 'query_root'
  lastPrices: Array<{
    __typename?: 'trade'
    tokenAddress: string
    timestamp: any
    lastPrice: any
  }>
  historyPrices: Array<{
    __typename?: 'trade'
    tokenAddress: string
    timestamp: any
    historyPrice: any
  }>
}

export const GetTokenPriceHistoryDocument = `
    query GetTokenPriceHistory($startDate: timestamptz, $tokenAddress: String) {
  trade(
    order_by: {timestamp: desc}
    where: {timestamp: {_gt: $startDate}, tokenAddress: {_eq: $tokenAddress}}
  ) {
    level
    price
    timestamp
  }
}
    `
export const GetProfileTokensPricesDocument = `
    query GetProfileTokensPrices($tokenAdresses: [String!], $date: timestamptz) {
  lastPrices: trade(
    distinct_on: tokenAddress
    where: {tokenAddress: {_in: $tokenAdresses}}
    order_by: {tokenAddress: desc, level: desc}
  ) {
    lastPrice: price
    tokenAddress
    timestamp
  }
  historyPrices: trade(
    distinct_on: tokenAddress
    where: {tokenAddress: {_in: $tokenAdresses}, timestamp: {_lte: $date}}
    order_by: {tokenAddress: desc, level: desc}
  ) {
    historyPrice: price
    tokenAddress
    timestamp
  }
}
    `

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetTokenPriceHistory: build.query<
      GetTokenPriceHistoryQuery,
      GetTokenPriceHistoryQueryVariables | void
    >({
      query: (variables) => ({
        document: GetTokenPriceHistoryDocument,
        variables,
      }),
    }),
    GetProfileTokensPrices: build.query<
      GetProfileTokensPricesQuery,
      GetProfileTokensPricesQueryVariables | void
    >({
      query: (variables) => ({
        document: GetProfileTokensPricesDocument,
        variables,
      }),
    }),
  }),
})

export { injectedRtkApi as api }
