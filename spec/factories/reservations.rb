FactoryBot.define do
  factory :user do
    email 'test1@test.com'
    password 'password'
  end
  factory :reservation do
    start_date "2018-06-26"
    end_date "2018-06-26"
    special_requests "Chocolate"
    smoking_room false
    size "Single"
    ada_accessible false
    cabin_id nil
    user_id 1
  end
end
