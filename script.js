var mp1 = document.querySelector("#mp1");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p3 = document.querySelector("#p3");
var main = document.querySelector("#main")

p3.addEventListener("mouseenter", function(){
  main.style.backgroundColor = 'black'
  mp1.src = "pepsi003.png"
})

p2.addEventListener("mouseenter", function(){
    main.style.backgroundColor = 'red'
    mp1.src = "pepsi002.png"
  })

  p1.addEventListener("mouseenter", function(){
    main.style.backgroundColor = 'royalblue'
    mp1.src = "pepsi001.png"
  })
  