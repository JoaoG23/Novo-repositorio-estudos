### Assinatura

Mesma quantidade de parametros e o mesmo tipo deles também

A assinatura em polimorfismo se refere à identificação de um método. No contexto da programação orientada a objetos, o polimorfismo permite que classes derivadas de uma única classe base possam invocar métodos que, embora apresentem a mesma assinatura, comportam-se de maneira diferente para cada uma das classes derivadas¹.

Por exemplo, considere uma classe base chamada `Pessoa` e duas classes derivadas chamadas `Vendedor` e `Diretor`. Ambas as classes derivadas podem ter um método chamado `CalcularVendas`. Se este método (definido na classe base) se comportar de maneira diferente para as chamadas feitas a partir de uma instância de `Vendedor` e para as chamadas feitas a partir de uma instância de `Diretor`, ele será considerado um método polimórfico¹.

Aqui está um exemplo de como isso pode ser implementado:

```java
// Classe base
public class Pessoa {
    public double CalcularVendas() {
        double valorUnitario = Double.MIN_VALUE;
        double produtosVendidos = Double.MIN_VALUE;
        return valorUnitario * produtosVendidos;
    }
}

// Classe derivada: Vendedor
public class Vendedor extends Pessoa {
    @Override
    public double CalcularVendas() {
        double valorUnitario = 50;
        double produtosVendidos = 1500;
        return valorUnitario * produtosVendidos;
    }
}

// Classe derivada: Diretor
public class Diretor extends Pessoa {
    @Override
    public double CalcularVendas() {
        double valorUnitario = 150;
        double produtosVendidos = 3800;
        double taxaAdicional = 100;
        return taxaAdicional + (valorUnitario * produtosVendidos);
    }
}
```

Neste exemplo, o método `CalcularVendas` tem a mesma assinatura em todas as classes, mas o comportamento é diferente em cada classe¹.


## Assinaturas diferentes 
```java
public class Exemplo {
    // Método com uma assinatura - nenhum parâmetro
    public void mostrar() {
        System.out.println("Método sem parâmetros");
    }

    // Método com uma assinatura diferente - um parâmetro do tipo int
    public void mostrar(int a) {
        System.out.println("Método com um parâmetro: " + a);
    }

    // Método com uma assinatura diferente - dois parâmetros do tipo int
    public void mostrar(int a, int b) {
        System.out.println("Método com dois parâmetros: " + a + ", " + b);
    }
}
```

Neste exemplo, todos os três métodos têm o mesmo nome (`mostrar`), mas assinaturas diferentes. A assinatura de um método inclui o nome do método e os tipos de seus parâmetros. Portanto, mesmo que o nome do método seja o mesmo, os métodos são considerados diferentes se tiverem um número diferente de parâmetros ou tipos de parâmetros diferentes.