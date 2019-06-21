class ApplicationController < ActionController::Base
     skip_before_action :verify_authenticity_token

     helper_method :current_user, :logged_in?
     
     def current_user #
          return nil unless session[:session_token] # what is going on
          User.find_by(session_token: session[:session_token]) # whats going on
     end

     def logged_in?
          !!current_user
     end

      def log_in_user!(current_user)
          session[:session_token] = current_user.session_token
      end
end
