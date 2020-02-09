
process.stdout.write("Input: ")
process.stdin.on("data", (input) => {
  let output = input.toString().tocdUpperCase()
  process.stdout.write("Output:" + output)
  process.stdout.write("Input: ")
})