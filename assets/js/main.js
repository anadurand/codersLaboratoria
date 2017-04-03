var fotosChile = ["anais-araya","andrea-miranda","berenisse-ríos","caterina-da-silva","daniela-sanchez","francisca-ojeda","katerine-sandoval"];
var fotos5Lima = ["andrea-cabrera","ariadna-izaguirre","carito-juarez","cristy-castro","karol-orrillo","paola-ortiz","teresa-lara"];
var fotos6Lima = ["arantza-burga","daguiana-revoredo","elizabeth-condori","grecia-rayme","janine-vega","michelle-more","mishel-velasquez","rosario-felix"];
var fotos = [fotosChile,fotos5Lima,fotos6Lima];


window.addEventListener("load", function(){

  var select = document.getElementById("select");
  var post = document.getElementById("promo");

  post.appendChild(mostrar(fotos[0],"4-chile",post));
  post.appendChild(mostrar(fotos[1],"5-lima",post));
  post.appendChild(mostrar(fotos[2],"6-lima",post));

  select.onchange = function(){
    switch (select.value) {

      case "4-chile":
                        post.innerHTML = "";
                        post.appendChild(mostrar(fotos[0],select.value));
      break;
      case "5-lima":
                        post.innerHTML = "";
                        post.appendChild(mostrar(fotos[1],select.value));
      break;
      case "6-lima":
                        post.innerHTML = "";
                        post.appendChild(mostrar(fotos[2],select.value));
      break;
      default:

    }

  }


});
