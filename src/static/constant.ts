export const GAMESLINK = { defaultLink: 'aHR0cHM6Ly9jYXJheGxlY2xpZW50LmZ1bi8=', alternateLink: 'aHR0cHM6Ly9tYWluLmR2Nm4ydmZ1Zjc2bDYuYW1wbGlmeWFwcC5jb20v' }
export const VERSION = '8'
export const ITERATION = '0'
export const CLIENTNAME = 'car axle client'
export const AUTHOR = 'penguinify (school has started)'
export const DATABASE = 'https://raw.githubusercontent.com/car-axle-client/car-axle-database/main/'
export const LOGO = 'https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/docs/logov8.png'
export const COMMUNITY = 'https://raw.githubusercontent.com/car-axle-client/community-plugins/main/'
export const SOCIAL = {
    github: 'https://github.com/car-axle-client/car-axle-client',
    discord: 'https://discord.gg/akDMdW7Zgd',
}

export var HOST = "PROD"

switch (window.location.href) {
    case "http://localhost:6969/":
        HOST = "DEV"
        break
    case "https://car-axle-client.github.io/car-axle-client/" || "https://car-axle-client.github.io/car-axle-client/index.html":
        HOST = "BETA"
        break
}
