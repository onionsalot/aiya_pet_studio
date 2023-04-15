# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "faker"

puts "Seeding..."

# If you want to remove previous records before running this seed file, use <Class>.destroy_all for each of the classes to be destroyed.
# Note ID numbers will not be overwritten unless you reset the database and set it up again.
# rails db:reset will drop database, create database, and run seed file.

# User.destroy_all
# Product.destroy_all
# Tag.destroy_all

def create_user(**args)
    defaults = {
      first_name: Faker::Name.first_name,
      middle_name: Faker::Name.middle_name,
      last_name: Faker::Name.last_name,
      gender: Faker::Number.between(from: 0, to: 4),
      address1: Faker::Address.street_address,
      state: Faker::Address.state,
      country: "United States",
      zipcode: Faker::Address.zip,
      phone_number: Faker::PhoneNumber.cell_phone,
      email: Faker::Internet.unique.email,
      password: "somepassword",
      password_confirmation: "somepassword",
      admin: false,
      confirmed_at: nil
    }
  
    User.create(defaults.merge(args))
end

def create_product
    Product.create(
        name: Faker::Commerce.product_name,
        price: Faker::Number.between(from: 1, to: 100),
        description: Faker::Lorem.paragraph(random_sentences_to_add: 10)
    )
end

 # Generating Admin user
create_user(
    email: 'admin@admin.com',
    admin: true,
    password: '123123',
    password_confirmation: '123123',
    confirmed_at: Time.now
)
    
# Generating Users with no associations
10.times do
    create_user
end

# Generating Products with no associations
15.times do
    create_product
end

# Generating Tags with no associations
5.times do
    Tag.create(name: Faker::Color.unique.color_name)
    Tag.create(name: Faker::Commerce.unique.material)
    Tag.create(name: Faker::Commerce.unique.color)
    Tag.create(name: Faker::Commerce.unique.department(max: 1))
end

# Generating FeaturedProduct with Products associated
4.times do
    product = create_product
    FeaturedProduct.create(product_id: product.id)
end

# Generating Reviews with Products associated
10.times do
    product = create_product
    user = create_user
    potential_user = PotentialUser.create(email: user.email)
    review = Review.create(
        user_id: user.id,
        product_id: product.id,
        rating: Faker::Number.between(from: 1, to: 5),
        review: Faker::Lorem.paragraph(random_sentences_to_add: 1)
    )
    Etsy::EtsyReview.create(
        shop_id: 1,
        listing_id: 1,
        transaction_id: 1,
        buyer_user_id: 1,
        rating: review.rating,
        buyer_email: user.email,
        review_id: review.id,
        potential_user_id: potential_user.id
    )
end

puts "Seeding done."