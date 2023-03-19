module Types
  class MutationType < Types::BaseObject
    field :featured_product_update, mutation: Mutations::FeaturedProductUpdate
    field :featured_product_create, mutation: Mutations::FeaturedProductCreate
    field :featured_product_delete, mutation: Mutations::FeaturedProductDelete
    field :tag_update, mutation: Mutations::TagUpdate
    field :tag_delete, mutation: Mutations::TagDelete
    field :tag_create, mutation: Mutations::TagCreate
    field :product_delete, mutation: Mutations::ProductDelete
    field :product_update, mutation: Mutations::ProductUpdate
    field :product_create, mutation: Mutations::ProductCreate
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end
  end
end
