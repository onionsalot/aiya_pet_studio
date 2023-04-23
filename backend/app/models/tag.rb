# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord
  include PgSearch::Model

  has_many :product_tags, dependent: :destroy
  has_many :products, through: :product_tags

  multisearchable against: [:name],
                  using: {
                    tsearch: { prefix: true, any_word: true }
                  }
end
