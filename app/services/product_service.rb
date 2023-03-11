class ProductService
  def self.create_product!(**args)
    Product.create!(args)
  end

  def initialize(product:)
    @product = product
  end

  def update_product!(**args)
    @product.update!(args)
  end

  def destroy_product!
    @product.destroy!
  end
end
