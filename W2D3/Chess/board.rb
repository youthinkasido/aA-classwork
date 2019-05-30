require_relative "piece"
require_relative "null_piece"
require 'byebug'
class Board
    attr_reader :grid
    def initialize 
        @grid = Array.new(8){Array.new(8, nil)} # [[] [] [] [] [] [] []]
        #  debugger
         @grid.map! do |rows|
             rows.map! do |cols|
                if @grid.index(rows) < 2 || @grid.index(rows) > 5
                   cols = Piece.new
                else
                 cols = NullPiece.new
                end
             end
         end
    end

    def move_piece(start_pos, end_pos)
        x_start, y_start = start_pos
        x_end, y_end = end_pos
        raise 'invald move: piece already exists' unless @grid[x_end][y_end].is_a?(NullPiece)
        raise 'invald move' if @grid[x_start][y_start].is_a?(NullPiece) 

         @grid[x_end][y_end] = @grid[x_start][y_start]

         @grid[x_start][y_start] = NullPiece.new
        
    end
end


 



# b = Board.new
# p b
# p b.move_piece([1,1],[3,0])
# p b

