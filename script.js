document.addEventListener('DOMContentLoaded', function() {
  const whatsappLink = document.getElementById('whatsapp-link');


  whatsappLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://api.whatsapp.com/send/?phone=5491180319148&text=Hola%2C+estoy+interesado+en+un+usuario%2C+Mi+nombre+es:&type=phone_number&app_absent=0';
  });
});
