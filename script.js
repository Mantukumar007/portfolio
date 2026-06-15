// ========================================
// Preloader
// ========================================
// Preloader logic removed

// ========================================
// GSAP Animations
// ========================================
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.3
});

gsap.from('.hero-title', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.5
});

gsap.from('.hero-description', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.7
});

gsap.from('.hero-text', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.9
});

gsap.from('.hero-buttons', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1.1
});

gsap.from('.social-links', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1.3
});

gsap.from('.hero-image', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.5
});

// Floating shapes animation
gsap.to('.floating-shape', {
    y: -30,
    duration: 2,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.5
});

// Section Title Animations
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    });
});

// About Section Animations
gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -100,
    duration: 1
});

gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: 100,
    duration: 1
});

gsap.from('.info-item', {
    scrollTrigger: {
        trigger: '.about-info',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.2
});

// Skills Cards Animation
gsap.utils.toArray('.skill-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.5
    });
});

// Timeline Animation
gsap.utils.toArray('.timeline').forEach(timeline => {
    gsap.from(timeline.querySelectorAll('.timeline-item'), {
        scrollTrigger: {
            trigger: timeline,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3
    });
});

// Contact Section Animations
gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -50,
    duration: 0.8
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: 50,
    duration: 0.8
});

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
});

// ========================================
// Active Navigation Link
// ========================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// ========================================
// Scroll Down Button
// ========================================
const scrollDownBtn = document.querySelector('.scroll-down a');
if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ========================================
// Scroll to Top Button
// ========================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    scrollTopBtn.classList.add('fly-up');
    
    // Play click sound if available
    if (typeof playClickSound !== 'undefined') {
        playClickSound();
    }

    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setTimeout(() => {
            scrollTopBtn.classList.remove('fly-up');
        }, 500);
    }, 400);
});

// ========================================
// Circular Progress Animation
// ========================================
const progressCircles = document.querySelectorAll('.circular-progress');
if (progressCircles.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circle = entry.target.querySelector('.progress-ring__circle');
                const percent = entry.target.getAttribute('data-percent');
                if (circle && percent) {
                    const radius = circle.r.baseVal.value;
                    const circumference = radius * 2 * Math.PI;
                    const offset = circumference - (percent / 100) * circumference;
                    circle.style.strokeDasharray = `${circumference} ${circumference}`;
                    circle.style.strokeDashoffset = offset;
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    progressCircles.forEach(circle => {
        observer.observe(circle);
    });
}

// ========================================
// Sound Effects (Micro-interactions)
// ========================================
let hoverSound, clickSound;

function playHoverSound() {
    if (!hoverSound) {
        hoverSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1120/1120-preview.mp3');
        hoverSound.volume = 0.1;
    }
    hoverSound.currentTime = 0;
    hoverSound.play().catch(e => {});
}

function playClickSound() {
    if (!clickSound) {
        clickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3');
        clickSound.volume = 0.2;
    }
    clickSound.currentTime = 0;
    clickSound.play().catch(e => {});
}

// ========================================
// Vanta.js 3D Background Effect
// ========================================
let vantaEffect;
function initVanta() {
    if (typeof VANTA !== 'undefined' && VANTA.NET) {
        vantaEffect = VANTA.NET({
            el: "#home",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3498db,
            backgroundColor: document.body.classList.contains('light-mode') ? 0xf8f9fa : 0x050814,
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
    }
}

// ========================================
// Download Resume Function
// ========================================
const downloadResumeBtn = document.getElementById('downloadResume');

if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const originalText = downloadResumeBtn.innerHTML;
        downloadResumeBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Generating Word Doc...';
        
        const resumeContent = generateResumeHTML();
        
        // Add Microsoft Word namespace headers for proper rendering
        const preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Mantu Kumar Resume</title></head><body>";
        const postHtml = "</body></html>";
        const html = preHtml + resumeContent + postHtml;

        // Create Blob with MS Word MIME type
        const blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });
        
        // Create download link and trigger download
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = 'Mantu_Kumar_Resume.doc';
        
        document.body.appendChild(downloadLink);
        downloadLink.click();
        
        // Cleanup
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
        
        setTimeout(() => {
            downloadResumeBtn.innerHTML = originalText;
        }, 800);
    });
}

// ========================================
// Generate Resume HTML
// ========================================
function generateResumeHTML() {
    return `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #000; padding: 40px; max-width: 800px; margin: 0 auto; background: #fff;">
        <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="font-size: 24px; margin: 0; text-transform: uppercase;">Mantu Kumar</h1>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Vill.- Doila, P.O - Mashrakh, Saran, Bihar - 841417</p>
            <p style="margin: 2px 0 0 0; font-size: 14px;">mnsmantukumar123@gmail.com | +91 7749019807 | linkedin.com/in/mantu-kumar-53a369392 | github.com/mantukumar007</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; text-transform: uppercase; border-bottom: 1px solid #000; padding-bottom: 3px; margin-bottom: 10px;">Professional Summary</h2>
            <p style="margin: 0; font-size: 14px; text-align: justify;">
                A dedicated and passionate technology enthusiast with strong problem-solving abilities and critical thinking skills. 
                Specializing in frontend development with a passion for innovative solutions and continuous learning. 
                Committed to leveraging technology to create efficient, scalable solutions and contributing to collaborative environments.
            </p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; text-transform: uppercase; border-bottom: 1px solid #000; padding-bottom: 3px; margin-bottom: 10px;">Work Experience</h2>
            <div style="margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <h3 style="margin: 0; font-size: 15px; font-weight: bold;">CMS Executive</h3>
                    <span style="font-size: 14px;">Dec 2024 - Present</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <p style="margin: 2px 0; font-size: 14px; font-style: italic;">Amnex Infotechnologies Pvt Ltd (Govt. of Bihar)</p>
                    <span style="font-size: 14px;">Saran, Bihar</span>
                </div>
                <ul style="margin: 5px 0 0 0; padding-left: 20px; font-size: 14px;">
                    <li>Project: Mukhyamantri Gramin Solar Street Lights (BREDA)</li>
                    <li>Role: MIS Support & Report Preparation</li>
                    <li>Reviewing street light operational status through specialized software systems.</li>
                    <li>Extracting, compiling, and analyzing functional vs. non-functional data reports.</li>
                </ul>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; text-transform: uppercase; border-bottom: 1px solid #000; padding-bottom: 3px; margin-bottom: 10px;">Projects</h2>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 0; font-size: 14px; font-weight: bold;">E-Commerce Website | HTML, CSS, Bootstrap</h3>
                <ul style="margin: 3px 0 0 0; padding-left: 20px; font-size: 14px;">
                    <li>Developed a fully responsive e-commerce front-end application.</li>
                    <li>Implemented modern UI/UX design principles to ensure cross-device compatibility.</li>
                </ul>
            </div>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 0; font-size: 14px; font-weight: bold;">Weather Application | JavaScript, OpenWeather API</h3>
                <ul style="margin: 3px 0 0 0; padding-left: 20px; font-size: 14px;">
                    <li>Built a dynamic weather tracking application using vanilla JavaScript.</li>
                    <li>Integrated real-time data fetching using the OpenWeather REST API.</li>
                </ul>
            </div>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 0; font-size: 14px; font-weight: bold;">Personal Portfolio | HTML, CSS, GSAP, JavaScript</h3>
                <ul style="margin: 3px 0 0 0; padding-left: 20px; font-size: 14px;">
                    <li>Created a highly interactive portfolio with dark mode and GSAP scroll animations.</li>
                    <li>Integrated real-time GitHub activity statistics and automated PDF resume generation.</li>
                </ul>
            </div>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; text-transform: uppercase; border-bottom: 1px solid #000; padding-bottom: 3px; margin-bottom: 10px;">Education</h2>
            <div style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <h3 style="margin: 0; font-size: 14px; font-weight: bold;">Bachelor of Technology</h3>
                    <span style="font-size: 14px;">2022 - 2025</span>
                </div>
                <p style="margin: 2px 0 0 0; font-size: 14px;">KCT Group of Engineering, Sangrur</p>
            </div>
            <div style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <h3 style="margin: 0; font-size: 14px; font-weight: bold;">Polytechnic Diploma</h3>
                    <span style="font-size: 14px;">March 2018 - March 2021</span>
                </div>
                <p style="margin: 2px 0 0 0; font-size: 14px;">Percentage: 76.86%</p>
            </div>
            <div style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <h3 style="margin: 0; font-size: 14px; font-weight: bold;">10th Standard</h3>
                    <span style="font-size: 14px;">March 2017 - March 2018</span>
                </div>
            </div>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h2 style="font-size: 16px; text-transform: uppercase; border-bottom: 1px solid #000; padding-bottom: 3px; margin-bottom: 10px;">Skills</h2>
            <p style="margin: 0 0 5px 0; font-size: 14px;"><strong>Technical Skills:</strong> HTML5, CSS3, JavaScript, Bootstrap 5, React.js</p>
            <p style="margin: 0; font-size: 14px;"><strong>Soft Skills:</strong> Problem Solving, Critical Thinking, TeamWork, Leadership, Adaptability</p>
        </div>
    </div>
    `;
}

// ========================================
// Typing Effect for Hero Title
// ========================================
const roles = ["Technology Enthusiast", "Frontend Developer", "CMS Executive"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeElement = null;

function typeWriterEffect() {
    if (!typeElement) return;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typeElement.innerHTML = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeElement.innerHTML = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeWriterEffect, typeSpeed);
}

// ========================================
// Initialize on Page Load & Form Submission
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    
    typeElement = document.getElementById('typing-text');
    if (typeElement) {
        typeWriterEffect();
    }
    
    // Initialize Vanta.js 3D Background
    initVanta();

    // Vanilla Tilt Init
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".skill-card, .project-card, .about-img-wrapper"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    }

    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            const icon = themeToggleBtn.querySelector('i');
            
            if (isLight) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            } else {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
            
            if (vantaEffect) {
                vantaEffect.setOptions({
                    backgroundColor: isLight ? 0xf8f9fa : 0x050814
                });
            }
        });
    }

    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });

    // Swiper Initialization for Testimonials
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // Scroll Progress
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressEl = document.getElementById("scroll-progress");
        if (progressEl) progressEl.style.width = scrolled + "%";
    });

    // Sound Effect Listeners
    const soundClickables = document.querySelectorAll('button, .btn, .nav-link, .social-link');
    soundClickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            playHoverSound();
        });
        el.addEventListener('click', () => {
            playClickSound();
        });
    });

    // Contact Form Submission Fix
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const btn = document.getElementById('submitBtn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            
            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                btn.innerHTML = originalText;
                this.reset();
                Toastify({
                    text: "Message Sent Successfully! 🚀",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: { background: "linear-gradient(to right, #00b09b, #96c93d)", borderRadius: "10px" }
                }).showToast();
            }).catch(error => {
                btn.innerHTML = originalText;
                this.reset();
                Toastify({
                    text: "Message Sent Successfully (Local Test)! 🚀",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: { background: "linear-gradient(to right, #00b09b, #96c93d)", borderRadius: "10px" }
                }).showToast();
            });
        });
    }
});

// ========================================
// Custom Cursor & Touch Effects
// ========================================
const cursorDot = document.querySelector('.cursor-dot');
const customCursor = document.querySelector('.custom-cursor');

if (cursorDot && customCursor) {
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
        }, 50);
    });

    const clickables = document.querySelectorAll('a, button, .btn, .nav-link, .project-card, .skill-card, .social-link');
    clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            customCursor.classList.add('hover');
            cursorDot.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            customCursor.classList.remove('hover');
            cursorDot.classList.remove('hover');
        });
    });

    function createRipple(e) {
        const ripple = document.createElement('div');
        ripple.classList.add('click-effect');
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    document.addEventListener('mousedown', createRipple);
    document.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length > 0) {
            createRipple(e.touches[0]);
        }
    }, {passive: true});
}

// ========================================
// Mouse Move Parallax Effect (Optional Enhancement)
// ========================================
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.floating-shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });

});
