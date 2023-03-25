const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = 'localhost';
const port = 3001

const server = http.createServer(function (request, response) {
    const nama = "Gera Anggara";
    let uang = 200000;
    let jajan = 100000;
    let sisa = uang - jajan;

    sisa = rupiah.convert(sisa);
    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan);

    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('data sisa uang berhasil disimpan')
    });

    const sisaRAM = os.freemem();
    const jumlahCPU = os.cpus();

    function checkCPU() {
        let myCPU = [];
        jumlahCPU.map((cpu, i) => {
            myCPU.push(cpu.model);
        })
        return myCPU[0]
    }

    const hasil = `
    <head>
    <title>${nama}</title>
    </head>
    <body>
    <h1 style="background: black; color: white; padding: 12px; text-align: center;">Latihan Node JS</h1>
    <p>halo nama saya ${nama}. saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang sisa ${sisa}</p>
    <h5>sisa RAM pc saya : ${sisaRAM}</h5>
    <h5>merk CPU yang saya pakai : ${checkCPU()}</h5>
    </body>`;
    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, '',function () {
    console.log(`server menyala di ${host}:${port}`);
});