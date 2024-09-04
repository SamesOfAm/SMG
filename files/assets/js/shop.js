function cookie(key, value, domain, path, expires) {
  let cookies, cI, cookie, sameSite;

  if(typeof path === 'number') {
    expires = path;
    path = undefined;
  }
  if(typeof domain === 'number') {
    expires = domain;
    domain = undefined;
    path = undefined;
  }

  domain = domain || '';
  path = path || '';
  expires = expires || '';

  if(typeof key !== 'string') { throw new Error('Cannot get or set cookie. key must be a string'); }
  if(typeof domain !== 'string') { throw new Error('Cannot get or set cookie. if given domain must be a string'); }
  if(typeof path !== 'string') { throw new Error('Cannot get or set cookie. if given path must be a string'); }
  if(expires && typeof expires !== 'number') { throw new Error('Cannot get or set cookie. if given expires must be a number'); }
  //delete
  if(value === false) {
    console.log('Deleting cookie');
    domain && (domain = '; domain=' + domain);
    path && (path = '; path=' + path);
    sameSite = '; SameSite=Lax'
    document.cookie = escape(key) + '=;' + domain + path + sameSite + ';max-age=0';
  }

  //set
  else if(typeof value !== 'undefined') {
    domain && (domain = '; domain=' + domain);
    path && (path = '; path=' + path);
    expires && (expires = '; max-age=' + Math.round(expires / 1000));
    sameSite = '; SameSite=Lax'
    document.cookie = escape(key) + '=' + escape(value) + domain + path + sameSite + expires;
  }

  //get
  else {
    //check for a cookie and return it if it exists. If it does not then return false
    if((new RegExp("(?:^|;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie)) {
      return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
    } else {
      return false;
    }
  }
}

const addToBasket = (id) => {
  if(basketObject[id]) {
    basketObject[id] += 1
  } else {
    basketObject[id] = 1;
  }
}
const getItemAmount = () => {
  let itemsInBasket = 0;
  for(const [id, amount] of Object.entries(basketObject)) {
    itemsInBasket++;
  }
  return itemsInBasket
}

const updateBasketSum = () => {
  const basketSumSpan = document.querySelector('.basket-sum-span');
  const allSumSpans = document.querySelectorAll('.shop-item.active .sum span');
  let allSum = 0;
  allSumSpans.forEach(span => {
    if(span.dataset.sum && span.dataset.sum !== 'NaN') {
      allSum += parseFloat(span.dataset.sum);
    }
  })
  basketSumSpan.innerHTML = allSum.toFixed(2).replace('.',',');
}

const updatePrice = (item) => {
  const amount = parseInt(item.querySelector('.amount span').innerHTML);
  const price = parseFloat(item.querySelector('.price span').innerHTML.replace(',', '.'));
  const sumSpan = item.querySelector('.sum span');
  let sum = Math.round(price * amount * 100) / 100;
  sum = sum.toFixed(2);
  sumSpan.dataset.sum = sum;
  sumSpan.innerHTML = sum.toString().replace('.', ',');
  updateBasketSum();
}

const updateItemAmount = () => {
  let currentBasketInfo = document.querySelector('.basket-product-amount');
  const itemAmount = getItemAmount();
  if(document.querySelector('input[name="orderDetails"]')) {
    const detailInput = document.querySelector('.invoice-form').querySelector('input[name=orderDetails]');
    detailInput.value = '';
    let total = 0;
    for(const[product,amount] of Object.entries(basketObject)) {
      const productElement = document.getElementById(product);
      const productName = productElement.querySelector('h3').innerHTML;
      const productPrice = productElement.querySelector('.price span').innerHTML;
      const sum = parseFloat(productPrice.replace(',','.')) * amount;
      total += sum;
      detailInput.value += productName + ': ' + amount + ' Stck., Stückpreis: ' + productPrice + ' EUR, Gesamt: ' + sum.toFixed(2).replace('.',',') + ' EUR' + '\n';
    }
    detailInput.value += '\n' + 'Rechnungssumme: ' + (Math.round(total * 100) / 100).toFixed(2).replace('.',',') + ' EUR';
  }
  if(itemAmount === 1) {
    currentBasketInfo.parentElement.classList.add('single');
  } else {
    currentBasketInfo.parentElement.classList.remove('single');
  }
  currentBasketInfo = document.querySelector('.basket-product-amount');
  currentBasketInfo.innerHTML = getItemAmount().toString();
}

let basketObject = JSON.parse(cookie('basket')) || {};

if(document.querySelector('.basket-product-amount')) {
  updateItemAmount();
}

if(document.querySelector('.shop-item.detail')) {
  const addToBasketButton = document.querySelector('.add-to-basket-button');
  addToBasketButton.addEventListener('click', (event) => {
    addToBasket(event.target.dataset.id);
    cookie('basket', JSON.stringify(basketObject), 'flow-art.coach', '/', 2628000000);
    addToBasketButton.classList.add('clicked');
    updateItemAmount();
    setTimeout(() => {
      addToBasketButton.classList.remove('clicked');
      addToBasketButton.classList.add('after-click');
      setTimeout(() => {
        addToBasketButton.classList.remove('after-click')
      }, 350);
    }, 1500);
  })
}

const hideBasket = () => {
  document.querySelector('.basket-wrapper .ce_form').style.display = 'none';
  document.querySelector('.basket-sum').style.display = 'none';
  document.querySelector('.empty-basket-info').style.display = 'block';
}


const showBasketItems = (init) => {
  for(const [index, [id, amount]] of Object.entries((Object.entries(basketObject)))) {
    if(document.getElementById(id)) {
      const htmlElement = document.getElementById(id);
      const increaseAmountButton = htmlElement.querySelector('.increase-amount');
      const decreaseAmountButton = htmlElement.querySelector('.decrease-amount');
      const removeButton = htmlElement.querySelector('.remove a');
      const amountSpan = htmlElement.querySelector('.amount span');
      htmlElement.classList.add('active');
      if(parseInt(index) === Object.entries(basketObject).length-1) {
        htmlElement.classList.add('last');
      }
      amountSpan.innerHTML = amount;
      updatePrice(htmlElement);
      if(init) {
        increaseAmountButton.addEventListener('click', () => {
          basketObject[id] += 1
          amountSpan.innerHTML = basketObject[id];
          updatePrice(htmlElement);
          updateItemAmount();
          cookie('basket', JSON.stringify(basketObject), 'flow-art.coach', '/', 2628000000);
        });
        decreaseAmountButton.addEventListener('click', () => {
          basketObject[id] -= 1;
          if(basketObject[id] === 0) {
            htmlElement.classList.remove('active');
            htmlElement.classList.remove('last');
            delete basketObject[id];
            showBasketItems();
          }
          amountSpan.innerHTML = basketObject[id];
          updatePrice(htmlElement);
          updateItemAmount();
          cookie('basket', JSON.stringify(basketObject), 'flow-art.coach', '/', 2628000000);
        });
        removeButton.addEventListener('click', () => {
          htmlElement.classList.remove('active');
          htmlElement.classList.remove('last');
          delete basketObject[id];
          cookie('basket', JSON.stringify(basketObject), 'flow-art.coach', '/', 2628000000);
          showBasketItems();
          updateBasketSum();
          updateItemAmount();
        });}
    }
  }
  if(Object.entries(basketObject).length === 0) {
    hideBasket();
  }
}

if(document.querySelector('body.basket-page')) {
  showBasketItems(true);
}

if(document.querySelector('.basket-info-wrapper')) {
  updateItemAmount();
}

if(document.querySelector('.shop-submit')) {
  const submitButton = document.querySelector('.shop-submit');
  const form = document.querySelector('.invoice-form');
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    basketObject = {};
    cookie('basket', false,'flow-art.coach','/');
    form.submit();
  })
}


