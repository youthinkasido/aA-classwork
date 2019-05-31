class Bishop < Piece #[0,0] [7,0] [0,7] [7,7] 
    include Slideable
    attr_reader :start_pos, :pos_moves
    attr_writer :pos_moves

    def initialize(board)
        @start_pos = [2,0]
        @pos_moves = []
        super
    end

    def inspect
        "B"
    end