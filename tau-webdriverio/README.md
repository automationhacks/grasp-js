# TAU course on Web driver IO

## Setup

- Install node and npm
- Download and install VS Code
- `cd tau-webdriverio`
- `npm init` and accept defaults to setup `package.json`

## Install wdio

```zsh
# Add webdriverio into devDependencies of package.json
npm install webdriverio --save-dev

# Install wdio cli
npm install @wdio/cli

# Launch web driver setup utility
./node_modules/.bin/wdio config
```

Select below options to configure wdio to run on local machine:

```text
WDIO Configuration Helper
=========================

? Where is your automation backend located? On my local machine
? Which framework do you want to use? mocha
? Do you want to run WebdriverIO commands synchronous or asynchronous? sync
? Where are your test specs located? ./test/specs/**/*.js
? Do you want WebdriverIO to autogenerate some test files? Yes
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located? ./test/pageobjects/**/*.js
? Are you using a compiler? No!
? Which reporter do you want to use? spec, dot
? Do you want to add a service to your test setup? selenium-standalone
? What is the base url? https://the-internet.herokuapp.com/
```

```
npx wdio run wdio.conf.js
```

## Install chai

We would use `chai` as the assertion library

```zsh
npm install chai --save-dev
```
