
  jkvalue=localStorage.getItem("jklanguage");

  if(jkvalue=="0"||null)
  {
    $('.eng').show();
    $('.fin').hide();
  }else{
    $('.eng').hide();
    $('.fin').show();
  }
    function selectFin(){
      localStorage.setItem("jklanguage","1");
      $('.eng').hide();
      $('.fin').show();
      }
    function selectEn(){
      localStorage.setItem("jklanguage","0");
      $('.eng').show();
      $('.fin').hide();
      }


