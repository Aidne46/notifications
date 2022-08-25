var push = require('web-push')


let vapidKeys = {
    publicKey: 'BFtFjx_4q5yqCkSQ016oexJn3QFm8V5eWRHC4XEdajrZ7JD7KHDtIxrH6J2_5eLg4fmVO60W2NqMK_cWnJosIQw',
    privateKey: 'oFuq771ba6woiPC6og01uNkBBYN9PpvHQR9sLaP97Hg'
  }
console.log(vapidKeys);

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:
    'https://fcm.googleapis.com/fcm/send/cXEXqO0VptQ:APA91bG8s_bK715nNTRKPYNlve_w6svcXd_qwvdaSA_H2To3T9E0OpwPayPBaq5qVshgmju9PiS8mEa7_fhl7rF1HR_QoUVw11KBOelxM_YsC7F6nkmYGw3v49Iaq_x0SVgXWgb9Ldyx',
    expirationTime:null,
    keys: {
        p256dh:
         'BHGC0Av26GXQ5ErPddg_Zo0_utzFDwxqdxAZOXxLevmwR1PRKHLkXwbt1zEt83ECrOacJtzX1Z6VijU95mNlavU',
        auth:'0kzvlnRpvPNaSiUpZ7yEqA'
        }
    };
push.sendNotification(sub, 'test')