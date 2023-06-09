/* -------------------------------------------------------------------------- */
/*                            Menu listing produits                           */
/* -------------------------------------------------------------------------- */
function listingProduits() {
  let linkListing = document.getElementsByClassName("linkListing");
  let selectedListing = document.getElementsByClassName("selectedListing");
  let listingCards = document.getElementsByClassName("listingCards");

  for (let i = 0; i < linkListing.length; i++) {
    linkListing[i].addEventListener(
      "click",
      function (event) {
        for (let i = 0; i < selectedListing.length; i++) {
          selectedListing[i].classList.remove("selectedListing");
        }
        for (let i = 0; i < listingCards.length; i++) {
          listingCards[i].classList.remove("selectedListingCards");
          listingCards[i].classList.add("unselectedListingCards");
        }
        listingCards[i].classList.add("selectedListingCards");
        linkListing[i].classList.add("selectedListing");
      },
      false
    );
  }
}
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                            Choix des collections                           */
/* -------------------------------------------------------------------------- */
function choixCollection() {
  let imgCollectionPortrait = document.getElementById("imgCollectionPortrait");
  let imgCollectionPaysage1 = document.getElementById("imgCollectionPaysage1");
  let imgCollectionPaysage2 = document.getElementById("imgCollectionPaysage2");
  let descriptionCollection = document.getElementById("descriptionCollection");
  let clickCollection = document.getElementsByClassName("clickCollection");
  for (let i = 0; i < clickCollection.length; i++) {
    clickCollection[i].addEventListener("click", function (event) {
      for (let i = 0; i < clickCollection.length; i++) {
        clickCollection[i].classList.remove("selectedCollection");
      }
      clickCollection[i].classList.add("selectedCollection");
      descriptionCollection.innerHTML =
        "<h3>" +
        clickCollection[i].innerHTML +
        "</h3>" +
        "<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit Iusto beatae, accusamus provident iste voluptatem nemo! Cum repellat dolorem quod facilis Minus repudiandae numquam ad id iusto, dolor molestias similique nihil </p>" +
        " <form> <button formaction='inspiration.html'>En savoir plus</button></form>";

      if (clickCollection[i].innerHTML == "Abysse") {
        imgCollectionPortait.setAttribute("src", "images/abysse2.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/abysse3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/abysse1.jpg");
      } else if (clickCollection[i].innerHTML == "Carat") {
        imgCollectionPortait.setAttribute("src", "images/carat1.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/carat3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/carat2.jpg");
      } else if (clickCollection[i].innerHTML == "Écume") {
        imgCollectionPortait.setAttribute("src", "images/ecume1.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/ecume3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/ecume2.jpg");
      } else if (clickCollection[i].innerHTML == "Nordic") {
        imgCollectionPortait.setAttribute("src", "images/nordic1.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/nordic3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/nordic2.jpg");
      } else if (clickCollection[i].innerHTML == "Perle") {
        imgCollectionPortait.setAttribute("src", "images/pearl1.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/pearl3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/pearl2.jpg");
      } else if (clickCollection[i].innerHTML == "Saint-Tropez") {
        imgCollectionPortait.setAttribute("src", "images/saint-tropez1.jpg");
        imgCollectionPaysage1.setAttribute("src", "images/saint-tropez3.jpg");
        imgCollectionPaysage2.setAttribute("src", "images/saint-tropez2.jpg");
      }
    });
  }
}
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                Affichage FAQ                               */
/* -------------------------------------------------------------------------- */
function faq() {
  let faq = document.getElementsByClassName("faqArticle");

  for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
      if (faq[i].classList.contains("openFaq")) {
        faq[i].classList.remove("openFaq");
        faq[i].classList.add("closedFaq");
      } else if (faq[i].classList.contains("closedFaq")) {
        faq[i].classList.add("openFaq");
        faq[i].classList.remove("closedFaq");
      }
    });
  }
}
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                          Filtre collection listing                         */
/* -------------------------------------------------------------------------- */
function filtreCollection() {
  let filtre = document.getElementsByClassName("linkFilterCollection");
  let ficheProduit = document.getElementsByClassName("ficheProduit");

  for (let i = 0; i < filtre.length; i++) {
    filtre[i].addEventListener("click", function () {
      //console.log(filtre[i]);
      for (let i = 0; i < filtre.length; i++) {
        filtre[i].classList.remove("selectedFilterCollection");
      }

      for (let e = 0; e < ficheProduit.length; e++) {
        if (
          !ficheProduit[e].classList.contains(
            filtre[i].textContent.toLowerCase()
          )
        ) {
          //console.log(filtre[i].textContent.toLowerCase());
          ficheProduit[e].classList.add("hideFicheProduit");
        } else {
          ficheProduit[e].classList.remove("hideFicheProduit");
        }

        if (filtre[i].classList.contains("allCollection")) {
          ficheProduit[e].classList.remove("hideFicheProduit");
        }
      }
      filtre[i].classList.toggle("selectedFilterCollection");
    });
  }
}
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Filtre listing                               */
/* -------------------------------------------------------------------------- */
function filtreCheckbox() {
  let ficheProduit = document.getElementsByClassName("ficheProduit");
  let checkbox = document.getElementsByClassName("checkbox");
  let annuler = document.querySelector(".annulerFiltre");
  let output = document.querySelector("output");

  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", function () {
      for (let x = 0; x < checkbox.length; x++) {
        if (checkbox[x].checked) {
          for (let e = 0; e < ficheProduit.length; e++) {
            if (!ficheProduit[e].classList.contains(checkbox[x].id)) {
              ficheProduit[e].classList.add("hideFicheProduitCheckbox");
            } else {
              ficheProduit[e].classList.remove("hideFicheProduitCheckbox");
            }
          }
        } else {
        }
      }
    });
  }

  annuler.addEventListener("click", function () {
    for (let e = 0; e < ficheProduit.length; e++) {
      ficheProduit[e].classList.remove("hideFicheProduitCheckbox");
      ficheProduit[e].classList.remove("hideFicheProduitRange");
    }

    for (let i = 0; i < checkbox.length; i++) {
      checkbox[i].checked = false;
      output.textContent = "";
    }
  });
}
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                            Filtre range listing                            */
/* -------------------------------------------------------------------------- */
function rangeListing() {
  let range = document.getElementsByClassName("rangeListing");
  let ficheProduit = document.getElementsByClassName("ficheProduit");

  for (let i = 0; i < range.length; i++) {
    range[i].addEventListener("change", function () {
      //console.log(range[i].value);
      for (let e = 0; e < ficheProduit.length; e++) {
        if (range[i].value <= parseInt(ficheProduit[e].dataset.prix)) {
          //console.log(ficheProduit[e].dataset.prix);
          ficheProduit[e].classList.add("hideFicheProduitRange");
        } else {
          ficheProduit[e].classList.remove("hideFicheProduitRange");
        }
      }
    });
  }
}
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                            Filtre select mobile                            */
/* -------------------------------------------------------------------------- */
function filtreSelectMobile() {
  let select = document.getElementsByClassName("selectListing");
  let ficheProduit = document.getElementsByClassName("ficheProduit");
  let annuler = document.querySelector(".annulerFiltreMobile");
  let output = document.querySelectorAll("output");

  for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("change", function () {
      for (let z = 0; z < select.length; z++) {
        if (select[z].value != select[i].value) select[z].value = "all";
      }

      for (let e = 0; e < ficheProduit.length; e++) {
        if (!ficheProduit[e].classList.contains(this.value)) {
          ficheProduit[e].classList.add("hideFicheProduitCheckbox");
        } else {
          ficheProduit[e].classList.remove("hideFicheProduitCheckbox");
        }
      }
    });
  }

  annuler.addEventListener("click", function () {
    for (let e = 0; e < ficheProduit.length; e++) {
      ficheProduit[e].classList.remove("hideFicheProduitCheckbox");
      ficheProduit[e].classList.remove("hideFicheProduitRange");
    }

    for (let i = 0; i < select.length; i++) {
      for (let x = 0; x < output.length; x++) {
        output[x].textContent = " ";
      }
      for (let z = 0; z < select.length; z++) {
        select[z].value = "all";
      }
    }
  });
}

/* -------------------------------------------------------------------------- */
/*                        Faire apparaître le sous menu                       */
/* -------------------------------------------------------------------------- */
function subNav() {
  let linkVaisselle = document.getElementById("vaisselleHover");
  let vaisselleNav = document.getElementById("vaisselleNav");
  let linkcouverts = document.getElementById("couvertsHover");
  let couvertsNav = document.getElementById("couvertsNav");
  let linkverres = document.getElementById("verresHover");
  let verresNav = document.getElementById("verresNav");
  let linkservices = document.getElementById("servicesHover");
  let servicesNav = document.getElementById("servicesNav");
  let linkcollections = document.getElementById("collectionsHover");
  let collectionsNav = document.getElementById("collectionsNav");
  let linkinspiration = document.getElementById("inspirationHover");
  let linkarthur = document.getElementById("arthurHover");

  /* -------------------------------------------------------------------------- */
  /*                             Sous-Menu Vaisselle                            */
  /* -------------------------------------------------------------------------- */
  linkVaisselle.addEventListener(
    "mouseover",
    function (event) {
      couvertsNav.style.display = "none";
      verresNav.style.display = "none";
      servicesNav.style.display = "none";
      collectionsNav.style.display = "none";
      vaisselleNav.style.display = "flex";
      document.querySelector("main").style.opacity = "30%";
    },
    false
  );

  vaisselleNav.addEventListener(
    "mouseleave",
    function (event) {
      vaisselleNav.style.display = "none";
      document.querySelector("main").style.opacity = "100%";
    },
    false
  );
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                             Sous-Menu Couverts                             */
  /* -------------------------------------------------------------------------- */
  linkcouverts.addEventListener(
    "mouseover",
    function (event) {
      vaisselleNav.style.display = "none";
      verresNav.style.display = "none";
      servicesNav.style.display = "none";
      collectionsNav.style.display = "none";
      couvertsNav.style.display = "flex";
      document.querySelector("main").style.opacity = "30%";
    },
    false
  );

  couvertsNav.addEventListener(
    "mouseleave",
    function (event) {
      couvertsNav.style.display = "none";
      document.querySelector("main").style.opacity = "100%";
    },
    false
  );
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                              Sous-menu Verres                              */
  /* -------------------------------------------------------------------------- */
  linkverres.addEventListener(
    "mouseover",
    function (event) {
      vaisselleNav.style.display = "none";
      couvertsNav.style.display = "none";
      servicesNav.style.display = "none";
      collectionsNav.style.display = "none";
      verresNav.style.display = "flex";
      document.querySelector("main").style.opacity = "30%";
    },
    false
  );

  verresNav.addEventListener(
    "mouseleave",
    function (event) {
      verresNav.style.display = "none";
      document.querySelector("main").style.opacity = "100%";
    },
    false
  );
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                             Sous-Menu Services                             */
  /* -------------------------------------------------------------------------- */
  linkservices.addEventListener(
    "mouseover",
    function (event) {
      vaisselleNav.style.display = "none";
      couvertsNav.style.display = "none";
      verresNav.style.display = "none";
      collectionsNav.style.display = "none";
      servicesNav.style.display = "flex";
      document.querySelector("main").style.opacity = "30%";
    },
    false
  );

  servicesNav.addEventListener(
    "mouseleave",
    function (event) {
      servicesNav.style.display = "none";
      document.querySelector("main").style.opacity = "100%";
    },
    false
  );
  /* -------------------------------------------------------------------------- */

  linkcollections.addEventListener(
    "mouseover",
    function (event) {
      vaisselleNav.style.display = "none";
      couvertsNav.style.display = "none";
      verresNav.style.display = "none";
      servicesNav.style.display = "none";
      collectionsNav.style.display = "flex";
      document.querySelector("main").style.opacity = "30%";
    },
    false
  );

  collectionsNav.addEventListener(
    "mouseleave",
    function (event) {
      collectionsNav.style.display = "none";
      document.querySelector("main").style.opacity = "100%";
    },
    false
  );

  linkinspiration.addEventListener("mouseover", function (event) {
    vaisselleNav.style.display = "none";
    couvertsNav.style.display = "none";
    verresNav.style.display = "none";
    servicesNav.style.display = "none";
    collectionsNav.style.display = "none";
    document.querySelector("main").style.opacity = "100%";
  });

  linkarthur.addEventListener("mouseover", function (event) {
    vaisselleNav.style.display = "none";
    couvertsNav.style.display = "none";
    verresNav.style.display = "none";
    servicesNav.style.display = "none";
    collectionsNav.style.display = "none";
    document.querySelector("main").style.opacity = "100%";
  });
}
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                   Chargement des images collections cache                  */
/* -------------------------------------------------------------------------- */
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 Menu mobile                                */
/* -------------------------------------------------------------------------- */
function hamburger() {
  let hamburger = document.getElementById("hamburger");
  let firstNav = document.querySelector(".firstNavMobile");
  let mobileItems = document.getElementsByClassName("mobileItems");
  let main = document.querySelector("main");
  let footer = document.querySelector("footer");

  var myVar = false;
  hamburger.addEventListener("click", function () {
    myVar = !myVar;
    if (myVar) {
      firstNav.classList.add("firstNavMobileClicked");
      main.style.display = "none";
      footer.style.display = "none";
    } else {
      firstNav.classList.remove("firstNavMobileClicked");
      main.style.display = "";
      footer.style.display = "";
    }
  });

  var loop = false;
  for (let i = 0; i < mobileItems.length; i++) {
    mobileItems[i].addEventListener("click", function () {
      loop = !loop;
      if (loop) {
        mobileItems[i].nextElementSibling.classList.add("mobileSubNavShow");
        mobileItems[i].classList.add("rotateArrow");
      } else {
        mobileItems[i].nextElementSibling.classList.remove("mobileSubNavShow");
        mobileItems[i].classList.remove("rotateArrow");
      }
    });
  }
}
