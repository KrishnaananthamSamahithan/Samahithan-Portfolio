 document.addEventListener("DOMContentLoaded", () => {
        const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
        const styleSwitcher = document.querySelector(".style-switcher");

        styleSwitcherToggle.addEventListener("click", () => {
            styleSwitcher.classList.toggle("open");
        });
    });
/* Hide style switcher on scroll */
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* Theme Color */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(Color)
{
    alternateStyles.forEach((style) => {
        if(Color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        } 
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}

/* Theme light and dark mode */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
