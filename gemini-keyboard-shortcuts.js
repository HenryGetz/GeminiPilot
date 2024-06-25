// ==UserScript==
// @name        Gemini Keyboard Shortcuts
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description This userscript enhances your Gemini experience by adding a wide range of keyboard shortcuts for streamlined navigation and interaction, as well as cleaning up Gemini's UI.
// @license     MIT
// @author      Henry Getz
// @match       https://gemini.google.com/u/*
// @match       https://gemini.google.com/app
// @icon        data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDI4QzE0IDI2LjA2MzMgMTMuNjI2NyAyNC4yNDMzIDEyLjg4IDIyLjU0QzEyLjE1NjcgMjAuODM2NyAxMS4xNjUgMTkuMzU1IDkuOTA1IDE4LjA5NUM4LjY0NSAxNi44MzUgNy4xNjMzMyAxNS44NDMzIDUuNDYgMTUuMTJDMy43NTY2NyAxNC4zNzMzIDEuOTM2NjcgMTQgMCAxNEMxLjkzNjY3IDE0IDMuNzU2NjcgMTMuNjM4MyA1LjQ2IDEyLjkxNUM3LjE2MzMzIDEyLjE2ODMgOC42NDUgMTEuMTY1IDkuOTA1IDkuOTA1QzExLjE2NSA4LjY0NSAxMi4xNTY3IDcuMTYzMzMgMTIuODggNS40NkMxMy42MjY3IDMuNzU2NjcgMTQgMS45MzY2NyAxNCAwQzE0IDEuOTM2NjcgMTQuMzYxNyAzLjc1NjY3IDE1LjA4NSA1LjQ2QzE1LjgzMTcgNy4xNjMzMyAxNi44MzUgOC42NDUgMTguMDk1IDkuOTA1QzE5LjM1NSAxMS4xNjUgMjAuODM2NyAxMi4xNjgzIDIyLjU0IDEyLjkxNUMyNC4yNDMzIDEzLjYzODMgMjYuMDYzMyAxNCAyOCAxNEMyNi4wNjMzIDE0IDI0LjI0MzMgMTQuMzczMyAyMi41NCAxNS4xMkMyMC44MzY3IDE1Ljg0MzMgMTkuMzU1IDE2LjgzNSAxOC4wOTUgMTguMDk1QzE2LjgzNSAxOS4zNTUgMTUuODMxNyAyMC44MzY3IDE1LjA4NSAyMi41NEMxNC4zNjE3IDI0LjI0MzMgMTQgMjYuMDYzMyAxNCAyOFoiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF8xNjc3MV81MzIxMikiLz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8xNjc3MV81MzIxMiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyLjc3ODc2IDExLjM3OTUpIHJvdGF0ZSgxOC42ODMyKSBzY2FsZSgyOS44MDI1IDIzOC43MzcpIj4KPHN0b3Agb2Zmc2V0PSIwLjA2NzEyNDYiIHN0b3AtY29sb3I9IiM5MTY4QzAiLz4KPHN0b3Agb2Zmc2V0PSIwLjM0MjU1MSIgc3RvcC1jb2xvcj0iIzU2ODREMSIvPgo8c3RvcCBvZmZzZXQ9IjAuNjcyMDc2IiBzdG9wLWNvbG9yPSIjMUJBMUUzIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==
// @updateURL   https://raw.githubusercontent.com/HenryGetz/GeminiPilot/gemini-keyboard-shortcuts.js
// @downloadURL https://raw.githubusercontent.com/HenryGetz/GeminiPilot/gemini-keyboard-shortcuts.js
// @supportURL  https://github.com/HenryGetz/GeminiPilot/issues
// @grant       none
// ==/UserScript==
/*

# Included Keyboard Shortcuts:


## Chat Management

|   Shortcut (Mac/Windows)   |     Action     |
|:--------------------------:|:--------------:|
| ⌘/Ctrl + Shift + O         | Open new chat  |
| ⌘/Ctrl + Shift + Backspace | Delete chat    |
| ⌘/Ctrl + Shift + F         | Toggle sidebar |
| ⌥/Alt + 1-9                | Go to nth chat |
| ⌘/Ctrl + Shift + =         | Next chat      |
| ⌘/Ctrl + Shift + –         | Previous chat  |


## Text Input and Editing

| Shortcut (Mac/Windows) |         Action        |
|:----------------------:|:---------------------:|
|  ⌘/Ctrl + Shift + Esc  |    Focus chat input   |
|   ⌘/Ctrl + Shift + E   |       Edit text       |
|   ⌘/Ctrl + Shift + ;   |  Copy last code block |
|   ⌘/Ctrl + Shift + C   |   Copy last response  |
|   ⌘/Ctrl + Shift + K   | Stop/start generation |


## Draft Navigation

| Shortcut (Mac/Windows) |        Action        |
|:----------------------:|:--------------------:|
|   ⌘/Ctrl + Shift + D   | Generate more drafts |
|   ⌘/Ctrl + Shift + ,   |      Next draft      |
|   ⌘/Ctrl + Shift + .   |    Previous draft    |


## Sharing and Linking

| Shortcut (Mac/Windows) |           Action          |
|:----------------------:|:-------------------------:|
|   ⌘/Ctrl + Shift + L   | Copy prompt/response link |
|   ⌘/Ctrl + Shift + M   |       Copy chat link      |


## Audio and File Shortcuts

| Shortcut (Mac/Windows) |         Action        |
|:----------------------:|:---------------------:|
|   ⌘/Ctrl + Shift + K   | Stop/start generation |
|   ⌘/Ctrl + Shift + Y   |    Play/pause audio   |
|   ⌘/Ctrl + Shift + S   |     Voice to text     |
|       ⌘/Ctrl + O       |       Open file       |



*/

(function() {
    'use strict';

    let s = document.createElement("style");
    document.head.append(s);
    s.textContent = `

.conversation-container, .input-area-container, .bottom-container {
    max-width: -webkit-fill-available !important;
}

.capabilities-disclaimer, #gbwa, .cdk-overlay-backdrop {
    display: none !important;
}

.code-block-decoration.footer, .code-block-decoration.header {
    user-select: none; /* Standard syntax */
    -webkit-user-select: none; /* WebKit (Safari, Chrome) browsers */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */

}

.bottom-container {
    padding-bottom: 20px;
}

bard-mode-switcher {
    position: fixed;
    top: 0px;
    right: 64px;
    z-index: 1000;
    background: var(--bard-color-surface-container);
    border: solid var(--bard-color-surface-container) 4px;
    border-right: solid var(--bard-color-surface-container) 100px;
    transform: translate(100px, -4px);
    border-radius: 100px;
    box-shadow: 0 0 20px 12px rgba(var(--bard-color-main-container-background-rgb), 77%)
}

.mat-mdc-focus-indicator::before {
    border: none !important;
}

`;

    //The above code makes the prompt take up the full width of the screen.

    const observer = new MutationObserver((_, observer) => {
        const element = document.querySelector('[data-test-id="show-more-button"]');
        if (element) {
            observer.disconnect();
            simulateClick(element);
        }
    });
    observer.observe(document.body, {childList: true, subtree: true});

    //This code makes sure that the 'more chats' feature is selected without user interaction (so that you can select chats 6-9 with alt as well.)


    const assumeLastResponse = false;
    const goToNextChatOnDelete = true;

    window.onload = () => setTimeout(() => document.querySelector('.text-input-field').click(), 500);
    const nums = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
    const rapidClickDelayMS = 100;
    const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);



    let c = null;
    function getLastElement(querySelector) {
        const containers = document.querySelectorAll('.conversation-container');
        c = containers[containers.length - 1];
        if (!assumeLastResponse) {
            let mostVisibleElement = null;
            let maxVisibleArea = 0;

            containers.forEach(container => {
                const rect = container.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // Calculate visible area (only consider area within the viewport)
                const visibleArea = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));

                if (visibleArea > maxVisibleArea && visibleArea !== 0) {
                    maxVisibleArea = visibleArea;
                    mostVisibleElement = container;
                }
            });
            c = mostVisibleElement;
        }
        return c.querySelectorAll(querySelector)[c.querySelectorAll(querySelector).length - 1];
    }

    function copy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    function copyRichTextFromDiv(element) {
        const div = element;

        if (!div) {
            console.error("Div not found.");
            return;
        }

        document.querySelectorAll('.code-block-decoration.footer, .code-block-decoration.header, .table-footer').forEach(el => el.style.display = 'none');

        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(div);
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                console.log('Rich text copied!');
            } else {
                console.error('Failed to copy rich text: execCommand failed');
            }
        } catch (err) {
            console.error('Failed to copy rich text: ', err);
        }

        selection.removeAllRanges();
        document.querySelectorAll('.code-block-decoration.footer, .code-block-decoration.header').forEach(el => el.style.display = '');

    }



    function clearNotifications() {
        for (let ele of document.querySelectorAll(".gemini-key-notification")) {
            ele.remove();
        }
    }

    function notify(text) {
        clearNotifications();
        for (let ele of document.querySelectorAll(".gmat-mdc-dialog")) {
            ele.remove();
        }

        var div = document.createElement('div');
        div.classList.add("gemini-key-notification");
        div.innerText = text;
        let tDuration = 125;
        let nDuration = 3000;
        let tLeft = nDuration - tDuration;
        div.style.cssText = `position: absolute;bottom: 26px;left: 26px;font-family: var(--mdc-snackbar-supporting-text-font);font-size: var(--mdc-snackbar-supporting-text-size);font-weight: var(--mdc-snackbar-supporting-text-weight);line-height: var(--mdc-snackbar-supporting-text-line-height);color: var(--mdc-snackbar-supporting-text-color);border-radius: var(--mdc-snackbar-container-shape);background-color: var(--mdc-snackbar-container-color);z-index: 2147483647;padding: 16px;line-height: 20px;transition-property: opacity, scale;transition-duration: ${tDuration}ms;transform-origin: center;scale: 0.6;opacity: 0;`;
        document.body.append(div);
        setTimeout(function(){div.style.opacity = 1; div.style.scale = 1;}, rapidClickDelayMS)
        setTimeout(function(){
            div.style.opacity = 0;
            setTimeout(function(){div.remove()}, tDuration)
        }, tLeft);
    }


    function simulateClick(element) {
        element.click();
    }

    let draftIndex = 0;
    let googleDraftCount = 3;
    let waitOnGeneration = false;

    function changeDraft(direction) {
        let draftButtons = document.querySelectorAll(".draft-preview-button");
        if (!waitOnGeneration) {
            draftIndex = (draftIndex + direction + googleDraftCount) % googleDraftCount; // Ensure index stays within 0-2
        }

        if (!waitOnGeneration && draftButtons[draftIndex]) {
            simulateClick(draftButtons[draftIndex]);
            //notify(`${capitalize(nums[draftIndex])} draft`)
        } else if (!waitOnGeneration) {
            draftIndex = 0;
            draftIndex = (draftIndex + direction + googleDraftCount) % googleDraftCount;
            simulateClick(getLastElement('[data-test-id="generate-more-drafts-button"]'));
            notify(`Generating ${nums[draftIndex]} draft`)
            waitOnGeneration = true;

            const observer = new MutationObserver((_, observer) => {
                draftButtons = document.querySelectorAll(".draft-preview-button");
                if (draftButtons[draftIndex]) {
                    observer.disconnect();
                    setTimeout(function(){
                        waitOnGeneration = false;
                        simulateClick(draftButtons[draftIndex]);
                        //notify(`${capitalize(nums[draftIndex])} draft`)
                    },rapidClickDelayMS * 2)
                }
            });
            observer.observe(document.body, {childList: true, subtree: true});
        } else {
            notify("Waiting on generation");
        }
    }

    const nextDraft = () => changeDraft(1);
    const previousDraft = () => changeDraft(-1);

    let chatIndex = 0;
    let waitOnLoadingMore = false;

    function changeChat(direction) {
        chatIndex = Array.from(document.querySelectorAll('[data-test-id="conversation"]')).indexOf(document.querySelector('.selected[data-test-id="conversation"]'));
        let chatButtons = document.querySelectorAll('[data-test-id="conversation"]');

        if (!waitOnLoadingMore) {
            chatIndex = Math.max(0, chatIndex + direction);
        }

        if (!waitOnLoadingMore && chatButtons[chatIndex]) {
            simulateClick(chatButtons[chatIndex]);
            notify(`"${chatButtons[chatIndex].querySelector(".conversation-title").innerHTML.trim()}"`)
        } else if (!waitOnLoadingMore) {
            simulateClick(document.querySelector('[data-test-id="load-more-button"]'));
            notify(`Loading chats`)
            waitOnLoadingMore = true;

            const observer = new MutationObserver((_, observer) => {
                chatButtons = document.querySelectorAll('[data-test-id="conversation"]');
                if (chatButtons[chatIndex]) {
                    observer.disconnect();
                    setTimeout(function(){
                        waitOnLoadingMore = false;
                        simulateClick(chatButtons[chatIndex]);
                        //notify(`${capitalize(nums[draftIndex])} draft`)
                        notify(`"${chatButtons[chatIndex].querySelector(".conversation-title").innerHTML.trim()}"`)
                    },rapidClickDelayMS * 2)
                }
            });
            observer.observe(document.body, {childList: true, subtree: true});
        } else {
            notify("Chats loading");
        }
    }

    const nextChat = () => changeChat(1);
    const previousChat = () => changeChat(-1);



    var isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

    document.addEventListener('keydown', function(event) {
        // Check for Command or Control key

        if (event.shiftKey && event.key === "Escape") {
            simulateClick(document.querySelector('.text-input-field'));
            event.preventDefault();
        }

        let keyNumber = parseInt(event.code.replace("Digit",""));
        keyNumber = keyNumber === 0 ? 10 : keyNumber;

        if (event.altKey && keyNumber) {
            document.querySelectorAll('[data-test-id="conversation"]')[keyNumber - 1].click();
            chatIndex = Array.from(document.querySelectorAll('[data-test-id="conversation"]')).indexOf(document.querySelector('.selected[data-test-id="conversation"]'));
            notify(`"${document.querySelectorAll('[data-test-id="conversation"]')[chatIndex].querySelector(".conversation-title").innerHTML.trim()}"`)
            //notify(`${capitalize(nums[keyNumber-1])} conversation`)
            event.preventDefault();
        }


        if (event.key === "Escape" && document.activeElement.getAttribute("aria-label").includes("Edit prompt")) {
            simulateClick(getLastElement('[aria-label*="Cancel"]'));
            event.preventDefault();
        }

        const isCmdOrCtrl = (isMac && event.metaKey) || (!isMac && event.ctrlKey);

        if (!isCmdOrCtrl) return;

        if (isCmdOrCtrl && event.key === 'o' && !event.shiftKey) {
            event.preventDefault();
            simulateClick(document.querySelector('.upload-button button'));
            simulateClick(document.querySelector('[aria-label*="Upload files"]'))
        }

        switch (event.key) {
            case 'o':
                if (event.shiftKey) {
                    simulateClick(document.querySelector('[aria-label*="New chat"] button'));
                    simulateClick(document.querySelector('.text-input-field'));
                    //notify("New chat created");
                    event.preventDefault();
                } else {
                    document.querySelector('[aria-label*="upload file"]').click(); setTimeout(function(){document.body.querySelector('[aria-label*="Upload files"]').click()}, rapidClickDelayMS);
                }
                break;
                //BELOW NEEDS MORE TIME
            case 'c':
                if (event.shiftKey) {
                    event.preventDefault();
                    getLastElement();
                    copyRichTextFromDiv(c.querySelector(".model-response-text"));
                    notify("Copied last response")


                    /* All of the below code was me desperately trying to do it through Google's menus, and failing for 2+ hours. Good riddance

                    simulateClick(getLastElement('[aria-label*="options"]'));
                    setTimeout(function(){simulateClick(document.querySelector('[aria-label*="Copy"]'))},rapidClickDelayMS*2)
                    simulateClick(getLastElement('[aria-label*="options"]'));
                    simulateClick(document.querySelector('#overflow-container'))
                    setTimeout(function(){document.querySelector('.cdk-overlay-pane').style.top = "99999999px"; c.focus()},rapidClickDelayMS)
                    clearNotifications();
*/
                }
                break;
            case 'i':
                if (event.shiftKey) {
                    // Implement custom instructions if Gemini supports them
                    event.preventDefault();
                }
                break;
            case 'f':
                if (event.shiftKey) {
                    simulateClick(document.querySelector('[aria-label*="Main menu"]'));
                    event.preventDefault();
                }
                break;
            case 'Backspace':
                if (event.shiftKey) {
                    event.preventDefault();
                    chatIndex = Array.from(document.querySelectorAll('[data-test-id="conversation"]')).indexOf(document.querySelector('.selected[data-test-id="conversation"]'));
                    document.querySelector('.conversation.selected').parentElement.querySelector('[data-test-id="actions-menu-button"]').click(); setTimeout(function(){document.body.querySelector('[data-test-id="delete-button"]').click()}, rapidClickDelayMS); setTimeout(function(){document.body.querySelector('[data-test-id="confirm-button"]').click(); setTimeout(function(){if(goToNextChatOnDelete){simulateClick(document.querySelectorAll('[data-test-id="conversation"]')[chatIndex])}}, rapidClickDelayMS)}, rapidClickDelayMS)
                }
                break;
            case 'd':
                if (event.shiftKey) {
                    let element = getLastElement('[data-test-id="generate-more-drafts-button"]');
                    if (!element) {
                        element = getLastElement('[mattooltip="Regenerate drafts"]');
                    }
                    simulateClick(element);
                    event.preventDefault();
                }
                break;
            case 'e':
                if (event.shiftKey) {
                    simulateClick(getLastElement('[mattooltip="Edit text"]'));
                    event.preventDefault();
                }
                break;
            case ';':
                if (event.shiftKey) {
                    event.preventDefault();
                    //                    simulateClick(getLastElement('[mattooltip="Copy code"]'));
                    getLastElement();
                    copyRichTextFromDiv(c.querySelectorAll("code-block")[c.querySelectorAll("code-block").length - 1]);
                    notify("Copied code to clipboard");
                }
                break;
            case 'm':
                if (event.shiftKey) {
                    simulateClick(getLastElement('[aria-label*="Share"]'));
                    setTimeout(function(){simulateClick(document.querySelector('[aria-label*="Share response"]'))},rapidClickDelayMS)
                    setTimeout(function(){simulateClick(document.querySelector('[data-test-id="share-mode-radio-button-full"] label'))},rapidClickDelayMS*2)
                    setTimeout(function(){simulateClick(document.querySelector('[data-test-id="create-button"]'))},rapidClickDelayMS*3)

                    //below waits until the link menu loads, then copies it and closes the menu
                    const observer = new MutationObserver((_, observer) => {
                        const element = document.querySelector('[aria-label="Copy public link"]');
                        if (element) {
                            observer.disconnect();
                            simulateClick(element);
                            setTimeout(function(){
                                simulateClick(document.querySelector('[aria-label="Close"]'))
                                notify("Chat link copied");
                            },rapidClickDelayMS)
                        }
                    });
                    observer.observe(document.body, {childList: true, subtree: true});


                    clearNotifications();
                    //notify("Last response copied to clipboard");
                    event.preventDefault();
                }
                break;
            case 'l':
                if (event.shiftKey) {
                    simulateClick(getLastElement('[aria-label*="Share"]'));
                    setTimeout(function(){simulateClick(document.querySelector('[aria-label*="Share response"]'))},rapidClickDelayMS)
                    setTimeout(function(){simulateClick(document.querySelector('[data-test-id="create-button"]'))},rapidClickDelayMS*2)

                    //below waits until the link menu loads, then copies it and closes the menu
                    const observer = new MutationObserver((_, observer) => {
                        const element = document.querySelector('[aria-label="Copy public link"]');
                        if (element) {
                            observer.disconnect();
                            simulateClick(element);
                            setTimeout(function(){
                                simulateClick(document.querySelector('[aria-label="Close"]'));
                                notify("Prompt/response link copied");
                            },rapidClickDelayMS)
                        }
                    });
                    observer.observe(document.body, {childList: true, subtree: true});
                    //notify("Last response copied to clipboard");
                    event.preventDefault();
                }
                break;
            case ',':
                if (event.shiftKey) {
                    previousDraft();
                }
                break;
            case '.':
                if (event.shiftKey) {
                    nextDraft();
                }
                break;
            case '-':
                if (event.shiftKey) {
                    event.preventDefault();
                    previousChat();
                }
                break;
            case '=':
                if (event.shiftKey) {
                    event.preventDefault();
                    nextChat();
                }
                break;
            case 'k':
                event.preventDefault();
                if (event.shiftKey) {
                    simulateClick(document.querySelector('[aria-label="Send message"]'));
                    //notify("Last response copied to clipboard");
                }
                break;
            case 'y':
                if (event.shiftKey) {
                    simulateClick(getLastElement('.response-tts-container button'));
                    event.preventDefault();
                }
                break;
            case 's':
                if (event.shiftKey) {
                    simulateClick(document.querySelector('[mattooltip="Use microphone"]'));
                    event.preventDefault();
                }
                break;
        }
    });
})();
