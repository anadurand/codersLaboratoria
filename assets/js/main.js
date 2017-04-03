var fotosChile = ["anais-araya","andrea-miranda","berenisse-ríos","caterina-da-silva","daniela-sanchez","francisca-ojeda","katerine-sandoval"];
var fotos5Lima = ["andrea-cabrera","ariadna-izaguirre","carito-juarez","cristy-castro","karol-orrillo","paola-ortiz","teresa-lara"];
var fotos6Lima = ["arantza-burga","daguiana-revoredo","elizabeth-condori","grecia-rayme","janine-vega","michelle-more","mishel-velasquez","rosario-felix"];


function mostrar(array,valor,post){
  var postFotos = new PostImag();
  array.forEach(function(item){
    var folder = valor.split("-")[1];
    var ruta = "assets/img/" + folder + "/" + valor + "/" + item + ".jpg";
    console.log(ruta);
    item = item.split("-");
    var nombre = "";
    item.forEach(function(i){
      i = i.toUpperCase();
      nombre += i + " ";
    });

    postFotos.addFoto(nombre,ruta);
    postFotos.fotoToHTML(post);

  });

}
window.addEventListener("load", function(){

  var select = document.getElementById("select");
  var promo = document.getElementById("promo");
  var options = select.querySelectorAll("option");
  var post = document.getElementById("promo");



  select.onchange = function(){
    switch (select.value) {
      case "4-chile":
                        mostrar(fotosChile,select.value,post);

      break;
      case "5-lima":
                        mostrar(fotos5Lima,select.value,post);

      break;
      case "6-lima":
                        mostrar(fotos6Lima,select.value,post);

      break;
      default:

    }


  }


});
