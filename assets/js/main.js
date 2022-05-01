// LANDING FUNCTION

window.addEventListener("load", function (event) {

// .......... ACCUEIL ILLUSTRATION .......... //

    (function () {
        
        if (window.matchMedia("(max-width: 1400px)").matches) {
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
        
            document.querySelector("#main-landing").style.opacity = "1";
        
        }, 1000)

    })();

})




