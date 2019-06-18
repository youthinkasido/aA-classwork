class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, null: false
    add_index(:users, :username, :unique => true)
    
    change_table :users do |t|
      t.remove :name, :email
    end
  end
end
