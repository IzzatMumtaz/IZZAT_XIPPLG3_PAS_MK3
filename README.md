# Simple Weather Forecast App

Weather Forecast App adalah aplikasi cuaca sederhana namun powerful yang
memanfaatkan **WeatherAPI** untuk menampilkan informasi cuaca secara
real-time berdasarkan nama kota yang dimasukkan pengguna.

## 🌤️ Fitur Utama

-   Melihat cuaca saat ini berdasarkan nama kota
-   Menampilkan:
    -   Suhu (°C)
    -   Kondisi cuaca
    -   Kecepatan angin
    -   Kelembapan
    -   Waktu lokal lokasi tersebut
-   Validasi input kota
-   Penanganan error jika kota tidak ditemukan
-   Desain kode sederhana dan mudah dipahami

## 🧰 Teknologi yang Digunakan

-   **Python 3**
-   **Requests** (untuk HTTPS request)
-   **WeatherAPI** (https://www.weatherapi.com/)
-   **JSON parsing** untuk mengambil data cuaca

## 🔑 API Key

Aplikasi ini menggunakan API key dari WeatherAPI.\
Pastikan Anda sudah memasukkannya ke dalam kode:

    API_KEY = "a963ca9ef2c7464db0c112223250912"

## 🚀 Cara Menjalankan Aplikasi

1.  Pastikan Python telah terinstall.
2.  Install library requests:

```{=html}
<!-- -->
```
    pip install requests

3.  Jalankan file Python:

```{=html}
<!-- -->
```
    python weather.py

4.  Masukkan nama kota → hasil cuaca akan ditampilkan.

## 💡 Contoh Input & Output

### Input:

    Masukkan nama kota: Tokyo

### Output:

    Cuaca di Tokyo:
    Suhu: 18°C
    Kondisi: Partly cloudy
    Waktu Lokal: 2025-12-09 20:15

## 📁 Struktur Proyek

    │── weather.py       # Main program
    │── README.md        # Dokumentasi

## 📝 Catatan Pengembangan

-   Kode dibuat sesingkat mungkin agar mudah dipahami.
-   Tidak menggunakan fungsi atau class yang terlalu kompleks.
-   Cocok untuk pembelajaran dasar API dan request HTTP.

## 👨‍💻 Author

**Izzat Mumtaz Muhammad**\
Project created as part of Python learning & school project.

