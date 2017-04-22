# spec/features/auth_spec.rb

require 'spec_helper'
require 'rails_helper'

feature "the signup process" do

  scenario "has a new user page" do
    visit new_user_url
    expect(page).to have_content "New User"
  end

  feature "signing up a user" do
    before(:each) do
      visit new_user_url
      fill_in 'username', :with => "testing@email.com"
      fill_in 'password', :with => "biscuits"
      click_on "Submit"
    end

    scenario "shows username on the homepage after signup" do
      expect(page).to have_content "testing@email.com"
    end

  end

end

feature "logging in" do
  before(:each) do
    visit new_user_url
    fill_in 'username', :with => "testing@email.com"
    fill_in 'password', :with => "biscuits"
    click_on "Submit"

    visit new_session_url
    fill_in 'username', :with => "testing@email.com"
    fill_in 'password', :with => "biscuits"
    click_on "Sign In"
  end
  scenario "shows username on the homepage after login" do
    expect(page).to have_content "testing@email.com"
  end

end

feature "logging out" do

  scenario "begins with a logged out state" do
    visit new_session_url
    expect(page).not_to have_button("Log out")
  end

  feature "login / logout" do
    before(:each) do
      visit new_user_url
      fill_in 'username', :with => "testing@email.com"
      fill_in 'password', :with => "biscuits"
      click_on "Submit"

      visit new_session_url
      fill_in 'username', :with => "testing@email.com"
      fill_in 'password', :with => "biscuits"
      click_on "Sign In"

      click_on "Log out"
    end

    scenario "doesn't show username on the homepage after logout" do
      expect(page).not_to have_content "testing@email.com"
    end
  end

end
