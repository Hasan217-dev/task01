  // Mobile menu toggle
  const header = document.getElementById('siteHeader');
  const hamburgerBtn = document.getElementById('hamburgerBtn');

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Category tab filtering
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.product-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('show', match);
      });
    });
  });

  // Favorite heart toggle
  const toast = document.getElementById('toast');
  let toastTimer;
  
  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const liked = btn.classList.toggle('liked');
      btn.textContent = liked ? '❤️' : '🤍';
      if (liked) {
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
      }
    });
  });

  // Contact form (UI-only demo)
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toast.textContent = 'Message sent! We\'ll reply soon 🍰';
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
    form.reset();
  });