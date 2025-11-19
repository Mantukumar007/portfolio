// ========================================
// Preloader
// ========================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

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
gsap.from('.skill-card', {
    scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.1
});

// Timeline Animation
gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.3
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
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

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
// Contact Form Submission
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send the data to a server
    // Example:
    // fetch('your-api-endpoint', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    // });
});

// ========================================
// Download Resume Function
// ========================================
const downloadResumeBtn = document.getElementById('downloadResume');

downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create resume content
    const resumeContent = generateResumeHTML();
    
    // Convert HTML to PDF using window.print() method
    // This opens the print dialog where user can save as PDF
    const printWindow = window.open('', '', 'height=800,width=800');
    printWindow.document.write(resumeContent);
    printWindow.document.close();
    printWindow.focus();
    
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 250);
});

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
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            padding: 40px;
            max-width: 850px;
            margin: 0 auto;
        }
        
        .resume-header {
            text-align: center;
            border-bottom: 3px solid #3498db;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        
        .resume-header h1 {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .resume-header p {
            font-size: 1.1rem;
            color: #7f8c8d;
            margin: 5px 0;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 15px;
            flex-wrap: wrap;
        }
        
        .contact-info span {
            font-size: 0.9rem;
        }
        
        .section {
            margin-bottom: 30px;
        }
        
        .section-title {
            font-size: 1.5rem;
            color: #3498db;
            border-bottom: 2px solid #3498db;
            padding-bottom: 5px;
            margin-bottom: 15px;
            text-transform: uppercase;
        }
        
        .profile-text {
            text-align: justify;
            margin-bottom: 20px;
            line-height: 1.8;
        }
        
        .education-item {
            margin-bottom: 20px;
            padding-left: 20px;
            border-left: 3px solid #3498db;
        }
        
        .education-item h3 {
            font-size: 1.2rem;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        
        .education-item .institution {
            color: #7f8c8d;
            font-style: italic;
            margin-bottom: 5px;
        }
        
        .education-item .duration {
            color: #95a5a6;
            font-size: 0.9rem;
            margin-bottom: 5px;
        }
        
        .education-item .percentage {
            color: #27ae60;
            font-weight: bold;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        
        .skill-item {
            padding: 10px;
            background: #ecf0f1;
            border-radius: 5px;
            display: flex;
            align-items: center;
        }
        
        .skill-item::before {
            content: "▪";
            color: #3498db;
            font-size: 1.5rem;
            margin-right: 10px;
        }
        
        .additional-info ul {
            list-style: none;
            padding-left: 20px;
        }
        
        .additional-info li {
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
        }
        
        .additional-info li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #27ae60;
            font-weight: bold;
        }
        
        @media print {
            body {
                padding: 20px;
            }
            
            .resume-header h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="resume-header">
        <h1>MANTU KUMAR</h1>
        <p>Technology Enthusiast & Problem Solver</p>
        <div class="contact-info">
            <span>📧 mnsmantukumar123@gmail.com</span>
            <span>📱 +91 7749019807</span>
            <span>📍 Mashrakh, Saran, Bihar - 841417</span>
        </div>
    </div>
    
    <div class="section">
        <h2 class="section-title">Profile</h2>
        <p class="profile-text">
            A dedicated and passionate technology enthusiast with strong problem-solving abilities and critical thinking skills. 
            Currently pursuing Bachelor of Technology with specialization in innovative learning and practical application of 
            engineering principles. Committed to continuous learning and leveraging technology to create innovative solutions. 
            Active participant in co-curricular activities with proven teamwork and leadership capabilities.
        </p>
    </div>
    
    <div class="section">
        <h2 class="section-title">Education</h2>
        
        <div class="education-item">
            <h3>Bachelor of Technology</h3>
            <p class="institution">KCT Group of Engineering, Sangrur</p>
            <p class="duration">July 2021 - July 2025</p>
            <p class="percentage">Currently Pursuing - Specialization in Technology</p>
        </div>
        
        <div class="education-item">
            <h3>Polytechnic Diploma</h3>
            <p class="duration">March 2018 - March 2021</p>
            <p class="percentage">Percentage: 76.86%</p>
        </div>
        
        <div class="education-item">
            <h3>10th Standard</h3>
            <p class="duration">March 2017 - March 2018</p>
            <p class="percentage">Percentage: 52.40%</p>
        </div>
    </div>
    
    <div class="section">
        <h2 class="section-title">Skills</h2>
        <div class="skills-grid">
            <div class="skill-item">Problem Solving</div>
            <div class="skill-item">Critical Thinking</div>
            <div class="skill-item">Multitasking</div>
            <div class="skill-item">Active Listening</div>
            <div class="skill-item">TeamWork</div>
            <div class="skill-item">Leadership</div>
            <div class="skill-item">Management</div>
            <div class="skill-item">Adaptability</div>
        </div>
    </div>
    
    <div class="section">
        <h2 class="section-title">Additional Information</h2>
        <div class="additional-info">
            <ul>
                <li>Participated in intercollege co-curricular activities</li>
                <li>Active involvement in regular college activities and events</li>
                <li>Strong communication skills in Hindi and English</li>
                <li>Demonstrated leadership qualities through various college initiatives</li>
            </ul>
        </div>
    </div>
    
    <div class="section">
        <h2 class="section-title">Languages</h2>
        <p>Hindi, English</p>
    </div>
</body>
</html>
    `;
}

// ========================================
// Typing Effect for Hero Title (Optional)
// ========================================
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

// ========================================
// Initialize on Page Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Add any additional initialization code here
    console.log('Portfolio loaded successfully!');
});

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