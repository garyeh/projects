require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "GET #new" do
    it "renders the new user page" do
      get :new, user: {}

      expect(response).to have_http_status(200)
      expect(response).to render_template("new")

    end
  end

  describe "POST #create" do
    it "redirects to new user page if entered password is too short" do
      post :create, user: {username: "gary", password: "pw"}
      expect(response).to redirect_to(new_user_url)
      expect(flash[:errors]).to be_present
    end

    it "redirects to user's page if correct parameters were entered" do
      post :create, user: {username: "user", password: "good_pw"}
      expect(response).to redirect_to(user_url(User.last))
    end
  end

  describe "GET #show" do
    let(:user) { User.create!(username: "user2", password: "password") }
    it "renders the user's page" do
      get :show, params: {id: user.id}
      expect(response).to have_http_status(200)
      expect(response).to render_template("show")
    end
  end

  describe "DELETE #destroy" do
    let(:user) { User.create!(username: "user2", password: "password") }

    it "redirects the user to the new user page" do
      delete :destroy, params: {id: user.id}
      expect(response).to redirect_to(new_user_url)
    end
  end
end
