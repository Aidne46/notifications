var push = require('web-push')


let vapidKeys = {
    publicKey: 'BFtFjx_4q5yqCkSQ016oexJn3QFm8V5eWRHC4XEdajrZ7JD7KHDtIxrH6J2_5eLg4fmVO60W2NqMK_cWnJosIQw',
    privateKey: 'oFuq771ba6woiPC6og01uNkBBYN9PpvHQR9sLaP97Hg'
  }
console.log(vapidKeys);

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = ();
push.sendNotification(sub, 'test')