export var GAMESLINK = {
    currentLink: 'aHR0cHM6Ly9jYXJheGxlY2xpZW50LmZ1bi8=',
    defaultLink: 'aHR0cHM6Ly9jYXJheGxlY2xpZW50LmZ1bi8=',
    deprecated_links: [
        {
            display: '(1) ********.vercel.app',
            url: 'aHR0cHM6Ly9nbWUtaG9zdGluZy12Mi1iN3gyNG8zNWktcGVuZ3VpbmlmeXMtcHJvamVjdHMudmVyY2VsLmFwcC8=',
        },
        {
            display: '(2) **********.onrender.com',
            url: 'aHR0cHM6Ly9jYXItYXhrZS5vbnJlbmRlci5jb20v',
        },
    ],
    'alternate links': [
        {
            display: '(3) **********.amplifyapp.com',
            url: 'aHR0cHM6Ly9tYWluLmQydHByN3dsMnhud2pyLmFtcGxpZnlhcHAuY29tLw==',
        },
        {
            display: '(4) **********.onrender.com',
            url: 'aHR0cHM6Ly9keGl0YzI4dHkyOXZiYzFvendmeWRjMWxidzlxYXEub25yZW5kZXIuY29tCg==',
        },
        {
            display: '(5) **********.onrender.com',
            url: 'aHR0cHM6Ly9iaWdpZGVhc21hdGh3ZWJzaXRlLm9ucmVuZGVyLmNvbQ==',
        },
    ]
}

export const VERSION = 9
export const ITERATION = 1

export const NAME = 'car axle'
export const CREATOR = 'penguinify'

export var ENV = 'production'
if (document.location.hostname.includes('localhost')) {
    ENV = 'development'
} else if (document.location.hostname.includes('github.io')) {
    ENV = 'beta ;-;'
}

// DO NOT CHANGE UNLESS YK WHAT U DOIN
export const DATABASE = 'https://raw.githubusercontent.com/car-axle-client/car-axle-database/main/'
