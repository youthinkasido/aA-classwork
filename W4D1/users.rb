# require 'singleton'
require_relative 'questions_database.rb'
require 'sqlite3'
require_relative 'users.rb'
require_relative 'questions'
require_relative 'replies'

class Users
    attr_accessor :id, :fname, :lname

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end


    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT * FROM users WHERE users.id = ?
        SQL
        return nil unless data.length > 0
        Users.new(data)
    end
    

    

    def self.find_by_name(fname,lname)
        data = QuestionsDatabase.instance.execute(<<-SQL, fname,lname)
        SELECT * FROM users WHERE users.fname = ? AND users.lname = ?
        SQL
        return nil unless data.length > 0
        Users.new(data.first)
    end

    def authored_questions
        Questions.find_by_author_id(self.id)
    end

    def authored_replies
        Reply.find_by_user_id(self.id)
    end

    #     def self.find_by_author_id(author_id)
    #     find_auth = QuestionsDatabase.instance.execute(<<-SQL, author_id)
    #     SELECT 
    #         * 
    #     FROM 
    #         questions 
    #     WHERE 
    #         questions.author_id = ?
    #     SQL
    #     return nil unless find_auth.length > 0
    #     Questions.new(find_auth.first)

    # end


    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM users")
        data.map {|ele| Users.new(ele) }
    end

     def create
        raise "#{self} already in database" if @id
        QuestionsDatabase.instance.execute(<<-SQL, @fname, @lname)
            INSERT INTO users( fname, lname )
            VALUES (?, ?)
        SQL
        @id = QuestionsDatabase.instance.last_insert_row_id
    end

    def update
        raise "#{self} not in database" unless @id
        QuestionsDatabase.instance.execute(<<-SQL, @fname, @lname, @id)
            UPDATE users
            SET fname = ?, lname = ?
            WHERE id = ?
        SQL
    end
end