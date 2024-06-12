const navbutton = document.querySelector('.navbutton');
const navlinks = document.querySelectorAll('.nav_links');



navbutton.addEventListener('click', ()=> {
    document.body.classList.toggle('nav_open')    
});

navlinks.forEach(link => {
    link.addEventListener('click', () => {
            document.body.classList.remove('nav_open')
    })
})


