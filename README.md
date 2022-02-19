# PeterDeeDash 
#
Februari 19th, 2022: <br><br>
- Adjusted Google Nest Theme to fit with weather images/gifs. 

![Screenshot from 2022-02-19 06-52-28](https://user-images.githubusercontent.com/74005072/154788337-0b50194a-9f05-46ea-a255-0cc8db28485a.png)

![google_nest_hub](https://user-images.githubusercontent.com/74005072/154786637-dc521dbe-6ab3-4769-be7e-dbe98f9b4a66.jpg)

<br><br>

May 27th, 2021: <br><br>
<b>v2.0</b><br><br>
Common / Language
- Changed Dutch text of "token and login" messages into English
- Changed 'degrees' to '°C'
- Probably fixed a UTF-8 setting @ index.html. It should be declared before every .js script call, which wasn't.
A German user got weather descriptions like "m%c3%a4%C3%9Figbew%C3%B6lkt", which is "mäßigbewölkt". Renaming the weather icons was not fun.

Weather
- Fixed the weather icon appearance. Due to a change some time ago, the weather description is in the language of your country/region. And it can consist of more than one word, which resulted in an error.
- Updated weather icons (animated)
- Changed the indoor temp 'roof' icon into a house icon
- Added weather description to weather info screen
- Added "Buienradar.nl" 3hrs forecast .gif, and 5-day forecast pic, the device row is split into two columns to place them next to the device tiles

Layout
- Changed layout and styles
- Added custom device icons to the `img` directory
- Fixed view/hide of indoor temp indicator and house icon, if indoor thermometer is selected or none
- Possibility to add custom device icons (adjustable in 'homeydash.app.js')

Capabilities added:
- alarm_offline (NetScan app) (also added to generic/motion/contact/water/tamper etc. alarms)
- measure_co2 & alarm_co2 (also added that to smoke/fire/co/heat alarms)
- measure_gust_angle (weather station / sensor apps)
- measure_ph (weather station / sensor apps)
- measure_rssi (weather station / sensor apps)
- measure_orp (weather station / sensor apps)
- measure_tdi (weather station / sensor apps)
- measure_nutrition (Flora Plant sensors)
- measure_rain
- measure_rain_day

Alerts and specific value(s)range(s) display in different colors
- Alerts layout: glowing animation of tile color from white to soft orange

Alert cababilities and levels (levels ara adjustable in 'homeydash.app.js')
  - Humidity: below 15 or above 99 = Alert
  - Moisture: below 20 or above 60 = Alert (Flora sensors)
  - Fertility: below 200 or above 1200 = Alert (Flora sensors)

Alert setting for a device (monitor it's OnOff capability)
- device.name = "NetScan Alert" Checks for OnOff state. If OnOff = true (device is on) then alert

Value indicators (levels ara adjustable in 'homeydash.app.js'):
- Added iceblue color for temperatures below 0°C. For use with your outside and/or freezer temperature sensors
- Added Green/Orange/Red/Iceblue tile color setting to:
  - co2(ppm): co2=>0 or co2>400 GREEN / co2>450 or co2>1400 ORANGE / co2>1450 or co2>4000 RED

  - (measure_)Temperature(°C): I use one device for it, so change the device name to suit your needs.
    (device.name = "tado° Thermostaat")
    temperature=>0 or temperature>15 GREEN / temperature>15 or temperature>20
    ORANGE / temperature>20 or temperature>60 RED / temperature<0 ICEBLUE

  - (measure_)Temperature(°C): I use one device for it, so change the device name to suit your needs.
    (device.name = "Temp Vriezer" )
    temperature>-9 RED / temperature<-10 ICEBLUE

  - (measure_)Temperature(°C): I use one device for it, so change the device name to suit your needs.
    (device.name = "Temp Koelkast")
    temperature<1 or temperature>10 RED / temperature>0 or temperature<9 ICEBLUE

  - (measure_)power(W): I use one device for it, so change the device name to suit your needs.
    (device.name = "Growatt Solarpanels")
    My solarpanels generate 1900W max, so these ranges are set:
    power>1050 or power>4000 GREEN / power>550 or power>1000 ORANGE / power>100 or power>500 RED

  - (measure_)Rain(mm): For weather station rain meters
    rain>0 or rain<1 GREEN / rain>0 or rain<5 ORANGE / rain>5 or rain>100 RED

  - (measure_)wind_strength(km/h): For weather station wind meters
    wind_strength>0 or wind_strength<11 GREEN / wind_strength>10 or wind_strength>18 ORANGE
    / wind_strength>19 or wind_strength>180 RED
    <br><br>
    


May 14th, 2021: <br> 
<b>- Added configuration/modification how-to's</b><br> 
<b>- Added how-to cast including all of your preferences to Google Hub</b><br>
This, because one has to re-cast every 9mins to prevent screensaver kicking in.<br>
All changes made on-screen are lost then. So make these changes permanent in the code and off you cast!<br>
                
April 5th, 2021: <b>live</b>

PeterDeeDash is an open-source project for (wall-mounted) Homey dashboards on a  tablet, Google Nest Hub***, iPad, laptop or TV! As long as it has a webbrowser it works.</br> 
This project is forked from Homey.ink / Homeydash.com / Homeycornelisse and is primarily aimed at usage on an Android Tablet / Phone.</b>
A big thanks to all developers (WeeJeWel) who started this dashboard and those (daneedk, Rocodamelshe, Homeycornelisse) who expanded and customized it to what it is now.<br>
`***`) How to set all kinds of preferences as default to cast to Google Nest Hub: 
See file "How-to_cast_including_preferences_to_GoogleHub.txt"

- I primarily edited this nice flavour of Homeydash.com for these reasons:

1) I wanted it to be able to show all available values on tiles, without touching or "longpress" them, so usable at Google Nest Hubs too.

2) I wanted to make room for as much tiles as possible, so less space used by the info bar.

3) I tweaked it to appear nice on a tablet running Android Chrome & Fully browsers, added menu item "Tablet". This theme also looks cool on a Google Nest Hub.

# Screenshots: 

- Added menu item Tablet

![menu_android_tablet](https://user-images.githubusercontent.com/74005072/113604096-15590f00-9645-11eb-85ef-d8af62dbce1e.png)

- Android Tablet Chromebrowser Landscape

![Screenshot_20210527-225221](https://user-images.githubusercontent.com/74005072/119896674-a52d8200-bf3f-11eb-9ed2-21ec96417b11.png)

- Layout options (tablet.css file) edited a bit:

![Screenshot_20210514-175224](https://user-images.githubusercontent.com/74005072/118332618-a657bb80-b50a-11eb-80bf-0806c760d945.png)

- Google Nest Hub with 'Google Nest Hub' theme:

![Screenshot from 2022-02-19 06-52-28](https://user-images.githubusercontent.com/74005072/154788337-0b50194a-9f05-46ea-a255-0cc8db28485a.png)

![google_nest_hub](https://user-images.githubusercontent.com/74005072/154786637-dc521dbe-6ab3-4769-be7e-dbe98f9b4a66.jpg)

- Android Phone Chromebrowser Portrait

![Android Phone Portrait Chromebrowser](https://user-images.githubusercontent.com/74005072/113622433-49402e80-965d-11eb-9837-4db9fc7e3b56.jpg)

</br>
</br>
</br>

# To run this dashboard locally on Homey, using the micro server app:
1. Install the Micro Web Server app on your Homey
2. Then go to config from within the app and push the button `Start FTP Server`, and check if it says `Running`
3. Now look for the IP address of your Homey, it is presented in this screen, something like `192.168.1.23` or `192.168.2.54`
4. Copy this IP address / write this down!
5. I'm serious, you'll need it often
6. Using a PC or MAC install the freeware FTP software FileZilla, on linux the default filemanager should do
7. The whole "website" is packed in a Zip file. Download this Zip via https://github.com/PeterKawa/PeterDeeDash/archive/refs/heads/master.zip
8. Unpack Zip file "PeterDeeDash-master.zip" f.i. to your Desktop, then a folder named PeterDeeDash-master is created
9. Let's rename this folder to “peterdeedash”, no caps and a little shorter; NOTE: this is part of the link used at step 13.!
10. Start the FTP program (FileZilla) and log on to Homey FTP
11. On the left upperside, at “Host” you enter `YourHomeyIPAddress` (from step 3.), at “Port” you enter `5081`.
12. At the right side, click "Fast Connect” (no username/pw needed)
13. If the connection succeeded, you'll find your pc folders at the left screen, now look for folder `Desktop`, open it and look for folder `peterdeedash`; Now right-click at "Upload", the complete folder will be copied (uploaded) to your Homey.
16. After a few secs or minutes, you'll find this folder in the right hand column, this is the server folder of your Homey.
17. Yay, now PeterDeeDash is running from your Homey!
18. Start your fav browser, and enter this:</br>
`http://YourHomeyIPAddress:5080/peterdeedash/app?theme=tablet&lang=en&token=[YourToken**]`<br>
19. For your language, change `lang=en` into `lang=xx` (`where xx = cn/cs/da/de/en/es/fr/fy/it/lu/ma/nb/nl/ro/sv/tr`)
- Casting the dashboard to your Google hub can also be done by entering this URL to the "Cast" card in your flow.
- <b>Your token can be acquired by visiting https://homey.ink, look for a large string in the console (push F12 mostly) after logging on</b>

In case you want to stop the FTP server, just restart “Micro Web Server” app, b/c FTP is only needed if you want to transfer files to Homey. No worries, the HTTP server stays online, so does PeterDeeDash
</br> 
(thanks to Martin_van_der_Aart)
</br>
</br>
</br>
</br>
</br>
</br>
# To run this dashboard locally @ raspberry or linux (vm) (linux command line):
```
npm i -g serve
git clone https://github.com/PeterKawa/PeterDeeDash.git
cd PeterDeeDash
serve -p 5000 app
```
Then alter the URL with your token and language of choice (for your language, change `lang=en` into `lang=xx`, `where xx = cn/cs/da/de/en/es/fr/fy/it/lu/ma/nb/nl/ro/sv/tr`):</br>
- Android tablet / phone: `http://localhost:5000/?theme=tablet&lang=en&token=<TOKEN>`</br>
- Google Nest Hub: `http://localhost:5000/?theme=tablet&lang=en&token=<TOKEN>`</br>
- iPad: `http://localhost:5000/?theme=ipad&lang=en&token=<TOKEN>`</br>
- Raspberry: `http://localhost:5000/?theme=raspberry&lang=en&token=<TOKEN>`</br>
- Web (common) `http://localhost:5000/?theme=web&lang=en&token=<TOKEN>`</br>
</br>
<b>Your token can be acquired by visiting https://homey.ink, look for a large string in the console (push F12 mostly) after logging in</b>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
--------------------------------------------------
