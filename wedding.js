document.addEventListener("DOMContentLoaded", () => {
  const b1 = document.getElementById("Bcard1");
  const b2 = document.getElementById("Bcard2");
  const b3 = document.getElementById("Bcard3");
  const b4 = document.getElementById("Bcard4");
  const b5 = document.getElementById("Bcard5");
  const contentPopup1 = document.getElementById("contentPopup1");
  const contentPopup2 = document.getElementById("contentPopup2");
  const contentPopup3 = document.getElementById("contentPopup3");
  const contentPopup4 = document.getElementById("contentPopup4");
  const contentPopup5 = document.getElementById("contentPopup5");
  const bgBlack = document.querySelector(".b-black");

  window.closePopup1 = function () {
    contentPopup1.style.top = "800px";
    bgBlack.style.display = "none";
    if (window.innerWidth <= 610) {
      contentPopup1.style.display = "none";
    }
  };
  window.closePopup2 = function () {
    contentPopup2.style.top = "800px";
    bgBlack.style.display = "none";
    if (window.innerWidth <= 610) {
      contentPopup2.style.display = "none";
    }
  };
  window.closePopup3 = function () {
    contentPopup3.style.top = "800px";
    bgBlack.style.display = "none";
    if (window.innerWidth <= 610) {
      contentPopup3.style.display = "none";
    }
  };
  window.closePopup4 = function () {
    contentPopup4.style.top = "800px";
    bgBlack.style.display = "none";
    if (window.innerWidth <= 610) {
      contentPopup4.style.display = "none";
    }
  };
  window.closePopup5 = function () {
    contentPopup5.style.top = "800px";
    bgBlack.style.display = "none";
    if (window.innerWidth <= 610) {
      contentPopup5.style.display = "none";
    }
  };

  b1.addEventListener("click", () => {
    contentPopup1.style.top = "10px";
    contentPopup1.style.display = "flex";
    bgBlack.style.display = "block";
  });
  b2.addEventListener("click", () => {
    contentPopup2.style.top = "10px";
    contentPopup2.style.display = "flex";
    bgBlack.style.display = "block";
  });
  b3.addEventListener("click", () => {
    contentPopup3.style.top = "10px";
    contentPopup3.style.display = "flex";
    bgBlack.style.display = "block";
  });
  b4.addEventListener("click", () => {
    contentPopup4.style.top = "10px";
    contentPopup4.style.display = "flex";
    bgBlack.style.display = "block";
  });
  b5.addEventListener("click", () => {
    contentPopup5.style.top = "10px";
    contentPopup5.style.display = "flex";
    bgBlack.style.display = "block";
  });
});

function messagePaketA() {
  const urlWa = `https://wa.me/6281584877720?text=halo, Saya ingin memesan wedding Paket A harga Rp.4.375.000 , Apakah bisa?`;
  window.open(urlWa, "_blank");
}
function messagePaketB() {
  const urlWa = `https://wa.me/6281584877720?text=halo, Saya ingin memesan wedding Paket B harga Rp13.550.000, Apakah bisa?`;
  window.open(urlWa, "_blank");
}
function messagePaketC() {
  const urlWa = `https://wa.me/6281584877720?text=halo, Saya ingin memesan wedding Paket C harga Rp16.550.000, Apakah bisa?`;
  window.open(urlWa, "_blank");
}
function messagePaketD() {
  const urlWa = `https://wa.me/6281584877720?text=halo, Saya ingin memesan wedding Paket D harga Rp22.550.000, Apakah bisa?`;
  window.open(urlWa, "_blank");
}
function messagePaketE() {
  const urlWa = `https://wa.me/6281584877720?text=halo, Saya ingin memesan wedding Paket E harga Rp25.550.000, Apakah bisa?`;
  window.open(urlWa, "_blank");
}
