A decisão entre usar `throw new Error()` e `process.exit(1)` depende do contexto e do propósito do seu código:

1. **throw new Error():**
   - Geralmente usado para lidar com erros dentro de funções ou métodos.
   - Útil quando você quer propagar o erro pela pilha de chamadas para tratamento centralizado de erros.
   - Permite que você capture o erro usando blocos try...catch.
   - Melhor adequado para cenários onde você deseja lidar com erros de forma elegante dentro da lógica do seu aplicativo.

2. **process.exit(1):**
   - Encerra imediatamente o processo Node.js com o código de saída especificado.
   - Útil quando você deseja interromper a execução do aplicativo inteiro devido a um erro crítico.
   - Não oferece a oportunidade de tratamento centralizado de erros, a menos que você ouça o evento `exit` no objeto de processo.
   - Pode ser visto como mais abrupto e menos elegante em comparação com o uso de `throw new Error()`.

No seu caso específico, se a ausência de arquivos é considerada um erro crítico que requer a interrupção do aplicativo inteiro, `process.exit(1)` pode ser mais apropriado. No entanto, se você deseja lidar com esse erro dentro da lógica do seu aplicativo ou se deseja fornecer mais contexto sobre o erro, usar `throw new Error()` poderia ser uma escolha melhor.

Em última análise, a escolha entre os dois métodos depende do design e dos requisitos do seu aplicativo.