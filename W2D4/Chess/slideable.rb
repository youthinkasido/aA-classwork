require 'byebug'
require_relative 'piece'
module Slideable 
    HNV  = [[0,1],[0,-1],[1,0],[-1,0]]
    DIAG = [[1,1],[-1,1],[-1,-1],[1,-1]]
#const
#build moves based on adding current pos + array pos 
#iterate over HNV 



def moves(dir)
moves = [] 

if dir == "hnv" 
    moves = gen_moves(dir,start_pos)
elsif dir == "diag"
    moves = gen_moves(dir,start_pos)
else 
    moves = gen_moves("hnv",start_pos)
    moves += gen_moves("diag",start_pos)
end
moves
end

def gen_moves(dir,start_pos)
    moves = []
    if dir == "hnv"
        arr = HNV
    else
        arr = DIAG
    end
    arr.each do |dir|
        des_x = start_pos[0] + dir[0] #
        des_y = start_pos[1] + dir[1] #
        
        within_x_bound = (des_x > - 1 && des_x < 8)
        within_y_bound = (des_y > - 1 && des_y < 8)
        
        while @board.grid[des_x][des_y].inspect =="N" && within_x_bound && within_y_bound
            
            moves << [des_x,des_y]
            des_x = des_x + dir[0]
            des_y = des_y + dir[1]
            within_x_bound = (des_x > - 1 && des_x < 8)
            within_y_bound = (des_y > - 1 && des_y < 8)
        end
    end
    moves
end
end



#stop when obstacle hit
