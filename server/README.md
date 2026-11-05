# Roam India API — Day 6

This is the first backend layer. It is a learning/dev starter, not a production-ready booking service. It provides:
- `GET /api/health` — checks server and database connection
- `POST /api/auth/register` — creates an account with a bcrypt password hash
- `POST /api/auth/login` — checks credentials and returns a short-lived JWT
- `GET /api/bookings` — lists the signed-in user's booking requests
- `POST /api/bookings` — stores a request for the signed-in user
- `PATCH /api/bookings/:reference/cancel` — cancels that user's pending demo request

## Requirements
- Node.js 20 or newer
- MySQL 8.x running locally
- Terminal and VS Code

## 1. Create database and a restricted DB user

In a MySQL client, run `schema.sql` as a database administrator. Then create a dedicated app user; replace the example password with a strong unique one:

```sql
CREATE USER 'roam_app'@'localhost' IDENTIFIED BY 'replace_with_a_strong_local_password';
GRANT SELECT, INSERT, UPDATE ON roam_india.* TO 'roam_app'@'localhost';
FLUSH PRIVILEGES;
```

Do not use the MySQL root account from the application.

## 2. Configure environment

In this `server` folder, copy `.env.example` to `.env`. Set DB credentials. Generate a JWT secret with a command such as:

```bash
openssl rand -base64 48
```

Paste the result into `JWT_SECRET`. Never share `.env`, commit it, or put secrets in frontend JavaScript.

## 3. Install and start

```bash
cd server
npm install
npm run dev
```

If startup succeeds, the API runs at `http://localhost:4000`.

## 4. Test health

Open `http://localhost:4000/api/health`. Expected: `{"status":"ok","database":"connected"}`.

## 5. Test register and login

In a second terminal, register a test user (use a test email and password only):

```bash
curl -i -X POST http://localhost:4000/api/auth/register \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test Traveller","email":"traveller@example.com","password":"DemoPassphrase123!"}'
```

Copy the returned `token` for testing. Do not use a real user's credentials in these examples. Then test login with the same test credentials using `/api/auth/login`.

## 6. Test a booking request

Replace `PASTE_TOKEN_HERE` with the token from the response:

```bash
curl -i -X POST http://localhost:4000/api/bookings \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer PASTE_TOKEN_HERE' \
  -d '{"type":"package","itemId":"goa-sample","itemName":"Goa Escape","destination":"Goa","startDate":"2027-01-15","endDate":"2027-01-18","travellers":2,"estimatedTotal":18000}'
```

Then use `GET /api/bookings` with the same Authorization header to list the signed-in user's requests.

## Important integration note

The existing `index.html` and `app.js` still use localStorage for demo sign-in and booking requests. This Day 6 update adds and documents the API but does **not** silently switch the frontend to it. In Day 7, connect the UI to these endpoints and test the complete flow.

## Security / production checklist

- Use HTTPS in deployment; keep secrets in the hosting provider's environment configuration.
- JWT bearer tokens in this starter are a learning convenience. For production, review secure cookie/session design, CSRF, token rotation/revocation, password reset, email verification, account lockout, audit logging, privacy rules, and stronger abuse protection.
- Add automated tests and migrations; validate all input on the server.
- Booking prices are accepted as estimates from the client in this starter. Production must calculate prices server-side from trusted supplier/inventory data and must not treat a request as a confirmed reservation.
- No payment gateway, live hotel inventory, supplier API, email delivery, or real booking confirmation is included.
