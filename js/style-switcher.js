/**
 * style switcher
 */
const styleSwitcherToggle = () => {
    const styleSwitcher = document.querySelector(".js-style-switcher");
    const styleSwitcherToggle = document.querySelector(".js-style-switcher-toggler");

    /**
     * toggles the color switcher
     * toggles open and closes the color swatch (style switcher)
     */
    styleSwitcherToggle.addEventListener("click", function(){
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("ri-close-fill");
        this.querySelector("i").classList.toggle("ri-settings-4-fill");
    });

}
styleSwitcherToggle();



/**
 * Theme color
*/
const themeColor = () => {
    // console.log("Hey, switcher");

    const hueSlider = document.querySelector(".js-hue-slider");
    const html = document.querySelector("html");

    const setHue = (value) => {
        html.style.setProperty("--hue", value);
        // put the selected color on the slider onto the website
        document.querySelector(".js-hue").innerHTML = value;
    }


    hueSlider.addEventListener("input", function(){
        //console.log(this.value); //gives the value of the number on the slider from(0 -360)
        
        setHue(this.value);
        /**
         * set the user's preferance in local storage
         */
        localStorage.setItem("--hue", this.value);

    });

    const slider = (value) => {
        hueSlider.value = value;
    }
    /**
     * check for saved user preference, if any, on loading the website
     * maintain this selected value on website reload
     */
    if(localStorage.getItem("--hue") !== null){
        setHue(localStorage.getItem("--hue"));
        slider(localStorage.getItem("--hue"));
    }
    else{
        //default (hue color in the css) color of the website
        const hue = getComputedStyle(html).getPropertyValue("--hue");
        // console.log(hue);
        setHue(hue);
        slider(hue.split(" ").join(""));
    }


}
themeColor();

/**
 * Theme Light and Dark mode
 */
const themeLightDark = () => {
    const darkModeCheckbox = document.querySelector(".js-dark-mode");

    const themeMode = () => {
        if(localStorage.getItem("theme-dark") === "false"){
            document.body.classList.remove("t-dark");
        }
        else{
            document.body.classList.add("t-dark");
        }
    }

    darkModeCheckbox.addEventListener("click", function(){
        // console.log("Dark mode toggled "+ this.checked);
        /**
         * set the user's preference in local storage
         */
        localStorage.setItem("theme-dark", this.checked);
        themeMode();
    })

    // check for saved user preference, if any when the website loads
    if(localStorage.getItem("theme-dark") !== null){
        themeMode();
    }
    if(document.body.classList.contains("t-dark")){
        darkModeCheckbox.checked = true;
    }

}
themeLightDark();

