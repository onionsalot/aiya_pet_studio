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
end
