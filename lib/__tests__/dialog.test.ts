import { fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/svelte";
import Dialog from '../lib/dialog/Dialog.svelte';
import SlotWrapper from "./SlotWrapper.svelte";

window.alert = jest.fn();

describe('Dialog component', () => {
  const dialogTestId = 'proi-dialog';
  const dialogCloseIconTestId = 'proi-dialog-close-icon';
  const dialogActionsTestId = 'proi-dialog-actions';
  const title = 'Custom title';
  const dialogBody = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

  it('should render dialog component with title and actions', () => {
    const { getByTestId } = render(Dialog, {
      props: {
        visible: true,
        title
      }
    });
    const dialogElement = getByTestId(dialogTestId);
    const dialogActionsElement = getByTestId(dialogActionsTestId);

    expect(dialogElement.innerHTML).toContain(title);
    expect(dialogActionsElement).toBeDefined();
  });

  it('should render dialog component with title, body and actions', () => {
    const { getByTestId } = render(SlotWrapper, {
      props: {
        componentProps: {
          visible: true,
          title
        },
        component: Dialog,
        slot: dialogBody
      }
    });
    const dialogElement = getByTestId(dialogTestId);
    const dialogActionsElement = getByTestId(dialogActionsTestId);

    expect(dialogElement.innerHTML).toContain(title);
    expect(dialogElement.innerHTML).toContain(dialogBody);
    expect(dialogActionsElement).toBeDefined();
  });

  it('should close dialog on close icon click', async () => {
    const { getByTestId, component } = render(Dialog, {
      props: {
        visible: true,
        title
      }
    });
    const dialogCloseIconElement = getByTestId(dialogCloseIconTestId);
    expect(component.visible).toBe(true);

    await fireEvent.click(dialogCloseIconElement);
    expect(component.visible).toBe(false);
  });

  it('should close dialog on cancel button click', async () => {
    const { getByText, component } = render(Dialog, {
      props: {
        visible: true,
        title
      }
    });
    const dialogCancelButtonElement = getByText('Cancel');
    expect(component.visible).toBe(true);

    await fireEvent.click(dialogCancelButtonElement);
    expect(component.visible).toBe(false);
  });

  it('should render dialog with title and no actions', () => {
    const { getByTestId } = render(Dialog, {
      props: {
        visible: true,
        showActions: false,
        title
      }
    });
    const dialogElement = getByTestId(dialogTestId);

    expect(dialogElement.innerHTML).not.toContain('class="footer"');
  });

  it('should call callback on dialog cancel', async () => {
    const { getByText, component } = render(Dialog, {
      props: {
        visible: true,
        onCancel: () => alert('Dialog cancel'),
        title
      }
    });
    const dialogCancelButtonElement = getByText('Cancel');
    await fireEvent.click(dialogCancelButtonElement);

    expect(component.visible).toBe(false);
    expect(window.alert).toHaveBeenCalled();
  });

  it('should call callback on dialog close', async () => {
    const { getByTestId, component } = render(Dialog, {
      props: {
        visible: true,
        onCancel: () => alert('Dialog cancel'),
        title
      }
    });
    const dialogCloseIconElement = getByTestId(dialogCloseIconTestId);
    await fireEvent.click(dialogCloseIconElement);

    expect(component.visible).toBe(false);
    expect(window.alert).toHaveBeenCalled();
  });

  it('should call callback on dialog ok', async () => {
    const { getByText, component } = render(Dialog, {
      props: {
        visible: true,
        onCancel: () => alert('Dialog ok'),
        title
      }
    });
    const dialogOkButtonElement = getByText('Ok');
    await fireEvent.click(dialogOkButtonElement);

    expect(component.visible).toBe(true);
    expect(window.alert).toHaveBeenCalled();
  });
});