# == Schema Information
#
# Table name: etsy_accounts
#
#  id                 :bigint           not null, primary key
#  access_token       :string
#  refresh_token      :string
#  expires_in         :integer
#  state              :string
#  code_verifier      :string
#  last_token_refresh :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class EtsyAccount < ApplicationRecord
end
