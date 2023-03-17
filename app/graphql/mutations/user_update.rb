# frozen_string_literal: true

module Mutations
  class UserUpdate < BaseMutation
    description "Updates a user by id"

    field :user, Types::UserType, null: true

    argument :id, ID, required: true
    argument :first_name, String, required: true
    argument :last_name, String, required: true
    argument :address, String, required: true
    argument :address2, String, required: true
    argument :country, String, required: true
    argument :city, String, required: true
    argument :state, String, required: true
    argument :zipcode, String, required: true

    def resolve(id:, first_name:, last_name:, address:, address2:, country:, city:, state:, zipcode:)
      begin
        raise "Not an Admin" unless context[:current_user].admin?

        user = User.find_by!(id: id)
        service = UserService.new(user: user)
        service.update_user!(first_name: first_name, last_name: last_name, address: address, address2: address2, country: country, city: city, state: state, zipcode: zipcode)

        { user: user }
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error updating product"
      end
    end
  end
end