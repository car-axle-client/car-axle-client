import { webhook, bugs } from '../config.json'

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

export function send_bug_report_to_discord(title: string, contact: string, content: string) {
    const data = {
        content: `**${title}**\n${content}\n\n**Contact:** ${contact}`,
    }

    fetch(bugs, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}
