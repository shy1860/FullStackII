console.log("== System ==")
console.log(`platform: ${process.platform}`)
console.log(`architecture: ${process.arch}\n`)

console.log("== NodeJS ==")
console.log(`node version: ${process.versions.node}`)
console.log(`v8 version: ${process.versions.v8}`)
console.log(`libuv version: ${process.versions.uv}\n`)

console.log("== Process ==")
console.log(`pid: ${process.pid}`)
console.log(`title: ${process.title}`)
console.log(`current directory: ${process.cwd()}`)