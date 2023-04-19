module Queries
  class AllUsers < BaseQuery
    type [Types::UserType], null: false
    description "Query all Users"
    def resolve
      return User.all
    rescue
      raise GraphQL::ExecutionError.new "Unable to fetch users"
    end
  end
end