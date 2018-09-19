javascript:(
    $(document).ready(function() {
        $('img').each(function() {
            var $img = $(this);
            var imgsrc = $img.attr('src');
            var imgalt = $img.attr('alt');
            var newresult = imgsrc.split(".");
            newresult[1] = "0"+newresult[1];
            var finalUrl = newresult.join(".");
            console.log(finalUrl); 
            $img.attr('src',finalUrl);
            $img.attr('alt',imgalt);
        });
    })
)()
