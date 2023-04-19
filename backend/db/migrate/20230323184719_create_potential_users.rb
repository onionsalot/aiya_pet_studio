class CreatePotentialUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :potential_users do |t|
      t.string :email, null: false
      t.string :address1
      t.string :address2
      t.string :country
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :phone_number
      t.string :first_name
      t.string :middle_name
      t.string :last_name

      t.timestamps
    end
    add_index :potential_users, :email, unique: true
  end
end
