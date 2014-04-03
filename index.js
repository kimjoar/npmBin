var _ = require('underscore'),
    path = require('path'),
    shell = require('shelljs'),
    querystring = require('querystring');

module.exports = function(name, args, options) {
    options = options || {};
    args = args || [];

    var bin = getNpmBin(name),
        envs = envsToString(options.envs),
        execOpts = _.pick(options, 'silent', 'async');

    if (_.isString(args)) {
        args = [args];
    }

    if (!shell.test('-e', bin)) {
        shell.echo('Binary does not exist: ', bin);
        shell.exit(1);
    }

    return shell.exec(envs + ' ' + bin + ' ' + args.join(' '), execOpts, options.callback);
};

var getNpmBin = function(name) {
    var bin = path.join(__dirname, '..', '.bin', name);
    if (process.platform === 'win32') return bin + '.cmd';
    return bin;
};

var envsToString = function(envs) {
    if (!envs) return '';
    querystring.escape = function(s) { return s; };
    return querystring.stringify(envs, ' ', '=');
};
