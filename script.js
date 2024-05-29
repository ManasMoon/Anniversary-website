document.addEventListener('DOMContentLoaded', () => {
          const proceedButton = document.getElementById('proceedButton');
          proceedButton.addEventListener('click', () => {
              const currentPath = window.location.pathname;
              if (currentPath.includes('index.html')) {
                  window.location.href = 'second.html';
              } else if (currentPath.includes('second.html')) {
                  window.location.href = 'third.html';
              }
          });
      });
      