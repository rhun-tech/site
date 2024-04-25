class YARP extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {  
        this.innerHTML = `
        <p>What's neat is loading the routes and clusters definitions from memory using
        <code>LoadFromMemory()</code>
        as opposed to <code>LoadFromConfig()</code>.
      </p>
      <pre class="language-csharp rounded"><code>services.AddReverseProxy()
.LoadFromMemory(routes, clusters)</code></pre>
      <p>Then add your route:</p>
      <pre class="language-csharp rounded"><code>var routeConfig = new RouteConfig
{
    RouteId = "SampleRoute",
    Match = new RouteMatch
    {
        // Host to match
        Hosts = new[] { "example.com" },
        // Path to match
        Path = "/api", 
    },
    // Cluster to forward to
    ClusterId = "SampleCluster", 
};</code></pre>
      <p>Finally add your cluster definition:</p>
      <pre class="language-csharp rounded"><code>var clusterConfig = new ClusterConfig
{
    ClusterId = "SampleCluster",
    Destinations = new Dictionary<string, DestinationConfig>
    {
        // Backend server address
        ["backend1"] = new DestinationConfig { Address = "http://backend1:5000" },
        // Another backend server address
        ["backend2"] = new DestinationConfig { Address = "http://backend2:5000" },
    },
};</code></pre>
      <p>Then you can access your API through the reverse proxy <code>http://example.com/api/{resource}</code>
        where <code>{resource}</code> is your desired endpoint.</code></cod>
      </p>
        `;
    }
  }
  
  customElements.define('yarp-code', YARP);
  