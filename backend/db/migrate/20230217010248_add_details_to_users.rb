class AddDetailsToUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :full_name, :first_name
    add_column :users, :middle_name, :string
    add_column :users, :last_name, :string
    add_column :users, :gender, :integer, default: 4
  end
end
