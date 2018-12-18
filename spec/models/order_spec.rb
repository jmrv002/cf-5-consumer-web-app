require 'rails_helper'

describe Order do
  product = FactoryBot.create(:product)
  user = FactoryBot.create(:user)

  it "is a valid order" do
    expect(Order.new( user: user, product: product, total: 100)).to be_valid
  end

  it "is not a valid without product" do
    expect(Order.new( user: user, total: 100)).not_to be_valid
  end
end