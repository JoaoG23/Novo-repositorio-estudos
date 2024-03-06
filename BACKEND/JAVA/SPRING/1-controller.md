# Algumas Anotações Sobre Controller Spring

- **@RestController** : Seleciona a classe como controller
- **@RequestMapping**("/endpoint") : Adiciona um endpoint ao controller

- **@RequestBody** : Captura dados do body para aplicação (Tipo String ou Classe(Objeto))

Exemplos: Convertendo com String

```java

@PostMapping
public void cadastrar(@RequestBody String json){
		System.out.println(json); //retorno { "username": "teste"}
}
```
Exemplos: Convertendo com objeto(Classe)

```java
@Getter
@Setter
@ToString // para mostrar objeto
class User {

	private String username;
	private String password;
	public User (String username, String password) {
		this.username = username;
		this.password = password;
	}

}

@PostMapping
public void cadastrar(@RequestBody User user){
	System.out.println(user); //User(username=joao, password=joao)

}
```

Não é uma boa pratica enviar direto o atributo da 
requisição por isso se usa-se o DTO;

### Métodos HTTPs

- **@PostMapping** : Seta a rota como POST
