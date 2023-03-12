# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :first_name, String, null: false
    field :email, String, null: false
    field :address1, String, null: false
    field :admin, Boolean, null: false
    field :remember_created_at, GraphQL::Types::ISO8601DateTime
    field :sign_in_count, Integer, null: false
    field :current_sign_in_at, GraphQL::Types::ISO8601DateTime
    field :last_sign_in_at, GraphQL::Types::ISO8601DateTime
    field :current_sign_in_ip, String
    field :last_sign_in_ip, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :middle_name, String
    field :last_name, String
    field :gender, Integer
    field :address2, String
    field :country, String
    field :city, String
    field :state, String
    field :zipcode, String
    field :full_name, String
    field :phone_number, String
  end
end
