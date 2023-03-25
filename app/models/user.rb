# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  encrypted_password     :string           default(""), not null
#  first_name             :string           default(""), not null
#  email                  :string           default(""), not null
#  address1               :string           default(""), not null
#  admin                  :boolean          default(FALSE), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  middle_name            :string
#  last_name              :string
#  gender                 :integer          default("unknown")
#  address2               :string
#  country                :string
#  city                   :string
#  state                  :string
#  zipcode                :string
#  phone_number           :string
#
class User < ApplicationRecord
  has_paper_trail
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :trackable
  enum :gender, [:woman, :man, :transgender, :non_binary, :unknown]

  has_one :potential_user
  has_many :reviews, dependent: :destroy
  
  def full_name
    [first_name, middle_name, last_name].compact.join(' ')
  end
end
