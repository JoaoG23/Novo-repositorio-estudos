# Roadmap de IA: Embeddings, Distância Euclidiana, RAG

## 1. Fundamentos de Inteligência Artificial

- Conceitos básicos: aprendizado supervisionado, não supervisionado, reforço.
- Algoritmos clássicos: regressão, classificação, clustering.
- Redes neurais artificiais (perceptron, feedforward, CNNs, RNNs).

## 2. Embeddings

- Definição: Representações vetoriais de dados.
- Técnicas de embeddings: Word2Vec, GloVe, BERT.
- Aplicações: Representação de palavras, documentos, imagens.
- Bibliotecas: `gensim`, `scikit-learn`, `tensorflow`.

## 3. Distância Euclidiana

- Definição: Medida de distância entre vetores.
- Comparação com outras distâncias: Manhattan, cosseno.
- Aplicações: Busca de similaridade, agrupamento.
- Ferramentas: `numpy`, `scipy`.

## 4. RAG (Retrieval Augmented Generation)

- Conceito: Combinação de busca em documentos com geração de texto.
- Fluxo: (1) Busca de dados relevantes; (2) Uso das informações encontradas para gerar respostas.
- Aplicações: Assistentes, chatbots, sistemas de FAQ avançados.
- Frameworks: `Haystack`, `LangChain`, `OpenAI API`.

## 5. Álgebra Linear e Cálculo

- Vetores e matrizes: operações, produto, decomposições.
- Gradiente e derivadas: para otimização em redes neurais.
- Probabilidade: distribuições, variáveis aleatórias.

## 6. Frameworks e Ferramentas

- TensorFlow e PyTorch: Construção e treinamento de modelos.
- FAISS, Pinecone: Bancos de dados vetoriais para busca eficiente.
- LangChain, Haystack: Pipelines para construção de sistemas de RAG.

## 7. Deploy de Modelos de IA

- Diferenças em relação a deploy tradicional:
  - Consumo de memória e CPU: Modelos grandes exigem mais recursos.
  - Latência: Inferência pode ser mais lenta do que uma API normal.
  - Escalabilidade: Como suportar múltiplas requisições.
  - Atualização e monitoramento: Garantir que o modelo continue performando.
- Ferramentas: Kubernetes, Docker, APIs REST, gRPC, serviços na nuvem (AWS, Azure, GCP).

## 8. Prática e Projetos

- Faça implementações: Criar um modelo de classificação.
- Explore embeddings para análise de texto.
- Desenvolva um sistema RAG: busque informações, gere respostas.
- Realize o deploy de modelos: teste em produção, monitore e escale.
