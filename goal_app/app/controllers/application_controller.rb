class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def login(user)
    token = user.reset_session_token!
    session[:session_token] = token
    @current_user = user
  end

  def logged_in?
    @current_user.session_token == session[:session_token]
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
    @current_user
  end
end
