# == Schema Information
#
# Table name: etsy_etsy_reviews
#
#  id                  :bigint           not null, primary key
#  shop_id             :integer
#  listing_id          :integer
#  transaction_id      :integer
#  buyer_user_id       :integer
#  rating              :integer
#  review              :string           default("")
#  language            :string
#  image_url_fullxfull :string
#  created_timestamp   :integer
#  updated_timestamp   :integer
#  buyer_email         :string           default("")
#  review_id           :bigint           not null
#  potential_user_id   :bigint
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Etsy::EtsyReview < ApplicationRecord
  belongs_to :potential_user, optional: true

  belongs_to :review
end
