class Templates extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <p>Each section on this page has its own reference tag to the title-section-component.</p>
      <p>HTML</p>
<pre class="language-html rounded"><code>&lt;title-section-component title="Templates"&gt;
&lt;/title-section-component&gt;</code></pre>
      <p>JavaScript</p>
<pre class="language-js rounded"><code>class TitleSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const titleText = this.getAttribute('title') || 'Default Title';
    const titleIcon = this.getAttribute('icon') || '';

    this.innerHTML = \` 
      &lt;div class="hstack pb-2"&gt;
        &lt;div id="title" class="h4"&gt;\${titleText}&lt;/div&gt;
        &lt;span class="iconify rhun-2 ms-auto" data-icon="\${titleIcon}"&gt;&lt;/span&gt;
      &lt;/div&gt;
      &lt;hr /&gt;
    \`;
  }
}
        
customElements.define('title-section-component', TitleSection);</code></pre>
    `;
  }
}

customElements.define('templates-code', Templates);
