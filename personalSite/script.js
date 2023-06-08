// header toggle

let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener("click", function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})

//Typing effect

let typed = new Typed('.auto-input',{
    strings: ['Web Developer!', 'Web Designer!', 'Freelancer!', 'UI Designer!'],
    typeSpeed: 20,
    backSpeed: 20,
    backDelay: 2000,
    loop: true
})


//Activate Link State

//Get all links
let navLinks = document.querySelectorAll('nav ul li a');
//Get all sections
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY + 20;
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});