const fs = require('fs');
const farmataStream = fs.createReadStream('big file')
const s3 = new AWS.S3({ params: {Bucket: 'fermata-music', Key:'NfsJcEn2GPfwthOQibEGThsQ+TZU6T+tFDJtnVyq'} })

s3.putObject({ Body: fermataStream }, function(err, data) {

})
