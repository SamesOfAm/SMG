<script type="text/javascript">
    // Google Analytics Function for embedding tracking code
    // Google Analytics tracking ID
    var $tracking_id = "UA-10670644-67";

    // Google Analytics Cookie Domain & Path (needed for clearing cookies – have look in the inspector to get the values needed)
    var $tracking_cookie_domain = "stiftung-maennergesundheit.de";
    var $tracking_cookie_path = "/";

    function embedTrackingCode(){
        var gascript = document.createElement("script");
        gascript.async = true;
        gascript.src = "https://www.googletagmanager.com/gtag/js?id="+$tracking_id;
        document.getElementsByTagName("head")[0].appendChild(gascript, document.getElementsByTagName("head")[0]);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', $tracking_id, { 'anonymize_ip': true });

        console.log('Google Analytics Tracking embed')
    }

    function deleteGACookies(){

        // because the gtag cookie uses the tracking id with "-" replaced though "_"
        // we have to do this string manipulation too
        var $gtag_cookie = "_gat_gtag_"+$tracking_id.replace(/-/g, "_");
        console.log('Google Analytics Tracking disable')

        clearCookie('_ga',$tracking_cookie_domain,$tracking_cookie_path);
        clearCookie('_gid',$tracking_cookie_domain,$tracking_cookie_path);
        clearCookie('_gat',$tracking_cookie_domain,$tracking_cookie_path);
        clearCookie($gtag_cookie,$tracking_cookie_domain,$tracking_cookie_path);
        console.log('Google Analytics Tracking disable');
        location.reload();
    }


    window.addEventListener("load", function () {
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                    "background": "#D99C00",
                    "text":"#fff3fc"
                },
                "button": {
                    "background": "#fff3fc",
                    "text":"#150f00"
                }
            },
            "cookie": {
                "expiryDays": 1
            },
            "type": "opt-in",
            "content": {
                "message": "Wir verwenden Tracking-Cookies, um unsere Website stetig zu verbessern sowie für anonymisierte Nutzungsstatistiken.",
                "allow": "Einverstanden",
                "deny": "Ablehnen",
                "link": "Mehr erfahren",
                "href": "{{link_url::5}}",
                "policy": 'Cookie Einstellungen',
                "text":"#fff3fc"
            },
            onPopupOpen: function () {
                document.body.classList.add("cookieconsent-banner-opened");
            },
            onPopupClose: function () {
                document.body.classList.remove("cookieconsent-banner-opened");
            },
            onInitialise: function (status) {
                var type = this.options.type;
                var didConsent = this.hasConsented();
                if (type == 'opt-in' && didConsent) {
                    // enable cookies
                    embedTrackingCode();
                }
                if (type == 'opt-out' && !didConsent) {
                    // disable cookies
                }
            },
            onStatusChange: function (status, chosenBefore) {
                var type = this.options.type;
                var didConsent = this.hasConsented();
                if (type == 'opt-in' && didConsent) {
                    // enable cookies
                    embedTrackingCode();
                }
                if (type == 'opt-in' && !didConsent) {
                    // disable cookies
                    deleteGACookies();
                }
                if (type == 'opt-out' && !didConsent) {
                    // disable cookies
                    deleteGACookies();
                }
            },
            onRevokeChoice: function () {
                var type = this.options.type;
                if (type == 'opt-in') {
                    // disable cookies

                }
                if (type == 'opt-out') {
                    // enable cookies
                    embedTrackingCode();
                }
            },

        })
    });

    // Function for deleting Cookies (such as that ones from Google Analytics)
    // Source: https://blog.tcs.de/delete-clear-google-analytics-cookies-with-javascript/
    function clearCookie(d,b,c){try{if(function(h){var e=document.cookie.split(";"),a="",f="",g="";for(i=0;i<e.length;i++){a=e[i].split("=");f=a[0].replace(/^\s+|\s+$/g,"");if(f==h){if(a.length>1)g=unescape(a[1].replace(/^\s+|\s+$/g,""));return g}}return null}(d)){b=b||document.domain;c=c||"/";document.cookie=d+"=; expires="+new Date+"; domain="+b+"; path="+c}}catch(j){}};


    // function for triggering a click on the cc-revoke button
    // wich will show the consent banner again.
    // You may use it in a link, such as this example:
    // <a href="#" onclick="openCCbanner(); return false;">Cookie Consent</a>
    function openCCbanner(){
        var el = document.querySelector('.cc-revoke');
        el.click();
    }


    // ---- OPTIONAL -------------------IMPORTANT
    // Google Analytics Opt-Out Cookie
    var $tracking_disable_cookie = 'ga-disable-' + $tracking_id;
    if (document.cookie.indexOf($tracking_disable_cookie + '=true') > -1) {
        window[$tracking_disable_cookie] = true;
    }
    function gaOptout() {
        document.cookie = $tracking_disable_cookie + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window[$tracking_disable_cookie] = true;
        alert("Der Opt-Out-Cookie für das Deaktivieren von Google Analytics wurde abgelegt.")
    }
</script>