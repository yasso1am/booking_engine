FactoryBot.define do
  factory :cabin do
    size "Family"
    building "A"
    status "Available"
    ada_accessible false
    smoking_room true
    base_price 300
  end
end


