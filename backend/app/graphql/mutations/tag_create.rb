# frozen_string_literal: true

module Mutations
  class TagCreate < BaseMutation
    description "Creates a new tag"

    field :tag, Types::TagType, null: true

    argument :name, String, required: true

    def resolve(name: nil )
      begin
        raise "Not an Admin" unless context[:current_user].admin?

        tag = TagService.create_tag!(
          name: name
        )

        {tag: tag}
      rescue StandardError => e
        raise GraphQL::ExecutionError.new e || "Error creating tag"
      end
    end
  end
end
