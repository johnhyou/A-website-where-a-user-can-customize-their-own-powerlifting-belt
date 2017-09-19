/* eslint-disable no-unused-vars */
var belts = [
  {
    id: '1',
    img: 'belts/dualprong.jpg',
    name:'Dual Prong Belt',
    details: 'Zinc plated steel roller buckle. Six rows of lock-stiched, corrosive resistant, hi-density nylon.  Finished with top quality, fine suade providing non-slip surface. One solid thickness of the finest, and select leather.',
    header: 'Dual Prong Belt'
  },
  {
    id: '2',
    img: 'belts/singleprong.jpg',
    name: 'Single Prong Belt',
    details: 'Zinc plated steel roller buckle. Four rows of lock-stiched, corrosive resistant, hi density nylon. Closer prong holes for more choice in precise fitting.',
    header: 'Single Prong'
  },
  {
    id: '3',
    img: 'belts/leverbelt.jpg',
    name: 'Lever Belt',
    details: 'Lever makes atheletes tighten and secure themselves with the push of the Lever. Also can be loosened in less than a second with a quick flick of the patented Lever. Four rows of lock-stiched, corrosive resistant, hi density nylon.',
    header: 'Lever Belt'
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

    var $detailBox = document.querySelector('#detailBox')
    $detailBox.appendChild(getBeltSize())
    $detailBox.appendChild(getBeltThickness())
    $detailBox.append(getBuckleType())
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
  $description.style.paddingBottom = '2px'

  return $info
}


var getCustom = [
  {
    size: ['XSMALL-(22-25)', 'SMALL-(26-29)', 'MEDIUM-(30-33)', 'LARGE-(34-38)', 'XLARGE-(34-38)','2XLARGE(43-46)', '3XLARGE-(47-50)', '4XLARGE-(51-54)'],
    thickness: ['10MM', '13MM'],
    buckle: ['Dual Prong', 'Single Prong', 'Lever Buckle']
  }

]

function getBeltSize() {
  var $sizeForm = document.createElement('div')
  var $label = document.createElement('label')
  var $select = document.createElement('select')

  for (var i = 0; i < getCustom[0].size.length; i++) {
    var $option = document.createElement('option')
    console.log(getCustom[0].size[i])
    $option.textContent = getCustom[0].size[i]
    $select.appendChild($option)
  }

  $sizeForm.classList.add('drop-form')
  $label.setAttribute('for', 'size-type')
  $label.textContent = 'Belt Size:'
  $select.classList.add('size-type')
  $sizeForm.appendChild($label)
  $sizeForm.appendChild($select)


  return $sizeForm
}

function getBeltThickness() {
  var $thicknessForm = document.createElement('div')
  var $label = document.createElement('label')
  var $select = document.createElement('select')

  for (var i = 0; i < getCustom[0].thickness.length; i++) {
    var $option = document.createElement('option')
    console.log(getCustom[0].thickness[i])
    $option.textContent = getCustom[0].thickness[i]
    $select.appendChild($option)
  }

  $label.setAttribute('for', 'thick-type')
  $label.textContent = 'Belt Thickness:'
  $select.classList.add('thick-type')
  $thicknessForm.classList.add('drop-form')
  $thicknessForm.appendChild($label)
  $thicknessForm.appendChild($select)
  $thicknessForm.style.display = 'block'

  return $thicknessForm

}

function getBuckleType() {
  var $buckleForm = document.createElement('div')
  var $label = document.createElement('label')
  var $select = document.createElement('select')

  for (var i = 0; i < getCustom[0].buckle.length; i++) {
    var $option = document.createElement('option')
    $option.textContent = getCustom[0].buckle[i]
    $select.appendChild($option)
  }

  $label.textContent = 'Buckle Type:'
  $label.setAttribute('for', 'buckle-type')
  $select.classList.add('buckle-type')
  $buckleForm.classList.add('drop-form')
  $buckleForm.appendChild($label)
  $buckleForm.appendChild($select)

  return $buckleForm
}







function createBelt(data) {
  var $belt = document.createElement('div')
  var $header = document.createElement('h4')

  $header.textContent = data.header
  $belt.appendChild($header)
  $belt.classList.add('box')
  $belt.classList.add('fade')
  $belt.setAttribute('data-belt-id', data.id)
  $belt.style.backgroundImage = "url('" + data.img + "')"

  $header.style.backgroundColor = 'black'
  $header.style.color = 'white'
  $header.style.letterSpacing = '6px'
  $header.style.fontStyle = 'normal'
  $header.style.textAlign = 'center'
  $header.style.height = '30px'
  $header.style.margin = '0 auto'

  return $belt
}

for (var i = 0; i < belts.length; i++) {
  $belt.appendChild(createBelt(belts[i]))
}





function createPicBorder(data) {
  var $border = document.createElement('div')
  var $picBorder = document.createElement('img')
  $picBorder.setAttribute('src', 'slider/slide2.jpg')

}
createPicBorder()

/*
var $box = document.getElementsByClassName('box')
function createViewMore() {
  for (var i = 0; i < $box.length; i++) {
    var $viewMore = document.createElement('div')
    var $viewMoreText = document.createElement('h3')
    $viewMoreText.textContent = 'View More'
    $viewMore.appendChild($viewMoreText)
    $viewMore.style.display = 'none'
    $viewMore.setAttribute('id', 'view')
    $box[i].appendChild($viewMore)
  }
}
createViewMore()

var $view = document.querySelector('view')
$view.addEventListener('mouseover', function() {
  $view.style.display = 'block'
})
*/
