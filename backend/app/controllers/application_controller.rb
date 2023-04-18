class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  after_action :set_csrf_cookie
  # before_action :authenticate_user!

  private

  def set_csrf_cookie
    cookies["CSRF-TOKEN"] = {
      value: form_authenticity_token,
      secure: true,
      same_site: "None"
    }
  end
end