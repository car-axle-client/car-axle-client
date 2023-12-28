export const GAMESLINK = {
    defaultLink: 'aHR0cHM6Ly9jYXJheGxlY2xpZW50LmZ1bi8=',
    alternate_links: [
        {
            display: 'Alternate Link ********.vercel.app',
            url: 'aHR0cHM6Ly9nbWUtaG9zdGluZy12Mi1iN3gyNG8zNWktcGVuZ3VpbmlmeXMtcHJvamVjdHMudmVyY2VsLmFwcC8=',
        },
        {
            display: 'Alternate Link 2 **********.onrender.com',
            url: 'aHR0cHM6Ly9jYXItYXhrZS5vbnJlbmRlci5jb20v',
        },
        {
            display: 'Alternate Link 3 **********.amplifyapp.com',
            url: 'aHR0cHM6Ly9tYWluLmQydHByN3dsMnhud2pyLmFtcGxpZnlhcHAuY29tLw==',
        },
    ],
}
export const VERSION = '9'
export const ITERATION = '0'
export const CLIENTNAME = 'car axle client'
// same as client name if you dont have a short hand
export const CLIENTNAMESHORT = 'car axle'
export const AUTHOR = 'penguinify & disnos9'
export const DATABASE = 'https://raw.githubusercontent.com/car-axle-client/car-axle-database/main/'
export const LOGO = 'https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/docs/logov9.png'
export const COMMUNITY = 'https://raw.githubusercontent.com/car-axle-client/community-plugins/main/'
export const SOCIAL = {
    github: 'https://github.com/car-axle-client/car-axle-client',
    discord: 'https://discord.gg/akDMdW7Zgd',
    donation: 'https://www.buymeacoffee.com/penguinify',
}

export var HOST = 'PROD'

switch (window.location.href) {
    case 'http://localhost:6969/':
        HOST = 'DEV'
        break
    case 'https://car-axle-client.github.io/car-axle-client/' || 'https://car-axle-client.github.io/car-axle-client/index.html':
        HOST = 'BETA'
        break
}
