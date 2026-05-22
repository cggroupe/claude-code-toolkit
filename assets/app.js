// Claude Code Toolkit v3 — interactions

async function injectSidebar() {
  const placeholder = document.getElementById('sidebar-placeholder');
  if (!placeholder) return;
  try {
    const res = await fetch('assets/sidebar.html');
    const html = await res.text();
    placeholder.outerHTML = html;
  } catch (e) { console.error('Sidebar inject failed', e); }
}

function highlightNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function setupCopyButtons() {
  document.querySelectorAll('.snippet').forEach(snippet => {
    const btn = snippet.querySelector('.copy-btn');
    const body = snippet.querySelector('.snippet-body');
    if (!btn || !body) return;
    btn.addEventListener('click', () => {
      const text = body.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copié !';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 1600);
      });
    });
  });

  document.querySelectorAll('.install-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = btn.closest('.install-row');
      if (!row) return;
      const cmd = row.querySelector('.install-cmd');
      if (!cmd) return;
      const text = cmd.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = '✓ Copié';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 1600);
      });
    });
  });
}

function setupCategoryPills() {
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', e => {
      e.preventDefault();
      const cat = pill.dataset.cat;
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      document.querySelectorAll('.skill-tile').forEach(tile => {
        if (cat === 'all' || tile.dataset.cat === cat) {
          tile.style.display = '';
        } else {
          tile.style.display = 'none';
        }
      });
    });
  });
}

function setupAccordions() {
  document.querySelectorAll('.accordion-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const acc = toggle.closest('.accordion');
      acc.classList.toggle('open');
    });
  });
}

function setupRevealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', async () => {
  await injectSidebar();
  highlightNav();
  setupCopyButtons();
  setupCategoryPills();
  setupAccordions();
  setupRevealOnScroll();
});
