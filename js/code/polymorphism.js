class Polymorphism  extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {  
        this.innerHTML = `
<div class="pb-2">        
  <p>Polymorphism means "many forms" and refers to the ability of objects to respond in different ways to the same message or method invocation. In C#, polymorphism is achieved through method overriding (in the case of inheritance) and method overloading. Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass, while method overloading allows multiple methods with the same name but different parameter lists to coexist within the same class.</p>
</div>
<div class="pb-4">
<p>The <code>Weapon</code> class encapsulates the properties of a medieval weapon, such as its name and damage.</p>
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
}</code></pre>
</div>

<div class="pb-4">
<p>Each weapon class (<code>Sword, Axe, Bow</code>) overrides the <code>Attack</code> method with its specific behavior.</p>
<pre class="language-csharp rounded"><code>public class Sword : Weapon
{
    public Sword() : base("Sword", 20)
    {
    }

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

    public override void Attack()
    {
        base.Attack();
        Console.WriteLine("Swinging the axe!");
    }
}

public class Bow : Weapon
{
    public Bow() : base("Bow", 15)
    {
    }

    public override void Attack()
    {
        base.Attack();
        Console.WriteLine("Shooting arrows with the bow!");
    }
}</code></pre>
</div>

<div class="pb-4">
<p>The <code>Knight</code> class has a method called <code>SpecialAttack</code>, which accepts a <code>Weapon</code> object. Inside this method, we call the <code>Attack</code> method of the passed <code>Weapon</code> object. This method demonstrates polymorphism because the actual behavior depends on the type of weapon passed to it.</p>
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
        Console.WriteLine($"{name} has equipped {weapon.name}!");
    }

    // Method demonstrating polymorphism
    public void SpecialAttack(Weapon specialWeapon)
    {
        Console.WriteLine($"{name} is performing a special attack!");
        specialWeapon.Attack(); // Polymorphism: The actual behavior depends on the type of the weapon passed
    }
}</code></pre>
</div>

<div class="pb-4">
<p>When the <code>SpecialAttack</code> method is invoked with different types of weapons, it will behave differently based on the overridden <code>Attack</code> method in each weapon class, showcasing polymorphism in action.</p>
<pre class="language-csharp rounded"><code>class Program
{
    static void Main()
    {
        Sword sword = new Sword();
        Axe axe = new Axe();
        Bow bow = new Bow();

        Knight knight = new Knight("Sir Lancelot", sword);

        knight.Attack();
        knight.EquipWeapon(axe);
        knight.Attack();
        
        knight.SpecialAttack(bow); // Demonstrating polymorphism by passing different types of weapons
    }
}</code></pre>
</div>
        `;
    }
  }
  
  customElements.define('polymorphism-code', Polymorphism);
  