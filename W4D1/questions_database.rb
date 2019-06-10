require 'singleton'
require 'sqlite3'
class QuestionsDatabase < SQLite3::Database
    include Singleton 

    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end
end



# Your initialize method should take an options hash of attributes and construct an object wrapping that data. We do this because the DB query return value is an array of hashes in exactly this format.
# E.g., User.new('fname' => 'Ned', 'lname' => 'Ruggeri', 'is_instructor' => true) should return a User object with those attributes.