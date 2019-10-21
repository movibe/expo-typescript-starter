export type Maybe<T> = T | null

/** ordering options when selecting data from "chat" */
export interface ChatOrderBy {
  chat_group_admins_aggregate?: Maybe<ChatGroupAdminsAggregateOrderBy>

  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  messages_aggregate?: Maybe<MessageAggregateOrderBy>

  name?: Maybe<OrderBy>

  owner?: Maybe<UsersOrderBy>

  owner_id?: Maybe<OrderBy>

  picture?: Maybe<OrderBy>

  users_aggregate?: Maybe<ChatUsersAggregateOrderBy>
}
/** order by aggregate values of table "chat_group_admins" */
export interface ChatGroupAdminsAggregateOrderBy {
  avg?: Maybe<ChatGroupAdminsAvgOrderBy>

  count?: Maybe<OrderBy>

  max?: Maybe<ChatGroupAdminsMaxOrderBy>

  min?: Maybe<ChatGroupAdminsMinOrderBy>

  stddev?: Maybe<ChatGroupAdminsStddevOrderBy>

  stddev_pop?: Maybe<ChatGroupAdminsStddevPopOrderBy>

  stddev_samp?: Maybe<ChatGroupAdminsStddevSampOrderBy>

  sum?: Maybe<ChatGroupAdminsSumOrderBy>

  var_pop?: Maybe<ChatGroupAdminsVarPopOrderBy>

  var_samp?: Maybe<ChatGroupAdminsVarSampOrderBy>

  variance?: Maybe<ChatGroupAdminsVarianceOrderBy>
}
/** order by avg() on columns of table "chat_group_admins" */
export interface ChatGroupAdminsAvgOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by max() on columns of table "chat_group_admins" */
export interface ChatGroupAdminsMaxOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by min() on columns of table "chat_group_admins" */
export interface ChatGroupAdminsMinOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by stddev() on columns of table "chat_group_admins" */
export interface ChatGroupAdminsStddevOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by stddev_pop() on columns of table "chat_group_admins" */
export interface ChatGroupAdminsStddevPopOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by stddev_samp() on columns of table "chat_group_admins" */
export interface ChatGroupAdminsStddevSampOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by sum() on columns of table "chat_group_admins" */
export interface ChatGroupAdminsSumOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by var_pop() on columns of table "chat_group_admins" */
export interface ChatGroupAdminsVarPopOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by var_samp() on columns of table "chat_group_admins" */
export interface ChatGroupAdminsVarSampOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by variance() on columns of table "chat_group_admins" */
export interface ChatGroupAdminsVarianceOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by aggregate values of table "message" */
export interface MessageAggregateOrderBy {
  avg?: Maybe<MessageAvgOrderBy>

  count?: Maybe<OrderBy>

  max?: Maybe<MessageMaxOrderBy>

  min?: Maybe<MessageMinOrderBy>

  stddev?: Maybe<MessageStddevOrderBy>

  stddev_pop?: Maybe<MessageStddevPopOrderBy>

  stddev_samp?: Maybe<MessageStddevSampOrderBy>

  sum?: Maybe<MessageSumOrderBy>

  var_pop?: Maybe<MessageVarPopOrderBy>

  var_samp?: Maybe<MessageVarSampOrderBy>

  variance?: Maybe<MessageVarianceOrderBy>
}
/** order by avg() on columns of table "message" */
export interface MessageAvgOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by max() on columns of table "message" */
export interface MessageMaxOrderBy {
  chat_id?: Maybe<OrderBy>

  content?: Maybe<OrderBy>

  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by min() on columns of table "message" */
export interface MessageMinOrderBy {
  chat_id?: Maybe<OrderBy>

  content?: Maybe<OrderBy>

  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by stddev() on columns of table "message" */
export interface MessageStddevOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by stddev_pop() on columns of table "message" */
export interface MessageStddevPopOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by stddev_samp() on columns of table "message" */
export interface MessageStddevSampOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by sum() on columns of table "message" */
export interface MessageSumOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by var_pop() on columns of table "message" */
export interface MessageVarPopOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by var_samp() on columns of table "message" */
export interface MessageVarSampOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by variance() on columns of table "message" */
export interface MessageVarianceOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** ordering options when selecting data from "users" */
export interface UsersOrderBy {
  chat_group_admins_aggregate?: Maybe<ChatGroupAdminsAggregateOrderBy>

  chat_users_aggregate?: Maybe<ChatUsersAggregateOrderBy>

  chats_aggregate?: Maybe<ChatAggregateOrderBy>

  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  messages_aggregate?: Maybe<MessageAggregateOrderBy>

  name?: Maybe<OrderBy>

  password?: Maybe<OrderBy>

  picture?: Maybe<OrderBy>

  recipients_aggregate?: Maybe<RecipientAggregateOrderBy>

  username?: Maybe<OrderBy>
}
/** order by aggregate values of table "chat_users" */
export interface ChatUsersAggregateOrderBy {
  avg?: Maybe<ChatUsersAvgOrderBy>

  count?: Maybe<OrderBy>

  max?: Maybe<ChatUsersMaxOrderBy>

  min?: Maybe<ChatUsersMinOrderBy>

  stddev?: Maybe<ChatUsersStddevOrderBy>

  stddev_pop?: Maybe<ChatUsersStddevPopOrderBy>

  stddev_samp?: Maybe<ChatUsersStddevSampOrderBy>

  sum?: Maybe<ChatUsersSumOrderBy>

  var_pop?: Maybe<ChatUsersVarPopOrderBy>

  var_samp?: Maybe<ChatUsersVarSampOrderBy>

  variance?: Maybe<ChatUsersVarianceOrderBy>
}
/** order by avg() on columns of table "chat_users" */
export interface ChatUsersAvgOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by max() on columns of table "chat_users" */
export interface ChatUsersMaxOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by min() on columns of table "chat_users" */
export interface ChatUsersMinOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by stddev() on columns of table "chat_users" */
export interface ChatUsersStddevOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by stddev_pop() on columns of table "chat_users" */
export interface ChatUsersStddevPopOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by stddev_samp() on columns of table "chat_users" */
export interface ChatUsersStddevSampOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by sum() on columns of table "chat_users" */
export interface ChatUsersSumOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by var_pop() on columns of table "chat_users" */
export interface ChatUsersVarPopOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by var_samp() on columns of table "chat_users" */
export interface ChatUsersVarSampOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by variance() on columns of table "chat_users" */
export interface ChatUsersVarianceOrderBy {
  chat_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by aggregate values of table "chat" */
export interface ChatAggregateOrderBy {
  avg?: Maybe<ChatAvgOrderBy>

  count?: Maybe<OrderBy>

  max?: Maybe<ChatMaxOrderBy>

  min?: Maybe<ChatMinOrderBy>

  stddev?: Maybe<ChatStddevOrderBy>

  stddev_pop?: Maybe<ChatStddevPopOrderBy>

  stddev_samp?: Maybe<ChatStddevSampOrderBy>

  sum?: Maybe<ChatSumOrderBy>

  var_pop?: Maybe<ChatVarPopOrderBy>

  var_samp?: Maybe<ChatVarSampOrderBy>

  variance?: Maybe<ChatVarianceOrderBy>
}
/** order by avg() on columns of table "chat" */
export interface ChatAvgOrderBy {
  id?: Maybe<OrderBy>

  owner_id?: Maybe<OrderBy>
}
/** order by max() on columns of table "chat" */
export interface ChatMaxOrderBy {
  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  name?: Maybe<OrderBy>

  owner_id?: Maybe<OrderBy>

  picture?: Maybe<OrderBy>
}
/** order by min() on columns of table "chat" */
export interface ChatMinOrderBy {
  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  name?: Maybe<OrderBy>

  owner_id?: Maybe<OrderBy>

  picture?: Maybe<OrderBy>
}
/** order by stddev() on columns of table "chat" */
export interface ChatStddevOrderBy {
  id?: Maybe<OrderBy>

  owner_id?: Maybe<OrderBy>
}
/** order by stddev_pop() on columns of table "chat" */
export interface ChatStddevPopOrderBy {
  id?: Maybe<OrderBy>

  owner_id?: Maybe<OrderBy>
}
/** order by stddev_samp() on columns of table "chat" */
export interface ChatStddevSampOrderBy {
  id?: Maybe<OrderBy>

  owner_id?: Maybe<OrderBy>
}
/** order by sum() on columns of table "chat" */
export interface ChatSumOrderBy {
  id?: Maybe<OrderBy>

  owner_id?: Maybe<OrderBy>
}
/** order by var_pop() on columns of table "chat" */
export interface ChatVarPopOrderBy {
  id?: Maybe<OrderBy>

  owner_id?: Maybe<OrderBy>
}
/** order by var_samp() on columns of table "chat" */
export interface ChatVarSampOrderBy {
  id?: Maybe<OrderBy>

  owner_id?: Maybe<OrderBy>
}
/** order by variance() on columns of table "chat" */
export interface ChatVarianceOrderBy {
  id?: Maybe<OrderBy>

  owner_id?: Maybe<OrderBy>
}
/** order by aggregate values of table "recipient" */
export interface RecipientAggregateOrderBy {
  avg?: Maybe<RecipientAvgOrderBy>

  count?: Maybe<OrderBy>

  max?: Maybe<RecipientMaxOrderBy>

  min?: Maybe<RecipientMinOrderBy>

  stddev?: Maybe<RecipientStddevOrderBy>

  stddev_pop?: Maybe<RecipientStddevPopOrderBy>

  stddev_samp?: Maybe<RecipientStddevSampOrderBy>

  sum?: Maybe<RecipientSumOrderBy>

  var_pop?: Maybe<RecipientVarPopOrderBy>

  var_samp?: Maybe<RecipientVarSampOrderBy>

  variance?: Maybe<RecipientVarianceOrderBy>
}
/** order by avg() on columns of table "recipient" */
export interface RecipientAvgOrderBy {
  id?: Maybe<OrderBy>

  message_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by max() on columns of table "recipient" */
export interface RecipientMaxOrderBy {
  id?: Maybe<OrderBy>

  message_id?: Maybe<OrderBy>

  read_at?: Maybe<OrderBy>

  received_at?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by min() on columns of table "recipient" */
export interface RecipientMinOrderBy {
  id?: Maybe<OrderBy>

  message_id?: Maybe<OrderBy>

  read_at?: Maybe<OrderBy>

  received_at?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by stddev() on columns of table "recipient" */
export interface RecipientStddevOrderBy {
  id?: Maybe<OrderBy>

  message_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by stddev_pop() on columns of table "recipient" */
export interface RecipientStddevPopOrderBy {
  id?: Maybe<OrderBy>

  message_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by stddev_samp() on columns of table "recipient" */
export interface RecipientStddevSampOrderBy {
  id?: Maybe<OrderBy>

  message_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by sum() on columns of table "recipient" */
export interface RecipientSumOrderBy {
  id?: Maybe<OrderBy>

  message_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by var_pop() on columns of table "recipient" */
export interface RecipientVarPopOrderBy {
  id?: Maybe<OrderBy>

  message_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by var_samp() on columns of table "recipient" */
export interface RecipientVarSampOrderBy {
  id?: Maybe<OrderBy>

  message_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** order by variance() on columns of table "recipient" */
export interface RecipientVarianceOrderBy {
  id?: Maybe<OrderBy>

  message_id?: Maybe<OrderBy>

  user_id?: Maybe<OrderBy>
}
/** Boolean expression to filter rows from the table "chat". All fields are combined with a logical 'AND'. */
export interface ChatBoolExp {
  _and?: Maybe<(Maybe<ChatBoolExp>)[]>

  _not?: Maybe<ChatBoolExp>

  _or?: Maybe<(Maybe<ChatBoolExp>)[]>

  chat_group_admins?: Maybe<ChatGroupAdminsBoolExp>

  created_at?: Maybe<TimestamptzComparisonExp>

  id?: Maybe<IntComparisonExp>

  messages?: Maybe<MessageBoolExp>

  name?: Maybe<StringComparisonExp>

  owner?: Maybe<UsersBoolExp>

  owner_id?: Maybe<IntComparisonExp>

  picture?: Maybe<StringComparisonExp>

  users?: Maybe<ChatUsersBoolExp>
}
/** Boolean expression to filter rows from the table "chat_group_admins". All fields are combined with a logical 'AND'. */
export interface ChatGroupAdminsBoolExp {
  _and?: Maybe<(Maybe<ChatGroupAdminsBoolExp>)[]>

  _not?: Maybe<ChatGroupAdminsBoolExp>

  _or?: Maybe<(Maybe<ChatGroupAdminsBoolExp>)[]>

  chat?: Maybe<ChatBoolExp>

  chat_id?: Maybe<IntComparisonExp>

  user?: Maybe<UsersBoolExp>

  user_id?: Maybe<IntComparisonExp>
}
/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export interface IntComparisonExp {
  _eq?: Maybe<number>

  _gt?: Maybe<number>

  _gte?: Maybe<number>

  _in?: Maybe<number[]>

  _is_null?: Maybe<boolean>

  _lt?: Maybe<number>

  _lte?: Maybe<number>

  _neq?: Maybe<number>

  _nin?: Maybe<number[]>
}
/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface UsersBoolExp {
  _and?: Maybe<(Maybe<UsersBoolExp>)[]>

  _not?: Maybe<UsersBoolExp>

  _or?: Maybe<(Maybe<UsersBoolExp>)[]>

  chat_group_admins?: Maybe<ChatGroupAdminsBoolExp>

  chat_users?: Maybe<ChatUsersBoolExp>

  chats?: Maybe<ChatBoolExp>

  created_at?: Maybe<TimestamptzComparisonExp>

  id?: Maybe<IntComparisonExp>

  messages?: Maybe<MessageBoolExp>

  name?: Maybe<StringComparisonExp>

  password?: Maybe<StringComparisonExp>

  picture?: Maybe<StringComparisonExp>

  recipients?: Maybe<RecipientBoolExp>

  username?: Maybe<StringComparisonExp>
}
/** Boolean expression to filter rows from the table "chat_users". All fields are combined with a logical 'AND'. */
export interface ChatUsersBoolExp {
  _and?: Maybe<(Maybe<ChatUsersBoolExp>)[]>

  _not?: Maybe<ChatUsersBoolExp>

  _or?: Maybe<(Maybe<ChatUsersBoolExp>)[]>

  chat?: Maybe<ChatBoolExp>

  chat_id?: Maybe<IntComparisonExp>

  user?: Maybe<UsersBoolExp>

  user_id?: Maybe<IntComparisonExp>
}
/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {
  _eq?: Maybe<Timestamptz>

  _gt?: Maybe<Timestamptz>

  _gte?: Maybe<Timestamptz>

  _in?: Maybe<Timestamptz[]>

  _is_null?: Maybe<boolean>

  _lt?: Maybe<Timestamptz>

  _lte?: Maybe<Timestamptz>

  _neq?: Maybe<Timestamptz>

  _nin?: Maybe<Timestamptz[]>
}
/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export interface MessageBoolExp {
  _and?: Maybe<(Maybe<MessageBoolExp>)[]>

  _not?: Maybe<MessageBoolExp>

  _or?: Maybe<(Maybe<MessageBoolExp>)[]>

  chat?: Maybe<ChatBoolExp>

  chat_id?: Maybe<IntComparisonExp>

  content?: Maybe<StringComparisonExp>

  created_at?: Maybe<TimestamptzComparisonExp>

  id?: Maybe<IntComparisonExp>

  recipients?: Maybe<RecipientBoolExp>

  sender?: Maybe<UsersBoolExp>

  sender_id?: Maybe<IntComparisonExp>
}
/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface StringComparisonExp {
  _eq?: Maybe<string>

  _gt?: Maybe<string>

  _gte?: Maybe<string>

  _ilike?: Maybe<string>

  _in?: Maybe<string[]>

  _is_null?: Maybe<boolean>

  _like?: Maybe<string>

  _lt?: Maybe<string>

  _lte?: Maybe<string>

  _neq?: Maybe<string>

  _nilike?: Maybe<string>

  _nin?: Maybe<string[]>

  _nlike?: Maybe<string>

  _nsimilar?: Maybe<string>

  _similar?: Maybe<string>
}
/** Boolean expression to filter rows from the table "recipient". All fields are combined with a logical 'AND'. */
export interface RecipientBoolExp {
  _and?: Maybe<(Maybe<RecipientBoolExp>)[]>

  _not?: Maybe<RecipientBoolExp>

  _or?: Maybe<(Maybe<RecipientBoolExp>)[]>

  id?: Maybe<IntComparisonExp>

  message?: Maybe<MessageBoolExp>

  message_id?: Maybe<IntComparisonExp>

  read_at?: Maybe<TimestamptzComparisonExp>

  received_at?: Maybe<TimestamptzComparisonExp>

  user?: Maybe<UsersBoolExp>

  user_id?: Maybe<IntComparisonExp>
}
/** ordering options when selecting data from "chat_group_admins" */
export interface ChatGroupAdminsOrderBy {
  chat?: Maybe<ChatOrderBy>

  chat_id?: Maybe<OrderBy>

  user?: Maybe<UsersOrderBy>

  user_id?: Maybe<OrderBy>
}
/** ordering options when selecting data from "chat_users" */
export interface ChatUsersOrderBy {
  chat?: Maybe<ChatOrderBy>

  chat_id?: Maybe<OrderBy>

  user?: Maybe<UsersOrderBy>

  user_id?: Maybe<OrderBy>
}
/** ordering options when selecting data from "message" */
export interface MessageOrderBy {
  chat?: Maybe<ChatOrderBy>

  chat_id?: Maybe<OrderBy>

  content?: Maybe<OrderBy>

  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  recipients_aggregate?: Maybe<RecipientAggregateOrderBy>

  sender?: Maybe<UsersOrderBy>

  sender_id?: Maybe<OrderBy>
}
/** ordering options when selecting data from "recipient" */
export interface RecipientOrderBy {
  id?: Maybe<OrderBy>

  message?: Maybe<MessageOrderBy>

  message_id?: Maybe<OrderBy>

  read_at?: Maybe<OrderBy>

  received_at?: Maybe<OrderBy>

  user?: Maybe<UsersOrderBy>

  user_id?: Maybe<OrderBy>
}
/** ordering options when selecting data from "message_user" */
export interface MessageUserOrderBy {
  chat?: Maybe<ChatOrderBy>

  chat_id?: Maybe<OrderBy>

  content?: Maybe<OrderBy>

  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender?: Maybe<UsersOrderBy>

  sender_id?: Maybe<OrderBy>
}
/** Boolean expression to filter rows from the table "message_user". All fields are combined with a logical 'AND'. */
export interface MessageUserBoolExp {
  _and?: Maybe<(Maybe<MessageUserBoolExp>)[]>

  _not?: Maybe<MessageUserBoolExp>

  _or?: Maybe<(Maybe<MessageUserBoolExp>)[]>

  chat?: Maybe<ChatBoolExp>

  chat_id?: Maybe<IntComparisonExp>

  content?: Maybe<StringComparisonExp>

  created_at?: Maybe<TimestamptzComparisonExp>

  id?: Maybe<IntComparisonExp>

  sender?: Maybe<UsersBoolExp>

  sender_id?: Maybe<IntComparisonExp>
}
/** input type for inserting data into table "chat" */
export interface ChatInsertInput {
  chat_group_admins?: Maybe<ChatGroupAdminsArrRelInsertInput>

  created_at?: Maybe<Timestamptz>

  id?: Maybe<number>

  messages?: Maybe<MessageArrRelInsertInput>

  name?: Maybe<string>

  owner?: Maybe<UsersObjRelInsertInput>

  owner_id?: Maybe<number>

  picture?: Maybe<string>

  users?: Maybe<ChatUsersArrRelInsertInput>
}
/** input type for inserting array relation for remote table "chat_group_admins" */
export interface ChatGroupAdminsArrRelInsertInput {
  data: ChatGroupAdminsInsertInput[]

  on_conflict?: Maybe<ChatGroupAdminsOnConflict>
}
/** input type for inserting data into table "chat_group_admins" */
export interface ChatGroupAdminsInsertInput {
  chat?: Maybe<ChatObjRelInsertInput>

  chat_id?: Maybe<number>

  user?: Maybe<UsersObjRelInsertInput>

  user_id?: Maybe<number>
}
/** input type for inserting object relation for remote table "chat" */
export interface ChatObjRelInsertInput {
  data: ChatInsertInput

  on_conflict?: Maybe<ChatOnConflict>
}
/** on conflict condition type for table "chat" */
export interface ChatOnConflict {
  constraint: ChatConstraint

  update_columns: ChatUpdateColumn[]
}
/** input type for inserting object relation for remote table "users" */
export interface UsersObjRelInsertInput {
  data: UsersInsertInput

  on_conflict?: Maybe<UsersOnConflict>
}
/** input type for inserting data into table "users" */
export interface UsersInsertInput {
  chat_group_admins?: Maybe<ChatGroupAdminsArrRelInsertInput>

  chat_users?: Maybe<ChatUsersArrRelInsertInput>

  chats?: Maybe<ChatArrRelInsertInput>

  created_at?: Maybe<Timestamptz>

  id?: Maybe<number>

  messages?: Maybe<MessageArrRelInsertInput>

  name?: Maybe<string>

  password?: Maybe<string>

  picture?: Maybe<string>

  recipients?: Maybe<RecipientArrRelInsertInput>

  username?: Maybe<string>
}
/** input type for inserting array relation for remote table "chat_users" */
export interface ChatUsersArrRelInsertInput {
  data: ChatUsersInsertInput[]

  on_conflict?: Maybe<ChatUsersOnConflict>
}
/** input type for inserting data into table "chat_users" */
export interface ChatUsersInsertInput {
  chat?: Maybe<ChatObjRelInsertInput>

  chat_id?: Maybe<number>

  user?: Maybe<UsersObjRelInsertInput>

  user_id?: Maybe<number>
}
/** on conflict condition type for table "chat_users" */
export interface ChatUsersOnConflict {
  constraint: ChatUsersConstraint

  update_columns: ChatUsersUpdateColumn[]
}
/** input type for inserting array relation for remote table "chat" */
export interface ChatArrRelInsertInput {
  data: ChatInsertInput[]

  on_conflict?: Maybe<ChatOnConflict>
}
/** input type for inserting array relation for remote table "message" */
export interface MessageArrRelInsertInput {
  data: MessageInsertInput[]

  on_conflict?: Maybe<MessageOnConflict>
}
/** input type for inserting data into table "message" */
export interface MessageInsertInput {
  chat?: Maybe<ChatObjRelInsertInput>

  chat_id?: Maybe<number>

  content?: Maybe<string>

  created_at?: Maybe<Timestamptz>

  id?: Maybe<number>

  recipients?: Maybe<RecipientArrRelInsertInput>

  sender?: Maybe<UsersObjRelInsertInput>

  sender_id?: Maybe<number>
}
/** input type for inserting array relation for remote table "recipient" */
export interface RecipientArrRelInsertInput {
  data: RecipientInsertInput[]

  on_conflict?: Maybe<RecipientOnConflict>
}
/** input type for inserting data into table "recipient" */
export interface RecipientInsertInput {
  id?: Maybe<number>

  message?: Maybe<MessageObjRelInsertInput>

  message_id?: Maybe<number>

  read_at?: Maybe<Timestamptz>

  received_at?: Maybe<Timestamptz>

  user?: Maybe<UsersObjRelInsertInput>

  user_id?: Maybe<number>
}
/** input type for inserting object relation for remote table "message" */
export interface MessageObjRelInsertInput {
  data: MessageInsertInput

  on_conflict?: Maybe<MessageOnConflict>
}
/** on conflict condition type for table "message" */
export interface MessageOnConflict {
  constraint: MessageConstraint

  update_columns: MessageUpdateColumn[]
}
/** on conflict condition type for table "recipient" */
export interface RecipientOnConflict {
  constraint: RecipientConstraint

  update_columns: RecipientUpdateColumn[]
}
/** on conflict condition type for table "users" */
export interface UsersOnConflict {
  constraint: UsersConstraint

  update_columns: UsersUpdateColumn[]
}
/** on conflict condition type for table "chat_group_admins" */
export interface ChatGroupAdminsOnConflict {
  constraint: ChatGroupAdminsConstraint

  update_columns: ChatGroupAdminsUpdateColumn[]
}
/** input type for inserting data into table "message_user" */
export interface MessageUserInsertInput {
  chat?: Maybe<ChatObjRelInsertInput>

  chat_id?: Maybe<number>

  content?: Maybe<string>

  created_at?: Maybe<Timestamptz>

  id?: Maybe<number>

  sender?: Maybe<UsersObjRelInsertInput>

  sender_id?: Maybe<number>
}
/** input type for incrementing integer columne in table "chat" */
export interface ChatIncInput {
  id?: Maybe<number>

  owner_id?: Maybe<number>
}
/** input type for updating data in table "chat" */
export interface ChatSetInput {
  created_at?: Maybe<Timestamptz>

  id?: Maybe<number>

  name?: Maybe<string>

  owner_id?: Maybe<number>

  picture?: Maybe<string>
}
/** input type for incrementing integer columne in table "chat_group_admins" */
export interface ChatGroupAdminsIncInput {
  chat_id?: Maybe<number>

  user_id?: Maybe<number>
}
/** input type for updating data in table "chat_group_admins" */
export interface ChatGroupAdminsSetInput {
  chat_id?: Maybe<number>

  user_id?: Maybe<number>
}
/** input type for incrementing integer columne in table "chat_users" */
export interface ChatUsersIncInput {
  chat_id?: Maybe<number>

  user_id?: Maybe<number>
}
/** input type for updating data in table "chat_users" */
export interface ChatUsersSetInput {
  chat_id?: Maybe<number>

  user_id?: Maybe<number>
}
/** input type for incrementing integer columne in table "message" */
export interface MessageIncInput {
  chat_id?: Maybe<number>

  id?: Maybe<number>

  sender_id?: Maybe<number>
}
/** input type for updating data in table "message" */
export interface MessageSetInput {
  chat_id?: Maybe<number>

  content?: Maybe<string>

  created_at?: Maybe<Timestamptz>

  id?: Maybe<number>

  sender_id?: Maybe<number>
}
/** input type for incrementing integer columne in table "message_user" */
export interface MessageUserIncInput {
  chat_id?: Maybe<number>

  id?: Maybe<number>

  sender_id?: Maybe<number>
}
/** input type for updating data in table "message_user" */
export interface MessageUserSetInput {
  chat_id?: Maybe<number>

  content?: Maybe<string>

  created_at?: Maybe<Timestamptz>

  id?: Maybe<number>

  sender_id?: Maybe<number>
}
/** input type for incrementing integer columne in table "recipient" */
export interface RecipientIncInput {
  id?: Maybe<number>

  message_id?: Maybe<number>

  user_id?: Maybe<number>
}
/** input type for updating data in table "recipient" */
export interface RecipientSetInput {
  id?: Maybe<number>

  message_id?: Maybe<number>

  read_at?: Maybe<Timestamptz>

  received_at?: Maybe<Timestamptz>

  user_id?: Maybe<number>
}
/** input type for incrementing integer columne in table "users" */
export interface UsersIncInput {
  id?: Maybe<number>
}
/** input type for updating data in table "users" */
export interface UsersSetInput {
  created_at?: Maybe<Timestamptz>

  id?: Maybe<number>

  name?: Maybe<string>

  password?: Maybe<string>

  picture?: Maybe<string>

  username?: Maybe<string>
}
/** input type for inserting object relation for remote table "chat_group_admins" */
export interface ChatGroupAdminsObjRelInsertInput {
  data: ChatGroupAdminsInsertInput

  on_conflict?: Maybe<ChatGroupAdminsOnConflict>
}
/** input type for inserting object relation for remote table "chat_users" */
export interface ChatUsersObjRelInsertInput {
  data: ChatUsersInsertInput

  on_conflict?: Maybe<ChatUsersOnConflict>
}
/** order by aggregate values of table "message_user" */
export interface MessageUserAggregateOrderBy {
  avg?: Maybe<MessageUserAvgOrderBy>

  count?: Maybe<OrderBy>

  max?: Maybe<MessageUserMaxOrderBy>

  min?: Maybe<MessageUserMinOrderBy>

  stddev?: Maybe<MessageUserStddevOrderBy>

  stddev_pop?: Maybe<MessageUserStddevPopOrderBy>

  stddev_samp?: Maybe<MessageUserStddevSampOrderBy>

  sum?: Maybe<MessageUserSumOrderBy>

  var_pop?: Maybe<MessageUserVarPopOrderBy>

  var_samp?: Maybe<MessageUserVarSampOrderBy>

  variance?: Maybe<MessageUserVarianceOrderBy>
}
/** order by avg() on columns of table "message_user" */
export interface MessageUserAvgOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by max() on columns of table "message_user" */
export interface MessageUserMaxOrderBy {
  chat_id?: Maybe<OrderBy>

  content?: Maybe<OrderBy>

  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by min() on columns of table "message_user" */
export interface MessageUserMinOrderBy {
  chat_id?: Maybe<OrderBy>

  content?: Maybe<OrderBy>

  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by stddev() on columns of table "message_user" */
export interface MessageUserStddevOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by stddev_pop() on columns of table "message_user" */
export interface MessageUserStddevPopOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by stddev_samp() on columns of table "message_user" */
export interface MessageUserStddevSampOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by sum() on columns of table "message_user" */
export interface MessageUserSumOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by var_pop() on columns of table "message_user" */
export interface MessageUserVarPopOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by var_samp() on columns of table "message_user" */
export interface MessageUserVarSampOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** order by variance() on columns of table "message_user" */
export interface MessageUserVarianceOrderBy {
  chat_id?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  sender_id?: Maybe<OrderBy>
}
/** input type for inserting array relation for remote table "message_user" */
export interface MessageUserArrRelInsertInput {
  data: MessageUserInsertInput[]
}
/** input type for inserting object relation for remote table "message_user" */
export interface MessageUserObjRelInsertInput {
  data: MessageUserInsertInput
}
/** input type for inserting object relation for remote table "recipient" */
export interface RecipientObjRelInsertInput {
  data: RecipientInsertInput

  on_conflict?: Maybe<RecipientOnConflict>
}
/** order by aggregate values of table "users" */
export interface UsersAggregateOrderBy {
  avg?: Maybe<UsersAvgOrderBy>

  count?: Maybe<OrderBy>

  max?: Maybe<UsersMaxOrderBy>

  min?: Maybe<UsersMinOrderBy>

  stddev?: Maybe<UsersStddevOrderBy>

  stddev_pop?: Maybe<UsersStddevPopOrderBy>

  stddev_samp?: Maybe<UsersStddevSampOrderBy>

  sum?: Maybe<UsersSumOrderBy>

  var_pop?: Maybe<UsersVarPopOrderBy>

  var_samp?: Maybe<UsersVarSampOrderBy>

  variance?: Maybe<UsersVarianceOrderBy>
}
/** order by avg() on columns of table "users" */
export interface UsersAvgOrderBy {
  id?: Maybe<OrderBy>
}
/** order by max() on columns of table "users" */
export interface UsersMaxOrderBy {
  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  name?: Maybe<OrderBy>

  password?: Maybe<OrderBy>

  picture?: Maybe<OrderBy>

  username?: Maybe<OrderBy>
}
/** order by min() on columns of table "users" */
export interface UsersMinOrderBy {
  created_at?: Maybe<OrderBy>

  id?: Maybe<OrderBy>

  name?: Maybe<OrderBy>

  password?: Maybe<OrderBy>

  picture?: Maybe<OrderBy>

  username?: Maybe<OrderBy>
}
/** order by stddev() on columns of table "users" */
export interface UsersStddevOrderBy {
  id?: Maybe<OrderBy>
}
/** order by stddev_pop() on columns of table "users" */
export interface UsersStddevPopOrderBy {
  id?: Maybe<OrderBy>
}
/** order by stddev_samp() on columns of table "users" */
export interface UsersStddevSampOrderBy {
  id?: Maybe<OrderBy>
}
/** order by sum() on columns of table "users" */
export interface UsersSumOrderBy {
  id?: Maybe<OrderBy>
}
/** order by var_pop() on columns of table "users" */
export interface UsersVarPopOrderBy {
  id?: Maybe<OrderBy>
}
/** order by var_samp() on columns of table "users" */
export interface UsersVarSampOrderBy {
  id?: Maybe<OrderBy>
}
/** order by variance() on columns of table "users" */
export interface UsersVarianceOrderBy {
  id?: Maybe<OrderBy>
}
/** input type for inserting array relation for remote table "users" */
export interface UsersArrRelInsertInput {
  data: UsersInsertInput[]

  on_conflict?: Maybe<UsersOnConflict>
}
/** select columns of table "chat" */
export enum ChatSelectColumn {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  OwnerId = 'owner_id',
  Picture = 'picture'
}
/** column ordering options */
export enum OrderBy {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}
/** select columns of table "chat_group_admins" */
export enum ChatGroupAdminsSelectColumn {
  ChatId = 'chat_id',
  UserId = 'user_id'
}
/** select columns of table "chat_users" */
export enum ChatUsersSelectColumn {
  ChatId = 'chat_id',
  UserId = 'user_id'
}
/** select columns of table "message" */
export enum MessageSelectColumn {
  ChatId = 'chat_id',
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  SenderId = 'sender_id'
}
/** select columns of table "recipient" */
export enum RecipientSelectColumn {
  Id = 'id',
  MessageId = 'message_id',
  ReadAt = 'read_at',
  ReceivedAt = 'received_at',
  UserId = 'user_id'
}
/** select columns of table "message_user" */
export enum MessageUserSelectColumn {
  ChatId = 'chat_id',
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  SenderId = 'sender_id'
}
/** select columns of table "users" */
export enum UsersSelectColumn {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Picture = 'picture',
  Username = 'username'
}
/** unique or primary key constraints on table "chat" */
export enum ChatConstraint {
  ChatPkey = 'chat_pkey'
}
/** update columns of table "chat" */
export enum ChatUpdateColumn {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  OwnerId = 'owner_id',
  Picture = 'picture'
}
/** unique or primary key constraints on table "chat_users" */
export enum ChatUsersConstraint {
  ChatUsersPkey = 'chat_users_pkey'
}
/** update columns of table "chat_users" */
export enum ChatUsersUpdateColumn {
  ChatId = 'chat_id',
  UserId = 'user_id'
}
/** unique or primary key constraints on table "message" */
export enum MessageConstraint {
  MessagePkey = 'message_pkey'
}
/** update columns of table "message" */
export enum MessageUpdateColumn {
  ChatId = 'chat_id',
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  SenderId = 'sender_id'
}
/** unique or primary key constraints on table "recipient" */
export enum RecipientConstraint {
  RecipientPkey = 'recipient_pkey'
}
/** update columns of table "recipient" */
export enum RecipientUpdateColumn {
  Id = 'id',
  MessageId = 'message_id',
  ReadAt = 'read_at',
  ReceivedAt = 'received_at',
  UserId = 'user_id'
}
/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  UsersPkey = 'users_pkey'
}
/** update columns of table "users" */
export enum UsersUpdateColumn {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Picture = 'picture',
  Username = 'username'
}
/** unique or primary key constraints on table "chat_group_admins" */
export enum ChatGroupAdminsConstraint {
  ChatGroupAdminsPkey = 'chat_group_admins_pkey'
}
/** update columns of table "chat_group_admins" */
export enum ChatGroupAdminsUpdateColumn {
  ChatId = 'chat_id',
  UserId = 'user_id'
}
/** conflict action */
export enum ConflictAction {
  Ignore = 'ignore',
  Update = 'update'
}

export type Timestamptz = any
