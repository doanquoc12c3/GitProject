var canvas = document.getElementById('myCanvas'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'car.png';
  base_image.width = 100;
  base_image.height = 100;
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0, base_image.width,base_image.height);
  }
}
