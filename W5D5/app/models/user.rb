
class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :password_digest, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    after_initialize :ensure_session_token
    attr_reader :password
    

    def self.generate_session_token #generates a new token for the session
        self.session_token = SecureRandom.base64(16)
    end

    def self.find_by_credentials(email,password)
        user = User.find_by(email: email) # find user in the db based on their email
        return nil if user.nil?  # return nil if the user's email isnt found in db, thus, user doesnt exist
        user.is_password?(password) ? user : nil    # if you entered the correct pass, find dat user 

    end

    def reset_session_token! #generates a new token if one doesnt exist?
        self.session_token = SecureRandom.base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token #what do we need to check for here?
        self.session_token ||= SecureRandom.base64(16)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    
end
