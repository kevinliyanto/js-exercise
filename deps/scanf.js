/**
 * This code is a derivative work of a function called scanfSync
 * which was part of an npm package 'nodejs-scanf', available on GitHub
 * under repository 'nodejs-scanf' made by user 'ChauMing'
 * The said work is licensed under MIT license
 * Original work: https://github.com/ChauMing/nodejs-scanf
 *
 * Note: this work is NOT published under CC0 License because MIT license
 * requires License and Copyright notice
 */

/**
 * License:

MIT License

Original work Copyright (c) 2017 Chau Ming
Modified work Copyright (c) 2020 Kevin Liyanto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 */

const fs = require("fs");

const BUFSIZE = 1024;

exports.scanfString = function () {
  let stdinFd =
    "win32" === process.platform
      ? process.stdin.fd
      : fs.openSync("/dev/stdin", "rs");
  let buf = Buffer.alloc(BUFSIZE);
  let bytesRead = 0;
  try {
    bytesRead = fs.readSync(stdinFd, buf, 0, BUFSIZE);
  } catch (error) {
    console.trace(error);
  }

  if (bytesRead === 0) {
    return "";
  }

  // Needs to end on bytesRead, otherwise it shows the remaining null bytes
  return buf.toString("utf8", 0, bytesRead);
};
