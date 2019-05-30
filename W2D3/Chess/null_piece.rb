require_relative "piece"
class NullPiece < Piece
    def initialize
    #   super
    end

    def inspect
        "Null"
    end
end