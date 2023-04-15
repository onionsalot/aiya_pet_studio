# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  display    :string           default("")
#  order      :integer          default(0)
#  link_to    :string           default("")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
end
