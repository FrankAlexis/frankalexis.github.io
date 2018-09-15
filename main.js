/*function getRandomColor() {
    var color = '#';
  
    for (var i = 0; i < 3; i++) {
      color += ('0' + Math.floor(Math.random() * 180).toString(16)).slice(-2);
    }
  
    return color;
  }
  
  function iCanTellYou() {
    var monthsWihtYou = [
      'A tu lado siento féliz',
      'Amaré cada segundo de ti' ,
      'Párate frente a mi, quiero verte todos los días de mi vida...',
      'Puedo esconderme en tus sueños?',
      'Contigo la vida se ve más bonita',
      'Te pienso por que no quiero olvidarte ni un segundo',
      'Y si mejor existimos en nuestro mundo?...',
      'Hay muchas personas teniendo muchas personas favoritas, yo solo quiero tenerte',
      'Este es el primer día número 365',
      'La vida era medio grisesita sin ti',
      'Tus sentimientos son mas lindos que tus fotos de paisajes',
      'Cómo se sentirá amarte más?'
    ]
    content = document.querySelector('.contentFeels');
  
    for(var i = 0; i < monthsWihtYou.length; i++) {
      var bg;
  
      content.innerHTML += '<div class="months">'+ monthsWihtYou[i] + '</div>';
      bg = content.querySelector('.months:last-child');
      bg.style.backgroundColor = getRandomColor();
    }
  }
  iCanTellYou();
  */
  