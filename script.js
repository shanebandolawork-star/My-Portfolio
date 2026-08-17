
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.12});
  revealEls.forEach(el=>io.observe(el));

  // ---------- sample work sliders ----------
  function initGallery(id){
    const el = document.getElementById('swiper-' + id);
    if(!el || typeof Swiper === 'undefined') return;
    new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 450,
      watchOverflow: true,
      a11y: true,
      keyboard: { enabled: true, onlyInViewport: true },
      navigation: {
        nextEl: '#' + id + '-next',
        prevEl: '#' + id + '-prev'
      },
      pagination: {
        el: '#' + id + '-pagination',
        clickable: true
      },
      breakpoints: {
        620:  { slidesPerView: 1.3, spaceBetween: 18 },
        860:  { slidesPerView: 2,   spaceBetween: 20 },
        1120: { slidesPerView: 2.4, spaceBetween: 22 }
      }
    });
  }
  ['sheet', 'tools', 'workspace'].forEach(initGallery);


 