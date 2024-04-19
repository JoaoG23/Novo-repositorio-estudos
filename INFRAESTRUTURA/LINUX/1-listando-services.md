To list all services in Linux, you can use the `systemctl` command if your system uses `systemd` as the system and service manager. Here's how:

1. Open a terminal.
2. Switch to the root user.
3. Type the following command and press enter:
```bash
$ systemctl list-units --type service --all
```
This command will show you each active service's name, load, sub-state, and description². You can also change the state value to see services that are dead, exited, failed, or inactive².

If you want to see only the running services, you can use the following command:
```bash
$ systemctl --type=service --state=running
```

If your system does not use `systemd`, you can use the `service` command to list all services, including active, inactive, running, or stopped services:
```bash
$ sudo service --status-all
```
The `[ + ]` and `[ - ]` symbols before each service name denote the service status⁵.

### Listar apenas um pelo nome
```bash
    $ systemctl status [service-name]
```
or

```bash
$ sudo service [service-name ex: teste] status
```

#### Lista servicos parados

```bash
$ systemctl --type=service --state=running
```
or
```bash
    systemctl list-units --all --type=service --no-pager | grep dead
```