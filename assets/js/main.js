
// LANDING FUNCTION

window.addEventListener("load", function (event) {

    const landing = this.document.querySelector("#landing");
    if (landing === null || undefined) {
        return false
    };
    
    this.setTimeout(function () {
        const loader = document.querySelector("#container_loader");
        loader.classList.add("disactive")
        
        this.setTimeout(function () {
            loader.style.display ="none";
        },2000)

    },500);
    
    // .......... ACCUEIL ILLUSTRATION .......... //
    
    (function () {
        
        if (window.matchMedia("(max-width: 1400px)").matches) {
            console.log("Cest ok pour moi");
            return false
        } else {
            
            // IMG ACTIVE
            let imageContainer = document.querySelector(".landing_illustrations");
            // let images = document.querySelectorAll(".illustraions");
            
            let imgActive = imageContainer.firstElementChild.classList.add("landing-img-active")
            
            window.setInterval(function () {
                let Active = imageContainer.querySelector(".landing-img-active");
                Active.classList.remove("landing-img-active");
                let page = Active.nextElementSibling;
            
                if (page === null) {
                    let page = imageContainer.firstElementChild;
                    page.classList.add("landing-img-active");
                } else {
                    page.classList.add("landing-img-active");
                }
            }, 10000);
        }
    
    }) ();
    

    (function () {

        // COUNTER 
        
        const article = document.querySelector("#landing_article");
        const divBtnEntrer = document.querySelector("#landing-btn-entrer");
        const btnEntrer = document.querySelector("#btn-entrer");
        const line1 = document.querySelector("#line-1");
        const line2 = document.querySelector("#line-2");
        
        const case1 = document.querySelector("#days")
        const case2 = document.querySelector("#hours");
        const case3 = document.querySelector("#minutes");
        const case4 = document.querySelector("#secondes");
        
        let dateLunch = new Date("Jun 1, 2022 00:00:00").getTime();
        
        let compteur = window.setInterval(function () {
            let dateNow = new Date().getTime();
            let gap = dateLunch - dateNow;
        
            let seconds = 1000;
            let minutes = seconds * 60;
            let hours = minutes * 60;
            let days = hours * 24;
        
            let day = Math.floor(gap / days);
            let hour = Math.floor((gap % days) / hours);
            let minute = Math.floor((gap % hours) / minutes);
            let second = Math.floor((gap % minutes) / seconds);
        
            case1.textContent = day;
            case2.textContent = hour;
            case3.textContent = minute;
            case4.textContent = second;
        
            if (gap < 0) {
                
                clearInterval(compteur);
                
                case1.textContent = "0";
                case2.textContent = "0";
                case3.textContent = "0";
                case4.textContent = "0";
                
                line1.remove();
                // divBtnEntrer.innerHTML = '<a class="btn btn-entrer" id="btn-entrer" href="pages/menu.html" > entrer </a>';
                
                line2.innerHTML = "Le site est enfin prêt à etre consulter. <br> Je vous invites à appuier sur le boutton entrer pour vous rendre sur le site web. <br> Restez informer sur l'acctualité à venir en vous abonnant à notre NwesLetter.";
                
                btnEntrer.href = "pages/accueil.html"
                
            } else {
                btnEntrer.href = "#";
            }
        
        }, 1000)

    })();

});

// HEADER NAVIGATION LIST 

(function () {
    const headerNav = document.querySelector("#header-nav");
    const listIcon = document.querySelector("#nav-list-icon");
    const colseIcon = document.querySelector("#nav-close-icon");
    const navsLinks = document.querySelectorAll(".list_items");

    listIcon.addEventListener("click", () => {
        setTimeout(headerNav.classList.toggle("nav-mobile"), 2000);
    });
    
    colseIcon.addEventListener("click", () => {
        headerNav.classList.toggle("nav-mobile");
    });

    for (let i = 0; i < navsLinks.length; i++) {

        navsLinks[i].addEventListener("click", () => {

            if (headerNav.classList.contains("nav-mobile")) {
                headerNav.classList.toggle("nav-mobile");
            } else {
                return false
            }
            console.log("C'est bon pour moi");
        })
    }

})();

// ACCUEIL FUNCTION

(function () {
let accueil = document.querySelector("#accueil");

if (accueil === null || undefined) {
    return false
}

// BTN NEXT PREVIOUS

const defaultSection = document.querySelector("#default-section");
const container = document.querySelector("#container-sections");

// BTN NEXT

const next = document.querySelector("#btn-suivant");

next.addEventListener("click", (event) => {
    
    const sectionActive = container.querySelector(".section_active");
    let nextSection = sectionActive.nextElementSibling;
    
    if (defaultSection.classList.contains("section_active") == true) {
        
        bullysContainer.querySelector(".default_bully").classList.add("bully-active");
        
        defaultSection.classList.remove("section_active");
        defaultSection.nextElementSibling.classList.add("section_active");
        
        setTimeout(() => {
            defaultSection.style.display = "none";
        }, 1000)
        
    } else if (nextSection == null || undefined) {
        nextSection = container.firstElementChild.nextElementSibling;
        sectionActive.classList.remove("section_active");
        nextSection.classList.add("section_active");

        let bullyActive = bullysContainer.querySelector(".bully-active");
        bullyActive.classList.remove("bully-active");
        bullysContainer.querySelector(".default_bully").classList.add("bully-active");

    } else {
        sectionActive.classList.remove("section_active");
        nextSection.classList.add("section_active");
        
        let bullyActive = bullysContainer.querySelector(".bully-active");

        bullyActive.classList.remove("bully-active");
        bullyActive.nextElementSibling.classList.add("bully-active");
        
        console.log(bullyActive);
    };
});

// BTN PREVIOUS

const previous = document.querySelector("#btn-precedant");

previous.addEventListener("click", (event) => {

    const sectionActive = container.querySelector(".section_active");
    let previousSection = sectionActive.previousElementSibling;
    
    if (defaultSection.classList.contains("section_active") == true) {

        bullysContainer.lastElementChild.classList.add("bully-active");


        defaultSection.classList.remove("section_active");
        container.lastElementChild.classList.add("section_active");

        setTimeout(() => {
            defaultSection.style.display = "none";
        }, 1000)

    } else if (previousSection == null || undefined || previousSection == defaultSection) {
        previousSection = container.lastElementChild;
        sectionActive.classList.remove("section_active");
        previousSection.classList.add("section_active");
        
        let bullyActive = bullysContainer.querySelector(".bully-active");
        bullyActive.classList.remove("bully-active");
        bullysContainer.lastElementChild.classList.add("bully-active");

    } else {
        sectionActive.classList.remove("section_active");
        previousSection.classList.add("section_active");
        
        let bullyActive = bullysContainer.querySelector(".bully-active");

        bullyActive.classList.remove("bully-active");
        bullyActive.previousElementSibling.classList.add("bully-active");
    }
    
});

// BULLY

const bullysContainer = document.querySelector("#accueil-nav .accueil_nav_list");
const bullys = document.querySelectorAll("#accueil-nav .accueil_nav_list .accueil_nav_li ")

for (let i = 0; i < bullys.length; i++) {

    let bully = bullys[i];

    bully.addEventListener("click", function (event) {
        
        if (bully.classList.contains("bully-active")) {
            return false
        } else {
            let b = bullysContainer.querySelector(".bully-active");
            
            if (b == null) {
                this.classList.add("bully-active");
            } else {
                b.classList.remove("bully-active");
                this.classList.add("bully-active");
            }

            let h = this.querySelector("a").getAttribute("href");
            let sectionActive = container.querySelector(".section_active");
            
            sectionActive.classList.remove("section_active");
            container.querySelector(h).classList.add("section_active");
            
        } 
        
    } )
}

}) ();

// ABOUT FUNCTIONS

(function () {

let about = document.querySelector("#about")
if (about == null || undefined) {
    return false
}
    
let main = document.querySelector("#main-about")
let onglets = document.querySelectorAll("#select li");

for (let i = 0; i < onglets.length; i++) {

    onglets[i].addEventListener("click", function (event) {

        let ongletActive = onglets[i].parentNode.querySelector(".onglets-list-active");
        let page = main.querySelector(onglets[i].querySelector("a").getAttribute("href"));
        let pageActive = main.querySelector(".onglet-active");

        if (this.classList.contains("onglets-list-active")) {
            return false
        } else {
            pageActive.classList.remove("onglet-active");
            page.classList.add("onglet-active")

            ongletActive.classList.remove("onglets-list-active");
            this.classList.add("onglets-list-active");
        }

    })
};

}) ();