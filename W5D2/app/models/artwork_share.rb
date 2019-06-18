# == Schema Information
#
# Table name: artwork_shares
#
#  id         :bigint           not null, primary key
#  artwork_id :integer          not null
#  viewer_id  :integer          not null
#

class ArtworkShare < ApplicationRecord
    validates :viewer_id, uniqueness: { scope: :artwork_id, message: "only one artwork per viewer" }

    belongs_to :artwork,
        class_name: 'Artwork',
        primary_key: :id,
        foreign_key: :artwork_id

    belongs_to :viewer,
        class_name: "User",
        foreign_key: :viewer_id
end
