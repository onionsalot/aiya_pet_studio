module Types
  class QueryType < GraphQL::Schema::Object
    field :users, resolver: Queries::AllUsers
    field :user, resolver: Queries::OneUser
    field :products, resolver: Queries::AllProducts
    field :product, resolver: Queries::OneProduct
    field :tags, resolver: Queries::AllTags
    field :tag, resolver: Queries::OneTag
    field :featured_products, resolver: Queries::AllFeaturedProducts
    field :featured_product, resolver: Queries::OneFeaturedProduct
    field :reviews_for_homepage, resolver: Queries::ReviewsForHomepage
    field :search_products, resolver: Queries::SearchProducts
    field :popular_product, resolver: Queries::PopularProduct
  end
end