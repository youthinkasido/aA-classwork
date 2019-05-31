require_relative "piece"
require_relative "null_piece"
require 'byebug'

class Board
    attr_reader :grid, :n
    def initialize 
        @grid = Array.new(8){Array.new(8, nil)} # [[] [] [] [] [] [] []]
        #  debugger
        @n = NullPiece.instance
         @grid.map! do |rows|
             rows.map! do |cols|
                if @grid.index(rows) < 2 || @grid.index(rows) > 5
                   cols = Piece.new(self)
                else
                 cols = @n
                end
             end
         end
        @grid[2][0] = Rook.new(self)
        # @grid[0][7] = Rook.new
        # @grid[7][0] = Rook.new
        # @grid[7][7] = Rook.new
    end

    def move_piece(start_pos, end_pos)
        x_start, y_start = start_pos
        x_end, y_end = end_pos
        raise 'invald move: piece already exists' unless @grid[x_end][y_end].is_a?(NullPiece)
        raise 'invald move' if @grid[x_start][y_start].is_a?(NullPiece) 

         @grid[x_end][y_end] = @grid[x_start][y_start]

         @grid[x_start][y_start] = n
        
    end
end

#get user input and convert data if needed
#check and see if thats a value contained in the slideable module
#set the rooks position to the users entered data


 



# b = Board.new
# p b.display
# # p b.move_piece([1,1],[3,0])
# p b

