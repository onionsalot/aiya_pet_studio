class AddDetailsToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :etsy_listing_id, :string
    add_column :products, :quantity, :integer
  end
end
