# frozen_string_literal: true

module Mutations
  class UserUpdate < BaseMutation
    description "Updates a user by id"

    field :user, Types::UserType, null: false

    argument :id, ID, required: true
    argument :first_name, String, required: true
    argument :middle_name, String, required: false
    argument :last_name, String, required: true
    argument :gender, String, required: true
    argument :email, String, required: true
    argument :admin, Boolean, required: true
    argument :address1, String, required: true
    argument :address2, String, required: true
    argument :city, String, required: true
    argument :state, String, required: true
    argument :country, String, required: true
    argument :zipcode, String, required: true
    argument :phone_number, String, required: false


    def resolve(id:, first_name:, middle_name:, last_name:, gender:, email:, admin:, address1:, address2:, country:, city:, state:, zipcode:, phone_number:)
      begin
        raise "Not an Admin" unless context[:current_user].admin?
        
        user = User.find_by!(id: id)
        service = UserService.new(user: user)
        service.update_user!(
          first_name: first_name, 
          middle_name: middle_name, 
          last_name: last_name, 
          gender: gender, 
          email: email,
          admin: admin,
          address1: address1, 
          address2: address2,
          city: city,
          state: state,
          country: country,
          zipcode: zipcode,
          phone_number: phone_number,
        )

        { user: user }
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error updating user"
      end
    end
  end
end
