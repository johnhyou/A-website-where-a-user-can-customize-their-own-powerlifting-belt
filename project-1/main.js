/* eslint-disable no-unused-vars */

/*
var $img1 = document.querySelector('#img1')
var $img2 = document.querySelector('#img2')

function imgMouseOver() {
  $img2.style.display = 'block'
}
function imgMouseOut() {
  $img2.style.display = 'none'
}
$img1.addEventListener('mouseover', imgMouseOver)
$img2.addEventListener('mouseout', imgMouseOut)

*/

var belts = [
  {
    id: '1',
    name:'Dual Prong Belt',
    details: 'Zinc plated steel roll'
  },
  {
    id: '2',
    name: 'Single Prong Belt',
    details: '23123122331asdada'
  },
  {
    id: '3',
    name: 'Lever Belt',
    details: 'BLA BLA'
  }
]

  var $belt = document.querySelector('#belt')
  $belt.addEventListener('mouseover', function(event) {
    var id = event.target.getAttribute('data-belt-id')
    for (var i = 0; i < belts.length; i++) {
      if(belts[i].id === id){
        console.log(beltDetails(belts[i]))
      }
    }
  })
function beltDetails(data) {
  var $info = document.createElement('div')
  var $name = document.createElement('h2')
  $name.textContent = data.name
  var $description = document.createElement('p')
  $description.textContent = data.details
  $info.appendChild($name)
  console.log($name)
  console.log($description)
  $info.appendChild($description)
  return $info
}
