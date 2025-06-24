

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

