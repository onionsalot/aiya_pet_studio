# frozen_string_literal: true

module Mutations
  class FeaturedProductCreate < BaseMutation
    description "Creates a new featured_product"

    field :featured_product, Types::FeaturedProductType, null: false

    argument :product_id, Integer, required: true

    def resolve(product_id:)
      begin
        raise "Not an Admin" unless context[:current_user].admin?

        featured_product = FeaturedProductService.create_featured_product!(
          product_id: product_id
        )

        { featured_product: featured_product }
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error creating featured product"
      end
    end
  end
end
