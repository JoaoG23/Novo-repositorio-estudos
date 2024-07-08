
```java
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
    
    public void fetch() {
        System.out.println("Dog fetches a ball");
    }
}

public class Main {
    public static void main(String[] args) {
        // Upcasting: Dog to Animal
        Animal myAnimal = new Dog();
        
        myAnimal.makeSound(); // Output: Dog barks
        
        if (myAnimal instanceof Dog) {
            System.out.println();
        }
     
     // Downcast
        Dog myDog = (Dog) myAnimal;
      
        myDog.makeSound(); // Output: Dog barks
        myDog.fetch(); // Output: Dog fetches a ball
        
    }
}

public class Main {
    public static void main(String[] args) {
       	int numeroInteiros = 1;
		Object numeroString = numeroInteiros;
		System.out.println(numeroString);


    }
}
```