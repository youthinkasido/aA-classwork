# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birthdate   :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#

# require 'date'
# require 'date_helper'
class Cat< ApplicationRecord
    CAT_COLORS = %w(black white gray brown)
    include ActionView::Helpers::DateHelper
    validates :birthdate, :description, :color, :sex, :name, presence: true
    validates :color, inclusion: {in: CAT_COLORS, message: "%{value} is not a valid color!"}
    validates :sex, inclusion: { in: %w(M F), message: "%{value} is not a valid sex!" }
    

    def age
    time_ago_in_words(self.birthdate)
    end
end
