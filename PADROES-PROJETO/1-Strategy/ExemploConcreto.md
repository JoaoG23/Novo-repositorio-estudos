### Strategy - Um exemplo mais concreto

Está aqui um exemplo mais concreto e mais
próximo do que eu poderia usar concerteza.

```ts
interface StrategyContract {
  execute(): void;
}
// Define the strategies
class Strategy1 implements StrategyContract {
  execute(): void {
    console.log("Executing Strategy 1");
  }
}

class Strategy2 implements StrategyContract {
  execute(): void {
    console.log("Executing Strategy 2");
  }
}

class Strategy3 implements StrategyContract {
  execute(): void {
    console.log("Executing Strategy 3");
  }
}

// Context class that uses a strategy
class Context {
  private strategies: Record<string, any>; // Using 'any' for simplicity
  private currentStrategy?: StrategyContract; // Using 'any' for simplicity

  constructor() {
    this.strategies = {};
    // Initialize the strategy mapping
    this.strategies["strategy1"] = new Strategy1();
    this.strategies["strategy2"] = new Strategy2();
    this.strategies["strategy3"] = new Strategy3();
  }

  setStrategy(strategyKey: string): void {
    // Set the strategy based on the provided key
    this.currentStrategy = this.strategies[strategyKey];
  }

  executeStrategy(): void {
    if (!this.currentStrategy) {
      console.log("No strategy set");
    }
    this.currentStrategy?.execute();
  }
}

// Example usage
const context = new Context();

// Set strategy based on a string
context.setStrategy("strategy2");
context.executeStrategy();
```
