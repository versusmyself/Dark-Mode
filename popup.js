document.getElementById('toggle').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.runtime.sendMessage({ action: 'toggle-dark', tabId: tab.id });
  });
  