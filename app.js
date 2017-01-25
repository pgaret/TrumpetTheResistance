function getForm(){
  $("#main").animate({
    opacity: 0
  }, 100, function(){
    $("#main").css("display", "none").css("opacity", 1)
    $("form").css("display", "block").animate({
      opacity: 1
    }, 100, function(){

    })
  })
}
