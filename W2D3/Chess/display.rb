require 'colorize'
require_relative 'board'
require_relative 'cursor'

class Display
    def initialize(board)
        @cursor = Cursor.new([0,0], board)
    end

    def render
        system("clear")
       #p  @board
       puts "My str".blue
       p @cursor.red
    end
end


b = Board.new
#p b
d = Display.new(b)
#puts "I am now red".red
d.render