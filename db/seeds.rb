

20.times do
  Dude.create(
    name: Faker::GameOfThrones.character,
    house: Faker::GameOfThrones.house,
    city: Faker::GameOfThrones.city,
    pic: Faker::LoremPixel.image,
    age: Faker::Number.number(2)
    height: Faker::Demographic.height(:imperial),
  )
end
