let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    let currentHeight = window.getComputedStyle(menuList).maxHeight;
    
    if (currentHeight === "0px") {
        menuList.style.maxHeight = "300px"; 
    } else {
        menuList.style.maxHeight = "0px";
    }
}


let menuLinks = menuList.getElementsByTagName("a");
for (let link of menuLinks) {
    link.addEventListener("click", function() {
        menuList.style.maxHeight = "0px"; 
    });
}


window.addEventListener("scroll", function() {
    menuList.style.maxHeight = "0px"; 
});


  
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
        
            document.querySelector('header nav  a[href*=' + id + ']').classList.add('active');
        };
    });
let header = document.querySelector('header');

menuList.classList.remove('bx-x');



};


const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i < dots ; i++){
        points += `<div class ="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})

document.getElementById('downloadLink').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './pic1.jpg';
    link.download = 'my_cv.jpg'; // Specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

function validateForm() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="email subject"]').value;
    const message = document.querySelector('textarea[name="messege"]').value;

    if (!name || !email || !subject || !message) {
        document.getElementById('errorMessage').textContent = "Please fill in all required fields.";
        document.getElementById('errorMessage').style.display = 'block';
        return false; // Prevent form submission
    } else {
        document.getElementById('errorMessage').style.display = 'none';
        return true; // Allow form submission
        
    }
}
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('contactForm').reset();
    document.getElementById('errorMessage').style.display = 'none'; // Clear error message
  });