var push = require('web-push')


let vapidKeys = {
    publicKey: 'BFtFjx_4q5yqCkSQ016oexJn3QFm8V5eWRHC4XEdajrZ7JD7KHDtIxrH6J2_5eLg4fmVO60W2NqMK_cWnJosIQw',
    privateKey: 'oFuq771ba6woiPC6og01uNkBBYN9PpvHQR9sLaP97Hg'
  }
console.log(vapidKeys);

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:
    'https://fcm.googleapis.com/fcm/send/fKbGEjoRDb8:APA91bFMOTbkVv50bB7UtDVOlA5T1m4Z82wDNct0sZeuH6a36Dng6eneP8jnSHGGrOPm8njiBuScmIF8Dh42Z4DHlB0FzRz_Mwj56eoDGZSG-kHjZxPL8zvX6ogbhGheMVY9G-MrWr3T',
    expirationTime:null,
    keys: {
        p256dh:
         'BDE_fk_Vmlyp-tPEZSrDEdb2ACfpioSwJdHXybYBVwQT66zxcURmZmptyHmQ2rnjwSI0Ok6LsYFmtZMjTN2g1Yk',
        auth:'xZk3jpl7PJfl7I4zLjTEHA'
        }
    };
push.sendNotification(sub, 'test')