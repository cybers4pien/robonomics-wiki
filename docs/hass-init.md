---
title: Home Assistant Initialization
contributors: [nakata5321, PaTara43]
tools:
  - Home Assistant 2022.11.3
    https://github.com/home-assistant/core
---

**After installing Home Assistant, it needs to be initialized.**

You are starting with the creation of the owner account of Home Assistant. This account is an administrator and can make any changes. Open web browser and go to `http://%RASPBERRY_IP_ADDRESS%:8123`. You can find the IP address of Raspberry Pi using [Fing mobile app](https://www.fing.com/products) or [nmap CLI tool](https://vitux.com/find-devices-connected-to-your-network-with-nmap/).

<robo-wiki-note type="note">Raspberry Pi address may change in time, due router settings.</robo-wiki-note>

<robo-wiki-video src="https://static.robonomics.network/wiki/hass-init.mp4" />

1. At the first page, enter a name, username, password and click on the `CREATE ACCOUNT` button.

2. On the next screen, enter a name for your home and set your location and unit system. Click `DETECT` to find your location and set your time zone and unit system based on that location. If you don't want to send your location, you can set these values manually.

3. After that, Home Assistant will show any devices that it has discovered on your network. Don’t worry if you see fewer items than what is shown below; you can always manually add devices later. For now, just click `FINISH` and you will be on the main Home Assistant screen.

4. Finally, you will see the Home Assistant web interface, which will show all of your devices. 

Next you need to setup MQTT Broker using one of the options:

**Option 1 (Home Assistant OS)**
* If you are upgrading your **Home Assistant OS**, [go here](/docs/mqtt-hassos/).

**Option 2 (Pre-installed image or Home Assistant Docker or Home Assistant Core)**
* If you are using **pre-installed image** or upgrading your **Home Assistant Docker** or **Core**, [go here](/docs/mqtt-image-docker-core/).