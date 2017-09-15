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
    details: 'Zinc plated steel roller buckle. Six rows of lock-stiched, corrosive resistant, hi-density nylon.  Finished with top quality, fine suade providing non-slip surface. One solid thickness of the finest, and select leather.'
  },
  {
    id: '2',
    name: 'Single Prong Belt',
    details: 'Zinc plated steel roller buckle. Four rows of lock-stiched, corrosive resistant, hi density nylon. Closer prong holes for more choice in precise fitting.'
  },
  {
    id: '3',
    name: 'Lever Belt',
    details: 'Lever makes atheletes tighten and secure themselves with the push of the Lever. Also can be loosened in less than a second with a quick flick of the patented Lever. Four rows of lock-stiched, corrosive resistant, hi density nylon.'
  }
]

  var $belt = document.querySelector('#belt')

  $belt.addEventListener('click', function(event) {
    var id = event.target.getAttribute('data-belt-id')
    for (var i = 0; i < belts.length; i++) {
      if(belts[i].id === id) {
       var beltDetails = getbeltDetails(belts[i])
      }
    }
    var $popup = document.querySelector('#popup')
    /* $belt.innerHTML = '' */
    $popup.appendChild(beltDetails)
  })

function getbeltDetails(data) {
  var $info = document.createElement('div')
  var $name = document.createElement('h2')
  $name.textContent = data.name
  var $description = document.createElement('p')
  $description.textContent = data.details
  $info.appendChild($name)
  $info.appendChild($description)
  $info.style.border = '1px solid grey'
  $info.setAttribute('id', 'detailBox')
  return $info
}
