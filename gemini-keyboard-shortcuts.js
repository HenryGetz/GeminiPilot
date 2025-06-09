// ==UserScript==
// @name         Gemini Keyboard Shortcuts
// @namespace    http://tampermonkey.net/
// @version      1.2.5
// @description  This userscript enhances your Gemini experience by adding a wide range of keyboard shortcuts for streamlined navigation and interaction, as well as cleaning up Gemini's UI.
// @license      MIT
// @author       Henry Getz
// @match        https://gemini.google.com/u/*
// @match        https://gemini.google.com/app*
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDI4QzE0IDI2LjA2MzMgMTMuNjI2NyAyNC4yNDMzIDEyLjg4IDIyLjU0QzEyLjE1NjcgMjAuODM2NyAxMS4xNjUgMTkuMzU1IDkuOTA1IDE4LjA5NUM4LjY0NSAxNi44MzUgNy4xNjMzMyAxNS44NDMzIDUuNDYgMTUuMTJDMy43NTY2NyAxNC4zNzMzIDEuOTM2NjcgMTQgMCAxNEMxLjkzNjY3IDE0IDMuNzU2NjcgMTMuNjM4MyA1LjQ2IDEyLjkxNUM3LjE2MzMzIDEyLjE2ODMgOC42NDUgMTEuMTY1IDkuOTA1IDkuOTA1QzExLjE2NSA4LjY0NSAxMi4xNTY3IDcuMTYzMzMgMTIuODggNS40NkMxMy42MjY3IDMuNzU2NjcgMTQgMS45MzY2NyAxNCAwQzE0IDEuOTM2NjcgMTQuMzYxNyAzLjc1NjY3IDE1LjA4NSA1LjQ2QzE1LjgzMTcgNy4xNjMzMyAxNi44MzUgOC42NDUgMTguMDk1IDkuOTA1QzE5LjM1NSAxMS4xNjUgMjAuODM2NyAxMi4xNjgzIDIyLjU0IDEyLjkxNUMyNC4yNDMzIDEzLjYzODMgMjYuMDYzMyAxNCAyOCAxNEMyNi4wNjMzIDE0IDI0LjI0MzMgMTQuMzczMyAyMi41NCAxNS4xMkMyMC44MzY3IDE1Ljg0MzMgMTkuMzU1IDE2LjgzNSAxOC4wOTUgMTguMDk1QzE2LjgzNSAxOS4zNTUgMTUuODMxNyAyMC44MzY3IDE1LjA4NSAyMi41NEMxNC4zNjE3IDI0LjI0MzMgMTQgMjYuMDYzMyAxNCAyOFoiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF8xNjc3MV81MzIxMikiLz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8xNjc3MV81MzIxMiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyLjc3ODc2IDExLjM3OTUpIHJvdGF0ZSgxOC42ODMyKSBzY2FsZSgyOS44MDI1IDIzOC43MzcpIj4KPHN0b3Agb2Zmc2V0PSIwLjA2NzEyNDYiIHN0b3AtY29sb3I9IiM5MTY4QzAiLz4KPHN0b3Agb2Zmc2V0PSIwLjM0MjU1MSIgc3RvcC1jb2xvcj0iIzU2ODREMSIvPgo8c3RvcCBvZmZzZXQ9IjAuNjcyMDc2IiBzdG9wLWNvbG9yPSIjMUJBMUUzIi8+CjwvcmFkaWFsRcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K
// @supportURL   https://github.com/HenryGetz/GeminiPilot/issues
// @grant        none
// @run-at       document-start
// ==/UserScript==
/*

# New Feature: URL Parameters!

Empower your automation workflows!  Directly open Gemini with pre-populated prompts by using query parameters in the URL (e.g., `https://gemini.google.com/app?q=YOURTESTPROMPT`).


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

| Shortcut (Mac/Windows) |             Action             |
|:----------------------:|:-----------------------------:|
|       Shift + Esc      |       Focus chat input        |
|   ⌘/Ctrl + Shift + E   |           Edit text           |
|   ⌘/Ctrl + Shift + ;   |    Copy last code block       |
|   ⌘/Ctrl + Shift + '   | Copy second-to-last code block |
|   ⌘/Ctrl + Shift + C   |        Copy response        |
|   ⌘/Ctrl + Shift + K   |    Stop/start generation    |


## Draft Navigation

| Shortcut (Mac/Windows) |       Action       |
|:----------------------:|:--------------------:|
|   ⌘/Ctrl + Shift + D   | Generate more drafts |
|   ⌘/Ctrl + Shift + ,   |     Next draft     |
|   ⌘/Ctrl + Shift + .   |   Previous draft   |


## Sharing and Linking

| Shortcut (Mac/Windows) |           Action            |
|:----------------------:|:-------------------------:|
|   ⌘/Ctrl + Shift + L   | Copy prompt/response link |
|   ⌘/Ctrl + Shift + M   |      Copy chat link       |


## Audio and File Shortcuts

| Shortcut (Mac/Windows) |         Action        |
|:----------------------:|:---------------------:|
|   ⌘/Ctrl + Shift + K   | Stop/start generation |
|   ⌘/Ctrl + Shift + Y   |   Play/pause audio    |
|   ⌘/Ctrl + Shift + S   |    Voice to text      |
|       ⌘/Ctrl + O       |      Open file        |

*/

// With this false, it will copy from the response in the viewport.
const assumeLastResponse = false;

// This setting allows you to delete chats in succession, like browser tabs, instead of being forced to go to a new one. Perfect if doing Gemini housekeeping
const goToNextChatOnDelete = true;

// Check if the URL contains the query parameter 'q'
const hasQuery = window.location.href.includes("?q=");
let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
let query = unescape(params.get("q") || ""); // Ensure query is a string, default to empty

// Run the main function when the window loads
window.onload = onLoad;

function onLoad() {
  // Create a <style> element to inject custom CSS
  let s = document.createElement("style");
  document.head.append(s);

  // Inject CSS rules to modify Gemini's UI appearance.
  // These changes are intentional for the script's functionality.
  s.textContent = `
        /* Widen the main chat container and input area to fill available horizontal space */
        .conversation-container, .input-area-container, .bottom-container, user-query {
            max-width: -webkit-fill-available !important; /* Use available width */
            max-width: fill-available !important; /* Standard syntax */
        }

        /* Hide the capabilities disclaimer, Google Apps button, and overlay backdrop */
        /*.capabilities-disclaimer, */
        #gbwa, .cdk-overlay-backdrop {
            display: none !important;
        }

        /* Prevent text selection on code block headers and footers */
        .code-block-decoration.footer, .code-block-decoration.header {
            user-select: none; /* Standard syntax */
            -webkit-user-select: none; /* WebKit (Safari, Chrome) browsers */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
        }

        /* Remove the default focus indicator border */
        .mat-mdc-focus-indicator::before {
            border: none !important;
        }
    `;
  const nums = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
  ];
  const rapidClickDelayMS = 100;
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  //This code makes sure that the 'more chats' feature is selected without user interaction (so that you can select chats 6-9 with alt as well.)

  //This code also allows for query parameters in the URL.

  let showMoreClicked = false;
  let inputBarClicked = false;
  const observer = new MutationObserver((_, observer) => {
    const showMore = document.querySelector(
      '[data-test-id="show-more-button"]'
    );
    const inputBar = document.querySelector(".text-input-field");
    const textInput = document.querySelector(
      '[aria-label="Enter a prompt here"]'
    );

    if (showMore && !showMoreClicked) {
      showMoreClicked = true;
      simulateClick(showMore);
    }
    if (hasQuery && inputBar && !inputBarClicked) {
      if (textInput && !inputBarClicked) {
        inputBarClicked = true;
        console.log(query);
        params.delete("q");
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
              let showDrafts = document.querySelector(
                '[data-test-id="generate-more-drafts-button"]'
              );
              if (showDrafts) {
                observer.disconnect();

                setTimeout(function () {
                  url = new URL(window.location.href);
                  params = new URLSearchParams(url.search);
                  window.history.pushState(null, "", url.origin + url.pathname);
                }, 2000);
              }
            });
            observer.observe(document.body, { childList: true, subtree: true });

            setTimeout(function () {
              document.querySelector('[aria-label="Send message"]').click();
            }, rapidClickDelayMS);
          }, rapidClickDelayMS);
        }, rapidClickDelayMS);
      }
    } else if (inputBar && !inputBarClicked) {
      console.log(hasQuery);
      inputBarClicked = true;
      setTimeout(() => inputBar.click(), rapidClickDelayMS);
    }

    if (showMoreClicked && inputBarClicked) {
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  let c = null;
  function getLastElement(querySelector) {
    const containers = document.querySelectorAll(".conversation-container");
    c = containers[containers.length - 1];
    if (!assumeLastResponse) {
      let mostVisibleElement = null;
      let maxVisibleArea = 0;

      containers.forEach((container) => {
        const rect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate visible area (only consider area within the viewport)
        const visibleArea = Math.max(
          0,
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
        );

        if (visibleArea > maxVisibleArea && visibleArea !== 0) {
          maxVisibleArea = visibleArea;
          mostVisibleElement = container;
        }
      });
      c = mostVisibleElement;
    }
    return c.querySelectorAll(querySelector)[
      c.querySelectorAll(querySelector).length - 1
    ];
  }

  function copy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  function copyRichTextFromDiv(element) {
    const div = element;

    if (!div) {
      console.error("Div not found.");
      return;
    }

    document
      .querySelectorAll(
        ".code-block-decoration.footer, .code-block-decoration.header, .table-footer"
      )
      .forEach((el) => (el.style.display = "none"));

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(div);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      const successful = document.execCommand("copy");
    } catch (err) {
      console.error("Failed to copy rich text: ", err);
    }

    selection.removeAllRanges();
    setTimeout(function () {
      document
        .querySelectorAll(
          ".code-block-decoration.footer, .code-block-decoration.header"
        )
        .forEach((el) => (el.style.display = ""));
    }, rapidClickDelayMS);
  }

  function clearNotifications() {
    for (let ele of document.querySelectorAll(".gemini-key-notification")) {
      ele.remove();
    }
  }
  // Function to display a temporary notification message
  function notify(text) {
    clearNotifications(); // Clear previous notifications

    const div = document.createElement("div");
    div.className = "gemini-key-notification"; // Add class for identification
    div.textContent = text; // Use textContent for security

    const tDuration = 125; // Transition duration (ms)
    const nDuration = 3000; // Total notification display duration (ms)
    const tLeft = nDuration - tDuration; // Time before fade out starts

    // Apply styles for the notification appearance and animation
    div.style.cssText = `
            position: fixed; /* Use fixed positioning */
            bottom: 26px;
            left: 26px;
            font-family: var(--mdc-snackbar-supporting-text-font, sans-serif); /* Use Gemini variable or fallback */
            font-size: var(--mdc-snackbar-supporting-text-size, 0.875rem);
            font-weight: var(--mdc-snackbar-supporting-text-weight, 400);
            line-height: var(--mdc-snackbar-supporting-text-line-height, 1.25rem);
            color: var(--mdc-snackbar-supporting-text-color, #fff);
            border-radius: var(--mdc-snackbar-container-shape, 4px);
            background-color: var(--mdc-snackbar-container-color, #333);
            z-index: 2147483647; /* Max z-index */
            padding: 14px 16px; /* Adjusted padding */
            box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12); /* Material shadow */
            transition: opacity ${tDuration}ms ease-in-out, transform ${tDuration}ms ease-in-out;
            transform-origin: center bottom;
            transform: scale(0.8); /* Start slightly scaled down */
            opacity: 0;
            max-width: calc(100% - 52px); /* Prevent overflow */
            box-sizing: border-box;
        `;

    document.body.appendChild(div);

    // Fade in and scale up
    setTimeout(() => {
      div.style.opacity = "1";
      div.style.transform = "scale(1)";
    }, 10); // Small delay to ensure transition occurs

    // Fade out and remove
    setTimeout(() => {
      div.style.opacity = "0";
      div.style.transform = "scale(0.8)";
      setTimeout(() => {
        if (div.parentNode) {
          // Check if still attached before removing
          div.remove();
        }
      }, tDuration); // Remove after fade out transition completes
    }, tLeft);
  }

  function simulateClick(element) {
    if (!element) {
      throw new Error("Could not find element to simulate click.");
    }
    element.click();
  }

  let draftIndex = 0;
  let googleDraftCount = 3;
  let waitOnGeneration = false;

  function changeDraft(direction) {
    let draftButtons = document.querySelectorAll(".draft-preview-button");
    if (!waitOnGeneration) {
      draftIndex =
        (draftIndex + direction + googleDraftCount) % googleDraftCount; // Ensure index stays within 0-2
    }

    if (!waitOnGeneration && draftButtons[draftIndex]) {
      simulateClick(draftButtons[draftIndex]);
      //notify(`${capitalize(nums[draftIndex])} draft`)
    } else if (!waitOnGeneration) {
      draftIndex = 0;
      draftIndex =
        (draftIndex + direction + googleDraftCount) % googleDraftCount;
      simulateClick(
        getLastElement('[data-test-id="generate-more-drafts-button"]')
      );
      notify(`Generating ${nums[draftIndex]} draft`);
      waitOnGeneration = true;

      const observer = new MutationObserver((_, observer) => {
        draftButtons = document.querySelectorAll(".draft-preview-button");
        if (draftButtons[draftIndex]) {
          observer.disconnect();
          setTimeout(function () {
            waitOnGeneration = false;
            simulateClick(draftButtons[draftIndex]);
            //notify(`${capitalize(nums[draftIndex])} draft`)
          }, rapidClickDelayMS * 2);
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
    chatIndex = Array.from(
      document.querySelectorAll('[data-test-id="conversation"]')
    ).indexOf(document.querySelector('.selected[data-test-id="conversation"]'));
    let chatButtons = document.querySelectorAll(
      '[data-test-id="conversation"]'
    );

    if (!waitOnLoadingMore) {
      chatIndex = Math.max(0, chatIndex + direction);
    }

    if (!waitOnLoadingMore && chatButtons[chatIndex]) {
      simulateClick(chatButtons[chatIndex]);
      notify(
        `"${chatButtons[chatIndex]
          .querySelector(".conversation-title")
          .innerText.trim()}"`
      );
    } else if (!waitOnLoadingMore) {
      simulateClick(
        document.querySelector('[data-test-id="load-more-button"]')
      );
      notify(`Loading chats`);
      waitOnLoadingMore = true;

      const observer = new MutationObserver((_, observer) => {
        chatButtons = document.querySelectorAll(
          '[data-test-id="conversation"]'
        );
        if (chatButtons[chatIndex]) {
          observer.disconnect();
          setTimeout(function () {
            waitOnLoadingMore = false;
            simulateClick(chatButtons[chatIndex]);
            //notify(`${capitalize(nums[draftIndex])} draft`)
            notify(
              `"${chatButtons[chatIndex]
                .querySelector(".conversation-title")
                .innerText.trim()}"`
            );
          }, rapidClickDelayMS * 2);
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      notify("Chats loading");
    }
  }

  const nextChat = () => changeChat(1);
  const previousChat = () => changeChat(-1);

  // --- Model Switching Logic ---
  function switchModel(modelNumber) {
    const modelIndex = modelNumber - 1; // 0-based index
    const switcher = document.querySelector(
      '[data-test-id="bard-mode-menu-button"]'
    ); // Selector for the model switcher element

    if (!switcher) {
      notify("Model switcher button not found.");
      return;
    }

    simulateClick(switcher);

    // Observe for the menu panel to appear in the document body
    setTimeout(() => {
      const menuPanel = document.body.querySelector(".mat-mdc-menu-panel");
      if (menuPanel) {
        const menuContent = menuPanel.querySelector(".mat-mdc-menu-content");
        // Find all clickable button items within the menu content
        const buttons = menuContent
          ? menuContent.querySelectorAll("button.mat-mdc-menu-item")
          : null;

        if (buttons && buttons.length > 0) {
          // Check if the requested model index is valid
          if (modelIndex >= 0 && modelIndex < buttons.length) {
            const targetButton = buttons[modelIndex];
            // Try to get the model name from the button text
            const modelName =
              targetButton.textContent?.trim().replace(/\s+/g, " ") ||
              `Model ${modelNumber}`;
            simulateClick(targetButton);
            notify(`Switched to ${modelName}`);
          } else {
            notify(`Model number ${modelNumber} is invalid or not available.`);
            // Optional: Close the menu if the index was invalid. Clicking the switcher again might do this.
            // simulateClick(switcher);
          }
          return; // Exit observer callback
        }
      }
    }, 10);
  }

  var isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

  function handleKeydown(event) {
    // Check for Command or Control key

    if (event.shiftKey && event.key === "Escape") {
      simulateClick(document.querySelector(".text-input-field"));
      event.preventDefault();
    }

    let keyNumber = parseInt(event.code.replace("Digit", ""));
    keyNumber = keyNumber === 0 ? 10 : keyNumber;

    if (event.altKey && keyNumber) {
      document
        .querySelectorAll('[data-test-id="conversation"]')
        [keyNumber - 1].click();
      chatIndex = Array.from(
        document.querySelectorAll('[data-test-id="conversation"]')
      ).indexOf(
        document.querySelector('.selected[data-test-id="conversation"]')
      );
      notify(
        `"${document
          .querySelectorAll('[data-test-id="conversation"]')
          [chatIndex].querySelector(".conversation-title")
          .innerHTML.trim()}"`
      );
      //notify(`${capitalize(nums[keyNumber-1])} conversation`)
      event.preventDefault();
    }

    if (
      event.key === "Escape" &&
      document.activeElement?.getAttribute("aria-label")?.includes("Edit prompt")
    ) {
      simulateClick(getLastElement('[aria-label*="Cancel"]'));
      event.preventDefault();
    }

    const isCmdOrCtrl = (isMac && event.metaKey) || (!isMac && event.ctrlKey);

    if (event.ctrlKey && keyNumber) {
      switchModel(keyNumber);
      event.preventDefault();
      return;
    }

    if (!isCmdOrCtrl) return;

    if (isCmdOrCtrl && event.key === "o" && !event.shiftKey) {
      event.preventDefault();
      simulateClick(document.querySelector(".upload-button button"));
      simulateClick(document.querySelector('[aria-label*="Upload files"]'));
    }

    switch (event.key) {
      case "o":
        if (event.shiftKey) {
          simulateClick(
            document.querySelector('[aria-label*="New chat"]')
          );
          simulateClick(document.querySelector(".text-input-field"));
          //notify("New chat created");
          event.preventDefault();
        } else {
          document.querySelector('[aria-label*="upload file"]').click();
          setTimeout(function () {
            document.body.querySelector('[aria-label*="Upload files"]').click();
          }, rapidClickDelayMS);
        }
        break;
      //BELOW NEEDS MORE TIME
      case "c":
        if (event.shiftKey) {
          event.preventDefault();
          getLastElement();
          copyRichTextFromDiv(c.querySelector(".model-response-text"));
          notify("Copied response");

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
      case "i":
        if (event.shiftKey) {
          // Implement custom instructions if Gemini supports them
          event.preventDefault();
        }
        break;
      case "f":
        if (event.shiftKey) {
          simulateClick(document.querySelector('[aria-label*="Main menu"]'));
          event.preventDefault();
        }
        break;
      case "Backspace":
        if (event.shiftKey) {
          event.preventDefault();
          chatIndex = Array.from(
            document.querySelectorAll('[data-test-id="conversation"]')
          ).indexOf(
            document.querySelector('.selected[data-test-id="conversation"]')
          );
          document
            .querySelector(".conversation.selected")
            .parentElement.querySelector('[data-test-id="actions-menu-button"]')
            .click();
          setTimeout(function () {
            document.body
              .querySelector('[data-test-id="delete-button"]')
              .click();
          }, rapidClickDelayMS);
          setTimeout(function () {
            document.body
              .querySelector('[data-test-id="confirm-button"]')
              .click();
            setTimeout(function () {
              if (goToNextChatOnDelete) {
                simulateClick(
                  document.querySelectorAll('[data-test-id="conversation"]')[
                    chatIndex
                  ]
                );
              }
            }, rapidClickDelayMS);
          }, rapidClickDelayMS);
        }
        break;
      case "d":
        if (event.shiftKey) {
          let element = getLastElement("[aria-label=Redo]");
          if (!element) {
            element = getLastElement('[mattooltip="Regenerate drafts"]');
          }
          simulateClick(element);
          event.preventDefault();
        }
        break;
      case "e":
        if (event.shiftKey) {
          simulateClick(getLastElement('[mattooltip="Edit text"]'));
          event.preventDefault();
        }
        break;
      case ";":
        if (event.shiftKey) {
          event.preventDefault();
          //                    simulateClick(getLastElement('[mattooltip="Copy code"]'));
          getLastElement();
          copyRichTextFromDiv(
            c.querySelectorAll("code-block")[
              c.querySelectorAll("code-block").length - 1
            ]
          );
          notify("Copied last code block to clipboard");
        }
        break;
      case "'":
        if (event.shiftKey) {
          event.preventDefault();
          //                    simulateClick(getLastElement('[mattooltip="Copy code"]'));
          getLastElement();
          copyRichTextFromDiv(
            c.querySelectorAll("code-block")[
              c.querySelectorAll("code-block").length - 2
            ]
          );
          notify("Copied second-last code block to clipboard");
        }
        break;
      case "m":
        if (event.shiftKey) {
          simulateClick(getLastElement('[aria-label*="Share"]'));
          setTimeout(function () {
            simulateClick(
              document.querySelector('[aria-label*="Share response"]')
            );
          }, rapidClickDelayMS);
          setTimeout(function () {
            simulateClick(
              document.querySelector(
                '[data-test-id="share-mode-radio-button-full"] label'
              )
            );
          }, rapidClickDelayMS * 2);
          setTimeout(function () {
            simulateClick(
              document.querySelector('[data-test-id="create-button"]')
            );
          }, rapidClickDelayMS * 3);

          //below waits until the link menu loads, then copies it and closes the menu
          const observer = new MutationObserver((_, observer) => {
            const element = document.querySelector(
              '[aria-label="Copy public link"]'
            );
            if (element) {
              observer.disconnect();
              simulateClick(element);
              setTimeout(function () {
                simulateClick(document.querySelector('[aria-label="Close"]'));
                notify("Chat link copied");
              }, rapidClickDelayMS);
            }
          });
          observer.observe(document.body, { childList: true, subtree: true });

          clearNotifications();
          //notify("Last response copied to clipboard");
          event.preventDefault();
        }
        break;
      case "l":
        if (event.shiftKey) {
          simulateClick(getLastElement('[aria-label*="Share"]'));
          setTimeout(function () {
            simulateClick(
              document.querySelector('[aria-label*="Share response"]')
            );
          }, rapidClickDelayMS);
          setTimeout(function () {
            simulateClick(
              document.querySelector('[data-test-id="create-button"]')
            );
          }, rapidClickDelayMS * 2);

          //below waits until the link menu loads, then copies it and closes the menu
          const observer = new MutationObserver((_, observer) => {
            const element = document.querySelector(
              '[aria-label="Copy public link"]'
            );
            if (element) {
              observer.disconnect();
              simulateClick(element);
              setTimeout(function () {
                simulateClick(document.querySelector('[aria-label="Close"]'));
                notify("Prompt/response link copied");
              }, rapidClickDelayMS);
            }
          });
          observer.observe(document.body, { childList: true, subtree: true });
          //notify("Last response copied to clipboard");
          event.preventDefault();
        }
        break;
      case ",":
        if (event.shiftKey) {
          previousDraft();
        }
        break;
      case ".":
        if (event.shiftKey) {
          nextDraft();
        }
        break;
      case "-":
        if (event.shiftKey) {
          event.preventDefault();
          previousChat();
        }
        break;
      case "=":
        if (event.shiftKey) {
          event.preventDefault();
          nextChat();
        }
        break;
      case "k":
        event.preventDefault();
        if (event.shiftKey) {
          simulateClick(document.querySelector('[aria-label="Send message"]'));
          //notify("Last response copied to clipboard");
        }
        break;
      case "y":
        if (event.shiftKey) {
          simulateClick(getLastElement(".response-tts-container button"));
          event.preventDefault();
        }
        break;
      case "s":
        if (event.shiftKey) {
          simulateClick(
            document.querySelector('[mattooltip="Use microphone"]')
          );
          event.preventDefault();
        }
        break;
      case "/":
        event.preventDefault();
        showHelpPopup();
        break;
    }
  }

  document.addEventListener("keydown", (event) => {
    try {
      handleKeydown(event);
    } catch (error) {
      notify(`Failed to execute shortcut: ${error}`);
    }
  });

  // --- Help Popup Functionality ---

  function showHelpPopup() {
    // Remove existing popup if any
    const existingPopup = document.getElementById("gemini-help-popup");
    if (existingPopup) {
      existingPopup.remove();
      const existingOverlay = document.getElementById("gemini-help-overlay");
      if (existingOverlay) existingOverlay.remove();
    }

    // --- Create Elements ---
    const overlay = document.createElement("div");
    overlay.id = "gemini-help-overlay";

    const popup = document.createElement("div");
    popup.id = "gemini-help-popup";

    const styleElement = document.createElement("style");
    styleElement.textContent = `
        #gemini-help-popup {
            background-color: #202124; color: #e8eaed; padding: 25px; border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); max-width: 700px; max-height: 80vh;
            overflow-y: auto; z-index: 2147483647; font-family: 'Google Sans', sans-serif;
            line-height: 1.6; position: relative; /* Needed for absolute close button */
        }
        #gemini-help-popup h2 { color: #8ab4f8; margin-top: 0; margin-bottom: 15px; font-size: 1.4em; }
        #gemini-help-popup h3 { color: #bdc1c6; margin-top: 20px; margin-bottom: 10px; font-size: 1.1em; border-bottom: 1px solid #5f6368; padding-bottom: 5px; }
        #gemini-help-popup table { width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.95em; }
        #gemini-help-popup th, #gemini-help-popup td { border: 1px solid #5f6368; padding: 8px 12px; text-align: left; }
        #gemini-help-popup th { background-color: #3c4043; }
        #gemini-help-popup code { background-color: #3c4043; padding: 2px 5px; border-radius: 4px; font-family: 'Roboto Mono', monospace; }
        #gemini-help-popup .close-button { position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 1.8em; color: #9aa0a6; cursor: pointer; line-height: 1; }
        #gemini-help-popup .close-button:hover { color: #e8eaed; }
        #gemini-help-popup p, #gemini-help-popup ol { margin-bottom: 10px; }
         #gemini-help-popup li { margin-bottom: 5px; }
        #gemini-help-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-color: rgba(0, 0, 0, 0.6); z-index: 2147483646;
            display: flex; justify-content: center; align-items: center;
        }
    `;

    const closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.title = "Close (Esc)";
    closeButton.textContent = "×"; // Use textContent for the times symbol

    const title = document.createElement("h2");
    title.textContent = "Gemini Keyboard Shortcuts Help";

    const introP = document.createElement("p");
    introP.textContent = "Press "; // Build the intro text part by part
    const escCode = document.createElement("code");
    escCode.textContent = "Esc";
    introP.appendChild(escCode);
    introP.appendChild(
      document.createTextNode(" or click the 'X' to close this window.")
    );

    // Helper function to create table sections
    const createTableSection = (titleText, shortcuts) => {
      const sectionTitle = document.createElement("h3");
      sectionTitle.textContent = titleText;
      popup.appendChild(sectionTitle);

      const table = document.createElement("table");
      const thead = table.createTHead();
      const headerRow = thead.insertRow();
      const th1 = document.createElement("th");
      th1.textContent = "Shortcut (Mac/Windows)";
      headerRow.appendChild(th1);
      const th2 = document.createElement("th");
      th2.textContent = "Action";
      headerRow.appendChild(th2);

      const tbody = table.createTBody();
      shortcuts.forEach((shortcut) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell();
        const keyCode = document.createElement("code"); // Create code element for the key
        keyCode.textContent = shortcut.key;
        cell1.appendChild(keyCode); // Append code element to cell
        const cell2 = row.insertCell();
        cell2.textContent = shortcut.action;
      });
      popup.appendChild(table);
    };

    // --- Populate Content ---
    popup.appendChild(styleElement); // Add styles first
    popup.appendChild(closeButton);
    popup.appendChild(title);
    popup.appendChild(introP);

    createTableSection("Chat Management", [
      { key: "⌘/Ctrl + Shift + O", action: "Open new chat" },
      { key: "⌘/Ctrl + Shift + Backspace", action: "Delete chat" },
      { key: "⌘/Ctrl + Shift + F", action: "Toggle sidebar" },
      { key: "⌥/Alt + 1-9", action: "Go to nth chat" },
      { key: "⌘/Ctrl + Shift + =", action: "Next chat" },
      { key: "⌘/Ctrl + Shift + –", action: "Previous chat" },
    ]);

    createTableSection("Text Input and Editing", [
      { key: "Shift + Esc", action: "Focus chat input" },
      { key: "⌘/Ctrl + Shift + E", action: "Edit text" },
      { key: "⌘/Ctrl + Shift + ;", action: "Copy last code block" },
      { key: "⌘/Ctrl + Shift + '", action: "Copy second-to-last code block" },
      { key: "⌘/Ctrl + Shift + C", action: "Copy response" },
      { key: "⌘/Ctrl + Shift + K", action: "Stop/start generation" },
    ]);

    createTableSection("Draft Navigation", [
      { key: "⌘/Ctrl + Shift + D", action: "Generate more drafts" },
      { key: "⌘/Ctrl + Shift + ,", action: "Next draft" },
      { key: "⌘/Ctrl + Shift + .", action: "Previous draft" },
    ]);

    createTableSection("Sharing and Linking", [
      { key: "⌘/Ctrl + Shift + L", action: "Copy prompt/response link" },
      { key: "⌘/Ctrl + Shift + M", action: "Copy chat link" },
    ]);

    createTableSection("Audio and File Shortcuts", [
      { key: "⌘/Ctrl + Shift + Y", action: "Play/pause audio" },
      { key: "⌘/Ctrl + Shift + S", action: "Voice to text" },
      { key: "⌘/Ctrl + O", action: "Open file" },
    ]);

    createTableSection("Other", [
      { key: "⌘/Ctrl + Shift + ?", action: "Show this help" },
      { key: "Ctrl + 1-9", action: "Switch Model (if available)" },
    ]);

    // Disable section
    const disableTitle = document.createElement("h3");
    disableTitle.textContent = "Disabling the Script";
    popup.appendChild(disableTitle);

    const disableP = document.createElement("p");
    disableP.textContent =
      "To temporarily or permanently disable these shortcuts:";
    popup.appendChild(disableP);

    const disableOl = document.createElement("ol");
    const steps = [
      "Open the Tampermonkey extension menu in your browser.",
      "Go to the 'Dashboard'.",
      'Find the script named "Gemini Keyboard Shortcuts".',
      "Toggle the switch next to the script name to disable it.",
    ];
    steps.forEach((stepText) => {
      const li = document.createElement("li");
      li.textContent = stepText;
      disableOl.appendChild(li);
    });
    popup.appendChild(disableOl);

    // --- Close Functionality ---
    const closePopup = () => {
      overlay.remove();
      document.removeEventListener("keydown", escapeKeyListener); // Clean up listener
    };

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        // Close only if clicking the overlay itself
        closePopup();
      }
    });
    closeButton.addEventListener("click", closePopup);

    // Close with Escape key
    const escapeKeyListener = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };
    document.addEventListener("keydown", escapeKeyListener);

    // --- Append to Body ---
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  }

  // --- End Help Popup Functionality ---
}
