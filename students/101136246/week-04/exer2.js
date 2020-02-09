const process = require("process");
console.log(`==System==
OS platform: ${process.platform}
architecture: ${process.arch}
`)
let versions = process.versions;
console.log(`== NodeJS ==
node version : ${versions.node}
v8 version : ${versions.v8}
libuv version : ${versions.uv}
==Process==
pid: ${process.pid}
title : ${process.title}
current directory: ${process.cwd()}`
)
