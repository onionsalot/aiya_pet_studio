module Queries
  class SearchProducts < BaseQuery
    type [Types::ProductType], null: false

    description "Search for products by name or tag"
    argument :search_term, String, required: true

    def resolve(search_term:)
      Product.left_outer_joins(:tags).where("products.name ILIKE ? OR tags.name ILIKE ?", "%#{search_term}%", "%#{search_term}%").distinct
    rescue
      raise GraphQL::ExecutionError.new "Unable to find any products"
    end
  end
end