class VisitorPattern extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {  
        this.innerHTML = `
<div class="pb-4">
  <p>The Visitor Pattern is a behavioral design pattern that allows you to separate algorithms from the objects on which they operate.</p>
</div>

<div class="pb-4">        
  <p><code>IWeaponVisitor</code> defines a set of <code>Visit</code> methods corresponding to each type of weapon.</p>
<pre class="language-csharp rounded"><code>// Interface for the visitor
public interface IWeaponVisitor
{
    void VisitSword(Sword sword);
    void VisitAxe(Axe axe);
    void VisitSpear(Spear spear);
}</code></pre>
</div>

<div class="pb-4">
  <p><code>Weapon</code> is the abstract base class for all medieval weapons <code>(Sword, Axe, Spear)</code>.</p>
<pre class="language-csharp rounded"><code>// Abstract class for the medieval weapon
public abstract class Weapon
{
    public abstract void Accept(IWeaponVisitor visitor);
}</code></pre>
</div>

<div class="pb-4"> 
  <p>Each concrete weapon <code>(Sword, Axe, Spear)</code> implements the <code>Accept</code> method defined in the <code>Weapon</code> class, allowing a visitor <code>(IWeaponVisitor)</code> to operate on it.</p>
<pre class="language-csharp rounded"><code>// Concrete implementation of a Sword
public class Sword : Weapon
{
    public override void Accept(IWeaponVisitor visitor)
    {
        visitor.VisitSword(this);
    }
}

// Concrete implementation of an Axe
public class Axe : Weapon
{
    public override void Accept(IWeaponVisitor visitor)
    {
        visitor.VisitAxe(this);
    }
}

// Concrete implementation of a Spear
public class Spear : Weapon
{
    public override void Accept(IWeaponVisitor visitor)
    {
        visitor.VisitSpear(this);
    }
}</code></pre>
</div>

<div class="pb-4"> 
  <p><code>Blacksmith</code> is a concrete implementation of <code>IWeaponVisitor</code>, which defines specific actions <code>(VisitSword, VisitAxe, VisitSpear)</code> that can be performed on each weapon.</p>
<pre class="language-csharp rounded"><code>// Concrete implementation of a visitor - Blacksmith
public class Blacksmith : IWeaponVisitor
{
    public void VisitSword(Sword sword)
    {
        Console.WriteLine("Sharpening the sword.");
    }

    public void VisitAxe(Axe axe)
    {
        Console.WriteLine("Adding a new handle to the axe.");
    }

    public void VisitSpear(Spear spear)
    {
        Console.WriteLine("Polishing the spearhead.");
    }
}</code></pre>
</div>

<div class="pb-4"> 
  <p>In the <code>Main</code> method of <code>Program</code>, we create instances of <code>Sword, Axe, Spear,</code> and <code>Blacksmith</code>. We then apply the <code>Blacksmith</code> visitor to each weapon using the <code>Accept</code> method, triggering the appropriate visit method for each weapon type.</p>
<pre class="language-csharp rounded"><code>// Client code to demonstrate the Visitor pattern
public class Program
{
    public static void Main(string[] args)
    {
        // Create some medieval weapons
        var sword = new Sword();
        var axe = new Axe();
        var spear = new Spear();

        // Create a blacksmith (visitor)
        var blacksmith = new Blacksmith();

        // Apply the visitor (blacksmith) to each weapon
        sword.Accept(blacksmith);
        axe.Accept(blacksmith);
        spear.Accept(blacksmith);
    }
}</code></pre>
</div>

<div> 
  <p>This setup demonstrates the Visitor Pattern by allowing the Blacksmith (visitor) to perform specific actions on different types of medieval weapons without modifying the weapon classes themselves.</p>
</div>
        `;
    }
  }
  
  customElements.define('visitor-pattern-code', VisitorPattern);
  