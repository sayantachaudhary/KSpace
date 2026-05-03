
gsap.registerPlugin(ScrollTrigger);

/* ── Navbar scroll ── */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

/* ── Mobile menu ── */
const mobileToggle = document.querySelector(".mobile-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    const spans = mobileToggle.querySelectorAll("span");
    const isOpen = mobileMenu.classList.contains("open");
    spans[0].style.transform = isOpen ? "rotate(45deg) translateY(7px)" : "";
    spans[1].style.opacity = isOpen ? "0" : "1";
    spans[2].style.transform = isOpen ? "rotate(-45deg) translateY(-7px)" : "";
    if (isOpen) {
      gsap.fromTo(
        mobileMenu.querySelectorAll("a"),
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" },
      );
    }
  });
}

/* ── Page router ── */
function showPage(pageId) {
  document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
  const page = document.getElementById(pageId);
  if (page) {
    page.style.display = "block";
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
    initPageAnimations(pageId);
  }
  // Update active nav
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === pageId);
  });
  if (mobileMenu) mobileMenu.classList.remove("open");
}

document.querySelectorAll("[data-page]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

/* ── Animations per page ── */
function initPageAnimations(pageId) {
  if (pageId === "home") initHomeAnimations();
  else if (pageId === "menu") initMenuAnimations();
  else if (pageId === "about") initAboutAnimations();
  else if (pageId === "contact") initContactAnimations();
}

function initHomeAnimations() {
  gsap.from(".hero-content > *", {
    y: 60,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    delay: 0.2,
  });
  gsap.from(".hero .doodle", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: "back.out(3)",
    delay: 0.8,
  });
  gsap.from(".about-snippet", {
    scrollTrigger: { trigger: ".about-snippet", start: "top 85%" },
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  });
  gsap.from(".polaroid", {
    scrollTrigger: {
      trigger: ".featured-section",
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.12,
    ease: "power2.out",
    immediateRender: false,
    clearProps:"Y",
  });
  gsap.from(".hours-section", {
    scrollTrigger: { trigger: ".hours-section", start: "top 85%" },
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });
  gsap.from(".find-section", {
    scrollTrigger: { trigger: ".find-section", start: "top 85%" },
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });
  setTimeout(() => ScrollTrigger.refresh(), 500);
}

function initMenuAnimations() {
  gsap.from(".menu-header > *", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.2,
  });
  animateMenuItems();
}

function animateMenuItems() {
  gsap.from(".menu-item", {
    y: 20,
    opacity: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: "power2.out",
  });
}

function initAboutAnimations() {
  gsap.from(".about-hero > *", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "power2.out",
    delay: 0.2,
  });
  gsap.from(".value-card", {
    scrollTrigger: {
      trigger: ".values-section",
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
    y: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
    immediateRender: false,
  });
  gsap.from(".team-card", {
    scrollTrigger: { trigger: ".team-section", start: "top 85%" },
    y: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out",
  });
  setTimeout(() => ScrollTrigger.refresh(), 500);
}

function initContactAnimations() {
  gsap.from(".contact-content > *", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.2,
  });
}

/* ── Menu tabs ── */
const menuData = [
  {
    cat: "starters & sides",
    emoji: "🥟",
    items: [
      {
        name: "mandu (dumplings)",
        desc: "pan-fried or steamed, stuffed w/ pork & veggies",
        price: "₹220",
        tags: ["GF option"],
      },
      {
        name: "pajeon",
        desc: "crispy scallion pancake w/ soy dipping sauce",
        price: "₹240",
        tags: ["V"],
      },
      {
        name: "kimchi",
        desc: "house-fermented, aged to perfection. the og.",
        price: "₹80",
        tags: ["V", "GF"],
        hot: true,
      },
      {
        name: "kimbap rolls",
        desc: "korean sushi rolls w/ seasoned rice, veggies & your pick of filling",
        price: "₹260",
      },
      {
        name: "japchae",
        desc: "sweet potato glass noodles, sesame, seasonal veg",
        price: "₹280",
        tags: ["V", "GF"],
      },
      {
        name: "gyeran-jjim",
        desc: "fluffy steamed egg casserole. soft, warm, comforting.",
        price: "₹160",
        tags: ["V", "GF"],
      },
    ],
  },
  {
    cat: "mains",
    emoji: "🍚",
    items: [
      {
        name: "dolsot bibimbap",
        desc: "stone bowl, crispy rice, all the toppings, gochujang on the side",
        price: "₹420",
        tags: ["GF"],
        hot: true,
      },
      {
        name: "bulgogi",
        desc: "thinly sliced marinated beef, grilled to a caramel edge",
        price: "₹520",
        hot: true,
      },
      {
        name: "dakgalbi",
        desc: "spicy stir-fried chicken w/ sweet potato & cabbage",
        price: "₹460",
      },
      {
        name: "kimchi jjigae",
        desc: "hearty kimchi stew w/ pork belly & tofu. bubbling hot.",
        price: "₹350",
      },
      {
        name: "sundubu jjigae",
        desc: "silky soft tofu stew, mildly spicy, deeply satisfying",
        price: "₹320",
        tags: ["V option"],
      },
      {
        name: "jeyuk bokkeum",
        desc: "spicy pork stir-fry w/ gochujang. pairs perfect w/ rice.",
        price: "₹440",
      },
      {
        name: "samgyeopsal set",
        desc: "thick-cut pork belly, lettuce wraps, all the banchan u need",
        price: "₹580",
      },
    ],
  },
  {
    cat: "noodles & rice",
    emoji: "🍜",
    items: [
      {
        name: "jajangmyeon",
        desc: "black bean sauce noodles. rich, savory, slightly sweet.",
        price: "₹320",
        hot: true,
      },
      {
        name: "ramyeon",
        desc: "korean spicy ramen w/ egg, scallions & your choice of add-ons",
        price: "₹260",
      },
      {
        name: "kimchi fried rice",
        desc: "wok-tossed w/ aged kimchi, topped w/ a fried egg",
        price: "₹280",
        tags: ["V option"],
      },
      {
        name: "naengmyeon",
        desc: "cold buckwheat noodles in icy broth. summer essential.",
        price: "₹300",
        tags: ["seasonal"],
      },
    ],
  },
  {
    cat: "street eats",
    emoji: "🌶️",
    items: [
      {
        name: "tteokbokki",
        desc: "chewy rice cakes in spicy-sweet gochujang. our comfort classic.",
        price: "₹280",
        tags: ["V"],
        hot: true,
      },
      {
        name: "corn dogs",
        desc: "korean-style, crispy batter, mozzarella or sausage",
        price: "₹200",
      },
      {
        name: "hotteok",
        desc: "sweet filled pancakes w/ brown sugar & nuts",
        price: "₹180",
        tags: ["V"],
      },
      {
        name: "twigim",
        desc: "korean tempura — veggies, shrimp, sweet potato",
        price: "₹240",
      },
    ],
  },
  {
    cat: "drinks",
    emoji: "🍵",
    items: [
      {
        name: "yuja-cha",
        desc: "citrus honey tea. warm, soothing, slightly tangy.",
        price: "₹140",
        tags: ["V", "GF"],
      },
      {
        name: "sujeonggwa",
        desc: "cinnamon persimmon punch. served cold. v refreshing.",
        price: "₹160",
        tags: ["V", "GF"],
      },
      {
        name: "banana milk",
        desc: "the korean classic. if u know u know.",
        price: "₹120",
        tags: ["V"],
        hot: true,
      },
      {
        name: "iced barley tea",
        desc: "bori-cha on ice. clean, nutty, zero sugar.",
        price: "₹100",
        tags: ["V", "GF"],
      },
      {
        name: "makgeolli",
        desc: "milky rice wine. slightly fizzy, slightly sweet. (21+ only)",
        price: "₹350",
      },
    ],
  },
  {
    cat: "desserts",
    emoji: "🍡",
    items: [
      {
        name: "bingsu",
        desc: "shaved ice w/ red bean, mochi & condensed milk. shareable.",
        price: "₹320",
        tags: ["V"],
        hot: true,
      },
      {
        name: "hodugwaja",
        desc: "walnut-shaped pastries filled w/ sweet red bean",
        price: "₹180",
        tags: ["V"],
      },
      {
        name: "matcha tiramisu",
        desc: "our korean-italian fusion twist. surprisingly good.",
        price: "₹260",
      },
    ],
  },
];

function renderMenuItems(catIndex) {
  const container = document.getElementById("menu-items");
  if (!container) return;
  const items = menuData[catIndex].items;
  container.innerHTML = items
    .map((item) => {
      const tagsHtml = (item.tags || [])
        .map((t) => {
          const cls = t.includes("V")
            ? "v"
            : t.includes("GF")
              ? "gf"
              : t === "seasonal"
                ? "seasonal"
                : "";
          return `<span class="menu-tag ${cls}">${t}</span>`;
        })
        .join("");
      return `
      <div class="menu-item">
        <div style="flex:1;padding-right:1rem">
          <div class="menu-item-name">
            ${item.name}
            ${item.hot ? '<span class="fav">fav!</span>' : ""}
          </div>
          ${tagsHtml ? `<div class="menu-item-tags">${tagsHtml}</div>` : ""}
          <p class="menu-item-desc">${item.desc}</p>
        </div>
        <div class="menu-item-price">${item.price}</div>
      </div>
    `;
    })
    .join("");
  animateMenuItems();
}

function initMenuTabs() {
  const tabsContainer = document.getElementById("menu-tabs");
  if (!tabsContainer) return;
  tabsContainer.innerHTML = menuData
    .map(
      (cat, i) =>
        `<button class="menu-tab${i === 0 ? " active" : ""}" data-cat="${i}">${cat.emoji} ${cat.cat}</button>`,
    )
    .join("");
  tabsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".menu-tab");
    if (!btn) return;
    tabsContainer
      .querySelectorAll(".menu-tab")
      .forEach((t) => t.classList.remove("active"));
    btn.classList.add("active");
    renderMenuItems(parseInt(btn.dataset.cat));
  });
  renderMenuItems(0);
}

/* ── Contact form ── */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("thanks for reaching out! we'll get back to u soon 💛");
    form.reset();
  });
}

/* ── Init ── */
document.addEventListener("DOMContentLoaded", () => {
  initMenuTabs();
  initContactForm();
  showPage("home");
});
