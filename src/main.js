// @collapse
run()

function run() {

    var theme = '#ff5e00';

    var name = 'car axle client';

    let disabled = false;

    function newElement(tagName, extend, attributes = {}) {
        const element = document.createElement(tagName);
        for (const [key, value] of Object.entries(attributes)) {
            element[key] = value;
        }

        if (extend) {
            extend.appendChild(element);
        }


        return element
    }



    const Main = newElement('div', document.body, {
        id: 'main-1234-1234'
    });
    const MainContainer = newElement('div', document.body, {
        id: 'main-1234-1234-c'
    });
    const GUIContainer = newElement('div', Main, {
        id: 'gui-container-1234-1234'
    });
    const GUISectionBar = newElement('div', GUIContainer, {
        id: 'section-bar-1234-1234'
    });
    const GUITitle = newElement('div', GUISectionBar, {
        id: 'gui-title-1234-1234'
    });
    GUITitle.innerHTML = 'car axle client';
    const GUIButtonContainer = newElement('div', GUIContainer, {
        id: 'gui-button-container-1234-1234'
    });

    


    const style = document.createElement('style')
    document.head.appendChild(style)
    style.innerHTML = `

@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    * {
        border: none;
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
    }

    #gui-title-1234-1234 {
        width: 100%;
        height: 10%;
        background-color: ${theme};
        border-radius: 15px 0 15px 0;
        font-size: 1.6em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #gui-container-1234-1234 {
        position: absolute;
        width: 80%;
        height: 80%;
        border-radius: 15px;
        background-color:rgba(0, 0, 0, 0.8);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
    }

    #section-bar-1234-1234 {
        width: 20%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 15px 0 0 15px;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #gui-button-container-1234-1234 {
        width: 80%;
        height: 100%;
        border-radius: 0 15px 15px 0;
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        flex-direction: column;
    }


    #main-1234-1234-c {
        left: 0;
        top: 0;
        width: 100vw;
        position: fixed;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100000;
        backdrop-filter: blur(10px);
        opacity: 1 !important;
        transition: 1s;
    }

    svg {
        fill: #fff !important;
    }

    #main-1234-1234 {
        left: 0;
        top: 0;
        width: 100vw;
        position: fixed;
        height: 100vh;
        opacity: 1;
        color: #fff;
        background-color: transparent;
        z-index: 100010;
        text-align: left;
    }

    .frame-1234-1234 {
        background-color: #ffffff;
        width: 50%;
        border-radius: 5px;
        height: 67%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }
    .framebar-1234-1234 {
        border-radius: 5px 5px 0 0;
        padding-left:5px !important;
        background: ${theme};
        width: 100%;
        height: 20px;
        position: relative;
    }

    ::placeholder {
        color: #fff;
        opacity: 1;
    }

    #scratch-loader-input-1234-1234 {
        width: 90%;
        height: 8%;
        font-size: 1.5em;
        border-radius: 5px 5px 0 0;
        background: ${theme};
        color: #fff;
        margin-top: 2% !important;
        position: relative;
        font-family: 'Nunito', sans-serif;
    }

    #turbowarp-iframe-1234-1234 {
        width: 90%;
        height: 80%;
        position: relative;
        background: ${theme};
        border-radius: 0 0 5px 5px;
    }

    #website-loader-input-1234-1234 {
        padding-left: 5px !important;
        width: 100%;
        height: 25px;
        font-size: 1em;
        border-radius: 0;
        background: ${theme};
        color: #fff;
        font-family: 'Nunito', sans-serif;
    }

    #website-loader-input-1234-1234:focus {
        outline: none;
    }

    .section-1234-1234 {
        position: relative;
        width: 90%;
        height: 7%;
        margin: 5%;
        font-size: 1.5em;
        opacity: 1;
        user-select: none;

    }

    .section-background-1234-1234 {
        position: absolute;
        width: 90%;
        border-radius: 5px;
        height: 7%;
        background: ${theme};
    }

    .header-1234-1234 {
        padding-left: 4% !important;
        width: 100%;
        height: 100%;
        opacity: 1 !important;
        border-radius: 5px;
        align-items: center;
        display: flex;
        font-size: 1em;
        transition: 0.2s;
    }

    .buttons-1234-1234 {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.4s;
        display: none;
        flex-direction: column;
        align-items: center;
    }

    .button-c-1234-1234 {
        margin: 1% 0;
        width: 90%;
        height: 10%;
    }
    .button-c-1234-1234:first-child {
        margin-top: 4%;
    }

    .button-1234-1234 {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        font-size: 1.5em;
        border-radius: 10px;
        transition: 0.2s;
        text-align: left;
        padding-left: 4% !important;
        display: flex;
        align-items: center;
    }

    .buttons-title-1234-1234 {
        width: 100%;
        text-align: left;
        display: flex;
        align-items: center;
        padding-left: 10% !important;
        margin-top: 2% !important;
    }

    .button-1234-1234 svg {
        position: absolute;
        right: 7%;
        transition: 0.2s;
    }

    .button-1234-1234:hover {
        transition: 0.2s;
        background-color: rgba(0, 0, 0, 0.83);
    }

    .menu-1234-1234 {
        border-radius: 5px;
        padding: 5% !important;
        width: 75%;
        background-color: rgba(0, 0, 0, 0.7);
        font-size: 0.6em;
        transition: 0.2s;
        transform: scaleX(0);
        display: none;
        flex-direction: column;
        position: absolute;
        left:105%;
        top: 0;
        transform-origin: left;
    }

    .option-1234-1234 {
        width: 100%;
        font-size: 1.25em;
    }

    .checkbox-1234-1234 {
        margin-left: 5% !important;
    }
    .input-text-1234-1234 {
        width: 95%;
        border-radius: 3px;
    }

    .separator-1234-1234 {
        width: 90%;
        height: 3px;
        background: ${theme};
        opacity: 0.7;
        border-radius: 5px;
    }

    .close-1234-1234 {
        color: #fff;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 0;
        top: 0;
        background: transparent;
    }

    .close-1234-1234:disabled {
        opacity: 0.5;
    }

    .close-1234-1234:hover {
        transition: 0.2s;
        transform: scale(1.1);
        cursor: pointer;
    }

    .fullscreen-1234-1234 {
        width: 20px;
        color: #fff;
        height: 20px;
        position: absolute;
        right: 25px;
        top: 0;
        background: transparent;
    }

    .fullscreen-1234-1234:disabled {
        opacity: 0.5;
    }

    .fullscreen-1234-1234:hover {
        transition: 0.2s;
        transform: scale(1.1);
        cursor: pointer;
    }

    .minimize-1234-1234 {
        color: #fff;
        height: 20px;
        background: transparent;
        position: absolute;
        right: 50px;
        top: 0;
    }

    .minimize-1234-1234:hover {
        transition: 0.2s;
        transform: scale(1.1);
        cursor: pointer;
    }

    #website-loader-iframe-1234-1234 {
        width: 100%;
        height: 100%;
        position: relative;
    }

    #notification-group-1234-1234 {
        position: absolute;
        width: 20%;
        height: 100%;
        right: 30px;
        bottom: 0;
        display: flex;
        flex-direction: column;
    }

    #notification-group-1234-1234 .notification-1234-1234 {
        width: 100%;
        padding: 10px !important;
        margin-bottom: 10px !important;
        height: 10%;
        background: ${theme};
        color: #fff;
        display:none;
        opacity: 0;
        transition: 0.2s;
        position: absolute;
        bottom: 0;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
    }

    #notification-group-1234-1234 .notification-1234-1234 .notification-title-1234-1234 {
        font-size: 1.5em;
    }

`

    var sectionInstances = []
    var activeSection = null
    const sectionBackground = newElement('div', GUISectionBar, {
        className: 'section-background-1234-1234'
    });
    class UISection {

        constructor(id, name, active = false) {
            this._initializeProperties(id, name, active);
            this._setupHeaderMouseDownEvent();
        }

        _initializeProperties(id, name, active) {
            this.div = newElement('div', GUISectionBar, {
                className: 'section-1234-1234'
            });
            this.div.id = `${name}-1234-1234`;
            this.header = newElement('div', this.div, {
                className: 'header-1234-1234'
            });
            this.header.innerHTML = name;
            this.header.addEventListener('contextmenu', e => e.preventDefault());

            this.name = name;
            this.id = id;
            this.buttons = [];
            this.buttonsDiv = newElement('div', GUIButtonContainer, {
                className: 'buttons-1234-1234'
            });
            newElement('h1', this.buttonsDiv, {
                innerHTML: name,
                className: 'buttons-title-1234-1234'
                })
            this.enabled = active;
            console.log(active)
            if (active) {activeSection = this; sectionBackground.style.top = this.div.offsetTop + 'px'; this._showSection();}
            sectionInstances.push(this);
        }

        _setupHeaderMouseDownEvent() {
            this.header.onmousedown = (e) => this._handleHeaderMouseDown(e);
        }

        _handleHeaderMouseDown(e) {
            if (activeSection == this) return;
            this.enabled = true;
            this._showSection();
            activeSection.enabled = false;
            activeSection._hideSection();
            activeSection = this;
        }

        _showSection() {
            sectionBackground.animate([{
                top: this.div.offsetTop + 'px',
            }], {
                duration: 500,
                fill: 'forwards',
                easing: 'ease'
            });

            this.buttonsDiv.style.display = 'flex';
            this.buttonsDiv.animate([
                {transform: 'translateY(100%)'},
                {transform: 'translateY(0%)'}
            ], {
                duration: 500,
                easing: 'ease'
            });

        }

        _hideSection() {
            this.buttonsDiv.animate([{
                transform: 'translateY(-100%)'
            }], {
                duration: 520,
                easing: 'ease'
            });

            setTimeout(() => {
                this.buttonsDiv.style.display = 'none';
            }, 500);
        }



        addButton(name, func, always = false, reset = false, options = []) {
            const buttonContainer = this._createButtonContainer();
            const button = this._createButton(buttonContainer, name);
            button.always = always;
            button.reset = reset;
            button.func = func;
            button.menu = options.length > 0 ? true : false

            if (button.menu) {
                this._addOptionsIcon(button);
                this._createOptionsMenu(buttonContainer, options);
            }

            button.onmousedown = (e) => this._handleMouseDown(e, button, func, always, reset);
            this.buttons.push(button);
        };

        _createButtonContainer() {
            return newElement('div', this.buttonsDiv, {
                className: 'button-c-1234-1234'
            });
        }

        _createButton(container, name) {
            const button = newElement('button', container, {
                className: 'button-1234-1234'
            });
            button.innerHTML = name;
            button.enabled = false;
            return button;
        }

        _addOptionsIcon(button) {
            button.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>'
            button.addEventListener('contextmenu', e => e.preventDefault());
        }

        _createOptionsMenu(container, options) {
            const menu = newElement('div', container, {
                className: 'menu-1234-1234'
            });
            menu.style.height = options[0] + '%';

            for (let i = 1; i < options.length; i++) {
                switch (options[i].type) {
                case 'checkbox':
                    this._addCheckboxOption(menu, options[i]);
                    break;
                case 'radio':
                    this._addRadioOption(menu, options[i]);
                    break;
                case 'text':
                    this._addTextOption(menu, options[i]);
                    break;
                }
            }
        }

        _addCheckboxOption(menu, optionData) {
            const option = newElement('div', menu, {
                className: 'option-1234-1234'
            });
            option.innerHTML = optionData.name;
            const checkbox = newElement('input', option, {
                className: 'checkbox-1234-1234'
            });
            checkbox.type = 'checkbox';
            checkbox.checked = optionData.checked || false;
        }

        _addRadioOption(menu, optionData) {
            const option = newElement('div', menu, {
                className: 'option-1234-1234'
            });
            option.innerHTML = optionData.name;
            const fieldset = newElement('fieldset', option, {
                className: 'fieldset-1234-1234'
            });
            optionData.values.forEach(value => {
                const div = newElement('div', fieldset, {
                    className: 'div-1234-1234'
                });
                const input = newElement('input', div, {
                    className: 'input-radio-1234-1234'
                });
                input.type = 'radio';
                input.name = optionData.name;
                input.value = value;
                input.checked = value === optionData.checked;
                const label = newElement('label', div, {
                    className: 'label-1234-1234'
                });
                label.innerHTML = value;
            });
        }

        _addTextOption(menu, optionData) {
            const option = newElement('div', menu, {
                className: 'option-1234-1234'
            });
            option.innerHTML = optionData.name;
            const input = newElement('input', option, {
                className: 'input-text-1234-1234'
            });
            input.type = 'text';
            input.value = optionData.placeholder;
        }

        _handleMouseDown(e, button) {
            if (button.menu) {
                let menu = button.parentElement.querySelector('.menu-1234-1234');
                if (e.button == 2) {
                    this._toggleMenu(menu);
                    return;
                }
                button.values = this._getMenuValues(menu);
            }
            if (button.reset) {
                this._setButtonStateWithButton(button, true);
                button.style.backgroundColor = theme;
                setTimeout(() => {
                    console.log(this.button)
                    button.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                }, 200);
                return;
            }
            this._setButtonStateWithButton(button, !button.enabled);

        }

        _setButtonStateWithButton(button, state) {
            if (button.menu) {
                button.values = this._getMenuValues(button.parentElement.querySelector('.menu-1234-1234'))
            }
            if (state || button.always) {
                button.enabled = true;
                button.style.background = button.reset ? null : theme;
                button.func(button.enabled, button.values);
            } else {
                button.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                button.enabled = false;
                button.func(button.enabled, button.values);
            }
        }

        _setButtonStateWithIndex(index, state) {
            this._setButtonStateWithButton(this.buttons[index], state);
        }

        _toggleMenu(menu) {
            menu.style.display = 'flex';
            menu.style.transform = menu.style.transform == 'scaleX(1)' ? 'scaleX(0)' : 'scaleX(1)';
        }

        _getMenuValues(menu) {
            const values = [];
            Array.from(menu.children).forEach(child => {
                const childElement = child.children[0];
                switch (childElement.type) {
                case 'checkbox':
                    values.push(childElement.checked);
                    break;
                case 'fieldset':
                    Array.from(childElement.children).forEach(fieldsetChild => {
                        if (fieldsetChild.children[0].checked) {
                            values.push(fieldsetChild.children[0].value);
                        }
                    });
                    break;
                case 'text':
                    values.push(childElement.value);
                    break;
                }
            });
            return values;
        }

        addSeparator() {
            let separator = newElement('div', this.buttonsDiv, {
                className: 'separator-1234-1234'
            });
        }

        getActive() {
            return this.buttons.map(button => [button.enabled, button.values]);
        }

        _setButtonValue(index, value) {
            this.buttons[index].values = value;
            let menu = this.buttons[index].parentElement.querySelector('.menu-1234-1234');

            for (let i = 0; i < menu.children.length; i++) {
                let child = menu.children[i].children[0]
                switch (child.type) {
                case 'checkbox':
                    child.checked = value[i]
                    break;
                case 'fieldset':
                    Array.from(child.children).forEach(fieldsetChild => {
                        if (fieldsetChild.children[0].value == value[i]) {
                            fieldsetChild.children[0].checked = true
                        }
                    });
                    break;
                case 'text':
                    child.value = value[i]
                    break;
                }
            }

        }

    }

    class Notification {
        constructor(title, body) {
            this._initializeProperties(title, body);
            this.group = this._getNotificationGroup();
            this._createNotification();
        }

        _initializeProperties(title, body) {
            this.title = title;
            this.body = body;
        }

        _getNotificationGroup() {
            let notificationGroup = document.getElementById('notification-group-1234-1234');
            return !notificationGroup ? newElement('div', Main, {
                id: 'notification-group-1234-1234'
            }) : notificationGroup;
        }

        _createNotification() {
            this.notification = newElement('div', this.group, {
                className: 'notification-1234-1234'
            });
            let title = newElement('div', this.notification, {
                className: 'notification-title-1234-1234'
            });
            title.innerHTML = this.title;
            let body = newElement('div', this.notification, {
                className: 'notification-body-1234-1234'
            });
            body.innerHTML = this.body;
        }

        show(time) {
            this.notification.style.display = 'flex';
            this.notification.style.opacity = 1;
            setTimeout(() => {
                this.notification.style.opacity = 0;
                setTimeout(() => {
                    this.notification.style.display = 'none';
                }, 300);
            }, time);
        }
    }

    function preventReload(active, values) {
        if (active) {
            window.onbeforeunload = function () {
                return 'Are you sure you want to leave?'
            }
        } else {
            window.onbeforeunload = null
        }
    }

    function ForceContext(active, values) {
        if (active) {
            document.oncontextmenu = function () {
                return true
            }
        } else {
            document.oncontextmenu = null
        }
    }

    function MouseTrail(active, values) {
        if (active) {
            let mouseConfig = document.createElement('script')
            mouseConfig.innerHTML = `
        const mouseeeConfig = {
            color: "${theme}", // cursor border color
            size: ${values[1]}, // cursor size
            trailColor: "${theme}", // trail color
            trailTime: 300, // trail duration time
            showTrail: ${values[0]}, // show trail
            clickAnimation: true, // animation on click
          };`
            document.head.appendChild(mouseConfig)

            let script = document.createElement('script')
            script.src = 'https://cdn.jsdelivr.net/npm/mouseee@1.3.0/lib/index.js'
            script.type = 'module'
            document.head.appendChild(script)
        }
    }

    function injectScript(active, values) {
        let script = document.createElement('script')
        script.src = prompt('Script to inject:')
        document.head.appendChild(script)
    }

    function selfDestroy(active, values) {
        Main.remove()
    }

    function forceSelect(active, values) {
        var a = document.createElement('style'),
            b;
        document.head.appendChild(a);
        b = a.sheet;
        b.insertRule('*{user-select:unset !important}', 0);
    }

    function skipYTad(active, values) {
        document.querySelector('video').currentTime = document.querySelector('video').duration
    }

    function customFont(active, values) {
        let font = document.createElement('style')
        font.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=${values[0]}');
    * {
        font-family: '${values[0]}' !important;
    }
    `
        document.head.appendChild(font)
    }

    function saveSettingsToLocalStorage(active, values) {
        let settings = {}
        localStorage.setItem('fluxter-settings', 'if u see this, just know something went wrong')

        for (let i = 0; i < sectionInstances.length; i++) {
            let section = {
                id: i,
                active: [sectionInstances[i].getActive()]
            }
            settings[sectionInstances[i].id] = section
        }
        console.log(settings)

        localStorage.setItem('fluxter-settings', JSON.stringify(settings))
        savenotification.show(2000)
    }

    function removeSettingsFromLocalStorage(active, values) {
        localStorage.removeItem('fluxter-settings')
        removenotification.show(2000)
    }

    function loadSettingsFromLocalStorage(active, values) {
        let settings = JSON.parse(localStorage.getItem('fluxter-settings'))
        console.log(settings)
        for (let i = 0; i < sectionInstances.length; i++) {
            for (let j = 0; j < settings[sectionInstances[i].id].active[0].length; j++) {
                state = settings[sectionInstances[i].id].active[0][j][0]
                values = settings[sectionInstances[i].id].active[0][j][1]
                if (values != null) {
                    sectionInstances[i]._setButtonValue(j, values)
                }
                if (state) {
                    sectionInstances[i]._setButtonStateWithIndex(j, state)
                }

            }
        }
    }

    function openForm(active, values) {
        window.open('https://forms.gle/Bb5zAk5JnDxSjqdx9')
    }

    function metalPipe(active, values) {
        var audio = new Audio('https://www.myinstants.com/media/sounds/jixaw-metal-pipe-falling-sound.mp3');
        audio.play();
        var imgs = document.getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].src = 'https://i.kym-cdn.com/entries/icons/original/000/043/027/metalpipefalling.jpg';
        };
    }

    function createFramebar(title) {
        const framebar = newElement('div', false, {
            innerHTML: title,
            className: 'framebar-1234-1234'
        });
        const minimize = newElement('button', framebar, {
            innerHTML: '–',
            className: 'minimize-1234-1234'
        });
        const fullscreen = newElement('button', framebar, {
            innerHTML: '□',
            className: 'fullscreen-1234-1234'
        });
        const close = newElement('button', framebar, {
            innerHTML: '✕',
            className: 'close-1234-1234'
        });

        framebar.appendChild(fullscreen);
        framebar.appendChild(close);
        framebar.appendChild(minimize);

        return {
            framebar,
            minimize,
            fullscreen,
            close
        };
    }

    function ScratchPlus(active, values) {
        if (active) {
            const scratchLoader = newElement('div', false, {
                id: 'scratch-loader-1234-1234',
                style: {
                    height: '60%',
                    width: '50%'
                },
                className: 'frame-1234-1234'
            });

            const {
                framebar,
                minimize
            } = createFramebar('Scratch Loader+');

            $(scratchLoader).draggable({
                containment: 'parent',
                scroll: false,
                stack: '.frame-1234-1234',
                handle: '.framebar-1234-1234'
            });

            const scratchLoaderInput = newElement('input', scratchLoader, {
                placeholder: 'https://scratch.mit.edu/projects/123456789/',
                id: 'scratch-loader-input-1234-1234',
                className: 'input-1234-1234'
            });

            const turbowarpIframe = newElement('iframe', scratchLoader, {
                id: 'turbowarp-iframe-1234-1234',
                fullscreen: true,
                noscrolling: true,
                className: 'iframe-1234-1234'
            });

            scratchLoaderInput.addEventListener('keydown', e => {
                if (e.key == 'Enter') {
                    const id = scratchLoaderInput.value.split('/')[4];
                    if (id) {
                        turbowarpIframe.src = `https://turbowarp.org/${id}/embed?addons=pause,mute-project&settings-button`;
                    }
                }
            });

            minimize.addEventListener('click', e => {
                e.preventDefault();
                scratchLoader.style.height = scratchLoader.style.height === '20px' ? '60%' : '20px';
            });

            scratchLoader.appendChild(framebar);
            scratchLoader.appendChild(scratchLoaderInput);
            scratchLoader.appendChild(turbowarpIframe);
            Main.appendChild(scratchLoader);
        } else {
            document.getElementById('scratch-loader-1234-1234').remove();
        }
    }

    function websiteLoader(active, values) {
        const websiteLoader = newElement('div', false, {
            id: 'website-loader-1234-1234',
            style: {
                height: '65%',
                width: '60%'
            },
            className: 'frame-1234-1234'
        });

        const {
            framebar,
            minimize,
            fullscreen,
            close
        } = createFramebar('Website Loader');

        $(websiteLoader).draggable({
            containment: 'parent',
            scroll: false,
            stack: '.frame-1234-1234',
            handle: '.framebar-1234-1234'
        });

        const websiteLoaderInput = newElement('input', websiteLoader, {
            placeholder: 'https://example.com/',
            id: 'website-loader-input-1234-1234',
            value: values[0],
            className: 'input-1234-1234'
        });

        const websiteLoaderIframe = newElement('iframe', websiteLoader, {
            id: 'website-loader-iframe-1234-1234',
            className: 'iframe-1234-1234',
            src: values[0]
        });

        websiteLoaderInput.addEventListener('keydown', e => {
            if (e.key == 'Enter') {
                websiteLoaderIframe.src = websiteLoaderInput.value;
            }
        });

        close.addEventListener('click', () => websiteLoader.remove());

        fullscreen.addEventListener('click', () => {
            if (websiteLoader.style.height !== '100%') {
                websiteLoader.style.height = '100%';
                websiteLoader.style.width = '100%';
                $(websiteLoader).position({
                    my: "center",
                    at: "center",
                    of: window
                });
            } else {
                websiteLoader.style.height = '65%';
                websiteLoader.style.width = '60%';
            }
        });

        minimize.addEventListener('click', () => {
            websiteLoader.style.height = websiteLoader.style.height !== '41px' ? '41px' : '65%';
        });

        websiteLoader.appendChild(framebar);
        websiteLoader.appendChild(websiteLoaderInput);
        websiteLoader.appendChild(websiteLoaderIframe);
        Main.appendChild(websiteLoader);
    }

    function openPopup(active, values) {
        window.open(values[0], "popup", `width=${values[1]},height=${values[2]}`)
    }

    function none(active) {}

    const Exploits = new UISection('exploits', ' <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M499.6 11.3c6.7-10.7 20.5-14.5 31.7-8.5s15.8 19.5 10.6 31L404.8 338.6c2.2 2.3 4.3 4.7 6.3 7.1l97.2-54.7c10.5-5.9 23.6-3.1 30.9 6.4s6.3 23-2.2 31.5l-87 87H378.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H117.8L42.3 363.7c-9.7-6.7-13.1-19.6-7.9-30.3s17.4-15.9 28.7-12.4l97.2 30.4c3-3.9 6.1-7.7 9.4-11.3L107.4 236.3c-6.1-10.1-3.9-23.1 5.1-30.7s22.2-7.5 31.1 .1L246 293.6c1.5-.4 3-.8 4.5-1.1l13.6-142.7c1.2-12.3 11.5-21.7 23.9-21.7s22.7 9.4 23.9 21.7l13.5 141.9L499.6 11.3zM64 448v0H512v0h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64zM288 0c13.3 0 24 10.7 24 24V72c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24z"/></svg> &nbsp;Exploits', true)
    Exploits.addButton('NoReload', preventReload)
    Exploits.addButton('ForceContext', ForceContext)
    Exploits.addButton('ForceSelect', forceSelect, true, false)
    Exploits.addButton('Popup', openPopup, false, true, [330, {
        'name': 'Website',
        'type': 'text',
        'placeholder': 'https://bing.com'
    }, {
        'name': 'Width',
        'type': 'text',
        'placeholder': '1200'
    }, {
        'name': 'Height',
        'type': 'text',
        'placeholder': '720'
    }])

    const Games = new UISection('games', ' <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"/></svg> &nbsp;Bypasses')
    Games.addButton('Scratch+', ScratchPlus, false, false)
    Games.addButton('Website Loader', websiteLoader, false, true, [220, {
        'name': 'Start Page',
        'type': 'text',
        'placeholder': 'https://bing.com'
    }])
    Games.addButton('Flash Loader', none, false, false)

    const Fun = new UISection('fun', '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"/></svg> &nbsp;Fun')
    Fun.addButton('Mouse Trail', MouseTrail, true, false, [220, {
        'name': 'Trail?',
        'type': 'checkbox',
        'checked': true
    }, {
        'name': 'Size',
        'type': 'text',
        'placeholder': '20'
    }])
    Fun.addButton('Custom Font', customFont, true, false, [130, {
        'name': 'Font',
        'type': 'text',
        'placeholder': 'Comfortaa'
    }])
    Fun.addButton('METAL PIPE 🗣💯🔥🔥', metalPipe, true)

    

    const Experiments = new UISection('tests', '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"/></svg> &nbsp;Tests')
    Experiments.addButton('Self Destruct', selfDestroy)
    Experiments.addButton('Inject Script', injectScript, false, true)
    Experiments.addButton('Skip YT Ad', skipYTad, false, true)

    const Test = new UISection('uitests', 'ui stuff')
    Test.addButton('optionsTest', none, false, false, [550, {
        'name': 'checkbox',
        'type': 'checkbox',
        'checked': true
    }, {
        'name': 'radio',
        'type': 'radio',
        'values': ['1', '2', '3'],
        'checked': '1'
    }, {
        'name': 'text',
        'type': 'text',
        'placeholder': 'placeholder'
    }])
    Test.addButton('alwaysTest', none, true, false)
    Test.addButton('Normal Test', none, false, false)
    Test.addButton('reset test', none, false, true)
    Test.addButton('reset + always', none, true, true)

    const Feedback = new UISection('client', '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M329.2 268.6c-3.8 35.2-35.4 60.6-70.6 56.8-35.2-3.8-60.6-35.4-56.8-70.6 3.8-35.2 35.4-60.6 70.6-56.8 35.1 3.8 60.6 35.4 56.8 70.6zm-85.8 235.1C96.7 496-8.2 365.5 10.1 224.3c11.2-86.6 65.8-156.9 139.1-192 161-77.1 349.7 37.4 354.7 216.6 4.1 147-118.4 262.2-260.5 254.8zm179.9-180c27.9-118-160.5-205.9-237.2-234.2-57.5 56.3-69.1 188.6-33.8 344.4 68.8 15.8 169.1-26.4 271-110.2z"/></svg> &nbsp;Client')
    Feedback.addButton('Version: 0.5.0', none, false, true)
    Feedback.addSeparator()
    Feedback.addButton('Save to Site', saveSettingsToLocalStorage, false, true)
    const savenotification = new Notification('Saved to site!', 'Your current settings have been saved to the this website.')
    Feedback.addButton('Remove Save', removeSettingsFromLocalStorage, false, true)
    const removenotification = new Notification('Removed save!', 'Your current save have been deleted from the this website.')
    Feedback.addSeparator()
    Feedback.addButton('Bugs', openForm, true, true)
    Feedback.addButton('Suggestions', openForm, true, true)

    document.addEventListener('keydown', e => {
        if (e.keyCode == 220) {
            Main.style.display = disabled ? 'block' : 'none'
            Main.style.animation = disabled ? 'fade-in 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)' : 'none'
            MainContainer.style.display = disabled ? 'block' : 'none'
            disabled = !disabled
        }
    })

    loadSettingsFromLocalStorage()

}