Write a new `Array#merge_sort` method that takes in a proc; it 
should not modify the array it is called on, but create a new sorted array.

# [1, 5, 2] {|x, y| x <=> y }
class Array

   ####partner B####
    def merge_sort(&prc)
        return self if self.length <= 1

        mid_idx = self.length / 2           
        left_half = self[0...mid_idx]     
        right_half = self[mid_idx..-1]       

        sorted_left = left_half.merge_sort(&prc)     
        sorted_right = right_half.merge_sort(&prc)   

        merge(sorted_left, sorted_right, &prc)


    end

    def merge(left, right, &prc)
        prc ||= Proc.new {|x, y| x <=> y }
        merged_array = []
        until left.empty? || right.empty?
            case prc.call(left.first, right.first)
            when 1
                merged_array << right.shift
            when 0
                merged_array << right.shift
            when -1
                merged_array << left.shift
            end
        end
        merged_array + left + right

    end
end


### my_flatten

Write a method that flattens an array to the specified level. If no level
is specified, it should entirely flatten nested arrays.

Examples:

```ruby
# Without an argument:
[["a"], "b", ["c", "d", ["e"]]].my_flatten = ["a", "b", "c", "d", "e"]

# When given 1 as an argument:
# (Flattens the first level of nested arrays but no deeper)
[["a"], "b", ["c", "d", ["e"]]].my_flatten(1) = ["a", "b", "c", "d", ["e"]]
```
class Array # 

    def my_flatten(times_flattened = nil)
        return self if times_flattened == 0

        flattened = []
        self.each do |el|  # ["a"], "b", ... ]
            if el.is_a?(Array)
                flattened += el.my_flatten(times_flattened - 1)
            else
                flattened << el #[1,2,3,4,5]  
            end
        end
    flattened
    end
end

### my_reduce

Write an array method that calls the given block on each element and
combines each result one-by-one with a given accumulator. If no accumulator is given, the first element is used.

[1, 2, 3, 4].my_reduce(1) {|x, y| x + y } #[5,2,1,3]
[1,2,3,4].inject()   

class Array
    def my_reduce(acc = 0, &prc)
        self.each do |el| 
            acc = prc.call(acc, self[el])
        end
        acc
    end
end

<!-- class Array
    def my_reduce(acc = nil, &prc)

        if acc.nil?
            acc = self.shift
        end

        self.each do |el|
        acc = prc.call(acc,el)
        end
        acc

    end
end -->

class Array
  def my_reduce(accumulator = nil, &block)
    i = 0
    if accumulator.nil?
      accumulator = self.first
      i += 1
    end

    while i < length
      accumulator = block.call(accumulator, self[i])
      i += 1 
    end
    accumulator
  end
end

### Shuffled Sentences

This method returns true if the words in the string can be rearranged to form the
sentence passed as an argument. Words are separated by spaces.

Example:

```ruby
"cats are cool".shuffled_sentence_detector("dogs are cool") => false
"cool cats are".shuffled_sentence_detector("cats are cool") => true
```

class String

    def shuffled_sentence_detector(sentence)
        h = Hash.new(0)
        a = Hash.new(0)

        split_self = self.split
        split_sent = sentence.split

        split_self.each do |el|
            h[el] += 1
        end

        split_sent.each do |el|
            a[el] += 1
        end

        h == a ? true : false
    end
end

class String
  def shuffled_sentence_detector(other)
    self.split.sort == other.split.sort
  end
end


### Fibonacci

Write a method that finds the first `n` Fibonacci numbers recursively.
[0,1,1,2,3,5,8]


def fibonacci(n) #4
    return [0,1].take(n) if n <= 2

    array = fibonacci(n-1)   #s1 => 4 #s2 => 3 #s3 => [0,1]
    array << array[-1] + array[-2]
    
end



### Largest Prime Factor

Write a method that returns the largest prime factor of a number. We recommend writing a `is_prime?` helper method.

# 20 = 5


def is_Prime?(num)
    if num < 2
        return false
    end
    (2...num).none? { |i| num % i == 0}
end


def largest_prime_factor(num)
    factors = []
    (2..num).each do |i|
        factors << i if num % i == 0 && is_Prime?(i)
    end

    factors.last
end







###Partner A##

### Binary Search

Write a method that binary searches an array for a target and returns its
index if found. Assume a sorted array.

NB: YOU MUST WRITE THIS RECURSIVELY (searching half of the array every time).
We will not give you points if you visit every element in the array every time
you search.

For example, given the array [1, 2, 3, 4], you should NOT be checking
1 first, then 2, then 3, then 4.


def bsearch(array,target) # 

mid_idx = array.length / 2 # 1

return nil if array.empty?

#[1, 2, 3, 4, 5],5   
case target <=> array[mid_idx] # array[mid_idx] = 2, target = 5
when -1
    bsearch(array.take(mid_idx),target) #
when 0
    mid_idx #1
when 1
    sub_answer = bsearch(array.drop(mid_idx+1),target) #[1,2,3,4,5] 
    sub_answer.nil? ? return nil : (mid_idx + 1) + sub_answer
end




### my_each

class Array
    def my_each(&prc)
    processed = []
    i = 0
        while i < self.length
            processed << prc.call(self[i])
        i+=1
        end
    processed
    end 
end

class Array
  def my_each(&blk)
    i = 0
    while i < length
      blk.call(self[i])
      i += 1
    end
    self
  end



### dups

Write an array method that returns a hash where the keys are any element
that appears in the array more than once, and the values are sorted arrays
of indices for those elements.


# [1,4,1,2,1,2] = {1 => [0,2,4], 2 => [3,5] }


class Array
    def dups
    count = Hash.new{|k,v| k[v] = [] }
        self.each_with_index do |el, i|
            count[el] << i
        end
        res = count.select{|k,v| v.count > 1}
        res
    end
end

class Array
  def dups
    positions = Hash.new { |h, k| h[k] = [] }

    each_with_index do |item, index|
      positions[item] << index
    end

    positions.select { |key, val| val.count > 1 }
  end
end



### Factorials

Write a method that recursively finds the first `n` factorial numbers
and returns them. N! is the product of the numbers 1 to N.
Be aware that the first factorial number is 0!, which is defined
to equal 1. The 2nd factorial is 1!, the 3rd factorial is 2!, etc.

pry(main)> factorials_rec(7)
=> [1, 1, 2, 6, 24, 120, 720]


def factorials_rec(n)  
return [1] if n == 1    
return [1,1] if n == 2  
                         

facs = factorial(n - 1)
facs << facs[-1] * (n-1)   
facs
end




### Digital Root

Write a method, `digital_root(num)`. It should Sum the digits of a positive
integer. If it is greater than 10, sum the digits of the resulting number.
Keep repeating until there is only one digit in the result, called the
"digital root". **Do not use string conversion within your method.**

You may wish to use a helper function, `digital_root_step(num)` which performs one step of the process.

#digital_root(11) => 2

def digital_root(num)
    if num > 10
    num = dig_sum(num)
    end
    num
end

def dig_sum(num) #210 # 3
    root = 0
    while num > 0
    root += (num % 10)
    num /= 10
    end
    root
end






### Jumble Sort

Jumble sort takes a string and an alphabet. It returns a copy of the string
with the letters re-ordered according to their positions in the alphabet. If
no alphabet is passed in, it defaults to normal alphabetical order (a-z).

jumble_sort("hello") => "ehllo"
jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'


def jumble_sort(string, alphabet = nil)
    alphabet ||= ('a'..'z').to_a
    sorted = false
    while !sorted

        sorted = true
        (0...string.length-1).each do |i|
            if alphabet.index(string[i]) > alphabet.index(string[i+1])
                string[i], string[i+1] = string[i+1], string[i]
                sorted = false
            end
        end
    end
    string
end




#[1,2,3]
#[1] [1,2] [1,2,3] [2] [2,1,3] [2,3,1]


# self = [1,2,3]  # array1 = [4,5,6] # array2 [7,8,9]
def my_zip(*arrays) # 

i = 0
    


end