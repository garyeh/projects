# == Schema Information
#
# Table name: cats
#
#  id          :integer          not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Cat < ApplicationRecord
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: ['red', 'blue', 'yellow', 'green', 'black', 'orange', 'gray', 'white']
  validates :sex, inclusion: ['M', 'F']

  has_many :rental_requests,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :cat_id,
    class_name: :CatRentalRequest

  def age
    @age = ((Time.now.to_date - birth_date) / 365.0).to_i
  end
end
