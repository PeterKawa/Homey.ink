# PeterDeeDash 
#
# - test version -
April 5, 2021: uploaded all my edited files and new files.

> I primarily edited this nice flavour of Homeydash.com for these reasons:

1) I wanted it to be able to show all available values on tiles, without touching or "longpress" them, so probably usable at Google Hubs too.

2) I wanted to make room for as much tiles as possible, so less space used by the info bar.

3) I tweaked it to appear nice on a tablet running Android Chrome & Fully browsers, added menu item "Tablet"

- Screenshots: 

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




- <B>To run this dashboard on Homey, using the micro server app (in Dutch for now): </B> 
1. Micro Web Server app op Homey installeren
2. In de configuratie van de app druk op de knop “Start FTP Server”, zodat deze “Running” aangeeft.
3. Op een PC of MAC installeer bijvoorbeeld het gratis FTP programma FileZilla, op linux bijv met de default filemanager
4. The whole "website" is packed in a Zip file. Download de Zip op je PC of MAC, via https://github.com/PeterKawa/PeterDeeDash/archive/refs/heads/master.zip
5. Pak de Zip file PeterDeeDash-master.zip uit, jerijgt nu een map PeterDeeDash-master met de bestanden erin, zet deze map b.v. op je bureaublad.
6. Ik hernoem de map dan even naar “PeterDeeDash”, dat is wat korter.
7. Met het FTP programma FileZilla log je nu in op je Homey FTP Server.
8. Vul linksboven bij het vakje “Host” je eigen Homey ip adres in en bij “Poort” 5081.
9. Druk nu rechts op de knop “Snelverbinden” (no username/pw needed)
10. Als de verbinding is gelukt kun je in de linkerkolom naar de map “PeterDeeDash” op je bureaublad browsen en kun je met een rechtermuisklik "Uploaden" kiezen om de hele map naar Homey te uploaden.
11. De map zie je nu in de rechter kolom verschijnen, en staat nu dus op Homey zelf.
12. Nu kun je PeterDeeDash vanaf je Homey draaien.
13. Type het volgende in je browser `http://IPADRES-HOMEY:5080/PeterDeeDash/app?theme=tablet&lang=nl&token=[JouwToken**]`, Casten naar je google hub gaat zo ook prima.

Wil je de FTP server uitschakelen, herstert de app “Micro Web Server” even, want FTP heb je alleen nodig om files naar Homey te uploaden. De HTTP server blijft werken, dus PeterDeeDash ook. 
(thanks Martin_van_der_Aart)



- <B>To run this dashboard locally @ raspberry or linux (vm) (linux command line):</B>
```
npm i -g serve
git clone https://github.com/PeterKawa/PeterDeeDash
cd PeterDeeDash
serve -p 5000 app
```

Then visit (for English, change `lang=nl` into `lang=en`. Other languages*** can be selected from the dashboard menu after opening the URL):</br>
- Android tablet / phone: `http://localhost:5000/?theme=tablet&lang=nl&token=<TOKEN>`</br>
- Google Nest Hub: `http://localhost:5000/?theme=google_nest_hub&lang=nl&token=<TOKEN>`</br>
- iPad: `http://localhost:5000/?theme=ipad&lang=nl&token=<TOKEN>`</br>
- Raspberry: `http://localhost:5000/?theme=raspberry&lang=nl&token=<TOKEN>`</br>
- Web (common) `http://localhost:5000/?theme=web&lang=nl&token=<TOKEN>`</br>

> `**)Your token can be acquired by visiting https://homey.ink and looking in the console after logging in.



`***)` <b><I>PeterDeeDash is available in CN/CS/DA/DE/EN/ES/FR/FY/IT/LU/MA/NB/NL/RO/SV/TR</I></b>




--------------------------------------------------



Original Homey Cornelisse ReadMe.md:

Homey Cornelisse Dash is an open-source project for wall-mounted Homey dashboards.
This project is forked from Homey.ink / homeydash.com and is primarily aimed at usage on an iPad or iPhone

![Homey.ink on web](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/web/web.png)
![Homey.ink on iPad](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/ipad/ipad.png)
![Homey.ink on iPhone](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/iphone/iphone.png)
![Homey.ink on algemeen](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/algemeen/brandmeld.png)
