// send mail logic

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  btn.value = 'Sending...';
  const serviceID = 'default_service';
  const templateID = 'template_qxe5d59';
  emailjs.send("service_frvq3jq", "template_qxe5d59", {
    to_name: document.getElementById("to_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value
  });
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Mail Sent Successfully!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

// send mail logic end

// cursor animation

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 350, fill: "forwards" });
});

// cursor animation end

// typing animation

var typed = new Typed(".typing", {
  strings: ["Java Full Stack Developer", "UI / UX Designer"],
  typeSpeed: 50,
  backSpeed: 20,
  loop: true
});


// typing animation end

// menu btn logic for close and open

const dropdownMenu = document.querySelector('.dropdown-menu');
function onClickMenu() {
  document.getElementById('menu').classList.toggle('icon');
  dropdownMenu.classList.toggle('open');
}
function onClickMenu() {
  dropdownMenu.classList.toggle('open');
}