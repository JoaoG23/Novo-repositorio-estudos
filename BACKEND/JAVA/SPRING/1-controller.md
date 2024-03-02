# Algumas Anotações Sobre Controller Spring

- **@RestController** : Seleciona a classe como controller
- **@RequestMapping**("/endpoint") : Adiciona um endpoint ao controller

- **@RequestBody** : Captura dados do body para aplicação (Tipo String)

```java
	@PostMapping
	public void cadastrar(@RequestBody String json){
		System.out.println(json); //retorno { "username": "teste"}
	}
```

### Métodos HTTPs

- **@PostMapping** : Seta a rota como POST
