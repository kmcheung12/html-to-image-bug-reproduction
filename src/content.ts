import * as htmlToImage from 'html-to-image';
import browser from "webextension-polyfill";

function screenCapBody() {
    const body = document.body;
    htmlToImage.toPng(body).then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img)
    }).catch((err) => console.error(err));
}

browser.runtime.onMessage.addListener((message) => {
    screenCapBody();
})
