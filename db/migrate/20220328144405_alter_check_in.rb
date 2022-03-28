class AlterCheckIn < ActiveRecord::Migration[6.1]
  def change
    change_column :visits, :check_in, :datetime
    change_column :visits, :check_out, :datetime
  end
end
