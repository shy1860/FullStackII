setInterval(() => null, 1000);
var start = process.hrtime();
process.on('exit', () => {
   // var elapsed = process.hrtime(start)[1] / 1000000;
    console.log('\nprocess uptime on signal interupt', process.uptime());
    console.log('process uptime on exit', process.hrtime(start)[0]); 
});

process.on('SIGINT', () => {
    process.exit();
});

