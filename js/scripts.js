$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat-attack").prepend("<li>Meow!</li>")
    $("ul#dog-attack").prepend("<li>Bark!</li>")

    $(".result-photo").after('<img src="img/cat.jpg" id="Results">')
    $("#Results").click(function() {
      $(this).remove()
    })

  })

  $("button#woof").click(function() {
    $("ul#dog-attack").prepend("<li>Woof!</li>")
    $("ul#cat-attack").prepend("<li>Hiss!</li>")

    $(".result-photo").after('<img src="img/dog.jpg" id="Results">')
    $("#Results").click(function() {
      $(this).remove()
    })
  })

})
