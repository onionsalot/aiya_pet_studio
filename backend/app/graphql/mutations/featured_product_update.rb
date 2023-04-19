# frozen_string_literal: true

module Mutations
  class FeaturedProductUpdate < BaseMutation
    description "Updates a featured_product by id"

    field :featured_product, Types::FeaturedProductType, null: false

    argument :id, ID, required: true
    argument :product_id, Integer, required: true

    def resolve(id:, product_id:)
      begin
        raise "Not an Admin" unless context[:current_user].admin?

        featured_product = FeaturedProduct.find_by!(id: id)
        service = FeaturedProductService.new(featured_product: featured_product)
        service.update_featured_product!(product_id: product_id)

        { featured_product: featured_product }
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error updating featured product"
      end
    end
  end
end
