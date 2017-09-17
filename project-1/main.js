/* eslint-disable no-unused-vars */
var belts = [
  {
    id: '1',
    img: 'belts/dualprong.jpg',
    name:'Dual Prong Belt',
    details: 'Zinc plated steel roller buckle. Six rows of lock-stiched, corrosive resistant, hi-density nylon.  Finished with top quality, fine suade providing non-slip surface. One solid thickness of the finest, and select leather.'
  },
  {
    id: '2',
    img: 'belts/singleprong.jpg',
    name: 'Single Prong Belt',
    details: 'Zinc plated steel roller buckle. Four rows of lock-stiched, corrosive resistant, hi density nylon. Closer prong holes for more choice in precise fitting.'
  },
  {
    id: '3',
    img: 'belts/leverbelt.jpg',
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
    $popup.innerHTML = ''
    $popup.appendChild(beltDetails)
    /* $popup.appendChild(getbeltSize) */
  })

function getbeltDetails(data) {
  var $info = document.createElement('div')
  var $name = document.createElement('h2')
  $name.textContent = data.name
  var $description = document.createElement('p')
  $description.textContent = data.details
  var $img = document.createElement('img')
  $img.setAttribute('src', data.img)
  $info.appendChild($img)
  $info.appendChild($name)
  $info.appendChild($description)
  $info.style.border = '1px solid grey'
  $info.setAttribute('id', 'detailBox')

  return $info
}

var collections = [
  {
    id: '1',
    text: 'Dual Prong'
  },
  {
    id: '2',
    text: 'Single Prong'
  },
  {
    id: '3',
    text: 'Lever Belt'
  }
]

function createImgHead() {
  var $imgHead = document.createElement('div')
  var $imgTxt = document.createElement('h3')
  $imgTxt.textContent = collections.text
  $imgHead.appendChild($imgTxt)
  $imgHead.setAttribute('class, beltHeader')
}
    /* option: ['XSMALL-(22-25)', 'SMALL-(26-29)', 'MEDIUM-(30-33)', 'LARGE-(34-38)', 'XLARGE-(34-38)','2XLARGE(43-46)', '3XLARGE-(47-50)', '4XLARGE-(51-54)']
    function getbeltSize(data) {

      var $dropform = document.createElement('div')
      var $labelName = document.createElement('label')
      var $select = document.createElement('select')
      $labelName.setAttribute('for', 'size-type')
      $select.setAttribute('class', 'size-type')
      $dropform.appendChild($labelName)
      $dropform.appendChild($select)
    } */
