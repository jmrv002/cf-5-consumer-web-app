require 'rails_helper'

describe Product do
  it "is not valid without a name" do
    expect(Product.new(description: "Nice bike")).not_to be_valid
  end

  context "when the product has comments" do
    let(:product) { Product.create!(name: "race bike") }
    let(:user) { User.create!(email: "jmrv002@gmail.com", 'password': "123123") }

    before do
      product.comments.create!(rating: 1, user: user, body: "Awful bike!")
      product.comments.create!(rating: 3, user: user, body: "Ok bike!")
      product.comments.create!(rating: 5, user: user, body: "Great bike!")
    end

    it "Expect the product's average rating to equal 3" do
      expect(product.average_rating).to eq 3
    end
  end
end