https://medium.com/geekculture/enable-ssh-access-into-wsl-from-a-remote-computer-f2e4a962430


## Problemas como esse : 

System has not been booted with systemd as init system (PID 1). Can't operate


urprisingly, after 6 years or so of WSL, there doesn't seem to be a good, general-purpose "Systemd" question here on Ask Ubuntu. So this looks like a good one to use for that purpose.

In general, when you see either of the following two messages:

System has not been booted with systemd as init system (PID 1). Can't operate.
Failed to connect to bus: Host is down
Then it's typically the same root cause. In the case of systemctl and attempting to start ssh, you are seeing both.

The problem may be that:

Your release of WSL doesn't support Systemd. In this case, there are multiple workarounds available. See the Alternatives to Systemd in WSL section below.

The good news is that Systemd is now officially supported in Ubuntu on many WSL systems. See below for how to determine if your system supports it and how to enable it (if you need it).

Should you enable Systemd in WSL?
First, consider whether you should enable Systemd in WSL. Enabling Systemd will automatically start a lot of background services and tasks that you really may not need under WSL. As a result, it will also increase WSL startup times, although the impact will be dependent on your system. Check the Alternatives section below to see if there may be a better option that fits your needs. For example, the service command may do what you need without any additional effort.

While I'm happy that Systemd is available as an option, I personally plan on continuing to run without it whenever possible.

How to enable Systemd in Ubuntu/WSL
As background, there are now two different "delivery mechanisms" (I'll think of a better term, hopefully) for WSL2. I'd call them different "versions" or "releases", but we tend to already use that term for WSL version 1 and 2.

Originally, WSL1 and WSL2 both came as a Windows feature, which was enabled through the Turn Windows features on or off settings. This feature was (and still is) built-in to Windows, and is called the "in-box" version of WSL.

In October of 2021, Microsoft started making WSL2 available as a Windows application, which could be installed through the Microsoft Store (and other methods described below).

It's the WSL application that supports Systemd. Currently, the in-box version of WSL does not support Systemd. To use the new WSL application, you must be on a supported Windows release:

New WSL users with Windows 11 22H2 or later will automatically receive the application version of WSL when running wsl --install, unless specifically adding the --inbox option.

Windows 11 21H2 users can still install the WSL application using the methods below.

Windows 10 users will need KB5020030 or later. Note that it is not yet clear at the time of this update whether older Windows 10 releases will work. I have personally only been able to validate it on Windows 10 22H2 so far.

With the prerequisite Windows version in place, you can then install or upgrade to the 1.0.0 release (or later) of the WSL application using several methods:

Through the Microsoft Store (as "Windows Subsystem for Linux").

Or from the Releases page in the Github repo. To install a release manually:

Reboot (to make sure that WSL is not in use at all). A simple wsl --shutdown may work, but often will not.

Download the 1.0.0 (or later) release from the link above.

Start an Administrator PowerShell and:

Add-AppxPackage <path.to>/Microsoft.WSL_1.0.0.0_x64_ARM64.msixbundle
    wsl --version # to confirm
Some people may need to run wsl update:

    wsl --update    

To enable, start your Ubuntu (or other Systemd) distribution under WSL (typically just wsl ~ will work).

    sudo -e /etc/wsl.conf
Add the following:

    [boot]
    systemd=true
Exit Ubuntu and again:

wsl --shutdown
Then restart Ubuntu.

sudo systemctl status
... should show your Systemd services.

