## REST Web Service

REST atau REpresentational State Transfer adalah salah satu gaya arsitektur yang dapat diadaptasi ketika membangun web service. Arsitektur ini sangat populer digunakan karena pengembangannya yang relatif mudah. REST menggunakan pola request-response dalam berinteraksi, artinya ia memanfaatkan protokol HTTP.

## REST API

Sebagian dari kalian mungkin mengenal REST dengan sebutan RESTful API. Yups, memang benar! RESTful merupakan sebutan untuk web services yang menerapkan arsitektur REST. REST juga merupakan API (application program interface) karena ia digunakan untuk menjembatani antara sistem yang berbeda (client dan server).

Berikut beberapa sifat yang menjadi kunci pada REST API.

- Client-Server : Ini merupakan hal yang paling mendasar dalam membangun REST API. Server harus bisa merespons permintaan yang dilakukan client, baik itu respons berhasil ataupun gagal. Komunikasi client dan server dilakukan melalui protokol HTTP.
- Stateless : REST API tidak boleh menyimpan keadaan (state) apa pun terkait client. Seluruh state harus tetap disimpan di client. Artinya, tidak ada session di REST API. Permintaan yang dilakukan client harus mengandung informasi yang jelas. Jangan berharap RESTful API akan menyimpan informasi dari permintaan sebelumnya untuk digunakan di permintaan selanjutnya.
- Cacheable : Agar dapat merespons permintaan dengan cepat, sebaiknya REST API menerapkan prinsip cache. Sehingga setiap permintaan tidak melulu mengambil dari database.
- Layered : Ketika REST API server memiliki arsitektur yang kompleks, client seharusnya tidak perlu tahu bagaimana server melayaninya.

Selain itu, sebelum membangun REST API, kita perlu mengenal dahulu bagaimana konsep-konsep penting yang harus diterapkan dalam membangun arsitektur ini. Apa saja?

Singkatnya, ketika membangun REST API kita harus memperhatikan empat poin berikut:

- Format request dan response.
- HTTP Verbs/Methods.
- HTTP Response code.
- URL Design.

### Format Request dan Respons

REST API seringnya menggunakan JavaScript Object Notation atau JSON sebagai format data baik itu pada request ataupun response. JSON merupakan salah satu format standar dalam transaksi data. Bahkan, saat ini JSON menjadi format terpopuler mengalahkan pendahulunya yaitu XML.

Sebenarnya Anda bisa menggunakan XML pada REST API, namun sebaiknya gunakan JSON agar lebih mudah dibaca dan efisien dalam transaksi data.

Agar REST API selalu merespons dengan format JSON, pastikan setiap respons terdapat properti Content-Type dengan nilai application/json.

Seperti namanya, JSON memiliki struktur seperti JavaScript Object yakni menggunakan key-value. Bedanya, key pada JSON selalu dituliskan menggunakan tanda kutip dua (“”). Value pada JSON dapat menampung nilai primitif seperti string, number, boolean, atau nilai non primitif seperti object atau array.

### HTTP Verbs/Methods

Karena REST API menggunakan protokol HTTP, kita dapat memanfaatkan HTTP verbs untuk menentukan aksi.

GET untuk mendapatkan data, POST untuk mengirimkan data baru, PUT untuk memperbarui data yang ada, dan DELETE untuk menghapus data. Verbs tersebutlah yang umum digunakan dalam operasi CRUD.

### HTTP Response Code

Status-Line merupakan salah satu bagian dari HTTP Response. Di dalam status line terdapat response code yang mengindikasikan bahwa permintaan yang client lakukan berhasil atau tidak. Karena itu, ketika membangun REST API kita perlu memperhatikan dan menetapkan response code secara benar.

Status code bernilai 3 digit angka. Pada REST API, berikut nilai-nilai status code yang sering digunakan:

- 200 (OK) - Permintaan client berhasil dijalankan oleh server.
- 201 (Created) - Server berhasil membuat/menambahkan resource yang diminta client.
- 400 (Bad Request) - Permintaan client gagal dijalankan karena proses validasi input dari client gagal.
- 401 (Unauthorized) - Permintaan client gagal dijalankan. Biasanya ini disebabkan karena pengguna belum melakukan proses autentikasi.
- 403 (Forbidden) - Permintaan client gagal dijalankan karena ia tidak memiliki hak akses ke resource yang diminta.
- 404 (Not Found) - Permintaan client gagal dijalankan karena resource yang diminta tidak ditemukan.
- 500 (Internal Server Error) - Permintaan client gagal dijalankan karena server mengalami eror (membangkitkan Exception).

Ketika permintaan client gagal dijalankan, kita harus mengembalikan status code yang sesuai dengan kesalahan yang terjadi. Penggunaan response code yang tepat dapat meminimalisir kebingungan client/user dalam memanfaatkan API.

### URL Design

URL, Path, atau Endpoint merupakan salah satu bagian terpenting yang harus diperhatikan ketika membangun REST API. Dengan merancang endpoint yang baik, penggunaan API akan lebih mudah dipahami. Dalam merancang endpoint, ikutilah aturan umum atau convention agar penggunaan API kita memiliki standar yang diharapkan oleh banyak developer.

- Gunakan Kata Benda daripada Kata Kerja pada Endpoint Path
  Hindari penggunaan kata kerja dalam menetapkan nama endpoint (titik akhir path). Contohnya /getArticles atau /addArticles. Karena aksi dapat ditentukan secara jelas melalui HTTP Verb, kita tidak perlu lagi menambahkan kata kerja di endpoint. Dengan adanya HTTP verbs Anda cukup memberikan endpoint GET /articles untuk mendapatkan data artikel atau POST /articles untuk menambahkan artikel.

* Gunakan Kata Jamak pada Endpoint untuk Resource Collection
  Selalu gunakan kata jamak (plural) saat memberikan nama endpoint. Ini karena jarang ada data yang hanya memiliki satu item. Dengan menggunakan kata jamak, kita menjadi konsisten dengan apa yang ada di database. Karena tabel pada database pun biasanya memiliki lebih dari satu record (data).
  Lalu, bagaimana bila ingin mengakses satu data saja? Contohnya mendapatkan satu artikel secara spesifik?
  Gunakan path parameter untuk mendapatkan data spesifik. Endpoint /articles/:id merupakan contoh yang baik untuk mendapatkan artikel secara spesifik berdasarkan id. Kita akan membahas dan menggunakan path parameter nanti ketika latihan membuat web server.
