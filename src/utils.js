const f = {
  toast: {
    container: null,
  },
};

export default {
  fixAxiosErrors(axios) {
    axios.interceptors.request.use((config) => {
      config.errorContext = new Error('Thrown at:');
      return config;
    });
    axios.interceptors.response.use(undefined, (error) => {
      const originalStackTrace = _.get(error, 'config.errorContext.stack');
      if (originalStackTrace) {
        error.stack = `${error.stack}\n${originalStackTrace}`;
      }
      throw error;
    });
    return axios;
  },
  toast(message, options = {}) {
    if (!f.toast.container) {
      const div = document.createElement('div');
      div.classList.add('dans-toast-container');
      document.body.appendChild(div);
      f.toast.container = div;
    }
    const div = document.createElement('div');
    div.classList.add('dans-toast');
    div.classList.add('bordered');
    if (options.tone) {
      div.classList.add(`dans-toast-${options.tone}`);
    }
    div.appendChild(document.createTextNode(message));
    f.toast.container.appendChild(div);
    setTimeout(() => div.remove(), options.delay || 3000);
  },
}
