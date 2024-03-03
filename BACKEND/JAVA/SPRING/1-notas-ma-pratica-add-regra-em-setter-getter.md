Adicionar validações de regras de negócio em métodos setter pode ser uma prática aceitável em alguns casos, mas geralmente não é considerado uma boa prática no desenvolvimento com Java/Spring. Aqui estão algumas razões:

1. **Separação de Responsabilidades**: Em geral, é uma boa prática manter a lógica de negócios separada da lógica de acesso aos dados. Os métodos setter são normalmente usados para manipulação de estado do objeto, e adicionar lógica de negócios a eles pode tornar o código mais difícil de manter e testar.

2. **Transparência**: Métodos setter são geralmente esperados para serem operações simples que não falham. Se você colocar lógica de negócios que pode lançar exceções em um setter, isso pode ser inesperado para outros desenvolvedores que usam sua classe.

3. **Testabilidade**: Se a lógica de negócios estiver em um setter, pode ser mais difícil de testar isoladamente.

Em vez disso, você pode considerar o uso de métodos de serviço ou de domínio para encapsular regras de negócios. Estes podem ser testados separadamente e podem tornar o código mais modular e fácil de entender. Além disso, frameworks como o Spring oferecem validação declarativa através de anotações, que podem ser uma maneira mais limpa de implementar certas regras de negócios.

Lembre-se, estas são apenas diretrizes gerais e existem exceções. A decisão final deve ser baseada nas necessidades específicas do seu projeto e equipe.

Exemplo de regra em setter:


```java
public class ContaBanco {
    public int numConta;
    private float saldo;
    private boolean status;         
    
    public void setSaldo( float valorSacado ){

          if( this.status == false ) {
              System.out.println("Conta fechada: Nao e possivel sacar");
              return;
          }

          if( valorSacado >  this.saldo ) {
              System.out.println("Saldo requirido: Insuficiente na conta. Tente um valor a mesmo");
              return;
          }
              this.saldo = this.saldo - valorSacado;

    }
}
```
