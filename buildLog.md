# Build Log [React Auth]

## 1) set up github

```
https://github.com/masonkimm/react-auth
```

## 2) set up firebase

```
https://console.firebase.google.com/u/3/project/auth-development-2bea5/overview
```

- Auth-Development
  - Build>> Authentication>> Sign-in method>> email/pw: enabled
  - # add web app>> name>> skip firebase hosting>>
- Auth-Production
  - Build >> Authentication >> Sign-in method >> email/pw: enabled
  - Build >> Authentication >> Authorized domains >> localhost: delete

## 3)

root> auth-react>> touch .env.local

- setup env file with firebase SDK

* template: REACT*APP*[namegoeshere]

## 4)

root> auth-react>> touch firebase.js
