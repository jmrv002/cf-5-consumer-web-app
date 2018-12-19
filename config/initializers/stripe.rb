if Rails.env.production?
  Rails.configuration.stripe = {
    publishable_key: ENV['STRIPE_PUBLISHABLE_KEY'],
    secret_key: ENV['STRIPE_SECRET_KEY']
  }
else
  Rails.configuration.stripe = {
    publishable_key: 'pk_test_EFi0gIEn0cqIIRFaB7O55upc',
    secret_key: 'sk_test_6oNKPiDGAWGgQ51l0DCwEn9z'
  }
end