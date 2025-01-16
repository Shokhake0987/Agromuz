const buttons = document.querySelectorAll('#portfolio-flters li');
const galleryItems = document.querySelectorAll('.portfolio-item');
console.log('hi there');


// Har bir tugmaga bosish hodisasini qo'shish
buttons.forEach(li => {
  li.addEventListener('click', () => {
    // Barcha tugmalardan 'active' klassini olib tashlash
    buttons.forEach(btn => btn.classList.remove('active'));
    // Tanlangan tugmaga 'active' klassini qo'shish
    li.classList.add('active');

    const filter = li.getAttribute('data-filter');

    // Rasmlarni filtrlash
    galleryItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-type') === filter) {
        item.style.display = 'block'; // Ko'rsatish
      } else {
        item.style.display = 'none'; // Yashirish
      }
    });
  });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Shaklni avtomatik yuborishni to'xtatish

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Ma'lumotlarni serverga yuborish
  fetch('send-email.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name: name,
          email: email,
          message: message
      })
  })
  .then(response => response.json())
  .then(data => {
      alert(data.message);
  })
  .catch(error => {
      alert('Xatolik yuz berdi: ' + error);
  });
});
