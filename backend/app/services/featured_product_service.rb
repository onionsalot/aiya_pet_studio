class FeaturedProductService
  def self.create_featured_product!(**args)
    FeaturedProduct.create!(args)
  end

  def initialize(featured_product:)
    @featured_product = featured_product
  end

  def update_featured_product!(**args)
    @featured_product.update!(args)
  end

  def destroy_featured_product!
    @featured_product.destroy!
  end
end
