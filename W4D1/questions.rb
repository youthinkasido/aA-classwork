require_relative 'questions_database'
require 'sqlite3'
require_relative 'users'
require_relative 'replies'
class Questions

    attr_accessor :title, :author_id, :body

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM questions")
        data.map {|ele| Questions.new(ele) }
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @author_id = options['author_id']
        @body = options['body']
    end


    def self.find_by_id(id)
        question = QuestionsDatabase.instance.execute(<<-SQL, id)
        SELECT 
            * 
        FROM 
            questions 
        WHERE 
            questions.id = ?
        SQL
        return nil unless question.length > 0
        Questions.new(question.first)
    end

    def self.find_by_author_id(author_id)
        find_auth = QuestionsDatabase.instance.execute(<<-SQL, author_id)
        SELECT 
            * 
        FROM 
            questions 
        WHERE 
            questions.author_id = ?
        SQL
        return nil unless find_auth.length > 0
        find_auth.map {|author| Questions.new(author) }

    end

    def author
        Users.find_by_id(self.author_id)
    end

    def replies
        Reply.find_by_question_id(self.id)
    end

    def create
        raise "#{self} already in database" if @id
        QuestionsDatabase.instance.execute(<<-SQL, @title, @author_id, @body)
            INSERT INTO questions(title, author_id, body )
            VALUES (?, ?, ?)
        SQL
        @id = QuestionsDatabase.instance.last_insert_row_id
    end

    def update
        raise "#{self} not in database" unless @id
        QuestionsDatabase.instance.execute(<<-SQL, @title, @author_id, @body, @id)
            UPDATE questions
            SET title = ?, author_id = ?, body = ?
            WHERE id = ?
        SQL
    end
end