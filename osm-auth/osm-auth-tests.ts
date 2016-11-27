import * as osmAuth2 from "osm-auth";

// Basic osmAuth
const OSMSimpleOAuth = new osmAuth({
    oauth_consumer_key: 'a',
    oauth_secret: 'b',
});

// osmAuth with optional settings.

const OSMOAuth = new osmAuth({
    oauth_consumer_key: 'a',
    oauth_secret: 'b',
    url: 'http://www.openstreetmap.org/',
    auto: false,
    singlepage: true,
    landing: 'foobar.html',
    loading: () => [1, 2, 3],
    done: () => 1,
});

// osmAuth from module
const moduleOSMOAuth = new osmAuth2({
    oauth_consumer_key: 'a',
    oauth_secret: 'b',
});

// XHR GET request.
OSMOAuth.xhr({
    method: 'GET',
    path: '/api/0.6/user/details'
}, (err, details) => {
    if (err === null) {
        console.log(details);
    } else if (err) {
        if (err instanceof XMLHttpRequest) {
            console.error(err.status);
        } else {
            console.error(err.message);
        }
    }
});

// XHR POST request.
moduleOSMOAuth.xhr({
    method: 'POST',
    path: '/api/0.6/notes/1/reopen',
    prefix: true,
    options: {
    }
}, (err, details) => {
    if (err === null) {
        console.log(details);
    } else if (err) {
        if (err instanceof XMLHttpRequest) {
            console.error(err.status);
        } else {
            console.error(err.message);
        }
    }
});

let xhr = new XMLHttpRequest();

// XHR PUT request.
OSMSimpleOAuth.xhr({
    method: 'PUT',
    path: '/api/0.6/changeset/create'
}, (err, details) => {
    if (err === null) {
        console.log(details);
    } else if (err) {
        if (err instanceof XMLHttpRequest) {
            console.error(err.status);
        } else {
            console.error(err.message);
        }
    }
});

// Bootstrap token
OSMOAuth.bootstrapToken('a', function (err, oauth) {
    if (err === null) {
        console.log(oauth);
    } else if (err) {
        if (err instanceof XMLHttpRequest) {
            console.error(err.status);
        } else {
            console.error(err.message);
        }
    }
});

// Get current OAuth options.
moduleOSMOAuth.options();

// Change OAuth options.
OSMSimpleOAuth.options(
    {
        singlepage: true,
    }
);

// Pre authorize.
OSMOAuth.preauth(OSMOAuth.options());

// Check user is authenticated.
moduleOSMOAuth.authenticated();

// Logout from OAuth
OSMSimpleOAuth.logout();
