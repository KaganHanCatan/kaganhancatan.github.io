// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (nav) {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
    }
});

// Add active class to navigation items
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skill-item, .stat');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on load
document.addEventListener('DOMContentLoaded', function() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const originalText = heroName.textContent;
        // Uncomment the line below to enable typing effect
        // typeWriter(heroName, originalText, 100);
    }
});

// Content Management System
let translations = null;

// Initialize translations from content
function initializeTranslations() {
    // Transform content into translation format for compatibility
    translations = {
            en: {
                // Navigation
                'nav-home': websiteContent.navigation.en.home,
                'nav-about': websiteContent.navigation.en.about,
                'nav-experience': websiteContent.navigation.en.experience,
                'nav-projects': websiteContent.navigation.en.projects,
                
                // Hero Section
                'hero-greeting': websiteContent.hero.en.greeting,
                'hero-subtitle': websiteContent.hero.en.subtitle,
                'hero-description': websiteContent.hero.en.description,
                'hero-portfolio': websiteContent.hero.en.portfolioButton,
                'hero-resume': websiteContent.hero.en.resumeButton,
                
                // About Section
                'about-title': websiteContent.about.en.title,
                'about-subtitle': websiteContent.about.en.subtitle,
                'about-description-1': websiteContent.about.en.description1,
                'about-description-2': websiteContent.about.en.description2,
                'stat-experience': websiteContent.about.en.statYearsLabel,
                'stat-projects': websiteContent.about.en.statProjectsLabel,
                'stat-companies': websiteContent.about.en.statCompaniesLabel,
                
                // Experience Section
                'experience-title': websiteContent.experience.en.title,
                'experience-subtitle': websiteContent.experience.en.subtitle,
                'job-title-1': websiteContent.experience.en.items[0].title,
                'job-description-1': websiteContent.experience.en.items[0].description,
                'job-title-2': websiteContent.experience.en.items[1].title,
                'job-description-2': websiteContent.experience.en.items[1].description,
                'education-title': websiteContent.experience.en.items[2].title,
                'education-description': websiteContent.experience.en.items[2].description,
                
                // Projects Section
                'projects-title': websiteContent.projects.en.title,
                'projects-subtitle': websiteContent.projects.en.subtitle
            },
            tr: {
                // Navigation
                'nav-home': websiteContent.navigation.tr.home,
                'nav-about': websiteContent.navigation.tr.about,
                'nav-experience': websiteContent.navigation.tr.experience,
                'nav-projects': websiteContent.navigation.tr.projects,
                
                // Hero Section
                'hero-greeting': websiteContent.hero.tr.greeting,
                'hero-subtitle': websiteContent.hero.tr.subtitle,
                'hero-description': websiteContent.hero.tr.description,
                'hero-portfolio': websiteContent.hero.tr.portfolioButton,
                'hero-resume': websiteContent.hero.tr.resumeButton,
                
                // About Section
                'about-title': websiteContent.about.tr.title,
                'about-subtitle': websiteContent.about.tr.subtitle,
                'about-description-1': websiteContent.about.tr.description1,
                'about-description-2': websiteContent.about.tr.description2,
                'stat-experience': websiteContent.about.tr.statYearsLabel,
                'stat-projects': websiteContent.about.tr.statProjectsLabel,
                'stat-companies': websiteContent.about.tr.statCompaniesLabel,
                
                // Experience Section
                'experience-title': websiteContent.experience.tr.title,
                'experience-subtitle': websiteContent.experience.tr.subtitle,
                'job-title-1': websiteContent.experience.tr.items[0].title,
                'job-description-1': websiteContent.experience.tr.items[0].description,
                'job-title-2': websiteContent.experience.tr.items[1].title,
                'job-description-2': websiteContent.experience.tr.items[1].description,
                'education-title': websiteContent.experience.tr.items[2].title,
                'education-description': websiteContent.experience.tr.items[2].description,
                
                // Projects Section
                'projects-title': websiteContent.projects.tr.title,
                'projects-subtitle': websiteContent.projects.tr.subtitle
            }
        };
}

// Language functionality
let currentLanguage = 'en';

function updateLanguage(lang) {
    if (!translations) {
        console.error('Translations not loaded yet');
        return;
    }
    
    currentLanguage = lang;
    
    // Update all elements with data-translate attribute
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${lang}`);
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Re-render dynamic content
    renderExperienceTimeline();
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Function to render experience timeline
function renderExperienceTimeline() {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline || !websiteContent?.experience) return;
    
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const experiences = websiteContent.experience[currentLang]?.items || [];
    
    timeline.innerHTML = '';
    
    experiences.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-period">${exp.period}</div>
                <h3 class="timeline-title">${exp.title}</h3>
                <h4 class="timeline-company">${exp.company}</h4>
                <p class="timeline-description">${exp.description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Initialize content and language system
document.addEventListener('DOMContentLoaded', function() {
    // Initialize translations from content
    initializeTranslations();
    
    // Check if content loaded successfully
    if (!translations) {
        console.error('Failed to initialize website content');
        return;
    }
    
    // Render dynamic content
    renderExperienceTimeline();
    
    // Get saved language preference or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateLanguage(savedLanguage);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
});

// remove menu mobile
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// qualifi
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });

    tab.classList.add("qualification-active");
  });
});

// services box
const boxViews = document.querySelectorAll(".services-box"),
  boxBtns = document.querySelectorAll(".services-button"),
  boxCloses = document.querySelectorAll(".services-box-close");

let box = function (boxClick) {
  boxViews[boxClick].classList.add("active-box");
};

boxBtns.forEach((boxBtn, i) => {
  boxBtn.addEventListener("click", () => {
    box(i);
  });
});

boxCloses.forEach((boxClose) => {
  boxClose.addEventListener("click", () => {
    boxViews.forEach((boxView) => {
      boxView.classList.remove("active-box");
    });
  });
});

//scroll section active link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// change bg header
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//dark light mode------------------
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//swiper
let swiperPortfolio = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiperTestimonial = new Swiper(".testimonial-container", {
  cssMode: true,
  loop: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});
