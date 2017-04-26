class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  def signed_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    session[:session_token] = user.session_token
  end

  def logout
    session[:session_token] = nil
    current_user.reset_token
  end

  def require_signed_in
    redirect_to new_session_url unless signed_in?
  end
end
