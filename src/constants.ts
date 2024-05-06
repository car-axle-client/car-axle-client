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
        {
            display: '(7) **********.vercel.app',
            url: 'aHR0cHM6Ly9nYXktaG9zdGluZy12My52ZXJjZWwuYXBwLw==',
        },
        {
            display: '(4) **********.onrender.com',
            url: 'aHR0cHM6Ly9keGl0YzI4dHkyOXZiYzFvendmeWRjMWxidzlxYXEub25yZW5kZXIuY29tLwo=',
        },
    ],
    alternate_links: [
        {
            display: '(3) **********.amplifyapp.com',
            url: 'aHR0cHM6Ly9tYWluLmQydHByN3dsMnhud2pyLmFtcGxpZnlhcHAuY29tLw==',
        },
        {
            display: '(5) **********.onrender.com',
            url: 'aHR0cHM6Ly9iaWdpZGVhc21hdGh3ZWJzaXRlLm9ucmVuZGVyLmNvbS8K',
        },
        {
            display: '(6) **********.netlify.app',
            url: 'aHR0cHM6Ly82NWU0YTRlYjc3MmJiN2FhMDVlOTVkZDQtLWhlbHBmdWwtamFsZWJpLTRjZWVkYS5uZXRsaWZ5LmFwcC8=',
        },
        {
            display: '(8) **********.twilightparadox.com',
            url: 'aHR0cHM6Ly9tYXRob3JhbWFsZWFybi50d2lsaWdodHBhcmFkb3guY29tLw==',
        },
    ],
}

export const VERSION = 11
export const ITERATION = 0

export const NAME = 'car axle'
// please credit if u change the creator
export const CREATOR = 'penguinify'

export var ENV = 'production'
if (document.location.hostname.includes('localhost')) {
    ENV = 'development'
} else if (document.location.hostname.includes('github.io/car-axle-client')) {
    ENV = "i hoped this wouldn't need to exist -- BETA"
}

// DO NOT CHANGE UNLESS YK WHAT U DOIN
export const DATABASE = 'https://raw.githubusercontent.com/car-axle-client/car-axle-database/main/'
