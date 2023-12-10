
document.getElementById('google-docs').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue === '1') {
    document.getElementById('gg-d1').style.color = '#00DBB6';
    document.getElementById('gg-d2').style.color = 'gainsboro';
    document.getElementById('gg-d3').style.color = 'gainsboro';
  } else if (selectedValue === '2') {
    document.getElementById('gg-d1').style.color = '#00DBB6';
    document.getElementById('gg-d2').style.color = '#00DBB6';
    document.getElementById('gg-d3').style.color = 'gainsboro';
  } else if (selectedValue === '3') {
    document.getElementById('gg-d1').style.color = '#00DBB6';
    document.getElementById('gg-d2').style.color = '#00DBB6';
    document.getElementById('gg-d3').style.color = '#00DBB6';
  } else if (selectedValue === '0') {
    document.getElementById('gg-d1').style.color = 'gainsboro';
    document.getElementById('gg-d2').style.color = 'gainsboro';
    document.getElementById('gg-d3').style.color = 'gainsboro';
  } else {
    document.getElementById('gg-d1').style.color = 'gainsboro';
    document.getElementById('gg-d2').style.color = 'gainsboro';
    document.getElementById('gg-d3').style.color = 'gainsboro';
  }
});

document.getElementById('google-slides').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue === '1') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('gg-s2').style.color = 'gainsboro';
    document.getElementById('gg-s3').style.color = 'gainsboro';
    document.getElementById('gg-s4').style.color = 'gainsboro';
  } else if (selectedValue === '2') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('gg-s2').style.color = '#00DBB6';
    document.getElementById('gg-s3').style.color = 'gainsboro';
    document.getElementById('gg-s4').style.color = 'gainsboro';
  } else if (selectedValue === '3') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('gg-s2').style.color = '#00DBB6';
    document.getElementById('gg-s3').style.color = '#00DBB6';
    document.getElementById('gg-s4').style.color = 'gainsboro';
  } else if (selectedValue === '4') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('gg-s2').style.color = '#00DBB6';
    document.getElementById('gg-s3').style.color = '#00DBB6';
    document.getElementById('gg-s4').style.color = '#00DBB6';
  } else if (selectedValue === '0') {
    document.getElementById('gg-s1').style.color = 'gainsboro';
    document.getElementById('gg-s2').style.color = 'gainsboro';
    document.getElementById('gg-s3').style.color = 'gainsboro';
    document.getElementById('gg-s4').style.color = 'gainsboro';
  } else {
    document.getElementById('gg-s1').style.color = 'gainsboro';
    document.getElementById('gg-s2').style.color = 'gainsboro';
    document.getElementById('gg-s3').style.color = 'gainsboro';
    document.getElementById('gg-s4').style.color = 'gainsboro';
  }
});