◴ push
====

> deploy static content anonymously with ease

[![Build Status](https://travis-ci.org/reimertz/push.svg?branch=master)](https://travis-ci.org/reimertz/push)
[![NPM version](https://img.shields.io/npm/v/push.svg)](https://www.npmjs.com/package/push)
[![Join gitter channel](https://badges.gitter.im/reimertz/push.svg)](https://gitter.im/reimertz/push)

## installation

waiting for push package to be released to me, so till that happens, you'll nned to install direclty from git.
```
yarn global add git://github.com/reimertz/push.git #much faster
```
or
```
npm install git://github.com/reimertz/push.git -g --production
```

## usage

### deploy static file
```
push index.html
> http://push.hook.io?=<code>
```

## development
```
git clone https://github.com/reimertz/push.git
cd push
yarn install

#then
yarn/npm run bin <command> #to run push cli
```

## todo

- tests (!)
- gh page

