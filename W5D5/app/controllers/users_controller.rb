class UsersController < ApplicationController

    def index 
        @users = User.all 
        render :index
    end

    def new
        @user = User.new
        render :new
    end

    def create 
      @user = User.create(user_params)

      if @user.save 
        session[:session_token] = @user.session_token
        flash[:success] = "Welcome to music website!" #not working
        redirect_to users_url
      else 
        render :new, status: 422
      end

    end

    private
    def user_params #any additional params needed here?
        params.require(:user).permit(:email, :password)
    end
end