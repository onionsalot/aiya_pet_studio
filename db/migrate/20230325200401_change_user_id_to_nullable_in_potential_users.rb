class ChangeUserIdToNullableInPotentialUsers < ActiveRecord::Migration[7.0]
  def change
    change_column_null :potential_users, :user_id, true
  end
end
