# frozen_string_literal: true

class Auth::PasswordsController < Devise::PasswordsController
  respond_to :json

  def check_token
    user = User.with_reset_password_token(params[:reset_password_token])
    if user.blank?
      render json: {
        message: 'User not found with this token.'
      }, status: :not_found
    else
      render json: {
        message: 'Token is valid.'
      }, status: :ok
    end
  end

  def respond_with(resource, _opts = {})
    if self.resource.errors.any?
      render json: {
        message: 'An error has occured.'
      }, status: :unprocessable_entity
    else
      render json: {
        message: 'Success.'
      }, status: :ok
    end
  end
end