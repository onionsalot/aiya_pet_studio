module UsersHelper
  CONFIRMATION_PATH = Rails.configuration.frontend_base_url + 'confirmation?token='
  RESET_PATH = Rails.configuration.frontend_base_url + 'reset?token='

  def custom_confirmation_path(resource, confirmation_token: nil)
    if resource.class == User
      return confirmation_path(confirmation_token: confirmation_token)
    end
    confirmation_url(resource, confirmation_token: confirmation_token)
  end

  def custom_reset_path(resource, reset_password_token: nil)
    if resource.class == User
      return reset_path(reset_password_token: reset_password_token)
    end
    edit_password_url(resource, reset_password_token: reset_password_token)
  end

  private

  def confirmation_path(confirmation_token: nil)
    return CONFIRMATION_PATH + confirmation_token
  end

  def reset_path(reset_password_token: nil)
    return RESET_PATH + reset_password_token
  end
end
