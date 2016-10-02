# Cyclops

A simple notification system for Cyclops.

![Cyclops](https://media.giphy.com/media/v9H1sXNgDmeKA/giphy.gif)

### Usage
```javascript
let notif = new Cyclops({
	'selector', 'choose your selector'
});

notif.info('Info', 'Information Message');
notif.success('Success!', 'Great, you a re register');
notif.warning('Warning', 'Oh oh, you are not allowed here !');
notif.error('Error !', 'An error has occured !');
```

### CSS Classes
You will need to stylise the following classes:
- `.info` : Information
- `.success`: Success
- `.warning`: Warning
- `.error`: Error

### License
Released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
