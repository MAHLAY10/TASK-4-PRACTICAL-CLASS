let mobile_menu = document.querySelector('.mobile_menu')
let ico_close = document.querySelector('.hamMenu #close')
let ico_open = document.querySelector('.hamMenu #open')

// CODE OPEN MENU WHEN THE BAR IS CLICKED
ico_open.addEventListener('click', function (){
   mobile_menu.classList.add('show')
   ico_close.style.display = 'block'
   this.style.display='none'
})

// CODE TO CLOSE MENU WHEN THE CANCEL IS CLIKED
ico_close.addEventListener('click', function (){
    mobile_menu.classList.remove('show')
    ico_open.style.display = 'block'
    this.style.display='none'
})


//  SCALABLE TABS
// get all tab links 
let tabs = document.querySelector('.port_tabs .all_tab')

function openTab(event, id) {
    let i, content, tabs;
    
    content = document.getElementsByClassName('tabcontent')
    //for the contents
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = 'none';
    }
    
    //for the tabs 
    tabs = document.getElementsByClassName('all_tab')
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active"); 
    }

    //for the links
    document.getElementById(id).style.display='grid'
    event.currentTarget.className += ' active'
}

window.onscroll = function() {navFunction()};
console.log(window.onscroll);
var navbar = document.getElementById("gen_bg_container");
var sticky = navbar.offsetTop;
console.log(navbar);

function navFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
