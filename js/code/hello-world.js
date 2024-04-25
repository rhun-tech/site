class HelloWorld extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {  
        this.innerHTML = `
        <pre class="language-csharp rounded"><code>using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}</code></pre>
        `;
    }
  }
  
  customElements.define('hello-world-code', HelloWorld);
  