# frozen_string_literal: true

module Mutations
  class FeaturedProductDelete < BaseMutation
    description "Deletes a featured_product by ID"

    field :featured_product, Types::FeaturedProductType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      begin
        raise "Not an Admin" unless context[:current_user].admin?

        featured_product = FeaturedProduct.find_by!(id: id)
        service = FeaturedProductService.new(featured_product: featured_product)
        service.destroy_featured_product!

        { featured_product: featured_product }
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error deleting featured product"
      end
    end
  end
end
