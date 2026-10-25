function upDate(previewPic) {
    console.log("Image event triggered");
    console.log(previewPic.alt);
    console.log(previewPic.src);

    const image = document.getElementById("image");
    image.innerHTML = previewPic.alt;
    image.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    const image = document.getElementById("image");
    image.style.backgroundImage = "url('')";
    image.innerHTML =
        "Hover over or focus on an image below to display here.";
}

function addTabFocus() {
    console.log("Page loaded, adding keyboard events");

    const images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");

        images[i].addEventListener("mouseover", function () {
            upDate(this);
        });

        images[i].addEventListener("mouseout", unDo);

        images[i].addEventListener("focus", function () {
            upDate(this);
        });

        images[i].addEventListener("blur", unDo);
    }
}

window.addEventListener("load", addTabFocus);