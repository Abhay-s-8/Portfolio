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




