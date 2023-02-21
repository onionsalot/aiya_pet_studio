# frozen_string_literal: true

module Mutations
  class TagDelete < BaseMutation
    description "Deletes a tag by ID"

    field :tag, Types::TagType, null: true

    argument :id, ID, required: true

    def resolve(id:)
      begin
        raise "Not an Admin" unless context[:current_user].admin?

        tag = Tag.find_by!(id: id).destroy
        # service = TagService.new(tag: tag)
        # service.destroy_tag!

        { tag: tag }
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error deleting tag"
      end
    end
  end
end
