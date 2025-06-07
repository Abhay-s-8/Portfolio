document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000,
    offset:100,
  });
});

document.getElementById("contact-btn").addEventListener("click",()=>
{
    prompt("WELCOME , PLEASE MENTION YOUR NAME :");
    alert("!! THANK YOU FOR VISIT !!");
}
);

const containers = document.querySelectorAll('.container');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.5,
});

containers.forEach((container) => {
  observer.observe(container);
});


const typingText = document.getElementById('typing-text');
const textArray = ['   .','WELCOME TO MY PROFILE', 'I AM ABHAY SINGH'];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 120);
  } else {
    setTimeout(deleteText, 2000);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}

typeText();


