document.addEventListener('DOMContentLoaded', function () {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-50px';
    }
    prevScrollpos = currentScrollPos;
  };
});

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
      const content = item.querySelector('.accordion-content');
      content.style.display = content.style.display === 'none' ? 'block' : 'none';

      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.accordion-content').style.display = 'none';
        }
      });
    });
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change the color of the span randomly
function changeColorRandomly() {
  const span = document.getElementsByClassName('keywords');
  const color = getRandomColor();

  for (var i = 0, len = span.length; i < len; i++) {
    span[i].style["color"] = color;
  }

  // Set a random timeout for the next color change (between 1 and 5 seconds)
  const randomTimeout = Math.floor(Math.random() * (9000) + 1000);
  setTimeout(changeColorRandomly, randomTimeout);
}

changeColorRandomly();

