# Etsy API Key (keystring), this is the API key that you will use to access Etsy
BetsyWrapper.api_key = ENV["ETSY_API"]
Betsy.api_key = ENV["ETSY_API"]

# Betsy this is the base URL for your application. 
# When in production it will be something like "http://www.someurl.com".
# When in development the best URL to use is "http://www.lvh.me:3000" 
# since Etsy does not consider "http://www.lvh.me:3000" be a valid redirect URL.
# Notice: Do your url should not include "/etsy_response_listener".
BetsyWrapper.redirect_uri_base = ENV["ETSY_REDIRECT_URL"]
