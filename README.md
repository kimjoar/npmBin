npmBin
------

Easily call local NPM binaries

When using [ShellJS](https://github.com/arturadib/shelljs), you can write:

```javascript
var npmBin = require('npm-bin');
var config = 'karma.conf.js';

npmBin('karma', [config, 'start']);
```

instead of:

```javascript
var config = 'karma.conf.js';
exec('node_modules/.bin/karma ' + config + ' start');
```

You can also pass in environment variables:

```javascript
var npmBin = require('npm-bin');

var config = 'karma.conf.js';
var envs = {
    'PHANTOMJS_BIN': '/opt/phantomjs/bin/phantomjs'
}

npmBin('karma', [config, 'start'], { envs: envs });
```
