function loadImg() {
    var img = document.getElementById("imagen");
    var xhttp2 = new XMLHttpRequest();
    xhttp2.responseType = "arraybuffer"; 
    document.getElementById("demo2").innerHTML = xhttp2.response;
    
    xhttp2.onload = function() {
      var blob = new Blob([xhttp2.response], {type: "image/jpeg"});  
      var url = URL.createObjectURL(blob);
      img.src = url;
  
    }
    xhttp2.open("GET", "lily.jpg", true);
    xhttp2.send();
}