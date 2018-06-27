FactoryBot.define do
  factory :promo_code do
    code "MyString"
    description "MyString"
    start_date "2018-06-26"
    end_date "2018-06-26"
    max_useable 1
    kind "Summer"
    value 5
  end
end
