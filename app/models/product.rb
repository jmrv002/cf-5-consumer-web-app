class Product < ApplicationRecord
	has_many :orders
  has_many :comments

  validates :name, presence: true

  def self.search(search_term)
    queryString = Rails.env.development? ? 'LIKE' : 'ilike'

    Product.where("name #{queryString} ?", "%#{search_term}%")
  end

  def highest_rating_comment
    comments.rating_desc.first
  end

  def lowest_rating_comment
    comments.rating_asc.first
  end

  def average_rating
    comments.average(:rating).to_f
  end

  def views
    $redis.get("total_views_product_#{self.id}")
  end

  def viewed!
    $redis.incr("total_views_product_#{self.id}")
  end
end
