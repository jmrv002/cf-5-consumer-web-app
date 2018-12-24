require 'rails_helper'

describe Comment do 

  user = FactoryBot.create(:user)
  product = FactoryBot.create(:product)

  it "is a valid comment" do
    expect(Comment.new(user: user, product: product, rating: 3, body: "comment")).to be_valid
  end

  it "is not valid without a user" do
    expect(Comment.new(rating: 3, product: product, body: "comment")).not_to be_valid
  end

  it "is not valid without a body" do
    expect(Comment.new(user: user, product: product, rating: 3)).not_to be_valid
  end
end 