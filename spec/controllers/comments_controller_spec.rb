require "rails_helper"

describe CommentsController, type: :controller do

  user = FactoryBot.create(:user)
  product = FactoryBot.create(:product)
  
  context "when a user is logged in" do

    before do
      sign_in user
    end

    it "can add comment" do
      expect(Comment.create!(user: user, product_id: product.id, body: "text", rating: 4 )).to be_valid
    end

  end
end