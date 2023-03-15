import browser from "webextension-polyfill";

console.log("Hello from the popup!", { id: browser.runtime.id });

function listenForClicks() {
    function onErr(err) { // E: Parameter 'err' implicitly has an 'any' type.
      console.error(err);
    }
    console.log("pop up clicked");
    addEventListener('click', (e) => {
        browser.tabs.query({active: true, currentWindow: true})
        .then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, // E: Argument of type 'number | undefined' is not assignable to parameter of type 'number'.   Type 'undefined' is not assignable to type 'number'.
            {"command": "foo"} // E: 'target' is possibly 'null'. // E: Object is possibly 'null'. // E: Property 'textContent' does not exist on type 'EventTarget'. // E: Property 'te…
            ).catch(onErr);
        }).catch(onErr);
    });
}

function reportExecuteScriptError(error) { // E: Parameter 'error' implicitly has an 'any' type.
    console.error(`Failed to execute content script: ${error.message}`);
}

browser.tabs.executeScript({file: "./content.js"})
    .then(listenForClicks)
    .catch(reportExecuteScriptError);
