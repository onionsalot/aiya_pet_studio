module Queries
  class AllProducts < BaseQuery
    type [Types::ProductType], null: false
    description "Query all Products"
    def resolve
      return Product.all
    rescue
      raise GraphQL::ExecutionError.new "Unable to fetch products"
    end
  end
end