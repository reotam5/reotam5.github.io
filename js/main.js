$(document).ready(function () {
  animate1();

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  $("#fullpage").fullpage({
    easingcss3: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    scrollingSpeed: 1e3,
    anchors: ["landing", "projects", "skills", "contact"],
    navigation: !0,
    navigationPosition: "left",
    onLeave: function (index, nextIndex, direction) {
      switch (nextIndex) {
        case 1:
          animate1();
          return;
        case 2:
          animate2();
          return;
        case 3:
          animate3();
          return;
        case 4:
          animate4();
          return;
        default:
          console.log("You should not be here.");
      }
    },
  });

  document.addEventListener("mousemove", (e) => {
    parallaxController("#background-layer", e);
    parallaxController("#logoLayers", e);
    parallaxController("#parallaxLayerPC", e);
    parallaxController("#pcLayers", e);
    parallaxController("#skillLayers", e);
    parallaxController("#getIntouchLayers", e);
  });

  $(".progress-bar").each(function () {
    const percentage = $(this).attr("data-percent");
    $(this).find(".progress-bar-front").css("width", `${percentage}%`);
  });

  $("#menu-screen a").on("click", (e) => {
    $("#nav-right-menu").removeClass("menuOpen");
    $("#menu-screen").removeClass("menuOpen");
  });
  $("#nav-right-menu").on("click", (e) => {
    const isOpen = $("#nav-right-menu").hasClass("menuOpen");
    if (isOpen) {
      $("#nav-right-menu").removeClass("menuOpen");
      $("#menu-screen").removeClass("menuOpen");
    } else {
      $("#nav-right-menu").addClass("menuOpen");
      $("#menu-screen").addClass("menuOpen");
    }
  });

  $("footer small").html(
    `&copy; Copyright ${new Date().getFullYear()} by Reo Tamai. All Rights Reserved.`
  );
});

function animate1() {
  gsap.from($("#section-landing .page-title"), 1, {
    ease: Power2.easeInOut,
    opacity: 0,
    x: "-250px",
  });
  gsap.from($("#section-landing .line:nth-child(2n+1)"), 1, {
    ease: Power2.easeInOut,
    delay: 0.1,
    x: "-250px",
  });
  gsap.from($("#section-landing .line:nth-child(2n)"), 1, {
    ease: Power2.easeInOut,
    opacity: 0,
    delay: 0.15,
    x: "-250px",
  });
  gsap.from($("#section-landing .description"), 1, {
    ease: Power2.easeInOut,
    delay: 0.2,
    x: "-250px",
  });
  gsap.from($("#section-landing .button"), 1, {
    ease: Power2.easeInOut,
    delay: 0.22,
    x: "-250px",
  });
  gsap.from($("#logoLayers img:nth-child(2n)"), 1, {
    ease: Power2.easeInOut,
    delay: 0.2,
    x: "250px",
  });
  gsap.from($("#logoLayers img:nth-child(2n+1)"), 1, {
    ease: Power2.easeInOut,
    delay: 0.1,
    x: "250px",
  });
  gsap.from($("#scrollDownSign"), 1, {
    ease: Power2.easeInOut,
    delay: 0.13,
    y: "-100vh",
  });
}
function animate2() {
  gsap.from($("#section-projects .page-title"), 1, {
    ease: Power2.easeInOut,
    opacity: 0,
    x: "-250px",
  });
  gsap.from($("#section-projects .line:nth-child(2n+1)"), 1, {
    ease: Power2.easeInOut,
    delay: 0.1,
    x: "-250px",
  });
  gsap.from($("#section-projects .line:nth-child(2n)"), 1, {
    ease: Power2.easeInOut,
    opacity: 0,
    delay: 0.15,
    x: "-250px",
  });
  gsap.from($("#section-projects .description"), 1, {
    ease: Power2.easeInOut,
    delay: 0.2,
    x: "-250px",
  });
  gsap.from($("#section-projects .button"), 1, {
    ease: Power2.easeInOut,
    delay: 0.22,
    x: "-250px",
  });
  gsap.from($("#pcLayers img"), 1, {
    ease: Power2.easeInOut,
    delay: 0.2,
    x: "250px",
  });
  gsap.from($("#pcLayers div"), 1, {
    ease: Power2.easeInOut,
    delay: 0.1,
    x: "250px",
  });
}
function animate3() {
  gsap.from($("#section-skills .page-title"), 1, {
    ease: Power2.easeInOut,
    opacity: 0,
    x: "-250px",
  });
  gsap.from($("#section-skills .line:nth-child(2n+1)"), 1, {
    ease: Power2.easeInOut,
    delay: 0.1,
    x: "-250px",
  });
  gsap.from($("#section-skills .line:nth-child(2n)"), 1, {
    ease: Power2.easeInOut,
    opacity: 0,
    delay: 0.15,
    x: "-250px",
  });

  var delay = 0.1;
  $("#section-skills .skillSets")
    .children()
    .each(function () {
      gsap.from($(this), 1, {
        ease: Power2.easeInOut,
        opacity: 0,
        delay: delay,
        x: "-250px",
      });
      gsap.from($(this).find(".progress-bar-front"), 1, {
        ease: Power2.easeInOut,
        opacity: 0,
        delay: delay + 0.4,
        x: "-250px",
      });
      delay += 0.1;
    });
}
function animate4() {
  gsap.from($("#section-contact .page-title"), 1, {
    ease: Power2.easeInOut,
    opacity: 0,
    x: "-250px",
  });
  gsap.from($("#section-contact .line:nth-child(2n+1)"), 1, {
    ease: Power2.easeInOut,
    delay: 0.1,
    x: "-250px",
  });
  gsap.from($("#section-contact .line:nth-child(2n)"), 1, {
    ease: Power2.easeInOut,
    opacity: 0,
    delay: 0.15,
    x: "-250px",
  });
  gsap.from($("#section-contact .description"), 1, {
    ease: Power2.easeInOut,
    delay: 0.2,
    x: "-250px",
  });
  gsap.from($("#getIntouchLayers img:nth-child(2n)"), 1, {
    ease: Power2.easeInOut,
    delay: 0.2,
    x: "250px",
  });
  gsap.from($("#getIntouchLayers img:nth-child(2n+1)"), 1, {
    ease: Power2.easeInOut,
    delay: 0.1,
    x: "250px",
  });
  var delay = 0.15;
  var medias = [];
  $("#social-medias")
    .children()
    .each(function () {
      medias.unshift(this);
    });
  medias.forEach((element) => {
    gsap.from($(element), 1, {
      ease: Power2.easeInOut,
      delay: delay,
      x: "-250px",
    });
    delay += 0.1;
  });
}

function parallaxController(parent, e) {
  $(parent)
    .children()
    .each(function () {
      const speed = $(this).attr("data-speed");
      const x =
        (window.innerWidth - (e.pageX - window.innerWidth / 2) * speed) / 100;
      const y =
        (window.innerHeight - (e.pageY - window.innerHeight / 2) * speed) / 100;
      $(this).css("transform", `translate(${x}px, ${y}px)`);
    });
}

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

var elements = document.getElementsByClassName("typewrite");
for (var i = 0; i < elements.length; i++) {
  var toRotate = elements[i].getAttribute("data-type");
  var period = elements[i].getAttribute("data-period");
  if (toRotate) {
    new TxtType(elements[i], JSON.parse(toRotate), period);
  }
}
// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".typewrite > .wrap { border-right: .15em solid var(--pink-1)}";
document.body.appendChild(css);
