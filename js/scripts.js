$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat-attack").prepend("<li>Meow!</li>")
    $("ul#dog-attack").prepend("<li>Woof!</li>")

  })

  $("button#woof").click(function() {
    $("ul#dog-attack").prepend("<li>Woof!</li>")
    $("ul#cat-attack").prepend("<li>Meow!</li>")

  })

})
