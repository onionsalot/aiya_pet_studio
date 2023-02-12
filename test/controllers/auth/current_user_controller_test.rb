require "test_helper"

class Auth::CurrentUserControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get auth_current_user_index_url
    assert_response :success
  end
end
