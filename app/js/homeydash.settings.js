var newoutdoortemperature
var newindoortemperature
var newhomeydashdevicebrightness
var nohomeybrightnessdevice
var newlanguage
var newtheme
var neworder
var token
var urlbackground
var opacitybackground
var ulrbackgrounderror
var urllogo
var urllogoerror
var newshowTime
var newZoom
var $styleElem
var $content
var $settingspanel
var $flamepanel
var homey

window.addEventListener('load', function() {
    var $version = document.getElementById('version');
    $version.innerHTML = "Homey Cornelisse dash version " + parent.version

    newoutdoortemperature = parent.outdoortemperature
    newindoortemperature = parent.indoortemperature
    newhomeydashdevicebrightness = parent.homeydashdevicebrightness
    newlanguage = parent.locale
    newtheme = parent.theme
    token = parent.urltoken
    $styleElem = parent.styleElem
    $content = parent.$content
    $settingspanel = parent.$settingspanel
    homey = parent.homey

    var prevLogo;
    var prevBackground;

    var $bodysettings = document.getElementById('body-settings');
    var $outdoortemperature = document.getElementById('settings-temperature-outdoor-select');
    var $indoortemperature = document.getElementById('settings-temperature-indoor-select');
    var $devicebrightnessdescription = document.getElementById('appearance-device-brightness');
    var $devicebrightnessselect = document.getElementById('settings-device-brightness-select');
    var $languages = document.getElementById('settings-language-select');
    var $themes = document.getElementById('settings-theme-select');
    var $urllogo = document.getElementById('url-logo');
    var $btndeletelogo = document.getElementById('btn-delete-logo');
    var $urlbackground = document.getElementById('url-background');
    var $opacitybackground = document.getElementById("opacity-background");
    var $btndeletebackground = document.getElementById('btn-delete-background');
    var $switchshowtime = document.getElementById('switch-show-time');
    var $zoomcontent = document.getElementById('zoom-content'); 
    var $row1 = document.getElementById('row1');
    var $row1up = document.getElementById('row1-up');
    var $row1down = document.getElementById('row1-down');
    var $row2 = document.getElementById('row2');
    var $row2up = document.getElementById('row2-up');
    var $row2down = document.getElementById('row2-down');
    var $row3 = document.getElementById('row3');
    var $row3up = document.getElementById('row3-up');
    var $row3down = document.getElementById('row3-down');
    //var $preview = document.getElementById('preview');

    document.getElementById('settings-language-title').innerHTML = parent.texts.settings.title.language;
    document.getElementById('settings-theme-title').innerHTML = parent.texts.settings.title.theme;
    document.getElementById('appearance-temperature-outdoor').innerHTML = parent.texts.settings.title.temperature.outdoor;
    document.getElementById('appearance-temperature-indoor').innerHTML = parent.texts.settings.title.temperature.indoor;
    $devicebrightnessdescription.innerHTML = parent.texts.settings.title.brightnessdevice;
    document.getElementById('appearance-logo').innerHTML = parent.texts.settings.appearance.logo;
    document.getElementById('appearance-background').innerHTML = parent.texts.settings.appearance.background;
    document.getElementById('appearance-opacity').innerHTML = parent.texts.settings.appearance.opacity;
    document.getElementById('appearance-clock').innerHTML = parent.texts.settings.appearance.clock;
    document.getElementById('appearance-zoom').innerHTML = parent.texts.settings.appearance.zoom;

    neworder = getCookie("order")
    if ( neworder == "") {
        neworder = "1,2,3"
    }

    renderOrdering()

    var $css = document.createElement('link');
    $css.rel = 'stylesheet';
    $css.type = 'text/css';
    $css.href = './css/themes/' + newtheme + '.settings.css';
    document.head.appendChild($css);

    homey.devices.getDevices().then(function(devices) {
        var temperaturesensors = ""
        var homeydashdevicesbrightness = ""
        nohomeybrightnessdevice = true
        for (item in devices) {
            device = devices[item]
            if ( device.ready ) {
                if ( device.capabilitiesObj.measure_temperature ) {
                    temperaturesensors = temperaturesensors + "<option value='" + device.id + "'>" + device.name + "</option>"
                }
                if ( device.capabilitiesObj.dim && device.name.substring(0,10) == "Homeydash-" ) {
                    homeydashdevicesbrightness = homeydashdevicesbrightness  + "<option value='" + device.id + "'>" + device.name + "</option>"
                    // temp code
                    if ( device.id == newhomeydashdevicebrightness ) { 
                        nohomeybrightnessdevice = false 
                    }
                    // temp code
                }
            }
        }
        $indoortemperature.innerHTML = "<option value='none'>None</option>" + temperaturesensors
        $outdoortemperature.innerHTML = "<option value='homey'>Homey built-in</option>" + temperaturesensors

        if ( homeydashdevicesbrightness != "" ) {
            $devicebrightnessselect.innerHTML = "<option value='none'>None</option>" + homeydashdevicesbrightness
            $devicebrightnessdescription.classList.remove("hidden")
            $devicebrightnessselect.classList.remove("hidden")
        }
    }).then(function(){
        $indoortemperature.value = newindoortemperature
        $outdoortemperature.value = newoutdoortemperature
        if ( nohomeybrightnessdevice ) {
            $devicebrightnessselect.value = "none"
        } else {
            $devicebrightnessselect.value = newhomeydashdevicebrightness
        }
    })

    $outdoortemperature.addEventListener('change', function() {
        newoutdoortemperature = $outdoortemperature.value
        console.log(newoutdoortemperature)
    })

    $indoortemperature.addEventListener('change', function() {
        newindoortemperature = $indoortemperature.value
    })

    $devicebrightnessselect.addEventListener('change', function() {
        newhomeydashdevicebrightness = $devicebrightnessselect.value
    })
    
    $languages.value = newlanguage

    $languages.addEventListener('change', function() {
        newlanguage = $languages.value
    })

    $themes.value = newtheme

    $themes.addEventListener('change', function() {
        newtheme = $themes.value
    })

    urllogo = getCookie('logo')
    $urllogo.value = urllogo
    $urllogo.addEventListener('change', function() {
        urllogo = $urllogo.value

        checkImage( $urllogo.value, function(){ 
            urllogoerror = false
            $urllogo.style.color = "#000000"
            showPreview($urllogo.value)
          }, function(){ 
            urllogoerror = true              
            $urllogo.style.color = "#ff0000"
          } );
    })

    urlbackground = getCookie('background')
    $urlbackground.value = urlbackground
    if ( $urlbackground.value != "" ) {
        showPreview($urlbackground.value,true)
    }

    $urlbackground.addEventListener('change', function() {
        urlbackground = $urlbackground.value
        
        checkImage( $urlbackground.value, function(){ 
            urlbackgrounderror = false
            $urlbackground.style.color = "#000000"
            $opacitybackground.disabled = false;
            showPreview($urlbackground.value,true)
          }, function(){ 
            urlbackgrounderror = true              
            $urlbackground.style.color = "#ff0000"
            $opacitybackground.disabled = true;
          } );
    })

    $btndeletelogo.addEventListener('click', function() {
        urllogo = ""
        urllogoerror = false
        $urllogo.value = ""
        $urllogo.style.color = "#000000"
        showPreview("")
    })
    $btndeletebackground.addEventListener('click', function() {
        urlbackground = ""
        urlbackgrounderror = false
        $urlbackground.value = ""
        $urlbackground.style.color = "#000000"
        $opacitybackground.value = 50
        $opacitybackground.disabled = true
        showPreview("",true)
    })

    opacitybackground = getCookie('backgroundopacity')
    if ( !urlbackground == "" ) {
        $opacitybackground.value = opacitybackground*100
    } else {
        $opacitybackground.value = 50
        opacitybackground = 50
    }

    newshowTime = getCookie("showtime")
    newshowTime = ( newshowTime == "true") ? true: false;
    $switchshowtime.checked = newshowTime

    $switchshowtime.addEventListener('click', function() {
        newshowTime = $switchshowtime.checked
    })

    newZoom = getCookie("zoom")
    $zoomcontent.value = newZoom*100

    function renderOrdering() {

        var row = neworder.split(",")

        $row1.style.order = row[0]
        $row2.style.order = row[1]
        $row3.style.order = row[2]

        setArrows()

        $row1up.addEventListener('click', function() {
            if ( $row1up.style.opacity == 0.5 ) { return }
            moveItem(1,"up")
        })
        $row1down.addEventListener('click', function() {
            if ( $row1down.style.opacity == 0.5 ) { return }
            moveItem(1,"down")
        })
        $row2up.addEventListener('click', function() {
            if ( $row2up.style.opacity == 0.5 ) { return }
            moveItem(2,"up")
        })
        $row2down.addEventListener('click', function() {
            if ( $row2down.style.opacity == 0.5 ) { return }
            moveItem(2),"down"
        })
        $row3up.addEventListener('click', function() {
            if ( $row3up.style.opacity == 0.5 ) { return }
            moveItem(3,"up")
        })
        $row3down.addEventListener('click', function() {
            if ( $row3down.style.opacity == 0.5 ) { return }
            moveItem(3,"down")
        })   
    }
    
    function setArrows() {
        console.log("order: " + neworder)
        var row = neworder.split(",")
        
        document.getElementById('row'+$row1.style.order+'-up').style.opacity = 1
        document.getElementById('row'+$row2.style.order+'-up').style.opacity = 1
        document.getElementById('row'+$row3.style.order+'-up').style.opacity = 1
        document.getElementById('row'+$row1.style.order+'-down').style.opacity = 1
        document.getElementById('row'+$row2.style.order+'-down').style.opacity = 1
        document.getElementById('row'+$row3.style.order+'-down').style.opacity = 1

        for (i=1 ; i < 4 ; i++) {
            console.log("i: " + i)
            console.log("row["+(i-1)+"]: " + row[i-1])
            if ( row[i-1] == 1 ) { 
                console.log("bovenste regel: " + i )
                document.getElementById('row'+i+'-up').style.opacity = 0.5
            }
            if ( row[i-1] == 3 ) { 
                console.log("onderste regel: " + i )
                document.getElementById('row'+i+'-down').style.opacity = 0.5
            }
        }
    }

    function moveItem(item, direction) {
        var row = neworder.split(",")
        currentPos = row[item-1] 
        if ( direction == "up" ) {
            newPos = parseInt(row[item-1])-1
        } else {
            newPos = parseInt(row[item-1])+1
        }
        if ( row[0] == newPos ) { row[0] = currentPos }
        if ( row[1] == newPos ) { row[1] = currentPos }
        if ( row[2] == newPos ) { row[2] = currentPos }
        row[item-1] = newPos
        neworder = row[0] + ","+ row[1]+","+row[2]
        $row1.style.order = row[0]
        $row2.style.order = row[1]
        $row3.style.order = row[2]
        setArrows()
    }

    function showPreview(image,background) {
        if ( image ) {
            if ( background ) {
                var css = "content: ''; background: url('" + $urlbackground.value + "');"
                css = css + " top: 0; left: 0; bottom: 0; right: 0; position: absolute; z-index: -1; background-size:cover;"
                css = css + " opacity: " + $opacitybackground.value/100 + ";"
                $styleElem.innerHTML = "#body:after {" + css + "}";
                parent.document.body.style.background = "black"
            } else {
                var $logo = parent.document.getElementById('logo');
                prevLogo = $logo.style.backgroundImage
                $logo.style.backgroundImage = "url('" + image + "')"
            }
        } else {
            if ( background ) {
                $styleElem.innerHTML = ""
                parent.document.body.style.background = ""
            } else {
                var $logo = parent.document.getElementById('logo');
                $logo.style.backgroundImage = prevLogo
            }
        }        
    }
    
    $opacitybackground.oninput = function() {
        setOpacity(this.value/100)
    }

    function setOpacity(opacity) {
        var style = $styleElem.innerHTML
        oldStyle = style.split(";")
        newStyle = ""
        for (i=0; i < 9 ;i++) {
            newStyle = newStyle + oldStyle[i] +";"
        }
        newStyle = newStyle + " opacity: " + opacity + ";}"
        $styleElem.innerHTML = newStyle
        opacitybackground = opacity
    }

    $zoomcontent.oninput = function() {
        setZoom(this.value/100)
    }

    function setZoom(zoom) {
        $content.style.zoom = zoom;
        newZoom = zoom
        document.getElementById('settings-title-theme').innerHTML = zoom
    }

    $zoomcontent.addEventListener('touchstart', function() {
        $bodysettings.style.opacity = 0.5
        $settingspanel.style.opacity = 0.5
    })
    $zoomcontent.addEventListener('touchend', function() {
        setTimeout(function(){
            $bodysettings.style.opacity = 1
            $settingspanel.style.opacity = 1
          }, 200);
    })
    $zoomcontent.addEventListener('mousedown', function() {
        $bodysettings.style.opacity = 0.5
        $settingspanel.style.opacity = 0.5
    })
    $zoomcontent.addEventListener('mouseup', function() {
        setTimeout(function(){
            $bodysettings.style.opacity = 1
            $settingspanel.style.opacity = 1
          }, 200);
    })

    parent.iframesettings = window;
})