class Encapsulation extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {  
        this.innerHTML = `
<div class="pb-2">        
  <p>Encapsulation refers to the bundling of data (attributes) and methods (functions) that operate on the data into a single unit called a class. Encapsulation helps in hiding the internal state of an object from the outside world and only exposing the necessary functionalities, thus promoting data abstraction and security.</p>
</div>
<div class="pb-4">
<p>The <code>Weapon</code> class encapsulates the properties of a medieval weapon, such as its name and damage.</p>
<pre class="language-csharp rounded"><code>public class Weapon
{
    private string name;
    private int damage;

    public Weapon(string name, int damage)
    {
        this.name = name;
        this.damage = damage;
    }

    public string GetName()
    {
        return name;
    }

    public int GetDamage()
    {
        return damage;
    }

    // Method to attack with the weapon
    public void Attack()
    {
        Console.WriteLine($"Attacking with {name} - Damage: {damage}");
    }
}</code></pre>
</div>

<div class="pb-4">
<p>The <code>Knight</code> class represents a knight character who can wield a weapon. The <code>Knight</code> class has a method <code>EquipWeapon</code> to change the weapon being wielded.</p>
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
        Console.WriteLine($"{name} has equipped {newWeapon.GetName()}!");
    }
}</code></pre> 
</div>

<div class="pb-4">
<p>The internal details of the <code>Weapon</code> and <code>Knight</code> classes are hidden from outside classes, and interactions with their data are done through defined methods, demonstrating encapsulation.</p>
<pre class="language-csharp rounded"><code>class Program
{
    static void Main()
    {
        // Creating weapons
        Weapon sword = new Weapon("Sword", 20);
        Weapon axe = new Weapon("Axe", 25);

        // Creating a knight
        Knight knight = new Knight("Sir Lancelot", sword);

        // Knight attacks with initial weapon
        knight.Attack();

        // Knight equips a new weapon
        knight.EquipWeapon(axe);

        // Knight attacks with the new weapon
        knight.Attack();
    }
}</code></pre>
</div>
        `;
    }
  }
  
  customElements.define('encapsulation-code', Encapsulation);
  