require 'rails_helper'

describe Comment do 

  let(:user) { User.create!(email: "jmrv002@gmail.com", 'password': "123123") }
  let(:product){ Product.create!(name: "tester bike")}

  it "is not valid without a body" do
    expect(Comment.new(user: user, product: product)).not_to be_valid
  end
end 