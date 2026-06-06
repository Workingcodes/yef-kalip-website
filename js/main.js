// YEF KALIP - Main JS

// === LANGUAGE ===
const translations = {
  tr: {
    nav_home: 'Ana Sayfa',
    nav_about: 'Hakkımızda',
    nav_services: 'Hizmetler',
    nav_gallery: 'Galeri',
    nav_contact: 'İletişim',
    hero_badge: 'Ümraniye, İstanbul',
    hero_title: 'Plastik Enjeksiyon<br><span>Kalıp İmalatı</span>',
    hero_desc: 'Yüksek hassasiyetli plastik enjeksiyon kalıpları, CNC işleme ve endüstriyel çözümler. Kaliteli üretimde güvenilir çözüm ortağınız.',
    hero_btn1: 'Hizmetlerimiz',
    hero_btn2: 'İletişime Geç',
    stats_exp: "Yıllık Deneyim",
    stats_proj: "Tamamlanan Proje",
    stats_qual: "Kalite Standardı",
    stats_client: "Müşteri Memnuniyeti",
    about_label: 'Hakkımızda',
    about_title: 'Kalıpçılıkta Güvenilir Çözüm Ortağınız',
    about_desc1: 'YEF KALIP, İstanbul Ümraniye\'de plastik enjeksiyon kalıp imalatı alanında faaliyet gösteren, deneyimli kadrosuyla sektörüne değer katan bir firmadır.',
    about_desc2: 'Müşterilerimizin ihtiyaçlarına özel çözümler üretir, yüksek hassasiyet ve kalite standartlarını her projemizde ön planda tutarız.',
    about_badge_num: '10+',
    about_badge_text: 'Yıllık Deneyim',
    feat1_t: 'Hızlı Teslimat',
    feat1_d: 'Zamanında teslim garantisi',
    feat2_t: 'Kalite Kontrol',
    feat2_d: 'Her ürün titizlikle kontrol edilir',
    feat3_t: '7/24 Destek',
    feat3_d: 'Kesintisiz müşteri hizmeti',
    feat4_t: 'Uygun Fiyat',
    feat4_d: 'Rekabetçi fiyat politikası',
    serv_label: 'Hizmetler',
    serv_title: 'Sunduğumuz Hizmetler',
    serv_desc: 'Plastik enjeksiyon kalıpçılığı alanında kapsamlı hizmet yelpazesi ile yanınızdayız.',
    svc1_t: 'Plastik Enjeksiyon Kalıbı',
    svc1_d: 'Yüksek hassasiyetli plastik enjeksiyon kalıpları tasarlıyor ve imalatını yapıyoruz.',
    svc2_t: 'CNC İşleme',
    svc2_d: 'Modern CNC tezgahlarımızla hassas işleme hizmetleri sunuyoruz.',
    svc3_t: 'Kalıp Tasarımı',
    svc3_d: 'CAD/CAM teknolojileriyle müşteri odaklı kalıp tasarımı gerçekleştiriyoruz.',
    svc4_t: 'Prototip Üretim',
    svc4_d: 'Seri üretim öncesi prototip ve test kalıpları hazırlıyoruz.',
    svc5_t: 'Bakım & Onarım',
    svc5_d: 'Mevcut kalıplarınızın bakım, onarım ve revizyon hizmetlerini veriyoruz.',
    svc6_t: 'Fason Üretim',
    svc6_d: 'İhtiyacınıza özel fason plastik parça üretimi yapıyoruz.',
    gallery_label: 'Galeri',
    gallery_title: 'Çalışmalarımızdan',
    gallery_desc: 'İstanbul\'un merkezinde ürettiğimiz kaliteli kalıplar ve projelerden seçmeler.',
    cta_title: 'Projeniz İçin Teklif Alın',
    cta_desc: 'Plastik enjeksiyon kalıp ihtiyaçlarınız için hemen bizimle iletişime geçin.',
    cta_btn: 'İletişime Geç',
    contact_label: 'İletişim',
    contact_title: 'Bize Ulaşın',
    contact_phone: 'Telefon',
    contact_address: 'Adres',
    contact_social: 'Sosyal Medya',
    form_name: 'Adınız Soyadınız',
    form_phone: 'Telefon Numaranız',
    form_email: 'E-posta Adresiniz',
    form_subject: 'Konu',
    form_message: 'Mesajınız',
    form_send: 'Mesaj Gönder',
    footer_desc: 'Ümraniye İstanbul\'da plastik enjeksiyon kalıp imalatı ve CNC işleme alanında hizmet veriyoruz.',
    footer_quick: 'Hızlı Bağlantılar',
    footer_services: 'Hizmetler',
    footer_contact_title: 'İletişim',
    footer_copy: '© 2025 YEF KALIP. Tüm hakları saklıdır.',
    footer_designed: 'Designed by',
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    hero_badge: 'Ümraniye, Istanbul',
    hero_title: 'Plastic Injection<br><span>Mold Manufacturing</span>',
    hero_desc: 'High-precision plastic injection molds, CNC machining and industrial solutions. Your reliable solution partner in quality manufacturing.',
    hero_btn1: 'Our Services',
    hero_btn2: 'Contact Us',
    stats_exp: "Years Experience",
    stats_proj: "Completed Projects",
    stats_qual: "Quality Standard",
    stats_client: "Customer Satisfaction",
    about_label: 'About Us',
    about_title: 'Your Trusted Partner in Mold Manufacturing',
    about_desc1: 'YEF KALIP is a company operating in Ümraniye, Istanbul in the field of plastic injection mold manufacturing, adding value to its industry with its experienced team.',
    about_desc2: 'We produce custom solutions for our customers\' needs and keep high precision and quality standards at the forefront in every project.',
    about_badge_num: '10+',
    about_badge_text: 'Years Experience',
    feat1_t: 'Fast Delivery',
    feat1_d: 'On-time delivery guarantee',
    feat2_t: 'Quality Control',
    feat2_d: 'Every product carefully inspected',
    feat3_t: '24/7 Support',
    feat3_d: 'Uninterrupted customer service',
    feat4_t: 'Competitive Price',
    feat4_d: 'Competitive pricing policy',
    serv_label: 'Services',
    serv_title: 'Our Services',
    serv_desc: 'We are with you with a comprehensive range of services in the field of plastic injection molding.',
    svc1_t: 'Plastic Injection Mold',
    svc1_d: 'We design and manufacture high-precision plastic injection molds.',
    svc2_t: 'CNC Machining',
    svc2_d: 'We provide precision machining services with our modern CNC machines.',
    svc3_t: 'Mold Design',
    svc3_d: 'We carry out customer-oriented mold design with CAD/CAM technologies.',
    svc4_t: 'Prototype Production',
    svc4_d: 'We prepare prototype and test molds before mass production.',
    svc5_t: 'Maintenance & Repair',
    svc5_d: 'We provide maintenance, repair and revision services for your existing molds.',
    svc6_t: 'Contract Manufacturing',
    svc6_d: 'We produce custom plastic parts to your specifications.',
    gallery_label: 'Gallery',
    gallery_title: 'From Our Work',
    gallery_desc: 'Selected quality molds and projects produced in the heart of Istanbul.',
    cta_title: 'Get a Quote for Your Project',
    cta_desc: 'Contact us right away for your plastic injection mold needs.',
    cta_btn: 'Contact Us',
    contact_label: 'Contact',
    contact_title: 'Get in Touch',
    contact_phone: 'Phone',
    contact_address: 'Address',
    contact_social: 'Social Media',
    form_name: 'Full Name',
    form_phone: 'Phone Number',
    form_email: 'Email Address',
    form_subject: 'Subject',
    form_message: 'Your Message',
    form_send: 'Send Message',
    footer_desc: 'We provide plastic injection mold manufacturing and CNC machining services in Ümraniye Istanbul.',
    footer_quick: 'Quick Links',
    footer_services: 'Services',
    footer_contact_title: 'Contact',
    footer_copy: '© 2025 YEF KALIP. All rights reserved.',
    footer_designed: 'Designed by',
  }
};

let currentLang = localStorage.getItem('lang') || 'tr';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// === HAMBURGER ===
function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

// === LIGHTBOX ===
function initLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('[data-lightbox]').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img')?.src || item.getAttribute('data-src');
      if (src) {
        lightboxImg.src = src;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stat-card, .service-card, .gallery-item, .service-page-card, .value-card, .gallery-page-item').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
}

// Add fade-up CSS
const style = document.createElement('style');
style.textContent = `
  .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);

// === ACTIVE NAV ===
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// === COUNTER ANIMATION ===
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        let current = 0;
        const step = target / 40;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.round(current) + suffix;
        }, 40);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// === CONTACT FORM ===
function initForm() {
  const form = document.querySelector('.contact-form-el');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = '✓ Gönderildi!';
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = translations[currentLang].form_send;
      form.reset();
    }, 3000);
  });
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLightbox();
  initScrollAnimations();
  setActiveNav();
  animateCounters();
  initForm();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  applyLang(currentLang);
});
