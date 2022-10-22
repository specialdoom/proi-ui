import { fireEvent, render } from "@testing-library/svelte";
import Button from '../lib/button/Button.svelte';
import SlotWrapper from "./SlotWrapper.svelte";
window.alert = jest.fn();

describe('Button component', () => {
  const buttonTestId = 'proi-button';

  ['primary', 'secondary', 'ghost'].forEach(variant => {
    it(`should render ${variant} button`, () => {
      const { getByTestId } = render(Button, { props: { variant } });
      const buttonElement = getByTestId(buttonTestId);

      expect(buttonElement.innerHTML).toBe('');
      expect(buttonElement.className).toContain(variant);
    });
  });

  it('should render primary disabled button', () => {
    const { getByTestId } = render(Button, { props: { disabled: false } });
    const buttonElement = getByTestId(buttonTestId);

    expect(buttonElement.getAttribute("disabled")).toBeDefined();
    expect(buttonElement.className).toContain('primary');
  });

  it('should render primary button with slot content', () => {
    const buttonText = 'Click me';
    const { getByTestId } = render(SlotWrapper, {
      props: {
        component: Button,
        slot: buttonText
      }
    });

    const buttonElement = getByTestId(buttonTestId);

    expect(buttonElement.innerHTML).toBe(buttonText);
  });

  it('should render primary block button', () => {
    const { getByTestId } = render(Button, { props: { block: true } });
    const buttonElement = getByTestId(buttonTestId);

    expect(window.getComputedStyle(buttonElement).width).toBe('100%');
    expect(buttonElement.className).toContain('primary');
  });

  it('should fire click event', async () => {
    const { getByTestId, component } = render(Button);
    component.$on('click', () => alert('click event'));
    const buttonElement = getByTestId(buttonTestId);
    await fireEvent.click(buttonElement);

    expect(buttonElement).toBeDefined();
    expect(window.alert).toHaveBeenCalled();
  });
});