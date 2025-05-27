 **Tipo Abstrato de Dados**.

### 📌 O que é um TAD?

Um **Tipo Abstrato de Dados (TAD)** é um modelo que define um **conjunto de dados** e as **operações permitidas sobre esses dados**, **sem se preocupar com a implementação interna**. Ou seja, o TAD descreve **o que** a estrutura de dados faz, e não **como** ela faz.

---

### 🔧 Exemplo simples: TAD Pilha (Stack)

Um TAD **Pilha** pode ser definido pelas seguintes operações:

* `empilhar(dado)` (push): adiciona um item no topo da pilha.
* `desempilhar()` (pop): remove o item do topo da pilha.
* `topo()` (peek): consulta o item no topo da pilha sem removê-lo.
* `estáVazia()` (isEmpty): verifica se a pilha está vazia.

O importante: essas operações são **especificadas na interface** do TAD, mas **não dizem como são implementadas**. A pilha pode ser implementada com um **vetor (array)**, uma **lista encadeada**, ou até outras estruturas, e isso fica oculto para quem usa o TAD.

---

### 🧠 Por que usar TADs?

* **Encapsulamento**: separa o "o que faz" do "como faz".
* **Modularidade**: facilita a manutenção e o entendimento do código.
* **Reutilização**: permite reaproveitar TADs em diferentes programas sem saber sua implementação interna.
* **Facilidade de teste**: operações bem definidas permitem testes mais claros.


