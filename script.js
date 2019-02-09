$( document ).ready(function() {

  const data = jQuery.parseJSON(JSON.stringify(news));


  $.each(data, function(index){
    $(".row").append("<div id='column"+index+"' class='col-sm-12 col-md-6 col-lg-4 mb-3'><figure class='border-5'><a href=''><img class='img-fluid w-100' src=''></a><p class='text-justify text-white'></p></figure></div>");
    $("#column"+index+" a").attr("html", data[index].link);
    $("#column"+index+" img").attr("src", data[index].img);
    $("#column"+index+" p").html(data[index].title);
  }); 

});