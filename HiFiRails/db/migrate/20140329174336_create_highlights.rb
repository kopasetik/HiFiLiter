class CreateHighlights < ActiveRecord::Migration
  def change
    create_table :highlights do |t|
      t.text :text
      t.references :article, index: true
      t.string :user

      t.timestamps
    end
  end
end
