FactoryBot.define do
    sequence(:name) {|n| "product #{n}"}

    factory :product do
      name    
      description { "short description" }
      image_url { "img.png" }
      colour { "#29292c" }
      price { 1.2 }
    end
  end 