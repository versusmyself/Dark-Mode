document.getElementById('toggle').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.runtime.sendMessage({ action: 'toggle-dark', tabId: tabs[0].id });
    });
  });
  