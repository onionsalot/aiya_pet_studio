# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  display    :string
#  order      :integer
#  link_to    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
end
