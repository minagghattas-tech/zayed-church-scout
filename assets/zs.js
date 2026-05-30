/* ========================================================================
   ZAYED SCOUT SYSTEM — Shared Auth & Navigation
   Authentication: LocalStorage-based (إيميل + باسورد)
   ======================================================================== */

const ZS = {
  // ===== Storage keys =====
  KEY_AUTH: 'zs_authed',

  // ===== الباسورد المشترك للقادة =====
  // غيّره لو حبيت — ده باسورد واحد لكل القادة.
  SHARED_PASSWORD: 'zayed2026',

  // ===== Init =====
  init() { /* مفيش حاجة تتعمل عند التحميل */ },

  // ===== Auth: login بباسورد واحد =====
  login(password) {
    if ((password || '').trim() === this.SHARED_PASSWORD) {
      try { localStorage.setItem(this.KEY_AUTH, '1'); } catch (e) {}
      return { ok: true };
    }
    return { ok: false, error: 'الباسورد غير صحيح' };
  },

  // ===== هل القائد داخل؟ =====
  isAuthed() {
    try { return localStorage.getItem(this.KEY_AUTH) === '1'; } catch (e) { return false; }
  },

  // ===== Logout =====
  logout() {
    try { localStorage.removeItem(this.KEY_AUTH); } catch (e) {}
    window.location.href = 'index.html';
  },

  // ===== Require login (call on every protected page) =====
  requireAuth() {
    if (!this.isAuthed()) {
      window.location.href = 'index.html';
      return false;
    }
    return true;
  },

  // ===== Render: top nav (call after requireAuth) =====
  renderTopNav(currentPage = '') {
    if (!this.isAuthed()) return '';
    const links = [
      { id: 'dashboard', label: 'الرئيسية', href: 'dashboard.html' },
      { id: 'identity', label: 'الهوية', href: 'identity.html' },
      { id: 'sectors', label: 'القطاعات', href: 'sectors.html' },
      { id: 'calendar', label: 'التقويم', href: 'calendar.html' },
      { id: 'curriculum', label: 'المنهج', href: 'curriculum.html' },
      { id: 'members', label: 'الأولاد', href: 'members.html' },
      { id: 'tracking', label: 'المتابعة', href: 'tracking.html' },
      { id: 'leaders', label: 'القادة', href: 'leaders.html' },
      { id: 'protocols', label: 'البروتوكولات', href: 'protocols.html' }
    ];
    const linksHTML = links.map(l =>
      `<li><a href="${l.href}" class="${l.id === currentPage ? 'active' : ''}">${l.label}</a></li>`
    ).join('');
    return `
      <nav class="topnav">
        <div class="topnav-inner">
          <a class="brand" href="dashboard.html">
            <div class="brand-mark brand-mark--logo">
              <img src="assets/logos/logo_scout.webp" alt="كشافة كنائس زايد">
            </div>
            <div>
              <div class="brand-name">كشافة كنائس زايد</div>
              <div class="brand-sub">ZAYED SCOUT GROUPS</div>
            </div>
          </a>
          <ul class="nav-links">${linksHTML}</ul>
          <div class="user-chip">
            <span>القادة</span>
            <button class="user-chip-logout" onclick="ZS.logout()">خروج</button>
          </div>
        </div>
      </nav>
    `;
  },

  // ===== Render: footer =====
  renderFooter() {
    return `
      <footer class="footer">
        <div class="footer-verse">«لاَ يَغْلِبَنَّكَ الشَّرُّ، بَلِ اغْلِبِ الشَّرَّ بِالْخَيْرِ» — رومية ١٢ : ٢١</div>
        <div>ZAYED SCOUT SYSTEM · SEASON 2026 · © المجموعة الكشفية لكنائس زايد</div>
      </footer>
    `;
  },

  // ===== Mount: standard page chrome =====
  mountChrome(currentPage = '') {
    const top = document.getElementById('topnav-mount');
    const foot = document.getElementById('footer-mount');
    if (top) top.innerHTML = this.renderTopNav(currentPage);
    if (foot) foot.innerHTML = this.renderFooter();
  }
};

ZS.init();
