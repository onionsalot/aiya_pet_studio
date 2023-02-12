class ProductService
  def self.create_product!(name:, price:)
    Product.create!(
      name: name,
      price: price
    )
  end

  def initialize(product:)
    @product = product
  end

  def update_product!(name:, price:)
    @product.update!(name: name, price: price)
  end

  def destroy_product!
    @product.destroy!
  end
end
