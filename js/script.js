document
          .getElementById("consultForm")
          .addEventListener("submit", function (event) {
            event.preventDefault(); // cegah reload halaman

            // ambil nilai input
            const nama = document.getElementById("nama").value.trim() || "-";
            const jenisKulit =
              document.getElementById("jenisKulit").value || "-";
            const pesan = document.getElementById("pesan").value.trim() || "-";

            // tampilkan hasil di output
            document.getElementById("outNama").textContent = nama;
            document.getElementById("outJenisKulit").textContent = jenisKulit;
            document.getElementById("outPesan").textContent = pesan;

            // scroll ke hasil output
            document
              .getElementById("consultOutput")
              .scrollIntoView({ behavior: "smooth" });

          this.reset();
          });