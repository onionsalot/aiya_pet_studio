# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  rating     :integer
#  review     :text
#  language   :string
#  image      :string
#  user_id    :bigint
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :product
  has_one :etsy_review, class_name: 'Etsy::EtsyReview', dependent: :nullify

  def reviewer
    return user.reviewer_display if user.present?
    return potential_user.reviewer_display if etsy_review.present? && etsy_review.potential_user.present? 

    "Anonymous"
  end
end
