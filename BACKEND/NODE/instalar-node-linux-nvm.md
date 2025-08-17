To install Node.js using Node Version Manager (NVM) on a Linux system, you can follow these steps:

1. **Open your terminal**.

2. **Check if NVM is installed** by typing:

```bash
nvm --version
```

If NVM is not installed, you can install it using the curl or wget command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

or

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

3. **Close and reopen your terminal** to start using NVM.

4. **Install Node.js** using NVM:

```bash
nvm install node
```

This will install the latest version of Node.js.

5. **To install a specific version of Node.js**, you can use this command:

```bash
nvm install 16
```

Replace `16` with your desired Node.js version.

6. **To use the installed version**, you can use the `nvm use` command:

```bash
nvm use 16
```

Again, replace `16` with your desired Node.js version¹.


Nova versão 

https://www.youtube.com/watch?v=LU1TYsyPim0