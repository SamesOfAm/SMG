<script>
    function loadjQuery(e,t){var n=document.createElement("script");n.setAttribute("src",e);n.onload=t;n.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded")t()};document.getElementsByTagName("head")[0].appendChild(n)}function main(){
        var $cr=jQuery.noConflict();var old_src;$cr(document).ready(function(){$cr(".cr_form").submit(function(){$cr(this).find('.clever_form_error').removeClass('clever_form_error');$cr(this).find('.clever_form_note').remove();$cr(this).find(".musthave").find('input, textarea').each(function(){if(jQuery.trim($cr(this).val())==""||($cr(this).is(':checkbox'))||($cr(this).is(':radio'))){if($cr(this).is(':checkbox')||($cr(this).is(':radio'))){if(!$cr(this).parent().find(":checked").is(":checked")){$cr(this).parent().addClass('clever_form_error')}}else{$cr(this).addClass('clever_form_error')}}});if($cr(this).attr("action").search(document.domain)>0&&$cr(".cr_form").attr("action").search("wcs")>0){var cr_email=$cr(this).find('input[name=email]');var unsub=false;if($cr("input['name=cr_subunsubscribe'][value='false']").length){if($cr("input['name=cr_subunsubscribe'][value='false']").is(":checked")){unsub=true}}if(cr_email.val()&&!unsub){$cr.ajax({type:"GET",url:$cr(".cr_form").attr("action").replace("wcs","check_email")+$cr(this).find('input[name=email]').val(),success:function(data){if(data){cr_email.addClass('clever_form_error').before("<div class='clever_form_note cr_font'>"+data+"</div>");return false}},async:false})}var cr_captcha=$cr(this).find('input[name=captcha]');if(cr_captcha.val()){$cr.ajax({type:"GET",url:$cr(".cr_form").attr("action").replace("wcs","check_captcha")+$cr(this).find('input[name=captcha]').val(),success:function(data){if(data){cr_captcha.addClass('clever_form_error').after("<div style='display:block' class='clever_form_note cr_font'>"+data+"</div>");return false}},async:false})}}if($cr(this).find('.clever_form_error').length){return false}return true});$cr('input[class*="cr_number"]').change(function(){if(isNaN($cr(this).val())){$cr(this).val(1)}if($cr(this).attr("min")){if(($cr(this).val()*1)<($cr(this).attr("min")*1)){$cr(this).val($cr(this).attr("min"))}}if($cr(this).attr("max")){if(($cr(this).val()*1)>($cr(this).attr("max")*1)){$cr(this).val($cr(this).attr("max"))}}});old_src=$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src");if($cr("div[rel='captcha'] img:not(.captcha2_reload)").length!=0){captcha_reload()}});function captcha_reload(){var timestamp=new Date().getTime();$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src","");$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src",old_src+"?t="+timestamp);return false}

    }
    if(typeof jQuery==="undefined"){loadjQuery("//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js",main)}else{main()}

</script>



<style id="style">
    .cr_site {background-color:#eee;}
    .cr_header {color:#000000;}
    .cr_body {background-color:#ffffff;font-size:12px;color:#000000;}
    .cr_hr {background-color:#ccc;}
    .cr_site a {color:#0084ff;}
    .imprint {color:#000;}
    .cr_page {width:640px;}

</style>