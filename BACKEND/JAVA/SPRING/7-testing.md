## Libs 

#### 1. JUnit

* Fornece ambiente de execução e testes unitários.
* Framework

#### 2. Mockito

* Lib fornece ferramenta para escrita de mockes.
* Mocks dentro de teste

#### 3. Com Spring Spring-boot-start-test

Contém as duas libs:

 - Mockito
 - JUnit


### Onde ficam os tests

    /test

### Anotations

@DataJpaTest = Indica para spring que esse e banco de dados de teste
@ActiveProfiles("test") = Indica qual o variaveis de ambiente para h2 banco de testes