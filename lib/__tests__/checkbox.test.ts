import { fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/svelte";
import Checkbox from '../lib/checkbox/Checkbox.svelte';
import SlotWrapper from "./SlotWrapper.svelte";

describe('Checkbox component', () => {
  const checkboxTestId = 'proi-checkbox';
  const checkboxLabelTestId = 'proi-checkbox-label';

  it('should render checked checkbox', () => {
    const { getByTestId } = render(Checkbox, {
      props: {
        checked: true
      }
    });
    const checkboxElement = getByTestId(checkboxTestId);

    expect(checkboxElement.className).toContain('checked');
    expect(checkboxElement.innerHTML).toContain('svg');
  });

  it('should render unchecked checkbox', () => {
    const { getByTestId } = render(Checkbox, {
      props: {
        checked: false
      }
    });
    const checkboxElement = getByTestId(checkboxTestId);

    expect(checkboxElement.className).not.toContain('checked');
    expect(checkboxElement.innerHTML).not.toContain('svg');
  });

  it('should render uncheck checkbox with label', () => {
    const label = 'Checkbox label';
    const { getByTestId } = render(SlotWrapper, {
      props: {
        componentProps: {
          checked: false
        },
        component: Checkbox,
        slot: label
      }
    });
    const checkboxElement = getByTestId(checkboxTestId);
    const checkboxLabelElement = getByTestId(checkboxLabelTestId);

    expect(checkboxElement.className).not.toContain('checked');
    expect(checkboxLabelElement.innerHTML).toContain(label);
  });

  it('should toggle checked on click event', async () => {
    const { getByTestId, component } = render(Checkbox, {
      props: {
        checked: true
      }
    });
    const checkboxElement = getByTestId(checkboxTestId);
    expect(checkboxElement.className).toContain('checked');
    await fireEvent.click(checkboxElement);
    expect(checkboxElement.className).not.toContain('checked');
    await fireEvent.click(checkboxElement);
    expect(checkboxElement.className).toContain('checked');
  });
});