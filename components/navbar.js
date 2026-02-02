class NairaNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" class="font-display text-2xl font-bold text-white">NAIRA</a>
          <div class="hidden md:flex gap-6">
            <a href="#hero" class="text-slate-300 hover:text-white transition">Home</a>
            <a href="#vision" class="text-slate-300 hover:text-white transition">Vision</a>
            <a href="#pillars" class="text-slate-300 hover:text-white transition">Pillars</a>
            <a href="#architecture" class="text-slate-300 hover:text-white transition">Architecture</a>
            <a href="#revenue" class="text-slate-300 hover:text-white transition">Revenue</a>
            <a href="#content" class="text-slate-300 hover:text-white transition">Content Model</a>
          </div>
          <!-- Mobile menu button -->
          <button class="md:hidden text-white">
            <i data-feather="menu" class="w-6 h-6"></i>
          </button>
        </div>
      </nav>
    `;
    feather.replace();
    // Add mobile menu toggle logic if needed
  }
}

customElements.define('naira-navbar', NairaNavbar);
