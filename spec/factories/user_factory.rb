FactoryBot.define do
    sequence(:email) {|n| "email_#{rand(1...100)}_#{n}@example.com"}

    factory :user do
      email    
      password { "password" }
      first_name { "José" }
      last_name {"Rodríguez" }
      admin { false }
    end
  end 