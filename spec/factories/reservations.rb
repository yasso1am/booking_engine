FactoryBot.define do
  factory :user do
    email 'test1@test.com'
    password 'password'
  end
  factory :reservation do
    start_date "2018-08-30"
    end_date "2018-09-02"
    special_requests "MyText"
    smoking false
    type ""
    ada_accessible false
    cabin_id nil
    user_id 1
  end
end
