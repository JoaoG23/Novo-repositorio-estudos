The `super` it refers to construct of Parent class and
get all her construtor attributes.

1. To call the parent class constructor.
2. To call the parent class method.
3. To access the parent class variable.

Here's a simple example to demonstrate the use of `super` in Java:

```java
// Parent class
class Animal {
    String name;

    // Parent class constructor
    Animal(String name) {
        this.name = name;
    }

    // Parent class method
    void displayInfo() {
        System.out.println("Animal Name: " + name);
    }
}

// Child class
class Dog extends Animal {
    String breed;

    // Child class constructor
    Dog(String name, String breed) {
        super(name); // Call to parent class constructor
        this.breed = breed;
    }

    // Child class method
    void displayInfo() {
        super.displayInfo(); // Call to parent class method
        System.out.println("Dog Breed: " + breed);
    }
}

// Main class to test the code
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy", "Golden Retriever");
        dog.displayInfo();
    }
}
```

### Explanation:
1. **Calling the Parent Class Constructor:**
   - In the `Dog` class constructor, `super(name)` is used to call the constructor of the parent class `Animal`, passing the `name` parameter.

2. **Calling the Parent Class Method:**
   - In the `Dog` class, the `displayInfo()` method calls `super.displayInfo()` to invoke the `displayInfo()` method of the parent class `Animal`.

When you run the `Main` class, the output will be:
```
Animal Name: Buddy
Dog Breed: Golden Retriever
```

