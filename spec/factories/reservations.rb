FactoryBot.define do
  factory :reservation do
    start_date "2018-06-26"
    end_date "2018-06-26"
    special_requests "MyText"
    smoking false
    type ""
    ada_accessible false
    cabin nil
    user nil
  end
end
