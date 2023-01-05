const ANIMATION_DELAY = 60;
const ANIMATION_DURATION = 1500;

const animation = {
  request: (callback: any) =>
    (
      window.requestAnimationFrame ||
      ((callback) => {
        setTimeout(callback, ANIMATION_DELAY);
      })
    )(callback)
};

export const scroll = {
  to: (x: number, y: number, options: any, callback: any) => {
    if (typeof options === 'function') {
      callback = options;
      options = null;
    }
    options = Object.assign({ duration: ANIMATION_DURATION }, options);
    let steps = options.duration / ANIMATION_DELAY;
    const stepX = ((window.pageXOffset || document.documentElement.scrollLeft) - x) / steps;
    const stepY = ((window.pageYOffset || document.documentElement.scrollTop) - y) / steps;
    const render = () => {
      window.scrollBy(-stepX, -stepY);
      if (--steps) {
        animation.request(render);
      } else {
        window.scrollTo(x, y);
        if (typeof callback === 'function') {
          callback.call(window);
        }
      }
    };
    if (stepX || stepY) {
      steps = Math.round(steps);
      render();
    }
  },
  totop: (options: any = {}, callback: any = null) => {
    if (typeof options === 'function') {
      callback = options;
      options = null;
    }
    if (typeof options === 'number') {
      options = { duration: options };
    }
    return scroll.to(0, 0, options, callback);
  },
  toobj: (target: any, options: any = {}, callback: any = null) => {
    if (typeof options === 'function') {
      callback = options;
      options = null;
    }
    if (typeof options === 'number') options = { margin: options };
    options = Object.assign({ margin: 0 }, options);
    if (typeof target === 'string') target = document.querySelector(target);
    if (target) scroll.to(0, target.offsetTop - options.margin, options, callback);
  }
};
