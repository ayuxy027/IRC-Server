// node runs on a single thread and we have 8 cores in Macbook Air and 4 in Windows

const os = require('os');

console.log(os.cpus().length);

// For more we can buy out in cloud platforms like AWS , DigitalOcean , GCP and Azure