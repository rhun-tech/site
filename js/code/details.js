class Details extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {  
        this.innerHTML = `
        <p>Have you ever felt late to a party? The details tag allows user to expand and collapse content. Add an
        <code>open</code> attribute to the details tag have the content automatically expanded.
      </p>
      <p>Html</p>
      <div class="pb-2">
        <pre class="language-html rounded">
<code>&lt;details class="p-3"&gt;
    &lt;summary class="rhun-text-tertiary"&gt;Currently Reading&lt;/summary&gt;
        &lt;div class="p-3"&gt;
            &lt;p&gt;Gardens of the Moon by Steven Erikson&lt;/p&gt;
        &lt;/div&gt;
&lt;/details&gt;</code></pre>
      </div>
      <p>Example</p>
      <details class="p-3">
        <summary class="rhun-text-tertiary">Currently Reading</summary>
        <div class="p-3">
          <p>Gardens of the Moon by Steven Erikson</p>
        </div>
      </details>
        `;
    }
  }
  
  customElements.define('details-code', Details);
  