function getRandomColor() {
    var color = '#';
  
    for (var i = 0; i < 3; i++) {
      color += ('0' + Math.floor(Math.random() * 180).toString(16)).slice(-2);
    }
  
    return color;
  }
  
  function iCanTellYou() {
    var monthsWihtYou = [
      'La dopamina que liberas en mi, me hace sentir féliz.',
      'Amo tu forma de ser, sencilla, alegre, divertida, competitiva, infantil &hearts',
      'Contigo la vida se ve más bonita.',
      'A veces te pienso y no logro olvidarte. Porque no se puede sacar de la cabeza aquello que está en el corazón.',
      'La vida era medio gris sin ti.',
      'Le temi al amor, pero luego me di cuenta que hubiera sido un error no amarte, porque es la que me ha ayudado a crecer como persona.',
      'Tus sentimientos y tu forma de ser son mas lindos que tus fotos de paisajes y bacterias :)',
      '¿Cómo se sentirá sentir lo mismo el uno por el otro?. Lo dejare a mi imaginación...'
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
  