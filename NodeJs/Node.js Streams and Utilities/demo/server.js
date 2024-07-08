const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      /*fs.readFile('./index.html', (err, data) => {
      res.write(data.toString());
      res.end();
    })*/
      /*
    const fileStream = fs.createReadStream('./index.html');
    fileStream.on('data', chunk => {
      res.write(chunk);
    });

    fileStream.on('end', ()=>{
      res.end();
    })
    */

    fs.createReadStream('./index.html').pipe(res);
    } else if (req.method === "POST") {
      let body = "";
      req.on("data", (data) => {
        console.log("CHUNK>>> ", data);
        body += data;
      });
      req.on("end", () => {
        console.log(body);
        res.write("Recieved");
        res.end();
      });
    }
  })
  .listen(3000);
