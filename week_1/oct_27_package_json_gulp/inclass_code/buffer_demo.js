var buf = new Buffer('hello world');
console.log(buf.toString('hex'));
console.log(buf[0]); // 68 in hex, 104 in base10
console.log(buf);

console.log(buf.toString());
console.log(buf.length);
