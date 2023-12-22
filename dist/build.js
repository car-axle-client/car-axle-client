;(() => {
    var __webpack_modules__ = {
            5350: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '.cac__button {\n  width: 90% !important;\n  line-height: 2.5vh;\n  background: rgba(10, 10, 10, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 2.5vh !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-top: 1% !important;\n  margin-bottom: 1% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n  padding-top: 1.5%;\n  padding-bottom: 1.5%;\n  cursor: pointer;\n}\n.cac__button:hover {\n  transform: translateX(5px) !important;\n}\n.cac__button:last-child {\n  margin-bottom: 5% !important;\n}\n.cac__button p {\n  font-size: 2vh;\n  color: #fff;\n  line-height: 2vh;\n  margin: 1% 0;\n}\n.cac__button--enabled {\n  box-shadow: inset 70vw 0 0px 0 #00db87 !important;\n}\n',
                    '',
                ])
                const s = r
            },
            6258: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '.cac__notification {\n  width: 40%;\n  height: 40%;\n  border-radius: 20px;\n  box-shadow: 0px 0px 50px 10px black;\n  background-color: #00db87;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.cac__notification__header {\n  font-size: 2.75vmin;\n  margin-left: 2vw;\n  margin-right: 2vw;\n}\n.cac__notification__body {\n  font-size: 2.25vmin;\n  margin-left: 2vw;\n  margin-right: 2vw;\n}\n.cac__notification__button {\n  border-radius: 10px;\n  width: 50%;\n  padding: 2%;\n  right: 0%;\n  bottom: 3vh;\n  position: absolute;\n  background-color: rgba(10, 10, 10, 0.6);\n  border: none;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  font-size: 1.5vw;\n  cursor: pointer;\n}\n.cac__notification__dismiss {\n  left: 0%;\n  font-size: 1vw;\n  width: 30%;\n  background-color: rgba(10, 10, 10, 0.2);\n}\n',
                    '',
                ])
                const s = r
            },
            1316: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '@keyframes slideIn {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes slideOut {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(150%);\n  }\n}\n#cac__NOTIFICATIONBAR {\n  height: 100%;\n  width: 20%;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  z-index: 999999;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 25px;\n  align-items: center;\n  gap: 1vh;\n  transition: all 0.5s ease-in-out;\n}\n.cac__mini__notification {\n  width: 100%;\n  height: 9vh;\n  background-color: #00db87;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  cursor: pointer;\n  animation: slideIn 0.2s ease-out;\n  transition: all 0.5s ease-in-out;\n}\n.cac__mini__notification__header {\n  font-size: 1.5vw;\n  line-height: 1.5vw;\n  margin: 0;\n  font-weight: bold;\n  color: #fff;\n}\n.cac__mini__notification__message {\n  font-size: 1vw;\n  margin: 0;\n  line-height: 1vw;\n  color: #fff;\n}\n.cac__mini__notification--hidden {\n  animation: slideOut 0.2s ease-out;\n}\n.cac__mini__notification--error {\n  background-color: #ff0000;\n}\n',
                    '',
                ])
                const s = r
            },
            2268: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '@keyframes introanim {\n  0% {\n    transform: translateX(-50%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n@keyframes slidein {\n  0% {\n    transform: translateX(-20%);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n.cac__section {\n  width: 86% !important;\n  height: 6% !important;\n  background-color: transparent !important;\n  text-align: left !important;\n  position: relative;\n  display: flex !important;\n  align-items: center !important;\n  font-size: 1.5vw !important;\n  margin-top: 5% !important;\n  transition: 0.5s !important;\n  cursor: pointer !important;\n  animation: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) introanim forwards;\n  animation: slidein 1s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.cac__section:hover {\n  transform: translateX(5px) !important;\n}\n.cac__section svg {\n  margin-left: 1% !important;\n  margin-right: 5% !important;\n}\n.cac__section__content {\n  width: 100% !important;\n  height: 100% !important;\n  display: none;\n  position: absolute !important;\n  align-items: center !important;\n  text-align: center !important;\n  overflow-y: scroll !important;\n}\n.cac__section__content::-webkit-scrollbar {\n  width: 7px !important;\n}\n.cac__section__content::-webkit-scrollbar-track {\n  background-color: transparent !important;\n}\n.cac__section__content::-webkit-scrollbar-thumb {\n  background-color: #00db87 !important;\n  border-radius: 7px !important;\n}\n.cac__section__title {\n  font-weight: 600 !important;\n  font-size: 2.25vw !important;\n  line-height: 2.25vw !important;\n  margin-left: 5% !important;\n  margin-top: calc(0.8vh + 0.5vw);\n  text-align: left !important;\n  width: 90% !important;\n}\n.cac__section__description {\n  font-weight: 400 !important;\n  font-size: 1.5vw !important;\n  line-height: 1.5vw !important;\n  text-align: left !important;\n  margin-left: 5% !important;\n  margin-bottom: 3% !important;\n  width: 90% !important;\n}\n@media (max-aspect-ratio: 1/1) {\n  .cac__section {\n    font-size: 0vw !important;\n    justify-content: center !important;\n    margin-top: 8% !important;\n  }\n  .cac__section svg {\n    height: 50% !important;\n  }\n  .cac__section__title {\n    font-size: 6vw !important;\n    line-height: 6vw !important;\n  }\n  .cac__section__description {\n    font-size: 4vw !important;\n    line-height: 4vw !important;\n  }\n}\n',
                    '',
                ])
                const s = r
            },
            2766: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '.cac__module__input {\n  width: 90% !important;\n  line-height: 6vh !important;\n  background: rgba(10, 10, 10, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n}\n.cac__module__form {\n  width: 90% !important;\n  display: inline-flex !important;\n  flex-direction: column !important;\n  background: rgba(10, 10, 10, 0.6) !important;\n  color: #fff !important;\n  border-radius: 15px !important;\n  justify-content: center !important;\n  align-items: center !important;\n  margin: 2% 0 !important;\n  padding-bottom: 2% !important;\n}\n.cac__module__form__title {\n  width: 90%;\n  margin-left: 0% !important;\n  font-size: 1.5vw !important;\n  color: #fff !important;\n  font-weight: bold !important;\n  text-align: left !important;\n}\n.cac__module__form__submit {\n  font-size: 1.5vw !important;\n  color: #fff !important;\n  font-weight: bold !important;\n  text-align: right !important;\n  margin-bottom: 2% !important;\n  display: inline-flex !important;\n  border-radius: 15px !important;\n  background: #00db87 !important;\n  padding-left: 2% !important;\n  width: 90%;\n  line-height: 6vh;\n}\n',
                    '',
                ])
                const s = r
            },
            8133: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '.cac__version__display {\n  width: 90% !important;\n  line-height: auto !important;\n  color: black !important;\n  padding-bottom: 3%;\n  background-size: cover !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  height: auto !important;\n  flex-direction: column;\n}\n',
                    '',
                ])
                const s = r
            },
            6955: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '#custom_cursor_large {\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  border-radius: 50%;\n  position: fixed;\n  pointer-events: none;\n  z-index: 100000000000000000000000000000000000000000000000000000000000000000000000000000000000;\n}\n#custom_cursor_small {\n  width: 15px;\n  height: 15px;\n  background-color: white;\n  border-radius: 50%;\n  position: fixed;\n  pointer-events: none;\n  z-index: 1000000000000000000000000000000000000000000000000000000000000000000000000000000000;\n}\n',
                    '',
                ])
                const s = r
            },
            6095: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '.cac__game__button {\n  width: 90% !important;\n  line-height: 2.6vh;\n  background: rgba(10, 10, 10, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 20px !important;\n  padding: 0;\n  transition: 1s !important;\n  height: 10vh !important;\n}\n.cac__game__button:active {\n  background: #00db87 !important;\n}\n.cac__game__button--hidden {\n  display: none !important;\n}\n.cac__game__title {\n  position: absolute;\n  left: 5%;\n  color: #fff;\n  margin-left: 2%;\n  font-size: 2.6vh;\n  line-height: 0px;\n}\n',
                    '',
                ])
                const s = r
            },
            1811: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '.cac__plugin__card {\n  width: 90%;\n  color: #fff;\n  background-color: rgba(10, 10, 10, 0.6);\n  height: 5vw;\n  text-align: left;\n  border-radius: 0.5vw;\n  margin: 0.5vw;\n  display: flex;\n  flex-direction: column;\n  padding-left: 3%;\n  margin-bottom: 1vw;\n  justify-content: center;\n  transition: all 0.5s ease-in-out;\n}\n.cac__plugin__card--enabled {\n  box-shadow: inset 70vw 0 0px 0 #00db87 !important;\n}\n.cac__plugin__card__title {\n  font-size: 1.5vw;\n  font-weight: bold;\n  margin-bottom: 0;\n  line-height: 1vw;\n  padding: 0;\n  color: #fff;\n}\n.cac__plugin__card__aascription {\n  font-size: 1vw;\n  margin-bottom: 0;\n  color: #fff;\n  line-height: 1vw;\n  padding: 0;\n}\n',
                    '',
                ])
                const s = r
            },
            2814: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '.cac__tabbar__button {\n  width: 3vw;\n  margin: 0px;\n  height: 3vw;\n  background: transparent !important;\n  border: none;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n.cac__tabbar__button:last-child {\n  margin-right: 10px;\n}\n.cac__tabbar__button:active svg {\n  transform: scale(0.8) rotate(10deg);\n}\n.cac__tabbar__button:hover p {\n  opacity: 1;\n  text-align: center;\n}\n.cac__tabbar__button svg {\n  width: 70%;\n  transition: 0.6s;\n  height: 70%;\n  margin: 0px;\n  padding: 0px;\n}\n.cac__tabbar__button p {\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 28vw;\n  top: 0.4vw;\n  right: 7vw;\n  color: #fff;\n  transition: 0.3s;\n  font-size: 1vw;\n}\n',
                    '',
                ])
                const s = r
            },
            4315: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    ".cac__console__container {\n  display: inline-flex;\n  flex-direction: column;\n  width: 90%;\n  background-color: rgba(10, 10, 10, 0.6);\n  border-radius: 15px;\n  height: 70%;\n  align-items: end;\n  text-align: left;\n  margin-bottom: 2%;\n}\n.cac__console__topbar {\n  width: 100%;\n  height: 8%;\n  background-color: #00db87;\n  border-radius: 15px 15px 0 0;\n  justify-self: flex-start;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.cac__console__output {\n  width: 100%;\n  height: 92%;\n  margin-top: 1%;\n  border: none;\n  outline: none;\n  color: #fff;\n  text-align: left;\n  font-size: 1.5vw;\n  padding-left: 1vw;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: flex-end;\n  font-family: 'Roboto Mono', monospace !important;\n  margin-bottom: 1%;\n  overflow-y: scroll;\n}\n.cac__console__output::-webkit-scrollbar {\n  width: 0.5vw;\n}\n.cac__console__output::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cac__console__output::-webkit-scrollbar-thumb {\n  background: #00db87;\n  border-radius: 15px;\n}\n.cac__console__log {\n  margin-left: 2%;\n  user-select: text;\n  font-family: 'Roboto Mono', monospace !important;\n  margin-right: 2%;\n  width: 95%;\n  padding: 0 0.5%;\n  margin-top: 1%;\n  overflow-wrap: anywhere;\n  background-color: rgba(10, 10, 10, 0.6);\n  border-radius: 8px;\n}\n.cac__console__error {\n  color: red !important;\n  background-color: rgba(255, 0, 0, 0.1);\n  border-radius: 8px;\n  margin-left: 2%;\n  margin-right: 2%;\n  width: 95%;\n  padding: 0 0.5%;\n  margin-top: 1%;\n  font-family: 'Roboto Mono', monospace !important;\n  user-select: text;\n  overflow-wrap: anywhere;\n}\n.cac__console__input {\n  width: 100%;\n  height: 9%;\n  background-color: rgba(10, 10, 10, 0.6);\n  border-radius: 15px;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 1vw;\n  padding-left: 2%;\n  align-self: flex-end;\n  font-family: 'Roboto Mono', monospace !important;\n  resize: none;\n  overflow: auto;\n}\n.cac__console__input::placeholder {\n  color: #fff;\n  opacity: 0.2;\n}\n.cac__console__menubar {\n  align-self: flex-start;\n  justify-content: space-between;\n  display: flex;\n  width: 95%;\n  margin-left: 2%;\n  margin-top: 1%;\n  height: 7%;\n  flex-direction: row;\n}\n.cac__console__menubar__item {\n  height: 100%;\n  background-color: #00db87;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  font-size: 1vw;\n  padding: 0 1%;\n}\n",
                    '',
                ])
                const s = r
            },
            1974: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '.cac__pocketbrowser__input {\n  width: 90% !important;\n  line-height: 6vh !important;\n  background: rgba(10, 10, 10, 0.6) !important;\n  color: #fff !important;\n  text-align: left !important;\n  font-size: 1.5vw !important;\n  padding-left: 2% !important;\n  display: inline-flex !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n  margin-top: 2% !important;\n  border: none !important;\n  border-radius: 15px !important;\n  transition: 1s !important;\n  height: auto !important;\n}\n',
                    '',
                ])
                const s = r
            },
            5159: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    '.cac__iframe {\n  width: 90%;\n  height: 80%;\n  background-color: rgba(10, 10, 10, 0.6);\n  border-radius: 20px;\n  margin-top: 2.5%;\n  border: 4px solid #00db87 !important;\n}\n.cac__iframe__maximized {\n  position: fixed;\n  background-color: rgba(10, 10, 10, 0.6);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 95%;\n  border-radius: 0px;\n  border: none !important;\n  margin-top: 0px;\n  z-index: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000;\n}\n.cac__iframe__svg {\n  background-color: transparent;\n  fill: #fff;\n  height: 85%;\n  margin-left: 2%;\n  border: none;\n  width: unset;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5vw;\n  background-color: rgba(10, 10, 10, 0.2);\n  border-radius: 0.7vw;\n  padding: 0 1vw;\n  font-size: 1vw;\n}\n.cac__iframe__svg svg {\n  height: 60% !important;\n}\n.cac__iframe__controls {\n  width: 90%;\n  height: 5%;\n  display: inline-flex;\n  background-color: #00db87;\n  border-radius: 20px;\n  margin-top: 1%;\n  justify-content: flex-start;\n  align-items: center;\n}\n.cac__iframe__controls__maximized {\n  position: fixed;\n  width: 100%;\n  height: 5%;\n  top: 95%;\n  left: 0;\n  margin-left: 0;\n  border-radius: 0px;\n  margin-top: 0px;\n  z-index: 1000000000000000000000000000000000000000000000000000000000000000000;\n}\n@media (max-aspect-ratio: 1/1) {\n  .cac__iframe__svg {\n    background-color: transparent;\n    margin-left: 5% !important;\n    font-size: 0px !important;\n    margin-right: 5% !important;\n  }\n  .cac__iframe__controls {\n    margin-top: 5% !important;\n  }\n}\n',
                    '',
                ])
                const s = r
            },
            4148: (e, n, t) => {
                'use strict'
                t.d(n, { Z: () => s })
                var o = t(2650),
                    i = t.n(o),
                    a = t(196),
                    r = t.n(a)()(i())
                r.push([
                    e.id,
                    "@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshRTM.ttf) format('truetype');\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.cac__ALL {\n  font-family: 'Nunito', sans-serif !important;\n  color: #fff !important;\n  border: none;\n  margin: none;\n  font-weight: auto;\n  box-shadow: none;\n  text-shadow: none;\n}\n.cac__ALL a {\n  color: #fff !important;\n  border: none !important;\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n.cac__ALL:focus {\n  outline: 2px solid #00db87 !important;\n}\nsvg {\n  fill: #fff;\n}\n#cac__CONTAINER {\n  background-color: rgba(10, 10, 10, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n}\n#cac__GUI {\n  width: 85%;\n  height: 85%;\n  background-color: rgba(10, 10, 10, 0.6);\n  text-align: left;\n  display: flex;\n  flex-direction: row;\n  border-radius: 20px;\n  align-items: center;\n}\n#cac__SIDEBAR {\n  width: 20%;\n  height: calc(100% - 1vw);\n  background-color: rgba(10, 10, 10, 0.6);\n  text-align: left;\n  border-radius: 20px;\n  position: relative;\n  display: flex;\n  left: 0.5vw;\n  overflow: none;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n}\n#cac__MAINCONTENT {\n  width: 80%;\n  height: 100%;\n  background-color: transparent;\n  text-align: left;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#cac__LOGO {\n  width: 90%;\n  height: 12%;\n  margin-top: 0.8vh;\n  background-color: #00db87;\n  text-align: center;\n  position: relative;\n  font-size: 1.75vw;\n  font-weight: 800;\n  display: flex;\n  border-radius: 20px;\n  align-items: center;\n  padding-left: 5%;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n  background-image: url(https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/docs/logov8.png);\n  background-size: cover;\n}\n#cac__section__BACKGROUND {\n  width: 95%;\n  height: 6%;\n  background-color: #00db87;\n  text-align: center;\n  border-radius: 15px;\n  position: absolute;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n  animation: fadein 2s;\n}\n#cac__TABBAR {\n  width: auto;\n  z-index: 100000000000000;\n  height: 3vw;\n  background-color: #00db87;\n  border-radius: 1vw;\n  margin-right: 1%;\n  margin-top: calc(0.8vh + 0.5vw);\n  display: flex;\n  justify-content: center;\n  align-self: flex-end;\n  padding-left: 0.25vw;\n}\n#cac__TABBAR:hover .cac__tabbar__button {\n  opacity: 0.5;\n}\n#cac__TABBAR .cac__tabbar__button:hover {\n  opacity: 1;\n}\n/* Mobile */\n@media (max-aspect-ratio: 1/1) {\n  #cac__GUI {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n  }\n  #cac__SIDEBAR {\n    width: 15%;\n    height: 100%;\n    left: 0;\n    border-radius: 0;\n  }\n  #cac__section__BACKGROUND {\n    width: 80%;\n    border-radius: 2vh;\n  }\n  #cac__LOGO {\n    display: none;\n  }\n  #cac__TABBAR {\n    display: none;\n  }\n}\n",
                    '',
                ])
                const s = r
            },
            196: (e) => {
                'use strict'
                e.exports = function (e) {
                    var n = []
                    return (
                        (n.toString = function () {
                            return this.map(function (n) {
                                var t = '',
                                    o = void 0 !== n[5]
                                return (
                                    n[4] && (t += '@supports ('.concat(n[4], ') {')),
                                    n[2] && (t += '@media '.concat(n[2], ' {')),
                                    o && (t += '@layer'.concat(n[5].length > 0 ? ' '.concat(n[5]) : '', ' {')),
                                    (t += e(n)),
                                    o && (t += '}'),
                                    n[2] && (t += '}'),
                                    n[4] && (t += '}'),
                                    t
                                )
                            }).join('')
                        }),
                        (n.i = function (e, t, o, i, a) {
                            'string' == typeof e && (e = [[null, e, void 0]])
                            var r = {}
                            if (o)
                                for (var s = 0; s < this.length; s++) {
                                    var l = this[s][0]
                                    null != l && (r[l] = !0)
                                }
                            for (var c = 0; c < e.length; c++) {
                                var m = [].concat(e[c])
                                ;(o && r[m[0]]) ||
                                    (void 0 !== a && (void 0 === m[5] || (m[1] = '@layer'.concat(m[5].length > 0 ? ' '.concat(m[5]) : '', ' {').concat(m[1], '}')), (m[5] = a)),
                                    t && (m[2] ? ((m[1] = '@media '.concat(m[2], ' {').concat(m[1], '}')), (m[2] = t)) : (m[2] = t)),
                                    i && (m[4] ? ((m[1] = '@supports ('.concat(m[4], ') {').concat(m[1], '}')), (m[4] = i)) : (m[4] = ''.concat(i))),
                                    n.push(m))
                            }
                        }),
                        n
                    )
                }
            },
            2650: (e) => {
                'use strict'
                e.exports = function (e) {
                    return e[1]
                }
            },
            2771: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(5350),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            9805: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(6258),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            1144: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(1316),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            1460: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(2268),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            9777: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(2766),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            4125: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(8133),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            7908: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(6955),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            3472: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(6095),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            8289: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(1811),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            2890: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(2814),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            313: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(4315),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            7688: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(1974),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            9637: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(5159),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            7744: (e, n, t) => {
                'use strict'
                t.r(n), t.d(n, { default: () => f })
                var o = t(1062),
                    i = t.n(o),
                    a = t(552),
                    r = t.n(a),
                    s = t(3566),
                    l = t.n(s),
                    c = t(4107),
                    m = t.n(c),
                    d = t(4911),
                    u = t.n(d),
                    h = t(3227),
                    p = t.n(h),
                    _ = t(4148),
                    g = {}
                ;(g.styleTagTransform = p()), (g.setAttributes = m()), (g.insert = l().bind(null, 'head')), (g.domAPI = r()), (g.insertStyleElement = u()), i()(_.Z, g)
                const f = _.Z && _.Z.locals ? _.Z.locals : void 0
            },
            1062: (e) => {
                'use strict'
                var n = []
                function t(e) {
                    for (var t = -1, o = 0; o < n.length; o++)
                        if (n[o].identifier === e) {
                            t = o
                            break
                        }
                    return t
                }
                function o(e, o) {
                    for (var a = {}, r = [], s = 0; s < e.length; s++) {
                        var l = e[s],
                            c = o.base ? l[0] + o.base : l[0],
                            m = a[c] || 0,
                            d = ''.concat(c, ' ').concat(m)
                        a[c] = m + 1
                        var u = t(d),
                            h = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] }
                        if (-1 !== u) n[u].references++, n[u].updater(h)
                        else {
                            var p = i(h, o)
                            ;(o.byIndex = s), n.splice(s, 0, { identifier: d, updater: p, references: 1 })
                        }
                        r.push(d)
                    }
                    return r
                }
                function i(e, n) {
                    var t = n.domAPI(n)
                    return (
                        t.update(e),
                        function (n) {
                            if (n) {
                                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return
                                t.update((e = n))
                            } else t.remove()
                        }
                    )
                }
                e.exports = function (e, i) {
                    var a = o((e = e || []), (i = i || {}))
                    return function (e) {
                        e = e || []
                        for (var r = 0; r < a.length; r++) {
                            var s = t(a[r])
                            n[s].references--
                        }
                        for (var l = o(e, i), c = 0; c < a.length; c++) {
                            var m = t(a[c])
                            0 === n[m].references && (n[m].updater(), n.splice(m, 1))
                        }
                        a = l
                    }
                }
            },
            3566: (e) => {
                'use strict'
                var n = {}
                e.exports = function (e, t) {
                    var o = (function (e) {
                        if (void 0 === n[e]) {
                            var t = document.querySelector(e)
                            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                                try {
                                    t = t.contentDocument.head
                                } catch (e) {
                                    t = null
                                }
                            n[e] = t
                        }
                        return n[e]
                    })(e)
                    if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
                    o.appendChild(t)
                }
            },
            4911: (e) => {
                'use strict'
                e.exports = function (e) {
                    var n = document.createElement('style')
                    return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
                }
            },
            4107: (e, n, t) => {
                'use strict'
                e.exports = function (e) {
                    var n = t.nc
                    n && e.setAttribute('nonce', n)
                }
            },
            552: (e) => {
                'use strict'
                e.exports = function (e) {
                    if ('undefined' == typeof document) return { update: function () {}, remove: function () {} }
                    var n = e.insertStyleElement(e)
                    return {
                        update: function (t) {
                            !(function (e, n, t) {
                                var o = ''
                                t.supports && (o += '@supports ('.concat(t.supports, ') {')), t.media && (o += '@media '.concat(t.media, ' {'))
                                var i = void 0 !== t.layer
                                i && (o += '@layer'.concat(t.layer.length > 0 ? ' '.concat(t.layer) : '', ' {')), (o += t.css), i && (o += '}'), t.media && (o += '}'), t.supports && (o += '}')
                                var a = t.sourceMap
                                a && 'undefined' != typeof btoa && (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), ' */')),
                                    n.styleTagTransform(o, e, n.options)
                            })(n, e, t)
                        },
                        remove: function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1
                                e.parentNode.removeChild(e)
                            })(n)
                        },
                    }
                }
            },
            3227: (e) => {
                'use strict'
                e.exports = function (e, n) {
                    if (n.styleSheet) n.styleSheet.cssText = e
                    else {
                        for (; n.firstChild; ) n.removeChild(n.firstChild)
                        n.appendChild(document.createTextNode(e))
                    }
                }
            },
            1829: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.create_element = void 0),
                    (n.create_element = function (e, n, t) {
                        const o = document.createElement(e)
                        return (
                            t &&
                                (t.id && (o.id = t.id),
                                t.class_name && (o.className = t.class_name),
                                t.innerHTML && (o.innerHTML = t.innerHTML),
                                t.type && o.setAttribute('type', t.type),
                                t.name && o.setAttribute('name', t.name),
                                t.value && o.setAttribute('value', t.value)),
                            o.classList.add('cac__ALL'),
                            n && n.appendChild(o),
                            o
                        )
                    })
            },
            6527: function (e, n, t) {
                'use strict'
                var o =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.UIManager = void 0)
                const i = t(7424),
                    a = t(1829),
                    r = t(7838),
                    s = t(6345),
                    l = o(t(8182))
                t(7744),
                    (n.UIManager = class {
                        container
                        gui
                        sidebar
                        sections = []
                        enabled_section
                        main_content
                        notification_bar
                        tabbar
                        notificationbar
                        _section_background
                        _animation_options = { duration: 500, fill: 'forwards', easing: 'ease' }
                        constructor() {
                            this._createGUI()
                        }
                        _createGUI() {
                            ;(this.container = (0, a.create_element)('div', document.body, { id: 'cac__CONTAINER' })),
                                (this.gui = (0, a.create_element)('div', this.container, { id: 'cac__GUI' })),
                                (this.sidebar = (0, a.create_element)('div', this.gui, { id: 'cac__SIDEBAR' })),
                                (this.main_content = (0, a.create_element)('div', this.gui, { id: 'cac__MAINCONTENT' })),
                                (this._section_background = (0, a.create_element)('div', this.sidebar, { id: 'cac__section__BACKGROUND' })),
                                (this.tabbar = (0, a.create_element)('div', this.main_content, { id: 'cac__TABBAR' })),
                                (this.notificationbar = new l.default(this.container)),
                                ((0, a.create_element)('div', this.sidebar, { id: 'cac__LOGO', innerHTML: `${s.CLIENTNAMESHORT}` }).style.backgroundImage = `url(${s.LOGO})`),
                                this.container.animate([{ opacity: 0 }, { opacity: 1 }], this._animation_options)
                        }
                        enable_section(e) {
                            ;(this.enabled_section = e),
                                (e.enabled = !0),
                                (e.section_content.style.display = 'block'),
                                (e.section_content.style.pointerEvents = 'auto'),
                                this._section_background.animate([{ top: `${e.nav_button.offsetTop}px` }], this._animation_options),
                                e.section_content.animate([{ opacity: 0 }, { opacity: 1 }], this._animation_options),
                                setTimeout(() => {
                                    ;(e.section_content.style.display = 'block'), (e.section_content.style.pointerEvents = 'auto')
                                }, 500),
                                e.onShow.forEach((e) => e())
                        }
                        disable_section(e) {
                            ;(e.enabled = !1),
                                e.section_content.animate([{ opacity: 1 }, { opacity: 0 }], this._animation_options),
                                setTimeout(() => {
                                    ;(e.section_content.style.display = 'none'), (e.section_content.style.pointerEvents = 'none;')
                                }, 450)
                        }
                        _handleSectionMouseDown(e) {
                            e.enabled || (this.enabled_section && this.disable_section(this.enabled_section), this.enable_section(e))
                        }
                        newSection(e, n, t, o) {
                            const a = 0 === this.sections.length
                            let r = new i.Section(e, n, t, o, this.sidebar, this.main_content, a)
                            return (r.nav_button.onmousedown = () => this._handleSectionMouseDown(r)), a && this.enable_section(r), this.sections.push(r), r
                        }
                        toggleUI() {
                            this.container.parentElement ? this.container.remove() : document.body.appendChild(this.container)
                        }
                        addModule(e) {
                            if (e.custom_render) {
                                try {
                                    if ((e.render(this), e.onShow)) {
                                        const n = this.getSectionFromID(e.onShow[0])
                                        n &&
                                            n.add_onShow(() => {
                                                e.onShow && e.onShow[1](this)
                                            })
                                    }
                                } catch (e) {
                                    console.error(e)
                                }
                                return
                            }
                            const n = this.getSectionFromID(e.section)
                            n &&
                                (n.add_button(e.display_name, e.description || e.display_name, e.always || !1, e.reset || !1, e.onactive || r.none, e.ondisable || r.none, e.disabled || !1),
                                e.onShow && n.add_onShow(e.onShow))
                        }
                        addModulesFromList(e) {
                            for (const n of e) this.addModule(n)
                        }
                        addModulesFromImport(e) {
                            for (const n of Object.keys(e)) {
                                if (!e[n].default) continue
                                const t = e[n].default
                                Array.isArray(t) ? this.addModulesFromList(t) : this.addModule(t)
                            }
                        }
                        getSectionFromID(e) {
                            return this.sections.find((n) => n.id === e)
                        }
                    })
            },
            8098: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(1829),
                    i = t(412)
                t(2771),
                    (n.default = class {
                        enabled = !1
                        button
                        menuContainer
                        parent
                        title
                        onEnable
                        onDisable
                        always
                        reset
                        disabled
                        description
                        constructor(e, n, t, o, i, a, r, s) {
                            ;(this.parent = e),
                                (this.title = n),
                                (this.description = t),
                                (this.onEnable = a),
                                (this.onDisable = r),
                                (this.always = o),
                                (this.reset = i),
                                (this.disabled = s),
                                this.render()
                        }
                        _toggle() {
                            ;(this.enabled = !this.enabled),
                                this.enabled ? this.onEnable() : this.onDisable(),
                                this.button.classList.toggle('cac__button--enabled', this.enabled),
                                this.enabled && (0, i.send_to_discord)(`Enabled ${this.title}`)
                        }
                        _handleMouseDown(e) {
                            0 !== e.button ||
                                (this.enabled && this.always) ||
                                (this.enabled && this.reset) ||
                                (this._toggle(),
                                this.reset &&
                                    setTimeout(() => {
                                        this._toggle()
                                    }, 1e3))
                        }
                        render() {
                            ;(this.button = (0, o.create_element)('button', this.parent, { class_name: 'cac__button', innerHTML: `<div>${this.title}<p>${this.description}</p></div>` })),
                                this.disabled || this.button.addEventListener('mousedown', this._handleMouseDown.bind(this))
                        }
                        get values() {
                            return this.reset ? { enabled: !1 } : { enabled: this.enabled }
                        }
                        set values(e) {
                            e.enabled && this._toggle()
                        }
                    })
            },
            2294: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }), t(9805)
                const o = t(1829)
                n.default = class {
                    parent
                    notification
                    title
                    body
                    constructor(e, n, t, i) {
                        ;(this.parent = e),
                            (this.title = n),
                            (this.body = t),
                            this.render(),
                            i && ((0, o.create_element)('button', this.notification, { class_name: 'cac__notification__button', innerHTML: i.text }).onclick = (e) => i.fn())
                    }
                    render() {
                        ;(this.notification = (0, o.create_element)('div', this.parent, { class_name: 'cac__notification' })),
                            (0, o.create_element)('h1', this.notification, { class_name: 'cac__notification__header', innerHTML: this.title }),
                            (0, o.create_element)('p', this.notification, { class_name: 'cac__notification__body', innerHTML: this.body })
                        let e = (0, o.create_element)('button', this.notification, { class_name: 'cac__notification__button', innerHTML: 'Dismiss' })
                        e.classList.add('cac__notification__dismiss'), (e.onclick = (e) => this.notification.remove())
                    }
                    display(e = 500) {}
                }
            },
            8182: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(1829)
                t(1144),
                    (n.default = class {
                        parent
                        notification_container
                        constructor(e) {
                            ;(this.parent = e), this.render()
                        }
                        render() {
                            this.notification_container = (0, o.create_element)('div', this.parent, { id: 'cac__NOTIFICATIONBAR' })
                        }
                        hide_notification(e) {
                            e.classList.add('cac__mini__notification--hidden'),
                                setTimeout(() => {
                                    e.remove()
                                }, 180)
                        }
                        new_notification(e, n, t = 'info') {
                            const i = (0, o.create_element)('div', this.notification_container, { class_name: `cac__mini__notification cac__mini__notification--${t}` })
                            ;(0, o.create_element)('h3', i, { class_name: 'cac__mini__notification__header', innerHTML: e }),
                                (0, o.create_element)('p', i, { class_name: 'cac__mini__notification__message', innerHTML: n }),
                                i.addEventListener('click', () => {
                                    i.removeEventListener('click', () => {}), this.hide_notification(i)
                                }),
                                setTimeout(() => {
                                    i.classList.add('cac__mini__notification--hidden'),
                                        setTimeout(() => {
                                            i.remove()
                                        }, 180)
                                }, 5e3)
                        }
                    })
            },
            7424: function (e, n, t) {
                'use strict'
                var o =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.Section = void 0)
                const i = t(1829),
                    a = o(t(8098))
                t(1460),
                    (n.Section = class {
                        id
                        nav_button
                        enabled
                        section_title
                        section_content
                        buttons = []
                        onShow = []
                        _displayName
                        _container
                        _description
                        _icon
                        constructor(e, n, t, o, i, a, r = !1) {
                            ;(this.id = e),
                                (this._displayName = n),
                                (this._container = i),
                                (this._description = t),
                                (this._icon = o),
                                (this.enabled = r),
                                this._create_section_elements(a),
                                'client' === this.id
                                    ? ((this.nav_button.style.position = 'absolute'), (this.nav_button.style.bottom = '8vh'))
                                    : 'credit' === this.id && ((this.nav_button.style.position = 'absolute'), (this.nav_button.style.bottom = '20px'))
                        }
                        _create_section_elements(e) {
                            ;(this.nav_button = (0, i.create_element)('div', this._container, { class_name: 'cac__section', innerHTML: this._icon + this._displayName })),
                                (this.section_content = (0, i.create_element)('div', e, { class_name: 'cac__section__content', id: `cac__content__${this.id}` })),
                                (0, i.create_element)('h1', this.section_content, { innerHTML: this._displayName, class_name: 'cac__section__title' }),
                                (0, i.create_element)('p', this.section_content, { innerHTML: this._description, class_name: 'cac__section__description' })
                        }
                        add_button(e, n, t, o, i, r, s) {
                            this.buttons.push(new a.default(this.section_content, e, n, t, o, i, r, s))
                        }
                        get_all_button_values() {
                            return this.buttons.map((e) => [e.enabled])
                        }
                        set_all_button_values_from_array(e) {
                            for (const [n, t] of e.entries()) this.buttons[n].values = { enabled: t[0] }
                        }
                        add_onShow(e) {
                            this.onShow.push(e)
                        }
                    })
            },
            9094: function (e, n, t) {
                'use strict'
                var o =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.get_main_notification = n.get_update = n.checkStatus = n.get_plugins = void 0)
                const i = o(t(2294)),
                    a = t(6345)
                ;(n.get_plugins = async function () {
                    return fetch(`${a.COMMUNITY}meta.json`).then((e) => e.json())
                }),
                    (n.checkStatus = function () {
                        try {
                            return fetch('https://car-axle-client.github.io/'), !0
                        } catch (e) {
                            return !1
                        }
                    }),
                    (n.get_update = function (e) {
                        fetch(`${a.DATABASE}version.json`)
                            .then((e) => e.json())
                            .then((n) => {
                                var t, o
                                parseFloat(`${a.VERSION}.${a.ITERATION}`) >= parseFloat(`${n.version}.${n.i}`)
                                    ? console.info(`Version is UP TO DATE (v${a.VERSION}.${a.ITERATION})`)
                                    : ((t = e),
                                      (o = `${n.version} (i: ${n.i})`),
                                      new i.default(
                                          t,
                                          'A New Update is Available!',
                                          `You can update from <strong>v${a.VERSION} (i: ${a.ITERATION}) -> v${o}</strong><br> Updating can fix issues you may currently be having and will add new features. They can also cause issues. Be careful!`,
                                          { text: 'Install', fn: () => window.open('https://car-axle-client.github.io/install') }
                                      ),
                                      console.warn(`Version is OUT OF DATE (v${a.VERSION}.${a.ITERATION}) -> v${n.version} (i: ${n.i})`))
                            })
                    }),
                    (n.get_main_notification = function (e) {
                        fetch(`${a.DATABASE}notification.json`)
                            .then((e) => e.json())
                            .then((n) => {
                                new i.default(e, n.title, n.body, { text: 'Vote!', fn: () => window.open(n.link) })
                            })
                    })
            },
            5213: function (e, n, t) {
                'use strict'
                var o =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(n, '__esModule', { value: !0 })
                const i = t(6527),
                    a = t(9094),
                    r = t(6345),
                    s = t(9666),
                    l = t(412),
                    c = o(t(3740))
                window.location.href.includes('car-axle-client.github.io/car-axle-client') &&
                    alert(
                        'This is the BETA VERSION of car axle client. Expect things not to work and features to be lacking depth or etc. Still you should report bugs to discord or through the client/tabclock section'
                    ),
                    window.location.href.includes('localhost') || (0, l.send_to_discord)(`car axle client - v${r.VERSION}.${r.ITERATION}\nCurrent URL: ` + window.location.href)
                const m = {}
                let d = t(3045)
                d.keys().forEach((e) => (m[e] = d(e))),
                    (function () {
                        console.log(
                            'Car Axle Client is licensed under the GPLv3 license. You can find the license here: https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/LICENSE'
                        )
                        const e = new i.UIManager()
                        for (let n of c.default) e.newSection(n.id, n.display_name, n.description, n.icon)
                        m && e.addModulesFromImport(m),
                            (0, s.load_module_values)(e),
                            document.addEventListener('keydown', (n) => {
                                '\\' == n.key && e.toggleUI()
                            }),
                            (0, a.get_update)(e.container),
                            (0, a.get_main_notification)(e.container),
                            console.info(`car axle client - v${r.VERSION}.${r.ITERATION} ;)`)
                    })()
            },
            412: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.send_bug_report_to_discord = n.send_to_discord = void 0)
                const o = t(1181)
                ;(n.send_to_discord = function (e) {
                    const n = { content: e }
                    window.location.href.includes('file:///') || fetch(o.webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(n) })
                }),
                    (n.send_bug_report_to_discord = function (e, n, t) {
                        const i = { content: `**${e}**\n${t}\n\n**Contact:** ${n}` }
                        fetch(o.bugs, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(i) })
                    })
            },
            7838: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.none = n.new_iframe = void 0)
                const o = t(1829)
                t(9637),
                    (n.new_iframe = function (e, n, t, i = '', a = 2) {
                        let r = (0, o.create_element)('iframe', n, { class_name: 'cac__iframe', id: i })
                        r.setAttribute('is', 'x-frame-bypass'), r.setAttribute('src', t)
                        let s = (0, o.create_element)('div', n, { class_name: 'cac__iframe__controls' }),
                            l = (0, o.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--\x3e<path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>',
                            }),
                            c = (0, o.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">\x3c!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--\x3e<path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>',
                            }),
                            m = (0, o.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>\n                Fullscreen',
                            }),
                            d = (0, o.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>\n            Maximize',
                            }),
                            u = (0, o.create_element)('button', s, {
                                class_name: 'cac__iframe__svg',
                                innerHTML:
                                    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>\n                about:blank',
                            })
                        var h = [],
                            p = 0,
                            _ = !1
                        r.addEventListener('load', (e) => {
                            _ ? (_ = !1) : (0 !== p && (h.slice(h.length - p - 1, h.length), (p = 0)), h.push(r.src))
                        }),
                            l.addEventListener('mousedown', (e) => {
                                ;(r.src = h[h.length - p - 2]), p--, (_ = !0)
                            }),
                            c.addEventListener('mousedown', (e) => {
                                0 !== p && ((r.src = h[h.length - p - 2]), p++, (_ = !0))
                            })
                        var g = !1
                        return (
                            (d.onmousedown = (t) => {
                                ;(g = !g)
                                    ? (r.classList.add('cac__iframe__maximized'), s.classList.add('cac__iframe__controls__maximized'), e.container.appendChild(r), e.container.appendChild(s))
                                    : (r.classList.remove('cac__iframe__maximized'),
                                      s.classList.remove('cac__iframe__controls__maximized'),
                                      n.insertBefore(r, n.children[a]),
                                      n.insertBefore(s, n.children[3]))
                            }),
                            (m.onmousedown = (e) => {
                                r.requestFullscreen()
                            }),
                            (u.onmousedown = (e) => {
                                let n = window.open(),
                                    t = n.document.createElement('iframe')
                                ;(t.style = 'position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;'),
                                    (t.src = r.src),
                                    n.document.body.appendChild(t)
                            }),
                            r
                        )
                    }),
                    (n.none = function () {})
            },
            4621: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }), t(9637)
                const o = {
                    custom_render: !0,
                    render: function (e) {},
                    onShow: [
                        'chat',
                        function (e) {
                            if (document.getElementById('widgetbot')) return
                            const n = e.getSectionFromID('chat')?.section_content
                            if (!n) return
                            const t = document.createElement('widgetbot')
                            t.setAttribute('server', '1143730031533768726'),
                                t.setAttribute('channel', '1172763447256166420'),
                                t.setAttribute('width', '800'),
                                t.setAttribute('height', '600'),
                                t.setAttribute('id', 'widgetbot')
                            const o = document.createElement('script')
                            ;(o.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/html-embed'), n && (n.appendChild(t), n.appendChild(o))
                        },
                    ],
                }
                n.default = o
            },
            1661: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(6345)
                t(4125)
                const i = t(1829),
                    a = {
                        custom_render: !0,
                        render: function (e) {
                            let n = e.getSectionFromID('client')
                            if (!n) throw 'Error Rendering: Section Does Not Exist'
                            ;(0, i.create_element)('button', n.section_content, {
                                class_name: 'cac__version__display',
                                innerHTML: `\n                <h2>${o.CLIENTNAME} v${o.VERSION}.${o.ITERATION} ${o.HOST}</h2>\n                <h3>by @${o.AUTHOR}</h3>\n                <a href="${o.SOCIAL.github}">Github</a>\n                <a href="${o.SOCIAL.discord}">Discord</a>\n                <a href="${o.SOCIAL.donation}">Donate</a>\n\n`,
                            }).style.backgroundImage = `url(${o.LOGO})`
                        },
                    }
                n.default = a
            },
            5936: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(1829)
                t(9777)
                const i = t(9666),
                    a = t(254)
                function r(e, n) {
                    e && ((document.title = e), (0, i.saveHashToLocalStorage)('tabcloak__title', e)),
                        n && ((document.querySelector("link[rel*='icon']").href = n), (0, i.saveHashToLocalStorage)('tabcloak__img_url', n))
                }
                function s() {
                    let e = '',
                        n = '',
                        t = []
                    for ([n, t] of Object.entries(a)) e += `<option value="${n}">${t[1]}</option>`
                    return e
                }
                document.querySelector("link[rel*='icon']") || ((0, o.create_element)('link', document.head).rel = 'icon')
                const l = {
                    custom_render: !0,
                    render: function (e) {
                        const n = e.getSectionFromID('client'),
                            t = n?.section_content
                        if (!t) return
                        const l = (0, o.create_element)('div', t, { class_name: 'cac__module__form' }),
                            c =
                                ((0, o.create_element)('h1', l, { innerHTML: 'Tab Cloak', class_name: 'cac__module__form__title' }),
                                (0, o.create_element)('select', l, { class_name: 'cac__module__input', innerHTML: s() })),
                            m = (0, o.create_element)('input', l, { value: 'Tab Cloak Title', class_name: 'cac__module__input' }),
                            d = (0, o.create_element)('input', l, { value: 'Image URL', class_name: 'cac__module__input' })
                        c.addEventListener('change', () => {
                            const e = a[c.value]
                            ;(m.value = e[0]), (d.value = e[2]), r(m.value, d.value)
                        }),
                            m.addEventListener('keyup', () => {
                                r(m.value)
                            }),
                            d.addEventListener('change', () => {
                                r(d.value)
                            }),
                            (function (e, n) {
                                let t = [(0, i.getHashFromLocalStorage)('tabcloak__title'), (0, i.getHashFromLocalStorage)('tabcloak__img_url')]
                                ;(e.value = t[0]), (n.value = t[1]), r(t[0], t[1])
                            })(m, d)
                    },
                }
                n.default = l
            },
            8114: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(1829),
                    i = t(412)
                t(9777)
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        const n = e.getSectionFromID('client'),
                            t = n?.section_content
                        if (!t) return
                        if (!n) return
                        const a = (0, o.create_element)('div', t, { class_name: 'cac__module__form' }),
                            r =
                                ((0, o.create_element)('h1', a, { innerHTML: 'Suggestions/Bug Reports', class_name: 'cac__module__form__title' }),
                                (0, o.create_element)('input', a, { value: 'Title', class_name: 'cac__module__input' })),
                            s = (0, o.create_element)('input', a, { value: 'Your Discord/Email', class_name: 'cac__module__input' }),
                            l = (0, o.create_element)('textarea', a, { value: 'Body, describe your suggestion/bug report here', class_name: 'cac__module__input' }),
                            c = (0, o.create_element)('button', a, { innerHTML: 'Submit', class_name: 'cac__module__form__submit' })
                        c.addEventListener('click', () => {
                            ;(0, i.send_bug_report_to_discord)(r.value, s.value, l.value),
                                (c.disabled = !0),
                                (c.innerHTML = 'Submitted! Wait 60 seconds before submitting again.'),
                                setTimeout(() => {
                                    ;(c.disabled = !1), (c.innerHTML = 'Submit')
                                }, 6e4)
                        })
                    },
                }
                n.default = a
            },
            7928: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.default = {
                        display_name: 'I collect usage data such as which modules you have enabled',
                        description: 'This data is collected for for the purpose of improving the client. The data cannot be traced back to you.',
                        id: 'datainfo',
                        section: 'client',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            2705: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.default = { display_name: 'Backslash to hide and unhide', id: 'hideinfo', section: 'client', disabled: !0, custom_render: !1 })
            },
            4769: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.default = { display_name: '3kh0 for most of the assets', description: 'thank you', id: 'cred', section: 'credit', disabled: !0, custom_render: !1 })
            },
            8995: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.default = {
                        display_name: 'Everyone who has suggested something or reported a bug',
                        description: 'and everyone in the discord or who has starred the repo',
                        id: 'cred',
                        section: 'credit',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            6208: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.default = { display_name: 'ading2210 for Edupuzzle Answers', description: 'thanks', id: 'cred', section: 'credit', disabled: !0, custom_render: !1 })
            },
            8243: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.default = { display_name: 'selenite', description: 'for their cloaks list that I blatantly stole', id: 'cred', section: 'credit', disabled: !0, custom_render: !1 })
            },
            5189: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.default = {
                        display_name: 'penguinify (main developer)',
                        description: 'thank you for supporting car axle client for over 5 months!',
                        id: 'cred2',
                        section: 'credit',
                        disabled: !0,
                        custom_render: !1,
                    })
            },
            1947: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const t = new KeyboardEvent('keydown', { key: '\\' }),
                    o = {
                        display_name: 'Auto Hide',
                        description: 'Automatically hides UI when the tab/window changes (press "\\" to unhide once hidden)',
                        id: 'autohide',
                        section: 'exploit',
                        onactive: function () {
                            window.addEventListener('blur', (e) => {
                                document.getElementById('cac__CONTAINER') && document.hidden && document.dispatchEvent(t)
                            })
                        },
                        always: !0,
                        custom_render: !1,
                    }
                n.default = o
            },
            7802: (e, n) => {
                'use strict'
                function t() {
                    document.body.querySelectorAll('*').forEach(function (e) {
                        e.style.setProperty('user-select', 'auto', 'important')
                    })
                }
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = {
                    display_name: 'ForceSelect+',
                    description: 'Forces selection on disabled elements.',
                    id: 'betterforce',
                    section: 'exploit',
                    onactive: t,
                    ondisable: t,
                    always: !0,
                    custom_render: !1,
                }
                n.default = o
            },
            2440: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const t = {
                    display_name: 'NoForceReload',
                    description: 'Prevents the tab from being autoreloaded by showing a popup',
                    id: 'noforcereload',
                    section: 'exploit',
                    onactive: function () {
                        window.onbeforeunload = (e) => 'no'
                    },
                    ondisable: function () {
                        window.onbeforeunload = null
                    },
                    custom_render: !1,
                }
                n.default = t
            },
            7737: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const t = {
                    display_name: 'Edit Page Text',
                    description: 'Allows you to edit the page text',
                    id: 'editpage',
                    section: 'fun',
                    onactive: function () {
                        ;(document.body.contentEditable = 'true'), (document.designMode = 'on')
                    },
                    ondisable: function () {
                        ;(document.body.contentEditable = 'false'), (document.designMode = 'off')
                    },
                    custom_render: !1,
                }
                n.default = t
            },
            1411: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const t = {
                    custom_render: !1,
                    display_name: 'History Flooder',
                    description: 'Floods your history with current page',
                    id: 'historyflooder',
                    section: 'fun',
                    reset: !0,
                    onactive: function () {
                        ;(async function () {
                            let e = 0
                            for (; e < 5e4; ) history.pushState(0, '', e.toString()), e++
                            history.pushState(0, '', window.location.href)
                        })().then(() => {
                            alert('Flooded History 10k times!')
                        })
                    },
                }
                n.default = t
            },
            8419: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const t = {
                    display_name: 'METAL PIPE',
                    description: 'idk why i added this',
                    id: 'metalpipe',
                    section: 'fun',
                    onactive: function () {
                        let e = document.getElementsByTagName('img')
                        if (e)
                            for (let n of e)
                                new Audio('https://www.myinstants.com/media/sounds/jixaw-metal-pipe-falling-sound.mp3').play(), (n.src = 'https://i.ytimg.com/vi/qDvMkxtLV74/maxresdefault.jpg')
                    },
                    always: !0,
                    custom_render: !1,
                }
                n.default = t
            },
            8926: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(1829)
                t(7908)
                const i = {
                    custom_render: !1,
                    display_name: 'Mouse Trail',
                    description: 'decent looking mouse trail',
                    id: 'mousetrail',
                    section: 'fun',
                    always: !0,
                    onactive: function () {
                        document.querySelectorAll('*').forEach((e) => {
                            e.style.cursor = 'none'
                        })
                        let e = (0, o.create_element)('div', document.body, { id: 'custom_cursor_large' }),
                            n = (0, o.create_element)('div', document.body, { id: 'custom_cursor_small' })
                        e &&
                            document.addEventListener('mousemove', (t) => {
                                e.animate([{ left: t.clientX - 15 + 'px', top: t.clientY - 15 + 'px' }], { easing: 'ease', duration: 10, fill: 'forwards' }),
                                    n.animate([{ left: t.clientX - 7 + 'px', top: t.clientY - 7 + 'px' }], { easing: 'ease', duration: 1250, fill: 'forwards' })
                            })
                    },
                }
                n.default = i
            },
            7205: (e, n) => {
                'use strict'
                function t() {
                    !(function e(n) {
                        var t = n.childNodes
                        for (var o in t) e(t[o]), t[o].style && (t[o].style.backgroundImage = 'url(https://i.chzbgr.com/full/5759452672/h934FBF16/my-eyes-my-eyessssssssss)')
                    })(document)
                }
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = { display_name: "don't click this...", description: 'your eyes yearn for peace...', id: 'eyes', section: 'fun', onactive: t, ondisable: t, always: !0, custom_render: !1 }
                n.default = o
            },
            9735: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(7838)
                t(7744)
                const i = {
                    custom_render: !0,
                    render: function (e) {
                        let n = e.getSectionFromID('game')
                        n && (0, o.new_iframe)(e, n.section_content, 'https://penguinify-web-dev.github.io/yourgay.html', 'cac__games__iframe')
                    },
                }
                n.default = i
            },
            5564: function (e, n, t) {
                'use strict'
                var o =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(n, '__esModule', { value: !0 })
                const i = o(t(6321)),
                    a = t(1829)
                t(9777), t(2771), t(3472)
                const r = t(412),
                    s = t(6345),
                    l = t(9666)
                let c = s.GAMESLINK.defaultLink
                function m(e, n) {
                    ;(c = e), (0, l.saveHashToLocalStorage)('gamelink', c), (0, r.send_to_discord)(`Changed game link to ${e}`), n.new_notification('Changed game link', 'Try clicking on a game.')
                }
                const d = {
                    custom_render: !0,
                    render: function (e) {
                        const n = e.getSectionFromID('game')?.section_content
                        n &&
                            ((function (e, n) {
                                const t = (0, a.create_element)('div', n, { class_name: 'cac__module__form' }),
                                    o =
                                        ((0, a.create_element)('h1', t, { class_name: 'cac__module__form__title', innerHTML: 'Switch game links' }),
                                        (0, a.create_element)('button', t, { class_name: 'cac__button', innerHTML: "Default link (doesn't work in v8 rn, use an alternate link) ************.fun" }))
                                !(function (e, n) {
                                    for (const t of s.GAMESLINK.alternate_links)
                                        (0, a.create_element)('button', n, { class_name: 'cac__button', innerHTML: t.display }).addEventListener('mousedown', function () {
                                            m(t.url, e)
                                        })
                                })(e, t)
                                const i = (0, a.create_element)('input', t, { class_name: 'cac__module__input', value: 'Set to custom link' })
                                o.addEventListener('mousedown', function () {
                                    m(s.GAMESLINK.defaultLink, e)
                                }),
                                    i.addEventListener('keydown', function (n) {
                                        'Enter' === n.key && (i.value.endsWith('/') || (i.value += '/'), m(btoa(i.value), e))
                                    })
                            })(e.notificationbar, n),
                            i.default.forEach((e) => {
                                !(function (e, n, t) {
                                    const o = (0, a.create_element)('button', e, { class_name: 'cac__game__button' })
                                    o.addEventListener('mousedown', function () {
                                        !(function (e) {
                                            document.getElementById('cac__games__iframe').setAttribute('src', atob(c) + e)
                                        })(t),
                                            (e.scrollTop = 100),
                                            (0, r.send_to_discord)(`Changed game to '${n}'`)
                                    }),
                                        (0, a.create_element)('p', o, { class_name: 'cac__game__title', innerHTML: n })
                                })(n, e.name, e.url)
                            }))
                    },
                }
                n.default = d
            },
            3644: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }), t(9777)
                const o = t(1829),
                    i = {
                        custom_render: !0,
                        render: function (e) {
                            let n = e.getSectionFromID('game')?.section_content
                            if (!n) return
                            let t = (0, o.create_element)('input', n, { value: 'Search for a game', class_name: 'cac__module__input' })
                            t.style.marginTop = '2%'
                            let i = n.getElementsByClassName('cac__game__button')
                            n.insertBefore(t, i[0]),
                                t.addEventListener('keyup', () => {
                                    !(function (e, n) {
                                        let t = n.value.toLowerCase()
                                        if ('' != t)
                                            for (let n of e)
                                                n.getElementsByClassName('cac__game__title')[0].innerHTML.toLowerCase().includes(t)
                                                    ? n.classList.remove('cac__game__button--hidden')
                                                    : n.classList.add('cac__game__button--hidden')
                                        else for (let n of e) n.classList.remove('cac__game__button--hidden')
                                    })(i, t)
                                })
                        },
                    }
                n.default = i
            },
            1324: function (e, n, t) {
                'use strict'
                var o =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(n, '__esModule', { value: !0 })
                const i = t(1829)
                t(9777)
                const a = t(7838),
                    r = t(9666),
                    s = o(t(816)),
                    l = {
                        custom_render: !0,
                        render: function (e) {
                            let n = e.getSectionFromID('pocket')
                            if (!n) return
                            const t = (0, i.create_element)('input', n.section_content, { class_name: 'cac__module__input', type: 'text', value: 'https://google.com/webhp?igu=1' })
                            let o = (0, a.new_iframe)(e, n.section_content, 'https://bing.com', '', 3)
                            ;(o.src = (0, r.getHashFromLocalStorage)('pocketbrowser')),
                                (t.value = o.src),
                                (o.id = 'cac__pocketbrowser__iframe'),
                                t.addEventListener('change', (n) => {
                                    let i = t.value
                                    ;(i = (function (e) {
                                        let n = e
                                        return n.startsWith('https://') || (n = 'https://' + n), n.endsWith('/') && (n = n.slice(0, -1)), n
                                    })(
                                        (function (e) {
                                            let n = s.default
                                            for (let t of n) {
                                                for (let n of t.remove) e = e.replace(n, '')
                                                t.replaceAll ? e.includes(t.replace) && (e = t.with) : (e = e.replace(t.replace, t.with))
                                            }
                                            return e
                                        })(i)
                                    )),
                                        (t.value = i),
                                        'https://youtube.com' === i && e.notificationbar.new_notification('Pocket browser', 'Paste a video link instead of youtube.', 'error'),
                                        (0, r.saveHashToLocalStorage)('pocketbrowser', i),
                                        o.setAttribute('src', `${i}`)
                                })
                        },
                    }
                n.default = l
            },
            9488: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.default = [
                        {
                            custom_render: !1,
                            disabled: !0,
                            id: 'infoyt',
                            display_name: 'How to use youtube',
                            description: 'Paste in any youtube link into pocket browser and it will work. (Unless your school blocks youtube)',
                            section: 'pocket',
                        },
                        {
                            custom_render: !1,
                            disabled: !0,
                            id: 'infocookies',
                            display_name: 'Fix some websites and games',
                            description:
                                'Go to <a href="https://github.com/car-axle-client/car-axle-client/blob/main/docs/disablingcookies.md" target="_blank">this link</a> and follow the instructions',
                            section: 'pocket',
                        },
                    ])
            },
            1670: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }), t(1829)
            },
            7341: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(1829),
                    i = t(9094),
                    a = t(6345)
                t(9777)
                var r = { wild: ['No link'], normal: ['No link'] },
                    s = 0
                if (
                    (fetch(`${a.DATABASE}special.json`)
                        .then((e) => e.json())
                        .then((e) => (r = e)),
                    (0, i.checkStatus)())
                )
                    var l = 'Proxy Status: Online'
                else l = 'Proxy Status: Offline (Try another website)'
                const c = [
                    { custom_render: !1, disabled: !0, display_name: l, id: 'proxystatus', description: 'Checks if you can use Proxies', section: 'pocket' },
                    {
                        custom_render: !1,
                        display_name: 'Set to Random *.example.com Link',
                        id: 'vu',
                        description: 'Sets to a random proxy link (with a wildcard)',
                        reset: !0,
                        section: 'pocket',
                        onactive: () =>
                            (function () {
                                let e = document.getElementById('cac__pocketbrowser__iframe'),
                                    n = r.wild[Math.floor(Math.random() * r.wild.length)]
                                e.src =
                                    'https://' +
                                    (function (e) {
                                        for (var n = '', t = 0; t < e; t++) n += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(62 * Math.random()))
                                        return n
                                    })(Math.floor(10 * Math.random()) + 3) +
                                    '.' +
                                    atob(n)
                            })(),
                    },
                    {
                        custom_render: !1,
                        display_name: 'Set to Random example.com Link',
                        id: 'uv',
                        description: 'Sets to a random proxy link (without a wildcard)',
                        reset: !0,
                        section: 'pocket',
                        onactive: () =>
                            (function () {
                                let e = document.getElementById('cac__pocketbrowser__iframe')
                                s = Math.floor(Math.random() * r.normal.length)
                                let n = r.normal[s]
                                ;(e.src = atob(n)), (document.getElementById('proccyid').value = s.toString())
                            })(),
                    },
                    {
                        custom_render: !0,
                        render: function (e) {
                            let n = e.getSectionFromID('pocket'),
                                t = n?.section_content
                            if (!t) return
                            let i = (0, o.create_element)('div', t, { class_name: 'cac__module__form' }),
                                a =
                                    ((0, o.create_element)('h2', i, { class_name: 'cac__module__form__title', innerHTML: 'Proxy ID' }),
                                    (0, o.create_element)('input', i, { class_name: 'cac__module__input', id: 'proccyid', type: 'text', value: '0' }))
                            a.addEventListener('change', () => {
                                let e = document.getElementById('cac__pocketbrowser__iframe'),
                                    n = r.normal[parseInt(a.value)]
                                e.src = atob(n)
                            })
                        },
                    },
                ]
                n.default = c
            },
            9941: (e, n, t) => {
                'use strict'
                if ((Object.defineProperty(n, '__esModule', { value: !0 }), (0, t(9094).checkStatus)())) var o = 'Scripts Status: Online'
                else o = 'Scripts Status: Offline (Try another website)'
                const i = { custom_render: !1, disabled: !0, id: 'scriptstatus', display_name: o, description: 'Checks if you can use scripts on this website', section: 'cheats' }
                n.default = i
            },
            3704: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }), t(8289)
            },
            7182: (__unused_webpack_module, exports) => {
                'use strict'
                function adblock() {
                    console.log('LICENSE AGREEMENT: The code used is under the MIT LICENSE'),
                        fetch('https://raw.githubusercontent.com/MarcellPerger1/adblock-bookmarklet/main/dist/release/bookmarklet.min.txt')
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Adblock',
                    id: 'adblock',
                    description: 'Removes advertisements from the website. (by <a href="https://github.com/MarcellPerger1" target="_blank">MarcellPerger1</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: adblock,
                }
                exports.default = plugin
            },
            7289: (__unused_webpack_module, exports) => {
                'use strict'
                function edpuzzle() {
                    var thumbnail
                    console.log(
                        'Edpuzzle Answers is licensed under the GPL 3.0 license. I have made no changes to the code, and I am not the author of the code. The code is sourced from cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js. View the license here: https://github.com/ading2210/edpuzzle-answers/blob/main/LICENSE'
                    ),
                        fetch('https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js')
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Edpuzzle Answers',
                    id: 'edpuzzle',
                    description: 'Gives you the answers to edpuzzle (By <a href="https://github.com/ading2210/edpuzzle-answers">ading2210</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: edpuzzle,
                }
                exports.default = plugin
            },
            3246: (__unused_webpack_module, exports) => {
                'use strict'
                function gimkit() {
                    console.log('LICENSE AGREEMENT: I have been given explicit permission to use this code by the author of this code.'),
                        fetch('https://raw.githubusercontent.com/Penguinify/gimkit-hacks/main/dist/bundle.js')
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Gimkit-Hacks',
                    id: 'gimkit',
                    description: 'Gimkit answer saver (Only works on classic mode) (By <a href="https://github.com/Penguinify/gimkit-hacks">Penguinify</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: gimkit,
                }
                exports.default = plugin
            },
            7567: (__unused_webpack_module, exports) => {
                'use strict'
                function invert() {
                    fetch('https://raw.githubusercontent.com/legend7278/Bookmarklets/main/Invert%20webpage%20colors')
                        .then((e) => e.text())
                        .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Invert Webpage',
                    id: 'invert',
                    description: 'Inverts the colors of the webpage (By <a href="https://github.com/Krazete">Krazete</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: invert,
                }
                exports.default = plugin
            },
            73: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const t = {
                    custom_render: !1,
                    display_name: 'Kick ### Bookmarklet',
                    id: 'kick',
                    description: 'Small game that destroys your website!',
                    section: 'cheats',
                    reset: !0,
                    onactive: function () {
                        var e = document.createElement('script')
                        ;(e.type = 'text/javascript'), document.body.appendChild(e), (e.src = 'https://hi.kickassapp.com/kickass.js')
                    },
                }
                n.default = t
            },
            7036: (__unused_webpack_module, exports) => {
                'use strict'
                function math() {
                    fetch('https://raw.githubusercontent.com/Penguinify/math-bookmarklet/main/dist/bundle.js')
                        .then((e) => e.text())
                        .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Math Solver',
                    id: 'math',
                    description: 'Factor, simplify, and solve (By <a href="https://github.com/penguinify/math-bookmarklet">Penguinify</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: math,
                }
                exports.default = plugin
            },
            7026: (__unused_webpack_module, exports) => {
                'use strict'
                function piano() {
                    console.log('LICENSE AGREEMENT: The code used is UNLICENSED'),
                        fetch('https://raw.githubusercontent.com/Krazete/bookmarklets/master/min/piano.min.js')
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Piano Bookmarklet',
                    id: 'piano',
                    description: 'Adds a Piano to your webpage (by <a href="https://github.com/Krazete" target="_blank">Krazete</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: piano,
                }
                exports.default = plugin
            },
            9928: (__unused_webpack_module, exports) => {
                'use strict'
                function pip() {
                    fetch('https://raw.githubusercontent.com/Krazete/bookmarklets/master/min/pop.min.js')
                        .then((e) => e.text())
                        .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Picture in Picture',
                    id: 'pip',
                    description: 'Puts the first video element picture in picture (By <a href="https://github.com/Krazete">Krazete</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: pip,
                }
                exports.default = plugin
            },
            483: (__unused_webpack_module, exports) => {
                'use strict'
                function simpledarkmode() {
                    fetch('https://raw.githubusercontent.com/legend7278/Bookmarklets/main/Simple%20dark%20mode')
                        .then((e) => e.text())
                        .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Simple Dark Mode',
                    id: 'simpledarkmode',
                    description: 'Dark yes (By Unknown)',
                    section: 'cheats',
                    reset: !0,
                    onactive: simpledarkmode,
                }
                exports.default = plugin
            },
            4050: (__unused_webpack_module, exports) => {
                'use strict'
                function kill() {
                    console.log(
                        'LICENSE AGREEMENT: The code used under the GPL-3.0 License. I have made no changes to the source code and I have taken the code from the official repository. Car axle client is under the GPL 3.0 license For more info see here: https://github.com/zek-c/Securly-Kill-V111/blob/main/LICENSE'
                    ),
                        fetch('https://raw.githubusercontent.com/zek-c/Securly-Kill-V111/main/kill.js')
                            .then((e) => e.text())
                            .then((r) => eval(r))
                }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const plugin = {
                    custom_render: !1,
                    display_name: 'Securely kill',
                    id: 'securely',
                    description: 'Kills securely. Run this on the securely website. See repo for better instructions (by <a href="https://github.com/zek-c" target="_blank">Zek-c</a>)',
                    section: 'cheats',
                    reset: !0,
                    onactive: kill,
                }
                exports.default = plugin
            },
            7447: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(5256),
                    i = t(9666),
                    a = {
                        custom_render: !0,
                        render: function (e) {
                            ;(0, o.render_icon)(
                                e,
                                'Add Save',
                                () => (0, i.new_save)(e),
                                '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/></svg>'
                            )
                        },
                    }
                n.default = a
            },
            2452: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(5256),
                    i = t(9666),
                    a = {
                        custom_render: !0,
                        render: function (e) {
                            ;(0, o.render_icon)(
                                e,
                                'Remove Save',
                                i.remove_save,
                                '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M448 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64zM184 272c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z"/></svg>'
                            )
                        },
                    }
                n.default = a
            },
            5256: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.render_icon = void 0)
                const o = t(1829)
                t(2890),
                    (n.render_icon = function (e, n, t, i) {
                        let a = (0, o.create_element)('button', e.tabbar, { class_name: 'cac__tabbar__button', innerHTML: i })
                        ;(a.onclick = t), (0, o.create_element)('p', a, { class_name: 'cac__tabbar__button__hovername', innerHTML: n })
                    })
            },
            8667: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(5256)
                function i() {
                    document.dispatchEvent(new KeyboardEvent('keydown', { key: '\\' }))
                }
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        ;(0, o.render_icon)(
                            e,
                            'Minimize',
                            i,
                            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>'
                        )
                    },
                }
                n.default = a
            },
            1579: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(5256)
                function i() {
                    document.querySelectorAll('.cac__ALL')?.forEach((e) => {
                        e.remove()
                    })
                }
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        ;(0, o.render_icon)(
                            e,
                            'Self Destruct',
                            i,
                            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'
                        )
                    },
                }
                n.default = a
            },
            1828: function (__unused_webpack_module, exports, __webpack_require__) {
                'use strict'
                var __importDefault =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const UILib_1 = __webpack_require__(1829),
                    constant_1 = __webpack_require__(6345)
                __webpack_require__(313)
                const eastereggs_json_1 = __importDefault(__webpack_require__(4904))
                function render(UI) {
                    let section = UI.getSectionFromID('js'),
                        section_content = section?.section_content
                    if (!section_content) return
                    let console_container = (0, UILib_1.create_element)('div', section_content, { class_name: 'cac__console__container' }),
                        console_menu_bar = (0, UILib_1.create_element)('div', console_container, { class_name: 'cac__console__menubar' }),
                        console_menu_bar_title = (0, UILib_1.create_element)('div', console_menu_bar, {
                            class_name: 'cac__console__menubar__item',
                            innerHTML: `${constant_1.CLIENTNAME} ${constant_1.VERSION}.${constant_1.ITERATION} ${constant_1.HOST}`,
                        }),
                        output = (0, UILib_1.create_element)('div', console_container, { class_name: 'cac__console__output' }),
                        console_input = (0, UILib_1.create_element)('input', console_container, { class_name: 'cac__console__input' })
                    function handle_input_enter() {
                        let input = console_input.value
                        for (let e of eastereggs_json_1.default)
                            input.includes(e.keyword) && (0, UILib_1.create_element)('div', output, { class_name: 'cac__console__log', innerHTML: `${e.response}` })
                        console_input.value = ''
                        try {
                            let output = eval(input)
                            output && console.log(output)
                        } catch (e) {
                            ;(0, UILib_1.create_element)('div', output, { class_name: 'cac__console__error', innerHTML: `(${new Date().toLocaleTimeString()}) ${e}` })
                        }
                    }
                    ;(console_input.placeholder = '> evaluate expression'),
                        (console.stdlog = console.log.bind(console)),
                        (console.log = function () {
                            console.stdlog.apply(console, arguments),
                                (0, UILib_1.create_element)('div', output, {
                                    class_name: 'cac__console__log',
                                    innerHTML: `(${new Date().toLocaleTimeString()}) ${Array.from(arguments).join(' ') || 'undefined'}`,
                                })
                        }),
                        console_input.addEventListener('keypress', (e) => {
                            'Enter' === e.key && handle_input_enter()
                        })
                }
                const plugin = { custom_render: !0, render }
                exports.default = plugin
            },
            2056: (__unused_webpack_module, exports, __webpack_require__) => {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 })
                const UILib_1 = __webpack_require__(1829)
                function run_link(url) {
                    fetch(url)
                        .then((e) => e.text())
                        .then((text) => eval(text))
                }
                function render(e) {
                    let n = e.getSectionFromID('js')?.section_content
                    if (!n) return
                    let t = (0, UILib_1.create_element)('input', n, { value: 'URL to inject', class_name: 'cac__module__input' })
                    ;(0, UILib_1.create_element)('button', n, { innerHTML: 'Inject', class_name: 'cac__button' }).addEventListener('mousedown', () => {
                        run_link(t.value), e.notificationbar.new_notification('Injected script', `Injected script from ${t.value}`)
                    })
                }
                const plugin = { custom_render: !0, render }
                exports.default = plugin
            },
            6526: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const t = {
                    id: 'clear_cookies',
                    custom_render: !1,
                    display_name: 'Clear All Cookies',
                    description: 'Clears all cookies from this website',
                    onactive: function () {
                        for (var e = document.cookie.split(';'), n = 0; n < e.length; n++) {
                            var t = e[n],
                                o = t.indexOf('='),
                                i = o > -1 ? t.substr(0, o) : t
                            document.cookie = i + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
                        }
                    },
                    reset: !0,
                    section: 'js',
                }
                n.default = t
            },
            700: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const t = {
                    id: 'clear_storage',
                    custom_render: !1,
                    display_name: 'Clear All Local Storage Entries',
                    description: 'All data saved by car axle client will be removed as well!',
                    onactive: function () {
                        localStorage.clear()
                    },
                    reset: !0,
                    section: 'js',
                }
                n.default = t
            },
            5069: (e, n, t) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 })
                const o = t(1829),
                    i = t(7838)
                t(7688)
                const a = {
                    custom_render: !0,
                    render: function (e) {
                        let n = e.getSectionFromID('youtube')
                        if (!n) return
                        const t = (0, o.create_element)('input', n.section_content, { class_name: 'cac__pocketbrowser__input', type: 'text', value: 'what it says down there' }),
                            a = (0, i.new_iframe)(e, n.section_content, 'https://placehold.co/600x400?text=^+paste+video+id+^')
                        t.addEventListener('change', (e) => {
                            t.value.includes('youtube.com') && (t.value = t.value.split('v=')[1]), a.setAttribute('src', `https://youtube.com/embed/${t.value}`)
                        })
                    },
                }
                n.default = a
            },
            6345: (e, n) => {
                'use strict'
                switch (
                    (Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.HOST = n.SOCIAL = n.COMMUNITY = n.LOGO = n.DATABASE = n.AUTHOR = n.CLIENTNAMESHORT = n.CLIENTNAME = n.ITERATION = n.VERSION = n.GAMESLINK = void 0),
                    (n.GAMESLINK = {
                        defaultLink: 'aHR0cHM6Ly9jYXJheGxlY2xpZW50LmZ1bi8=',
                        alternate_links: [
                            { display: 'Alternate Link ********.vercel.app', url: 'aHR0cHM6Ly9nbWUtaG9zdGluZy12Mi1iN3gyNG8zNWktcGVuZ3VpbmlmeXMtcHJvamVjdHMudmVyY2VsLmFwcC8=' },
                            { display: 'Alternate Link 2 **********.github.io', url: 'aHR0cHM6Ly90aWNrbGUtdGlwc29uLXRoZS10aGlyZC5naXRodWIuaW8vdGhlLWlycy1hcmUtb250by1tZS8=' },
                            { display: 'Alternate Link 3 **********.onrender.com', url: 'aHR0cHM6Ly9jYXItYXhrZS5vbnJlbmRlci5jb20v' },
                        ],
                    }),
                    (n.VERSION = '8'),
                    (n.ITERATION = '0'),
                    (n.CLIENTNAME = 'car axle client'),
                    (n.CLIENTNAMESHORT = 'car axle'),
                    (n.AUTHOR = 'penguinify & disnos9'),
                    (n.DATABASE = 'https://raw.githubusercontent.com/car-axle-client/car-axle-database/main/'),
                    (n.LOGO = 'https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/docs/logov8.png'),
                    (n.COMMUNITY = 'https://raw.githubusercontent.com/car-axle-client/community-plugins/main/'),
                    (n.SOCIAL = { github: 'https://github.com/car-axle-client/car-axle-client', discord: 'https://discord.gg/akDMdW7Zgd', donation: 'https://www.buymeacoffee.com/penguinify' }),
                    (n.HOST = 'PROD'),
                    window.location.href)
                ) {
                    case 'http://localhost:6969/':
                        n.HOST = 'DEV'
                        break
                    case 'https://car-axle-client.github.io/car-axle-client/':
                        n.HOST = 'BETA'
                }
            },
            9666: (e, n) => {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.remove_save = n.new_save = n.load_module_values = n.getHashFromLocalStorage = n.saveHashToLocalStorage = void 0),
                    (n.saveHashToLocalStorage = function (e, n) {
                        localStorage.setItem('cac__' + e, btoa(n.toString()))
                    }),
                    (n.getHashFromLocalStorage = function (e) {
                        let n = localStorage.getItem('cac__' + e)
                        return n ? atob(n) : ''
                    }),
                    (n.load_module_values = function (e) {
                        const n = JSON.parse(localStorage.getItem('car-axle-client'))
                        n &&
                            n.forEach(function (n) {
                                e.getSectionFromID(n.sectionID)?.set_all_button_values_from_array(n.buttonValues)
                            })
                    }),
                    (n.new_save = function (e) {
                        let n = []
                        for (let t of e.sections) {
                            let e = t.get_all_button_values()
                            n.push({ sectionID: t.id, buttonValues: e })
                        }
                        localStorage.setItem('car-axle-client', JSON.stringify(n))
                    }),
                    (n.remove_save = function () {
                        localStorage.removeItem('car-axle-client')
                    })
            },
            3045: (e, n, t) => {
                var o = {
                    './chatroom/iframe.ts': 4621,
                    './client/aversionnumber.ts': 1661,
                    './client/tabcloak.ts': 5936,
                    './client/ysuggestions.ts': 8114,
                    './client/zdatacollection.ts': 7928,
                    './client/zhideinfo.ts': 2705,
                    './credits/3kho.ts': 4769,
                    './credits/Thanks.ts': 8995,
                    './credits/adder.ts': 6208,
                    './credits/cloaks.ts': 8243,
                    './credits/info.ts': 5189,
                    './exploits/autohide.ts': 1947,
                    './exploits/betterforceselect.ts': 7802,
                    './exploits/noforcereload.ts': 2440,
                    './fun/editpagetext.ts': 7737,
                    './fun/historyflooder.ts': 1411,
                    './fun/metalpipe.ts': 8419,
                    './fun/mousetrail.ts': 8926,
                    './fun/myeyes.ts': 7205,
                    './games/aiframe.ts': 9735,
                    './games/gamesPackager.ts': 5564,
                    './games/search.ts': 3644,
                    './pocketbrowser/pocketbrowser.ts': 1324,
                    './pocketbrowser/qinfo.ts': 9488,
                    './pocketbrowser/sendmelinks.ts': 1670,
                    './pocketbrowser/zcroxies.ts': 7341,
                    './scripts/aastatus.ts': 9941,
                    './scripts/abcommunity-plugins.ts': 3704,
                    './scripts/adblock.ts': 7182,
                    './scripts/edpuzzle.ts': 7289,
                    './scripts/gimkit.ts': 3246,
                    './scripts/invert.ts': 7567,
                    './scripts/kickass.ts': 73,
                    './scripts/math.ts': 7036,
                    './scripts/piano.ts': 7026,
                    './scripts/pip.ts': 9928,
                    './scripts/quickdarkmode.ts': 483,
                    './scripts/securely-kill.ts': 4050,
                    './tabbar/addsave.ts': 7447,
                    './tabbar/bremovesave.ts': 2452,
                    './tabbar/iconlib.ts': 5256,
                    './tabbar/minimize.ts': 8667,
                    './tabbar/selfdestruct.ts': 1579,
                    './webtools/console.ts': 1828,
                    './webtools/quickrun.ts': 2056,
                    './webtools/zclear_cookies.ts': 6526,
                    './webtools/zclear_local_storage.ts': 700,
                    './youtube/youtube.ts': 5069,
                }
                function i(e) {
                    var n = a(e)
                    return t(n)
                }
                function a(e) {
                    if (!t.o(o, e)) {
                        var n = new Error("Cannot find module '" + e + "'")
                        throw ((n.code = 'MODULE_NOT_FOUND'), n)
                    }
                    return o[e]
                }
                ;(i.keys = function () {
                    return Object.keys(o)
                }),
                    (i.resolve = a),
                    (e.exports = i),
                    (i.id = 3045)
            },
            1181: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '{"webhook":"https://discord.com/api/webhooks/1169778411590406255/k8kEQbiJddfhtKi4_8txaEFVa1oXw36StWO5PJorYTziW494066gKQqaWdnoh3KYx4K6","bugs":"https://discord.com/api/webhooks/1179201220527792220/GwYZDJDkLaMrLHbVVP-CW2S46a73RPTDMnXwlugE9sxi8YUfS6XIP3Re7ENs3HxsA2-h","note":"idgaf if you spam these cause i barely check them, youre just wasing ur own time, not mine."}'
                )
            },
            254: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '{"google":["Google","Google Search","https://google.com/favicon.ico"],"canvas":["Dashboard","Canvas","https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico"],"desmos":["Desmos | Graphing Calculator","Desmos","https://www.desmos.com/assets/img/apps/graphing/favicon.ico"],"drive":["My Drive - Google Drive","Google Drive","https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png"],"classroom":["Home","Google Classroom","https://ssl.gstatic.com/classroom/ic_product_classroom_144.png"],"newtab":["New Tab","New Tab","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVR42mKgOqjq75ds7510YNL0uV9nAGqniqwKYiCIHIIjcAK22BGQLRdgBWvc3fnWk/FJhrkPO1xPgGvqPfLfJMHhT1yqurvS48bPaJhjD2efgidnVwa2yv59xecvEvi0UWCXq9t0ItfP2MMZ7nwIpkA8F1n8uLxZHM6yrBH7FIl2gFXDHYsErkn2hyKLHtcKrFntk58uVQJ+kSdQnmjhID4cwLLa8+K0BXsfNWCqBOsFdo2Yldv43DBrkxd30cjnNyYBhK0SQGkI9pG4Mu40D5b374DRCAyhHqXVfTmOwivivMkJxBz5wnHCtBfGgNFC+ChWKWRf3hsQIlyEoIv4IYEo5wkgtBLRekY9DE4Uin4Keae6hydGnljPmE8kRcCine6827AMsJ1IuW9ibnlQpXLBCR/WC875m2BP+VSu3c/0m+8V08OBngc0pxcAAAAASUVORK5CYII="],"docs":["Google Docs","Google Docs","https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico"],"edpuzzle":["Edpuzzle","Edpuzzle","https://edpuzzle.imgix.net/favicons/favicon-32.png"],"khan":["Dashboard | Khan Academy","Khan Academy","https://cdn.kastatic.org/images/favicon.ico?logo"],"quizlet":["Your Sets","Quizlet","https://assets.quizlet.com/a/j/dist/app/i/logo/2021/q-twilight.e27821d9baad165.png"]}'
                )
            },
            6321: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '[{"name":"1 on 1 Soccer","url":"1on1soccer/index.html"},{"name":"1v1.lol","url":"1v1lol/index.html"},{"name":"2048","url":"2048/index.html"},{"name":"60s Burger Run","url":"60sburgerrun/index.html"},{"name":"A Dance of Fire & Ice","url":"adofai/index.html"},{"name":"Achievement Unlocked","url":"achieveunlocked/index.html"},{"name":"Achievement Unlocked 2","url":"achieveunlocked2/index.html"},{"name":"Advance Wars","url":"roms/index.html?game=advance-wars&type=gba"},{"name":"Advance Wars 2","url":"roms/index.html?game=advance-wars-2&type=gba"},{"name":"Adventure Capitalist","url":"adventure-capitalist/index.html"},{"name":"Amazing Rope Police","url":"amazing-rope-police/index.html"},{"name":"Among Us","url":"amongus/index.html"},{"name":"Animal Crossing Wild World","url":"roms/index.html?game=animal-crossing-wild-world&type=nds"},{"name":"Avalanche","url":"avalanche/index.html"},{"name":"Bad Ice Cream","url":"badicecream/index.html"},{"name":"Bad Ice Cream 2","url":"badicecream2/index.html"},{"name":"Bad Ice Cream 3","url":"badicecream3/index.html"},{"name":"Bad Piggies","url":"badpiggies/index.html"},{"name":"Bad Time Simulator","url":"badtimesimulator/index.html"},{"name":"Banjo Pilot","url":"roms/index.html?game=banjo-pilot&type=gba"},{"name":"Basket Bros","url":"basketbros/index.html"},{"name":"Basket Random","url":"basketrandom/index.html"},{"name":"Basketball Stars","url":"basketball-stars/index.html"},{"name":"Bitlife","url":"bitlife/index.html"},{"name":"Blood Tournament","url":"bloodtournament/index.html"},{"name":"Bloons Tower Defense","url":"btd/index.html"},{"name":"Bloons Tower Defense 2","url":"btd2/index.html"},{"name":"Bloons Tower Defense 3","url":"btd3/index.html"},{"name":"Bloons Tower Defense 4","url":"btd4/index.html"},{"name":"Bloons Tower Defense 5","url":"btd5/index.html"},{"name":"Bloons Tower Defense 6","url":"btd6/index.html"},{"name":"Bob the Robber 2","url":"bobtherobber2/index.html"},{"name":"Boxing Physics 2","url":"boxingphysics2/index.html"},{"name":"Boxing Random","url":"boxingrandom/index.html"},{"name":"Burger and Frights","url":"burgerandfrights/index.html"},{"name":"Burrito Bison","url":"burritobison/index.html"},{"name":"Cannon Fodder","url":"roms/index.html?game=cannon-fodder&type=gbc"},{"name":"Celeste","url":"celeste/index.html"},{"name":"Cell Machine","url":"cell-machine/index.html"},{"name":"Champion Island","url":"championisland/index.html"},{"name":"Chess","url":"chess/index.html"},{"name":"Chibi Knight","url":"chibiknight/index.html"},{"name":"CircloO","url":"circloo/index.html"},{"name":"Clicker Heroes","url":"clickerheroes/index.html"},{"name":"Cluster Rush","url":"cluster-rush/index.html"},{"name":"Color Switch","url":"colorswitch/index.html"},{"name":"Commodore 64 Clicker","url":"commodoreclicker/index.html"},{"name":"Cookie Clicker","url":"cookieclicker/index.html"},{"name":"Crossy Road","url":"crossyroad/index.html"},{"name":"Crystalis","url":"roms/index.html?game=crystalis&type=gbc"},{"name":"Cut The Rope","url":"cuttherope/index.html"},{"name":"Cut The Rope Holday","url":"cuttherope-holiday/index.html"},{"name":"Dante","url":"dante/index.html"},{"name":"Db Advanced Adventure","url":"roms/index.html?game=db-advanced-adventure&type=gba"},{"name":"Dbz Buus Fury","url":"roms/index.html?game=dbz-buus-fury&type=gba"},{"name":"Dbz Legacy Of Goku 2","url":"roms/index.html?game=dbz-legacy-of-goku-2&type=gba"},{"name":"Dbz Supersonic Warriors","url":"roms/index.html?game=dbz-supersonic-warriors&type=gba"},{"name":"Death Run 3D","url":"death-run-3d/index.html"},{"name":"Dino","url":"dino/index.html"},{"name":"Doge Miner","url":"dogeminer/index.html"},{"name":"Donkey Kong","url":"roms/index.html?game=donkey-kong&type=gb"},{"name":"Donkey Kong Country","url":"roms/index.html?game=donkey-kong-country&type=gbc"},{"name":"Donkey Kong Land","url":"roms/index.html?game=donkey-kong-land&type=gb"},{"name":"Donkey Kong Land 2","url":"roms/index.html?game=donkey-kong-land-2&type=gb"},{"name":"Donkey Kong Land 3","url":"roms/index.html?game=donkey-kong-land-3&type=gb"},{"name":"Doodle Jump","url":"doodlejump/index.html"},{"name":"Dragon Ball Devolution","url":"dragonballdevolution/index.html"},{"name":"Dragon Warrior 1 And 2","url":"roms/index.html?game=dragon-warrior-1-and-2&type=gbc"},{"name":"Dragon Warrior 3","url":"roms/index.html?game=dragon-warrior-3&type=gbc"},{"name":"Drift Boss","url":"drift-boss/index.html"},{"name":"Drift Hunters","url":"drifthunters/index.html"},{"name":"Drive Mad","url":"drivemad/index.html"},{"name":"Duck Life 1","url":"ducklife1/index.html"},{"name":"Duck Life 2","url":"ducklife2/index.html"},{"name":"Duck Life 3","url":"ducklife3/index.html"},{"name":"Duck Life 4","url":"ducklife4/index.html"},{"name":"Duck Life 5","url":"ducklife5/index.html"},{"name":"Duck Life 6","url":"ducklife6/index.html"},{"name":"Factory Balls","url":"factoryballs/index.html"},{"name":"Factory Balls Forever","url":"factoryballsforever/index.html"},{"name":"Fire Emblem","url":"roms/index.html?game=fire-emblem&type=gba"},{"name":"Fire Emblem Blinding Blade","url":"roms/index.html?game=fire-emblem-blinding-blade&type=gba"},{"name":"Fireboy & Watergirl 1","url":"fireboywatergirl/index.html"},{"name":"Fireboy & Watergirl 2","url":"fireboywatergirl2/index.html"},{"name":"Fireboy & Watergirl 3","url":"fireboywatergirl3/index.html"},{"name":"Fireboy & Watergirl 4","url":"fireboywatergirl4/index.html"},{"name":"Five Nights at Freddy\'s","url":"fnaf/index.html"},{"name":"Five Nights at Freddy\'s 2","url":"fnaf2/index.html"},{"name":"Five Nights at Freddy\'s 3","url":"fnaf3/index.html"},{"name":"Five Nights at Freddy\'s 4","url":"fnaf4/index.html"},{"name":"Flappy Bird","url":"flappybird/index.html"},{"name":"Flippy Fish","url":"flippyfish/index.html"},{"name":"Friday Night Funkin","url":"fridaynightfunkin/index.html"},{"name":"Friends Of Mineral Town","url":"roms/index.html?game=friends-of-mineral-town&type=gba"},{"name":"Fruit Ninja","url":"fruitninja/index.html"},{"name":"Funny Mad Racing","url":"funnymadracing/index.html"},{"name":"Funny Shooter","url":"funnyshooter/index.html"},{"name":"Funny Shooter 2","url":"funnyshooter2/index.html"},{"name":"GBA Emulator","url":"gba/index.html"},{"name":"Game Maker Doodle","url":"gamemaker/index.html"},{"name":"Geometry Dash","url":"geometrydash/index.html"},{"name":"Geometry Rash","url":"geometryrash/index.html"},{"name":"Getaway Shooter","url":"getawayshooter/index.html"},{"name":"Gold Digger FRVR","url":"golddiggerfrvr/index.html"},{"name":"Gun Mayhem","url":"gunmayhem/index.html"},{"name":"Gun Mayhem 2","url":"gunmayhem2/index.html"},{"name":"Gun Mayhem Redux","url":"gunmayhemredux/index.html"},{"name":"Halloween 2016","url":"halloween2016/index.html"},{"name":"Happy Wheels","url":"happywheels/index.html"},{"name":"Helix Jump","url":"helixjump/index.html"},{"name":"HexGL","url":"hexgl/index.html"},{"name":"Hextris","url":"hextris/index.html"},{"name":"I Wanna Be Thy Copy","url":"iwbtc/index.html"},{"name":"Idle Breakout","url":"idlebreakout/index.html"},{"name":"Jetpack Joyride","url":"jetpackjoyride/index.html"},{"name":"Kirby Amazing Mirror","url":"roms/index.html?game=kirby-amazing-mirror&type=gba"},{"name":"Kirby Canvas Curse","url":"roms/index.html?game=kirby-canvas-curse&type=nds"},{"name":"Kirby Mass Attack","url":"roms/index.html?game=kirby-mass-attack&type=nds"},{"name":"Kirby Nightmare In Dream Land","url":"roms/index.html?game=kirby-nightmare-in-dream-land&type=gba"},{"name":"Kirby Squeak Squad","url":"roms/index.html?game=kirby-squeak-squad&type=nds"},{"name":"Kirby Super Star Ultra","url":"roms/index.html?game=kirby-super-star-ultra&type=nds"},{"name":"Kirbys Block Ball","url":"roms/index.html?game=kirbys-block-ball&type=gb"},{"name":"Kirbys Dream Land","url":"roms/index.html?game=kirbys-dream-land&type=gb"},{"name":"Kirbys Dream Land 2","url":"roms/index.html?game=kirbys-dream-land-2&type=gb"},{"name":"Kirbys Pinball Land","url":"roms/index.html?game=kirbys-pinball-land&type=gb"},{"name":"Kirbys Star Stacker","url":"roms/index.html?game=kirbys-star-stacker&type=gb"},{"name":"Knife Hit","url":"knifehit/index.html"},{"name":"Last Horizon","url":"lasthorizon/index.html"},{"name":"Lazy Jump 3D","url":"lazyjump3d/index.html"},{"name":"Learn to Fly","url":"learntofly/index.html"},{"name":"Learn to Fly 2","url":"learntofly2/index.html"},{"name":"Learn to Fly Idle","url":"learntoflyidle/index.html"},{"name":"Link To The Past Four Swords","url":"roms/index.html?game=link-to-the-past-four-swords&type=gba"},{"name":"Links Awakening Dx","url":"roms/index.html?game=links-awakening-dx&type=gbc"},{"name":"Little Alchemy","url":"littlealchemy/index.html"},{"name":"Lows Adventures 2","url":"lowsadventures2/index.html"},{"name":"Madalin Cars","url":"madalincars/index.html"},{"name":"Mario","url":"mario/index.html"},{"name":"Mario And Luigi Bowsers Inside Story","url":"roms/index.html?game=mario-and-luigi-bowsers-inside-story&type=nds"},{"name":"Mario And Luigi Partners In Time","url":"roms/index.html?game=mario-and-luigi-partners-in-time&type=nds"},{"name":"Mario And Luigi Superstar Saga","url":"roms/index.html?game=mario-and-luigi-superstar-saga&type=gba"},{"name":"Mario Kart Ds","url":"roms/index.html?game=mario-kart-ds&type=nds"},{"name":"Mario Kart Super Circuit","url":"roms/index.html?game=mario-kart-super-circuit&type=gba"},{"name":"Mega Man Xtreme","url":"roms/index.html?game=mega-man-xtreme&type=gbc"},{"name":"Mega Man Xtreme 2","url":"roms/index.html?game=mega-man-xtreme-2&type=gbc"},{"name":"Metal Gear Solid","url":"roms/index.html?game=metal-gear-solid&type=gbc"},{"name":"Metroid Fusion","url":"roms/index.html?game=metroid-fusion&type=gba"},{"name":"Metroid Ii Return Of Samus","url":"roms/index.html?game=metroid-ii-return-of-samus&type=gb"},{"name":"Metroid Zero Mission","url":"roms/index.html?game=metroid-zero-mission&type=gba"},{"name":"Monkey Mart","url":"monkeymart/index.html"},{"name":"Mother 3","url":"roms/index.html?game=mother-3&type=gba"},{"name":"Moto X3M","url":"motox3m/index.html"},{"name":"Moto X3M Pool Party","url":"motox3m-pool/index.html"},{"name":"Moto X3M Spooky","url":"motox3m-spooky/index.html"},{"name":"Moto X3M Winter","url":"motox3m-winter/index.html"},{"name":"Nes Bomberman","url":"roms/index.html?game=nes-bomberman&type=gba"},{"name":"Nes Castlevania","url":"roms/index.html?game=nes-castlevania&type=gba"},{"name":"Nes Donkey Kong","url":"roms/index.html?game=nes-donkey-kong&type=gba"},{"name":"Nes Dr Mario","url":"roms/index.html?game=nes-dr-mario&type=gba"},{"name":"Nes Excitebike","url":"roms/index.html?game=nes-excitebike&type=gba"},{"name":"Nes Ice Climber","url":"roms/index.html?game=nes-ice-climber&type=gba"},{"name":"Nes Metroid","url":"roms/index.html?game=nes-metroid&type=gba"},{"name":"Nes Pac Man","url":"roms/index.html?game=nes-pac-man&type=gba"},{"name":"Nes Super Mario Bros","url":"roms/index.html?game=nes-super-mario-bros&type=gba"},{"name":"Nes The Adventure Of Link","url":"roms/index.html?game=nes-the-adventure-of-link&type=gba"},{"name":"Nes The Legend Of Zelda","url":"roms/index.html?game=nes-the-legend-of-zelda&type=gba"},{"name":"Nes Xevious","url":"roms/index.html?game=nes-xevious&type=gba"},{"name":"New Super Mario Bros","url":"roms/index.html?game=new-super-mario-bros&type=nds"},{"name":"Nintendogs Best Friends","url":"roms/index.html?game=nintendogs-best-friends&type=nds"},{"name":"Nut Simulator","url":"nutsim/index.html"},{"name":"Offline Minecraft","url":"offline-mc/index.html"},{"name":"Offline Paradise","url":"offlineparadise/index.html"},{"name":"Online Minecraft","url":"online-mc/index.html"},{"name":"Oracle Of Ages","url":"roms/index.html?game=oracle-of-ages&type=gbc"},{"name":"Oracle Of Seasons","url":"roms/index.html?game=oracle-of-seasons&type=gbc"},{"name":"Pacman","url":"pacman/index.html"},{"name":"Papas Burgeria","url":"papasburgeria/index.html"},{"name":"Papas Freezeria","url":"papasfreezeria/index.html"},{"name":"Papas Pizzeria","url":"papaspizzeria/index.html"},{"name":"Pokemon","url":"pokemon/index.html"},{"name":"Pokemon Blue","url":"roms/index.html?game=pokemon-blue&type=gb"},{"name":"Pokemon Crystal","url":"roms/index.html?game=pokemon-crystal&type=gbc"},{"name":"Pokemon Diamond","url":"roms/index.html?game=pokemon-diamond&type=nds"},{"name":"Pokemon Emerald","url":"roms/index.html?game=pokemon-emerald&type=gba"},{"name":"Pokemon Fire Red","url":"roms/index.html?game=pokemon-fire-red&type=gba"},{"name":"Pokemon Gold","url":"roms/index.html?game=pokemon-gold&type=gbc"},{"name":"Pokemon Heartgold","url":"roms/index.html?game=pokemon-heartgold&type=nds"},{"name":"Pokemon Leaf Green","url":"roms/index.html?game=pokemon-leaf-green&type=gba"},{"name":"Pokemon Pearl","url":"roms/index.html?game=pokemon-pearl&type=nds"},{"name":"Pokemon Pinball","url":"roms/index.html?game=pokemon-pinball&type=gbc"},{"name":"Pokemon Platinum","url":"roms/index.html?game=pokemon-platinum&type=nds"},{"name":"Pokemon Radical Red","url":"roms/index.html?game=pokemon-radical-red&type=gba"},{"name":"Pokemon Red","url":"roms/index.html?game=pokemon-red&type=gb"},{"name":"Pokemon Rocket","url":"roms/index.html?game=pokemon-rocket&type=gba"},{"name":"Pokemon Ruby","url":"roms/index.html?game=pokemon-ruby&type=gba"},{"name":"Pokemon Sapphire","url":"roms/index.html?game=pokemon-sapphire&type=gba"},{"name":"Pokemon Silver","url":"roms/index.html?game=pokemon-silver&type=gbc"},{"name":"Pokemon Sors","url":"roms/index.html?game=pokemon-sors&type=gba"},{"name":"Pokemon Soulsilver","url":"roms/index.html?game=pokemon-soulsilver&type=nds"},{"name":"Pokemon Trading Card Game","url":"roms/index.html?game=pokemon-trading-card-game&type=gbc"},{"name":"Pokemon Unbound","url":"roms/index.html?game=pokemon-unbound&type=gba"},{"name":"Pokemon Yellow","url":"roms/index.html?game=pokemon-yellow&type=gb"},{"name":"Red Ball 3","url":"redball3/index.html"},{"name":"Red Ball 4","url":"redball4/index.html"},{"name":"Red Ball 4 Vol 2","url":"redball4vol2/index.html"},{"name":"Red Ball 4 Vol 3","url":"redball4vol3/index.html"},{"name":"Retro Bowl","url":"retrobowl/index.html"},{"name":"Retro Bowl College","url":"retrobowlcollege/index.html"},{"name":"Riddle School","url":"riddleschool/index.html"},{"name":"Riddle School 2","url":"riddleschool2/index.html"},{"name":"Riddle School 3","url":"riddleschool3/index.html"},{"name":"Riddle School 4","url":"riddleschool4/index.html"},{"name":"Riddle School 5","url":"riddleschool5/index.html"},{"name":"Riddle Transfer","url":"riddleschooltransfer/index.html"},{"name":"Riddle Transfer 2","url":"riddleschooltransfer2/index.html"},{"name":"Rise Higher","url":"risehigher/index.html"},{"name":"Rocket League","url":"rocketleague/index.html"},{"name":"Rooftop Snipers","url":"rooftopsnipers/index.html"},{"name":"Rooftop Snipers 2","url":"rooftopsnipers2/index.html"},{"name":"Ruffle","url":"ruffle/index.html"},{"name":"Run","url":"run/index.html"},{"name":"Run 2","url":"run2/index.html"},{"name":"Run 3","url":"run3/index.html"},{"name":"Sand Game","url":"sand/index.html"},{"name":"Sandtrix","url":"sandtrix/index.html"},{"name":"Shantae","url":"roms/index.html?game=shantae&type=gbc"},{"name":"Skibidi 1 v 100","url":"skibiditoilet/index.html"},{"name":"Skibidi Toilet Attack","url":"skibiditoiletattack/index.html"},{"name":"Slope","url":"slope/index.html"},{"name":"Slope 2","url":"slope2/index.html"},{"name":"Slope Ball","url":"slope-ball/index.html"},{"name":"Snake","url":"snake/index.html"},{"name":"Soccer Random","url":"soccerrandom/index.html"},{"name":"Sonic Advance","url":"roms/index.html?game=sonic-advance&type=gba"},{"name":"Sonic Advance 2","url":"roms/index.html?game=sonic-advance-2&type=gba"},{"name":"Sonic Advance 3","url":"roms/index.html?game=sonic-advance-3&type=gba"},{"name":"Sonic Battle","url":"roms/index.html?game=sonic-battle&type=gba"},{"name":"Sprinter","url":"sprinter/index.html"},{"name":"Stack","url":"stack/index.html"},{"name":"Stickman Boost","url":"stickmanboost/index.html"},{"name":"Stickman Climb","url":"stickmanclimb/index.html"},{"name":"Stickman Golf","url":"stickmangolf/index.html"},{"name":"Stickman Hook","url":"stickman-hook/index.html"},{"name":"Subway Surfers","url":"subway-surfers-ny/index.html"},{"name":"Super Mario 64","url":"supermario64/index.html"},{"name":"Super Mario Bros 2","url":"roms/index.html?game=super-mario-bros-2&type=gba"},{"name":"Super Mario Bros 3","url":"roms/index.html?game=super-mario-bros-3&type=gba"},{"name":"Super Mario Bros Delux","url":"roms/index.html?game=super-mario-bros-delux&type=gbc"},{"name":"Super Mario Land","url":"roms/index.html?game=super-mario-land&type=gb"},{"name":"Super Mario Land 2","url":"roms/index.html?game=super-mario-land-2&type=gb"},{"name":"Super Mario World","url":"roms/index.html?game=super-mario-world&type=gba"},{"name":"Super Meat Boy","url":"supermeatboy/index.html"},{"name":"Super Monkey Ball Jr","url":"roms/index.html?game=super-monkey-ball-jr&type=gba"},{"name":"Super Smash Bros","url":"supersmashbros/index.html"},{"name":"Super Smash Flash","url":"supersmashflash/index.html"},{"name":"Superhot","url":"superhot/index.html"},{"name":"Temple Run 2","url":"templerun2/index.html"},{"name":"Tetris","url":"tetris/index.html"},{"name":"Tetris","url":"roms/index.html?game=tetris&type=gb"},{"name":"The Impossible Game","url":"theimpossiblegame/index.html"},{"name":"The Minish Cap","url":"roms/index.html?game=the-minish-cap&type=gba"},{"name":"There Is No Game","url":"thereisnogame/index.html"},{"name":"Thirty Dollar Website","url":"thirtydollarwebsite/index.html"},{"name":"This Is The Only Level","url":"thisistheonlylevel/index.html"},{"name":"This Is The Only Level 2","url":"thisistheonlylevel2/index.html"},{"name":"Time Shooter","url":"timeshooter1/index.html"},{"name":"Time Shooter 2","url":"timeshooter2/index.html"},{"name":"Time Shooter 3","url":"timeshooter3/index.html"},{"name":"Tiny Fishing","url":"tinyfishing/index.html"},{"name":"Townscaper","url":"townscaper/index.html"},{"name":"Tron","url":"tron/index.html"},{"name":"Tunnel Rush","url":"tunnelrush/index.html"},{"name":"Turbowarp","url":"turbowarp/index.html"},{"name":"Universal Paperclips","url":"universal-paperclips/index.html"},{"name":"Vex","url":"vex/index.html"},{"name":"Vex 2","url":"vex2/index.html"},{"name":"Vex 3","url":"vex3/index.html"},{"name":"Vex 4","url":"vex4/index.html"},{"name":"Vex 5","url":"vex5/index.html"},{"name":"Vex 6","url":"vex6/index.html"},{"name":"Vex 7","url":"vex7/index.html"},{"name":"Wacky Races","url":"roms/index.html?game=wacky-races&type=gbc"},{"name":"Wall Smash","url":"wallsmash/index.html"},{"name":"Wario Land","url":"roms/index.html?game=wario-land&type=gb"},{"name":"Wario Land 2","url":"roms/index.html?game=wario-land-2&type=gbc"},{"name":"Wario Land 3","url":"roms/index.html?game=wario-land-3&type=gbc"},{"name":"Wario Land 4","url":"roms/index.html?game=wario-land-4&type=gba"},{"name":"Warioware Inc","url":"roms/index.html?game=warioware-inc&type=gba"},{"name":"We Become What We Behold","url":"wbwwb/index.html"},{"name":"Weave Silk","url":"weavesilk/index.html"},{"name":"WebGL Fluid Sim","url":"fluidsim/index.html"},{"name":"Windows 11","url":"win11/index.html"},{"name":"Wordle","url":"wordle/index.html"},{"name":"Wordle Bot","url":"wordlebot/index.html"},{"name":"Worlds Hardest Game","url":"worldshardestgame/index.html"},{"name":"Worlds Hardest Game 2","url":"worldhardestgame2/index.html"},{"name":"Worms Armageddon","url":"roms/index.html?game=worms-armageddon&type=gbc"},{"name":"Worms World Party","url":"roms/index.html?game=worms-world-party&type=gba"},{"name":"Yoshis Island","url":"roms/index.html?game=yoshis-island&type=gba"},{"name":"Zombocalypse","url":"zombocalypse/index.html"},{"name":"emulatorJS","url":"emulatorjs/index.html"},{"name":"hole.io","url":"holeio/index.html"},{"name":"justfall.lol","url":"justfalllol/index.html"},{"name":"n-gon","url":"ngon/index.html"},{"name":"osu!","url":"osu/index.html"},{"name":"osu!mania","url":"osumania/index.html"},{"name":"ovo","url":"ovo/index.html"},{"name":"paper.io","url":"paperio/index.html"},{"name":"webretro","url":"webretro/index.html"},{"name":"xx142-b2.exe","url":"xx142-b2.exe/index.html"}]'
                )
            },
            816: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '[{"remove":[""],"replace":"youtube.com/watch?v=","with":"youtube.com/embed/","replaceAll":false},{"remove":[""],"replace":"google.com","with":"google.com/webhp?igu=1","replaceAll":true}]'
                )
            },
            4904: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '[{"keyword":"koigod is gay","response":"frfr [easteregg 6/6]"},{"keyword":"penguinify","response":"stfu im tryin to sleep [easteregg 3/6]"},{"keyword":"car axle client sucks","response":"i agree. use this instead: https://github.com/Penguinify/bollocks-client [easteregg 2/6]"},{"keyword":"bollocks","response":"https://github.com/Penguinify/bollocks-client [easteregg 1/6]"},{"keyword":"console.log","response":"do u not trust that webtools works, you scumbag, vile filth? [easteregg 5/6]"},{"keyword":"games","response":"not giving them to u [easteregg 4/6]"}]'
                )
            },
            3740: (e) => {
                'use strict'
                e.exports = JSON.parse(
                    '[{"id":"game","display_name":"games","description":"actual games that work (maybe)","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 640 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z\\"/></svg>"},{"id":"exploit","display_name":"Exploits","description":"neat, useful tricks to make your life better","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 640 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M64 64l224 0 0 9.8c0 39-23.7 74-59.9 88.4C167.6 186.5 128 245 128 310.2l0 73.8s0 0 0 0H64V64zm288 0l224 0V384H508.3l-3.7-4.5-75.2-90.2c-9.1-10.9-22.6-17.3-36.9-17.3l-71.1 0-41-63.1c-.3-.5-.6-1-1-1.4c44.7-29 72.5-79 72.5-133.6l0-9.8zm73 320H379.2l42.7 64H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48V400c0 26.5 21.5 48 48 48H308.2l33.2 49.8c9.8 14.7 29.7 18.7 44.4 8.9s18.7-29.7 8.9-44.4L310.5 336l74.6 0 40 48zm-159.5 0H192s0 0 0 0l0-73.8c0-10.2 1.6-20.1 4.7-29.5L265.5 384zM192 128a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z\\"/></svg>"},{"id":"cheats","display_name":"Scripts","description":"skidded from other places, nothing is mine","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 576 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z\\"/></svg>"},{"id":"fun","display_name":"Fun","description":"some goofy stuff","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 512 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M426.8 14.2C446-5 477.5-4.6 497.1 14.9s20 51 .7 70.3c-14.8 14.8-65.7 23.6-88.3 26.7c-5.6 .9-10.3-3.9-9.5-9.5C403.3 79.9 412 29 426.8 14.2zM75 75C158.2-8.3 284.5-22.2 382.2 33.2c-1.5 4.8-2.9 9.6-4.1 14.3c-3.1 12.2-5.5 24.6-7.3 35c-80.8-53.6-190.7-44.8-261.9 26.4C37.7 180.1 28.9 290 82.5 370.8c-10.5 1.8-22.9 4.2-35 7.3c-4.7 1.2-9.5 2.5-14.3 4.1C-22.2 284.5-8.2 158.2 75 75zm389.6 58.9c4.7-1.2 9.5-2.5 14.3-4.1C534.2 227.5 520.2 353.8 437 437c-83.2 83.2-209.5 97.2-307.2 41.8c1.5-4.8 2.8-9.6 4-14.3c3.1-12.2 5.5-24.6 7.3-35c80.8 53.6 190.7 44.8 261.9-26.4c71.2-71.2 80-181.1 26.4-261.9c10.5-1.8 22.9-4.2 35-7.3zm-105.4 93c10.1-16.3 33.9-16.9 37.9 1.9c9.5 44.4-3.7 93.5-39.3 129.1s-84.8 48.8-129.1 39.3c-18.7-4-18.2-27.8-1.9-37.9c25.2-15.7 50.2-35.4 73.6-58.8s43.1-48.4 58.8-73.6zM92 265.3l97.4-29.7c11.6-3.5 22.5 7.3 19 19l-29.7 97.4c-2.6 8.6-13.4 11.3-19.8 4.9c-2-2-3.2-4.6-3.4-7.3l-5.1-56.1-56.1-5.1c-2.8-.3-5.4-1.5-7.3-3.4c-6.3-6.3-3.6-17.2 4.9-19.8zm193-178.2c2 2 3.2 4.6 3.4 7.3l5.1 56.1 56.1 5.1c2.8 .3 5.4 1.5 7.3 3.4c6.3 6.3 3.6 17.2-4.9 19.8l-97.4 29.7c-11.6 3.5-22.5-7.3-19-19L265.3 92c2.6-8.6 13.4-11.3 19.8-4.9zM14.9 497.1c-19.6-19.6-20-51-.7-70.3C29 412 79.8 403.2 102.4 400.1c5.6-.9 10.3 3.9 9.5 9.5c-3.2 22.5-11.9 73.5-26.7 88.3C66 517 34.5 516.6 14.9 497.1z\\"/></svg>"},{"id":"pocket","display_name":"Pocket Browser","description":"an iframe I call a browser","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 512 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M274.69,274.69l-37.38-37.38L166,346ZM256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM411.85,182.79l14.78-6.13A8,8,0,0,1,437.08,181h0a8,8,0,0,1-4.33,10.46L418,197.57a8,8,0,0,1-10.45-4.33h0A8,8,0,0,1,411.85,182.79ZM314.43,94l6.12-14.78A8,8,0,0,1,331,74.92h0a8,8,0,0,1,4.33,10.45l-6.13,14.78a8,8,0,0,1-10.45,4.33h0A8,8,0,0,1,314.43,94ZM256,60h0a8,8,0,0,1,8,8V84a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V68A8,8,0,0,1,256,60ZM181,74.92a8,8,0,0,1,10.46,4.33L197.57,94a8,8,0,1,1-14.78,6.12l-6.13-14.78A8,8,0,0,1,181,74.92Zm-63.58,42.49h0a8,8,0,0,1,11.31,0L140,128.72A8,8,0,0,1,140,140h0a8,8,0,0,1-11.31,0l-11.31-11.31A8,8,0,0,1,117.41,117.41ZM60,256h0a8,8,0,0,1,8-8H84a8,8,0,0,1,8,8h0a8,8,0,0,1-8,8H68A8,8,0,0,1,60,256Zm40.15,73.21-14.78,6.13A8,8,0,0,1,74.92,331h0a8,8,0,0,1,4.33-10.46L94,314.43a8,8,0,0,1,10.45,4.33h0A8,8,0,0,1,100.15,329.21Zm4.33-136h0A8,8,0,0,1,94,197.57l-14.78-6.12A8,8,0,0,1,74.92,181h0a8,8,0,0,1,10.45-4.33l14.78,6.13A8,8,0,0,1,104.48,193.24ZM197.57,418l-6.12,14.78a8,8,0,0,1-14.79-6.12l6.13-14.78A8,8,0,1,1,197.57,418ZM264,444a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V428a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8Zm67-6.92h0a8,8,0,0,1-10.46-4.33L314.43,418a8,8,0,0,1,4.33-10.45h0a8,8,0,0,1,10.45,4.33l6.13,14.78A8,8,0,0,1,331,437.08Zm63.58-42.49h0a8,8,0,0,1-11.31,0L372,383.28A8,8,0,0,1,372,372h0a8,8,0,0,1,11.31,0l11.31,11.31A8,8,0,0,1,394.59,394.59ZM286.25,286.25,110.34,401.66,225.75,225.75,401.66,110.34ZM437.08,331h0a8,8,0,0,1-10.45,4.33l-14.78-6.13a8,8,0,0,1-4.33-10.45h0A8,8,0,0,1,418,314.43l14.78,6.12A8,8,0,0,1,437.08,331ZM444,264H428a8,8,0,0,1-8-8h0a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8h0A8,8,0,0,1,444,264Z\\"/></svg>"},{"id":"chat","display_name":"Chat Room","description":"might be blocked by your school, you could try joining the discord instead ;)","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 640 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z\\"/></svg>"},{"id":"js","display_name":"Webtools","description":"webtools like yeah","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 576 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z\\"/></svg>"},{"id":"client","display_name":"Client/Tab Cloak","description":"client settings and misc stuff","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 512 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z\\"/></svg>"},{"id":"credit","display_name":"Credits","description":"i am a professional skidder","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" height=\\"1em\\" viewBox=\\"0 0 512 512\\">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d=\\"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z\\"/></svg>"}]'
                )
            },
        },
        __webpack_module_cache__ = {}
    function __webpack_require__(e) {
        var n = __webpack_module_cache__[e]
        if (void 0 !== n) return n.exports
        var t = (__webpack_module_cache__[e] = { id: e, exports: {} })
        return __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports
    }
    ;(__webpack_require__.n = (e) => {
        var n = e && e.__esModule ? () => e.default : () => e
        return __webpack_require__.d(n, { a: n }), n
    }),
        (__webpack_require__.d = (e, n) => {
            for (var t in n) __webpack_require__.o(n, t) && !__webpack_require__.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] })
        }),
        (__webpack_require__.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (__webpack_require__.nc = void 0)
    var __webpack_exports__ = __webpack_require__(5213)
})()
