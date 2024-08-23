<h1 align="center" style="font-weight: bold;">BarberPro 💻</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
</p>

<p align="center">
    <b>An api to manage a barbershop, can register customers, haircuts, schedule services and finalize services.</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- NodeJs
- Express.js
- PostgreSQL
- Prisma
- JavaScript
- TypeScript
- Json Web Token
- bcryptjs

<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

Here you list all prerequisites necessary for running your project. For example:

- [NodeJS](https://github.com/)
- [Git 2](https://github.com)

<h3>Cloning</h3>

How to clone your project

```bash
git clone your-project-url-in-github
```

<h3>Config .env variables</h2>

Use the `.env.example` as reference to create your configuration file `.env` with your Credentials

```yaml
DATABASE_URL="postgresql://test:test@localhost:5432/test?schema=public"
JWT_SECRET=test_secret
```

<h3>Starting</h3>

How to start your project

```bash
cd project-name
npm some-command-to-run
```

<h2 id="routes">📍 API Endpoints</h2>
 
<h3>USER</h3>
<h4 id="post-create-users">POST /users</h4>
<h4 id="post-login-users">POST /session</h4>
<h4 id="get-details-users">GET /me</h4>
<h4 id="put-update-info-users">PUT /users</h4>

<h3>HAIRCUT</h3>
<h4 id="post-create-haircut">POST /haircut</h4>
<h4 id="put-update-haircut">PUT /haircut</h4>
<h4 id="get-list-haircuts">GET /haircuts</h4>
<h4 id="get-check-subscription">GET /haircut/check</h4>
<h4 id="get-count-haircut">GET /haircut/count</h4>
<h4 id="get-list-detail-haircut">GET /haircut/detail</h4>

<h3>SCHEDULE</h3>
<h4 id="post-create-schedule">POST /schedule</h4>
<h4 id="delete-finish-schedule">DELETE /schedule</h4>
<h4 id="get-list-schedule">GET /schedule</h4>
