# PHASE 2
# class CoffeeError < ArgumentError 
# end
# def convert_to_int(str)
# begin
#   Integer(str)

# rescue ArgumentError
#   puts 'invalid integer string'
#   return nil
# end

# end

# # PHASE 3
# FRUITS = ["apple", "banana", "orange"]

# def reaction(maybe_fruit)
#   if FRUITS.include? maybe_fruit
#     puts "OMG, thanks so much for the #{maybe_fruit}!"
#   elsif maybe_fruit == 'coffee'
#     raise CoffeeError
#   else 
#     #print "Dont you know we have only 3 fruits apple, banana and orange "
#     raise StandardError
#   end 
# end

# def feed_me_a_fruit
#   puts "Hello, I am a friendly monster. :)"
#   begin
#       puts "Feed me a fruit! (Enter the name of a fruit:)"
#       maybe_fruit = gets.chomp
#       reaction(maybe_fruit) 
#   rescue CoffeeError
#       retry if maybe_fruit == "coffee"
#   rescue StandardError    
#      print "Dont you know we have only 3 fruits apple, banana and orange "
#   end
# end  






# rescue CollisionOccurredError => e
#   puts "Rescued from collision!"

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
    raise "You are not best friends yet." if yrs_known < 5
    raise "Your friuend has to have a name. " if name.length == 0
    raise "Your friend doesn't have any hobbies? " if fav_pastime.length == 0

  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


