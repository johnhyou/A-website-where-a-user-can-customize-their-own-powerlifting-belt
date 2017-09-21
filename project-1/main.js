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
    $detailBox.appendChild(getBuckleType())
    $detailBox.appendChild(createCartButton(id))

  })

function getbeltDetails(data) {
  var $info = document.createElement('div')
  var $exitIcon = document.createElement('i')
  var $img = document.createElement('img')
  var $name = document.createElement('h2')
  var $description = document.createElement('p')

  $exitIcon.classList.add('fa')
  $exitIcon.classList.add('fa-window-close')
  $exitIcon.setAttribute('aria-hidden', 'true')

  $name.textContent = data.name
  $description.textContent = data.details
  $img.setAttribute('src', data.img)
  $img.style.width = '200px'
  $info.appendChild($exitIcon)
  $info.appendChild($img)
  $info.appendChild($name)
  $info.appendChild($description)
  $info.style.border = '1px solid grey'
  $info.setAttribute('id', 'detailBox')

  return $info
}


function createCartButton(id) {
  console.log(id)
  var $buttonContainer = document.createElement('div')
  var $addButton = document.createElement('button')
  var $cartImg = document.createElement('i')

  $cartImg.classList.add('fa')
  $cartImg.classList.add('fa-shopping-cart')
  $cartImg.setAttribute('aria-hidden', 'true')

  $addButton.setAttribute('type', 'button')
  $addButton.classList.add('btn')
  $addButton.classList.add('btn-success')
  $addButton.classList.add('cartbutt')
  $addButton.textContent = 'Add to Cart'
  $addButton.style.fontStyle = 'normal'

  $buttonContainer.appendChild($cartImg)
  $buttonContainer.appendChild($addButton)
  $buttonContainer.setAttribute('id', 'cartButton')

    $addButton.addEventListener('click', function(event){
      /* select elements from drop-down bar */
      var $size = document.getElementsByClassName('size-type')
      var $thick = document.getElementsByClassName('thick-type')
      var $buckle = document.getElementsByClassName('buckle-type')

      var mybelt =
        {
          id: id,
          mySize: $size[0].value,
          myThick: $thick[0].value,
          myBuckle: $buckle[0].value
        }

      cart.push(mybelt)

      var $jumbo = document.getElementsByClassName('extra-jumbotron')
      $jumbo[0].innerHTML = ''
      $jumbo[0].appendChild(cartBadge())
      var $popup = document.querySelector('#popup')
      $popup.innerHTML = ''
    })
    return $buttonContainer
  }

var cart = []

function cartBadge() {
  var $cartBadge = document.createElement('button')
  $cartBadge.classList.add('fa')
  $cartBadge.classList.add('fa-shopping-cart')
  $cartBadge.classList.add('shopcart')

  var $container = document.querySelector('.jumbotron')
  $container.appendChild($cartBadge)

  var $icon = document.querySelector('.shopcart')
  $icon.textContent = cart.length
  return $cartBadge
}


var $viewCart = document.querySelector('.shopcart')
$viewCart.addEventListener('click', function(event) {
  var $cartModal = document.querySelector('#view-cart-modal')
  $cartModal.appendChild(createCartModal())
})


function cartDetails(data) {
  return 'Build-A-Belts' + ' ' + data.myBuckle + ' ' + 'Belt' + '|' +
  data.mySize + ',' + '(' + data.myThick+ ')'
}

function createCartModal() {
  var $cartWrapper = document.createElement('div')
  var $table = document.createElement('table')
  var $thead = document.createElement('thead')
  var $tr = document.createElement('tr')
  var $th1 = document.createElement('th')
  var $th2 = document.createElement('th')
  var $th3 = document.createElement('th')
  var $th4 = document.createElement('th')

  /* thead styling */
  $thead.style.backgroundColor = '#F8F9F8'

  $cartWrapper.classList.add('cart-wrapper')
  $table.classList.add('table')


  $th1.textContent = 'Product'
  $th2.textContent = 'Price'
  $th3.textContent = 'Quantity'
  $th4.textContent = 'Total'

  $tr.appendChild($th1)
  $tr.appendChild($th2)
  $tr.appendChild($th3)
  $tr.appendChild($th4)
  $thead.appendChild($tr)

  /* table body starts now */
  var $tBody = document.createElement('tbody')
  var $trBody = document.createElement('tr')
  var $productInfo = document.createElement('th')
  var $thbody2 = document.createElement('th')
  var $thbody3 = document.createElement('th')
  var $thbody4 = document.createElement('th')

  $productInfo.textContent = cartDetails(cart)

  $trBody.appendChild($productInfo)
  $trBody.appendChild($thbody2)
  $trBody.appendChild($thbody3)
  $trBody.appendChild($thbody4)
  $tBody.appendChild($trBody)

  $table.appendChild($thead)
  $table.appendChild($tBody)
  $cartWrapper.appendChild($table)

  return $cartWrapper
}


var getCustom = [
  {
    size: ['XSMALL-(22-25)', 'SMALL-(26-29)', 'MEDIUM-(30-33)', 'LARGE-(34-38)', 'XLARGE-(34-38)','2XLARGE(43-46)', '3XLARGE-(47-50)', '4XLARGE-(51-54)'],
    thickness: ['10MM $89.99', '13MM $109.99'],
    buckle: ['Dual Prong', 'Single Prong', 'Lever Buckle (+ $19.99)']
  }

]

function getBeltSize() {
  var $sizeForm = document.createElement('div')
  var $label = document.createElement('label')
  var $select = document.createElement('select')

  for (var i = 0; i < getCustom[0].size.length; i++) {
    var $option = document.createElement('option')
    $option.textContent = getCustom[0].size[i]
    $select.appendChild($option)
  }

  $sizeForm.classList.add('drop-form')
  $label.setAttribute('for', 'size type')
  $label.textContent = 'Belt Size:'
  $select.classList.add('size-type')
  $select.classList.add('select')
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
    $option.textContent = getCustom[0].thickness[i]
    $select.appendChild($option)
  }

  $label.setAttribute('for', 'thick-type')
  $label.textContent = 'Belt Thickness:'
  $select.classList.add('thick-type')
  $select.classList.add('select')
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
  $select.classList.add('select')
  $buckleForm.classList.add('drop-form')
  $buckleForm.appendChild($label)
  $buckleForm.appendChild($select)

  return $buckleForm
}

function collectionsBar() {
  var $jumboContainer = document.createElement('div')
  var $header = document.createElement('h2')

  $header.textContent = 'COLLECTIONS'
  $jumboContainer.classList.add('jumbo-contain')
  $jumboContainer.appendChild($header)

  var $wrapper = document.querySelector('#collect-bar')
  $wrapper.appendChild($jumboContainer)
}
collectionsBar()


/* creates three column belt images */
function createBelt(data) {
  var $belt = document.createElement('div')
  var $header = document.createElement('h4')

  $header.textContent = data.header
  $belt.appendChild($header)
  $belt.classList.add('box')
  $belt.classList.add('fade')
  $belt.setAttribute('data-belt-id', data.id)
  $belt.style.backgroundImage = "url('" + data.img + "')"

  $header.classList.add('headText')
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

/*
function modalFader() {
var $fade = document.createElement('div')
$fade.classList.add('modalFade')
$fade.style.opacity = '0.5'
$fade.style.backgroundColor = 'black'
$fade.style.zIndex = '5'

return $fade

} */




function createPicBorder(data) {
  var $border = document.createElement('div')
  var $pic = document.createElement('img')
  var $picBorder = document.querySelector('#picborder')

  /*$border.classList.add('jumbotron') */
  $border.classList.add('background')
  $pic.setAttribute('src', 'slider/border2.jpg')
  $pic.setAttribute('alt', 'slider')
  $pic.classList.add('barbellgirl')
  $border.appendChild($pic)
  $picBorder.appendChild($border)


}
createPicBorder()
