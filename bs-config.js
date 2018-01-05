
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

module.exports = {
    "files": "src/*",  // Watch for file changes in the "src" directory and push them to the browser
    "server": {
        "baseDir": "src",  // Serve the content of the "src" directory
        "routes": {
            "/node_modules": "node_modules"  // Also, serve the "node_modules" directory
        }
    },
    "port": process.env.PORT || 3000,  // Listen to the $PORT environment variable (or to port 3000 if $PORT is not set)
    "open": false  // Do not open automatically any browser windows
};