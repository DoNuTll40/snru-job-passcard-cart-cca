
var priceDoc = parseInt(document.getElementById('price-doc').innerHTML);
var priceSlid = parseInt(document.getElementById('price-slid').innerHTML);

function updateTotal() {
  var total = priceDoc + priceSlid;
  document.getElementById('to-price').innerHTML = "THB " + total;
  document.getElementById('sub-price').innerHTML = "THB " + total;
}

document.getElementById('google-docs').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue === '1') {
    document.getElementById('gg-d1').style.color = '#00DBB6';
    document.getElementById('price-doc').innerHTML= "150";
    document.getElementById('gg-d2').style.color = 'gainsboro';
    document.getElementById('gg-d3').style.color = 'gainsboro';
  } else if (selectedValue === '2') {
    document.getElementById('gg-d1').style.color = '#00DBB6';
    document.getElementById('gg-d2').style.color = '#00DBB6';
    document.getElementById('price-doc').innerHTML= "300";
    document.getElementById('gg-d3').style.color = 'gainsboro';
  } else if (selectedValue === '3') {
    document.getElementById('gg-d1').style.color = '#00DBB6';
    document.getElementById('gg-d2').style.color = '#00DBB6';
    document.getElementById('gg-d3').style.color = '#00DBB6';
    document.getElementById('price-doc').innerHTML= "450";
  } else if (selectedValue === '0') {
    document.getElementById('gg-d1').style.color = 'gainsboro';
    document.getElementById('gg-d2').style.color = 'gainsboro';
    document.getElementById('gg-d3').style.color = 'gainsboro';
    document.getElementById('price-doc').innerHTML= "0";
  } else {
    document.getElementById('gg-d1').style.color = 'gainsboro';
    document.getElementById('gg-d2').style.color = 'gainsboro';
    document.getElementById('gg-d3').style.color = 'gainsboro';
    document.getElementById('price-doc').innerHTML= "0";
  }

  priceDoc = parseInt(document.getElementById('price-doc').innerHTML);
  updateTotal();
});

document.getElementById('google-slides').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue === '1') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('price-slid').innerHTML= "150";
    document.getElementById('gg-s2').style.color = 'gainsboro';
    document.getElementById('gg-s3').style.color = 'gainsboro';
    document.getElementById('gg-s4').style.color = 'gainsboro';
  } else if (selectedValue === '2') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('gg-s2').style.color = '#00DBB6';
    document.getElementById('price-slid').innerHTML= "300";
    document.getElementById('gg-s3').style.color = 'gainsboro';
    document.getElementById('gg-s4').style.color = 'gainsboro';
  } else if (selectedValue === '3') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('gg-s2').style.color = '#00DBB6';
    document.getElementById('gg-s3').style.color = '#00DBB6';
    document.getElementById('price-slid').innerHTML= "450";
    document.getElementById('gg-s4').style.color = 'gainsboro';
  } else if (selectedValue === '4') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('gg-s2').style.color = '#00DBB6';
    document.getElementById('gg-s3').style.color = '#00DBB6';
    document.getElementById('gg-s4').style.color = '#00DBB6';
    document.getElementById('price-slid').innerHTML= "600";
  } else if (selectedValue === '0') {
    document.getElementById('gg-s1').style.color = 'gainsboro';
    document.getElementById('gg-s2').style.color = 'gainsboro';
    document.getElementById('gg-s3').style.color = 'gainsboro';
    document.getElementById('gg-s4').style.color = 'gainsboro';
    document.getElementById('price-slid').innerHTML= "0";
  } else {
    document.getElementById('gg-s1').style.color = 'gainsboro';
    document.getElementById('gg-s2').style.color = 'gainsboro';
    document.getElementById('gg-s3').style.color = 'gainsboro';
    document.getElementById('gg-s4').style.color = 'gainsboro';
    document.getElementById('price-slid').innerHTML= "0";
  }

  priceSlid = parseInt(document.getElementById('price-slid').innerHTML);
  updateTotal();
});

updateTotal();
