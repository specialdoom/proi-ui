import { render } from "@testing-library/svelte"
import FormItem from '../lib/form-item/FormItem.svelte';

describe('Form item component', () => {
  const formItemTestId = 'proi-form-item';
  const label = 'Label';
  const description = 'Description';
  const error = 'Error message';
  it('should render form item component with label only', () => {
    const { getByTestId } = render(FormItem, {
      props: {
        label
      }
    });
    const formItemElement = getByTestId(formItemTestId);

    expect(formItemElement.innerHTML).toContain(label);
    expect(formItemElement.innerHTML).not.toContain('proi-description');
    expect(formItemElement.innerHTML).not.toContain('proi-error');
  });

  it('should render form item component with label and description', () => {
    const { getByTestId } = render(FormItem, {
      props: {
        label,
        description
      }
    });

    const formItemElement = getByTestId(formItemTestId);
    expect(formItemElement.innerHTML).toContain(label);
    expect(formItemElement.innerHTML).toContain(description);
    expect(formItemElement.innerHTML).not.toContain('proi-error');
  });

  it('should render form item with label and error', () => {
    const { getByTestId } = render(FormItem, {
      props: {
        label,
        error
      }
    });

    const formItemElement = getByTestId(formItemTestId);
    expect(formItemElement.innerHTML).toContain(label);
    expect(formItemElement.innerHTML).toContain(error);
    expect(formItemElement.innerHTML).not.toContain('proi-description');
  });

  it('should render form item with label, description and error', () => {
    const { getByTestId } = render(FormItem, {
      props: {
        label,
        error,
        description
      }
    });

    const formItemElement = getByTestId(formItemTestId);
    expect(formItemElement.innerHTML).toContain(label);
    expect(formItemElement.innerHTML).toContain(description);
    expect(formItemElement.innerHTML).toContain(error);
  });
});