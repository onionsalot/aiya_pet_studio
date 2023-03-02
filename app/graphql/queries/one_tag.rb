module Queries
  class OneTag < BaseQuery
    type Types::TagType, null: false
    description "Query one Tag"
    argument :id, ID, required: true

    def resolve(id:)
      return Tag.find_by!(id: id)
    rescue
      raise GraphQL::ExecutionError.new "Unable to fetch tags"
    end
  end
end