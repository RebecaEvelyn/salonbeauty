// char - string
// number 
//boolean: true ou false
// DOM Document Object Model
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for(const element of toggle){
    element.addEventListener('click', function (){
        nav.classList.toggle('show')
    })
}
/*quando clicar em um item do menu fechar menu */
const links = document.querySelectorAll('nav ul li a')
for(const link of links){
    link.addEventListener('click', function (){
        nav.classList.remove('show')
    })
}
// mudar o header da pag quando der o scroll

function changeHeaderWhenScroll(){
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    
    if (window.scrolly >= navHeight){
        // scroll é maior que a altura do header
    } else{
        //menor que a altura do header
        header.classList.remove('scroll')
    }
}



//testimonials carousel/slider
const swiper = new Swiper('.swiper-container',{
   slidesPerView:1,
    pagination: {
       el:'.swiper-pagination'
    },
   mousewheel:true,
   keyboard:true,
   breakpoints: {
       767:{
           slidesPerView: 2,
           setWrapperSizw:true
       }
   }
})
//ScrollReveal:mostrar elementos quando der scroll na pagina
const scrollReveal = ScrollReveal({
    origin:'top',
    distance: '30px',
    duration:700,
    reset:true
})
scrollReveal.reveal(`#home .image, #home .text, 
#about .image, #about .text, 
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
footer .brand, footer .social
`, {interval:100})

//botão voltar para o top

function backToTop(){
    const backToTopButton =document.querySelector('.back-to-top')

    if(window.scrollY>=560){
    backToTopButton.classList.add('show')

    }else{
    backToTopButton.classList.remove('show')
}}
//menu ativo conforme a seção visivel na pagina
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
    for(const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        const checkpointStart = checkpoint>= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.add('active')
        } else{
            document.querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.add('active')
        }
    }
}
//When scroll
window.addEventListener('scroll', function (){
    changeHeaderWhenScroll()
    backToTop()
})