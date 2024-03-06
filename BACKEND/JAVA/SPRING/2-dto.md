## DTO - Design Pattern

Quando temos um sistema ele recebe requisições e extrair novas informações de acordo que foi enviado.

Supondo que voce quer buscar um cadastro de um funcionário

- há varios campos desnecessários ou que você não quer exibir para o funcionário.


DTO é uma forma de você encapsular esses dados do funcionário em um classe e retorna apenas alguns campos.

- Estrutural

```json
{
	"username": "joao",
	"password": "joao",
	"nome":" Joaozinho",
}
```
Com Dto : A classe apenas extrair `username` e `password`

```java
class UserDTO {
	private String username;
	private String password;
	private String nome;
	public UserDTO (String username, String password) {
		this.username = username;
		this.password = password;
	}
}
```

Podemos usar na versão 16 o records para criar DTOs:

Características sobre records

1. Imutáveis (Uma vez instanciado não há setters para altera o valor)
2. Pode Criar Métodos dentro dele.
3. Pode Criar Atributos estaticos e Metodo.


```java
public record UserDTO(String username, String password, String full_name) {

	public void print() {

	}
}

```
O que ele resolve

- Problema de segurança por ele permite lhe mostrar apenas aquilo que voce quer;




https://javabahia.github.io/falando-sobre-dto/