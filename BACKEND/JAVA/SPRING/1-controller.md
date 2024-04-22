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


- **Response Entity**

ResponseEntity é uma classe em Java, usada com o Spring Framework, que representa toda a resposta HTTP: código de status, cabeçalhos e corpo12. Isso significa que você pode controlar qualquer coisa que aconteça na resposta HTTP1.

Código de status: Você pode definir o código de status da resposta HTTP. Por exemplo, 200 para OK, 404 para NOT FOUND, etc.

````java
@GetMapping("/hello")
public ResponseEntity<String> hello() {
    return new ResponseEntity<>("Hello World!", HttpStatus.OK);
}

// No meu ponto de vista o resposeEntity é um classe Builder

//  ResponseEntity.ok().body(users);
````
Não exibir dados da aplicação nos erros: 
**application.properties**
````
server.error.include-stacktrace=never
````
server.error.include-stacktrace=never



### RestControllerAdvice


@RestControllerAdvice

- Responsável por toda excessão encontada
pelo controller, ou seja, toda excessão para por aqui.

````java
@RestControllerAdvice
public class HandlerErros {

	@ExceptionHandler(EntityNotFoundException.class)
	public ResponseEntity<?> handle404() {
		return  ResponseEntity.notFound().build();
	}
}

````
@ExceptionHandler(EntityNotFoundException.class) 
Indetifica o notFound:

- ? = Qualquer tipo