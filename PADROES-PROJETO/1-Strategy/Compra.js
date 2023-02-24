class PagamentoCartaoCredito {
  // Typescript Inplement interface

  pagar(valor) {
    console.log("Pagamento Cartao Credito", valor);
  }
}

class PagamentoCartaoDebito {
  // Typescript Inplement interface

  pagar(valor) {
    console.log("Pagamento Cartao DEBITO", valor);
  }
}


class Compra {
  constructor(valor) {
      this.valor = valor;
    }
    
    processarPagamento(estrategiaPagamento) {
    // Adicionar interface de contrato
    estrategiaPagamento.pagar(this.valor);
  }
}




class Strategy {


    /// Estrategia -----------------
    // Comparar 1 com 1 if retorn
   static main() {

        let valor = 100
        const compra = new Compra(valor)
        compra.processarPagamento(new PagamentoCartaoDebito())
    }

}

Strategy.main()





// ESTRATEGIAS ---------------
// Estrategia = Concreta
