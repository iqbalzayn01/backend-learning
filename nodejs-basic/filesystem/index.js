const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "notes.txt");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }

  console.log(data);
};

fs.readFile(filePath, "UTF-8", fileReadCallback);
