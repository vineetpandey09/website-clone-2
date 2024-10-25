let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const sliderContainer = document.querySelector('.slider-container');
const totalSlides = testimonials.length;

// Function to move to the next slide
function moveToNextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Go back to the first slide
    }
    sliderContainer.style.transform = `translateX(-${currentIndex * 50}%)`;
}

// Function to move to the previous slide
function moveToPrevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Go to the last slide
    }
    sliderContainer.style.transform = `translateX(-${currentIndex * 50}%)`;
}

// Auto-slide every 5 seconds (5000 milliseconds)
let autoSlide = setInterval(moveToNextSlide, 5000);

// Next button event listener
document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlide); // Stop auto-slide when user interacts
    moveToNextSlide();
    autoSlide = setInterval(moveToNextSlide, 3000); // Restart auto-slide
});

// Previous button event listener
document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlide); // Stop auto-slide when user interacts
    moveToPrevSlide();
    autoSlide = setInterval(moveToNextSlide, 3000); // Restart auto-slide
});

const scrollUpBtn = document.getElementById('myBtn');

// Show the button when the user scrolls down 100px
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = 'block';
    } else {
        scrollUpBtn.style.display = 'none';
    }
};

// Scroll to the top smoothly when the button is clicked
scrollUpBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
};;

document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
    toggle.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Close other open menus (optional)
        document.querySelectorAll('.submenu').forEach((menu) => {
            if (menu !== this.nextElementSibling) {
                menu.classList.remove('active');
            }
        });

        // Toggle the current submenu
        const submenu = this.nextElementSibling;
        submenu.classList.toggle('active');
    });
});
const faqItems = document.querySelectorAll('.faq-item');

// Add event listener to each question
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        // Close other open answers (optional)
        faqItems.forEach(i => {
            if (i !== item) {
                i.querySelector('.faq-answer').style.display = 'none';
            }
        });

        // Toggle display of the current answer
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});
const subMenu = document.querySelector(".submenu-list-item");
const mainSubMenu = document.querySelector(".main-sub-menu");
mainSubMenu.addEventListener('click', function() {
    if(subMenu.style.display=== "block" || subMenu.style.display === '') {
    subMenu.classList.toggle('sub-menu-active');
    }
    else {
        subMenu.style.display = 'none';
    }
})

const modal = document.getElementById("quoteModal");
const btn = document.getElementById("requestQuoteBtn");
const closeBtn = document.querySelector(".close-btn");

// Open the modal when the button is clicked
btn.onclick = function (e) {
  e.preventDefault(); // Prevent default link behavior
  modal.style.display = "block";
};

// Close the modal when the 'X' button is clicked
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const modalTwo = document.getElementById("getCallModal");
const btnTwo = document.getElementById("getCallBtn");
const closeBtnTwo = document.querySelector(".close-btn-2");

// Open the modal when the button is clicked
btnTwo.onclick = function (e) {
  e.preventDefault(); // Prevent default link behavior
  modal.style.display = "block";
};

// Close the modal when the 'X' button is clicked
closeBtnTwo.onclick = function () {
  modal.style.display = "none";
};

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const copyBtn = document.getElementById("copyingId");
const printBtn = document.getElementById("printingId");
const copySect = document.getElementById("copying-div");
const printSect = document.getElementById("printing-div");
copyBtn.addEventListener('click', () => {
  printSect.style.display='none';
  copySect.style.display='block';
  copySect.className = 'moto-widget-tabs-border-copying';
})
printBtn.addEventListener('click', () => {
    copySect.style.display='none';
    printSect.style.display='block';
})

const successAlert = document.querySelector('.success-alert-msg');
const incorrectEmailAlert = document.querySelectorAll('.alert-msg-modal')[0];
const incorrectPasswordAlert = document.querySelectorAll('.alert-msg-modal')[1];
const requiredFieldMsg = document.querySelectorAll('.modal-required-msg');
const submitBtn = document.querySelector('.btn-modal-submit');

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

// Email validation pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitBtn.addEventListener('click', () => {
  // Reset all alerts initially
  successAlert.style.display = 'none';
  incorrectEmailAlert.style.display = 'none';
  incorrectPasswordAlert.style.display = 'none';
  requiredFieldMsg.forEach(msg => msg.style.display = 'none');

  const emailValue = inputEmail.value.trim();
  const passwordValue = inputPassword.value.trim();

  let isValid = true;

  // Validate email field
  if (emailValue === '') {
    requiredFieldMsg[0].style.display = 'inline';
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    incorrectEmailAlert.style.display = 'inline';
    isValid = false;
  }

  // Validate password field
  if (passwordValue === '') {
    requiredFieldMsg[1].style.display = 'inline';
    isValid = false;
  } else if (passwordValue.length < 6) {
    incorrectPasswordAlert.style.display = 'inline';
    isValid = false;
  }

  // If all validations pass, show success message
  if (isValid) {
    successAlert.style.display = 'block';
    inputEmail.value = '';
    inputPassword.value = '';
  }
});

const requiredMsgNews = document.querySelector('.modal-required-msg-new');
const errorMsgNews = document.querySelector('.alert-msg-modal-new');
const successMsgNews = document.getElementById('text-msg-newsletter');
const newsEmailInput = document.getElementById('newsletter-email');

document.getElementById('btn-newsletter-submit').addEventListener('click',  () =>{
   
    //Reset all messages to hidden initially
    // requiredMsgNews.style.display = 'none';
    errorMsgNews.style.display = 'none';
    successMsgNews.style.display = 'none';
    //  requiredMsgNews.forEach (msg => msg.style.display = 'none');

    const emailValueNews = newsEmailInput.value.trim();
    let isValid = true;
    if (emailValueNews === '' || (!emailPattern.test(emailValueNews)) ) {
      requiredMsgNews.style.display = 'none';
      errorMsgNews.style.display = 'inline';  // Show "Required Fields" message
      isValid = false;
    } else if (!emailPattern.test(emailValueNews)) {
      errorMsgNews.style.display = 'none'; // Show "Incorrect email" message
      requiredMsgNews.style.display = 'inline';
      isValid= true;
    }
    if(isValid){
      successMsgNews.style.display='inline';
    }
  });
  
  const galleryImages = document.querySelectorAll('.gallery-image');
  const modalGallery = document.getElementById('modalGallery');
  const modalImage = document.getElementById('modalImage');
  const closeBtnG = document.querySelector('.close-btn-gallery');
  const prevArrow = document.getElementById('prevImage');
  const nextArrow = document.getElementById('nextImage');
  const imageWrappers = document.querySelectorAll('.image-wrapper'); // Select all wrappers
  
  let currentIndexx = 0;
  let scrollPosition = 0;
  
  // Open the modal with the selected image
  function openModal(index) {
    currentIndexx = index;
    modalImage.src = galleryImages[currentIndexx].src;
    modalGallery.classList.add('open');
    scrollPosition = window.scrollY;
  
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
  }
  
  // Close the modal with animation
  function closeModal() {
    modalImage.style.animation = 'closeAnimation 0.5s forwards';
  
    modalImage.addEventListener(
      'animationend',
      () => {
        modalGallery.classList.remove('open');
        modalImage.style.animation = '';
  
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition);
      },
      { once: true }
    );
  }
  
  // Show the previous image
  function showPrevImage() {
    currentIndexx = (currentIndexx - 1 + galleryImages.length) % galleryImages.length;
    modalImage.src = galleryImages[currentIndexx].src;
  }
  
  // Show the next image
  function showNextImage() {
    currentIndexx = (currentIndexx + 1) % galleryImages.length;
    modalImage.src = galleryImages[currentIndexx].src;
  }
  
  // Add event listeners for images and overlays (through wrappers)
  imageWrappers.forEach((wrapper, index) => {
    // Open modal on image or overlay click
    wrapper.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent anchor from triggering default action
      openModal(index);
    });
  });
  
  closeBtnG.addEventListener('click', closeModal);
  prevArrow.addEventListener('click', showPrevImage);
  nextArrow.addEventListener('click', showNextImage);
  
  // Close the modal when clicking outside the image
  window.addEventListener('click', (e) => {
    if (e.target === modalGallery) {
      closeModal();
    }
  });
  const mobMenuBtn = document.getElementById('mob-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu-display');
  
  // Toggle menu visibility on click
  mobMenuBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    mobileMenu.classList.toggle('mobile-menu-active'); // Add/Remove active class
  });
  const mobileSubmenu = document.querySelector('#submenu-list-item');
  const mobileSubmemnuBtn = document.querySelector('#sub-mobile-menu');
  
  mobileSubmemnuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileSubmenu.classList.toggle('submenu-list-item-active')
  })

  const menuLinks = document.querySelectorAll('.menu-bar-desk ul li a');

// Add click event to each <a> element
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove 'selected' class from all links
    menuLinks.forEach(l => l.classList.remove('selected'));

    // Add 'selected' class to the clicked link
    link.classList.add('selected');
  });
})