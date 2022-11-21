const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".card-carrossel");
const maxItems = 4;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

         items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

function Pesquisa(){
  
  var entrada, filtro, ul, li, a, i, valorTexto;
  entrada = document.getElementById('entradaPesquisa')

  filtro = entrada.value.toUpperCase();
  ul = document.getElementById("listaPesquisa");
  li = ul.getElementsByTagName('li');

  for (i=0; i< li.length; i++) {
    
    a = li[i].getElementsByTagName("a")[0];
    valorTexto = a.textContent || a.innerText;
    
    if(valorTexto.toUpperCase().indexOf(filtro) > -1) {
      li[i].style.display = "";
    } else{
      li[i].style.display = "none";
    }
  }

}
