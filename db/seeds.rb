def set_time
  year = ["2017", "2018", "2019", ].sample
  month = [1..12].sample.uniq.sample.to_s
  day = [1..28].sample.uniq.sample.to_s
  @start = "#{year}-#{month}-#{day}"
  d = Date.parse(@start)
  r = [1..7].sample.uniq.sample
  @end = d + r
end

@x = 1
@i = 0
@j = 1
@k = 1
@z = 1
@codes = [
  'SUMMER2018',
  'WOOOCABINS',
  'YELLOWSTONE',
  'ILUVN8UR',
  'CABINLYFE', 
  'FREEMONEYS', 
  'DISCOUNTVAYCAY', 
  'GETAWAYFROMURKIDS', 
  'PROMOCODES', 
  'NOMOREIDEAS'
]
@desc = [
  'Spend your summer at Yellowstone in our awesome cabins!',
  'Get your party on in these dope cabins',
  'Here is a cool description of Yellowstone!',
  'Do you love nature? So do we! Give us moneys!',
  'Cool people tend to spend a lot of time in cabins, so you should too',
  'Here\'s the free moneys! take em',
  'Do you like cheap vacations? Look no further than these cabins plzz',
  'Want to escape your kids for a while?  Come vacation here!',
  'PROMOCODES ARE THE BEST!!!',
  'Really ran out of promocode ideas here.. HI MOM!'
]
@requests = [
  "We don't want to see any kids from our room",
  "No peanuts in minifridge",
  "Wake up calls at 6am",
  "We would like blankets made of gold",
  "Please leave 20 extra towels in the bathroom",
  "Something something picky customers..."
]

36.times do
  cabinSize = ['single', 'family'].sample
  cabin = Cabin.create(
    size: cabinSize,
    building: @x,
    status: ['Clean', 'Dirty', 'Occupied', 'Available'].sample,
    smoking_room: [true, false].sample,
    ada_accessible: [true, false].sample,
    base_price: (cabinSize == 'single' ? 300 : 450)
  ) 
  @x += 1
end

10.times do
  set_time
  @promo_code = PromoCode.create(
    code: @codes[@i],
    description: @desc[@i],
    start_date: @start,
    end_date: @end,
    max_useable: 20,
    max_by_user: 2,
    kind: ['dollar_amount', 'percentage', 'total'].sample,
    value: 15.0
  )
  @i += 1
end

1.times do 
  set_time
  PromoCode.create(
  code: "WORK",
  description: "I am a lovely code that works",
  start_date: @start,
  end_date: @end,
  max_useable: 1000,
  max_by_user: 300,
  kind: "dollar_amount",
  value: 20.0
)
end

User.create(
  first_name: "admin",
  last_name: "admin",
  nickname: Faker::WorldOfWarcraft.hero,
  password: "password",
  email: "admin@test.com",
  role: "admin"
)
User.create(
  first_name: "client",
  last_name: "client",
  nickname: Faker::WorldOfWarcraft.hero,
  password: "password",
  email: "client@test.com",
  role: "client"
)
User.create(
  first_name: "employee",
  last_name: "employee",
  nickname: Faker::WorldOfWarcraft.hero,
  password: "password",
  email: "employee@test.com",
  role: "employee"
)

100.times do 
  if (@j % 10 === 0)
    User.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      nickname: Faker::WorldOfWarcraft.hero,
      password: "password",
      email: "employee#{@k}@test.com",
      role: "employee"
    )
    @k += 1
    @j += 1
  else
    User.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      nickname: Faker::WorldOfWarcraft.hero,
      password: "password",
      email: "user#{@j}@test.com",
      role: "client"
    )
    @j += 1
  end
    user = User.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      nickname: Faker::WorldOfWarcraft.hero,
      password: "password",
      email: "clientperson#{@z}@test.com",
      role: ["client", "employee", "admin"].sample
    )
    @z += 1
    1.times do
      set_time
      reservation = Reservation.create(
        start_date: @start,
        end_date: @end,
        special_requests: @requests.sample,
        smoking_room: [true, false].sample,
        size: ["single", "family"].sample,
        ada_accessible: [true, false].sample,
        user_id: user.id,
      )
      1.times do 
        UserPromoCode.create(
          user_id: user.id,
          reservation_id: reservation.id,
          promo_code_id: [PromoCode.first.id..PromoCode.last.id].sample.uniq.sample
        )  
      end
    end
end

puts "Admin Login Info - Email: admin@test.com Password: password"
puts "Employee Login Info - Email: employee@test.com Password: password"
puts "Client Login Info - Email: client@test.com Password: password"
