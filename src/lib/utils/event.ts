export const outside = (node: HTMLElement, cb: (node?: HTMLElement) => void) => {
  const handle = (event: any) => node.contains(event.target) || cb(node);
  document.addEventListener('click', handle, true);
  return {
    destroy() {
      document.removeEventListener('click', handle, true);
    }
  };
};
