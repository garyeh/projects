# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  before_validation :ensure_token
  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_token
    self.session_token ||= User.generate_token
  end

  def reset_token
    self.session_token = User.generate_token
    self.save!
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  has_many :subs,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Sub'

  has_many :posts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Post'

  has_many :comments
end
