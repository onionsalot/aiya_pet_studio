# frozen_string_literal: true

class Auth::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  skip_before_action :verify_authenticity_token

  def respond_with(resource, _opts = {})
    if current_user
      render json: { message: "Logged in.", data: UserSerializer.new(resource).serializable_hash[:data][:attributes] }, status: :ok
    else
      render json: { message: "Couldn't find an active session.", data: nil }, status: :unauthorized
    end
  end

  private

  def unconfirmed_allowed?
    # Boot the user if its been over 2 days since they've signed up but haven't confirmed
    date_of_expired_confirmation = current_user.confirmation_sent_at + 2.days
    if current_user.confirmed_at? || (Time.now.to_date < date_of_expired_confirmation.to_date)
      return true
    end
    return false
  end

  def respond_to_on_destroy
    if user_session.blank?
      render json: {
        message: "Logged out successfully."
      }, status: :ok
    else
      render json: {
        message: "An Error has occured."
      }, status: :unauthorized
    end
  end
  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
