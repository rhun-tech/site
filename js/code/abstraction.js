class Abstraction  extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {  
        this.innerHTML = `
<div class="pb-2">        
  <p>Abstraction is the process of hiding the complex implementation details and showing only the essential features of the object. It allows programmers to focus on what an object does rather than how it does it. In C#, abstraction is often achieved through abstract classes and interfaces. Abstract classes cannot be instantiated and may contain abstract methods, while interfaces define a contract that classes can implement, specifying a set of methods and properties that they must provide.</p>
</div>
<div class="pb-4">
<p>We'll create an abstract class called <code>Weapon</code>, which will define a method <code>Attack()</code>. Each specific weapon type (<code>Sword, Axe, Bow</code>) will implement this method according to its own behavior. This way, the <code>Knight</code> class can interact with weapons through the <code>Weapon</code> interface without needing to know the internal details of each weapon type.</p>
<p>We define an abstract class <code>Weapon</code> with a method <code>Attack()</code>. This method serves as the common interface for all weapons but lacks an implementation.</p>
<pre class="language-csharp rounded"><code>// Abstract class defining the common interface for all weapons
public abstract class Weapon
{
    protected string name;
    protected int damage;

    public Weapon(string name, int damage)
    {
        this.name = name;
        this.damage = damage;
    }

    // Abstract method representing the attack action
    public abstract void Attack();

    public string GetName()
    {
        return name;
    }
}</code></pre>
</div>

<div class="pb-4">
<p>Concrete weapon classes (<code>Sword, Axe, Bow</code>) extend the Weapon class and provide their specific implementations of the <code>Attack()</code> method.</p>
<pre class="language-csharp rounded"><code>// Concrete implementation of Sword
public class Sword : Weapon
{
    public Sword() : base("Sword", 20)
    {
    }

    public override void Attack()
    {
        Console.WriteLine($"Swinging the sword! - Damage: {damage}");
    }
}

// Concrete implementation of Axe
public class Axe : Weapon
{
    public Axe() : base("Axe", 25)
    {
    }

    public override void Attack()
    {
        Console.WriteLine($"Swinging the axe! - Damage: {damage}");
    }
}

// Concrete implementation of Bow
public class Bow : Weapon
{
    public Bow() : base("Bow", 15)
    {
    }

    public override void Attack()
    {
        Console.WriteLine($"Shooting arrows with the bow! - Damage: {damage}");
    }
}</code></pre>
</div>

<div class="pb-4">
<p>The <code>Knight</code> class interacts with weapons through the <code>Weapon</code> interface, calling the <code>Attack()</code> method without knowing the specific details of each weapon's implementation. This demonstrates abstraction, where the complex internal details of each weapon are hidden behind a simple interface.</p>
<pre class="language-csharp rounded"><code>// Knight class interacting with weapons through abstraction
public class Knight
{
    private string name;
    private Weapon weapon;

    public Knight(string name, Weapon weapon)
    {
        this.name = name;
        this.weapon = weapon;
    }

    // Method to perform an attack using the current weapon
    public void Attack()
    {
        Console.WriteLine($"{name} is attacking with {weapon.GetName()}!");
        weapon.Attack(); // Abstraction: Knight interacts with weapons through the common Weapon interface
    }

    // Method to change the equipped weapon
    public void EquipWeapon(Weapon newWeapon)
    {
        weapon = newWeapon;
        Console.WriteLine($"{name} has equipped {weapon.GetName()}!");
    }
}</code></pre>
</div>

<div class="pb-4">
<p>Abstraction in action.</p>
<pre class="language-csharp rounded"><code>class Program
{
    static void Main()
    {
        // Creating different types of weapons
        Sword sword = new Sword();
        Axe axe = new Axe();
        Bow bow = new Bow();

        // Creating a knight with a sword
        Knight knight = new Knight("Sir Lancelot", sword);

        // Knight attacks with the sword
        knight.Attack();

        // Knight equips an axe
        knight.EquipWeapon(axe);

        // Knight attacks with the axe
        knight.Attack();

        // Knight equips a bow
        knight.EquipWeapon(bow);

        // Knight attacks with the bow
        knight.Attack();
    }
}</code></pre>
</div>
        `;
    }
  }
  
  customElements.define('abstraction-code', Abstraction);
  