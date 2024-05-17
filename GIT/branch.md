$ git branch
* minha_branch
  main
$ git checkout minha_branch
Já está na 'minha_branch'
$ git push origin minha_branch


### CLONAR COM TODAS BRANCHS

First, clone the repository:

   git clone <repository_url>

Replace <repository_url> with the URL of the repository you want to clone.

Then, navigate to the cloned repository’s directory:

   cd <repository_name>

Replace <repository_name> with the name of the repository.

Finally, fetch all the branches:

   git fetch --all

   git checkout <branch_name>


   Remove branchs
   
   git fetch --prune