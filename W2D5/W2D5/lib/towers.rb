class Tower
    def initialize(num_disks)
        @towers = [(1..num_disks).to_a, [], []]
        @num_disks = num_disks
        play
    end

    def render
        puts "#{@towers[0]}   #{@towers[1]}   #{@towers[2]}"
    end

    def get_move #1
        puts "Pick a pile to move a piece"
        pick = gets.chomp.to_i    # tower = 0

        begin
            valid_pick?(pick)
        rescue ArgumentError 
            pick = gets.chomp.to_i
            retry
        end
        
        disk = @towers[pick].shift   # disk = 1

        puts "Where do you want to move the disk?"
        move = gets.chomp.to_i   # move = 
    
        until valid_move?(disk, move)
            move = gets.chomp.to_i
        end

        @towers[move].unshift(disk)
    end

    def play
        until self.won?
            system("clear")
            self.render
            self.get_move
        end
        puts "You win"
         `say "You win" `
    end
 
    def valid_pick?(pick)
        raise ArgumentError.new("Invalid Pick") unless pick.between?(0,2)
        if @towers[pick].length > 0
            return true
        else 
            raise ArgumentError.new("Invalid pick")
        end
    end

    def valid_move?(disk, move)
        move < @towers.length && (@towers[move].empty? || disk < @towers[move].first)
    end

    def won?
        @towers[1].length == @num_disks || @towers[2].length == @num_disks
        
    end
end

