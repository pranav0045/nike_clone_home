
down_nav1 = document.getElementById('down-nav1');
down_nav2 = document.getElementById('down-nav2');



if (down_nav1.style.right = "30%") {

    setTimeout(() => {
        down_nav1.style.right = "-40%";
        down_nav2.style.left = "30%";
    }, 3000);
}



//applying on menubars.

navs = document.querySelectorAll(".nav-items h4");
navs.forEach((e) => {

    e.addEventListener("mouseenter", (el) => {

        make_invisible();
            ind = el.target.id;
            e.style.borderBottom = "4px solid black";
            menus[ind-1].style.display = "flex";
            menus[ind- 1].style.opacity = 1;     

            gsap.from(".second-menu,.fist-menu",{
                y:-50,
                opacity:0,
                duration:1, 
                
            })
            

    })

     
    e.addEventListener("mouseleave",()=>{
        e.style.borderBottom = "none";

    })
    
})


function make_invisible() {
    menus = document.querySelectorAll(".menu");
    menus.forEach((e) => {
        e.style.display = "none";
        e.style.opacity = 0;

        e.addEventListener("mouseleave", () => {
            make_invisible();
        });
    })

  
    

}


//for making an scrollbar.

function make_scroll_x(container, pre, next) {

    pre.addEventListener("click", () => {
        container.scrollLeft -= 200;
    })

    next.addEventListener("click", () => {
        container.scrollLeft += 200;
    })

}


pre1 = document.getElementById("pre1");
next1 = document.getElementById("next1");
container1 = document.querySelector(".card-container-scroll");

make_scroll_x(container1, pre1, next1);


pre2=document.getElementById("pre2");
next2=document.getElementById("next2");
container2=document.querySelector(".card-container-scroll2");

make_scroll_x(container2,pre2,next2);



//gsap on navbar.

main_nav=document.querySelector(".main-nav");

up_nav=document.querySelector(".upper-nav");

down_nav=document.querySelector(".down-nav");



gsap.to(".main-nav",{
    top:-1,
     duration:.2, 
      scrollTrigger:{
        trigger:".main-nav",
        scroller:"body",
        // markers:true,
        start:"top -2%",
        end:"top -3%",
        scrub:2

    }

})


// targeting logo

logo=document.querySelector(".logo");
side_bar=document.querySelector(".slide-bar");
logo.addEventListener("click",()=>{

    if(side_bar.style.left=="-120%"){
        side_bar.style.left="0%";
    }
    else{
        side_bar.style.left="-120%";
    }
})
