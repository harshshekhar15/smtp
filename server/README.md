# Mock SMTP server

## Requirements

- Port 465 should be unallocated.

## Server details

- Name: Phoenix-server
- Host: 127.0.0.1
- Port: 465

## Authentication details (for secured server)

- Username: admin
- Password: pass

## Open relay SMTP server

For running open realy server do the following changes in server.js-
- Disable AUTH and STARTTLS.
- Comment out onAuth() function.

## Secure relay SMTP with credentials

For running secured realy server do the following changes in server.js-
- Disable STARTTLS.

## STARTTLS encrypted SMTP relay server with creds

No changes required.

## Running SMTP server

```
node server/server.js
```