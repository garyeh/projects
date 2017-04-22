FactoryGirl.define do
  factory :user do
    username { |n| Faker::Name.first_name}
    password { |p| Faker::Internet.password}
  end
end
