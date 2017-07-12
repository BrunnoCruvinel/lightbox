var lightbox = function(element) {

  // DOM
  var lb = document.createElement("div");
  var container = document.createElement("div");
  var close = document.createElement("button");
  var prev = document.createElement("button");
  var next = document.createElement("button");
  var img = document.createElement("img");

  // CSS STYLE
  var style = document.createElement('style');
  style.innerHTML = '.lb-lightbox{transition:all linear 500ms;opacity:0;}.lb-lightbox-show{transition:all linear 500ms;opacity:1;}';

  // MODAL
  lb.id = "lb-lightbox";
  lb.className = "lb-lightbox";
  lb.style.zIndex = "-1";
  lb.style.width = "100%";
  lb.style.height = "100%";
  lb.style.position = "absolute";
  lb.style.top = "0px";
  lb.style.left = "0px";
  lb.style.background = "rgba(0,0,0,.8)";
  lb.style.transition = "all 2s";

  // CLOSE BUTTON
  close.id = "lb-close";
  close.textContent = "x";
  close.style.color = "white";
  close.style.fontSize = "50px";
  close.style.float = "right";
  close.style.padding = "10px 25px";
  close.style.background = "none";
  close.style.border = "none";
  close.style.cursor = "pointer";

  // CONTAINER
  container.id = "lb-container";
  container.style.position = "fixed";
  container.style.marginTop = "-20%";
  container.style.marginLeft = "-37.5%";
  container.style.left = "50%";
  container.style.top = "50%";
  container.style.width = "75%";
  // container.style.height = "25%";
  container.style.backgroundColor = "#fff";

  // PREV BUTTON
  prev.id = "lb-prev";
  prev.textContent = "<";
  prev.style.color = "white";
  prev.style.fontSize = "50px";
  prev.style.float = "left";
  prev.style.padding = "10px 25px";
  prev.style.background = "none";
  prev.style.border = "none";
  prev.style.cursor = "pointer";
  prev.style.marginLeft = "-100px";
  prev.style.marginTop = "20%";
  // prev.style.top = "55%";

  // PREV BUTTON
  next.id = "lb-next";
  next.textContent = ">";
  next.style.color = "white";
  next.style.fontSize = "50px";
  next.style.float = "right";
  next.style.padding = "10px 25px";
  next.style.background = "none";
  next.style.border = "none";
  next.style.cursor = "pointer";
  next.style.marginRight = "-100px";
  next.style.marginTop = "20%";
  // next.style.top = "55%";

  // IMAGE
  img.id = "lb-img";
  img.src = "img1.jpg";
  img.style.maxWidth = "100%";

  document.head.appendChild(style);
  lb.appendChild(close);
  lb.appendChild(container);
  container.appendChild(prev);
  container.appendChild(next);
  container.appendChild(img);
  document.body.appendChild(lb);

  var id = element.indexOf("#") == -1 ? false : true;
  var dom = id ? document.getElementById(element.replace("#", "")) : document.getElementsByClassName(element.replace(".", ""));
  var images = dom[0].getElementsByTagName("img");

  // FUNCTIONS

  // LISTENER
  for (var i in images) {
    images[i].addEventListener("click", function() {
      lb.style.zIndex = "9999";
      lb.className = "lb-lightbox-show";
      img.src = this.src;

    });
  }


}
