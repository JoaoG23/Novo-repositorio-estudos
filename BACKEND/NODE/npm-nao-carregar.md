https://pt.stackoverflow.com/questions/155799/npm-n%C3%A3o-continua-instala%C3%A7%C3%A3o-de-pacote


    npm set registry 
`https://registry.npmjs.org/`
Se não funcionar, use um mirror pro npm:

    npm config set registry 
`http://skimdb.npmjs.com/registry`
Depois use novamente o original:

    npm config set registry
     `http://registry.npmjs.org`
Edit: uma outra possível solução seria especificar o registry ao instalar o pacote.

Antes de tudo, limpe o cache do npm:

    npm cache clean
E depois tente:

`npm install luaparse --registry http://registry.npmjs.org/`
Edit2: sabendo que você está usando DMZ, antes de tudo tente desabilitar o DMZ (reinicialização necessária)

Somente se não conseguir desabilitar, como o DMZ está encapsulando o DNS, tente setar o servidor DNS para automático:

netsh interface ip set dns "Local Area Connection" dhcp
Pegue o ip de sua máquina utilizando ipconfig depois sete ele como servidor DMZ (está nas configurações NAT/DMZ/Advanced, dependendo de seu roteador)