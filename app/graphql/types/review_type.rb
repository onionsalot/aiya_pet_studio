# frozen_string_literal: true

module Types
  class ReviewType < Types::BaseObject
    field :id, ID, null: false
    field :rating, Integer
    field :review, String
    field :language, String
    field :image, String
    field :user_id, Integer
    field :product_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :product, Types::ProductType, null: false
    field :user, Types::UserType, null: false
    field :reviewer, String
  end

  def product
    object.product
  end

  def user
    object.user
  end

  def reviewer
    object.reviewer
  end
end