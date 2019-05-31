require "io/console"
require 'colorize'

KEYMAP = {
  " " => :space,
  "h" => :left,
  "j" => :down,
  "k" => :up,
  "l" => :right,
  "w" => :up,
  "a" => :left,
  "s" => :down,
  "d" => :right,
  "\t" => :tab,
  "\r" => :return,
  "\n" => :newline,
  "\e" => :escape,
  "\e[A" => :up,
  "\e[B" => :down,
  "\e[C" => :right,
  "\e[D" => :left,
  "\177" => :backspace,
  "\004" => :delete,
  "\u0003" => :ctrl_c,
}

MOVES = {
  left: [0, -1],
  right: [0, 1],
  up: [-1, 0],
  down: [1, 0]
}

class Cursor

  attr_reader :cursor_pos, :board
  attr_accessor :selected

  def initialize(cursor_pos, board)
    @cursor_pos = cursor_pos
    @board = board
    @selected = false
  end

def toggle_selected 
 selected == false ? selected = true : selected = false 
 #print " ".colorize(:background => :green) if selected
 #@cursor_pos[0].to_s.colorize(:foreground => :green)
 #sleep(2)
 return cursor_pos

end

  # def print_black
  #   temp = @cursor_pos
  #   @cursor_pos = [8,0]
  #   print " ".colorize(:background => :black)
  #   @cursor_pos = temp
  # end

  def get_input
    key = KEYMAP[read_char]
    handle_key(key)
  end




  private

  def read_char
    STDIN.echo = false # stops the console from printing return values

    STDIN.raw! # in raw mode data is given as is to the program--the system
                 # doesn't preprocess special characters such as control-c

    input = STDIN.getc.chr# STDIN.getc reads a one-character string as a
                             # numeric keycode. chr returns a string of the
                             # character represented by the keycode.
                             # (e.g. 65.chr => "A")

    if input == "\e" then
      input << STDIN.read_nonblock(3) rescue nil # read_nonblock(maxlen) reads
                                                   # at most maxlen bytes from a
                                                   # data stream; it's nonblocking,
                                                   # meaning the method executes
                                                   # asynchronously; it raises an
                                                   # error if no data is available,
                                                   # hence the need for rescue

      input << STDIN.read_nonblock(2) rescue nil
    end

    STDIN.echo = true # the console prints return values again
    STDIN.cooked! # the opposite of raw mode :)

    return input
  end

  def handle_key(key) #:left :right #[0,0]
      exit(true) if key == :ctrl_c
      return @cursor_pos if key == :return || key == :space
      pos_diff = MOVES[key]
      update_pos(pos_diff)
      nil
  end

  def update_pos(diff)#[0,1]
    i_pos = @cursor_pos[0]+diff[0]
    j_pos = @cursor_pos[1]+diff[1]
    @cursor_pos[0] = i_pos if i_pos > -1 && i_pos < 8
    @cursor_pos[1] = j_pos if j_pos > -1 && j_pos < 8
  end
end