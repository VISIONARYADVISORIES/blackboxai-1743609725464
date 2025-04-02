// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.querySelector('.md\\:hidden');
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu hidden md:hidden fixed inset-0 bg-[#0A192F] z-40 p-6 transition-all duration-300';
  mobileMenu.innerHTML = `
    <div class="flex justify-end">
      <button class="text-white text-3xl close-menu">×</button>
    </div>
    <nav class="flex flex-col space-y-6 mt-8 text-white text-xl">
      <a href="#" class="hover:text-blue-300 transition">Home</a>
      <a href="#" class="hover:text-blue-300 transition">About</a>
      <a href="#" class="hover:text-blue-300 transition">Services</a>
      <a href="#" class="hover:text-blue-300 transition">Testimonials</a>
      <a href="#" class="hover:text-blue-300 transition">Contact</a>
    </nav>
  `;
  document.body.appendChild(mobileMenu);

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
  });

  mobileMenu.querySelector('.close-menu').addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Testimonial carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.testimonial-dot');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('hidden', i !== index);
  });
  testimonialDots.forEach((dot, i) => {
    dot.classList.toggle('bg-blue-600', i === index);
    dot.classList.toggle('bg-gray-300', i !== index);
  });
}

// Initialize first testimonial
if (testimonials.length > 0) {
  showTestimonial(0);
  
  // Auto-rotate testimonials every 5 seconds
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);
}

// Form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    // Simple validation
    let isValid = true;
    document.querySelectorAll('.input-field').forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('border-red-500');
        isValid = false;
      } else {
        field.classList.remove('border-red-500');
      }
    });

    if (isValid) {
      // Form submission logic would go here
      alert('Thank you! Your message has been sent.');
      contactForm.reset();
    }
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});