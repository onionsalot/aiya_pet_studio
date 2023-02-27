# frozen_string_literal: true

module Mutations
  class TagUpdate < BaseMutation
    description "Updates a tag by id"

    field :tag, Types::TagType, null: true

    argument :id, ID, required: true
    argument :name, String, required: true

    def resolve(id:, name:, price:)
      begin
        raise "Not an Admin" unless context[:current_user].admin?

        tag = Tag.find_by!(id: id)
        service = TagService.new(tag: tag)
        service.update_tag!(name: name)

        { tag: tag }
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error updating product"
      end
    end
  end
end
