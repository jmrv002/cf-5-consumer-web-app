require 'rails_helper'

describe User do
  it "is valid with email and password" do
      expect(User.new(email: "test@gmail.com", password: "password")).to be_valid
  end

  it "is not valid without email" do
      expect(User.new(password: "password")).to_not be_valid
  end

  it "is not valid without password" do
      expect(User.new(email: "testgmail.com")).to_not be_valid
  end
end