var gcm = require('node-gcm');

var message = new gcm.Message();

message.addNotification({
    title: 'Alert!!!',
    body: 'Abnormal data access',
    icon: 'ic_launcher'
});

var regTokens = ['registrationToken'];

// Set up the sender with API key
var sender = new gcm.Sender('Sender-API-Key');


sendMessage();


// Send Message
function sendMessage() {

    console.log("\n <--------- Sending Message\n", message);
    // Now the sender can be used to send messages 
    sender.send(message, { registrationTokens: regTokens }, function(err, response) {
        console.log("\n ---------> Response \n");
        if (err) console.error("Error : ", err);
        else console.log("Response : ", response);

        console.log("\n ---------X End Request X-------- \n");
    });

}
