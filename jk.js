
 /*
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
    */



   /*
     document.addEventListener("DOMContentLoaded", () => {
    let jkvalue = localStorage.getItem("jklanguage");

    if (jkvalue === "fin") {
      selectFin();
    } else {
      // Default to English if not set or invalid
      selectEn();
    }
  });
  */
  /*
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
      */

 // document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("jklanguage") || "eng";
  if (lang === "fin") {
    selectFin();
  } else {
    selectEn();
  }
  console.log(localStorage.getItem("jklanguage")+" jk.js");
//});


  function selectFin() {
  localStorage.setItem("jklanguage", "fin");
  hideElements("eng");
  showElements("fin");
  console.log(localStorage.getItem("jklanguage")+" jk.js");
}

function selectEn() {
  localStorage.setItem("jklanguage", "eng");
  hideElements("fin");
  showElements("eng");
  console.log(localStorage.getItem("jklanguage")+" jk.js");
}

function showElements(className) {
  document.querySelectorAll('.' + className).forEach(el => {
    el.style.display = '';
  });
}

function hideElements(className) {
  document.querySelectorAll('.' + className).forEach(el => {
    el.style.display = 'none';
  });
}

