
---

### 🧩 **O que é o padrão Decorator?**

O **Decorator** é um **padrão de projeto estrutural** que permite adicionar funcionalidades **de forma flexível e dinâmica** a um objeto **sem alterar sua estrutura original**.

Ele **encapsula** o objeto original dentro de outro objeto (o *decorador*) que adiciona ou modifica o comportamento.

---

### 🔧 **Quando usar o Decorator?**

* Quando você precisa adicionar funcionalidades **opcionais ou combináveis** a objetos.
* Quando **não quer ou não pode alterar a classe original**.
* Quando **herança múltipla não é viável** (ex: você quer várias combinações de comportamentos).

---

### 📦 **Exemplo da vida real (analogia):**

Imagine um **hambúrguer simples**.
Você pode adicionar **queijo, bacon, alface, ovo**, etc.
Cada ingrediente extra **decora** o hambúrguer original.

---

### 🛠️ **Estrutura (em termos de código):**

```python
# 1. Interface comum
class Componente:
    def operacao(self):
        pass

# 2. Componente concreto
class ComponenteConcreto(Componente):
    def operacao(self):
        return "Componente"

# 3. Decorador base (opcional)
class Decorador(Componente):
    def __init__(self, componente):
        self.componente = componente

# 4. Decoradores concretos
class DecoradorA(Componente):
    def __init__(self, componente):
        self.componente = componente

    def operacao(self):
        return f"{self.componente.operacao()} + A"

class DecoradorB(Componente):
    def __init__(self, componente):
        self.componente = componente

    def operacao(self):
        return f"{self.componente.operacao()} + B"
```

### ✅ **Uso:**

```python
obj = ComponenteConcreto()
obj = DecoradorA(obj)
obj = DecoradorB(obj)

print(obj.operacao())  # Saída: "Componente + A + B"
```

---

### 🎯 **Resumo**

| Elemento            | Função                                      |
| ------------------- | ------------------------------------------- |
| Interface base      | Define a estrutura comum                    |
| Componente concreto | Implementa o comportamento principal        |
| Decorador           | Recebe um objeto e adiciona comportamento   |
| Encadeamento        | Decoradores podem ser combinados livremente |

---

Se quiser, posso criar um diagrama simples ou uma analogia visual também. Quer seguir agora para o exercício de notificações?
