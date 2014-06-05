require 'test_helper'

class ListingLiftsTest < ActionDispatch::IntegrationTest
  test 'listing lifts' do
    get '/lifts'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
  end
end
