class Product < ApplicationRecord
	has_many :orders

  def self.search(search_term)
    search_term.downcase!

    queryString = Rails.env.development? ? 'LIKE' : 'ilike'

    Product.where("name LIKE ?", "%#{search_term}%")
  end
end
