import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type Login_Tokens = {
  created_at: Scalars['timestamptz'];
  hash: Scalars['String'];
  id: Scalars['String'];
  used: Scalars['Boolean'];
  user: Scalars['String'];
};

export type Login_Tokens_Aggregate = {
  aggregate?: Maybe<Login_Tokens_Aggregate_Fields>;
  nodes: Array<Login_Tokens>;
};

export type Login_Tokens_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Login_Tokens_Max_Fields>;
  min?: Maybe<Login_Tokens_Min_Fields>;
};


export type Login_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Login_Tokens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Login_Tokens_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Login_Tokens_Max_Order_By>;
  min?: Maybe<Login_Tokens_Min_Order_By>;
};

export type Login_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Login_Tokens_Insert_Input>;
  on_conflict?: Maybe<Login_Tokens_On_Conflict>;
};

export type Login_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Login_Tokens_Bool_Exp>>>;
  _not?: Maybe<Login_Tokens_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Login_Tokens_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  hash?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  used?: Maybe<Boolean_Comparison_Exp>;
  user?: Maybe<String_Comparison_Exp>;
};

export enum Login_Tokens_Constraint {
  LoginTokensPkey = 'login_tokens_pkey'
}

export type Login_Tokens_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  used?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Scalars['String']>;
};

export type Login_Tokens_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type Login_Tokens_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
};

export type Login_Tokens_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type Login_Tokens_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
};

export type Login_Tokens_Mutation_Response = {
  affected_rows: Scalars['Int'];
  returning: Array<Login_Tokens>;
};

export type Login_Tokens_Obj_Rel_Insert_Input = {
  data: Login_Tokens_Insert_Input;
  on_conflict?: Maybe<Login_Tokens_On_Conflict>;
};

export type Login_Tokens_On_Conflict = {
  constraint: Login_Tokens_Constraint;
  update_columns: Array<Login_Tokens_Update_Column>;
  where?: Maybe<Login_Tokens_Bool_Exp>;
};

export type Login_Tokens_Order_By = {
  created_at?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  used?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
};

export type Login_Tokens_Pk_Columns_Input = {
  id: Scalars['String'];
};

export enum Login_Tokens_Select_Column {
  CreatedAt = 'created_at',
  Hash = 'hash',
  Id = 'id',
  Used = 'used',
  User = 'user'
}

export type Login_Tokens_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  used?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Scalars['String']>;
};

export enum Login_Tokens_Update_Column {
  CreatedAt = 'created_at',
  Hash = 'hash',
  Id = 'id',
  Used = 'used',
  User = 'user'
}

export type Mutation_Root = {
  delete_login_tokens?: Maybe<Login_Tokens_Mutation_Response>;
  delete_login_tokens_by_pk?: Maybe<Login_Tokens>;
  delete_signup_tokens?: Maybe<Signup_Tokens_Mutation_Response>;
  delete_signup_tokens_by_pk?: Maybe<Signup_Tokens>;
  delete_users?: Maybe<Users_Mutation_Response>;
  delete_users_by_pk?: Maybe<Users>;
  insert_login_tokens?: Maybe<Login_Tokens_Mutation_Response>;
  insert_login_tokens_one?: Maybe<Login_Tokens>;
  insert_signup_tokens?: Maybe<Signup_Tokens_Mutation_Response>;
  insert_signup_tokens_one?: Maybe<Signup_Tokens>;
  insert_users?: Maybe<Users_Mutation_Response>;
  insert_users_one?: Maybe<Users>;
  update_login_tokens?: Maybe<Login_Tokens_Mutation_Response>;
  update_login_tokens_by_pk?: Maybe<Login_Tokens>;
  update_signup_tokens?: Maybe<Signup_Tokens_Mutation_Response>;
  update_signup_tokens_by_pk?: Maybe<Signup_Tokens>;
  update_users?: Maybe<Users_Mutation_Response>;
  update_users_by_pk?: Maybe<Users>;
};


export type Mutation_RootDelete_Login_TokensArgs = {
  where: Login_Tokens_Bool_Exp;
};


export type Mutation_RootDelete_Login_Tokens_By_PkArgs = {
  id: Scalars['String'];
};


export type Mutation_RootDelete_Signup_TokensArgs = {
  where: Signup_Tokens_Bool_Exp;
};


export type Mutation_RootDelete_Signup_Tokens_By_PkArgs = {
  id: Scalars['String'];
};


export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


export type Mutation_RootInsert_Login_TokensArgs = {
  objects: Array<Login_Tokens_Insert_Input>;
  on_conflict?: Maybe<Login_Tokens_On_Conflict>;
};


export type Mutation_RootInsert_Login_Tokens_OneArgs = {
  object: Login_Tokens_Insert_Input;
  on_conflict?: Maybe<Login_Tokens_On_Conflict>;
};


export type Mutation_RootInsert_Signup_TokensArgs = {
  objects: Array<Signup_Tokens_Insert_Input>;
  on_conflict?: Maybe<Signup_Tokens_On_Conflict>;
};


export type Mutation_RootInsert_Signup_Tokens_OneArgs = {
  object: Signup_Tokens_Insert_Input;
  on_conflict?: Maybe<Signup_Tokens_On_Conflict>;
};


export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootUpdate_Login_TokensArgs = {
  _set?: Maybe<Login_Tokens_Set_Input>;
  where: Login_Tokens_Bool_Exp;
};


export type Mutation_RootUpdate_Login_Tokens_By_PkArgs = {
  _set?: Maybe<Login_Tokens_Set_Input>;
  pk_columns: Login_Tokens_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Signup_TokensArgs = {
  _set?: Maybe<Signup_Tokens_Set_Input>;
  where: Signup_Tokens_Bool_Exp;
};


export type Mutation_RootUpdate_Signup_Tokens_By_PkArgs = {
  _set?: Maybe<Signup_Tokens_Set_Input>;
  pk_columns: Signup_Tokens_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  login_tokens: Array<Login_Tokens>;
  login_tokens_aggregate: Login_Tokens_Aggregate;
  login_tokens_by_pk?: Maybe<Login_Tokens>;
  signup_tokens: Array<Signup_Tokens>;
  signup_tokens_aggregate: Signup_Tokens_Aggregate;
  signup_tokens_by_pk?: Maybe<Signup_Tokens>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};


export type Query_RootLogin_TokensArgs = {
  distinct_on?: Maybe<Array<Login_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Login_Tokens_Order_By>>;
  where?: Maybe<Login_Tokens_Bool_Exp>;
};


export type Query_RootLogin_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Login_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Login_Tokens_Order_By>>;
  where?: Maybe<Login_Tokens_Bool_Exp>;
};


export type Query_RootLogin_Tokens_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootSignup_TokensArgs = {
  distinct_on?: Maybe<Array<Signup_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Signup_Tokens_Order_By>>;
  where?: Maybe<Signup_Tokens_Bool_Exp>;
};


export type Query_RootSignup_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Signup_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Signup_Tokens_Order_By>>;
  where?: Maybe<Signup_Tokens_Bool_Exp>;
};


export type Query_RootSignup_Tokens_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type Signup_Tokens = {
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['String'];
};

export type Signup_Tokens_Aggregate = {
  aggregate?: Maybe<Signup_Tokens_Aggregate_Fields>;
  nodes: Array<Signup_Tokens>;
};

export type Signup_Tokens_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Signup_Tokens_Max_Fields>;
  min?: Maybe<Signup_Tokens_Min_Fields>;
};


export type Signup_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Signup_Tokens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Signup_Tokens_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Signup_Tokens_Max_Order_By>;
  min?: Maybe<Signup_Tokens_Min_Order_By>;
};

export type Signup_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Signup_Tokens_Insert_Input>;
  on_conflict?: Maybe<Signup_Tokens_On_Conflict>;
};

export type Signup_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Signup_Tokens_Bool_Exp>>>;
  _not?: Maybe<Signup_Tokens_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Signup_Tokens_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  hash?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
};

export enum Signup_Tokens_Constraint {
  SignupTokensPkey = 'signup_tokens_pkey'
}

export type Signup_Tokens_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type Signup_Tokens_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type Signup_Tokens_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Signup_Tokens_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type Signup_Tokens_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Signup_Tokens_Mutation_Response = {
  affected_rows: Scalars['Int'];
  returning: Array<Signup_Tokens>;
};

export type Signup_Tokens_Obj_Rel_Insert_Input = {
  data: Signup_Tokens_Insert_Input;
  on_conflict?: Maybe<Signup_Tokens_On_Conflict>;
};

export type Signup_Tokens_On_Conflict = {
  constraint: Signup_Tokens_Constraint;
  update_columns: Array<Signup_Tokens_Update_Column>;
  where?: Maybe<Signup_Tokens_Bool_Exp>;
};

export type Signup_Tokens_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Signup_Tokens_Pk_Columns_Input = {
  id: Scalars['String'];
};

export enum Signup_Tokens_Select_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Hash = 'hash',
  Id = 'id'
}

export type Signup_Tokens_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export enum Signup_Tokens_Update_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Hash = 'hash',
  Id = 'id'
}

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
  login_tokens: Array<Login_Tokens>;
  login_tokens_aggregate: Login_Tokens_Aggregate;
  login_tokens_by_pk?: Maybe<Login_Tokens>;
  signup_tokens: Array<Signup_Tokens>;
  signup_tokens_aggregate: Signup_Tokens_Aggregate;
  signup_tokens_by_pk?: Maybe<Signup_Tokens>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootLogin_TokensArgs = {
  distinct_on?: Maybe<Array<Login_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Login_Tokens_Order_By>>;
  where?: Maybe<Login_Tokens_Bool_Exp>;
};


export type Subscription_RootLogin_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Login_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Login_Tokens_Order_By>>;
  where?: Maybe<Login_Tokens_Bool_Exp>;
};


export type Subscription_RootLogin_Tokens_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootSignup_TokensArgs = {
  distinct_on?: Maybe<Array<Signup_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Signup_Tokens_Order_By>>;
  where?: Maybe<Signup_Tokens_Bool_Exp>;
};


export type Subscription_RootSignup_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Signup_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Signup_Tokens_Order_By>>;
  where?: Maybe<Signup_Tokens_Bool_Exp>;
};


export type Subscription_RootSignup_Tokens_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Users = {
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Users_Constraint {
  Users2EmailKey = 'users2_email_key',
  Users2Pkey = 'users2_pkey'
}

export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Users_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Users_Mutation_Response = {
  affected_rows: Scalars['Int'];
  returning: Array<Users>;
};

export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

export enum Users_Select_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  UpdatedAt = 'updated_at'
}

export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Users_Update_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  UpdatedAt = 'updated_at'
}

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserByEmailQuery = { users: Array<{ email: string, id: string }> };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type CreateUserMutation = { insert_users_one?: Maybe<{ id: string }> };


export const GetUserByEmailDocument = gql`
    query getUserByEmail($email: String!) {
  users(where: {email: {_eq: $email}}, limit: 1) {
    email
    id
  }
}
    `;
export const CreateUserDocument = gql`
    mutation createUser($email: String!) {
  insert_users_one(object: {email: $email}) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUserByEmail(variables: GetUserByEmailQueryVariables, requestHeaders?: Headers): Promise<GetUserByEmailQuery> {
      return withWrapper(() => client.request<GetUserByEmailQuery>(print(GetUserByEmailDocument), variables, requestHeaders));
    },
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Headers): Promise<CreateUserMutation> {
      return withWrapper(() => client.request<CreateUserMutation>(print(CreateUserDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export namespace GetUserByEmail {
  export type Variables = GetUserByEmailQueryVariables;
  export type Query = GetUserByEmailQuery;
  export type Users = NonNullable<(NonNullable<GetUserByEmailQuery['users']>)[number]>;
}

export namespace CreateUser {
  export type Variables = CreateUserMutationVariables;
  export type Mutation = CreateUserMutation;
  export type Insert_Users_One = (NonNullable<CreateUserMutation['insert_users_one']>);
}
