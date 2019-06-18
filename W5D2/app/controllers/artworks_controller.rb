class ArtworksController < ApplicationController

    def index
        user = User.find(params[:id])

        render json: user.artworks
    end

    def create
      artwork = Artwork.new(artwork_params)
      if artwork.save
        render json: artwork
      else
        render json: artwork.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
        artwork = Artwork.find_by(id: params[:id])

        render json: artwork
    end

    def update
        artwork = Artwork.find_by(id: params[:id])

        if artwork.update(artwork_params)
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        artwork = Artwork.find_by(id: params[:id])

        if artwork.destroy
            render json: artwork
        else
            render json: "Can't destroy this artwork!"
        end
    end

    private

    def artwork_params
        params.require(:artwork).permit(:title, :image_url, :artist_id)
    end
end


