function PostImag(){

  this.createHTMLFoto = function(nombre,ruta){
    var div = document.createElement("div");
    div.classList.add("images");
    var img = new Image();
    img.src = ruta;
    var divSpan = document.createElement("div");
    var span = document.createElement("span");
    span.innerHTML = nombre;
    divSpan.classList.add("spanFoto");

    div.appendChild(img);
    div.appendChild(divSpan);
    divSpan.appendChild(span);

    return div;

  }

}

function mostrar(array,valor){
  var postFotos = new PostImag();
  var docF = document.createDocumentFragment();

  array.forEach(function(item){
    var folder = valor.split("-")[1];
    var ruta = "assets/img/" + folder + "/" + valor + "/" + item + ".jpg";
    item = item.split("-");
    var nombre = "";
    item.forEach(function(i){
      i = i.toUpperCase();
      nombre += i + " ";
    });

    docF.appendChild(postFotos.createHTMLFoto(nombre,ruta));
  });
  return docF;
}
