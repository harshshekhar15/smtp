# Nodemailer

## Nodemailer installation -

```
$ npm install nodemailer
```

## Nodemailer requirements -

- Nodejs v6.0.0 or newer.

## Nodemailer module requirement -

Nodemailer **createTransport()** method requires the below details of the SMTP mail server to start the connection -
- **host**: hostname or IP address to connect to (defaults to ‘localhost’).
- **port**: port to connect to (defaults to 587 if is secure is false or 465 if true).
- **auth**: defines authentication data (credentials i.e. username and password).
- **authMethod** – defines preferred authentication method, defaults to ‘PLAIN’.

## Using nodemailer in code -

```
const nodemailer = require("nodemailer");
```

## Running nodmailer client

```
node client/client.js
```