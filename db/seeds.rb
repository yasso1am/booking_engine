@x = 1
@i = 0
@codes =    [
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
@desc =     [
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
  cabinSize = ['Single', 'Family'].sample
  cabin = Cabin.create(
    size: cabinSize,
    building: @x,
    status: ['Clean', 'Dirty', 'Occupied', 'Available'].sample,
    smoking_room: [true, false].sample,
    ada_accessible: [true, false].sample,
    base_price: (cabinSize == 'Single' ? 300 : 450)
  ) 
  @x += 1
end

10.times do
  @time1 = Time.at(rand * Time.now.to_i)
  @time2 = Time.at(rand * Time.now.to_i)
  @promo_code = PromoCode.create(
    code: @codes[@i],
    description: @desc[@i],
    start_date: (@time1 > @time2 ? @time2 : @time1),
    end_date: (@time1 > @time2 ? @time1 : @time2),
    max_useable: 10,
    kind: ["Percent", "Dollars off", "Total"].sample,
    value: 15.0
  )
  @i += 1
end

100.times do 
  user = User.create(
    name: Faker::Name.name_with_middle,
    nickname: Faker::WorldOfWarcraft.hero,
    password: "password",
    email: Faker::Internet.email
  )
  1.times do
    @time1 = Time.at(rand * Time.now.to_i)
    @time2 = Time.at(rand * Time.now.to_i)
    reservation = Reservation.create(
      start_date: (@time1 > @time2 ? @time2 : @time1),
      end_date: (@time1 > @time2 ? @time1 : @time2),
      special_requests: @requests.sample,
      smoking_room: [true, false].sample,
      size: ["Single", "Family"].sample,
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



