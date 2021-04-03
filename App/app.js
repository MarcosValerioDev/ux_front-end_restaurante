function wScroll(nome, numero){
    $(nome).click(function(){
        $("html, body").animate({scrollTop: numero},500,function(){});
                  
    });

}