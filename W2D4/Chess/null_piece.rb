require_relative "piece"
require "singleton"

class NullPiece < Piece
    include Singleton
    def initialize
    #   super
    end

    def inspect
        "N"
    end
end