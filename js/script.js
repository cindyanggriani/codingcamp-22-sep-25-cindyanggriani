//header mobile tolggle menu
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
  
    toggle.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
  });
  
// display form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("message");
  
    if (!form) return;
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nama = document.getElementById("nama").value.trim();
      const tanggal = document.getElementById("tanggal").value;
      const pesan = document.getElementById("pesan").value.trim();
      const genderInput = document.querySelector("input[name='gender']:checked");
  
      if (!nama || !tanggal || !pesan || !genderInput) {
        alert("Silakan isi semua data.");
        return;
      }
  
      const gender = genderInput.value;
  
      document.getElementById("displayNama").innerText = nama;
      document.getElementById("displayTanggal").innerText = tanggal;
      document.getElementById("displayGender").innerText = gender;
      document.getElementById("displayPesan").innerText = pesan;
  
      const welcomeText = document.getElementById("welcomeText");
      if (welcomeText) {
        welcomeText.innerText = `Hi ${nama}, Welcome To Our Website!`;
      }
    });
  
    const now = new Date();
    document.getElementById("currentTime").innerText = now.toLocaleString();
  });

