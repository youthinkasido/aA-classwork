# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'yaboijimmy')
user2 = User.create(username: 'sav')
user3 = User.create(username: 'AOLdude97')
user4 = User.create(username: 'TonyGunk233')

artwork1 = Artwork.create(title: "ArtThing", image_url: "www.art.com/1", artist_id: 1)
artwork2 = Artwork.create(title: "BlackHole", image_url: "www.art.com/2", artist_id: 2)
artwork3 = Artwork.create(title: "Peaceful Meadows", image_url: 'www.art.com/3', artist_id: 3)
artwork4 = Artwork.create(title: "Winter's Revenge", image_url: 'www.art.com/4',artist_id: 4)

# share1 = ArtworkShare.create(artwork_id: 1, viewer_id: 2)
# share2 = ArtworkShare.create(artwork_id: 1, viewer_id: 3)
# share3 = ArtworkShare.create(artwork_id: 2, viewer_id: 3)
# share4 = ArtworkShare.create(artwork_id: 2, viewer_id: 4)
# share5 = ArtworkShare.create(artwork_id: 3, viewer_id: 1)
# share6 = ArtworkShare.create(artwork_id: 4, viewer_id: 1)


share1 = ArtworkShare.create(artwork_id: 1, viewer_id: 4)
share2 = ArtworkShare.create(artwork_id: 2, viewer_id: 3)
share3 = ArtworkShare.create(artwork_id: 3, viewer_id: 1)
share4 = ArtworkShare.create(artwork_id: 4, viewer_id: 2)
share5 = ArtworkShare.create(artwork_id: 1, viewer_id: 2)
