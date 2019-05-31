class Employee
    attr_reader :salary, :title, :boss
    def initialize (name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end
    
    def bonus(multiplyer)
        bonus = salary * multiplyer
    end

end

class Manager < Employee
   attr_reader :employees, :salary 
    def initialize (name, title, salary, boss, employees)
        super(name, title, salary, boss)
        @employees = employees
    end

    def bonus(multiplier)
        # bonus = sum * multiplier
        sum = 0
        
        employees.each do |emp|
            if !emp.is_a?(Manager)
                sum += emp.salary * multiplier
            else  
                sum += emp.bonus(multiplier) + emp.salary * multiplier
            end
        end 
        sum
    end

        #flatten sub employees of manager
        #sum up there salaries
        #multiply sum by multiplyer
end

e1 = Employee.new("sam", "Developer", 7200, "Dave")
e3 = Employee.new("Jimmy", "Developer",3000, "Dave")
e4 = Employee.new("Carlos", "Developer",3000, "Dave")
e2 = Manager.new("Dave", "Manager", 10200, "Ron", [e1,e3,e4])
e5 = Manager.new("Ron", "Manager", 10200, nil, [e2])
# ned.bonus(5) # => 500_000
# darren.bonus(4) # => 88_000
# david.bonus(3) # => 30_000