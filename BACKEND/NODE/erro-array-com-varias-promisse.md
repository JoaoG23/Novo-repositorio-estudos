O problema com o seu código é que você está tentando mapear uma função assíncrona, o que resulta em um array de Promises. O JavaScript não espera automaticamente que as Promises se resolvam, por isso você está vendo `Promise { <pending> }` no console.

Para resolver isso, você pode usar `Promise.all()` para esperar que todas as Promises no array se resolvam antes de retornar. Aqui está como você pode ajustar sua função:

```javascript
async listarTodosArquivosDetalhesPorIdGrupo(idGrupo) {
    const arquivosGrupo =
      await this.arquivosParamentrosTxtRepository.buscarDetalhesArquivosPorIdGrupo(
        idGrupo
      );

    const arquivosDetalhados = await Promise.all(arquivosGrupo.map(async (arquivo) => {
      const idArquivo = arquivo.id;
      const colunas =
        await this.colunasArquivosTxtRepository.listarTodosPorIdArquivo(
          idArquivo
        );
      return { ...arquivo, colunas };
    }));

    return arquivosDetalhados;
  }
```

Agora, `arquivosDetalhados` deve ser um array de objetos, em vez de um array de Promises. Espero que isso ajude! 😊