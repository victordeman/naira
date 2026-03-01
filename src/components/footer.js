class NairaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-slate-950 py-12 border-t border-white/10">
        <div class="container mx-auto px-6 text-center">
          <p class="text-slate-400 mb-4">© 2026 NBU ARTIFICIAL INTELLIGENCE RESEARCH & ADVANCEMENT INSTITUTE. All rights reserved.</p>
          <div class="flex justify-center gap-6">
            <a href="https://twitter.com" class="text-slate-300 hover:text-white"><i data-feather="twitter" class="w-5 h-5"></i></a>
            <a href="https://linkedin.com" class="text-slate-300 hover:text-white"><i data-feather="linkedin" class="w-5 h-5"></i></a>
            <a href="https://github.com/victordeman/naira" class="text-slate-300 hover:text-white"><i data-feather="github" class="w-5 h-5"></i></a>
          </div>
        </div>
      </footer>
    `;
    feather.replace();
  }
}

customElements.define('naira-footer', NairaFooter);
