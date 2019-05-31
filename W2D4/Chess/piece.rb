require_relative 'board'
require_relative "slideable"
class Piece
    def initialize(board)
      @board = board
    end

    def move

    end

    def inspect
        "P"
    end
end

class Rook < Piece #[0,0] [7,0] [0,7] [7,7] 
    include Slideable
    attr_reader :start_pos, :pos_moves
    attr_writer :pos_moves

    def initialize(board)
        @start_pos = [2,0]
        @pos_moves = []
        super
    end

    def inspect
        "R"
    end

    def find_moves
        moves = self.moves
        print "Got these moves from slideable: ", moves
        moves

    end
    # def move
    #     i,j = start_pos
    #     y = 0

    #     while @board.grid[i][j+y] == :N
    #         @pos_moves << [i,j+y]
    #         y+=1
    #     end

    #      y = 0

    #      while @board.grid[i][j-y] == :N
    #         @pos_moves << [i,j-y]
    #         y+=1
    #      end

        
    # end
end