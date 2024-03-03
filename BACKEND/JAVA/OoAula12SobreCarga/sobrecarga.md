**2. Sobreposição (Overriding):**
A sobreposição ocorre quando uma subclasse fornece uma implementação específica de um método que já é fornecido por sua superclasse¹⁴. 

Por exemplo:
```java
public class Animal {
    public void fazerSom() {
        System.out.println("O animal faz um som");
    }
}

public class Cachorro extends Animal {
    @Override
    public void fazerSom() {
        System.out.println("O cachorro late");
    }
}
```
Neste exemplo, o método `fazerSom` é sobrescrito na classe `Cachorro`. Embora o método tenha o mesmo nome e parâmetros na superclasse `Animal`, a classe `Cachorro` fornece sua própria implementação do método.

Espero que isso ajude a esclarecer a diferença entre sobrecarga e sobreposição em Java! Se você tiver mais perguntas, fique à vontade para perguntar.

**1. Sobrecarga (Overloading):**
A sobrecarga ocorre quando dois ou mais métodos na mesma classe têm o mesmo nome, mas parâmetros diferentes. Isso permite que você use o mesmo nome de método para diferentes ações que são realizadas de maneira ligeiramente diferente, dependendo dos parâmetros fornecidos¹⁴.

Por exemplo:
```java
public class Calculadora {
    public int somar(int a, int b) {
        return a + b;
    }

    public double somar(double a, double b) {
        return a + b;
    }
}
```
Neste exemplo, o método `somar` está sobrecarregado. Embora ambos os métodos tenham o mesmo nome, eles aceitam diferentes tipos de parâmetros.

