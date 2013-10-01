require 'sinatra'

set :static, true
set :public_folder, 'public'

get '/' do
	erb :index
end