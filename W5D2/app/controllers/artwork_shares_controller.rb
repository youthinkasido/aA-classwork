class ArtworkSharesController < ApplicationController
    def index
        user = User.find(params[:id])

        render json: user.artwork_shares
    end

    def create
      artwork_shares = ArtworkShare.new(artwork_shares_params)
      if artwork_shares.save
        render json: artwork_shares
      else
        render json: artwork_shares.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
        artwork_shares = ArtworkShare.find_by(id: params[:id])

        if artwork_shares.destroy
            render json: artwork_shares
        else
            render json: "Can't destroy this share!"
        end
    end

    private

    def artwork_shares_params
        params.require(:artwork_share).permit(:artwork_id, :viewer_id)
    end
end