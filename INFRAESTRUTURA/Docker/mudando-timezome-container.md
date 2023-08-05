To change the timezone of a Docker container to Brazil/Sao_Paulo, you can modify the steps provided earlier as follows:

1. Start an interactive shell session inside the container using the `docker exec` command:
   ```shell
   docker exec -it <container_name_or_id> /bin/bash
   ```
   Replace `<container_name_or_id>` with the name or ID of the container.

2. Install the `tzdata` package inside the container. This package allows you to modify the time zone settings. The package installation command may vary depending on the base image of your container. For example, if you're using an Ubuntu-based image, you can use the following command:
   ```shell
   apt-get update && apt-get install -y tzdata
   ```

3. Set the desired timezone inside the container. You need to create a symbolic link from the appropriate timezone file in `/usr/share/zoneinfo` to `/etc/localtime`. Replace `<timezone>` with the desired timezone identifier. For Brazil/Sao_Paulo, the timezone identifier is "America/Sao_Paulo". Use the following command:
   ```shell
   ln -fs /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
   ```

4. Optionally, you can also set the timezone in the container's environment variables by setting the `TZ` variable. This step is not mandatory, but it helps applications within the container recognize the timezone. For Brazil/Sao_Paulo, use the following command:
   ```shell
   echo "America/Sao_Paulo" > /etc/timezone
   export TZ="America/Sao_Paulo"
   ```

5. Exit the interactive shell session:
   ```shell
   exit
   ```

After following these steps, the timezone inside the Docker container should be changed to Brazil/Sao_Paulo.