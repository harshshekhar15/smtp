// Mock SMTP server with STARTTLS encryption
const SMTPServer = require("smtp-server").SMTPServer;
const server = new SMTPServer({
    secure: false,
    name: "Phoenix-server",

    // disable AUTH and STARTTLS for open relay SMTP server
    // disabledCommands: ['AUTH', 'STARTTLS'],

    // disable STARTTLS for secured relay SMTP server with credentials
    // disabledCommands: ['STARTTLS'],

    // Comment out onAuth in case of open relay server
    onAuth(auth, session, callback) {
        if (auth.username !== "admin" || auth.password !== "pass") {
          return callback(new Error("Invalid username or password"));
        }
        callback(null, { user: 123 }); // where 123 is the user id or similar property
    },
    logger: true,
    onData(stream, session, callback) {
        stream.pipe(process.stdout); // print message to console
        stream.on("end", callback);
    }
});
server.listen(465)
server.on("error", err => {
    console.log("Error %s", err.message);
  });
