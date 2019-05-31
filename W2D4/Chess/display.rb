require 'colorize'
require_relative 'board'
require_relative 'cursor'
require 'byebug'
class Display
    attr_reader :cursor
    def initialize(board)
        @board = board
        @cursor = Cursor.new([0,0], board)

    end
    #get rook from start pos to another pos
    def render
     
        #system("clear")
       (0..7).each do |i|
          (0..7).each do |j|
           
            if @board.grid[i][j].inspect == "P" 
                if cursor.cursor_pos == [i,j]
                    print "P".colorize(:background => :green), " " 
                else
                    print "P".red.on_white, " "
                end
            elsif @board.grid[i][j].inspect == "R"
                if cursor.cursor_pos == [i,j]
                    print "R".colorize(:background => :green), " " 
                else
                    print "R".red.on_white, " "
                end
            else
                if cursor.cursor_pos == [i,j]
                    print "N".colorize(:background => :green), " " 
                else
                    print "N".blue, " "
                end
            end
        end

        puts
       end
       #debugger
       #sleep(2.5)
       #cursor.get_input
        #i+=1
        #render
    end

    # def prompt_user(start_pos)
    #     puts "Where do you want to move your rook, pick from position printed above"
    #     x = gets.chomp.to_i
    #     y = gets.chomp.to_i
    #     @board.move_piece(start_pos, [x,y])
    # end

    def loop_board
      while 1
        render
        print @board.grid[2][0].find_moves
        # prompt_user([2,0])
        cursor.get_input
        system("clear")
      end
    end
end


b = Board.new
#p b
d = Display.new(b)
#puts "I am now red".red
d.loop_board
