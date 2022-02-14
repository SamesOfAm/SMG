<script>
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    const scrollSmoothly = (e) => {
        console.log(e.target.parentElement.hash);
        let anchorElement = e.target;
        if (e.target.parentElement.nodeName === 'A') {
            anchorElement = e.target.parentElement;
        }
        e.preventDefault();
        jQuery('html, body').animate({
            scrollTop: jQuery(anchorElement.hash).offset().top
        }, 800);
        return !1;
    };

    const allScrollButtons = jQuery('.scroll-button');

    jQuery(document).ready(function() {
        allScrollButtons.each(function(index, button) {
            button.addEventListener('click', scrollSmoothly);
        })
    });

    let headerFixed = false;
    jQuery(window).scroll(function(){
        const scrolled = jQuery(window).scrollTop();
        const header = document.getElementById('header');
        const kopf = document.querySelector('.kopf');
        const container = document.getElementById('container');
        const burger = document.querySelector('.burger_mobile');
        const langSelect = document.querySelector('.world_icon_mobile');
        if (vw <= 767 && scrolled > 0 && !headerFixed){
            container.style.marginTop = "0";
            burger.style.top = "16px";
            kopf.style.marginTop = "0";
            kopf.style.height = "60px";
            header.style.position = "fixed";
            header.style.height = "60px";
            header.style.background = "white";
            header.style.zIndex = "2";
            langSelect.style.top = "10px";
            headerFixed = true;
        } else if (vw <= 767 && scrolled === 0 && headerFixed) {
            container.style.marginTop = "25px";
            burger.style.top = "0";
            kopf.style.marginTop = "40px";
            kopf.style.height = "initial";
            header.style.position = "relative";
            header.style.height = "initial";
            header.style.background = "none";
            header.style.zIndex = "0";
            langSelect.style.top = "-5px";
            headerFixed = false;
        }
    });

    jQuery(document).ready(function(){
        // document.querySelector('.to-top-button').hide();
        jQuery(window).scroll(function(){
            const value=400;
            const scrolling=jQuery(window).scrollTop();
            if(scrolling>value && vw > 1217){
                jQuery('.to-top-button').fadeIn();
            } else{
                jQuery('.to-top-button').fadeOut();
            }
        });
        jQuery('.to-top-button').click(function(){
            jQuery('html, body').animate({scrollTop:'0px'},800);
            return !1;
        });
    });

</script>