
class Array
    
    def my_uniq #=> self #=> [1,2,3,3]
        uniques = []
        self.each { |el| uniques << el unless uniques.include?(el) }
        uniques
    end

    def two_sum #=> [-1, 0, 2, -2, 1]
        pairs = []
        (0...self.length).each do |i|
            (i+1...self.length).each do |i2|
                pairs << [i, i2] if self[i] + self[i2] == 0
            end
        end
        pairs
    end

    def my_transpose
        (0...self.length).map do |i|
            (0...self.length).map do |j|
                self[j][i]
            end
        end
    end
end

def stock_picker(prices)
    largest_pair = [0, 1]
    # debugger
    (0...prices.length).each do |i|
        (i+1...prices.length).each do |j|
            sell_amount = prices[j]
            buy_amount = prices[i]
            if sell_amount - buy_amount > prices[largest_pair.last] - prices[largest_pair.first]
                largest_pair = [i, j]
            end
        end
    end

    largest_pair
end



# display largest_pair
# display i
# display j
# display sell_amount
# display buy_amount

