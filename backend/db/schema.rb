# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_24_134008) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "fuzzystrmatch"
  enable_extension "pg_trgm"
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "display", default: ""
    t.integer "order", default: 0
    t.string "link_to", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "etsy_etsy_reviews", force: :cascade do |t|
    t.integer "shop_id"
    t.integer "listing_id"
    t.integer "transaction_id"
    t.integer "buyer_user_id"
    t.integer "rating"
    t.string "review", default: ""
    t.string "language"
    t.string "image_url_fullxfull"
    t.integer "created_timestamp"
    t.integer "updated_timestamp"
    t.string "buyer_email", default: ""
    t.bigint "review_id", null: false
    t.bigint "potential_user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["potential_user_id"], name: "index_etsy_etsy_reviews_on_potential_user_id"
    t.index ["review_id"], name: "index_etsy_etsy_reviews_on_review_id"
  end

  create_table "featured_products", force: :cascade do |t|
    t.bigint "product_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_featured_products_on_product_id"
  end

  create_table "potential_users", force: :cascade do |t|
    t.string "email", null: false
    t.string "address1"
    t.string "address2"
    t.string "country"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phone_number"
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["email"], name: "index_potential_users_on_email", unique: true
    t.index ["user_id"], name: "index_potential_users_on_user_id"
  end

  create_table "product_tags", force: :cascade do |t|
    t.bigint "product_id", null: false
    t.bigint "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_product_tags_on_product_id"
    t.index ["tag_id"], name: "index_product_tags_on_tag_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "etsy_listing_id"
    t.integer "quantity"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating"
    t.text "review"
    t.string "language"
    t.string "image"
    t.bigint "user_id"
    t.bigint "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_reviews_on_product_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "encrypted_password", default: "", null: false
    t.string "first_name", default: "", null: false
    t.string "email", default: "", null: false
    t.string "address1", default: "", null: false
    t.boolean "admin", default: false, null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "middle_name"
    t.string "last_name"
    t.integer "gender", default: 4
    t.string "address2"
    t.string "country"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phone_number"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "versions", force: :cascade do |t|
    t.string "item_type", null: false
    t.bigint "item_id", null: false
    t.string "event", null: false
    t.string "whodunnit"
    t.text "object"
    t.datetime "created_at"
    t.text "object_changes"
    t.index ["item_type", "item_id"], name: "index_versions_on_item_type_and_item_id"
  end

  add_foreign_key "etsy_etsy_reviews", "potential_users"
  add_foreign_key "etsy_etsy_reviews", "reviews"
  add_foreign_key "featured_products", "products"
  add_foreign_key "potential_users", "users"
  add_foreign_key "product_tags", "products"
  add_foreign_key "product_tags", "tags"
  add_foreign_key "reviews", "products"
  add_foreign_key "reviews", "users"
end
