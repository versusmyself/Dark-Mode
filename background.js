let isDark = false;

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === 'toggle-dark') {
    isDark = !isDark;
    const css = `
      html, body {
        background-color: #121212 !important;
        color: #e0e0e0 !important;
      }
      a { color: #8ab4f8 !important; }
    `;

    if (isDark) {
      chrome.scripting.insertCSS({
        target: { tabId: message.tabId },
        css
      });
    } else {
      chrome.scripting.removeCSS({
        target: { tabId: message.tabId },
        css
      });
    }
  }
});
