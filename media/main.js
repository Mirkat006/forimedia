// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
  const vscode = acquireVsCodeApi();
  const button = document.querySelector('button');

  button.addEventListener('click', function (e) {
    button.innerText = 'You clicked me!';
  });
})();
