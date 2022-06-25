function pbass(){
  var elem = document.getElementById('bass');
  elem.style.fontFamily='Cambria';
  elem.value="BASS activated (Press B to use)";
    document.addEventListener('keypress',(event) =>{ 
    var code = event.code;
    if(code=='KeyB')
    {
      var audio = new Audio("./Assets/bass.wav");
      audio.play();
    } 
  }, false);
}
function pclap(){
  var elem = document.getElementById('clap');
  elem.style.fontFamily='Cambria';
  elem.value="Clap activated\n(Press A to use)";
  document.addEventListener('keypress',(event) =>{ 
    var code = event.code;
    if(code=='KeyA')
    {
      var audio = new Audio("./Assets/clap.wav");
      audio.play();
    }
    
  }, false);
}
function pcyb(){
  var elem = document.getElementById('cyb');
  elem.style.fontFamily='Cambria';
  elem.value="Cymbal activated\n(Press S to use)";
  document.addEventListener('keypress',(event) =>{ 
    var code = event.code;
    if(code=='KeyS')
    {
      var audio = new Audio("./Assets/cymbal.wav");
      audio.play();
    }
    
  }, false);
}
function phat(){
  var elem = document.getElementById('hat');
  elem.style.fontFamily='Cambria';
  elem.value="Hi Hat activated\n(Press D to use)";
  document.addEventListener('keypress',(event) =>{ 
    var code = event.code;
    if(code=='KeyD')
    {
      var audio = new Audio("./Assets/hi_hat.wav");
      audio.play();
    }
    
  }, false);
}
function pkick(){
  var elem = document.getElementById('kick');
  elem.style.fontFamily='Cambria';
  elem.value="Kick activated\n(Press J to use)";
  document.addEventListener('keypress',(event) =>{ 
    var code = event.code;
    if(code=='KeyJ')
    {
      var audio = new Audio("./Assets/kick.wav");
      audio.play();
    }
  }, false);
}
function psnare(){
  var elem = document.getElementById('snare');
  elem.style.fontFamily='Cambria';
  elem.value="Snare activated\n(Press K to use)";
  document.addEventListener('keypress',(event) =>{ 
    var code = event.code;
    if(code=='KeyK')
    {
      var audio = new Audio("./Assets/snare.wav");
      audio.play();
    } 
  }, false);
}
function ptom(){
  var elem = document.getElementById('tom');
  elem.style.fontFamily='Cambria';
  elem.value="Tom activated\n(Press L to use)";
  document.addEventListener('keypress',(event) =>{ 
    var code = event.code;
    if(code=='KeyL')
    {
      var audio = new Audio("./Assets/tom.wav");
      audio.play();
    }
  }, false);
}
function clse(){
  window.location.reload("Refresh");
}