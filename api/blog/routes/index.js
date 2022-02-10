'use strict';

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/blog',
            handler: 'users.get',
            config: {
                policies: []
            },
        },
        {
            method: 'POST',
            path: '/blog',
            handler: 'users.post',
            config: {
                policies: []
            },
        }
    ]
}
