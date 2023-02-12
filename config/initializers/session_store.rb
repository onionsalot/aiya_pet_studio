if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_aiya_pet_studio', domain: 'aiya_pet_studio-json-api', expire_after: 1.minutes
else
  Rails.application.config.session_store :cookie_store, key: '_aiya_pet_studio', expire_after: 5.minutes
end