module Queries
  class AllFeaturedProducts < BaseQuery
    type [Types::FeaturedProductType], null: false
    description "Query all Featured Products"
    def resolve
      return FeaturedProduct.order(:id)
    rescue
      raise GraphQL::ExecutionError.new "Unable to fetch featured products"
    end
  end
end