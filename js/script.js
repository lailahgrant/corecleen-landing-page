

/**
 * Reveal the header bg
 */
const headerBg = () => {
     console.log("Hey,,,,");
    const header = document.querySelector(".js-header");

    window.addEventListener("scroll", function() {
        if(this.scrollY > 0){
            header.classList.add("bg-reveal"); //add this class: add the styles in the css file
        }
        else{
            header.classList.remove("bg-reveal");
        }
    });

}
// call the function
headerBg();

/**
 * SCROLL TO TOP BUTTON
 */
// Get the button
let myscrollbutton = document.getElementById("myScrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myscrollbutton.style.display = "block";
  } else {
    myscrollbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/**
 * MODAL
 */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/**
 * Navigation
 */
const navigation = () => {
  const navToggler = document.querySelector(".js-nav-toggler");
  const nav = document.querySelector(".js-nav");
  const navItems = document.querySelectorAll("li");

  const navToggle = () => {
    /**
     * add these ".open" and ".active" classes to the nav css
     */
    nav.classList.toggle("open");
    navToggler.classList.toggle("active");
  }

  navToggler.addEventListener("click", navToggle);

  navItems.forEach((li) => {
    li.querySelector("a").addEventListener("click", () => {
      if(window.innerWidth <= 767) {
        navToggle();
      }
  });
  });

}
navigation();




