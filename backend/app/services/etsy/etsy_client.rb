class Etsy::EtsyClient
  LIMIT = 50.freeze

  attr_reader :products, :reviews, :review_count, :product_count

  def initialize(shop_id:)
    # ID = 24762991
    @shop = get_shop
    @product_count = @shop.listing_active_count
    @products = get_all_products
    @reviews = get_all_reviews
    @review_count = @reviews.count
  end

  def get_user_by_id(user_id)
    BetsyWrapper::User.get_user(user_id, etsy_account: EtsyAccount.first)
  end

  private

  def get_shop
    BetsyWrapper::Shop.get_shop(shop_id)
  end

  def get_all_products
    total_iterations = (@product_count / LIMIT.to_f).ceil

    products = []
    (0...total_iterations).each do |iteration|
      offset = iteration * LIMIT
      products << BetsyWrapper::ShopListing.find_all_active_listings_by_shop(@shop.shop_id, {limit: LIMIT, offset: offset})
    end

    products.flatten
  end

  def get_all_reviews
    # For some reason, Etsy does not return total number of reviews when finding the shop. It only returns reviews_count for the year.
    reviews = []
    offset = 0
  
    loop do
      current_reviews = BetsyWrapper::Review.get_reviews_by_shop(@shop.shop_id, {limit: LIMIT, offset: offset})
      break if current_reviews.empty?
  
      reviews.concat(current_reviews)
      offset += LIMIT
  
      # Break the loop if the result has fewer items than the limit, meaning it's the last page.
      break if current_reviews.size < LIMIT
    end
  
    reviews.flatten
  end
end