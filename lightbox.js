var lightbox = function(element) {

  // DOM
  var lb = document.createElement("div");
  var container = document.createElement("div");
  var close = document.createElement("button");
  var prev = document.createElement("button");
  var next = document.createElement("button");
  var img = document.createElement("img");

  // MODAL
  lb.id = "lb-lightbox";
  lb.className = "lb-lightbox";
  lb.style.opacity = 0;
  lb.style.zIndex = "-1";
  lb.style.width = "100%";
  lb.style.height = "100%";
  lb.style.position = "absolute";
  lb.style.top = "0px";
  lb.style.left = "0px";
  lb.style.background = "rgba(0,0,0,.7)";
  lb.style.transition = "all 500ms";

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
  prev.style.marginTop = "24%";
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
  next.style.marginTop = "24%";
  // next.style.top = "55%";

  // IMAGE
  img.id = "lb-img";
  img.style.maxWidth = "100%";


  lb.appendChild(close);
  lb.appendChild(container);
  container.appendChild(prev);
  container.appendChild(next);
  container.appendChild(img);
  document.body.appendChild(lb);

  var id = element.indexOf("#") == -1 ? false : true;
  var dom = id ? document.getElementById(element.replace("#", "")) : document.getElementsByClassName(element.replace(".", ""));
  var images = [];

  // FUNCTIONS

  // TYPE CLASS DOM
  if (!id) {

    for (var i = 0; i < dom.length; i++) {
      images[i] = dom[i].getElementsByTagName("img");
      // IMG LISTENER
      for (var j = 0; j < images[i].length; j++) {
        images[i][j].id = "lb-" + i + "-" + j;
        images[i][j].addEventListener("click", function() {
          var gi = this.id.replace("lb-", "").split("-");
          img.galery = parseInt(gi[0]);
          img.target = parseInt(gi[1]);
          lb.style.zIndex = "9999";
          img.src = this.src;
          lb.style.opacity = 1;
        });
      }
    }

    // NEXT
    next.addEventListener("click", function() {
      var p = img.target + 1 >= dom[img.galery].getElementsByTagName("img").length ? img.target : img.target + 1;
      img.src = images[img.galery][p].src;
      img.target = p;
    });

    // PREV
    prev.addEventListener("click", function() {
      var p = img.target - 1 == -1 ? img.target : img.target - 1;
      img.src = images[img.galery][p].src;
      img.target = p;
    });

  } else {

    // TYPE ID DOM
    images[0] = dom.getElementsByTagName("img");

    // IMG LISTENER
    for (var i = 0; i < images[0].length; i++) {
      images[0][i].id = "lb-0-" + i;
      images[0][i].addEventListener("click", function() {
        var gi = this.id.replace("lb-", "").split("-");
        img.galery = parseInt(gi[0]);
        img.target = parseInt(gi[1]);
        lb.style.zIndex = "9999";
        img.src = this.src;
        lb.style.opacity = 1;
      });
    }

    // NEXT
    next.addEventListener("click", function() {
      var p = img.target + 1 >= dom.getElementsByTagName("img").length ? img.target : img.target + 1;
      img.src = images[0][p].src;
      img.target = p;
    });

    // PREV
    prev.addEventListener("click", function() {
      var p = img.target - 1 == -1 ? img.target : img.target - 1;
      img.src = images[0][p].src;
      img.target = p;
    });

  }

  // CLOSE
  close.addEventListener("click", function() {
    lb.style.zIndex = "-1";
    lb.style.opacity = 0;
  });


}
