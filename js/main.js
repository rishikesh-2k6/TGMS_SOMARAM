/**
 * TSMS KAMALAPUR - Main Interactive JavaScript
 * Replicated and Enhanced from tsmskamalapur.weebly.com
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initActiveNavLink();
  initGalleryFilter();
  initLightbox();
  initContactForm();
  updateCurrentYear();
});

/* -------------------------------------------------------------------------
 * 1. Mobile Menu Toggle
 * ------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('show');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* -------------------------------------------------------------------------
 * 2. Active Nav Link Auto-Highlight (Supports Clean URLs on Vercel)
 * ------------------------------------------------------------------------- */
function initActiveNavLink() {
  const rawPath = window.location.pathname.split('/').pop() || 'index.html';
  const currentPath = rawPath === '' ? 'index.html' : rawPath;
  const cleanCurrent = currentPath.replace(/\.html$/, '');
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    const cleanHref = href.replace(/\.html$/, '');
    const parent = link.closest('.nav-item');
    if (parent) {
      if (
        href === currentPath ||
        cleanHref === cleanCurrent ||
        ((cleanCurrent === 'index' || cleanCurrent === '') && (cleanHref === 'index' || href === 'index.html'))
      ) {
        parent.classList.add('active');
      } else {
        parent.classList.remove('active');
      }
    }
  });
}

/* -------------------------------------------------------------------------
 * 3. Photo Gallery Category Filter
 * ------------------------------------------------------------------------- */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length === 0 || galleryItems.length === 0) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------------------
 * 4. Image Lightbox Modal with Next / Prev
 * ------------------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

  if (!lightbox || galleryItems.length === 0) return;

  let currentIndex = 0;

  function showImage(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentIndex = index;

    const item = galleryItems[currentIndex];
    const img = item.querySelector('img');
    const title = item.querySelector('h4') ? item.querySelector('h4').textContent : '';
    const desc = item.querySelector('span') ? item.querySelector('span').textContent : '';

    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Gallery photo';
      lightboxCaption.textContent = title ? `${title} — ${desc}` : desc;
    }
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      lightbox.classList.add('active');
      showImage(index);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showImage(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showImage(currentIndex + 1);
    });
  }

  // Close when clicking overlay backdrop
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') lightbox.classList.remove('active');
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}

/* -------------------------------------------------------------------------
 * 5. Contact Form Validation & Feedback
 * ------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('schoolContactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('#senderName').value.trim();
      const email = contactForm.querySelector('#senderEmail').value.trim();
      const message = contactForm.querySelector('#senderMessage').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all mandatory fields before sending your message.');
        return;
      }

      // Display pleasant simulated success message
      formFeedback.innerHTML = `
        <strong>Thank you, ${name}!</strong><br>
        Your message has been recorded successfully. The Principal's administrative office at TSMS Kamalapur will review and respond to <em>${email}</em> promptly.
      `;
      formFeedback.className = 'form-feedback success';

      contactForm.reset();

      setTimeout(() => {
        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    });
  }
}

/* -------------------------------------------------------------------------
 * 6. Dynamic Year in Footer
 * ------------------------------------------------------------------------- */
function updateCurrentYear() {
  const yearSpans = document.querySelectorAll('.current-year');
  const now = new Date().getFullYear();
  yearSpans.forEach((span) => {
    span.textContent = now;
  });
}

