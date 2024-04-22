To install Node.js on Oracle Linux 7, you can follow these steps:

1. **Enable the Node.js repository**: Node.js is released for Oracle Linux. You can enable the repository using the following command²:
    ```bash
    sudo yum install -y oracle-nodejs-release-el7 oracle-release-el7
    ```
2. **Install Node.js**: Now, you can install Node.js by running the following command²:
    ```bash
    sudo yum install nodejs
    ```
3. **Update Node.js**: If you have Node.js installed, and a newer release has been published, make sure you update `oracle-nodejs-release-el7` first²:
    ```bash
    sudo yum update oracle-nodejs-release-el7
    sudo yum update nodejs
    ```
4. **Verify the installation**: Once Node.js is installed, you can verify the Node.js version using the following command:
    ```bash
    node --version
    ```

However, please note that as of my knowledge cutoff in 2021, Node.js version 20 or 18 may not be available for Oracle Linux 7. The available versions might be different². Always refer to the official documentation for the most accurate and up-to-date information².

Origem: conversa com o Bing, 07/03/2024
(1) Node.js for Oracle Linux. https://yum.oracle.com/oracle-linux-nodejs.html.
(2) undefined. https://github.com/XC-Solucoes/XC-Middleware-back.git.
(3) How can I install Node.js version 18 on Ubuntu 22.04?. https://stackoverflow.com/questions/76318653/how-can-i-install-node-js-version-18-on-ubuntu-22-04.
(4) How to Install Node.js and NPM on Oracle Linux | Atlantic.Net. https://www.atlantic.net/dedicated-server-hosting/how-to-install-node-js-and-npm-on-oracle-linux/.
(5) How to install Node.js on Linux - Linux Tutorials - Learn Linux .... https://linuxconfig.org/how-to-install-node-js-on-linux.
(6) undefined. https://deb.nodesource.com/setup_18.x.
(7) undefined. https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh.
(8) undefined. https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key.
(9) undefined. https://deb.nodesource.com/node_.


To change the Node.js version to 18, you can use a version management tool like `nvm` (Node Version Manager)¹². Here are the steps:

1. **Install nvm**: If you haven't installed `nvm` yet, you can do so by running the following command¹:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    ```
    This will download a script and start the installation of `nvm`.

2. **Close and reopen your terminal** to start using `nvm`¹.

3. **Install Node.js version 18**: Once `nvm` is installed, you can install Node.js version 18 by running¹:
    ```bash
    nvm install 18
    ```
    This will download and install Node.js version 18.

4. **Switch to Node.js version 18**: After installing, you can switch to version 18 by running¹:
    ```bash
    nvm use 18
    ```
    This will change the active Node.js version to 18.

5. **Verify the Node.js version**: You can verify the active Node.js version by running¹:
    ```bash
    node --version
    ```
    This should return `v18.x.x`, where `x.x` is the latest patch version of Node.js 18.

Please note that these instructions are based on the current state of `nvm` and Node.js, and they may change in the future. Always refer to the official documentation for the most accurate and up-to-date information¹².

Origem: conversa com o Bing, 07/03/2024
(1) node.js - How to downgrade node version? - Stack Overflow. https://stackoverflow.com/questions/70458080/how-to-downgrade-node-version.
(2) How to switch Node.js versions with NVM - LogRocket Blog. https://blog.logrocket.com/how-switch-node-js-versions-nvm/.
(3) linux - How can I update Node.js and NPM to their latest versions .... https://stackoverflow.com/questions/6237295/how-can-i-update-node-js-and-npm-to-their-latest-versions.
(4) How to check and change the Nodejs version on Ubuntu?. https://stackoverflow.com/questions/45632508/how-to-check-and-change-the-nodejs-version-on-ubuntu.
(5) undefined. https://github.com/nvm-sh/nvm/blob/master/README.md.
(6) undefined. https://www.npmjs.com/package/nvm.
(7) undefined. https://registry.npmjs.org/16.20.2.