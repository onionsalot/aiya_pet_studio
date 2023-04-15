class CreateEtsyEtsyReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :etsy_etsy_reviews do |t|
      t.integer :shop_id
      t.integer :listing_id
      t.integer :transaction_id
      t.integer :buyer_user_id, null: true
      t.integer :rating
      t.string :review, default: ""
      t.string :language
      t.string :image_url_fullxfull, null: true
      t.integer :created_timestamp
      t.integer :updated_timestamp
      t.string :buyer_email, default: ""
      t.references :review, null: false, foreign_key: true
      t.references :potential_user, foreign_key: true

      t.timestamps
    end
  end
end
