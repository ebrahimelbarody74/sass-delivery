let toggle=document.querySelector(".nav__toggle")
let nav__menu=document.querySelector(".nav__menu")
let nav__item=document.querySelectorAll(".nav__item")
toggle.onclick=()=>{
    nav__menu.classList.toggle("active")
    // nav__item
    
}

// remove item

let item=document.querySelectorAll(".nav__item a")
item.forEach((e)=>{
    e.onclick=()=>{
        nav__menu.classList.remove("active")
    }
})

nav__item.forEach((e)=>{
    e.onclick=()=>{
        nav__item.forEach((e)=>{
            e.classList.remove("active")
        })
        e.classList.add("active")
    }
})

// window scroll
let header=document.querySelector("header");
let scroll=document.querySelector(".scrollup")
window.onscroll=()=>{
    if(this.scrollY >= 80){
        header.style.boxShadow="0 1px 4px rgb(0 0 0 / 10%)"
    }else{
        header.style.boxShadow="none"
    }
    if(this.scrollY >= 140){
        scroll.style.display="block"
    }else{
        scroll.style.display="none"
    }
}
scroll.onclick=()=>{
    scrollTo({
        top:0
        // lef
    })
}

// change-theme

let changeTheme=document.querySelector(".change-theme")
let left=document.querySelector("bx-toggle-left")
let right=document.querySelector("bx-toggle-right")
changeTheme.onclick=()=>{
    document.querySelector("body").classList.toggle("dark-theme")
    if(changeTheme.classList.contains("bx-toggle-right")){
        changeTheme.classList.add("bx-toggle-left")
        changeTheme.classList.remove("bx-toggle-right")
    }else if(changeTheme.classList.contains("bx-toggle-left")){
        changeTheme.classList.add("bx-toggle-right")
        changeTheme.classList.remove("bx-toggle-left")
    }
   
}