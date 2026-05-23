// ==UserScript==
// @name        Gemini Keyboard Shortcuts
// @namespace   http://tampermonkey.net/
// @version     1.3.2
// @description This userscript enhances your Gemini experience by adding a wide range of keyboard shortcuts for streamlined navigation and interaction, as well as cleaning up Gemini's UI.
// @license     MIT
// @author      Henry Getz
// @match       https://gemini.google.com/*
// @icon        data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDI4QzE0IDI2LjA2MzMgMTMuNjI2NyAyNC4yNDMzIDEyLjg4IDIyLjU0QzEyLjE1NjcgMjAuODM2NyAxMS4xNjUgMTkuMzU1IDkuOTA1IDE4LjA5NUM4LjY0NSAxNi44MzUgNy4xNjMzMyAxNS44NDMzIDUuNDYgMTUuMTJDMy43NTY2NyAxNC4zNzMzIDEuOTM2NjcgMTQgMCAxNEMxLjkzNjY3IDE0IDMuNzU2NjcgMTMuNjM4MyA1LjQ2IDEyLjkxNUM3LjE2MzMzIDEyLjE2ODMgOC42NDUgMTEuMTY1IDkuOTA1IDkuOTA1QzExLjE2NSA4LjY0NSAxMi4xNTY3IDcuMTYzMzMgMTIuODggNS40NkMxMy42MjY3IDMuNzU2NjcgMTQgMS45MzY2NyAxNCAwQzE0IDEuOTM2NjcgMTQuMzYxNyAzLjc1NjY3IDE1LjA4NSA1LjQ2QzE1LjgzMTcgNy4xNjMzMyAxNi44MzUgOC42NDUgMTguMDk1IDkuOTA1QzE5LjM1NSAxMS4xNjUgMjAuODM2NyAxMi4xNjgzIDIyLjU0IDEyLjkxNUMyNC4yNDMzIDEzLjYzODMgMjYuMDYzMyAxNCAyOCAxNEMyNi4wNjMzIDE0IDI0LjI0MzMgMTQuMzczMyAyMi41NCAxNS4xMkMyMC44MzY3IDE1Ljg0MzMgMTkuMzU1IDE2LjgzNSAxOC4wOTUgMTguMDk1QzE2LjgzNSAxOS4zNTUgMTUuODMxNyAyMC44MzY3IDE1LjA4NSAyMi41NEMxNC4zNjE3IDI0LjI0MzMgMTQgMjYuMDYzMyAxNCAyOFoiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF8xNjc3MV81MzIxMikiLz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8xNjc3MV81MzIxMiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyLjc3ODc2IDExLjM3OTUpIHJvdGF0ZSgxOC42ODMyKSBzY2FsZSgyOS44MDI1IDIzOC43MzcpIj4KPHN0b3Agb2Zmc2V0PSIwLjA2NzEyNDYiIHN0b3AtY29sb3I9IiM5MTY4QzAiLz4KPHN0b3Agb2Zmc2V0PSIwLjM0MjU1MSIgc3RvcC1jb2xvcj0iIzU2ODREMSIvPgo8c3RvcCBvZmZzZXQ9IjAuNjcyMDc2IiBzdG9wLWNvbG9yPSIjMUJBMUUzIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==
// @supportURL  https://github.com/HenryGetz/GeminiPilot/issues
// @grant       none
// @run-at      document-start
// @downloadURL https://update.greasyfork.org/scripts/498823/Gemini%20Keyboard%20Shortcuts.user.js
// @updateURL https://update.greasyfork.org/scripts/498823/Gemini%20Keyboard%20Shortcuts.meta.js
// ==/UserScript==
/*

#New Feature: URL Parameters!

Empower your automation workflows!  Directly open Gemini with pre-populated prompts by using query parameters in the URL (e.g., `https://gemini.google.com/app?q=YOURTESTPROMPT`).


# Included Keyboard Shortcuts:


## Chat Management

|   Shortcut (Mac/Windows)   |     Action     |
|:--------------------------:|:--------------:|
| Alt+N         | Open new chat  |
| Alt + I       | Temporary chat |
| Alt + D       | Deep research  |
| ⌘/Ctrl + Shift + Backspace | Delete chat    |
| Alt+L        | 3.1 Flash-Lite (Toggles thinking if active) |
| Alt+F        | 3 Flash (Toggles thinking if active)        |
| Alt+T        | 3 Flash + Extended (Toggles thinking if active) |
| Alt+P        | 3.1 Pro (Toggles thinking if active)        |
| Alt+E        | Toggle Thinking (Standard <-> Extended)     |
| ⌥/Alt + 1-9    | Go to nth chat |
| ⌘/Ctrl + Shift + = | Next chat      |
| ⌘/Ctrl + Shift + –         | Previous chat  |


## Text Input and Editing

| Shortcut (Mac/Windows) |             Action            |
|:----------------------:|:-----------------------------:|
|      Shift + Esc       |        Focus chat input       |
|   ⌘/Ctrl + Shift + E   |           Edit text           |
|   ⌘/Ctrl + Shift + ;   |      Copy last code block     |
|   ⌘/Ctrl + Shift + '   |Copy second-to-last code block |
|   ⌘/Ctrl + Shift + C   |         Copy response         |
|   ⌘/Ctrl + Shift + K   |     Stop/start generation     |


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
|   ⌘/Ctrl + O       |       Open file       |
|       Alt + C       |       Canvas          |
|       Alt + X       |   Deselect Image      |



*/

//With this false, it will copy from the response in the viewport.

const assumeLastResponse = false;

//This setting allows you to delete chats in succession, like browser tabs, instead of beign forced to go to a new one. Perfect if doing Gemini housekeeping

const goToNextChatOnDelete = true;



const hasQuery = window.location.href.includes("?q=");
let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
let query = unescape(params.get('q'));
let manualScroll = false;


(function () {
    'use strict';
    blockAutoScroll();
    // Robust Initialization:
    // Even with document-idle, we check every 100ms to ensure document.body and document.head 
    // are fully available before running. This prevents "null" errors on cold loads.
    const waiter = setInterval(() => {
        if (document.body && document.head) {
            clearInterval(waiter);
            init();
        }
    }, 100);
})();


function blockAutoScroll() {
    console.log("[GKS] Comprehensive auto-scroll blocker initialized");

    const isChatElement = (el) => {
        if (!el || manualScroll) return false;
        // Check if it's the conversation container, or inside it, or the bottom container
        return el.closest('.conversation-container') ||
            el.closest('.bottom-container') ||
            el.classList.contains('conversation-container') ||
            el.tagName === 'HTML' || el.tagName === 'BODY'; // Sometimes window/body is scrolled
    };

    const patchMethod = (obj, method) => {
        const original = obj[method];
        if (!original) return;
        obj[method] = function () {
            const target = (obj === Window.prototype || obj === window) ? document.documentElement : this;

            if (isChatElement(target)) {
                // console.log(`[GKS] Blocked ${method} on:`, target);
                // console.trace();
                return;
            }
            // console.log(`[GKS] Allowed ${method} on:`, target);
            return original.apply(this, arguments);
        };
    };

    // Patch Element methods
    ['scrollIntoView', 'scrollTo', 'scrollBy', 'scroll'].forEach(m => patchMethod(Element.prototype, m));

    // Patch Window methods
    ['scrollTo', 'scrollBy', 'scroll'].forEach(m => patchMethod(window, m));

    // 2. Patch scrollTop and scrollLeft setters
    const patchProperty = (obj, prop) => {
        const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
        if (descriptor && descriptor.set) {
            const originalSet = descriptor.set;
            Object.defineProperty(obj, prop, {
                set: function (val) {
                    if (isChatElement(this)) {
                        // console.log(`[GKS] Blocked ${prop} setter on:`, this);
                        // console.trace();
                        return;
                    }
                    return originalSet.call(this, val);
                },
                get: descriptor.get,
                configurable: true
            });
        }
    };

    ['scrollTop', 'scrollLeft'].forEach(p => patchProperty(Element.prototype, p));
}

function init() {
    console.log("[GKS] Gemini Keyboard Shortcuts Script Loaded (v1.4.5)");
    onLoad();
}

function onLoad() {

    console.log("[GKS] onLoad function started");
    //This code makes the prompt take up the full width of the screen, and moves the heading
    let s = document.createElement("style");
    document.head.append(s);
    var b = `

    /* .conversation-container, .input-area-container, .bottom-container {
        max-width: -webkit-fill-available !important;
        overflow-anchor: none !important;
    } */

    .capabilities-disclaimer, #gbwa, .cdk-overlay-backdrop, .dynamic-upsell-label {
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

    /* bard-mode-switcher {
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
    } */

    .mat-mdc-focus-indicator::before {
        border: none !important;
    }


    * > .conversation-container:first-child {
        border-top: solid transparent 60px !important;
    }

    #gemini-prompt-queue-container {
        position: fixed;
        bottom: 26px;
        left: 26px;
        z-index: 2147483647 !important;
        background: var(--bard-color-surface-container, #1e1e1e) !important;
        border: 1px solid var(--bard-color-outline);
        border-radius: 12px;
        padding: 12px;
        width: 250px;
        box-shadow: 0 8px 16px rgba(0,0,0,0.4) !important;
        display: none;
        max-height: 80vh;
        overflow-y: auto;
        font-family: Google Sans, sans-serif;
    }
    #gemini-prompt-queue-container.visible {
        display: block;
    }
    .queue-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        font-weight: bold;
        color: var(--bard-color-on-surface);
    }
    .queue-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .queue-item {
        background: var(--bard-color-surface, #2d2d2d) !important;
        border: 1px solid var(--bard-color-outline-variant);
        border-radius: 8px;
        padding: 8px;
        margin-bottom: 4px;
        position: relative;
        font-size: 13px;
        color: var(--bard-color-on-surface-variant);
        word-break: break-word;
    }
    .queue-item-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 6px;
        gap: 6px;
    }
    .queue-btn {
        background: transparent;
        border: 1px solid var(--bard-color-outline);
        cursor: pointer !important;
        font-size: 11px;
        color: var(--bard-color-primary);
        padding: 2px 8px;
        border-radius: 4px;
    }
    .queue-btn.delete {
        color: #d93025;
        border-color: #d93025;
    }
    .clear-queue-btn {
        font-size: 11px;
        color: #d93025;
        background: transparent;
        border: none;
        cursor: pointer !important;
        text-decoration: underline;
    }
    .disabled-input {
        opacity: 0.6 !important;
        cursor: not-allowed !important;
        pointer-events: none !important;
    }

    `;
    s.textContent = b;

    const nums = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
    const rapidClickDelayMS = 100;
    const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);


    //This code makes sure that the 'more chats' feature is selected without user interaction (so that you can select chats 6-9 with alt as well.)

    //This code also allows for query parameters in the URL.

    let showMoreClicked = false;
    let inputBarClicked = false;
    const observer = new MutationObserver((_, observer) => {
        const showMore = document.querySelector('[data-test-id="show-more-button"]');
        const inputBar = document.querySelector('.text-input-field');
        const textInput = document.querySelector('[aria-label="Enter a prompt here"]');

        // Remove specific class and any element with the upsell text, including its parent container
        Array.from(document.querySelectorAll('*')).forEach(el => {
            if (el.textContent.includes('Upgrade to Google AI Ultra') && el.children.length === 0) {
                const container = el.closest('button, a, mat-list-item, .dynamic-upsell-container, [role="link"]');
                if (container) {
                    container.remove();
                } else {
                    el.remove();
                }
            }
        });
        document.querySelectorAll('.dynamic-upsell-label').forEach(el => {
            const container = el.closest('button, a, mat-list-item, .dynamic-upsell-container, [role="link"]');
            if (container) {
                container.remove();
            } else {
                el.remove();
            }
        });

        if (showMore && !showMoreClicked) {
            showMoreClicked = true;
            simulateClick(showMore);
        }
        if (hasQuery && inputBar && !inputBarClicked) {
            if (textInput && !inputBarClicked) {


                inputBarClicked = true;
                console.log(query);
                params.delete('q');
                window.history.pushState(null, "", url.origin + url.pathname);

                setTimeout(function () {
                    inputBar.click();

                    setTimeout(function () {
                        textInput.firstChild.remove();
                        query = query.split("\n");
                        for (let line of query) {
                            let p = document.createElement("p");
                            p.innerText = line;
                            textInput.append(p);
                        }

                        //This waits to also change the url when the drafts generate. Google is weird and changes it back
                        const observer = new MutationObserver((_, observer) => {
                            let showDrafts = document.querySelector('[data-test-id="generate-more-drafts-button"]');
                            if (showDrafts) {
                                observer.disconnect();

                                setTimeout(function () {
                                    url = new URL(window.location.href);
                                    params = new URLSearchParams(url.search);
                                    window.history.pushState(null, "", url.origin + url.pathname);
                                }, 2000)
                            }
                        });
                        observer.observe(document.body, { childList: true, subtree: true });

                        setTimeout(function () {
                            document.querySelector('[aria-label="Send message"]').click();
                        }, rapidClickDelayMS)
                    }, rapidClickDelayMS)
                }, rapidClickDelayMS)

            }
        } else if (inputBar && !inputBarClicked) {
            console.log(hasQuery)
            inputBarClicked = true;
            setTimeout(() => inputBar.click(), rapidClickDelayMS)
        }

        if (showMoreClicked && inputBarClicked) {
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

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
        } catch (err) {
            console.error('Failed to copy rich text: ', err);
        }

        selection.removeAllRanges();
        setTimeout(function () {
            document.querySelectorAll('.code-block-decoration.footer, .code-block-decoration.header').forEach(el => el.style.display = '');
        }, rapidClickDelayMS)

    }



    function clearNotifications() {
        for (let ele of document.querySelectorAll(".gemini-key-notification")) {
            ele.remove();
        }
    }

    function clearFileUploadPreviews() {
        console.log("[GKS] Clearing file upload previews...");
        const buttons = document.querySelectorAll('[data-test-id="cancel-button"]');
        buttons.forEach(btn => btn.click());
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
        div.style.cssText = `position: absolute;bottom: 26px;right: 26px;font-family: var(--mdc-snackbar-supporting-text-font);font-size: var(--mdc-snackbar-supporting-text-size);font-weight: var(--mdc-snackbar-supporting-text-weight);line-height: var(--mdc-snackbar-supporting-text-line-height);color: var(--mdc-snackbar-supporting-text-color);border-radius: var(--mdc-snackbar-container-shape);background-color: var(--mdc-snackbar-container-color);z-index: 2147483647;padding: 16px;line-height: 20px;transition-property: opacity, scale;transition-duration: ${tDuration}ms;transform-origin: center;scale: 0.6;opacity: 0;`;
        document.body.append(div);
        setTimeout(function () { div.style.opacity = 1; div.style.scale = 1; }, rapidClickDelayMS)
        setTimeout(function () {
            div.style.opacity = 0;
            setTimeout(function () { div.remove() }, tDuration)
        }, tLeft);
    }


    function simulateClick(element) {
        if (!element) return;
        if (typeof element.click === 'function') {
            try {
                element.click();
            } catch (e) {
                console.warn("[GKS] Native click failed, falling back to dispatchEvent", e);
            }
        }
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(event);
    }

    // Helper to place cursor at the end of a contenteditable element
    function placeCursorAtEnd(el) {
        el.focus();
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            const range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }

    const injectTextIntoEditor = (editor, text) => {
        if (!editor) return;
        // console.log("[GKS] Injecting text:", text.substring(0, 30));
        while (editor.firstChild) {
            editor.removeChild(editor.firstChild);
        }
        const lines = text.split('\n');
        lines.forEach(line => {
            const p = document.createElement('p');
            p.innerText = line;
            editor.appendChild(p);
        });

        // Dispatch multiple events to ensure Gemini's internal state updates
        editor.dispatchEvent(new Event('input', { bubbles: true }));
        editor.dispatchEvent(new Event('change', { bubbles: true }));
        editor.dispatchEvent(new Event('compositionend', { bubbles: true }));
        editor.dispatchEvent(new Event('blur', { bubbles: true }));
        editor.focus();
    };

    // Helper for switching modes
    function applyThinkingLevel(thinkingLevel, refocus = false) {
        const picker = document.querySelector('thinking-level-picker') ||
            document.querySelector('[data-test-id="thinking-level-picker-desktop"]') ||
            document.querySelector('gem-menu-item[value="thinking_level"]') ||
            Array.from(document.querySelectorAll('gem-menu-item')).find(item => item.textContent.includes('Thinking level'));
        if (!picker) {
            console.warn("[GKS] thinking-level-picker or thinking level menu item not found in the menu");
            document.body.click();
            return;
        }

        const currentSpan = picker.querySelector('.thinking-level-current') ||
            picker.querySelector('.sublabel');
        const currentVal = currentSpan ? currentSpan.textContent.trim().toLowerCase() : '';
        const targetVal = thinkingLevel.toLowerCase();

        if (currentVal === targetVal) {
            console.log(`[GKS] Thinking level is already ${thinkingLevel}`);
            document.body.click();
            if (refocus) {
                setTimeout(() => {
                    const editor = document.querySelector('.ql-editor');
                    if (editor) placeCursorAtEnd(editor);
                }, 100);
            }
            return;
        }

        const toggleBtn = picker.querySelector('[data-test-id="thinking-level-toggle"]') ||
            picker.querySelector('.thinking-level-header') ||
            picker; // Click the picker (menu item) itself if it is the trigger!
        if (toggleBtn) {
            const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
            if (!isExpanded) {
                toggleBtn.click();
            }

            setTimeout(() => {
                const options = document.querySelectorAll('gem-menu-item, button, [role="menuitem"]');
                let optionToClick = null;
                for (let opt of options) {
                    const text = opt.textContent.trim().toLowerCase();
                    if (text.includes(targetVal)) {
                        optionToClick = opt;
                        break;
                    }
                }

                if (optionToClick) {
                    console.log(`[GKS] Clicking thinking level option: ${thinkingLevel}`);
                    simulateClick(optionToClick);
                } else {
                    console.warn(`[GKS] Could not find option for thinking level: ${thinkingLevel}`);
                }

                setTimeout(() => {
                    document.body.click();
                    if (refocus) {
                        const editor = document.querySelector('.ql-editor');
                        if (editor) placeCursorAtEnd(editor);
                    }
                }, 100);
            }, 150);
        } else {
            console.warn("[GKS] Thinking level toggle button not found");
            document.body.click();
        }
    }

    function findModelButton(modelTestId) {
        if (!modelTestId) return null;

        // 1. Try direct selector
        let btn = document.querySelector(`[data-test-id="${modelTestId}"]`);
        if (btn) return btn;

        // 2. Try alias lookup for redesigned HEX ids
        const aliasMap = {
            'bard-mode-option-3.1flash-lite': ['bard-mode-option-8c46e95b1a07cecc', '3.1 Flash-Lite'],
            'bard-mode-option-3flash': ['bard-mode-option-56fdd199312815e2', '3.5 Flash', '3 Flash', 'Flash'],
            'bard-mode-option-3.1pro': ['bard-mode-option-e6fa609c3fa255c0', '3.1 Pro']
        };

        const aliases = aliasMap[modelTestId];
        if (aliases) {
            for (let alias of aliases) {
                if (alias.startsWith('bard-mode-option-')) {
                    btn = document.querySelector(`[data-test-id="${alias}"]`);
                    if (btn) return btn;
                } else {
                    const items = document.querySelectorAll('gem-menu-item, [role="menuitem"]');
                    for (let item of items) {
                        if (item.textContent.includes(alias)) {
                            return item;
                        }
                    }
                }
            }
        }

        // 3. Fallback: general text search
        const cleanName = modelTestId.replace('bard-mode-option-', '').replace('-', ' ');
        const items = document.querySelectorAll('gem-menu-item, [role="menuitem"]');
        for (let item of items) {
            if (item.textContent.toLowerCase().includes(cleanName.toLowerCase())) {
                return item;
            }
        }

        return null;
    }

    function selectModelAndThinking(modelTestId, thinkingLevel, refocus = false) {
        const trigger = document.querySelector('[data-test-id="bard-mode-menu-button"]') ||
            document.querySelector('.input-area-switch') ||
            document.querySelector('bard-mode-switcher button') ||
            document.querySelector('[data-test-id="model-switcher-trigger"]');
        if (!trigger) {
            console.error("[GKS] Trigger button not found!");
            return;
        }

        const performSelection = () => {
            const modelBtn = findModelButton(modelTestId);

            const isModelAlreadySelected = modelBtn && (
                modelBtn.classList.contains('selected') ||
                modelBtn.classList.contains('is-selected') ||
                modelBtn.getAttribute('aria-current') === 'true' ||
                !!modelBtn.querySelector('.selected')
            );

            if (modelTestId && !isModelAlreadySelected) {
                if (modelBtn) {
                    console.log(`[GKS] Clicking model button: ${modelTestId}`);
                    modelBtn.click();

                    if (thinkingLevel) {
                        setTimeout(() => {
                            const newTrigger = document.querySelector('[data-test-id="bard-mode-menu-button"]') ||
                                document.querySelector('.input-area-switch') ||
                                document.querySelector('bard-mode-switcher button') ||
                                document.querySelector('[data-test-id="model-switcher-trigger"]');
                            if (newTrigger) {
                                console.log("[GKS] Re-opening menu to configure thinking level...");
                                newTrigger.click();
                            }
                            setTimeout(() => {
                                applyThinkingLevel(thinkingLevel, refocus);
                            }, 250);
                        }, 500);
                    } else {
                        if (refocus) {
                            setTimeout(() => {
                                const editor = document.querySelector('.ql-editor');
                                if (editor) placeCursorAtEnd(editor);
                            }, 100);
                        }
                    }
                } else {
                    console.error(`[GKS] Model button ${modelTestId} not found in DOM`);
                    document.body.click();
                }
            } else {
                if (thinkingLevel) {
                    console.log(`[GKS] Model ${modelTestId} is already selected. Setting thinking level directly: ${thinkingLevel}`);
                    applyThinkingLevel(thinkingLevel, refocus);
                } else {
                    console.log(`[GKS] Model ${modelTestId} is already selected. Toggling thinking level...`);
                    document.body.click(); // Close current switcher overlay first
                    setTimeout(() => {
                        toggleThinkingLevel(refocus);
                    }, 100);
                }
            }
        };

        const isMenuOpen = !!(
            document.querySelector('.gds-mode-switch-menu') ||
            document.querySelector('.cdk-overlay-pane [role="menu"]') ||
            document.querySelector('[data-test-id="gem-mode-menu"]') ||
            document.querySelector('[data-test-id="bard-mode-desktop-gem-menu"]')
        );
        if (isMenuOpen) {
            performSelection();
        } else {
            trigger.click();
            setTimeout(performSelection, 150);
        }
    }

    function switchMode(modeDataTestId, modeName, refocus = false) {
        selectModelAndThinking(modeDataTestId, null, refocus);
    }

    function toggleThinkingLevel(refocus = false) {
        const trigger = document.querySelector('[data-test-id="bard-mode-menu-button"]') ||
            document.querySelector('.input-area-switch') ||
            document.querySelector('bard-mode-switcher button') ||
            document.querySelector('[data-test-id="model-switcher-trigger"]');
        if (!trigger) {
            console.error("[GKS] Trigger button not found!");
            return;
        }

        const performToggle = () => {
            const picker = document.querySelector('thinking-level-picker') ||
                document.querySelector('[data-test-id="thinking-level-picker-desktop"]') ||
                document.querySelector('gem-menu-item[value="thinking_level"]') ||
                Array.from(document.querySelectorAll('gem-menu-item')).find(item => item.textContent.includes('Thinking level'));
            if (!picker) {
                console.warn("[GKS] thinking-level-picker not found in the menu");
                document.body.click();
                return;
            }

            const currentSpan = picker.querySelector('.thinking-level-current') ||
                picker.querySelector('.sublabel');
            const currentVal = currentSpan ? currentSpan.textContent.trim().toLowerCase() : '';

            // Toggle: if current is extended, target is Standard; else target is Extended
            const targetLevel = (currentVal === 'extended' || currentVal === 'extended thinking') ? 'Standard' : 'Extended';
            console.log(`[GKS] Toggling thinking level from ${currentVal} to ${targetLevel}`);

            const toggleBtn = picker.querySelector('[data-test-id="thinking-level-toggle"]') ||
                picker.querySelector('.thinking-level-header') ||
                picker;
            if (toggleBtn) {
                const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
                if (!isExpanded) {
                    toggleBtn.click();
                }

                setTimeout(() => {
                    const options = document.querySelectorAll('gem-menu-item, button, [role="menuitem"]');
                    let optionToClick = null;
                    const targetVal = targetLevel.toLowerCase();
                    for (let opt of options) {
                        const text = opt.textContent.trim().toLowerCase();
                        if (text.includes(targetVal)) {
                            optionToClick = opt;
                            break;
                        }
                    }

                    if (optionToClick) {
                        console.log(`[GKS] Clicking thinking level option: ${targetLevel}`);
                        simulateClick(optionToClick);
                    } else {
                        console.warn(`[GKS] Could not find option for thinking level: ${targetLevel}`);
                    }

                    setTimeout(() => {
                        document.body.click();
                        if (refocus) {
                            const editor = document.querySelector('.ql-editor');
                            if (editor) placeCursorAtEnd(editor);
                        }
                    }, 100);
                }, 150);
            } else {
                console.warn("[GKS] Thinking level toggle button not found");
                document.body.click();
            }
        };

        const isMenuOpen = !!(
            document.querySelector('.gds-mode-switch-menu') ||
            document.querySelector('.cdk-overlay-pane [role="menu"]') ||
            document.querySelector('[data-test-id="gem-mode-menu"]') ||
            document.querySelector('[data-test-id="bard-mode-desktop-gem-menu"]')
        );
        if (isMenuOpen) {
            performToggle();
        } else {
            trigger.click();
            setTimeout(performToggle, 150);
        }
    }

    function waitForElement(selectorOrFn, callback, maxTime = 2000, interval = 50) {
        const startTime = Date.now();
        const poller = setInterval(() => {
            const el = typeof selectorOrFn === 'function' ? selectorOrFn() : document.querySelector(selectorOrFn);
            if (el) {
                clearInterval(poller);
                callback(el);
            } else if (Date.now() - startTime > maxTime) {
                clearInterval(poller);
                console.warn("[GKS] Timeout waiting for element", selectorOrFn);
            }
        }, interval);
    }

    function ensurePlusMenuOpen(callback) {
        const plusButton = document.querySelector('button[aria-label="Upload & tools"]') || 
                           document.querySelector('button[aria-label="Upload &amp; tools"]') ||
                           Array.from(document.querySelectorAll('button')).find(btn => {
                               const label = btn.getAttribute('aria-label');
                               if (label && (
                                   (label.toLowerCase().includes('upload') && label.toLowerCase().includes('tools')) ||
                                   label.toLowerCase().includes('upload & tools') ||
                                   label.toLowerCase().includes('upload &amp; tools')
                               )) return true;

                               const icon = btn.querySelector('mat-icon');
                               if (icon && (icon.getAttribute('fonticon') === 'plus' || icon.getAttribute('data-mat-icon-name') === 'plus')) return true;

                               const iconEl = btn.querySelector('mat-icon, gem-icon, svg, i');
                               if (iconEl) {
                                   for (let i = 0; i < iconEl.attributes.length; i++) {
                                       const attr = iconEl.attributes[i];
                                       if (attr.value.toLowerCase().includes('plus')) return true;
                                   }
                               }
                               return false;
                           }) ||
                           Array.from(document.querySelectorAll('button[aria-haspopup="menu"]')).find(btn => btn.querySelector('gem-icon, mat-icon'));

        if (!plusButton) {
            console.warn("[GKS] Plus button (Upload & tools) not found.");
            return;
        }

        const isMenuOpen = plusButton.getAttribute('aria-expanded') === 'true';
        
        if (isMenuOpen) {
            callback();
        } else {
            plusButton.click();
            // Wait for menu options to be present in DOM
            waitForElement(() => {
                const container = document.querySelector('.cdk-overlay-container');
                if (!container) return null;
                return container.querySelector('[data-test-id="more-tools-button"]') ||
                       container.querySelector('[aria-label="More tools"]') ||
                       container.querySelector('.more-tools-button') ||
                       container.querySelector('[data-test-id="local-images-files-uploader-button"]') ||
                       container.querySelector('[data-test-id="uploader-images-files-button-advanced"]') ||
                       container.querySelector('[aria-label="Upload files. Documents, data, code files"]');
            }, () => {
                // Give Angular a brief moment to bind listeners and paint before proceeding
                setTimeout(callback, 100);
            });
        }
    }

    function ensureMoreToolsMenuOpen(callback) {
        ensurePlusMenuOpen(() => {
            const container = document.querySelector('.cdk-overlay-container');
            const moreToolsBtn = container ? (
                                     container.querySelector('[data-test-id="more-tools-button"]') ||
                                     container.querySelector('[aria-label="More tools"]') ||
                                     container.querySelector('.more-tools-button') ||
                                     Array.from(container.querySelectorAll('button')).find(btn => btn.textContent.includes('More tools'))
                                 ) : null;
            
            if (!moreToolsBtn) {
                console.warn("[GKS] 'More tools' button not found in plus menu.");
                return;
            }

            const isMoreToolsOpen = moreToolsBtn.getAttribute('aria-expanded') === 'true' ||
                                    (container && (
                                        !!container.querySelector('.toolbox-drawer-more-menu-card') ||
                                        !!container.querySelector('.toolbox-drawer-simplified-more-menu-card')
                                    ));

            if (isMoreToolsOpen) {
                callback();
            } else {
                moreToolsBtn.click();
                // Wait for More Tools menu items to be present in DOM
                waitForElement(() => {
                    const overlay = document.querySelector('.cdk-overlay-container');
                    if (!overlay) return null;
                    return Array.from(overlay.querySelectorAll('.toolbox-drawer-item-list-button, button, [role="menuitem"], [role="menuitemcheckbox"]')).find(el => {
                        const text = el.textContent.toLowerCase();
                        return text.includes('canvas') || text.includes('deep research') || text.includes('deep_research');
                    });
                }, () => {
                    // Give Angular a brief moment to bind listeners and paint before proceeding
                    setTimeout(callback, 100);
                });
            }
        });
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
                    setTimeout(function () {
                        waitOnGeneration = false;
                        simulateClick(draftButtons[draftIndex]);
                        //notify(`${capitalize(nums[draftIndex])} draft`)
                    }, rapidClickDelayMS * 2)
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
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
                    setTimeout(function () {
                        waitOnLoadingMore = false;
                        simulateClick(chatButtons[chatIndex]);
                        //notify(`${capitalize(nums[draftIndex])} draft`)
                        notify(`"${chatButtons[chatIndex].querySelector(".conversation-title").innerHTML.trim()}"`)
                    }, rapidClickDelayMS * 2)
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        } else {
            notify("Chats loading");
        }
    }

    const nextChat = () => changeChat(1);
    const previousChat = () => changeChat(-1);




    var isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

    // ============================================
    // === PROMPT QUEUE SYSTEM
    // ============================================

    let promptQueue = [];
    let isProcessingQueue = false;

    // Helper to generate IDs
    const generateId = () => Math.random().toString(36).substr(2, 9);

    // Map UI names to IDs
    const MODEL_MAP = {
        '3.1 Flash-Lite': 'bard-mode-option-3.1flash-lite',
        '3 Flash': 'bard-mode-option-3flash',
        '3.1 Pro': 'bard-mode-option-3.1pro'
    };

    function getCurrentModelName() {
        const labelContainer = document.querySelector('.input-area-switch-label span') ||
            document.querySelector('[data-test-id="logo-pill-label-container"] span') ||
            document.querySelector('.logo-pill-label-container span');
        if (labelContainer) {
            return labelContainer.innerText.trim();
        }
        return null;
    }

    const editQueueItem = function (index) {
        const currentItem = promptQueue[index];
        const currentText = currentItem.text;

        const newText = prompt("Edit prompt:", currentText);
        if (newText !== null) {
            console.log(`[GKS] Edited queue item at index: ${index}`);
            promptQueue[index].text = newText;
            renderQueueUI();
        }
    };

    const removeQueueItem = function (index) {
        const item = promptQueue[index];
        if (item) {
            item.isDeleted = true;
            item.deletedAt = Date.now();
            console.log(`[GKS] Soft deleted item: ${item.id}`);
            renderQueueUI();
        }
    };

    const readdItem = function (id) {
        const item = promptQueue.find(i => i.id === id);
        if (item) {
            item.isDeleted = false;
            item.deletedAt = null;
            renderQueueUI();
        }
    };

    // Cleanup interval for permanent removal (30s)
    setInterval(() => {
        const now = Date.now();
        const initialLength = promptQueue.length;
        promptQueue = promptQueue.filter(item => {
            if (item.isDeleted && item.deletedAt && (now - item.deletedAt > 30000)) {
                return false;
            }
            return true;
        });
        if (promptQueue.length !== initialLength) {
            renderQueueUI();
        }
    }, 2000);

    function renderQueueUI() {
        let container = document.getElementById('gemini-prompt-queue-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'gemini-prompt-queue-container';
            document.body.appendChild(container);
        }

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        if (promptQueue.length === 0) {
            container.classList.remove('visible');
            return;
        }

        container.classList.add('visible');

        // Header
        const header = document.createElement('div');
        header.className = 'queue-header';

        const headerSpan = document.createElement('span');
        headerSpan.textContent = `Queue (${promptQueue.length})`;
        header.appendChild(headerSpan);

        const clearBtn = document.createElement('button');
        clearBtn.className = 'clear-queue-btn';
        clearBtn.id = 'clear-queue-btn';
        clearBtn.textContent = 'Clear All';
        clearBtn.onclick = (e) => {
            console.log("[GKS] Clear All clicked (Soft Delete)");
            e.preventDefault();
            e.stopPropagation();
            const now = Date.now();
            promptQueue.forEach(item => {
                if (!item.isDeleted) {
                    item.isDeleted = true;
                    item.deletedAt = now;
                }
            });
            renderQueueUI();
        };
        header.appendChild(clearBtn);
        container.appendChild(header);

        // List
        const list = document.createElement('ul');
        list.className = 'queue-list';

        promptQueue.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'queue-item';
            if (item.isDeleted) {
                li.style.opacity = '0.6';
            }

            const modelSpan = document.createElement('span');
            modelSpan.textContent = `[${item.model || 'Unknown'}] `;
            modelSpan.style.fontSize = '10px';
            modelSpan.style.color = 'var(--bard-color-primary)';
            modelSpan.style.fontWeight = 'bold';

            const text = item.text;

            const textSpan = document.createElement('div');
            textSpan.textContent = text.length > 50 ? text.substring(0, 50) + '...' : text;
            textSpan.title = text;

            const contentDiv = document.createElement('div');
            if (item.isDeleted) {
                contentDiv.style.textDecoration = 'line-through';
            }
            contentDiv.appendChild(modelSpan);
            contentDiv.appendChild(textSpan);
            li.appendChild(contentDiv);

            const actions = document.createElement('div');
            actions.className = 'queue-item-actions';

            if (item.isDeleted) {
                const readdBtn = document.createElement('button');
                readdBtn.className = 'queue-btn';
                readdBtn.textContent = 'Re-add';
                readdBtn.onclick = (e) => {
                    console.log(`[GKS] Re-adding queue item: ${item.id}`);
                    e.preventDefault();
                    e.stopPropagation();
                    readdItem(item.id);
                };
                actions.appendChild(readdBtn);
            } else {
                const editBtn = document.createElement('button');
                editBtn.className = 'queue-btn';
                editBtn.textContent = 'Edit';
                editBtn.onclick = (e) => {
                    console.log(`[GKS] Edit button clicked for index: ${index}`);
                    e.preventDefault();
                    e.stopPropagation();
                    editQueueItem(index);
                };

                const delBtn = document.createElement('button');
                delBtn.className = 'queue-btn delete';
                delBtn.textContent = 'Remove';
                delBtn.onclick = (e) => {
                    console.log(`[GKS] Soft removing queue item at index: ${index}`);
                    e.preventDefault();
                    e.stopPropagation();
                    removeQueueItem(index);
                };

                actions.appendChild(editBtn);
                actions.appendChild(delBtn);
            }

            li.appendChild(actions);
            list.appendChild(li);
        });

        container.appendChild(list);
    }

    window.editQueueItem = function (index) {
        const currentItem = promptQueue[index];
        const currentText = typeof currentItem === 'string' ? currentItem : currentItem.text;

        const newText = prompt("Edit prompt:", currentText);
        if (newText !== null) {
            if (typeof currentItem === 'string') {
                promptQueue[index] = { text: newText, model: getCurrentModelName() || 'Unknown' };
            } else {
                promptQueue[index].text = newText;
            }
            renderQueueUI();
        }
    };

    window.removeQueueItem = function (index) {
        promptQueue.splice(index, 1);
        renderQueueUI();
    };

    function addToQueue(text) {
        if (!text || !text.trim()) return;

        const currentModel = getCurrentModelName() || "Unknown";
        promptQueue.push({
            id: generateId(),
            text: text.trim(),
            model: currentModel,
            isDeleted: false,
            deletedAt: null
        });

        renderQueueUI();
        notify(`Queued prompt (${currentModel})`);
    }

    function isGeminiBusy() {
        // Check for the "Stop response" button or icon
        const stopBtn = document.querySelector('button.stop') ||
            document.querySelector('button[aria-label="Stop response"]') ||
            document.querySelector('.stop-icon');
        return !!stopBtn;
    }

    function processNextQueueItem() {
        // Only process items that are NOT deleted
        const indexToProcess = promptQueue.findIndex(i => !i.isDeleted);
        if (indexToProcess === -1) return;

        isProcessingQueue = true;
        const item = promptQueue.splice(indexToProcess, 1)[0];

        const textToProcess = item.text;
        const requiredModel = item.model;

        renderQueueUI();

        console.log("[GKS] Auto-sending queued prompt: " + textToProcess.substring(0, 20) + "...");

        // Helper to perform the actual send with retry logic
        const performSend = () => {
            const editorContainer = document.querySelector('.ql-editor');
            if (!editorContainer) {
                console.error("[GKS] Input editor not found");
                promptQueue.unshift(item);
                renderQueueUI();
                isProcessingQueue = false;
                return;
            }

            // Check if there is text in the input box currently (draft)
            let currentDraft = "";
            if (editorContainer.innerText.trim() !== "" && editorContainer.innerText.trim() !== textToProcess) {
                currentDraft = editorContainer.innerText;
            }

            // 1. Fill Input
            editorContainer.focus();
            editorContainer.contentEditable = "false";
            editorContainer.classList.add('disabled-input');
            injectTextIntoEditor(editorContainer, textToProcess);

            let attempts = 0;
            const maxAttempts = 20; // 10 seconds total testing

            const trySubmit = () => {
                // If the input box is cleared, it means the site has accepted the prompt!
                // This is or sign of success.
                const currentText = editorContainer.innerText.trim();

                if (currentText === "" || isGeminiBusy()) {
                    console.log("[GKS] Prompt submitted successfully (detected via " + (currentText === "" ? "cleared input" : "Busy state") + ").");

                    // Restore draft if it existed
                    if (currentDraft) {
                        // Crucial: Wait until the input is DEFINITELY clear before putting the draft back
                        const restoreWithRetry = (retries) => {
                            if (editorContainer.innerText.trim() === "" || retries <= 0) {
                                injectTextIntoEditor(editorContainer, currentDraft);
                                editorContainer.contentEditable = "true";
                                editorContainer.classList.remove('disabled-input');
                                placeCursorAtEnd(editorContainer);
                                console.log("[GKS] Restored draft text and re-enabled input");
                            } else {
                                setTimeout(() => restoreWithRetry(retries - 1), 500);
                            }
                        };
                        setTimeout(() => restoreWithRetry(5), 1500);
                    } else {
                        // Re-enable immediately if no draft
                        editorContainer.contentEditable = "true";
                        editorContainer.classList.remove('disabled-input');
                        editorContainer.focus();
                    }

                    // Reset processing flag after a delay to prevent immediate re-trigger
                    setTimeout(() => { isProcessingQueue = false; }, 3000);
                    return;
                }

                if (attempts >= maxAttempts) {
                    console.warn("[GKS] Auto-submit timeout after 10s. Re-queuing.");
                    promptQueue.unshift(item);
                    renderQueueUI();
                    isProcessingQueue = false;
                    editorContainer.contentEditable = "true";
                    editorContainer.classList.remove('disabled-input');
                    placeCursorAtEnd(editorContainer);
                    return;
                }

                attempts++;
                // Repeatedly signal input change
                editorContainer.dispatchEvent(new Event('input', { bubbles: true }));

                const sendBtn = document.querySelector('button[aria-label="Send message"]') || document.querySelector('button.submit');

                if (sendBtn && !sendBtn.disabled && sendBtn.getAttribute('aria-disabled') !== 'true') {
                    console.log(`[GKS] Attempting submit (Attempt ${attempts})...`);
                    simulateClick(sendBtn);
                }

                // Retry every 500ms
                setTimeout(trySubmit, 500);
            };

            // Small delay to ensure the injection "soaks" into Gemini's state
            setTimeout(trySubmit, 300);
        };

        // Model Switching Logic
        const currentModel = getCurrentModelName();
        if (requiredModel && currentModel && requiredModel !== currentModel && MODEL_MAP[requiredModel]) {
            console.log(`[GKS] Switching model from ${currentModel} to ${requiredModel}`);
            switchMode(MODEL_MAP[requiredModel], requiredModel);

            // Wait longer for switch to complete before filling input
            setTimeout(() => {
                performSend();
            }, 2000); // Increased to 2s
        } else {
            performSend();
        }
    }

    // Auto-process poller
    setInterval(() => {
        // If queue has items, Gemini is NOT busy, and we aren't already working on it
        if (promptQueue.some(i => !i.isDeleted) && !isGeminiBusy() && !isProcessingQueue) {
            processNextQueueItem();
        }
    }, 1000);

    // ============================================


    // Capture Phase Listener for Enter Key to prevent "Stop" button trigger
    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter" && !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
            // Check if we are in the main input box
            const target = event.target;
            const isInput = target.classList.contains('ql-editor') ||
                target.getAttribute('contenteditable') === 'true' ||
                target.tagName === 'TEXTAREA';

            if (isInput && isGeminiBusy()) {
                console.log("[GKS] Gemini Busy - Capture Phase Intercepting Enter for Queue");
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation(); // Critical: Stop other listeners on the same element

                const text = target.innerText;
                if (text && text.trim()) {
                    addToQueue(text.trim());
                    // Use a slight timeout to clear to ensure no race conditions
                    setTimeout(() => { target.textContent = ""; }, 10);
                }
                return false;
            }
        }

        // Coordination Signal from AHK (Ctrl+Shift+Alt+C)
        // This is triggered by Alt+N in LaunchGemini.ahk2 to ensure file previews are cleared
        // before Gemini initiates its native "New Chat" process.
        if (event.ctrlKey && event.shiftKey && event.altKey && (event.key.toLowerCase() === 'c' || event.code === 'KeyC')) {
            console.log("[GKS] Coordination Signal (Ctrl+Shift+Alt+C) detected! Clearing previews...");
            clearFileUploadPreviews();
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        }

        // Handle Ctrl+Shift+O (Native Gemini New Chat shortcut, also sent by AHK)
        // We catch this to ensure previews are cleared even if the native shortcut is used.
        if (isCmdOrCtrl && event.shiftKey && (event.key.toLowerCase() === 'o' || event.code === 'KeyO')) {
            console.log("[GKS] Ctrl+Shift+O detected (New Chat). Ensuring previews are cleared...");
            clearFileUploadPreviews();
            // We let this event propagate so Gemini's native handler also runs
        }
    }, true); // TRUE = Use Capture Phase

    document.addEventListener('keydown', function (event) {
        if (event.altKey) {
            console.log(`[GKS-Debug] Alt + Key: "${event.key}" | Code: "${event.code}" | Target:`, event.target);
        }

        const isCmdOrCtrl = (isMac && event.metaKey) || (!isMac && event.ctrlKey);

        if (event.shiftKey && isCmdOrCtrl) {
            console.log("[GKS] Shortcut combination detected: " + event.key);
        }

        const target = event.target;
        const isInput = (target && target.classList && target.classList.contains('ql-editor')) ||
            (target && typeof target.getAttribute === 'function' && target.getAttribute('contenteditable') === 'true') ||
            (target && target.tagName === 'TEXTAREA') ||
            (target && target.tagName === 'INPUT');

        // 0. Escape -> Blur Focus
        if (event.key === 'Escape' && isInput && !event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
            console.log("[GKS] Escape pressed in input: Blurring focus");
            if (target.classList.contains('ql-editor')) {
                clearFileUploadPreviews();
            }
            event.target.blur();
            document.body.focus();
            event.preventDefault();
            return;
        }

        // Check for Command or Control key

        if (event.shiftKey && event.key === "Escape") {
            simulateClick(document.querySelector('.text-input-field'));
            event.preventDefault();
        }

        let keyNumber = parseInt(event.code.replace("Digit", ""));
        keyNumber = keyNumber === 0 ? 10 : keyNumber;

        if (event.altKey && !event.ctrlKey && keyNumber) {
            document.querySelectorAll('[data-test-id="conversation"]')[keyNumber - 1].click();
            chatIndex = Array.from(document.querySelectorAll('[data-test-id="conversation"]')).indexOf(document.querySelector('.selected[data-test-id="conversation"]'));
            notify(`"${document.querySelectorAll('[data-test-id="conversation"]')[chatIndex].querySelector(".conversation-title").innerHTML.trim()}"`)
            //notify(`${capitalize(nums[keyNumber-1])} conversation`)
            event.preventDefault();
        }

        if ((event.key === '/' || event.key === 'Insert') && !event.ctrlKey && !event.altKey && !event.metaKey && !event.shiftKey) {
            if (!isInput) {
                const editor = document.querySelector('.ql-editor');
                if (editor) {
                    event.preventDefault();
                    placeCursorAtEnd(editor);
                }
            }
        }


        if (event.key === "Escape") {
            const activeItems = promptQueue.filter(i => !i.isDeleted);
            if (activeItems.length > 0) {
                console.log("[GKS] Escape pressed - soft clearing queue");
                const now = Date.now();
                promptQueue.forEach(item => {
                    if (!item.isDeleted) {
                        item.isDeleted = true;
                        item.deletedAt = now;
                    }
                });
                renderQueueUI();
                notify("Queue cleared (30s to undo)");
            }
            // Let Escape pass through to Gemini to stop generation
        }

        if (event.key === "Escape" && document.activeElement?.getAttribute("aria-label")?.includes("Edit prompt")) {
            simulateClick(getLastElement('[aria-label*="Cancel"]'));
            event.preventDefault();
        }





        // NEW: Mode Switching Shortcuts (Alt + F/T/P) and Side Menu (Alt + M/Left/Right)
        if (event.altKey && !event.shiftKey && !event.ctrlKey && !event.metaKey) {
            const key = event.key.toLowerCase();

            // Side Menu Shortcuts
            if (key === 'm' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                const getInteractiveElement = (selector) => {
                    const elements = document.querySelectorAll(selector);
                    for (const rawEl of elements) {
                        if (!rawEl) continue;
                        
                        // Drill down to native button or link if it's a custom wrapper
                        let el = rawEl;
                        if (el.tagName !== 'BUTTON' && el.tagName !== 'A') {
                            el = rawEl.querySelector('button, a') || rawEl;
                        }
                        
                        // Bypass if disabled
                        if (el.disabled || el.getAttribute('aria-disabled') === 'true' || el.classList.contains('mat-mdc-button-disabled')) {
                            continue;
                        }
                        
                        // Bypass if hidden
                        const style = window.getComputedStyle(el);
                        if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) {
                            continue;
                        }
                        
                        return el;
                    }
                    return null;
                };

                const openBtn = getInteractiveElement('button[aria-label="Open sidebar"]') ||
                                getInteractiveElement('button[data-test-id="side-nav-sparkle-button"]') ||
                                getInteractiveElement('[aria-label="Open sidebar"]') ||
                                getInteractiveElement('[data-test-id="side-nav-sparkle-button"]:not(a)') ||
                                getInteractiveElement('[data-mat-icon-name="side_nav_expand"]')?.closest('button') ||
                                getInteractiveElement('[fonticon="side_nav_expand"]')?.closest('button') ||
                                getInteractiveElement('[data-test-id="side-nav-menu-button"]') ||
                                getInteractiveElement('button[aria-label="Main menu"]') ||
                                getInteractiveElement('[aria-label="Main menu"]');

                const closeBtn = getInteractiveElement('button[aria-label="Close sidebar"]') ||
                                 getInteractiveElement('button[aria-label="Collapse sidebar"]') ||
                                 getInteractiveElement('[aria-label="Close sidebar"]') ||
                                 getInteractiveElement('[aria-label="Collapse sidebar"]') ||
                                 getInteractiveElement('[data-mat-icon-name="side_nav_collapse"]')?.closest('button') ||
                                 getInteractiveElement('[fonticon="side_nav_collapse"]')?.closest('button') ||
                                 getInteractiveElement('.mat-drawer-backdrop') ||
                                 getInteractiveElement('[data-test-id="side-nav-menu-button"]') ||
                                 getInteractiveElement('button[aria-label="Main menu"]') ||
                                 getInteractiveElement('[aria-label="Main menu"]');

                if (!openBtn && !closeBtn) {
                    console.warn("[GKS] Side menu buttons not found.");
                    return;
                }

                const expandBtn = document.querySelector('button[data-test-id="side-nav-sparkle-button"]') ||
                                  document.querySelector('[data-test-id="side-nav-sparkle-button"]:not(a)');
                                  
                const hamburger = document.querySelector('button[aria-label="Main menu"]') || 
                                  document.querySelector('[aria-label="Main menu"]') ||
                                  document.querySelector('[data-test-id="side-nav-menu-button"]');

                // Detect if we are on a narrow/responsive viewport
                const isNarrowScreen = hamburger && (() => {
                    const style = window.getComputedStyle(hamburger);
                    return style.display !== 'none' && style.visibility !== 'hidden';
                })();

                let isExpanded = false;
                if (isNarrowScreen) {
                    const mainNav = document.querySelector('mat-drawer.mat-drawer-opened') || 
                                    document.querySelector('nav[aria-label="Side navigation"]') ||
                                    document.querySelector('.mat-drawer-opened');
                    
                    isExpanded = !!mainNav || 
                                 hamburger.getAttribute('aria-expanded') === 'true' ||
                                 hamburger.querySelector('button')?.getAttribute('aria-expanded') === 'true' ||
                                 !!document.querySelector('.mat-drawer-backdrop.mat-drawer-shown');
                } else {
                    isExpanded = expandBtn && window.getComputedStyle(expandBtn).display === 'none';
                }

                if (key === 'm') {
                    console.log("[GKS] Toggling Side Menu (Alt+M)");
                    if (isExpanded) {
                        if (closeBtn) closeBtn.click();
                    } else {
                        if (openBtn) openBtn.click();
                    }
                    event.preventDefault();
                    return;
                }

                if (event.key === 'ArrowRight') {
                    if (!isExpanded) {
                        console.log("[GKS] Opening Side Menu (Alt+Right)");
                        if (openBtn) openBtn.click();
                    } else {
                        console.log("[GKS] Side Menu already open (Alt+Right)");
                    }
                    event.preventDefault();
                    return;
                }

                if (event.key === 'ArrowLeft') {
                    if (isExpanded) {
                        console.log("[GKS] Closing Side Menu (Alt+Left)");
                        if (closeBtn) closeBtn.click();
                    } else {
                        console.log("[GKS] Side Menu already closed (Alt+Left)");
                    }
                    event.preventDefault();
                    return;
                }
            }

            if (key === 'l') {
                console.log("[GKS] Executing 3.1 Flash-Lite (Alt+L)");
                event.preventDefault();
                selectModelAndThinking('bard-mode-option-3.1flash-lite', null, true);
                return;
            }
            if (key === 'f') {
                console.log("[GKS] Executing 3 Flash (Alt+F)");
                event.preventDefault();
                selectModelAndThinking('bard-mode-option-3flash', 'Standard', true);
                return;
            }
            if (key === 't') {
                console.log("[GKS] Executing 3 Flash + Extended Thinking (Alt+T)");
                event.preventDefault();
                selectModelAndThinking('bard-mode-option-3flash', 'Extended', true);
                return;
            }
            if (key === 'p') {
                console.log("[GKS] Executing 3.1 Pro (Alt+P)");
                event.preventDefault();
                selectModelAndThinking('bard-mode-option-3.1pro', null, true);
                return;
            }
            if (key === 's') {
                console.log("[GKS] Executing Gemini Search (Alt+S)");
                const searchEvent = new KeyboardEvent('keydown', {
                    key: 'k',
                    code: 'KeyK',
                    ctrlKey: true,
                    shiftKey: true,
                    bubbles: true,
                    cancelable: true,
                });
                document.dispatchEvent(searchEvent);
                event.preventDefault();
                return;
            }
            if (key === 'e') {
                console.log("[GKS] Executing Toggle Thinking (Alt+E)");
                event.preventDefault();
                toggleThinkingLevel(true);
                return;
            }
            if (key === 'i') {
                console.log("[GKS] Executing Temporary Chat (Alt+I)");
                event.preventDefault();
                const tempChatBtn = document.querySelector('button[aria-label="Temporary chat"]') ||
                    document.querySelector('[data-test-id="temp-chat-button"] button') ||
                    document.querySelector('[data-test-id="temp-chat-button"]') ||
                    document.querySelector('.temp-chat-button button');
                if (tempChatBtn) {
                    simulateClick(tempChatBtn);
                } else {
                    console.warn("[GKS] Temporary chat button not found!");
                }
                return;
            }
            if (key === 'd') {
                console.log("[GKS] Executing Deep research (Alt+D)");
                event.preventDefault();
                ensureMoreToolsMenuOpen(() => {
                    const overlay = document.querySelector('.cdk-overlay-container');
                    const deepResearchBtn = overlay ? (
                        Array.from(overlay.querySelectorAll('.toolbox-drawer-item-list-button, button, [role="menuitem"], [role="menuitemcheckbox"]')).find(el => {
                            const text = el.textContent.toLowerCase();
                            if (text.includes('deep research') || text.includes('deep_research')) return true;
                            const icon = el.querySelector('mat-icon');
                            return icon && (icon.getAttribute('data-mat-icon-name') === 'deep_research' || icon.getAttribute('fonticon') === 'deep_research');
                        })
                    ) : null;
                    
                    if (deepResearchBtn) {
                        deepResearchBtn.click();
                    } else {
                        console.warn("[GKS] Deep research button not found in more tools menu");
                    }
                });
                return;
            }
            if (key === 'u') {
                console.log("[GKS] Executing Upload Files (Alt+U)");
                event.preventDefault();
                ensurePlusMenuOpen(() => {
                    const overlay = document.querySelector('.cdk-overlay-container');
                    const uploadBtn = overlay ? (
                        overlay.querySelector('[data-test-id="local-images-files-uploader-button"]') ||
                        overlay.querySelector('[data-test-id="uploader-images-files-button-advanced"]') ||
                        overlay.querySelector('[aria-label="Upload files. Documents, data, code files"]') ||
                        Array.from(overlay.querySelectorAll('button, [role="menuitem"]')).find(el => el.textContent.includes('Upload files'))
                    ) : null;
                    if (uploadBtn) {
                        uploadBtn.click();
                    } else {
                        console.warn("[GKS] Upload files button not found in plus menu");
                    }
                });
                return;
            }
            if (key === 'c') {
                console.log("[GKS] Executing Canvas (Alt+C)");
                event.preventDefault();
                ensureMoreToolsMenuOpen(() => {
                    const overlay = document.querySelector('.cdk-overlay-container');
                    const canvasBtn = overlay ? (
                        Array.from(overlay.querySelectorAll('.toolbox-drawer-item-list-button, button, [role="menuitem"], [role="menuitemcheckbox"]')).find(el => {
                            const text = el.textContent.toLowerCase();
                            if (text.includes('canvas')) return true;
                            const icon = el.querySelector('mat-icon');
                            return icon && (icon.getAttribute('data-mat-icon-name') === 'canvas' || icon.getAttribute('fonticon') === 'canvas');
                        })
                    ) : null;
                    
                    if (canvasBtn) {
                        canvasBtn.click();
                    } else {
                        console.warn("[GKS] Canvas button not found in more tools menu");
                    }
                });
                return;
            }
            if (key === 'x') {
                var deselectBtn = document.querySelector('.toolbox-drawer-item-deselect-button') ||
                    document.querySelector('button[aria-label="Deselect Image"]');
                if (deselectBtn) {
                    console.log("[GKS] Executing Deselect Image (Alt+X)");
                    event.preventDefault();
                    simulateClick(deselectBtn);
                }
                return;
            }
        }

        // SPLIT SCROLL LOGIC
        // 1. Home -> Scroll to TOP of first PROMPT
        if (event.key === 'Home' && !isInput && !event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
            const conversations = document.querySelectorAll('.conversation-container');
            const firstConversation = conversations[0];
            if (firstConversation) {
                console.log("[GKS] Scrolling to TOP of FIRST conversation/prompt");
                event.preventDefault();
                manualScroll = true;
                firstConversation.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => { manualScroll = false; }, 1000);
            }
            return;
        }

        // 2. Shift + End/ArrowDown OR Alt + End/ArrowDown OR Bare End (outside input) -> Scroll to TOP of last PROMPT (Conversation Container)
        if (((event.altKey || (!isInput && event.shiftKey)) && (event.key === 'End' || event.key === 'ArrowDown') && !event.ctrlKey && !event.metaKey) ||
            (event.key === 'End' && !isInput && !event.altKey && !event.shiftKey && !event.ctrlKey && !event.metaKey)) {
            const conversations = document.querySelectorAll('.conversation-container');
            const lastConversation = conversations[conversations.length - 1];
            if (lastConversation) {
                console.log("[GKS] Scrolling to TOP of last conversation/prompt");
                event.preventDefault();
                manualScroll = true;
                lastConversation.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => { manualScroll = false; }, 1000);
            }
            return;
        }


        // 4. PageUp / PageDown -> Navigate Prompts (Conversation Containers)
        if ((event.key === 'PageUp' || event.key === 'PageDown') && !isInput && !event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
            const conversations = document.querySelectorAll('.conversation-container');
            if (conversations.length === 0) {
                console.log("[GKS] PageNav: No containers found.");
                return;
            }

            // Determine Current Index based on what is at the top of the viewport
            let currentIndex = -1;
            // Threshold: How far down the screen can the top be before we consider it "not active yet"?
            // Using 150px to handle sticky headers or slight scroll offsets.
            const threshold = 150;

            // Find the *last* container whose top is <= threshold.
            // This is the container effectively occupying the top slot.
            for (let i = 0; i < conversations.length; i++) {
                const rect = conversations[i].getBoundingClientRect();
                if (rect.top <= threshold) {
                    currentIndex = i;
                } else {
                    // Optimized: Since containers are ordered, once we find one > threshold,
                    // all subsequent ones will definitely be > threshold (assuming normal layout).
                    break;
                }
            }

            // Debugging: Log context to help diagnose skips
            if (currentIndex >= 0 && currentIndex < conversations.length) {
                const rect = conversations[currentIndex].getBoundingClientRect();
                console.log(`[GKS] PageNav: Current Index ${currentIndex} (Top: ${rect.top.toFixed(1)}px)`);
            } else {
                console.log(`[GKS] PageNav: Current Index ${currentIndex} (No container <= ${threshold}px top)`);
            }

            let targetIndex = -1;
            if (event.key === 'PageDown') {
                targetIndex = currentIndex + 1;
            } else {
                targetIndex = currentIndex - 1;
            }

            if (targetIndex >= 0 && targetIndex < conversations.length) {
                const target = conversations[targetIndex];
                console.log(`[GKS] PageNav: Navigating to ${event.key} -> Index ${targetIndex}`);
                event.preventDefault();
                manualScroll = true;
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => { manualScroll = false; }, 1000);
            } else {
                console.log(`[GKS] PageNav: Target index ${targetIndex} out of bounds (0..${conversations.length - 1})`);
            }
            return;
        }

        if (!isCmdOrCtrl) return;

        if (isCmdOrCtrl && event.key === 'o' && !event.shiftKey) {
            event.preventDefault();
            ensurePlusMenuOpen(() => {
                const uploadBtn = document.querySelector('[data-test-id="local-images-files-uploader-button"]') ||
                                  document.querySelector('[data-test-id="uploader-images-files-button-advanced"]') ||
                                  document.querySelector('[aria-label="Upload files. Documents, data, code files"]') ||
                                  Array.from(document.querySelectorAll('button, [role="menuitem"]')).find(el => el.textContent.includes('Upload files'));
                if (uploadBtn) {
                    simulateClick(uploadBtn);
                } else {
                    console.warn("[GKS] Upload files button not found in plus menu");
                }
            });
        }


        //console.log("shift key: "+event.shiftKey);
        //console.log("key pressed: "+event.key.toLowerCase());
        switch (event.key.toLowerCase()) {
            case 'b':
                if (event.shiftKey) {
                    console.log("[GKS] Executing New Chat (Ctrl+Shift+B)");
                    clearFileUploadPreviews();
                    setTimeout(() => {
                        console.log("[GKS] Attempting to click 'New chat' button...");
                        var new_chat = document.querySelector('[data-test-id="new-chat-button"] a') ||
                            document.querySelector('[data-test-id="new-chat-button"] button') ||
                            document.querySelector('a[href="/app"][aria-label="New chat"]') ||
                            document.querySelector('button[aria-label="New chat"]') ||
                            document.querySelector('[data-test-id="new-chat-button"]');
                        if (new_chat) {
                            simulateClick(new_chat);
                        } else {
                            console.warn("[GKS] New chat button not found!");
                        }

                        const inputField = document.querySelector('.text-input-field');
                        if (inputField) {
                            simulateClick(inputField);
                        }
                    }, rapidClickDelayMS);
                    event.preventDefault();
                } else {
                    ensurePlusMenuOpen(() => {
                        const uploadBtn = document.querySelector('[data-test-id="local-images-files-uploader-button"]') ||
                                          document.querySelector('[data-test-id="uploader-images-files-button-advanced"]') ||
                                          document.querySelector('[aria-label="Upload files. Documents, data, code files"]') ||
                                          Array.from(document.querySelectorAll('button, [role="menuitem"]')).find(el => el.textContent.includes('Upload files'));
                        if (uploadBtn) {
                            simulateClick(uploadBtn);
                        } else {
                            console.warn("[GKS] Upload files button not found in plus menu");
                        }
                    });
                }
                break;
            //BELOW NEEDS MORE TIME
            case 'c':
                if (event.shiftKey) {
                    event.preventDefault();
                    getLastElement();
                    copyRichTextFromDiv(c.querySelector(".model-response-text"));
                    notify("Copied response")


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
            case 'f':
                if (event.shiftKey) {
                    console.log("[GKS] Executing 3 Flash (Ctrl+Shift+F)");
                    event.preventDefault();
                    selectModelAndThinking('bard-mode-option-3flash', 'Standard', true);
                }
                break;
            case 'p':
                if (event.shiftKey) {
                    console.log("[GKS] Executing 3.1 Pro (Ctrl+Shift+P)");
                    event.preventDefault();
                    selectModelAndThinking('bard-mode-option-3.1pro', null, true);
                }
                break;


            case 'Backspace':
                if (event.shiftKey) {
                    event.preventDefault();
                    chatIndex = Array.from(document.querySelectorAll('[data-test-id="conversation"]')).indexOf(document.querySelector('.selected[data-test-id="conversation"]'));
                    document.querySelector('.conversation.selected').parentElement.querySelector('[data-test-id="actions-menu-button"]').click(); setTimeout(function () { document.body.querySelector('[data-test-id="delete-button"]').click() }, rapidClickDelayMS); setTimeout(function () { document.body.querySelector('[data-test-id="confirm-button"]').click(); setTimeout(function () { if (goToNextChatOnDelete) { simulateClick(document.querySelectorAll('[data-test-id="conversation"]')[chatIndex]) } }, rapidClickDelayMS) }, rapidClickDelayMS)
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
                    notify("Copied last code block to clipboard");
                }
                break;
            case '\'':
                if (event.shiftKey) {
                    event.preventDefault();
                    //                    simulateClick(getLastElement('[mattooltip="Copy code"]'));
                    getLastElement();
                    copyRichTextFromDiv(c.querySelectorAll("code-block")[c.querySelectorAll("code-block").length - 2]);
                    notify("Copied second-last code block to clipboard");
                }
                break;
            case 'm':
                if (event.shiftKey) {
                    simulateClick(getLastElement('[aria-label*="Share"]'));
                    setTimeout(function () { simulateClick(document.querySelector('[aria-label*="Share response"]')) }, rapidClickDelayMS)
                    setTimeout(function () { simulateClick(document.querySelector('[data-test-id="share-mode-radio-button-full"] label')) }, rapidClickDelayMS * 2)
                    setTimeout(function () { simulateClick(document.querySelector('[data-test-id="create-button"]')) }, rapidClickDelayMS * 3)

                    //below waits until the link menu loads, then copies it and closes the menu
                    const observer = new MutationObserver((_, observer) => {
                        const element = document.querySelector('[aria-label="Copy public link"]');
                        if (element) {
                            observer.disconnect();
                            simulateClick(element);
                            setTimeout(function () {
                                simulateClick(document.querySelector('[aria-label="Close"]'))
                                notify("Chat link copied");
                            }, rapidClickDelayMS)
                        }
                    });
                    observer.observe(document.body, { childList: true, subtree: true });


                    clearNotifications();
                    //notify("Last response copied to clipboard");
                    event.preventDefault();
                }
                break;
            case 'l':
                if (event.shiftKey) {
                    simulateClick(getLastElement('[aria-label*="Share"]'));
                    setTimeout(function () { simulateClick(document.querySelector('[aria-label*="Share response"]')) }, rapidClickDelayMS)
                    setTimeout(function () { simulateClick(document.querySelector('[data-test-id="create-button"]')) }, rapidClickDelayMS * 2)

                    //below waits until the link menu loads, then copies it and closes the menu
                    const observer = new MutationObserver((_, observer) => {
                        const element = document.querySelector('[aria-label="Copy public link"]');
                        if (element) {
                            observer.disconnect();
                            simulateClick(element);
                            setTimeout(function () {
                                simulateClick(document.querySelector('[aria-label="Close"]'));
                                notify("Prompt/response link copied");
                            }, rapidClickDelayMS)
                        }
                    });
                    observer.observe(document.body, { childList: true, subtree: true });
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
                if (event.shiftKey && !event.altKey) {
                    simulateClick(document.querySelector('[mattooltip="Use microphone"]'));
                    event.preventDefault();
                }
                break;
        }
    });
}
