# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :integer          not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CatRentalRequest < ApplicationRecord
  validates :cat_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: ['PENDING', 'APPROVED', 'DENIED']
  validate :overlapping_requests
  validate :valid_dates

  belongs_to :cat,
    primary_key: :id,
    foreign_key: :cat_id,
    class_name: :Cat

  def approve!


    transaction do
      self.status = 'APPROVED'
      self.save!
      debugger
      overlapping_pending_requests.update_all(status: 'DENIED')
    end
  end

  def deny!
    self.status = 'DENIED'
    save!
  end

  def overlapping_pending_requests
    CatRentalRequest.where(<<-SQL, cat_id, start_date, end_date, start_date, end_date)
      cat_id = ?
      AND
      (start_date BETWEEN ? AND ? OR end_date BETWEEN ? AND ?)
      AND
      status = 'PENDING'
      SQL
  end

  private
  def overlapping_requests
    conflicting_requests = CatRentalRequest.find_by_sql([
      "SELECT *
      FROM cat_rental_requests
      WHERE cat_id = ?
      AND
      (start_date BETWEEN ? AND ? OR end_date BETWEEN ? AND ?)
      AND
      status = 'APPROVED'",
      cat_id, start_date, end_date, start_date, end_date])
    unless conflicting_requests.empty?
      errors[:base] << "Conflicting reservation dates"
    end
  end



  def valid_dates
    if start_date >= end_date
      errors[:base] << "Start date must be before end date"
    end
  end
end
