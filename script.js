document.querySelectorAll('.accordion__question').forEach((item) => {
  item.addEventListener('click', (event) => {
    let accCollapse = item.nextElementSibling;
    let isOpen = item.classList.contains('open');

    if (!item.classList.contains('collapsing')) {
      // Close all open accordion items
      document.querySelectorAll('.accordion__question.open').forEach((openItem) => {
        let openCollapse = openItem.nextElementSibling;
        openItem.classList.remove('open');
        openCollapse.style.height = '0px';

        setTimeout(() => {
          openCollapse.classList = 'accordion__answer collapse';
          openCollapse.style.height = '';
        }, 1);
      });

      // Open accordion item
      if (!isOpen) {
        accCollapse.style.display = 'block';
        let accHeight = accCollapse.clientHeight;

        setTimeout(() => {
          accCollapse.style.height = accHeight + 'px';
          accCollapse.style.display = '';
        }, 1);

        accCollapse.classList = 'accordion__answer collapsing';

        setTimeout(() => {
          accCollapse.classList = 'accordion__answer collapse open';
        }, 300);
      }
      // Close accordion item
      else {
        accCollapse.classList = 'accordion__answer collapsing';

        setTimeout(() => {
          accCollapse.style.height = '0px';
        }, 1);

        setTimeout(() => {
          accCollapse.classList = 'accordion__answer collapse';
          accCollapse.style.height = '';
        }, 300);
      }

      item.classList.toggle('open');
    }
  });
});

