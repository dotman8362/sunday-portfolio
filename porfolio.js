
var typed = new Typed(".multiple", {
    strings: ["   Product Manager"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})




  // Reveal from bottom
  ScrollReveal().reveal('.serve', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true  // Set to true if you want it to repeat every time it scrolls into view
  });


//    ScrollReveal().reveal('.top', {
//     origin: 'bottom',
//     distance: '50px',
//     duration: 200000000000000000000000000000000000000000000000000000000000000000000000000000000,
//     delay: 200,
//     easing: 'ease-in-out',
//     reset: true  // Set to true if you want it to repeat every time it scrolls into view
//   });

   ScrollReveal().reveal('.home', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true  // Set to true if you want it to repeat every time it scrolls into view
  });

   ScrollReveal().reveal('.about', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true  // Set to true if you want it to repeat every time it scrolls into view
  });
   ScrollReveal().reveal('.portfolio1', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true  // Set to true if you want it to repeat every time it scrolls into view
  });
   ScrollReveal().reveal('.container', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true  // Set to true if you want it to repeat every time it scrolls into view
  });
    ScrollReveal().reveal('.contact-section', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true  // Set to true if you want it to repeat every time it scrolls into view
  });
    ScrollReveal().reveal('.portfolio1', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true  // Set to true if you want it to repeat every time it scrolls into view
  });




// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });
  




// MOBILE RESPONSIVENESS



let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar')


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



// Function to open modal and display the clicked image
function viewImage(imageElement) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");

    // Set the source of the clicked image to the modal
    modalImage.src = imageElement.src;

    // Display the modal
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}