export const clickOutside = (node: HTMLElement) => {
  const handleClick = (event: Event) => {
    const target = event.target as HTMLElement;
    if (node && !node.contains(target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent("click_outside", node as any));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    }
  };
};
