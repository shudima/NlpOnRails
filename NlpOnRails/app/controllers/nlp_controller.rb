class NlpController < ApplicationController

	def home
		
	end

	def sentiment
		
		command = 'py ' + Dir.pwd + '/app/assets/Python/textblob_sentiment.py "' + params[:text] + '"'

		render :text =>  %x[ #{command} ]
	end

	def key_words
		command = 'py ' + Dir.pwd + '/app/assets/Python/textblob_key_words.py "' + params[:text] + '"'

		render :text =>  %x[ #{command} ]
	end
end
