# frozen_string_literal: true

module Mutations
  class ProductUpdate < BaseMutation
    description "Updates a product by id"

    field :product, Types::ProductType, null: true

    argument :id, ID, required: true
    argument :name, String, required: true
    argument :price, Integer, required: true
    argument :description, String, required: true

    def resolve(id:, name:, price:, description:)
      begin
        raise "Not an Admin" unless context[:current_user].admin?

        product = Product.find_by!(id: id)
        service = ProductService.new(product: product)
        service.update_product!(name: name, price: price, description: description)

        { product: product }
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error updating product"
      end
    end
  end
end
