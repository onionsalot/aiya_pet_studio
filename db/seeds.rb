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

20.times do
    User.create(
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
        password: "somepassword"
    )
end

20.times do
    Product.create(
        name: Faker::Commerce.product_name,
        price: Faker::Number.between(from: 1, to: 100),
        description: Faker::Lorem.paragraph(random_sentences_to_add: 10)
    )
end

5.times do
    Tag.create(name: Faker::Color.unique.color_name)
    Tag.create(name: Faker::Commerce.unique.material)
    Tag.create(name: Faker::Commerce.unique.color)
    Tag.create(name: Faker::Commerce.unique.department(max: 1))
end

4.times do
    FeaturedProduct.create(product_id: nil)
end

puts "Seeding done."