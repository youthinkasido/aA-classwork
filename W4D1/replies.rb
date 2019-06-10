# require 'singleton'
require_relative 'questions_database.rb'
require 'sqlite3'

require_relative 'users'

class Reply
    attr_accessor :id, :question_id, :author_id, :parent_reply_id, :body

    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @author_id = options['author_id']
        @parent_reply_id = options['parent_reply_id']
        @body = options['body']
    end


    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT * FROM replies WHERE replies.id = ?
        SQL
        return nil unless data.length > 0
        Reply.new(data.first)
    end


    def self.find_by_question_id(question_id)
        data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
        SELECT * FROM replies WHERE replies.question_id = ?
        SQL
        return nil unless data.length > 0
       data.map{|reps|Reply.new(reps)}
    end

    def self.find_by_user_id(user_id)
        data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
        SELECT * FROM replies WHERE replies.author_id = ?
        SQL
        return nil unless data.length > 0
        data.map{|reps|Reply.new(reps)}
    end


    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM replies")
        data.map {|ele| Reply.new(ele) }
    end

    def author
        Users.find_by_id(self.author_id)
    end


    def create
        raise "#{self} already in database" if @id
        QuestionsDatabase.instance.execute(<<-SQL, @question_id, @author_id, @parent_reply_id, @body)
            INSERT INTO replies(question_id, author_id, parent_reply_id, body)
            VALUES (?, ?, ?, ?)
        SQL
        @id = QuestionsDatabase.instance.last_insert_row_id
    end


    def update
        raise "#{self} not in database" unless @id
        QuestionsDatabase.instance.execute(<<-SQL, @question_id, @author_id, @parent_reply_id, @body, @id)
            UPDATE replies
            SET question_id = ?, author_id = ?, parent_reply_id = ?, body = ?
            WHERE id = ?
        SQL
    end
end