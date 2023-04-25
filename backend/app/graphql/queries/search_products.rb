module Queries
  class SearchProducts < BaseQuery
    SORT_TYPES = %w[relevant price_asc price_desc top_reviewed recent name].freeze
    type [Types::ProductType], null: false

    description "Search for products by name or tag"
    argument :search_term, String, required: true
    argument :sort_by, String, required: false

    def resolve(search_term:, sort_by: 'relevant')
      raise GraphQL::ExecutionError.new("Search term cannot be blank") if search_term.blank?
      products = Product.search_by_name_and_description(search_term)
      tags = Tag.search_by_name(search_term).flat_map { |t| t.products }
      
      results = (products + tags).uniq

      sort_products(results, sort_by)
    rescue => e
      raise GraphQL::ExecutionError.new(e.message)
    end
  
    private

    def sort_products(products, sort_by)
      case sort_by
      when 'relevant'
        products # Do nothing. pg_search already sorts by relevance
      when 'price_asc'
        products.sort_by(&:price)
      when 'price_desc'
        products.sort_by(&:price).reverse
      when 'top_reviewed'
        products.left_joins(:reviews)
                .group('products.id')
                .order('AVG(reviews.rating) DESC')
      when 'recent'
        products.sort_by(&:created_at).reverse
      when 'name'
        products.sort_by(&:name)
      else
        products
      end
    end
  end
end