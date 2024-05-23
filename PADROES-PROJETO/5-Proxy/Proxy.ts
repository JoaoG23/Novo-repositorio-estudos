/*
O padrão de design Proxy é um padrão estrutural que permite fornecer um substituto 
ou espaço reservado para outro objeto. Um proxy controla o acesso ao objeto original, 
permitindo que você execute algo antes ou depois que a solicitação chega ao objeto original1.
*/
/**
 Usa composição, portanto tem a estrutura muito semelhante ao “Composite” e “Decorator” (as intenções são completamente diferentes)
Usa um objeto “proxy” que finge ser o objeto real
É usado para controle de acesso, logs, cache, lazy instantiation e lazy evaluation, distribuição de serviços e mais
Pode escolher como e quando repassar chamadas de métodos para o objeto real
Pode executar ações antes e depois das chamadas dos métodos do objeto real
Tem várias variações: proxy virtual, proxy remoto, proxy de proteção, proxy inteligente
 */
/**
/*
 * Proxy Virtual: controla recursos custoso para aplicação Ex: cache dados de usuário para não criar novas conexoes
 * Proxy Remoto: Controla acesso de recurso de /outros servidores
 * Proxy de proteção: controla acesso de autenticação ou permissão 
 * Proxy Inteligente: controla acesso objeto real + execucao de novas tarefas adicionais
 */

/**
 * Use o quando:
 * Objeto caro não acesso direto ao ele (proxy virtual) 
 * Restrigir acesso a partes da sua aplicação (proxy proteção)
 * Ligação entre o seu sistema remoto (proxy remoto)
 * Realizar cache de chamada já realizadas (proxy inteligente),
 * Criar Logs
 * */
