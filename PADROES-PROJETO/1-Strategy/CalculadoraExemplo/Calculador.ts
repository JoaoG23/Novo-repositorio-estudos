interface Operation {
  execute(a: number, b: number): number;
}

/// --------- Criar Duas funções

class Addition implements Operation {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class Subtraction implements Operation {
  execute(a: number, b: number): number {
    return a - b;
  }
}


/// ------------ Pega a operação e realizar ela
class Calculator {
  private operation: Operation;

  setOperation(operation: Operation) {
    this.operation = operation;
  }

  executeOperation(a: number, b: number): number {
    return this.operation.execute(a, b);
  }
}

const calculator = new Calculator();

// Definir a estratégia para adição
calculator.setOperation(new Addition());
const result = calculator.executeOperation(2, 3); // retorna 5

// Definir a estratégia para subtração
calculator.setOperation(new Subtraction());
const result = calculator.executeOperation(5, 3); // retorna 2
