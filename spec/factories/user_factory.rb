FactoryBot.define do
    sequence(:email) {|n| "example#{n}@example.com"}

    factory :user do
      email    
      password { "password" }
      first_name { "José" }
      last_name {"Rodríguez" }
      admin { false }
    end
  end 