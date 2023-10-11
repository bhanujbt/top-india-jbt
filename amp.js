
        window.onscroll = function () { scrollsticky() }
        var navbar = document.getElementById("sticky-header");
        var sticky = navbar.offsetTop
        function scrollsticky() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("stickynav")
            } else {
                navbar.classList.remove("stickynav");
            }
        }

        document.getElementById("menu-button").addEventListener("click", function () {
            menuShow();
            document.body.classList.add('popbg');
        });
        document.getElementById("close").addEventListener("click", function () {
            menuClose();
            document.body.classList.remove('popbg');
        });
    
        function menuShow() {
            document.getElementById("menu-popup").style.right = "0%";
            console.log("search-click")
        }
        function menuClose() {
            document.getElementById("menu-popup").style.right = "-100%";
        }
    




        document.getElementById("srchOpen").addEventListener("click", function () {
            srchShow();
        });
        document.getElementById("srchClose").addEventListener("click", function () {
            srchHide();
        });
    
        function srchShow() {
            document.getElementById("search-popup").style.display = "flex";
        }
        function srchHide() {
            document.getElementById("search-popup").style.display = "none";
        }