# frozen_string_literal: true

class Auth::ConfirmationsController < Devise::ConfirmationsController
  respond_to :json

  def respond_with(resource, _opts = {})
    if resource.errors.any?
      render json: {
        message: 'An error has occured.'
      }, status: :unprocessable_entity
    else
      render json: {
        message: 'Confirmed sucessfully.'
      }, status: :ok
    end
  end
end
