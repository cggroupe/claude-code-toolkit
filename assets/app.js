// Claude Code Toolkit — interactivity (sidebar inject + copy buttons + nav highlight)

async function injectSidebar() {
  const placeholder = document.getElementById('sidebar-placeholder');
  if (!placeholder) return;
  try {
    const res = await fetch('assets/sidebar.html');
    const html = await res.text();
    placeholder.outerHTML = html;
  } catch (e) {
    console.error('Sidebar inject failed', e);
  }
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
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 1600);
      });
    });
  });
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

document.addEventListener('DOMContentLoaded', async () => {
  await injectSidebar();
  highlightNav();
  setupCopyButtons();
});
