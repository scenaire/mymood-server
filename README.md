# My Mood Day Server

this is a server-side for My Mood Day Application on [this repository](https://github.com/scenaire/MyMood)

## Requirements

* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [firebase cli](https://firebase.google.com/docs/cli)

## Installation

1. install firebase cli using ```npm install -g firebase tools```  
2. run ```firebase login``` on cmd
3. run ```firebase init functions``` on cmd  
4. now you can coding at ```functions``` file  
![image](https://www.img.in.th/images/b92ebfbf491d4e1d8233b68ad294ded5.png)  

negative.txt and suicedal.txt is using for trie.js to detect keyword and pattern from texts.

## Deploy

run ```firebase deploy --only functions``` to deploy on firebase cloud functions

## Contacts

if you are computer science student who wanted to improving this application and you have a problem while developing, feel free to reach me via Facebook

Facebook : [Jiratchaya Yeeto](https://www.facebook.com/jiratchaya.yeeto)

## Project Tree  

```├─ .firebaserc
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     ├─ dependabot
│     │     │  └─ npm_and_yarn
│     │     │     └─ functions
│     │     │        └─ websocket-extensions-0.1.4
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ firebase.json
├─ firestore.indexes.json
├─ firestore.rules
├─ functions
│  ├─ .eslintrc.json
│  ├─ .gitignore
│  ├─ index.js
│  ├─ negative.txt
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ suicidal.txt
│  └─ trie.js
├─ package-lock.json
├─ public
│  └─ index.html
└─ storage.rules
```
