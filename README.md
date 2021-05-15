# PeterDeeDash 
#

May 14th, 2021: <br> 
<b>- Added configuration/modification how-to's</b><br> 
<b>- Added how-to cast including all of your preferences to Google Hub</b><br>
This, because one has to re-cast every 9mins to prevent screensaver kicking in.<br>
All changes made on-screen are lost then. So make these changes permanent in the code and off you cast!<br>
                
April 5th, 2021: <b>live</b>

PeterDeeDash is an open-source project for (wall-mounted) Homey dashboards on a  tablet, Google Nest Hub***, iPad, laptop or TV! As long as it has a webbrowser it works.</br> 
This project is forked from Homey.ink / Homeydash.com / Homeycornelisse and is primarily aimed at usage on an Android Tablet / Phone.</b>
A big thanks to all developers (WeeJeWel) who started this dashboard and those (daneedk, Rocodamelshe, Homeycornelisse) who expanded and customized it to what it is now.
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

![Screenshot_20210515-164948](https://user-images.githubusercontent.com/74005072/118365892-d0f35400-b59e-11eb-9310-e14a4dfd0d16.png)


- Layout options (tablet.css file) edited a bit:

![Screenshot_20210514-175224](https://user-images.githubusercontent.com/74005072/118332618-a657bb80-b50a-11eb-80bf-0806c760d945.png)

![Screenshot_20210514-175240](https://user-images.githubusercontent.com/74005072/118332651-b66f9b00-b50a-11eb-8e2e-4da82d262fd7.png)

- Google Hub (Thanx for testing and this picture, feRon)

![GoogleHub_view_with_tablet_theme](https://user-images.githubusercontent.com/74005072/117881075-1c5ce800-b2a9-11eb-916e-1eda42badca9.jpeg)

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
