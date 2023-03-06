<?php

?>
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

    /*let headerFixed = false;
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
    });*/

    if(document.querySelector('.mod_search')) {
        const allSearchForms = document.querySelectorAll('.mod_search');
        allSearchForms.forEach(form => {
            const searchInput = form.querySelector('input');
            console.log(searchInput);
            searchInput.addEventListener('change', function() {
                console.log('Changing');
                searchInput.value = "*" + searchInput.value + "*";
            })
        })
    }

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

    // SELBSTTEST

    const selfTestContainer = document.getElementById('self-test');
    const question = document.getElementById('question');
    const answerContainer = document.querySelector('.answers');
    const allAnswers = document.querySelectorAll('.answers div');
    const backButton = document.querySelector('.back-button');
    const newButton = document.querySelector('.new-button');
    const progressBar = document.querySelector('.progress-bar-fill');
    let currentQuestion = 0;
    let score = 0;
    let amounts = [];


    const questions = [
      "{{insert_content::673}}",
      "{{insert_content::674}}",
      "{{insert_content::675}}",
      "{{insert_content::676}}",
      "{{insert_content::677}}",
      "{{insert_content::678}}",
      "{{insert_content::679}}",
      "{{insert_content::680}}",
      "{{insert_content::681}}",
      "{{insert_content::682}}",
      "{{insert_content::683}}",
      "{{insert_content::684}}",
      "{{insert_content::685}}",
      "{{insert_content::686}}",
      "{{insert_content::687}}",
      "{{insert_content::688}}",
      "{{insert_content::689}}",
      "{{insert_content::690}}",
      "{{insert_content::691}}",
      "{{insert_content::692}}",
      "{{insert_content::693}}",
      "{{insert_content::694}}",
      "{{insert_content::695}}",
      "{{insert_content::696}}",
      "{{insert_content::697}}"
    ];

    const outcomes = [
      "{{insert_content::698}}",
      "{{insert_content::699}}",
      "{{insert_content::700}}"
    ]

    question.innerHTML = questions[currentQuestion];

    const finishQuestionnaire = () => {
      answerContainer.style.display = 'none';
      backButton.style.display = 'none';
      newButton.style.display = 'block';
      if(score <= 7) {
        question.innerHTML = outcomes[0];
      } else if(score > 7 && score <= 18) {
        question.innerHTML = outcomes[1];
      } else {
        question.innerHTML = outcomes[2];
      }
    }

    newButton.addEventListener('click', function() {
      answerContainer.style.display = 'flex';
      newButton.style.display = 'none';
      question.innerHTML = "Ich hatte wenig Interesse und Freude an meinen alltäglichen Tätigkeiten.";
      currentQuestion = 0;
      score = 0;
      amounts = [];
      progressBar.style.width = '0%';
    })

    backButton.addEventListener('click', function() {
      score = score-amounts[currentQuestion-1];
      currentQuestion--;
      amounts.splice(-1);
      if(currentQuestion === 0) {
        backButton.style.display = 'none';
      }
      progressBar.style.width = currentQuestion * 100 / 25 + '%';
      question.innerHTML = questions[currentQuestion];
    })

    allAnswers.forEach(answer => {
      answer.addEventListener('click', function() {
        const amount = parseInt(answer.dataset.amount);
        backButton.style.display = 'blocK';
        score = score+amount;
        currentQuestion++;
        amounts.push(amount);
        if(currentQuestion <= 24) {
          question.innerHTML = questions[currentQuestion];
        } else {
          finishQuestionnaire();
        }
        progressBar.style.width = currentQuestion * 100 / 25 + '%';
      })
    })

</script>
