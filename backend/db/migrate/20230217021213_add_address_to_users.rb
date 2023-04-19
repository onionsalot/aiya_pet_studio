class AddAddressToUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :address, :address1
    add_column :users, :address2, :string
    add_column :users, :country, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :zipcode, :string
  end
end
