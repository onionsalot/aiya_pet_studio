module Queries
  class TenNewestReviews < BaseQuery
    type [Types::ReviewType], null: false
    description "Query ten newest Reviews"
    def resolve
      return Review.order(:created_at).last(10)
    rescue
      raise GraphQL::ExecutionError.new "Unable to fetch ten newest Reviews"
    end
  end
end