require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    FactoryGirl.build(:user,
      username: "user1",
      password: "password"
    )
  end

  it {should validate_presence_of(:username)}
  it {should validate_presence_of(:password_digest)}
  it {should validate_length_of(:password).is_at_least(6)}

  it "creates a password digest when a password is given" do
    expect(user.password_digest).to_not be_nil
  end

  it "creates a session token" do
    expect(user.session_token).to_not be_nil
  end

  describe "#is_password?" do
    it "returns true when given a valid password" do
      expect(user.is_password?("password")).to be true
    end

    it "returns false when given an invalid password" do
      expect(user.is_password?("password1")).to be false
    end
  end

  describe ".find_by_credentials" do
    before { user.save! }
    it "returns a user object if user exists and password matches" do
      expect(User.find_by_credentials("user1","password")).to eq(user)
    end

    it "returns nil if user doesn't exist in database" do
      expect(User.find_by_credentials("user2","password")).to eq(nil)
    end

    it "returns nil if password does not match" do
      expect(User.find_by_credentials("user1","password1")).to eq(nil)
    end
  end

  describe "#reset_session_token!" do
    it "changes the user session token" do
      previous_token = user.session_token
      user.reset_session_token!
      expect(previous_token).not_to eq(user.session_token)
    end
  end
end
