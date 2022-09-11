import { render } from "@testing-library/svelte"
import Backdrop from '../lib/backdrop/Backdrop.svelte';
import SlotWrapper from "./SlotWrapper.svelte";

describe('Backdrop component', () => {
  const backdropTestId = 'proi-backdrop';
  const visible = true;

  it('should render if visible is true', () => {
    const { getByTestId } = render(Backdrop, { props: { visible } });
    const backdropElement = getByTestId(backdropTestId);

    expect(backdropElement).toBeDefined();
  });

  it('should render slot', () => {
    const backdropSlot = 'Custom content';
    const { getByTestId } = render(SlotWrapper, {
      props: {
        componentProps: {
          visible
        },
        component: Backdrop,
        slot: backdropSlot
      }
    });

    const backdropElement = getByTestId(backdropTestId);

    expect(backdropElement.innerHTML).toContain(backdropSlot);
  });
});