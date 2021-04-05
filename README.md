# PeterDeeDash 
#
# - test version -
April 5, 2021: uploaded all my edited files and new files.

> I primarily edited this nice flavour of Homeydash.com for these reasons:

1) I wanted it to be able to show all available values on tiles, without touching or "longpress" them, so probably usable at Google Hubs too.

2) I wanted to make room for as much tiles as possible, so less space used by the info bar.

3) I tweaked it to appear nice on a tablet running Android Chrome & Fully browsers, added menu item "Tablet"

![Added menu item](https://raw.githubusercontent.com/PeterKawa/PeterDeeDash/blob/master/assets/menu_android_tablet.png)

--------------------------------------------------

Original ReadMe.md:

Homey Cornelisse Dash is an open-source project for wall-mounted Homey dashboards.
This project is forked from Homey.ink / homeydash.com and is primarily aimed at usage on an iPad or iPhone


![Homey.ink on web](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/web/web.png)
![Homey.ink on iPad](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/ipad/ipad.png)
![Homey.ink on iPhone](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/iphone/iphone.png)
![Homey.ink on algemeen](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/algemeen/brandmeld.png)


To run this locally:

```
npm i -g serve
git clone https://github.com/Homeycornelisse/homey.ink
cd homey.ink
serve -p 5000 app
```

Then visit `http://localhost:5000/?theme=web&lang=en&token=<TOKEN>`

or `http://localhost:5000/?theme=iphone&lang=en&token=<TOKEN>`

Homey.ink is available in German (de), English (en), French (fr), Dutch (nl), Norwegian (nb), Swedish (sv), Danish (da) and Spanish (se)

> Your token can be acquired by visiting https://homey.ink and looking in the console after logging in.
