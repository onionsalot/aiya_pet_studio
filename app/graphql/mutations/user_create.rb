# frozen_string_literal: true

module Mutations
  class UserCreate < BaseMutation
    description "Creates a new user"

    argument :first_name, String, required: true
    argument :middle_name, String, required: false
    argument :last_name, String, required: true
    argument :gender, String, required: true
    argument :email, String, required: true
    argument :password, String, required: true
    argument :address1, String, required: true
    argument :address2, String, required: true
    argument :city, String, required: true
    argument :state, String, required: true
    argument :country, String, required: true
    argument :zipcode, String, required: true
    argument :phone_number, String, required: false


    field :user, Types::UserType, null: true

    def resolve(first_name: nil, middle_name: nil, last_name: nil, gender: nil, email: nil, password: nil, address1: nil, address2: nil, city: nil, state: nil, country: nil, zipcode: nil, phone_number: nil)
      begin
        raise "Not an Admin" unless context[:current_user].admin?

        user = UserService.create_user!(
          first_name: first_name,
          middle_name: first_name,
          last_name: last_name,
          gender: gender,
          email: email,
          password: password,
          address1: address1,
          address2: address2,
          city: city,
          state: state, 
          country: country,
          zipcode: zipcode,
          phone_number: phone_number
        )

        { user: user }
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error creating user"
      end
    end
  end
end
