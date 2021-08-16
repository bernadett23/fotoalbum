/*let data = {
    photo: 'images/kep1.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
  };*/
  let n = 0;
  let imagesData = [{photo:'images/kep1.jpg',title:'My title1',description:'1What happened here, why is this a very nice image'},
  {photo:'images/kep2.jpg',title:'My title2',description:'2What happened here, why is this a very nice image'},
  {photo:'images/kep3.jpg',title:'My title3',description:'3What happened here, why is this a very nice image'},
  {photo:'images/kep4.jpg',title:'My title4',description:'4What happened here, why is this a very nice image'},
  {photo:'images/kep5.jpg',title:'My title5',description:'5What happened here, why is this a very nice image'},
  {photo:'images/kep6.jpg',title:'My title6',description:'6What happened here, why is this a very nice image'},
  {photo:'images/kep7.jpg',title:'My title7',description:'7What happened here, why is this a very nice image'},
  {photo:'images/kep8.jpg',title:'My title8',description:'8What happened here, why is this a very nice image'}]


function leptetes(i)
{
  n=n+i;
  if (n==-1) {n=7;}
  if (n==8) {n=0;}
  loadPhoto(n);
}

  var dots = document.getElementsByClassName("demo");
 
  let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#kepcim').text(`${imagesData[photoNumber].title}`);
    $('#kepleiras').text(`${imagesData[photoNumber].description}`);
    for (i = 0; i < 8; i++) {
      dots[i].className = dots[i].className.replace(" active", "");}
    dots[photoNumber].className += " active";
   // captionText.innerHTML = dots[photoNumber-1].alt;

}

/*$('.elore').click(() => {
  i++;
  if (i==8) {i=0;}
  loadPhoto(i);
  
})

$('.vissza').click(() => {
  i--;
  if (i==-1) {i=7;}
  loadPhoto(i);
  
})
*/
loadPhoto(n);




//$('#indexkep').attr('src', imagesData[photoNumber].photo);
/*
function thumbnail()
{
  for(i=0;i<8;i++)
     {  
       // $(`<img src='${imagesData[i].photo}' width="80" height="60">`).appendTo('.kicsidoboz');
        $('#kicsidoboz').append(`<div class="box" data-index="${i}"><img src='${imagesData[i].photo}' width="80" height="60"></div>`);
        $('.box').click((event) => {
          let indexClicked = $(event.target).attr('data-index');
          // indexClicked is now a string! if you need it as a number you have to change it
          // because for example "1" + 1 is going to be "11" and not 2
          let numberIndex = parseInt(indexClicked);
          // now numberIndex is a number
          $('#photo').attr('src', imagesData[numberIndex].photo);
        });
      
      }
}
thumbnail();
*/
