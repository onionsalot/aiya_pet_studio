# frozen_string_literal: true

module Mutations
  class ProductDelete < BaseMutation
    description "Deletes a product by ID"

    field :product, Types::ProductType, null: true

    argument :id, ID, required: true

    def resolve(id:)
      begin
        raise "Not an Admin" unless context[:current_user].admin?

        product = Product.find_by!(id: id)
        service = ProductService.new(product: product)
        service.destroy_product!

        { product: product }
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error deleting product"
      end
    end
  end
end
