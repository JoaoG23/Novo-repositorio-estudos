Open the Command Prompt.
Use the following command to find the PID of the application:

```bash

    jps
```
This command will list all the Java processes running on your system. Look for your application in the output.

Once you have identified the PID of your application, use the taskkill command to stop it:

```bash

taskkill /F /PID <PID>
```
Replace <PID> with the process ID of your application. The /F option forces the process to stop immediately.

Please note that you need to have the necessary permissions to kill a process in your system. If you encounter permission issues, you may need to run the Command Prompt as an administrator.