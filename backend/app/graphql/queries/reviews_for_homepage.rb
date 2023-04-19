module Queries
  class ReviewsForHomepage < BaseQuery
    type [Types::ReviewType], null: false
    description "Query eight newest Reviews"
    def resolve
      return Review.order(created_at: :desc).first(8)
    rescue
      raise GraphQL::ExecutionError.new "Unable to fetch eight newest Reviews"
    end
  end
end