class NlpController < ApplicationController

	def home

	end

	def executeScripts
		

		json = '{ "text" : "' + params[:text] + '"'
		
		params[:scripts].split('+').each do|s| 

			command = 'py ' + Dir.pwd + '/app/assets/Python/textblob_' + s + '.py "' + params[:text] + '"'
			json += ', "' + s + '":"'  + %x[ #{command} ] + '"'
		end
		
		json += "}"

		render :text => json
	end
end
