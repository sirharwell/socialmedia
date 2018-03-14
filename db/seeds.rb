20.times do
  App.create(
    name: Faker::LordOfTheRings.character,
    city: Faker::LordOfTheRings.location,
    pic: Faker::LoremPixel.image,
    age: Faker::Number.number(2),
    height: Faker::Demographic.height(:imperial),
  )
end
