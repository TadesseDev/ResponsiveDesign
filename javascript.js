var menu=document.getElementById('menu');
var ul=document.getElementsByTagName('ul')[0];
menu.onclick=function(){var status=ul.getAttribute('class'); if(status=='hidden'){ul.setAttribute('class','show')}else {ul.setAttribute('class','hidden')}}