# Repository JPA

- Crie um repository.
- Extenda todas as funcões do Jpa.
- Adicione a entidade que será extendida Ex: (UserModel)
- O tipo do Indentificador dele. Ex: (Long) = Tipo do Id

Exemplo de model:

```java
public class UserModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; // Tipo do Id

	private String username;
	private String password;
	private String full_name;
}
```

- Todas a funções especiais. Ex: findByUserName(String username).
```java

public class UserRepository extends JpaRepository<UserModel, Long> {
    findByUserName(String username) // Adicione aqui
}

```