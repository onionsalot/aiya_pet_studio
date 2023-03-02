module Types
  class QueryType < GraphQL::Schema::Object
    field :users, resolver: Queries::AllUsers
    field :products, resolver: Queries::AllProducts
    field :product, resolver: Queries::OneProduct
    field :tags, resolver: Queries::AllTags
    field :tag, resolver: Queries::OneTag
  end
end