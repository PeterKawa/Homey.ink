# Homey Cornelisse Dash 

Homey Cornelisse Dash is an open-source project for wall-mounted Homey dashboards.
This project is forked from Homey.ink / homeydash.com and is primarily aimed at usage on an iPad or iPhone


![Homey.ink on web](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/web/web.png)
![Homey.ink on iPad](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/ipad/ipad.png)
![Homey.ink on iPhone](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/iphone/iphone.png)
![Homey.ink on web](https://raw.githubusercontent.com/Homeycornelisse/homey.ink/master/assets/devices/algemeen/brandmeld paneel.png)

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
