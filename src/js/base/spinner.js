export const spinner = function (value) {
  const spinner = {
    spinnerRef: document.querySelector('.loader'),

    markup: `<div class="atom-spinner">
  <div class="spinner-inner">
    <div class="spinner-line"></div>
    <div class="spinner-line"></div>
    <div class="spinner-line"></div>
    <!--Chrome renders little circles malformed :(-->
    <div class="spinner-circle">&#9679;</div>
  </div>
</div>`,

    show() {
      this.spinnerRef.innerHTML = '';
      this.spinnerRef.insertAdjacentHTML('beforeend', this.markup);
    },

    hide() {
      this.spinnerRef.innerHTML = '';
    },
  };
  if (value === 'start') {
    spinner.show();
  } else if (value === 'stop') {
    spinner.hide();
  }
};
