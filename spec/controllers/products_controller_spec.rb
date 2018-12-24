require "rails_helper"

describe ProductsController, type: :controller do

  user = FactoryBot.create(:user)
  product = FactoryBot.create(:product)

  describe "GET #index" do
    it "renders the index template" do
      get :index
      expect(response).to be_ok
      expect(response).to render_template('index')
    end
  end

  describe "GET #show" do
    it "show single product" do
      get :show, params: {id: product.id}
      expect(response).to be_ok
    end
  end

  describe "GET #new" do
    before do
      sign_in user
    end
    it "open create product form" do
      get :new, params: {id: @product}
      expect(response).to be_ok
    end
  end

  describe "GET #edit" do
    before do
      sign_in user
    end
    it "open edit product form" do
      get :edit, params: {id: product.id}
      expect(response).to be_ok
    end
  end

  describe "POST #create" do
    before do
      sign_in user
    end
    it "create a new product" do
      expect(response).to be_ok
    end
  end

  describe "PUT #update" do
    before do
      sign_in user
    end
    it "destroys product" do
      delete :destroy, params: {id: product.id}
      expect(response).to redirect_to products_path
    end
  end
end