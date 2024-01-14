export const VERSION = 0
export const ITERATION = 1

export const NAME = 'car axle'
export const CREATOR = 'penguinify'

export var ENV = 'production'
if (document.location.hostname.includes('localhost')) {
    ENV = 'development ~ hello, from penguinify'
} else if (document.location.hostname.includes('github.io')) {
    ENV = 'beta ;-;'
}
