Claro! Para permitir que o seu navegador local acesse sua aplicação em uma instância **Always Free** (com 1 GB de RAM) da Oracle Cloud, você precisa liberar portas tanto na camada de rede da Oracle quanto dentro do sistema operacional da instância. Vamos por partes, com base na documentação oficial:

---

## 1. Configurar a camada de rede — Security List (lista de segurança)

A **security list** funciona como um firewall virtual e controla o tráfego que entra e sai do VNIC da instância ([Oracle Documentation][1]).

### Passos:

1. Acesse o **Console da Oracle Cloud** → **Rede (Networking)** → **Virtual Cloud Networks (VCN)**.
2. Selecione o **sub-rede (subnet)** onde sua instância está.
3. Localize a **Security List** associada. Pode ser a default ou uma personalizada.
4. Clique em **Add Ingress Rule** (Adicionar regra de entrada).
5. Preencha assim:

   * **Source type**: `CIDR`
   * **Source CIDR**: `0.0.0.0/0` (ou restrinja para IPs específicos por segurança)
   * **IP Protocol**: `TCP`
   * **Source Port Range**: `All`
   * **Destination Port Range**: `a porta da sua aplicação`, por exemplo, `8080` ou `80`
   * Adicione uma descrição e salve.

Esse procedimento abre a porta na camada de rede da Oracle ([Reddit][2], [Oracle Documentation][3]).

---

## 2. Configurar o firewall dentro da instância

Mesmo após liberar pela Security List, o firewall do sistema operacional da sua instância pode continuar bloqueando o acesso ([Reddit][2], [Stack Overflow][4], [Oracle Documentation][5]).

### Em sistemas Linux com **firewall-cmd** (ex: Oracle Linux 8, Cloud Developer 8, etc.):

```bash
sudo firewall-cmd --zone=public --permanent --add-port=8080/tcp
sudo firewall-cmd --reload
```

Altere `8080` para a porta desejada ([Oracle Documentation][5]).

### Em Ubuntu com **ufw**:

```bash
sudo ufw allow 8080/tcp
sudo ufw reload
sudo ufw status
```

Ou utilize `iptables` diretamente:

```bash
sudo iptables -I INPUT -p tcp --dport 8080 -j ACCEPT
sudo netfilter-persistent save
```

Depois, reinicie o serviço de firewall ou reboot ([Reddit][6], [Stack Overflow][4]).

---

## Resumo consolidado

| Etapa | Camada                 | Ação                                                  |
| ----- | ---------------------- | ----------------------------------------------------- |
| 1     | Oracle Cloud (Network) | Adicionar regra de Ingress na Security List do subnet |
| 2     | Sistema Operacional    | Abrir porta com `firewall-cmd`, `ufw` ou `iptables`   |

Essa combinação garante que sua aplicação, por exemplo, accesível em `http://<IP-público>:8080`, fique disponível no seu navegador local.

---

## Sobre documentação da Oracle (em português)

* A página da documentação oferece tópicos completos sobre Security Lists e regras de rede em inglês, que podem ser úteis para consulta detalhada ([Oracle Documentation][1]).
* Na versão em português, o site apresenta o índice principal, mas os conteúdos específicos de rede normalmente estão em inglês ([Oracle Documentation][7]).

---

## Dicas finais

* **Prefira ações seguras**: usar `0.0.0.0/0` abre a porta para todo o mundo. Se possível, restrinja o CIDR a apenas seu IP ou rede local.
* **Teste**: depois de configurar, faça `curl http://<IP-público>:<porta>` ou acesse pelo navegador para verificar.
* **Persistência**: se usar `iptables`, salve regras com `netfilter-persistent`.
* **Logs e métricas**: em caso de problema, confira os logs do firewall ou use métricas de VNIC para monitorar pacotes bloqueados ([Oracle Documentation][5]).

---

Se quiser, posso te guiar diretamente passo a passo no console da Oracle – é só me dizer!

Boa configuração e sucesso com sua aplicação na Oracle Cloud!

[1]: https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/securitylists.htm?utm_source=chatgpt.com "Security Lists - Oracle Help Center"
[2]: https://www.reddit.com/r/oraclecloud/comments/r8fesu/any_guide_for_simply_opening_ports_on_oracle_free/?utm_source=chatgpt.com "Any guide for simply opening ports on Oracle free cloud tier? - Reddit"
[3]: https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/securitylists_working.htm?utm_source=chatgpt.com "Working with Security Lists - Oracle Help Center"
[4]: https://stackoverflow.com/questions/53888153/how-to-configure-custom-port-in-security-list-for-an-instance?utm_source=chatgpt.com "How to configure custom port in Security List for an instance?"
[5]: https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/securityrules.htm?utm_source=chatgpt.com "Security Rules - Oracle Help Center"
[6]: https://www.reddit.com/r/oraclecloud/comments/r8lkf7/a_quick_tips_to_people_who_are_having_issue/?utm_source=chatgpt.com "A quick tips to people who are having issue opening ports on oracle ..."
[7]: https://docs.oracle.com/pt-br/iaas/Content/home.htm "Documentação do Oracle Cloud Infrastructure"
