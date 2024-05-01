class Inheritance extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {  
        this.innerHTML = `
<div class="pb-2">        
  <p>Inheritance is a mechanism that allows a class to inherit properties and behavior (methods) from another class. This promotes code reusability and establishes a hierarchical relationship among classes. In C#, classes can inherit from a single base class, but they can implement multiple interfaces, achieving a similar effect through interface inheritance.</p>
</div>
<div class="pb-4">
<p>The <code>Weapon</code> class serves as the base class for all medieval weapons, containing common properties and behaviors.</p>
<pre class="language-csharp rounded"><code>public class Weapon
{
    protected string name;
    protected int damage;

    public Weapon(string name, int damage)
    {
        this.name = name;
        this.damage = damage;
    }

    public virtual void Attack()
    {
        Console.WriteLine($"Attacking with {name} - Damage: {damage}");
    }

    public string GetName()
    {
        return name;
    }    
}</code></pre>
</div>

<div class="pb-4">
<p>The <code>Sword and Axe</code> classes inherit from the <code>Weapon</code> class, inheriting its properties and behaviors. They also provide their specific implementation of the <code>Attack</code> method.</p>
<pre class="language-csharp rounded"><code>public class Sword : Weapon
{
    public Sword() : base("Sword", 20)
    {
    }

    // Optionally, you can override the Attack method for a specific behavior
    public override void Attack()
    {
        base.Attack();
        Console.WriteLine("Swinging the sword!");
    }
}

public class Axe : Weapon
{
    public Axe() : base("Axe", 25)
    {
    }

    // Optionally, you can override the Attack method for a specific behavior
    public override void Attack()
    {
        base.Attack();
        Console.WriteLine("Swinging the axe!");
    }
}</code></pre>
</div>

<div class="pb-4">
<p>The <code>Knight</code> class remains unchanged from our Encapsulation example, but now it can use any weapon that inherits from the Weapon class, demonstrating inheritance.</p>
<pre class="language-csharp rounded"><code>public class Knight
{
    private string name;
    private Weapon weapon;

    public Knight(string name, Weapon weapon)
    {
        this.name = name;
        this.weapon = weapon;
    }

    public void Attack()
    {
        Console.WriteLine($"{name} is attacking!");
        weapon.Attack();
    }

    public void EquipWeapon(Weapon newWeapon)
    {
        weapon = newWeapon;
        Console.WriteLine($"{name} has equipped {weapon.GetName()}!");
    }    
}</code></pre>
</div>

<div class="pb-4">
<p>Here is Sir Lancelot inheriting from the <code>Weapon</code> class.</p>
<pre class="language-csharp rounded"><code>class Program
{
    static void Main()
    {
        // Creating different types of weapons
        Sword sword = new Sword();
        Axe axe = new Axe();

        // Creating a knight with a sword
        Knight knight = new Knight("Sir Lancelot", sword);

        // Knight attacks with the sword
        knight.Attack();

        // Knight equips an axe
        knight.EquipWeapon(axe);

        // Knight attacks with the axe
        knight.Attack();
    }
}</code></pre>
</div>
        `;
    }
  }
  
  customElements.define('inheritance-code', Inheritance);
  