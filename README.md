# PeterDeeDash 
#
# - test version -
April 5, 2021: uploaded all my edited files and new files.

- I primarily edited this nice flavour of Homeydash.com for these reasons:

1) I wanted it to be able to show all available values on tiles, without touching or "longpress" them, so probably usable at Google Hubs too.

2) I wanted to make room for as much tiles as possible, so less space used by the info bar.

3) I tweaked it to appear nice on a tablet running Android Chrome & Fully browsers, added menu item "Tablet"

- Screenshots: 

![Chromium-linuxMint](https://user-images.githubusercontent.com/74005072/113612906-ba2d1980-9650-11eb-918b-716632d4c5f8.png)
Added menu item Tablet

![menu_android_tablet](https://user-images.githubusercontent.com/74005072/113604096-15590f00-9645-11eb-85ef-d8af62dbce1e.png)

Android Phone Chromebrowser Landscape

![Android Phone Landscape Chromebrowser](https://user-images.githubusercontent.com/74005072/113604159-2b66cf80-9645-11eb-8d57-86a960d8acda.jpg)

Android Phone Chromebrowser Portrait

![Android Phone Portrait Chromebrowser](https://user-images.githubusercontent.com/74005072/113604179-2efa5680-9645-11eb-9dff-f002c610f819.jpg)

Chromium browser op linux Mint

![Chromium browser op linux Mint](https://user-images.githubusercontent.com/74005072/113604196-3457a100-9645-11eb-8dfb-5872ea1b6320.png)

Firefox browser op linux Mint

![Firefox browser op linux Mint](https://user-images.githubusercontent.com/74005072/113604135-24d85800-9645-11eb-9818-b430dff2e6ec.png)
</br>
</br>
</br>
- <B>To run this dashboard locally on Homey, using the micro server app: </B> 
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
`http://YourHomeyIPAddress:5080/peterdeedash/app?theme=tablet&lang=nl&token=[YourToken**]`<br>
- Casting the dashboard to your Google hub can also be done by entering this URL to the "Cast" card in your flow.

In case you want to stop the FTP server, just restart “Micro Web Server” app, b/c FTP is only needed if you want to transfer files to Homey. No worries, the HTTP server stays online, so does PeterDeeDash
</br> 
(thanks to Martin_van_der_Aart)
</br>
</br>
</br>
- <B>To run this dashboard locally @ raspberry or linux (vm) (linux command line):</B>
```
npm i -g serve
git clone https://github.com/PeterKawa/PeterDeeDash.git
cd PeterDeeDash
serve -p 5000 app
```

Then visit (for English, change `lang=nl` into `lang=en`. Other languages*** can be selected from the dashboard menu after opening the URL):</br>
- Android tablet / phone: `http://localhost:5000/?theme=tablet&lang=nl&token=<TOKEN>`</br>
- Google Nest Hub: `http://localhost:5000/?theme=google_nest_hub&lang=nl&token=<TOKEN>`</br>
- iPad: `http://localhost:5000/?theme=ipad&lang=nl&token=<TOKEN>`</br>
- Raspberry: `http://localhost:5000/?theme=raspberry&lang=nl&token=<TOKEN>`</br>
- Web (common) `http://localhost:5000/?theme=web&lang=nl&token=<TOKEN>`</br>
</br>
</br>
</br>
<b>`**)Your token can be acquired by visiting https://homey.ink and looking in the console after logging in.
</br>
</br>
`***)` <I>PeterDeeDash is available in CN/CS/DA/DE/EN/ES/FR/FY/IT/LU/MA/NB/NL/RO/SV/TR</I></b>




--------------------------------------------------



Original Homey Cornelisse ReadMe.md:

Homey Cornelisse Dash is an open-source project for wall-mounted Homey dashboards.
This project is forked from Homey.ink / homeydash.com and is primarily aimed at usage on an iPad or iPhone

![Homey.ink on web](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/web/web.png)
![Homey.ink on iPad](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/ipad/ipad.png)
![Homey.ink on iPhone](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/iphone/iphone.png)
![Homey.ink on algemeen](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/algemeen/brandmeld.png)
