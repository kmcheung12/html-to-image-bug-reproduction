# html-to-image-bug-reproduction
Reproducing a bug of html-to-image 1.11.6 onwards

To reproduce the bug

1. Clone this project
2. cd into project
3. run the project by
```
yarn dev
```
4. Firefox will be started automatically
5. Navigate to any website, e.g. example.com
6. Click anywhere in the extension pop up, which is to the right of the browser address bar
7. If it is working as intended, a screen capture of current page will be appended to the end of `document.body`
8. On html-to-image `1.11.6+`, it gives error `TypeError: e.toDataURL is not a function`
