import { webhook } from '../config.json'

export function send_to_discord(content: string) {
    const data = {
        content: content,
    }

    if (!window.location.href.includes('file:///')) {
        fetch(webhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }
}
