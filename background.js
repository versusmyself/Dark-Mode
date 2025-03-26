let isDark = false;


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

  /* Links */
  a, a * {
    color: #a8d8ff !important;
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
  
  div.form-group:nth-child(7) > label:nth-child(1) {
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
  
  
  

`;




function applyCSS(tabId, apply) {
    // Inject CSS into main page
    if (apply) {
        chrome.tabs.insertCSS(tabId, { code: css });
    } else {
        chrome.tabs.removeCSS(tabId, { code: css });
    }

    // Inject JS into iframe
    chrome.tabs.executeScript(tabId, {
        code: `
      (function() {
        const isDark = ${isDark};
        const iframes = document.querySelectorAll('iframe');

        for (const frame of iframes) {
          try {
            const doc = frame.contentDocument;
            const head = doc.head || doc.getElementsByTagName('head')[0];

            // Remove old dark mode styles if they exist
            const existing = doc.getElementById('tinymce-dark-mode');
            if (existing) existing.remove();

            if (isDark) {
              const style = doc.createElement('style');
              style.id = 'tinymce-dark-mode';
              style.textContent = \`
                #tinymce {
                  background-color: #1f2125 !important;
                  color: #ffffff !important;
                  font-size: 18px !important;
                }
                #tinymce *:not(a) {
                  color: #ffffff !important;
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

chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.action === 'toggle-dark') {
        isDark = !isDark;
        applyCSS(message.tabId, isDark);
    }
});
