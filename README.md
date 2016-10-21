<p align="center">
  <a href="https://github.com/reimertz/push">
    <img alt="Yarn" src="push.png" width="500">
  </a>
</p>

<p align="center">
  Deploy static content easily, freely and anonymously.
</p>

<p align="center">
  <a href="https://travis-ci.org/reimertz/push">
    <img src="https://travis-ci.org/reimertz/push.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://www.npmjs.com/package/push">
    <img src="https://img.shields.io/npm/v/push.svg" alt="NPM version">
  </a>
  <a href="https://gitter.im/reimertz/push">
    <img src="https://badges.gitter.im/reimertz/push.svg" alt="Join gitter channel">
  </a>
</p>

---

`push index.html` will inline all assets and online dependencies of 'index.html', deploy it anonymously on GitHub and finally generate a short URL. Pretty neat!

## Install push

Waiting for push package to be released to me, so until that happens, you'll need to install directly from git:

```
yarn global add git://github.com/reimertz/push.git
# or
npm install git://github.com/reimertz/push.git -g --production
```

## Usage

### Deploy a file
```
push index.html
> http://push.hook.io?c=<code>
```

## Todo
- more functionality
- tests (!)
- gh page

