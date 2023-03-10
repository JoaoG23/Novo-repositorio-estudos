## Padrão ADAPTER OU WRAPPER

Adapter tem a função envelopar 1 ou mais métodos
de uma classe de terceiro possibilitando a mais 
facil utilização do metodo.

`````js

interface Target {
  request(): void;
  checkingClient(): void;
}

class Client {
  public makeRequest(target: Target) {
    target.request();
    target.checkingClient();
  }
}



`````

Digamos que esteja usando um SDK ou algo de terceiro


`````js

class Adaptee {
  public specificRequest(): void {
    console.log('Adaptee: specificRequest');
  }
}



`````

Dessa forma, você pode usar a classe Adaptee com a classe Client sem precisar modificar a classe Client. O padrão Adapter permite que você adapte uma classe existente para uma interface esperada por outra classe, tornando seu código mais modular e extensível.


`````js

class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  public request(): void {
    console.log('Adapter: request');
    this.adaptee.specificRequest();
  }
}




const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
const client = new Client();

client.makeRequest(adapter);


`````