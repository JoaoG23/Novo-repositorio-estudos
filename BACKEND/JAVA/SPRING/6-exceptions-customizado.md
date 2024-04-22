Parece que você quer criar uma validação personalizada no Spring e lançar uma exceção com uma mensagem personalizada. Aqui está como você pode fazer isso:

Primeiro, você pode criar uma exceção personalizada:

```java
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
```

Em seguida, você pode lançar essa exceção em seu método de validação:

```java
private void validateIfUserNotExistsById(Long id) {
    Optional<UserModel> userFound = userRepository.findById(id);
    if (userFound.isEmpty()) {
        throw new UserNotFoundException("User not found with id: " + id);
    }
}
```

Finalmente, você pode lidar com essa exceção em seu manipulador de erros:

```java
@RestControllerAdvice
public class HandlerErros {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<?> handleUserNotFound(UserNotFoundException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }
}
```

Espero que isso ajude! Se você tiver mais perguntas, fique à vontade para perguntar. 😊