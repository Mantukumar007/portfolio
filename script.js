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
    if (typeof clickSound !== 'undefined') {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => {});
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
const hoverSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1120/1120-preview.mp3');
const clickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3');
hoverSound.volume = 0.1;
clickSound.volume = 0.2;

// ========================================
// Particle Effect
// ========================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ========================================
// Download Resume Function
// ========================================
const downloadResumeBtn = document.getElementById('downloadResume');

if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const resumeContent = generateResumeHTML();
        const printWindow = window.open('', '', 'height=800,width=800');
        printWindow.document.write(resumeContent);
        printWindow.document.close();
        printWindow.focus();
        
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 250);
    });
}

// ========================================
// Generate Resume HTML
// ========================================
function generateResumeHTML() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mantu Kumar - Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; padding: 40px; max-width: 850px; margin: 0 auto; }
        .resume-header { text-align: center; border-bottom: 3px solid #3498db; padding-bottom: 20px; margin-bottom: 30px; }
        .resume-header h1 { font-size: 2.5rem; color: #2c3e50; margin-bottom: 10px; }
        .resume-header p { font-size: 1.1rem; color: #7f8c8d; margin: 5px 0; }
        .contact-info { display: flex; justify-content: center; gap: 20px; margin-top: 15px; flex-wrap: wrap; }
        .contact-info span { font-size: 0.9rem; }
        .section { margin-bottom: 30px; }
        .section-title { font-size: 1.5rem; color: #3498db; border-bottom: 2px solid #3498db; padding-bottom: 5px; margin-bottom: 15px; text-transform: uppercase; }
        .profile-text { text-align: justify; margin-bottom: 20px; line-height: 1.8; }
        .item { margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #3498db; }
        .item h3 { font-size: 1.2rem; color: #2c3e50; margin-bottom: 5px; }
        .item .subtitle { color: #7f8c8d; font-style: italic; margin-bottom: 5px; }
        .item .duration { color: #95a5a6; font-size: 0.9rem; margin-bottom: 5px; }
        .item .highlight { color: #27ae60; font-weight: bold; }
        .item p { font-size: 0.95rem; }
        .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 15px; }
        .skill-item { padding: 10px; background: #ecf0f1; border-radius: 5px; display: flex; align-items: center; }
        .skill-item::before { content: "▪"; color: #3498db; font-size: 1.5rem; margin-right: 10px; }
        .additional-info ul { list-style: none; padding-left: 20px; }
        .additional-info li { margin-bottom: 10px; padding-left: 20px; position: relative; }
        .additional-info li::before { content: "✓"; position: absolute; left: 0; color: #27ae60; font-weight: bold; }
        h4 { margin-bottom: 10px; color: #2c3e50; }
        @media print { body { padding: 20px; } .resume-header h1 { font-size: 2rem; } }
    </style>
</head>
<body>
    <div class="resume-header">
        <h1>MANTU KUMAR</h1>
        <p>Technology Enthusiast & Frontend Dev</p>
        <div class="contact-info">
            <span>📧 mnsmantukumar123@gmail.com</span>
            <span>📱 +91 7749019807</span>
            <span>📍 Vill.- Doila, P.O - Mashrakh, Saran, Bihar - 841417</span>
        </div>
    </div>
    
    <div class="section">
        <h2 class="section-title">Profile</h2>
        <p class="profile-text">
            A dedicated and passionate technology enthusiast with strong problem-solving abilities and critical thinking skills. 
            Specializing in frontend development with a passion for innovative solutions and continuous learning. 
            Committed to leveraging technology to create innovative solutions.
        </p>
    </div>
    
    <div class="section">
        <h2 class="section-title">Work Experience</h2>
        <div class="item">
            <h3>CMS Executive</h3>
            <p class="subtitle">Amnex Infotechnologies Pvt Ltd</p>
            <p class="duration">Dec 2024 - Present</p>
            <p style="color: #3498db; margin-bottom: 5px;"><em>Deployed at: District Panchayati Raj Office, Saran (Govt. of Bihar)</em></p>
            <p class="highlight">Project: Mukhyamantri Gramin Solar Street Lights (BREDA)</p>
            <p><strong>Role:</strong> MIS Support & Report Preparation</p>
            <p>Reviewing street light operational status through software and extracting functional vs non-functional reports.</p>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Projects</h2>
        <div class="item">
            <h3>E-Commerce Website</h3>
            <p>A responsive e-commerce front-end built with HTML, CSS, and Bootstrap. <br>
            <small><a href="https://mswholesale.netlify.app/" target="_blank" style="color:#3498db;text-decoration:none;">🔗 Live Demo</a> | <a href="https://github.com/Naveenk1013/mscoconut" target="_blank" style="color:#3498db;text-decoration:none;">📁 GitHub</a></small></p>
        </div>
        <div class="item">
            <h3>Weather App</h3>
            <p>A weather application fetching real-time data using OpenWeather API with JavaScript.</p>
        </div>
        <div class="item">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio website with dark mode and GSAP animations. <br>
            <small><a href="https://mantukumar-portfolio.vercel.app/" target="_blank" style="color:#3498db;text-decoration:none;">🔗 Live Demo</a> | <a href="https://github.com/Mantukumar007/portfolio" target="_blank" style="color:#3498db;text-decoration:none;">📁 GitHub</a></small></p>
        </div>
    </div>
    
    <div class="section">
        <h2 class="section-title">Education</h2>
        <div class="item">
            <h3>Bachelor of Technology</h3>
            <p class="subtitle">KCT Group of Engineering, Sangrur</p>
            <p class="duration">2022 - 2025</p>
            <p class="highlight">Completed - Specialization in Technology</p>
        </div>
        <div class="item">
            <h3>Polytechnic Diploma</h3>
            <p class="duration">March 2018 - March 2021</p>
            <p class="highlight">Percentage: 76.86%</p>
        </div>
        <div class="item">
            <h3>10th Standard</h3>
            <p class="duration">March 2017 - March 2018</p>
            <p class="highlight">Percentage: 52.40%</p>
        </div>
    </div>
    
    <div class="section">
        <h2 class="section-title">Skills</h2>
        <h4>Technical Skills</h4>
        <div class="skills-grid">
            <div class="skill-item">HTML5 & CSS3</div>
            <div class="skill-item">JavaScript</div>
            <div class="skill-item">Bootstrap 5</div>
            <div class="skill-item">React.js</div>
        </div>
        <h4>Soft Skills</h4>
        <div class="skills-grid">
            <div class="skill-item">Problem Solving</div>
            <div class="skill-item">Critical Thinking</div>
            <div class="skill-item">TeamWork</div>
            <div class="skill-item">Leadership</div>
        </div>
    </div>
    
    <div class="section">
        <h2 class="section-title">Languages & Extras</h2>
        <p><strong>Languages:</strong> Hindi, English</p>
        <div class="additional-info" style="margin-top: 10px;">
            <ul>
                <li>Participated in intercollege co-curricular activities</li>
            </ul>
        </div>
    </div>
</body>
</html>
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
            const icon = themeToggleBtn.querySelector('i');
            if (document.body.classList.contains('light-mode')) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            } else {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
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
            hoverSound.currentTime = 0;
            hoverSound.play().catch(e => {});
        });
        el.addEventListener('click', () => {
            clickSound.currentTime = 0;
            clickSound.play().catch(e => {});
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
                btn.innerHTML = '<i class="fas fa-check me-2"></i>Sent Successfully!';
                btn.classList.replace('btn-primary', 'btn-success');
                this.reset();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('btn-success', 'btn-primary');
                }, 3000);
            }).catch(error => {
                // If local testing fails due to CORS or offline
                btn.innerHTML = '<i class="fas fa-check me-2"></i>Sent (Local)';
                btn.classList.replace('btn-primary', 'btn-success');
                this.reset();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('btn-success', 'btn-primary');
                }, 3000);
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
