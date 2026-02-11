/* ==========================================================================
   GoToMontreal.com — Main JavaScript
   Scroll animations, FAQ accordion, Mobile menu, Navigation effects
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- DOM Ready ---------- */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNavScroll();
    initMobileMenu();
    initSmoothScroll();
    initRevealAnimations();
    initFaqAccordion();
    initDirectionLines();
  }

  /* ---------- Navigation Scroll Effect ---------- */
  function initNavScroll() {
    var nav = document.getElementById('nav');
    if (!nav) return;

    var scrolled = false;

    function checkScroll() {
      var shouldScroll = window.scrollY > 60;
      if (shouldScroll !== scrolled) {
        scrolled = shouldScroll;
        nav.classList.toggle('nav--scrolled', scrolled);
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  /* ---------- Mobile Menu ---------- */
  function initMobileMenu() {
    var toggle = document.querySelector('.nav__toggle');
    var mobile = document.querySelector('.nav__mobile');
    if (!toggle || !mobile) return;

    var isOpen = false;

    toggle.addEventListener('click', function () {
      isOpen = !isOpen;
      toggle.classList.toggle('active', isOpen);
      mobile.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    var links = mobile.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        isOpen = false;
        toggle.classList.remove('active');
        mobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) {
        isOpen = false;
        toggle.classList.remove('active');
        mobile.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        var navHeight = document.getElementById('nav')
          ? document.getElementById('nav').offsetHeight
          : 0;
        var targetPosition =
          target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      });
    });
  }

  /* ---------- Scroll Reveal Animations ---------- */
  function initRevealAnimations() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveals.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- FAQ Accordion ---------- */
  function initFaqAccordion() {
    var items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(function (item) {
      var question = item.querySelector('.faq-item__question');
      if (!question) return;

      question.addEventListener('click', function () {
        var isActive = item.classList.contains('active');

        // Close all items
        items.forEach(function (otherItem) {
          otherItem.classList.remove('active');
        });

        // Open clicked item (toggle behavior)
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  /* ---------- Hundred Directions Line Animation ---------- */
  function initDirectionLines() {
    var svg = document.querySelector('.directions__svg');
    if (!svg) return;

    var lines = svg.querySelectorAll('.direction-line');
    if (!lines.length) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lines.forEach(function (line) {
        line.style.strokeDashoffset = '0';
        line.style.opacity = '0.5';
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            lines.forEach(function (line, i) {
              setTimeout(function () {
                line.classList.add('animate');
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(svg);
  }
})();
