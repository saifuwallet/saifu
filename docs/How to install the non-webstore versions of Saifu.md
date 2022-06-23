---
slug: non-webstore-saifu
---

# How to install the non-webstore versions of Saifu

## Chrome

1. Download the latest non-webstore [chrome release](https://github.com/saifuwallet/saifu-releases/releases)
2. Navigate to your browsers extension settings and enable 'Developer mode' in the top right corner
![](plugins/attachments/brave-top.png)
3. Click 'Load unpacked' 
4. Navigate to the unpacked folder containing the Saifu dev version

If all worked fine, Saifu should load successfully

![Plugin Success](plugins/attachments/unbundled-plugin-success.png)

## Firefox

In the "Add-Ons & Themes" menu, click on the gear icon and select "Debug Addons"

![firefox-debug-addons](plugins/attachments/firefox-debug-addons.png)

Click "Load Temporary Add-On"
![firefox-load-temporary-addon](plugins/attachments/firefox-load-temporary-addon.png)
Select the Saifu zip file

**Note:** You don't need to actually unzip it unless you want to develop plugins

## Safari

Open Preferences and navigate to 'Advanced', then enable 'Show Develop menu in menu bar'
![safari-developer-menu](plugins/attachments/safari-developer-menu.png)
In the now visible 'Develop' menu, enable 'Allow unsigned extensions'
 ![safari-allow-unsigned-extensions](plugins/attachments/safari-allow-unsigned-extensions.png)

Next, run the Saifu extension as usual. If you get an error, open "Security & Privacy" preferences and click "Run anyway" next to the message that Saifu wasn't executed
