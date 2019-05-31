require "tdd"

describe do 

    subject(:array) { Array.new([]) }
    subject(:array_1) { Array.new([1]) }
    subject(:array_2) { Array.new([1,2,3,3]) }
    
    it "gets unique elements from an empty array" do
        expect(array.my_uniq).to eq([])
    end

    it "returns the array for 1 element" do
        expect(array_1.my_uniq).to eq([1])
    end

    it "returns array of unique elements from an array with multiple elements" do
        expect(array_2.my_uniq).to eq([1,2,3])
    end

end

describe do

    subject(:array) { Array.new([]) }
    subject(:array_1) { Array.new([1]) }
    subject(:array_2) { Array.new([1,2,3,3]) }
    subject(:array_3) { Array.new([-1, 0, 2, -2, 1]) }

    it "returns indices of the pairs of elements that sum to 0" do
        expect(array_3.two_sum).to eq([[0, 4], [2, 3]])
    end
end

describe do
    subject(:rows) { Array.new(
                                [
                                    [0, 1, 2],
                                    [3, 4, 5],
                                    [6, 7, 8]
                                ]) }

    subject(:cols) { Array.new([
                                [0, 3, 6],
                                [1, 4, 7],
                                [2, 5, 8]
                                ]) }

    it "should swap the rows and cols elements" do
        expect(rows.my_transpose).to eq(cols)
    end
end

describe do

    it "return pair of best pair of days to buy and sell stock" do
        expect(stock_picker([3, 4, 6, 3, 8, 2, 4])).to eq([0, 4])
    end
end


      

# stock_picker([3, 4, 6, 3, 8, 2, 4]) #=> [0, 4]
# stock_picker([2, 9, 1, -4, 4 12, 1]) #=> [3,5]


# row1 = rows[0]
# row2 = rows[1]
# row3 = rows[2]

# [-1, 0, 2, -2, 1].two_sum # => [[0, 4], [2, 3]]