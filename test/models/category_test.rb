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
require "test_helper"

class CategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
