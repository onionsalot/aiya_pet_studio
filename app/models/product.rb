# == Schema Information
#
# Table name: products
#
#  id              :bigint           not null, primary key
#  name            :string
#  description     :text
#  price           :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  etsy_listing_id :string
#  quantity        :integer
#
class Product < ApplicationRecord
    has_paper_trail
    has_many :reviews, dependent: :destroy
    has_many :product_tags, dependent: :destroy
    has_many :tags, through: :product_tags
  end
