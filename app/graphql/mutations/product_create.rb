# frozen_string_literal: true

module Mutations
  class ProductCreate < BaseMutation
    description "Creates a new product"

    argument :name, String, required: true
    argument :price, Integer, required: true
    argument :description, String, required: true

    field :product, Types::ProductType, null: true

    def resolve(name: nil, price: nil, description: nil)
      begin
        raise "Not an Admin" unless context[:current_user].admin?

        product = ProductService.create_product!(
          name: name,
          price: price,
          description: description
        )

        { product: product }
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error creating product"
      end
    end
  end
end
