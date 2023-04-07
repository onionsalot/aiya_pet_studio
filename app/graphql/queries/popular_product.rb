module Queries
  class PopularProduct < BaseQuery
    type Types::ProductType, null: false
    description "Query popular Product"

    def resolve()
      return Product.last
    rescue
      raise GraphQL::ExecutionError.new "Unable to fetch product"
    end
  end
end