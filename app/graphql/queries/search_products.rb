module Queries
  class SearchProducts < BaseQuery
    type [Types::ProductType], null: false

    description "Search for products by name or tag"
    argument :search_term, String, required: true

    def resolve(search_term:)
      raise GraphQL::ExecutionError.new("Search term cannot be blank") if search_term.blank?

      Product.left_outer_joins(:tags).where("products.name ILIKE ? OR tags.name ILIKE ?", "%#{search_term}%", "%#{search_term}%").distinct
    rescue => e
      raise GraphQL::ExecutionError.new(e.message)
    end
  end
end