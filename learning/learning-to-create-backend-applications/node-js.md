## Node JS

Dari dulu hingga kini, browser menjadi tempat satu-satunya yang dapat mengeksekusi kode JavaScript. Karenanya, Web Developer perlu mempelajari bahasa pemrograman yang berbeda untuk mengembangkan aplikasi Front-End dan Back-End. Meskipun secanggih dan sekuat apa pun JavaScript berkembang, ia hanya akan digunakan di sisi Front-End saja.

Sebenarnya banyak developer yang mencoba membuat teknologi agar JavaScript dapat dijalankan di luar browser. Namun belum ada yang berhasil. Hingga pada tahun 2009, Ryan Dahl berhasil menciptakan Node.js, teknologi yang diharapkan oleh banyak web developer. Tak disangka saat ini teknologi yang diciptakannya menuai popularitas tinggi. Node.js banyak digunakan oleh perusahaan besar sekelas Netflix, Uber, Paypal, dan eBay.

Node.js berhasil menjadi JavaScript Runtime yang dapat mengeksekusi kode JavaScript di luar browser. Node.js seolah-olah menjadi gerbang bagi para JavaScript Developer untuk mengembangkan sistem di luar dari browser. JavaScript menjadi bahasa multiplatform yang banyak menggiring developer untuk menggunakannya. Popularitas JavaScript pun meroket! Pada tahun 2014 hingga 2020 JavaScript menjadi bahasa pemrograman nomor satu yang banyak digunakan oleh developer.

JavaScript menjadi salah satu pilihan tepat dalam membangun web server, terlebih bila Anda adalah seorang Front-End Web Developer. Anda tentu tidak perlu menggunakan bahasa yang berbeda dalam membangun Back-End. Anda bisa menjadi Full-Stack Developer dengan mempelajari satu bahasa pemrograman saja.

## Node.js Global Object

JavaScript hanyalah bahasa pemrograman. Ia tidak mengetahui apakah Anda menjalankannya menggunakan browser atau Node.js. Di browser, JavaScript dapat mengontrol fungsionalitas browser seperti mengunjungi halaman, memuat ulang, menutup tabs, serta menampilkan alert dialog. JavaScript mampu melakukan itu karena browser menambahkan objek window pada JavaScript.

Di Node.js pun demikian, ia menambahkan objek global guna memberikan fungsionalitas lebih pada JavaScript. Hal ini bertujuan untuk mendukung pengembangan pada environment-nya. Contoh, melalui objek global kita dapat melihat berapa CPU yang digunakan pada komputer, modularisasi berkas JavaScript, menampilkan nilai pada console, dan hal lainnya.

Objek window pada browser dan objek global pada Node.js merupakan Global Object. Seluruh fungsi atau properti yang menjadi member dari global object dapat diakses di mana saja alias memiliki cakupan global. Pada Node.js Anda bisa melihat apa saja yang termasuk member dari global objek dengan menggunakan kode berikut:

```
Object.getOwnPropertyNames(global);
```

Banyak sekali yah member dari global objek. Namun dilansir dari website Node.js, sebenarnya mereka hanya menambahkan beberapa objek saja. Objek tersebut dinamakan dengan ‘true globals’.
Berikut adalah daftarnya:

- global : Global namespace. Member apa pun di dalam object ini dapat diakses pada cakupan global.
- process : menyediakan interaksi dengan proses Node.js yang berjalan.
- console : menyediakan berbagai fungsionalitas STDIO.
  setTimeout, clearTimeout, setInterval, clearInterval.

Ada juga objek yang merupakan ‘pseudo-globals’ atau objek global semu. Objek ini tidak terlihat bila dicetak menggunakan Object.getOwnPropertyNames(global) sebab ia bukan member langsung dari objek global, melainkan diturunkan dari cakupan module. Karena pada Node.js semua berkas JavaScript adalah module, jadi pseudo-globals dapat diakses layaknya global objek.
Berikut adalah daftarnya:

- module : digunakan untuk sistem modularisasi pada Node.js.
- \_\_filename : keyword untuk mendapatkan lokasi berkas JavaScript yang dieksekusi. Keyword ini tidak tersedia pada Node.js REPL.

- \_\_dirname : keyword untuk mendapatkan root directory dari berkas JavaScript yang dieksekusi.
  require : digunakan untuk mengimpor module JavaScript.

## Process Object

Salah satu global objek yang penting untuk diketahui adalah process. Dalam ilmu komputer, process adalah sebuah program yang dijalankan pada satu atau lebih thread. Anda bisa melihat proses yang sedang berjalan pada komputer Anda melalui Task Manager (Windows), System Monitor (Ubuntu), atau Activity Monitor (macOS).

Pada Node.js, global objek process memiliki fungsi dan properti yang dapat memberikan informasi mengenai proses yang sedang berjalan.

Salah satu yang sering digunakan adalah properti process.env. Melalui properti ini kita dapat menyimpan nilai atau mendapatkan informasi mengenai environment yang digunakan selama proses sedang berlangsung. Contoh, process.env memiliki properti process.env.PWD yang menyediakan informasi mengenai lokasi di mana proses dijalankan; properti process.env.USER menyimpan informasi nama user pada komputer Anda; dan masih banyak properti lainnya. Anda bisa lihat daftar lengkap properti yang ada pada halaman dokumentasi Node.js mengenai process.env.

Anda juga bisa secara manual menyimpan nilai di dalam process.env. Hal ini berguna untuk menentukan alur code seperti if-else dalam program berdasarkan environment yang Anda berikan. Contohnya, ketika Anda ingin nilai variabel host berbeda di kala pengembangan (development) dan produksi (production), Anda bisa membuat properti NODE_ENV pada process.env. Jadi, Anda bisa menentukan nilai host berdasarkan kondisi NODE_ENV.

app.js

```
const server = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});
```

Untuk memberikan nilai pada properti process.env, kita dapat memberikannya ketika mengeksekusi berkas JavaScript. Caranya seperti ini:

Linux & MacOS

```
NODE_ENV=production node app.js
```

Windows CMD

```
SET NODE_ENV=production && node app.js
```

Nilai yang ada pada process.env hanya dapat diakses di dalam cakupan proses Node.js. Itu berarti Anda tidak dapat menggunakan nilainya pada program lain seperti menampilkan nilainya melalui program echo.

```
// perintah ini tidak akan berjalan
node -e 'process.env.foo = "bar"' && echo $foo
```

Selain untuk menetapkan dan mendapatkan informasi mengenai environment, objek process memiliki kegunaan lain. Salah satunya adalah mendapatkan informasi tentang penggunaan CPU ketika proses berjalan. Anda dapat mengakses informasi tersebut melalui fungsi process.memoryUsage().

```
const cpuInformation = process.memoryUsage();

console.log(cpuInformation);

/* output
{
  rss: 14569472,
  heapTotal: 2654208,
  heapUsed: 1788896,
  external: 855681,
  arrayBuffers: 9898
}
*/
```

Yang terakhir dan tak kalah pentingnya adalah properti process.argv. Properti ini dapat menampung nilai baris perintah dalam bentuk array ketika menjalankan proses. Contoh jika kita menjalankan baris perintah berikut:

```
node app.js harry potter
```

Maka array process.argv akan bernilai:

- Elemen pertama : Alamat (path) lengkap dari lokasi node yang menjalankan prosesnya.
- Element kedua : Alamat (path) berkas JavaScript yang dieksekusi (app.js)
- Element ketiga : “harry”
- Element keempat : “potter”

Bila app.js memiliki kode seperti ini:

```
const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);

// Maka output yang dihasilkan tampak seperti ini:

Hello harry potter
```
