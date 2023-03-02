module Queries
  class AllTags < BaseQuery
    type [Types::TagType], null: false
    description "Query all Tags"
    def resolve
      return Tag.all
    rescue
      raise GraphQL::ExecutionError.new "Unable to fetch tags"
    end
  end
end