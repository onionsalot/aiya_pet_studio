module Queries
  class OneUser < BaseQuery
    type Types::UserType, null: false
    description "Query one User"
    argument :id, ID, required: true

    def resolve(id:)
      return User.find_by!(id: id)
    rescue
      raise GraphQL::ExecutionError.new "Unable to fetch user"
    end
  end
end