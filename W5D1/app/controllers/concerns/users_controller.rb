class UsersController < ApplicationController

    def index
        
        render json: User.all
        
    end

    def create
      user = User.new(params.require(:user).permit(:name, :email))
      if user.save
        render json: user
      else
        render json: user.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
        user = User.find_by(id: params[:id])

        render json: user
    end

    def update
        user = User.find_by(id: params[:id])

        if user.update(:name)
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: params[:id])

        if user.destroy
            render json: user
        else
            render json: "Can't destroy this user!"
        end
    end

    private

    def user_params
        params.require(:user).permit
    end
end


