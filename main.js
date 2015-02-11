var client = require('twilio')('ACd8c7df60a6ed10182d6bdef432bd1741', '61b8444ad66885aa83d88e97eda07ed0');

client.sendMessage({
    to:'+13019806205', // the number for the phone in your pocket
    from:'+18437799077', // your Twilio number
    body:'HI! -Imee! :)' // The body of the text message
}, function(error, message) {
    // This callback is executed when the request completes
    if (error) {
        console.error('Dagnabit.  We couldn\'t send the message');
    } else {
        console.log('Message sent! Message id: '+message.sid);
    }
});
