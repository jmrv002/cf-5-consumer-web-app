require 'rails_helper'

describe Order do
  let(:product) { Product.create!(name: "race bike") }
  let(:user) {User.create!(email: "jmrv002@gmail.com", password: "123456")}

  it "is a valid order" do
    expect(Order.new( user: user, product: product, total: 100)).to be_valid
  end

  it "is not a valid without product" do
    expect(Order.new( user: user, total: 100)).not_to be_valid
  end
end