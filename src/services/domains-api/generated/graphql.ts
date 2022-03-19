import { api } from 'services/domains-api/baseApi'
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
  created_at: Scalars['timestamptz']
  name: Scalars['String']
  typename?: Maybe<Scalars['String']>
  updated_at: Scalars['timestamptz']
}

/** Boolean expression to filter rows from the table "dipdup_contract". All fields are combined with a logical 'AND'. */
export type DipdupContractBoolExp = {
  _and?: InputMaybe<Array<DipdupContractBoolExp>>
  _not?: InputMaybe<DipdupContractBoolExp>
  _or?: InputMaybe<Array<DipdupContractBoolExp>>
  address?: InputMaybe<StringComparisonExp>
  created_at?: InputMaybe<TimestamptzComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  typename?: InputMaybe<StringComparisonExp>
  updated_at?: InputMaybe<TimestamptzComparisonExp>
}

/** columns and relationships of "dipdup_contract_metadata" */
export type DipdupContractMetadata = {
  __typename?: 'dipdup_contract_metadata'
  contract: Scalars['String']
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  metadata: Scalars['jsonb']
  network: Scalars['String']
  update_id: Scalars['Int']
  updated_at: Scalars['timestamptz']
}

/** columns and relationships of "dipdup_contract_metadata" */
export type DipdupContractMetadataMetadataArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** Boolean expression to filter rows from the table "dipdup_contract_metadata". All fields are combined with a logical 'AND'. */
export type DipdupContractMetadataBoolExp = {
  _and?: InputMaybe<Array<DipdupContractMetadataBoolExp>>
  _not?: InputMaybe<DipdupContractMetadataBoolExp>
  _or?: InputMaybe<Array<DipdupContractMetadataBoolExp>>
  contract?: InputMaybe<StringComparisonExp>
  created_at?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  metadata?: InputMaybe<JsonbComparisonExp>
  network?: InputMaybe<StringComparisonExp>
  update_id?: InputMaybe<IntComparisonExp>
  updated_at?: InputMaybe<TimestamptzComparisonExp>
}

/** Ordering options when selecting data from "dipdup_contract_metadata". */
export type DipdupContractMetadataOrderBy = {
  contract?: InputMaybe<OrderBy>
  created_at?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  metadata?: InputMaybe<OrderBy>
  network?: InputMaybe<OrderBy>
  update_id?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** select columns of table "dipdup_contract_metadata" */
export enum DipdupContractMetadataSelectColumn {
  /** column name */
  CONTRACT = 'contract',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  NETWORK = 'network',
  /** column name */
  UPDATE_ID = 'update_id',
  /** column name */
  UPDATED_AT = 'updated_at',
}

/** Ordering options when selecting data from "dipdup_contract". */
export type DipdupContractOrderBy = {
  address?: InputMaybe<OrderBy>
  created_at?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  typename?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** select columns of table "dipdup_contract" */
export enum DipdupContractSelectColumn {
  /** column name */
  ADDRESS = 'address',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  NAME = 'name',
  /** column name */
  TYPENAME = 'typename',
  /** column name */
  UPDATED_AT = 'updated_at',
}

/** columns and relationships of "dipdup_head" */
export type DipdupHead = {
  __typename?: 'dipdup_head'
  created_at: Scalars['timestamptz']
  hash: Scalars['String']
  level: Scalars['Int']
  name: Scalars['String']
  timestamp: Scalars['timestamptz']
  updated_at: Scalars['timestamptz']
}

/** Boolean expression to filter rows from the table "dipdup_head". All fields are combined with a logical 'AND'. */
export type DipdupHeadBoolExp = {
  _and?: InputMaybe<Array<DipdupHeadBoolExp>>
  _not?: InputMaybe<DipdupHeadBoolExp>
  _or?: InputMaybe<Array<DipdupHeadBoolExp>>
  created_at?: InputMaybe<TimestamptzComparisonExp>
  hash?: InputMaybe<StringComparisonExp>
  level?: InputMaybe<IntComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  timestamp?: InputMaybe<TimestamptzComparisonExp>
  updated_at?: InputMaybe<TimestamptzComparisonExp>
}

/** Ordering options when selecting data from "dipdup_head". */
export type DipdupHeadOrderBy = {
  created_at?: InputMaybe<OrderBy>
  hash?: InputMaybe<OrderBy>
  level?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  timestamp?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** select columns of table "dipdup_head" */
export enum DipdupHeadSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  HASH = 'hash',
  /** column name */
  LEVEL = 'level',
  /** column name */
  NAME = 'name',
  /** column name */
  TIMESTAMP = 'timestamp',
  /** column name */
  UPDATED_AT = 'updated_at',
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
  config_hash: Scalars['String']
  created_at: Scalars['timestamptz']
  level: Scalars['Int']
  name: Scalars['String']
  /** NEW: NEW\nSYNCING: SYNCING\nREALTIME: REALTIME\nROLLBACK: ROLLBACK\nONESHOT: ONESHOT */
  status: Scalars['String']
  template?: Maybe<Scalars['String']>
  template_values?: Maybe<Scalars['jsonb']>
  /** operation: operation\nbig_map: big_map\nhead: head */
  type: Scalars['String']
  updated_at: Scalars['timestamptz']
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
  config_hash?: InputMaybe<StringComparisonExp>
  created_at?: InputMaybe<TimestamptzComparisonExp>
  level?: InputMaybe<IntComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  status?: InputMaybe<StringComparisonExp>
  template?: InputMaybe<StringComparisonExp>
  template_values?: InputMaybe<JsonbComparisonExp>
  type?: InputMaybe<StringComparisonExp>
  updated_at?: InputMaybe<TimestamptzComparisonExp>
}

/** Ordering options when selecting data from "dipdup_index". */
export type DipdupIndexOrderBy = {
  config_hash?: InputMaybe<OrderBy>
  created_at?: InputMaybe<OrderBy>
  level?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  template?: InputMaybe<OrderBy>
  template_values?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** select columns of table "dipdup_index" */
export enum DipdupIndexSelectColumn {
  /** column name */
  CONFIG_HASH = 'config_hash',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  LEVEL = 'level',
  /** column name */
  NAME = 'name',
  /** column name */
  STATUS = 'status',
  /** column name */
  TEMPLATE = 'template',
  /** column name */
  TEMPLATE_VALUES = 'template_values',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATED_AT = 'updated_at',
}

/** columns and relationships of "dipdup_schema" */
export type DipdupSchema = {
  __typename?: 'dipdup_schema'
  created_at: Scalars['timestamptz']
  hash: Scalars['String']
  name: Scalars['String']
  /** MANUAL: triggered manually from callback\nMIGRATION: applied migration requires reindexing\nROLLBACK: reorg message received and can't be processed\nCONFIG_HASH_MISMATCH: index config has been modified\nSCHEMA_HASH_MISMATCH: database schema has been modified\nBLOCK_HASH_MISMATCH: block hash mismatch, missed rollback when DipDup was stopped\nMISSING_INDEX_TEMPLATE: index template is missing, can't restore index state */
  reindex?: Maybe<Scalars['String']>
  updated_at: Scalars['timestamptz']
}

/** Boolean expression to filter rows from the table "dipdup_schema". All fields are combined with a logical 'AND'. */
export type DipdupSchemaBoolExp = {
  _and?: InputMaybe<Array<DipdupSchemaBoolExp>>
  _not?: InputMaybe<DipdupSchemaBoolExp>
  _or?: InputMaybe<Array<DipdupSchemaBoolExp>>
  created_at?: InputMaybe<TimestamptzComparisonExp>
  hash?: InputMaybe<StringComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  reindex?: InputMaybe<StringComparisonExp>
  updated_at?: InputMaybe<TimestamptzComparisonExp>
}

/** Ordering options when selecting data from "dipdup_schema". */
export type DipdupSchemaOrderBy = {
  created_at?: InputMaybe<OrderBy>
  hash?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  reindex?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** select columns of table "dipdup_schema" */
export enum DipdupSchemaSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  HASH = 'hash',
  /** column name */
  NAME = 'name',
  /** column name */
  REINDEX = 'reindex',
  /** column name */
  UPDATED_AT = 'updated_at',
}

/** columns and relationships of "dipdup_token_metadata" */
export type DipdupTokenMetadata = {
  __typename?: 'dipdup_token_metadata'
  contract: Scalars['String']
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  metadata: Scalars['jsonb']
  network: Scalars['String']
  token_id: Scalars['String']
  update_id: Scalars['Int']
  updated_at: Scalars['timestamptz']
}

/** columns and relationships of "dipdup_token_metadata" */
export type DipdupTokenMetadataMetadataArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** Boolean expression to filter rows from the table "dipdup_token_metadata". All fields are combined with a logical 'AND'. */
export type DipdupTokenMetadataBoolExp = {
  _and?: InputMaybe<Array<DipdupTokenMetadataBoolExp>>
  _not?: InputMaybe<DipdupTokenMetadataBoolExp>
  _or?: InputMaybe<Array<DipdupTokenMetadataBoolExp>>
  contract?: InputMaybe<StringComparisonExp>
  created_at?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  metadata?: InputMaybe<JsonbComparisonExp>
  network?: InputMaybe<StringComparisonExp>
  token_id?: InputMaybe<StringComparisonExp>
  update_id?: InputMaybe<IntComparisonExp>
  updated_at?: InputMaybe<TimestamptzComparisonExp>
}

/** Ordering options when selecting data from "dipdup_token_metadata". */
export type DipdupTokenMetadataOrderBy = {
  contract?: InputMaybe<OrderBy>
  created_at?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  metadata?: InputMaybe<OrderBy>
  network?: InputMaybe<OrderBy>
  token_id?: InputMaybe<OrderBy>
  update_id?: InputMaybe<OrderBy>
  updated_at?: InputMaybe<OrderBy>
}

/** select columns of table "dipdup_token_metadata" */
export enum DipdupTokenMetadataSelectColumn {
  /** column name */
  CONTRACT = 'contract',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  METADATA = 'metadata',
  /** column name */
  NETWORK = 'network',
  /** column name */
  TOKEN_ID = 'token_id',
  /** column name */
  UPDATE_ID = 'update_id',
  /** column name */
  UPDATED_AT = 'updated_at',
}

/** columns and relationships of "domain" */
export type Domain = {
  __typename?: 'domain'
  expires_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['String']
  owner: Scalars['String']
  /** An array relationship */
  records: Array<Record>
  /** An object relationship */
  tld: Tld
  tld_id: Scalars['String']
  token_id?: Maybe<Scalars['bigint']>
}

/** columns and relationships of "domain" */
export type DomainRecordsArgs = {
  distinct_on?: InputMaybe<Array<RecordSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<RecordOrderBy>>
  where?: InputMaybe<RecordBoolExp>
}

/** order by aggregate values of table "domain" */
export type DomainAggregateOrderBy = {
  avg?: InputMaybe<DomainAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<DomainMaxOrderBy>
  min?: InputMaybe<DomainMinOrderBy>
  stddev?: InputMaybe<DomainStddevOrderBy>
  stddev_pop?: InputMaybe<DomainStddevPopOrderBy>
  stddev_samp?: InputMaybe<DomainStddevSampOrderBy>
  sum?: InputMaybe<DomainSumOrderBy>
  var_pop?: InputMaybe<DomainVarPopOrderBy>
  var_samp?: InputMaybe<DomainVarSampOrderBy>
  variance?: InputMaybe<DomainVarianceOrderBy>
}

/** order by avg() on columns of table "domain" */
export type DomainAvgOrderBy = {
  token_id?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "domain". All fields are combined with a logical 'AND'. */
export type DomainBoolExp = {
  _and?: InputMaybe<Array<DomainBoolExp>>
  _not?: InputMaybe<DomainBoolExp>
  _or?: InputMaybe<Array<DomainBoolExp>>
  expires_at?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<StringComparisonExp>
  owner?: InputMaybe<StringComparisonExp>
  records?: InputMaybe<RecordBoolExp>
  tld?: InputMaybe<TldBoolExp>
  tld_id?: InputMaybe<StringComparisonExp>
  token_id?: InputMaybe<BigintComparisonExp>
}

/** order by max() on columns of table "domain" */
export type DomainMaxOrderBy = {
  expires_at?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  owner?: InputMaybe<OrderBy>
  tld_id?: InputMaybe<OrderBy>
  token_id?: InputMaybe<OrderBy>
}

/** order by min() on columns of table "domain" */
export type DomainMinOrderBy = {
  expires_at?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  owner?: InputMaybe<OrderBy>
  tld_id?: InputMaybe<OrderBy>
  token_id?: InputMaybe<OrderBy>
}

/** Ordering options when selecting data from "domain". */
export type DomainOrderBy = {
  expires_at?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  owner?: InputMaybe<OrderBy>
  records_aggregate?: InputMaybe<RecordAggregateOrderBy>
  tld?: InputMaybe<TldOrderBy>
  tld_id?: InputMaybe<OrderBy>
  token_id?: InputMaybe<OrderBy>
}

/** select columns of table "domain" */
export enum DomainSelectColumn {
  /** column name */
  EXPIRES_AT = 'expires_at',
  /** column name */
  ID = 'id',
  /** column name */
  OWNER = 'owner',
  /** column name */
  TLD_ID = 'tld_id',
  /** column name */
  TOKEN_ID = 'token_id',
}

/** order by stddev() on columns of table "domain" */
export type DomainStddevOrderBy = {
  token_id?: InputMaybe<OrderBy>
}

/** order by stddev_pop() on columns of table "domain" */
export type DomainStddevPopOrderBy = {
  token_id?: InputMaybe<OrderBy>
}

/** order by stddev_samp() on columns of table "domain" */
export type DomainStddevSampOrderBy = {
  token_id?: InputMaybe<OrderBy>
}

/** order by sum() on columns of table "domain" */
export type DomainSumOrderBy = {
  token_id?: InputMaybe<OrderBy>
}

/** order by var_pop() on columns of table "domain" */
export type DomainVarPopOrderBy = {
  token_id?: InputMaybe<OrderBy>
}

/** order by var_samp() on columns of table "domain" */
export type DomainVarSampOrderBy = {
  token_id?: InputMaybe<OrderBy>
}

/** order by variance() on columns of table "domain" */
export type DomainVarianceOrderBy = {
  token_id?: InputMaybe<OrderBy>
}

/** columns and relationships of "expiry" */
export type Expiry = {
  __typename?: 'expiry'
  expires_at?: Maybe<Scalars['timestamptz']>
  id: Scalars['String']
}

/** Boolean expression to filter rows from the table "expiry". All fields are combined with a logical 'AND'. */
export type ExpiryBoolExp = {
  _and?: InputMaybe<Array<ExpiryBoolExp>>
  _not?: InputMaybe<ExpiryBoolExp>
  _or?: InputMaybe<Array<ExpiryBoolExp>>
  expires_at?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<StringComparisonExp>
}

/** Ordering options when selecting data from "expiry". */
export type ExpiryOrderBy = {
  expires_at?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** select columns of table "expiry" */
export enum ExpirySelectColumn {
  /** column name */
  EXPIRES_AT = 'expires_at',
  /** column name */
  ID = 'id',
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

export type QueryRoot = {
  __typename?: 'query_root'
  /** fetch data from the table: "dipdup_contract" */
  dipdup_contract: Array<DipdupContract>
  /** fetch data from the table: "dipdup_contract" using primary key columns */
  dipdup_contract_by_pk?: Maybe<DipdupContract>
  /** fetch data from the table: "dipdup_contract_metadata" */
  dipdup_contract_metadata: Array<DipdupContractMetadata>
  /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
  dipdup_contract_metadata_by_pk?: Maybe<DipdupContractMetadata>
  /** fetch data from the table: "dipdup_head" */
  dipdup_head: Array<DipdupHead>
  /** fetch data from the table: "dipdup_head" using primary key columns */
  dipdup_head_by_pk?: Maybe<DipdupHead>
  /** fetch data from the table: "dipdup_head_status" */
  dipdup_head_status: Array<DipdupHeadStatus>
  /** fetch data from the table: "dipdup_index" */
  dipdup_index: Array<DipdupIndex>
  /** fetch data from the table: "dipdup_index" using primary key columns */
  dipdup_index_by_pk?: Maybe<DipdupIndex>
  /** fetch data from the table: "dipdup_schema" */
  dipdup_schema: Array<DipdupSchema>
  /** fetch data from the table: "dipdup_schema" using primary key columns */
  dipdup_schema_by_pk?: Maybe<DipdupSchema>
  /** fetch data from the table: "dipdup_token_metadata" */
  dipdup_token_metadata: Array<DipdupTokenMetadata>
  /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
  dipdup_token_metadata_by_pk?: Maybe<DipdupTokenMetadata>
  /** fetch data from the table: "domain" */
  domain: Array<Domain>
  /** fetch data from the table: "domain" using primary key columns */
  domain_by_pk?: Maybe<Domain>
  /** fetch data from the table: "expiry" */
  expiry: Array<Expiry>
  /** fetch data from the table: "expiry" using primary key columns */
  expiry_by_pk?: Maybe<Expiry>
  /** fetch data from the table: "record" */
  record: Array<Record>
  /** fetch data from the table: "record" using primary key columns */
  record_by_pk?: Maybe<Record>
  /** fetch data from the table: "tld" */
  tld: Array<Tld>
  /** fetch data from the table: "tld" using primary key columns */
  tld_by_pk?: Maybe<Tld>
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

export type QueryRootDipdupContractMetadataArgs = {
  distinct_on?: InputMaybe<Array<DipdupContractMetadataSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupContractMetadataOrderBy>>
  where?: InputMaybe<DipdupContractMetadataBoolExp>
}

export type QueryRootDipdupContractMetadataByPkArgs = {
  id: Scalars['Int']
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

export type QueryRootDipdupTokenMetadataArgs = {
  distinct_on?: InputMaybe<Array<DipdupTokenMetadataSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupTokenMetadataOrderBy>>
  where?: InputMaybe<DipdupTokenMetadataBoolExp>
}

export type QueryRootDipdupTokenMetadataByPkArgs = {
  id: Scalars['Int']
}

export type QueryRootDomainArgs = {
  distinct_on?: InputMaybe<Array<DomainSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DomainOrderBy>>
  where?: InputMaybe<DomainBoolExp>
}

export type QueryRootDomainByPkArgs = {
  id: Scalars['String']
}

export type QueryRootExpiryArgs = {
  distinct_on?: InputMaybe<Array<ExpirySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ExpiryOrderBy>>
  where?: InputMaybe<ExpiryBoolExp>
}

export type QueryRootExpiryByPkArgs = {
  id: Scalars['String']
}

export type QueryRootRecordArgs = {
  distinct_on?: InputMaybe<Array<RecordSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<RecordOrderBy>>
  where?: InputMaybe<RecordBoolExp>
}

export type QueryRootRecordByPkArgs = {
  id: Scalars['String']
}

export type QueryRootTldArgs = {
  distinct_on?: InputMaybe<Array<TldSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<TldOrderBy>>
  where?: InputMaybe<TldBoolExp>
}

export type QueryRootTldByPkArgs = {
  id: Scalars['String']
}

/** columns and relationships of "record" */
export type Record = {
  __typename?: 'record'
  address?: Maybe<Scalars['String']>
  /** An object relationship */
  domain: Domain
  domain_id: Scalars['String']
  id: Scalars['String']
}

/** order by aggregate values of table "record" */
export type RecordAggregateOrderBy = {
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<RecordMaxOrderBy>
  min?: InputMaybe<RecordMinOrderBy>
}

/** Boolean expression to filter rows from the table "record". All fields are combined with a logical 'AND'. */
export type RecordBoolExp = {
  _and?: InputMaybe<Array<RecordBoolExp>>
  _not?: InputMaybe<RecordBoolExp>
  _or?: InputMaybe<Array<RecordBoolExp>>
  address?: InputMaybe<StringComparisonExp>
  domain?: InputMaybe<DomainBoolExp>
  domain_id?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<StringComparisonExp>
}

/** order by max() on columns of table "record" */
export type RecordMaxOrderBy = {
  address?: InputMaybe<OrderBy>
  domain_id?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** order by min() on columns of table "record" */
export type RecordMinOrderBy = {
  address?: InputMaybe<OrderBy>
  domain_id?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** Ordering options when selecting data from "record". */
export type RecordOrderBy = {
  address?: InputMaybe<OrderBy>
  domain?: InputMaybe<DomainOrderBy>
  domain_id?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** select columns of table "record" */
export enum RecordSelectColumn {
  /** column name */
  ADDRESS = 'address',
  /** column name */
  DOMAIN_ID = 'domain_id',
  /** column name */
  ID = 'id',
}

export type SubscriptionRoot = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "dipdup_contract" */
  dipdup_contract: Array<DipdupContract>
  /** fetch data from the table: "dipdup_contract" using primary key columns */
  dipdup_contract_by_pk?: Maybe<DipdupContract>
  /** fetch data from the table: "dipdup_contract_metadata" */
  dipdup_contract_metadata: Array<DipdupContractMetadata>
  /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
  dipdup_contract_metadata_by_pk?: Maybe<DipdupContractMetadata>
  /** fetch data from the table: "dipdup_head" */
  dipdup_head: Array<DipdupHead>
  /** fetch data from the table: "dipdup_head" using primary key columns */
  dipdup_head_by_pk?: Maybe<DipdupHead>
  /** fetch data from the table: "dipdup_head_status" */
  dipdup_head_status: Array<DipdupHeadStatus>
  /** fetch data from the table: "dipdup_index" */
  dipdup_index: Array<DipdupIndex>
  /** fetch data from the table: "dipdup_index" using primary key columns */
  dipdup_index_by_pk?: Maybe<DipdupIndex>
  /** fetch data from the table: "dipdup_schema" */
  dipdup_schema: Array<DipdupSchema>
  /** fetch data from the table: "dipdup_schema" using primary key columns */
  dipdup_schema_by_pk?: Maybe<DipdupSchema>
  /** fetch data from the table: "dipdup_token_metadata" */
  dipdup_token_metadata: Array<DipdupTokenMetadata>
  /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
  dipdup_token_metadata_by_pk?: Maybe<DipdupTokenMetadata>
  /** fetch data from the table: "domain" */
  domain: Array<Domain>
  /** fetch data from the table: "domain" using primary key columns */
  domain_by_pk?: Maybe<Domain>
  /** fetch data from the table: "expiry" */
  expiry: Array<Expiry>
  /** fetch data from the table: "expiry" using primary key columns */
  expiry_by_pk?: Maybe<Expiry>
  /** fetch data from the table: "record" */
  record: Array<Record>
  /** fetch data from the table: "record" using primary key columns */
  record_by_pk?: Maybe<Record>
  /** fetch data from the table: "tld" */
  tld: Array<Tld>
  /** fetch data from the table: "tld" using primary key columns */
  tld_by_pk?: Maybe<Tld>
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

export type SubscriptionRootDipdupContractMetadataArgs = {
  distinct_on?: InputMaybe<Array<DipdupContractMetadataSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupContractMetadataOrderBy>>
  where?: InputMaybe<DipdupContractMetadataBoolExp>
}

export type SubscriptionRootDipdupContractMetadataByPkArgs = {
  id: Scalars['Int']
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

export type SubscriptionRootDipdupTokenMetadataArgs = {
  distinct_on?: InputMaybe<Array<DipdupTokenMetadataSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DipdupTokenMetadataOrderBy>>
  where?: InputMaybe<DipdupTokenMetadataBoolExp>
}

export type SubscriptionRootDipdupTokenMetadataByPkArgs = {
  id: Scalars['Int']
}

export type SubscriptionRootDomainArgs = {
  distinct_on?: InputMaybe<Array<DomainSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DomainOrderBy>>
  where?: InputMaybe<DomainBoolExp>
}

export type SubscriptionRootDomainByPkArgs = {
  id: Scalars['String']
}

export type SubscriptionRootExpiryArgs = {
  distinct_on?: InputMaybe<Array<ExpirySelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<ExpiryOrderBy>>
  where?: InputMaybe<ExpiryBoolExp>
}

export type SubscriptionRootExpiryByPkArgs = {
  id: Scalars['String']
}

export type SubscriptionRootRecordArgs = {
  distinct_on?: InputMaybe<Array<RecordSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<RecordOrderBy>>
  where?: InputMaybe<RecordBoolExp>
}

export type SubscriptionRootRecordByPkArgs = {
  id: Scalars['String']
}

export type SubscriptionRootTldArgs = {
  distinct_on?: InputMaybe<Array<TldSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<TldOrderBy>>
  where?: InputMaybe<TldBoolExp>
}

export type SubscriptionRootTldByPkArgs = {
  id: Scalars['String']
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

/** columns and relationships of "tld" */
export type Tld = {
  __typename?: 'tld'
  /** An array relationship */
  domains: Array<Domain>
  id: Scalars['String']
  owner: Scalars['String']
}

/** columns and relationships of "tld" */
export type TldDomainsArgs = {
  distinct_on?: InputMaybe<Array<DomainSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<DomainOrderBy>>
  where?: InputMaybe<DomainBoolExp>
}

/** Boolean expression to filter rows from the table "tld". All fields are combined with a logical 'AND'. */
export type TldBoolExp = {
  _and?: InputMaybe<Array<TldBoolExp>>
  _not?: InputMaybe<TldBoolExp>
  _or?: InputMaybe<Array<TldBoolExp>>
  domains?: InputMaybe<DomainBoolExp>
  id?: InputMaybe<StringComparisonExp>
  owner?: InputMaybe<StringComparisonExp>
}

/** Ordering options when selecting data from "tld". */
export type TldOrderBy = {
  domains_aggregate?: InputMaybe<DomainAggregateOrderBy>
  id?: InputMaybe<OrderBy>
  owner?: InputMaybe<OrderBy>
}

/** select columns of table "tld" */
export enum TldSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  OWNER = 'owner',
}

export type GetDomainByAddressQueryVariables = Exact<{
  where?: InputMaybe<DomainBoolExp>
}>

export type GetDomainByAddressQuery = {
  __typename?: 'query_root'
  domain: Array<{ __typename?: 'domain'; id: string }>
}

export const GetDomainByAddressDocument = `
    query GetDomainByAddress($where: domain_bool_exp) {
  domain(where: $where) {
    id
  }
}
    `

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetDomainByAddress: build.query<
      GetDomainByAddressQuery,
      GetDomainByAddressQueryVariables | void
    >({
      query: (variables) => ({
        document: GetDomainByAddressDocument,
        variables,
      }),
    }),
  }),
})

export { injectedRtkApi as api }
