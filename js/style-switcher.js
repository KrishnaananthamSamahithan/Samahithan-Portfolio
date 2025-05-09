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

let isManualNavigation = false;

// Detect scroll and highlight nav links
window.addEventListener('scroll', () => {
    if (isManualNavigation) return;  // Do not run scroll logic if navigating manually

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ----- NEW -----
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        isManualNavigation = true;

        // Remove active from all
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');

        // Allow scroll detection after short timeout (after section loaded)
        setTimeout(() => {
            isManualNavigation = false;
        }, 1000); // 1 second is good (or same as your section transition)
    });
});
