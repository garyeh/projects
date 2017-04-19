# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# :birth_date, :color, :name, :sex, :description
Cat.destroy_all
cat1 = Cat.create(birth_date: "2012/01/01", color: "blue", name: 'Garfield', sex: 'M', description: 'A really fat cat')
cat2 = Cat.create(birth_date: "2002/01/01", color: "red", name: 'Felix', sex: 'M', description: 'A really black cat')

CatRentalRequest.destroy_all
rental1 = CatRentalRequest.create(cat_id: cat1.id, start_date: '2012/01/01', end_date: '2012/01/10')
rental2 = CatRentalRequest.create(cat_id: cat2.id, start_date: '2012/02/01', end_date: '2012/02/10')
