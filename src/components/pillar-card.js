class NairaPillar extends HTMLElement {
  connectedCallback() {
    const number = this.getAttribute('number');
    const title = this.getAttribute('title');
    const description = this.getAttribute('description');
    const icon = this.getAttribute('icon');
    const color = this.getAttribute('color') || 'indigo'; // Default to indigo

    this.innerHTML = `
      <div class="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/10">
        <div class="text-${color}-400 text-4xl font-bold mb-2 opacity-50">${number}</div>
        <div class="w-12 h-12 rounded-xl bg-${color}-600/20 border border-${color}-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <i data-feather="${icon}" class="w-6 h-6 text-${color}-400"></i>
        </div>
        <h3 class="text-xl font-display font-bold text-white mb-3">${title}</h3>
        <p class="text-slate-400 text-sm leading-relaxed">${description}</p>
      </div>
    `;
    feather.replace();
  }
}

customElements.define('naira-pillar', NairaPillar);
