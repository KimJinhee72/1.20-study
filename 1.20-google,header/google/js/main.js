window.onload = function () {    
        const navScroll = document.querySelector("nav")
        window.addEventListener("scroll", function(){
            // navScroll.classList.add("scrolled")
        console.log("스크롤 y 값:" , window.scrollY );    
        if(window.scrollY > 70 ){
            navScroll.classList.add("scrolled")
        }
        // 아니면
        else{
            navScroll.classList.remove("scrolled")
        }
        })
    
};