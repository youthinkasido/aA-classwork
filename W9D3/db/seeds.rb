# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



cat1 = Cat.create!(birthdate: '2002/04/19', description: 'What a nice brown cat. He makes me happy.', color: 'brown', sex: 'M', name: 'JimBob')
cat2 = Cat.create!(birthdate: '1992/02/09', description: 'Scary Halloween cat.', color: 'black', sex: 'F', name: 'Darky')
