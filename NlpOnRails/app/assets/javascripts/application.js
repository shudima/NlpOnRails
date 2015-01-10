// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){



	$("#sentimentButton").click(function(){
		$("#sentiment").html("Wait for it ...");
		//alert("http://localhost:3000/nlp/sentiment/" + $("#text").value)
	  $.ajax({
	  			url:"http://localhost:3000/nlp/sentiment/" + $("#text").val(),
	  			success:function(result){
	    									$("#sentiment").html(result);
	 								    },
  	  			error:function(result){
    									$("#sentiment").html("Error");
 								    }
	  });
	});


	$("#keyWordsButton").click(function(){
		$("#key_words").html("Wait for it ...");
		//alert("http://localhost:3000/nlp/sentiment/" + $("#text").value)
	  $.ajax({
	  			url:"http://localhost:3000/nlp/key_words/" + $("#text").val(),
	  			success:function(result){
	    									$("#key_words").html(result);
	 								    },
  	  			error:function(result){
    									$("#key_words").html("Error");
 								    }
	  });
	});
});