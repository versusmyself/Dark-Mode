

const css = `
  /* Page background and text */
  html, body, .container, .content, .page-header, .well {
    background-color: #1e1e1e !important;
    color: #e0e0e0 !important;
  }

  /* Navigation and header */
  .navbar, .navbar-inner, .navbar-inverse, .navbar-fixed-top, .main-header {
    background-color: #1a1a1f !important;
    border-color: #333 !important;
  }

  /* Buttons */
  .btn, .btn-default, .btn-primary, .btn-success, .btn-warning, .btn-danger, .btn-info, .btn-outline-primary, .btn-secondary {
    background-color: #333 !important;
    color: #ffffff !important;
    border-color: #555 !important;
  }

  .btn:hover {
    background-color: #444 !important;
  }

  /* Tables */
  .table, .table-striped, .table-bordered, .table-condensed {
    background-color: #1a1a1f !important;
    color: #dddddd !important;
  }

  /* Forms and inputs */
  input, textarea, select {
    background-color: #1e1e1e !important;
    color: #f0f0f0 !important;
    border: 1px solid #555 !important;
  }

  /* Modals and alerts */
  .modal, .modal-header, .modal-body, .modal-footer,
  .alert, .alert-info, .alert-success {
    background-color: #1a1a1f !important;
    color: #cccccc !important;
  }

  /* TinyMCE outer styling (iframe-injected styles handled separately) */
  .mce-panel, .mce-toolbar, .mce-statusbar, .mce-container {
    background-color: #1a1a1f !important;
    color: #cccccc !important;
  }

  /* Footer */
  .site-footer, footer {
    background-color: #1a1a1f !important;
    color: #aaaaaa !important;
  }


  /* Images and icons */
  img, video {
    filter: brightness(0.8) contrast(1.1);
  }

  /* CAPTCHA and overlays */
  .grecaptcha-badge, .grecaptcha-logo {
    filter: brightness(0.4);
  }

  /* TinyMCE button bar */
  #mceu_21 * {
    background-color: #333 !important;
    color: #fff !important;
    border-color: #555 !important;
  }

  #mceu_21 *:hover {
    background-color: #444 !important;
  }

  table.table:nth-child(16),
  table.table:nth-child(16) * {
    background-color: #1a1a1f !important;
    color: #e0e0e0 !important;
    border-color: #444 !important;
  }

  #articleform h3 {
    color: #ffffff !important;
  }

  /* Accordion card fix (main page) */
  .card.accordion__item--shadow,
  .card.accordion__item--shadow * {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
  }

  .col-md-5 > div:nth-child(1),
.col-md-5 > div:nth-child(1) * {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
  background-image: none !important;
  box-shadow: none !important;
}

.col-md-5 > div:nth-child(2),
.col-md-5 > div:nth-child(2) * {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
  background-image: none !important;
  box-shadow: none !important;
}

.col-md-5 > div:nth-child(3),
.col-md-5 > div:nth-child(3) * {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
  background-image: none !important;
  box-shadow: none !important;
}

.col-md-5 > div:nth-child(4),
.col-md-5 > div:nth-child(4) * {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
  background-image: none !important;
  box-shadow: none !important;
}

.col-md-5 > div:nth-child(5),
.col-md-5 > div:nth-child(5) * {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
  background-image: none !important;
  box-shadow: none !important;
}

.full-width-header,
.full-width-header * {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
  background-image: none !important;
  box-shadow: none !important;
}

#saplingbutton {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
    background-image: none !important;
    box-shadow: none !important;
  }

button#savearticlebtn,
#savearticlebtn,
#savearticlebtn.btn,
button#savearticlebtn.btn {
  background-color: #cc4444 !important;
  color: #ffffff !important;
  border-color: #992e2e !important;
  box-shadow: none !important;
  background-image: none !important;
}

button#savearticlebtn:hover,
#savearticlebtn:hover,
#savearticlebtn.btn:hover,
button#savearticlebtn.btn:hover {
  background-color: #d15555 !important;
}

#unassignWriterButton {
    background-color: #cc4444 !important;
    color: #ffffff !important;
    border-color: #992e2e !important;
    box-shadow: none !important;
    background-image: none !important;
  }
  
  #unassignWriterButton:hover {
    background-color: #d15555 !important;
  }
  
  input.btn:nth-child(6),
  #aiAssistBtn {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
    border-color: #444 !important;
    box-shadow: none !important;
    background-image: none !important;
  }
  
  input.btn:nth-child(6):hover,
  #aiAssistBtn:hover {
    background-color: #2a2a2a !important;
  }
  
  #submitForReviewBtn {
    background-color: #3cb371 !important;
    color: #ffffff !important;
    border-color: #2d7f51 !important;
    box-shadow: none !important;
    background-image: none !important;
  }
  
  #submitForReviewBtn:hover {
    background-color: #34a064 !important;
  }
  
  #mceu_34 {
    position: relative !important;
    z-index: 50 !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }
  
  #mceu_34 {
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  #title, 
  #seotitle,
  #seodescription,
  #topic,
  li.form-group:nth-child(5) > input:nth-child(2) {
    background-color: #1f2125 !important;
    color: #ffffff !important;
    border: 1px solid #444 !important;
  }
  
  .col-md-5 > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > div:nth-child(2) > a:nth-child(1) {
    color: #ff4d4d !important;
  }
  
  div.form-group:nth-child(8) > label:nth-child(1), div.form-group:nth-child(8) > div:nth-child(2) {
    color: #ff4d4d !important;
  }

  
  
  div.form-group:nth-child(3),
div.form-group:nth-child(3) * {
  color: #ffffff !important;
  text-shadow: none !important;
}

.text__blue--800 {
    color: #ffffff !important;
  }
  
  .align-self-start {
    filter: brightness(0) invert(1) !important;
  }
  
  [class*="mce-label"] {
    color: #ffffff !important;
    text-shadow: none !important;
  }
  
  [role="presentation"] {
    background-color: #1e1e1e !important;
    color: #cccccc !important;
    text-shadow: none !important;
  }
  
  .mce-stack-layout-item {
    background-color: #1e1e1e !important;
  color: #1e1e1e !important;
    text-shadow: none !important;
  }

  #mceu_33 {
    color: transparent !important;
    text-shadow: none !important;
  }
  
  div.form-group:nth-child(2) > div:nth-child(2) {
    color: #ff4d4d !important;
  }
  

  .dropdown-menu.dropdown-menu {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
  }
  
  .dropdown-menu.dropdown-menu * {
    color: #ffffff !important;
    text-shadow: none !important;
  }
  
  html body div.navbar.navbar-fixed-top.navbar-inverse div.navbar-inner div.container ul.nav li.dropdown.open a.dropdown-toggle {
    color: #ff4d4d !important;
  }
  
  a.dropdown-toggle {
    color: #ff4d4d !important;
  }
  
  .dropdown-menu > li:nth-child(1),
  .dropdown-menu > li:nth-child(8),
  .dropdown-menu > li:nth-child(13) {
    background-color: #444444 !important;
  }
  
  table.table:nth-child(16) > tbody:nth-child(1) > tr:nth-child(33) > td:nth-child(2) > a:nth-child(3) {
    background-color: #3cb371 !important;
    color: #ffffff !important;
  }
  
  table.table:nth-child(16) > tbody:nth-child(1) > tr:nth-child(29) > th:nth-child(1) > b:nth-child(1) {
    color: #ff4d4d !important;
  }
  
  table.table:nth-child(16) > tbody:nth-child(1) > tr:nth-child(29) > td:nth-child(2),
table.table:nth-child(16) > tbody:nth-child(1) > tr:nth-child(29) > td:nth-child(2) * {
  color: #ff4d4d !important;
}

table.table:nth-child(16) > tbody:nth-child(1) > tr:nth-child(27), table.table:nth-child(16) > tbody:nth-child(1) > tr:nth-child(27) * {color: #ff4d4d !important;
}
  
form#unassignform input#unassignButton.btn.btn-danger {
    background-color: #cc4444 !important;
    color: #ffffff !important;
    border-color: #992e2e !important;
    box-shadow: none !important;
    background-image: none !important;
  }
  
  form#unassignform input#unassignButton.btn.btn-danger:hover {
    background-color: #d15555 !important;
  }

  form#articleform input#saveArticleDatabtn.btn.btn-success {
    background-color: #3cb371 !important;
    color: #ffffff !important;
    border-color: #2d7f51 !important;
    box-shadow: none !important;
    background-image: none !important;
  }
  
  form#articleform input#saveArticleDatabtn.btn.btn-success:hover {
    background-color: #34a064 !important;
  }
  
  .mce-btn,
.mce-btn *,
.mce-btn span,
.mce-btn i {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
  border: 1px solid #444 !important;
  box-shadow: none !important;
  text-shadow: none !important;
  outline: none !important;
}

#mceu_2-open > span:nth-child(1) {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
    outline: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
    border: none !important;
  }
  
  
  #mceu_21 {
    background-color: #1e1e1e !important;
  }
  
  #mceu_21 * {
    background-color: #1e1e1e !important;
  }
  

  .mce-btn .mce-i-bold {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
  }
  
  #mceu_34 {
    display: none !important;
  }
  
  #articleform > div:nth-child(44),
#articleform > div:nth-child(44) * {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
  box-shadow: none !important;
  text-shadow: none !important;
}

#approveArticle {
    background-color: #3cb371 !important;
    color: #ffffff !important;
    border-color: #2d7f51 !important;
    box-shadow: none !important;
    background-image: none !important;
  }
  
  #approveArticle:hover {
    background-color: #34a064 !important;
  }

  #keywords,
#keywords_second {
  background-color: #1f2125 !important;
  color: #ffffff !important;
  border: 1px solid #444 !important;
  box-shadow: none !important;
  background-image: none !important;
}

table.table:nth-child(16) > tbody:nth-child(1) > tr:nth-child(6),
table.table:nth-child(16) > tbody:nth-child(1) > tr:nth-child(6) * {
  color: #ff4d4d !important;
}

.col-md-5 > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) {
    color: #ff4d4d !important;
  }
  

table.table:nth-child(16) > tbody:nth-child(1) > tr:nth-child(15) > td:nth-child(2) > a:nth-child(1) {
    color: #ff4d4d !important;
  }
  
  .list-panel {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
  }
  
  .card__header, card__body {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
  }
  .card__body.card__border {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
  }

  table.h-table:nth-child(22),
  table.h-table:nth-child(22) *,
  
  table.h-table:nth-child(26),
  table.h-table:nth-child(26) *,
  
  table.h-table:nth-child(30),
  table.h-table:nth-child(30) *,
  
  table.h-table:nth-child(34),
  table.h-table:nth-child(34) *,
  
  table.h-table:nth-child(38),
  table.h-table:nth-child(38) * {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
    border-color: #444 !important;
  }

  table.h-table:nth-child(22) td:nth-child(1),
table.h-table:nth-child(26) td:nth-child(1),
table.h-table:nth-child(30) td:nth-child(1),
table.h-table:nth-child(34) td:nth-child(1),
table.h-table:nth-child(38) td:nth-child(1) {
  color: #ff4d4d !important;
}



table.h-table:nth-child(18) a {
  color: #ff4d4d !important;
}

table.h-table:nth-child(22) a {
  color: #ff4d4d !important;
}



table.h-table:nth-child(26) a {
  color: #ff4d4d !important;
}

table.h-table:nth-child(30) a {
  color: #ff4d4d !important;
}

table.h-table:nth-child(18) tr:nth-child(even) td,
table.h-table:nth-child(22) tr:nth-child(even) td,
table.h-table:nth-child(26) tr:nth-child(even) td,
table.h-table:nth-child(30) tr:nth-child(even) td {
  background-color: #2a2a2a !important;
}

/* Odd rows - dark gray */
table.h-table tr:nth-child(odd),
table.h-table tr:nth-child(odd) * {
  background-color: #1e1e1e !important;
  background-image: none !important;
}

/* Even rows - slightly lighter gray */
table.h-table tr:nth-child(even),
table.h-table tr:nth-child(even) * {
  background-color: #2a2a2a !important;
  background-image: none !important;
}

div.alert:nth-child(13) {
  background-color: #2a2a2a !important;
  color: #ffffff !important;
  text-shadow: none !important;
  border: none !important;
}

table.h-table:nth-child(18) {
  border: 1px solid #444 !important;
}

table.h-table:nth-child(18) td {
  border-bottom: 1px solid #444 !important;
}


table.h-table:nth-child(18) > thead:nth-child(1) {
  border-bottom: 1px solid #444 !important;
}

table.h-table:nth-child(18) > thead:nth-child(1) th {
  border-bottom: 1px solid #444 !important;
}

.list-panel {
  border: 1px solid #444 !important;
}

.card__header {
  border: 1px solid #444 !important;
}


.card__body {
  border: 1px solid #444 !important;
}

div.alert:nth-child(12) {
  border: 1px solid #444 !important;
}

.card__header,
.card__header * {
  color: #ffffff !important;
  text-shadow: none !important;
}

div.col-sm-12:nth-child(2),
div.col-sm-12:nth-child(2) * {
  color: #ffffff !important;
  text-shadow: none !important;
}

div.alert:nth-child(12),
div.alert:nth-child(12) * {
  color: #ffffff !important;
  text-shadow: none !important;
}




#tableAssignments,
#tableAssignments *,

table.h-table:nth-child(18), table.h-table:nth-child(18) *{
  background-color: #1e1e1e !important;
  color: #ffffff !important;
}

h3 {
    color: #ffffff !important;
  }
  
  
table.h-table:nth-child(22) tr:nth-child(even),
table.h-table:nth-child(26) tr:nth-child(even),
table.h-table:nth-child(30) tr:nth-child(even),
table.h-table:nth-child(34) tr:nth-child(even),
table.h-table:nth-child(38) tr:nth-child(even) {
  background-color: #2a2a2a !important;
}




  ul.nav:nth-child(3),
ul.nav:nth-child(3) * {
  background-color: #1e1e1e !important;
  color: #ff4d4d !important;
  border-color: #444 !important;
}

#selectassignmentbtn {
    background-color: #cc4444 !important;
    color: #ffffff !important;
    border-color: #992e2e !important;
    box-shadow: none !important;
    background-image: none !important;
  }
  
  #selectassignmentbtn:hover {
    background-color: #d15555 !important;
  }
  
  #setalert {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
    border-color: #444 !important;
    box-shadow: none !important;
    background-image: none !important;
  }
  
  #setalert:hover {
    background-color: #2a2a2a !important;
  }
  
  
  div.alert:nth-child(17),
div.alert:nth-child(17) * {
  text-shadow: none !important;
}

div.alert:nth-child(12), div.alert:nth-child(12) * {
    text-shadow: none !important;
}

h1,
.text__font-size--14, .text__font-size--16, text__grey--600 {
  color: #ffffff !important;
}
 
div.alert:nth-child(13) {
    text-shadow: none !important;
  }
  





`;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get('isDark', (data) => {
      if (typeof data.isDark === 'undefined') {
        chrome.storage.local.set({ isDark: true });
      }
    });
  });
  

  chrome.storage.local.get('isDark', (data) => {
    const value = typeof data.isDark === 'undefined' ? true : data.isDark;
    chrome.storage.local.set({ isDark: value }, () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) applyCSS(tabs[0].id, value);
      });
    });
  });
  
  
  // Apply styles again on reload/navigation
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      applyCSS(tabId, isDark);
    }
  });
  
  // Handle toggle button
  chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.action === 'toggle-dark') {
      chrome.storage.local.get('isDark', (data) => {
        const newValue = !data.isDark;
        chrome.storage.local.set({ isDark: newValue }, () => {
          applyCSS(message.tabId, newValue);
        });
      });
    }
  });
  


  function applyCSS(tabId, apply) {
    chrome.tabs.executeScript(tabId, {
      code: `
        (function() {
          const styleId = 'custom-dark-mode';
          const isDark = ${apply};
  
          let styleTag = document.getElementById(styleId);
  
          if (styleTag) styleTag.remove();
  
          if (isDark) {
            styleTag = document.createElement('style');
            styleTag.id = styleId;
            styleTag.textContent = \`${css.replace(/`/g, '\\`')}\`;
            document.head.appendChild(styleTag);
          }
  
          const iframes = document.querySelectorAll('iframe');
          for (const frame of iframes) {
            try {
              const doc = frame.contentDocument;
              const head = doc.head || doc.getElementsByTagName('head')[0];
              const existing = doc.getElementById('tinymce-dark-mode');
              if (existing) existing.remove();
  
              if (isDark) {
                const style = doc.createElement('style');
                style.id = 'tinymce-dark-mode';
                
                style.textContent = \`
  #tinymce {
    background-color: #1f2125 !important;
    color: #ffffff !important;
  }
  #tinymce *:not(a) {
    text-shadow: none !important;

  }
  #tinymce a {
    color: #a8d8ff !important;
  }
  #tinymce span[style*="background-color"] {
    background-color: transparent !important;
  }
  .mce-txt {
    background-color: #1e1e1e !important;
    color: #e0e0e0 !important;
  }


\`;

                head.appendChild(style);
              }
            } catch (e) {
              // Ignore cross-origin iframes
            }
          }
        })();
      `
    });
  }
  
  
  
  // Immediately apply dark mode on extension load
  // Load and apply dark mode on extension startup
  chrome.storage.local.get('isDark', (data) => {
    const value = typeof data.isDark === 'undefined' ? true : data.isDark;
    chrome.storage.local.set({ isDark: value }, () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) applyCSS(tabs[0].id, value);
      });
    });
  });

  
  
  
  
  
  
  // Re-apply on tab reloads or navigation
  chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'complete') {
      chrome.storage.local.get('isDark', (data) => {
        if (data.isDark) applyCSS(tabId, true);
      });
    }
  });
  
  // Toggle dark mode and store new state
  chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.action === 'toggle-dark') {
      chrome.storage.local.get('isDark', (data) => {
        const newValue = !data.isDark;
        chrome.storage.local.set({ isDark: newValue }, () => {
          applyCSS(message.tabId, newValue);
        });
      });
    }
  });
  

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      applyCSS(tabId, isDark);
    }
  });
  
