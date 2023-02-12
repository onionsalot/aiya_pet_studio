module Types
  class QueryType < GraphQL::Schema::Object
    field :users, resolver: Queries::AllUsers
    field :products, resolver: Queries::AllProducts
    field :product, resolver: Queries::OneProduct
  end
end