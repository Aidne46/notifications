self.addEventListener('push', function(e) {
    var a = "Your public ip address changed"
    var options = {
        body: a,
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
      
    };
    
    e.waitUntil(self.registration.showNotification('ALERT', options));
});
