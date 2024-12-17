// alert("Hello This is my portfolio")


document.addEventListener("DOMContentLoaded", () => {
    const nav1 = document.querySelector(".nav1");
    const nav2 = document.querySelector(".nav2");
    const nav3 = document.querySelector(".nav3");
    const nav4 = document.querySelector(".nav4");

    if (nav1 && nav2 && nav3 && nav4) {
        window.addEventListener('scroll',()=>{
            if (window.pageYOffset > -1){
                nav1.classList.add("active")
                nav2.classList.remove("active")
                nav3.classList.remove("active")
                nav4.classList.remove("active")
            } else{
                nav1.classList.remove("active")
            }
            if (window.pageYOffset > 600){
                nav1.classList.remove("active")
                nav2.classList.add("active")
                nav3.classList.remove("active")
                nav4.classList.remove("active")
            } else{
                nav2.classList.remove("active")
            }
            if (window.pageYOffset > 1000){
                nav1.classList.remove("active")
                nav2.classList.remove("active")
                nav3.classList.add("active")
                nav4.classList.remove("active")
            } else{
                nav3.classList.remove("active")
            }
            if (window.pageYOffset > 3000){
                nav1.classList.remove("active")
                nav2.classList.remove("active")
                nav3.classList.remove("active")
                nav4.classList.add("active")
            } else{
                nav4.classList.remove("active")
            }
        } )
    }
});

//-------------------------------------------------- 

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("Home");
    const menuIcon = document.querySelector('.nav_button');

    if (menu && menuIcon) {
        menuIcon.addEventListener("click", () => {
            menu.classList.toggle("active"); 
        });
    }
});
// ---------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const section1 = document.querySelector('.section_item');
    const section2 = document.querySelector('.section2');

    if (section1) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) {
                section1.style.marginTop = '50px';
                section1.style.opacity = '1';
            } else {
                section1.style.opacity = '0';
                section1.style.marginTop = '150px';

            }
        })
    }
    if (section2) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 1000) {
                section2.style.marginTop = '0';
                section2.style.opacity = '1';
            } else {
                section2.style.opacity = '0';
                section2.style.marginTop = '150px';

            }
        })
    }
});


// -----------------------


document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.to-top');
    const contact = document.querySelector('.contact .container')

    if (btn) {

        btn.addEventListener('click',() =>{{
            scrollTo({
                top: 0,
                behavior: `smooth`,
            });
        }})

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 10) {
                btn.style.transform = `scale(1)`;
            } else {
                btn.style.transform = `scale(0)`;
            }
            if (window.pageYOffset > 3000) {
                contact.style.opacity = `1`;
                contact.style.marginTop = `20px`
            } else {
                contact.style.marginTop = `100px`
                contact.style.opacity = `0`;
            }
        })
    }
});

