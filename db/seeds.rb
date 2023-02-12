# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding..."

User.create(full_name: 'Bob', email: 'bob@gmail.com', password: 'somepass')
User.create(full_name: 'Stacey', email: 'Stacey@gmail.com', password: 'somepass')
User.create(full_name: 'Onionz', email: 'Onionz@gmail.com', password: 'somepass')

Product.create(name: 'scissors', price: 55, description: 'A pair of scissors')
Product.create(name: 'fork', price: 55, description: 'An average fork')
Product.create(name: 'spoon', price: 55, description: 'An average spoon')
Product.create(name: 'pot', price: 55, description: 'No not the other pot')
Product.create(name: 'coffee machine', price: 55, description: 'kureig, I guess')
Product.create(name: 'headphones', price: 55, description: 'bzzzt')

puts "Seeding done."