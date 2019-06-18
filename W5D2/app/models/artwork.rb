# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
 validates :artist_id, uniqueness: { scope: :title, message: "only one title per artist" }

belongs_to :artist,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :artist_id


has_many :shared_artworks,
    class_name: 'ArtworkShare',
    primary_key: :id,
    foreign_key: :artwork_id

has_many :shared_viewers,
    through: :shared_artworks,
    source: :viewer
end



