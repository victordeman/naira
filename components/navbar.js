class NairaNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" class="font-display text-2xl font-bold text-white">NAIRA</a>
          
          <!-- Desktop menu -->
          <div class="hidden md:flex gap-6">
            <a href="#hero" class="text-slate-300 hover:text-white transition">Home</a>
            <a href="#vision" class="text-slate-300 hover:text-white transition">Vision</a>
            <a href="#pillars" class="text-slate-300 hover:text-white transition">Pillars</a>
            <a href="#architecture" class="text-slate-300 hover:text-white transition">Architecture</a>
            <a href="#revenue" class="text-slate-300 hover:text-white transition">Revenue</a>
            <a href="#content" class="text-slate-300 hover:text-white transition">Content Model</a>
          </div>

          <!-- Hamburger button -->
          <button id="mobile-menu-btn" class="md:hidden text-white focus:outline-none">
            <i data-feather="menu" class="w-6 h-6"></i>
          </button>
        </div>

        <!-- Mobile menu (hidden by default) -->
        <div id="mobile-menu" class="hidden md:hidden bg-slate-900/95 border-b border-white/10">
          <div class="container mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#hero" class="text-slate-300 hover:text-white transition py-2">Home</a>
            <a href="#vision" class="text-slate-300 hover:text-white transition py-2">Vision</a>
            <a href="#pillars" class="text-slate-300 hover:text-white transition py-2">Pillars</a>
            <a href="#architecture" class="text-slate-300 hover:text-white transition py-2">Architecture</a>
            <a href="#revenue" class="text-slate-300 hover:text-white transition py-2">Revenue</a>
            <a href="#content" class="text-slate-300 hover:text-white transition py-2">Content Model</a>
          </div>
        </div>
      </nav>
    `;

    feather.replace();

    // Mobile menu toggle
    const btn = this.querySelector('#mobile-menu-btn');
    const menu = this.querySelector('#mobile-menu');

    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        // Optional: change icon to X when open
        const icon = btn.querySelector('i');
        if (menu.classList.contains('hidden')) {
          icon.setAttribute('data-feather', 'menu');
        } else {
          icon.setAttribute('data-feather', 'x');
        }
        feather.replace();
      });
    }
  }
}

customElements.define('naira-navbar', NairaNavbar);
