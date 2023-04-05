# == Schema Information
#
# Table name: product_tags
#
#  id         :bigint           not null, primary key
#  product_id :bigint           not null
#  tag_id     :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ProductTag < ApplicationRecord
  belongs_to :product
  belongs_to :tag
end
