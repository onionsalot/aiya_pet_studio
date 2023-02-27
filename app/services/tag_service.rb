class TagService
  def self.create_tag!(name:)
    Tag.create!(
      name: name
    )
  end

  def initialize(tag:)
    @tag = tag
  end

  def update_tag!(name:)
    @tag.update!(name: name)
  end

  def destroy_tag!
    @tag.destroy!
  end
end