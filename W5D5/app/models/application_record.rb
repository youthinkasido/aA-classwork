class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true


  # def log_in(user) # need to understand what is actually going on here
  #   session[:session_token] = user.reset_session_token
  # end



end



