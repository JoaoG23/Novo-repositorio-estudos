## 


    Erro : Try changing the setting `Use Windows trust store` in Preferences->Connections and restart DBeaver. It might help if you haven't overridden the trust store.
    javax.net.ssl.SSLHandshakeException:PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
    Network unavailable due to a certificate issue.
    Try changing the setting `Use Windows trust store` in Preferences->Connections and restart DBeaver. It might help if you haven't overridden the trust store.
    javax.net.ssl.SSLHandshakeException:PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target

Parece que você está enfrentando um problema de certificado SSL com o DBeaver. Aqui estão algumas etapas que você pode seguir para resolver esse problema:

Alterar a configuração ‘Use Windows trust store’: No DBeaver, vá para Preferences -> Connections e altere a configuração Use Windows trust store. Isso pode ajudar se você não tiver substituído o trust store.


Reinicie o DBeaver: Após alterar a configuração, reinicie o DBeaver para que as alterações entrem em vigor.
Verifique o certificado SSL do servidor: Se o problema persistir, pode ser necessário verificar o certificado SSL do servidor ao qual você está tentando se conectar. Você pode precisar adicionar o certificado do servidor ao seu trust store.


Comandos legais  

 ALT+Shift+A.  =multiplos cursores