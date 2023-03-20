# == Schema Information
#
# Table name: featured_products
#
#  id         :bigint           not null, primary key
#  product_id :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class FeaturedProduct < ApplicationRecord
  belongs_to :product, optional: true
  validate :maximum_record_limit, on: :create

  MAX_RECORDS = 4

  private

  def maximum_record_limit
    if self.class.count >= MAX_RECORDS && new_record?
      errors.add(:base, "The maximum number of records (#{MAX_RECORDS}) has been reached")
    end
  end
end
