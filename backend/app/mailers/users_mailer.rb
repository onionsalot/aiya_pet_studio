class UsersMailer < Devise::Mailer
  helper :application
  helper UsersHelper
  include Devise::Controllers::UrlHelpers
  default template_path: 'devise/mailer'
end
