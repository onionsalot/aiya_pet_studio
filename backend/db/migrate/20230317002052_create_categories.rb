class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :display, default: ""
      t.integer :order, default: 0
      t.string :link_to, default: ""

      t.timestamps
    end
  end
end
