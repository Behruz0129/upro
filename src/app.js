const form = document.getElementById("form");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const my_text = `<i>Sizda yangi lead🙋‍♂️ bor</i>:%0A <b>- Ism:</b> ${name} %0A <b>- Telefon:</b> ${phone}`;

  const token = "7400177021:AAHyZl4tlMbkquJQQkunUjLNF5eRXPuG_ac";
  const chat_id = -1002451859033;
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  form.style.display = "none";
  successMessage.style.display = "block";
});
