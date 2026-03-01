## Introdução

Geralmente as LLL tem contexto limitados de informações
Exemplo: 
```
LLM X -> alimentada com dados de 2020 a 2023 
ao pergunta - Qual a previsão do tempo para hoje?
LLM X -> retorna -> Que não sabe ou fala uma previsão errada
```

## Solução
Usar um LLM para alimentar outro LLM
Ou mais chamado de Tools

Exemplo:
LLM X -> alimentada com dados de 2020 a 2023 
Tools -> especializada em previsão do tempo

Quando LLM X pergunta para Tools sobre a previsão do tempo para hoje?
Tools -> retorna -> a previsão do tempo para hoje -> LLM X -> retorna para usuário

MCP -> Model Context Protocol   

MCP -> tem varias tools