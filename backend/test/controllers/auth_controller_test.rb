require "test_helper"

class AuthControllerTest < ActionDispatch::IntegrationTest
  test "should get passwords" do
    get auth_passwords_url
    assert_response :success
  end
end
