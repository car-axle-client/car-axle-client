import { create_element } from '../../../UILib'
import { moduleDefinition } from '../../moduleapi'

// dunno if this counts as link leaking but idrc at the same time

function proxies() {
    var popup = window.open('', 'Links', 'width=400,height=570,resizable=yes,scrollbars=yes')

    if (!popup) {
        alert('Please allow popups for this website')
        return
    }

    var linkList = [
        { name: 'Nebula 1', url: 'https://crystalnetwork.me/' },
        { name: 'Nebula 2', url: 'https://typhoon.lol/' },
        { name: 'Rammerhead 1', url: 'https://yorkhigh.audicolsas.co/' },
        { name: 'Rammerhead 2', url: 'https://hotmomslol.ftp.sh/' },
        { name: 'Rammerhead 3', url: 'https://cdn.lukefleed.xyz/' },
        { name: 'Rammerhead 4', url: 'https://canvas.info.gf/' },
        { name: 'Rammerhead 5', url: 'https://schoolhomeworkbuddy.jumpingcrab.com/' },
        { name: 'Rammerhead 6', url: 'https://cfbrowser.chickenkiller.com/' },
        { name: 'Rammerhead 7', url: 'https://kayd-is-goated.chickenkiller.com/' },
    ]

    let style = create_element('style', popup.document.head)
    style.textContent = `
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 10px;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background: linear-gradient(45deg, #66bb6a, #388e3c);
    }
    h1 {
      text-align: center;
      color: #fff;
      margin-bottom: 20px;
    }
    a {
      display: block;
      padding: 10px;
      margin-bottom: 10px;
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #4caf50;
      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }
    a:hover {
      background-color: #388e3c;
    }
    .footnote {
      font-size: 10px;
      text-align: center;
      margin-top: 20px;
      color: #fff;
      background-color: #333;
      padding: 5px;
      border-radius: 5px;
    }
  `
    let title = create_element('h1', popup.document.body, {
        innerHTML: 'Proxies',
    })

    linkList.forEach(function (link) {
        // excuse my trash ts config, ik it's bad
        if (!popup) {
            return
        }

        let anchor = create_element('a', popup.document.body, {
            innerHTML: link.name,
        }) as HTMLLinkElement
        anchor.href = link.url
        anchor.target = '_blank'
    })
    create_element('div', popup.document.body, {
        innerHTML: 'Credit to skrilll on Discord - DM IF PROXIES DIE',
        class_name: 'footnote',
    })
}

const plugin: moduleDefinition = {
    display_name: 'proxies',
    description: 'Opens a lengthy proxy list. (by @skrilll on discord)',
    id: 'proxies',
    section: 'cheats',
    onactive: proxies,
    reset: true,
    custom_render: false,
}

export default plugin
