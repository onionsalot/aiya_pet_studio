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
end
