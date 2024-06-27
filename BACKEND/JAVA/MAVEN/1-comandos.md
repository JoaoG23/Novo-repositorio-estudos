O Apache Maven é uma poderosa ferramenta de gerenciamento de projetos e compreensão, baseada no conceito de um modelo de objeto de projeto (POM). Aqui estão alguns dos comandos mais comuns e importantes do Maven, usados na linha de comando para gerenciar projetos Java:

### Comandos Básicos do Maven

<!-- 0. **Atualizar depedenciais após mudança no pow**
  ```bash
    mvn clean install
  ``` -->
1. **Compilar o Projeto**
   ```bash
   mvn compile
   ```
   Compila o código fonte do projeto.

2. **Executar os Testes**
   ```bash
   mvn test
   ```
   Executa os testes unitários do projeto.

3. **Criar um Pacote**
   ```bash
   mvn package
   ```
   Compila o código fonte, executa os testes e empacota o projeto em um formato como JAR ou WAR.

4. **Instalar o Pacote no Repositório Local**
   ```bash
   mvn install
   ```
   Instala o pacote no repositório local, que pode ser usado como dependência em outros projetos localmente.

5. **Limpar o Projeto**
   ```bash
   mvn clean
   ```
   Remove os arquivos gerados pela compilação anterior do projeto.

### Comandos Adicionais

6. **Validar o Projeto**
   ```bash
   mvn validate
   ```
   Valida se todas as informações necessárias estão disponíveis no projeto.

7. **Verificar o Projeto**
   ```bash
   mvn verify
   ```
   Executa qualquer checagem de integração e verifica se o pacote é válido e atende aos critérios de qualidade.

8. **Executar o Projeto**
   ```bash
   mvn exec:java -Dexec.mainClass="com.deploy.manager.DeployManagerApplication"
   ```
   ```bash
   mvn spring-boot:run
   ```
   Executa a classe principal especificada.

### Gerenciamento de Dependências

9. **Atualizar as Dependências**
   ```bash
   mvn dependency:resolve
   ```
   Resolve todas as dependências do projeto, baixando os artefatos necessários.

10. **Listar as Dependências**
    ```bash
    mvn dependency:tree
    ```
    Exibe a árvore de dependências do projeto.

### Comandos de Build e Deploy

11. **Gerar o Site do Projeto**
    ```bash
    mvn site
    ```
    Gera um site contendo a documentação do projeto.

12. **Deploy do Projeto**
    ```bash
    mvn deploy
    ```
    Executa todas as etapas do build e implanta o artefato no repositório remoto.

### Outros Comandos Úteis

13. **Executar um Goal Específico**
    ```bash
    mvn <plugin>:<goal>
    ```
    Executa um objetivo específico de um plugin, por exemplo, `mvn clean:clean`.

14. **Verificar a Versão do Maven**
    ```bash
    mvn -v
    ```
    Exibe a versão instalada do Maven.

15. **Executar no Modo Offline**
    ```bash
    mvn <comando> -o
    ```
    Executa o comando no modo offline, sem tentar acessar o repositório remoto.

Estes são alguns dos comandos mais comuns e úteis no Maven. Dependendo das necessidades específicas do seu projeto, você pode explorar outros comandos e plugins que o Maven oferece.