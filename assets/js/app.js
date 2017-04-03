function PostImag(){

  this.fotos = [];
  this.count = 0;

  this.addFoto = function(nombre, ruta){
    this.fotos.push({
      id: this.count,
      name: nombre,
      url: ruta

    });
    this.count++;
  }

  this.fotoToHTML = function(parent){
    parent.innerHTML = "";
    this.fotos.forEach(function(foto){
      parent.appendChild(this.createHTMLFoto(foto.id,foto.name, foto.url));
    },this);
  }

  this.createHTMLFoto = function(id,nombre,ruta){
    var div = document.createElement("div");
    div.classList.add("images");
    var img = new Image();
    img.src = ruta;
    var divSpan = document.createElement("div");
    var span = document.createElement("span");
    span.innerHTML = nombre;
    span.classList.add("spanFoto");

    div.appendChild(img);
    div.appendChild(divSpan);
    divSpan.appendChild(span);

    return div;

  }



}
