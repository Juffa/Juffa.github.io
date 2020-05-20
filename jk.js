
   //localStorage.removeItem("jklanguage"); 
  jkvalue=localStorage.getItem("jklanguage");
  //console.log(jkvalue); 
  if(jkvalue=="eng")
  {
    $('.eng').show();
    $('.fin').hide();
  }else if(jkvalue=="fin")
  {
    $('.eng').hide();
    $('.fin').show();
  }else{
    $('.eng').show();
    $('.fin').hide();
  }
    function selectFin(){
      localStorage.setItem("jklanguage","fin");
      $('.eng').hide();
      $('.fin').show();
      }
    function selectEn(){
      localStorage.setItem("jklanguage","eng");
      $('.eng').show();
      $('.fin').hide();
      }


