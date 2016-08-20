# Cyclops

A simple notification system for Cyclops.

![Cyclops](https://media.giphy.com/media/v9H1sXNgDmeKA/giphy.gif)

### Usage
```javascript
let notif = new Cyclops();

setOptions('html', 'choose your selector');

notif.notification('Mon titre', 'Un message simple');
notif.success('Bravo!', 'Tu es maintenant inscrit');
notif.error('Mince!', 'Tu as pas plus te connecter.');
```

### License
Released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
