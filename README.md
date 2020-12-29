# Redwood

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.


### Netlify deploy

Prepare redwood for Netlify:

```terminal
yarn g deploy netlify
```

Create a Heroku container with PostgreSQL:

```terminal
heroku create
heroku addons:create heroku-postgresql:hobby-dev
```

Get the connection URL of your DB and put the URL in your Netlify app environment:

```terminal
heroku pg:credentials:url
```

Add `rhel-openssl-1.0.x` to `binaryTargets` in `api/db/schema.prisma`.

Create a Netlify app:

```terminal
netlify init
```

Build the app:

```terminal
netlify build
```

Deploy the app:

```terminal
netlify deploy
```
