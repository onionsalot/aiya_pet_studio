class CreateFeaturedProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :featured_products do |t|
      t.references :product, optional: true, null: true, foreign_key: true

      t.timestamps
    end
  end
end
