require 'rails_helper'

describe Comment do 

  user = FactoryBot.create(:user)
  product = FactoryBot.create(:product)

  it "is not valid without a body" do
    expect(Comment.new(user: user, product: product)).not_to be_valid
  end
end 