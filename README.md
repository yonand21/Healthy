
# Project UAS Testing SI

Dalam perancangan website kami menggunakan JavaScript dan Node.json untuk menjalankan proyek pada local server di perlukan untuk menginstall node.js terlebih dahulu dengan cara sebagai berikut.

### 1. Kunjungi situs resmi Node.js di https://nodejs.org.
### 2. Pilih versi Node.js yang sesuai dengan sistem operasi yang digunakan (Windows, macOS, atau Linux). Disarankan untuk memilih versi LTS (Long-Term Support) untuk stabilitas yang lebih baik.
### 3. Setelah memilih versi yang diinginkan, unduh paket instalasi Node.js yang sesuai dengan sistem operasi.
### 4. Setelah unduhan selesai, jalankan instalasi Node.js dan ikuti petunjuk instalasi yang muncul di layar. 
### 5. Setelah Node.js selesai diinstal, npm akan terpasang secara otomatis bersama dengan Node.js.

Setelah Node.js terinstall, selanjutnya buka folder proyek ini menggunakan code editor. Lalu pada terminal (yang dibuka pada folder proyek) tuliskan perintah:

 **npm install**
![image](https://github.com/yonand21/Healthy/assets/93269134/1cb8e71d-1f2d-4421-bc7a-e08e4a46e001)

Perintah tersebut berfungsi untuk memasang seluruh package yang terdapat di devDependencies dan dependencies pada berkas package.json. Setelah proses memasang package selesai, akan muncul folder node_modules beserta package-package yang terpasang pada root proyek

Proyek ini menggunakan webpack untuk menjalankan proyek pada local server, kita tuliskan perintah berikut pada terminal.

**npm run start-dev**

Buka browser dan arahkan ke alamat localhost:8080
