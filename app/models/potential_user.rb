# == Schema Information
#
# Table name: potential_users
#
#  id           :bigint           not null, primary key
#  email        :string           not null
#  address1     :string
#  address2     :string
#  country      :string
#  city         :string
#  state        :string
#  zipcode      :string
#  phone_number :string
#  first_name   :string
#  middle_name  :string
#  last_name    :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :bigint
#
class PotentialUser < ApplicationRecord
  belongs_to :user, optional: true
  has_many :etsy_reviews, class_name: 'Etsy::EtsyReview', dependent: :nullify

  def reviewer_display
    return masked_email unless can_display_name?

    "#{first_name} #{last_name[0]}."
  end

  private

  def masked_email
    address = Mail::Address.new(email)
    return "#{address.local[0..1]}*****@#{address.domain}"
  end 

  def can_display_name?
    first_name.present? && last_name.present?
  end
end
