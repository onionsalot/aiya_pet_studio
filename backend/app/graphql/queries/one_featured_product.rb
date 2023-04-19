module Queries
  class OneFeaturedProduct < BaseQuery
    type Types::FeaturedProductType, null: false
    description "Query one featured product"
    argument :id, ID, required: true

    def resolve(id:)
      return FeaturedProduct.find_by!(id: id)
    rescue
      raise GraphQL::ExecutionError.new "Unable to fetch featured product"
    end
  end
end