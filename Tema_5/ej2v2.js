var caja = document.getElementById("cuadrado");

      var x = 0;
      var y = 0;

      document.addEventListener("keydown", (k) => {
        switch (k.code) {
          case "ArrowUp":
          case "Numpad8":
            caja.style.top = (y -= 5) + "px";
            break;

          case "ArrowDown":
          case "Numpad2":
            caja.style.top = (y += 5) + "px";
            break;

          case "ArrowLeft":
          case "Numpad4":
            caja.style.left = (x -= 5) + "px";
            break;

          case "ArrowRight":
          case "Numpad6":
            caja.style.left = (x += 5) + "px";
            break;
        }
      });