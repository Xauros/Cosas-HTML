function changingColors() {
    var a = $("h1").css("color");
    if ($("h1").css("color") == "rgb(0, 0, 0)") {
      $("*").css("color", "red");
    } else if ($("h1").css("color") == "rgb(255, 0, 0)") {
      $("*").css("color", "blue");
  
    } else if ($("h1").css("color") == "rgb(0, 0, 255)") {
      $("*").css("color", "black");
    }
  
  }

  function changingText() {
    const a = document.getElementById("inp").value;
    $("h1").text(a);
  }

  function move(event){
    const cube = document.getElementById("cubo");
    document.body.addEventListener("keydown", function(event) {
            if(event.key == "w"){
                const top = parseInt(cube.style.top);
                console.log(top - 10);
                cube.style.top = top - 10;
            }

            if(event.key == "s"){
                const top = parseInt(cube.style.top);
                console.log(top + 10);
                cube.style.top = top + 10;
            }

            if(event.key == "a"){
                const right = parseInt(cube.style.left);
                console.log(right - 10);
                cube.style.left = right - 10;
            }

            if(event.key == "d"){
                const right = parseInt(cube.style.left);
                console.log(right + 10);
                cube.style.left = right + 10;
            }
    });
  }

$(document).ready(function(){
    move(window.event);
})