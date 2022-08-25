self.addEventListener('push', function(e) {
    var options = {
        body: 'This Notification was generated from a push',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
      
    };
    e.waitUntil(self.registration.showNotification('Hellow world!', options));
});