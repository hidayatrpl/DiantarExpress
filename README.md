# Diantar Express

## 📦 Project Description

**Diantar Express** adalah aplikasi web front-end yang memungkinkan pengguna untuk melakukan pelacakan resi pengiriman barang dengan mudah. Aplikasi ini ditujukan untuk pengguna yang ingin mengecek status pengiriman mereka dari berbagai jasa ekspedisi secara praktis dan cepat.

Aplikasi ini menggunakan **API dari BinderByte** untuk mendapatkan data pelacakan resi secara real-time. Dibangun hanya dengan HTML, CSS (Bootstrap), dan JavaScript tanpa backend, aplikasi ini ringan, responsif, dan mudah diakses dari berbagai perangkat.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3 + Bootstrap 5**
- **JavaScript (Vanilla JS)**
- **BinderByte API** – untuk integrasi pelacakan resi

---

## ✨ Features

- 🔎 Cek resi dari berbagai ekspedisi (JNE, J&T, Sicepat, dll.)
- 📱 UI responsif dan modern menggunakan Bootstrap
- ⚡ Tampilan hasil pelacakan real-time dari API
- 🔐 Validasi input nomor resi
- 🎨 Desain sederhana dan ramah pengguna
- 🌐 Dapat langsung dijalankan di browser tanpa install

---

## ⚙️ Setup Instructions

Tidak diperlukan setup backend atau server lokal. Cukup buka file `index.html` di browser atau deploy ke layanan hosting seperti Netlify, Vercel, atau GitHub Pages.

### Langkah Menjalankan Secara Lokal

1. Clone repository:

   ```bash
   git clone https://github.com/hidayatrpl/DiantarExpress.git
   cd DiantarExpress
   ```

2. Buka file `index.html` di browser:
   - Klik dua kali pada `index.html`, atau
   - Jalankan dengan Live Server (jika menggunakan VSCode)

---

## 🤖 AI Support Explanation

Selama proses pengembangan proyek ini, AI **IBM Granite** digunakan sebagai alat bantu untuk mempercepat dan mengoptimalkan kode. Berikut beberapa perannya:

- Generate struktur HTML dasar dan layout UI responsif
- Saran dan penulisan styling CSS dengan Bootstrap
- Membantu menyusun logika JavaScript dalam pengambilan dan parsing data API
- Membantu dokumentasi proyek, penulisan deskripsi dan instruksi penggunaan

> Catatan: AI tidak disertakan dalam produk akhir. Penggunaannya terbatas pada fase pengembangan saja.

---

## 🔗 Deployment

> 🌐 Live demo: [https://diantar.vercel.app/](#)

---

## 📁 Project Structure

```
DiantarExpress/
├── index.html
├── about.html
├── contact-us.html
├── order.html
├── service.html
├── tracking.html
├── assets/
│   └── img/
│   └── css/
│       └── main.css
│       └── servie.css
│   └── favicon/
│   └── js/
│       └── script.js
│   └── vendor/
```

---

## 📌 API Reference

- **Binderbyte API** – [https://binderbyte.com](https://binderbyte.com)
- Endpoint digunakan: `https://api.binderbyte.com/v1/track`
- Dibutuhkan **API Key** (tersedia gratis untuk penggunaan personal)
- Contoh request:
  ```
  GET https://api.binderbyte.com/v1/track?api_key=APIKEY&courier=jne&awb=1234567890
  ```

---

## 📝 License

Project ini dikembangkan untuk keperluan pembelajaran dalam program **IBM Student Developer Initiative** – Capstone Project. Bebas digunakan dan dimodifikasi sesuai kebutuhan non-komersial.

---

## 🙋‍♂️ Author

**Hidayat**  
[GitHub - @hidayatrpl](https://github.com/hidayatrpl)
