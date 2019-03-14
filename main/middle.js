
$("tr:not(':first')").click(
    
  function(){

    ck=$(this).children(":first").children("input:checkbox")
    
   if(ck.prop('checked')==true)
   {
       ck.prop('checked',false)
   }else{
    ck.prop('checked',true)
   }
    
    
})
$("tr:not(':first')").hover(function(){
 
 
    $(this).children().eq(1).children(".options").css("visibility","visible")
},function(){
    $(this).children().eq(1).children(".options").css("visibility","hidden")
})
$("#sall").click(function(){
//    console.info("2222")
    if($(this).prop('checked')==true)
    {
        $("input:checkbox:not(':first')").prop('checked',true)
    }
   else{
    $("input:checkbox:not(':first')").prop('checked',false)
    }
})
$("input").click(function(event){
   event.stopPropagation();
})
$("button").click(function(event){
    event.stopPropagation();
 })
$(".slopt").children("button").click(function(){
    ss=""
    $("input:checkbox:not(':first')").each(function(k,v){
        ss+="No."+k+" :"+$(v).prop('checked')
    })
    alert(ss)
})
