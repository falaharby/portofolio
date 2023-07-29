const nav = document.querySelector('.nav');
const about = document.querySelector('.nav-about');
const skills = document.querySelector('.nav-skills');
const project = document.querySelector('.nav-project');
about.classList.add('current');


window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll);
  if(scroll >= 50) {
    nav.classList.add('nav-new');
  }  else {
    nav.classList.remove('nav-new');
  }

  if(scroll >= 50 && scroll <= 544) {
    about.classList.add('current');
    skills.classList.remove('current')
    project.classList.remove('current');
  } else if(scroll >= 544 & scroll <= 1088) {
    skills.classList.add('current');
    about.classList.remove('current')
    project.classList.remove('current');
  } else if (scroll >= 1088) {
    project.classList.add('current');
    skills.classList.remove('current');
    about.classList.remove('current');
  }

});

about.addEventListener("click", function() {
    about.classList.add('current');
    skills.classList.remove('current')
    project.classList.remove('current');
});

skills.addEventListener("click", function() {
  about.classList.remove('current');
  skills.classList.add('current')
  project.classList.remove('current');
});

project.addEventListener("click", function() {
  about.classList.remove('current');
  skills.classList.remove('current')
  project.classList.add('current');
});


const menu = document.querySelector('.menu');
const sideBar = document.querySelector('.sidebar');

menu.addEventListener("click", function(){
  sideBar.style.left = "150px";
})

window.addEventListener("click", event => {
  const kelas = event.target.getAttribute("class");
  console.log(kelas);
  if(kelas == "sidebar" || kelas == "bx bx-menu") {
    sideBar.style.left = "150px";
  } else {
    sideBar.style.left = "2000px";
  }
})

window.addEventListener("resize", function() {
  const width = window.innerWidth;
  if (width > 700 && width < 1000) {
    sideBar.style.left = "1000px"
  } else if (width > 1000) {
    sideBar.style.left = "2000px"
  }

})

const sr = ScrollReveal({
  origin:'top',
  distance: '80px',
  duration: 1500,
  reset: true,
  easing: 'ease'
});

sr.reveal('.name',{interval: 200});
sr.reveal('.garis',{origin:'right',delay: 400});
sr.reveal('.text-intro',{delay: 1000});
sr.reveal('.text-intro2',{delay: 1000});
sr.reveal('.resume-button', {delay : 1200});
sr.reveal('.intro',{delay:800});

sr.reveal('.char-coding');

sr.reveal('.skill-left h1',{delay: 200});
sr.reveal('.skill-left div',{origin: 'right' ,interval: 400});

sr.reveal('.title h1',{});
sr.reveal('.title p',{});

sr.reveal('.card', {interval: 200});

sr.reveal('.garis-bawah',{delay: 400});

sr.reveal('.portfolio',{delay: 800,interval: 200});