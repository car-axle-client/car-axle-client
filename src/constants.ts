export var GAMESLINK = {
    currentLink: 'aHR0cHM6Ly9jYXJheGxlY2xpZW50LmZ1bi8=',
    defaultLink: 'aHR0cHM6Ly9jYXJheGxlY2xpZW50LmZ1bi8=',
    alternate_links: [
        {
            display: 'alt link 1 ********.vercel.app',
            url: 'aHR0cHM6Ly9nbWUtaG9zdGluZy12Mi1iN3gyNG8zNWktcGVuZ3VpbmlmeXMtcHJvamVjdHMudmVyY2VsLmFwcC8=',
        },
        {
            display: 'alt link 2 **********.onrender.com',
            url: 'aHR0cHM6Ly9jYXItYXhrZS5vbnJlbmRlci5jb20v',
        },
        {
            display: 'alt link 3 **********.amplifyapp.com',
            url: 'aHR0cHM6Ly9tYWluLmQydHByN3dsMnhud2pyLmFtcGxpZnlhcHAuY29tLw==',
        },
    ],
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
