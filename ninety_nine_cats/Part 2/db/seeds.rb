# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
u1 = User.create(user_name: 'Presidio8', password: 'password')
u2 = User.create(user_name: 'Presidio7', password: 'password')

r1 = CatRentalRequest.create(cat_id: 1, start_date: "1990/02/13", end_date: "1995/02/13")



#  cat_id     :integer          not null
#  end_date   :date             not null
#  start_date :date             not null
#  status     :string           not null
#  created_at :datetime
#  updated_at :datetime
