# frozen_string_literal: true

class Auth::CurrentUserController < ApplicationController
  before_action :authenticate_user!

  def index
    if current_user
      render json: { message: "Session found.", data: UserSerializer.new(current_user).serializable_hash[:data][:attributes] }, status: :ok
    else
      render json: { message: "Couldn't find an active session.", data: nil }, status: :unauthorized
    end
  end
end