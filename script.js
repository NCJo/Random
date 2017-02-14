function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var poems = ["silent lips \nspeak louder.", 
             "the rich flavor of love\nis tainted by the\nbitterness\nof knowing\nthat it surely will not\nlast.", 
             "i never knew\nthat there was so much\ni never knew.",
             "i often indulge\nin little things\nlike lemon meringue pie\nold records\nand missing you.",
             "am i in love\nor\nam i in love\nwith the idea of being\nin love.",
             "i like to think\nthat your greatest success\nwas me\nand so was your greatest\nloss.",
             "you pushed\nthe clouds away\nand pointed to a rainbow\nthat i never noticed\ni had never noticed.",
             "i find solace\nin solitude\nbecause\ni quite enjoy my own\ncompany\nno matter how alone\ni may seem to be.",
             "please hold me\nthe way the night sky\nholds the moon.",
             " i made myself a drink\ncalled heartbreak\nand hope.\nit tastes so sweet\nbut burns all the way\ndown.",
             "how very\nmidnight\nof this afternoon\nto choke me\nwith such darkness,\nyet wrap me\nin such hope.",
             "you may watch me,\nyou may hold me,\nyou may walk beside me\n\nbut you will not\nkeep me.\n\nfor i am a river,\nforever overflowing,\nwild and free."]

function getPoem() {
  $.ajax({
    success: function(response) {
      var poem = Math.floor(Math.random() * poems.length);
      var strPoem = new String(poems[poem]);
      $(".quote_text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          //$('#text').text(poems[poem]);
          $('#text').text(strPoem);
        });

      $(".quote_author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html("deshka");
        });

      var color = Math.floor(Math.random() * colors.length);
      //document.body.style.background = colors[color]
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".button").animate({
        backgroundColor: colors[color]
      }, 1000);
    }
   });
 }
$(document).ready(function() {
  getPoem();
  $('#new_quote').on('click', getPoem);
});