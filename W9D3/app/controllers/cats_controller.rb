class CatsController < ApplicationController 
    def index 
        @cats = Cat.all 
        render :index
    end

    def show 
        @cat = Cat.find(params[:id])
        if @cat 
            render :show
        else
            @cat.errors.full_messages
        end
    end

    def new 
        render :new
    end

    def create 
        @cat = Cat.new(cat_params)

        if @cat.save
            redirect_to cat_url(cat.id)
        else
            @cat.errors.full_messages
            render :new
        end
    end


    private

    def cat_params(params)
        params.require(:cat).permit(:birthdate, :description, :sex, :name, :color)
    end

end