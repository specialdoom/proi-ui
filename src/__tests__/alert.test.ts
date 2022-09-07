import { render } from '@testing-library/svelte';
import { create_slot } from 'svelte/internal';
import type { AlertVariant } from '../lib/alert/alert.types.js';
//@ts-ignore
import Alert from '$lib/alert/Alert.svelte';

describe('Alert component', () => {
  it('should render default alert with default title', () => {
    const { getByTestId } = render(Alert);
    const alertTitle = getByTestId('proi-alert-title').innerHTML;

    expect(alertTitle).toBe('Alert');
  });

  const variants: AlertVariant[] = ['success', 'error', 'info', 'warning'];

  variants.forEach(variant => {
    it(`it should render ${variant} alert with default title`, () => {
      const { getByTestId } = render(Alert, {
        props: {
          variant
        }
      })
      const alertElementClass = getByTestId('proi-alert').className;

      expect(alertElementClass).toContain(variant);
    });
  });

  it('should render success alert with custom title', () => {
    const title = "Custom title";
    const { getByTestId } = render(Alert, { props: { title } });
    const alertTitle = getByTestId('proi-alert-title').innerHTML;

    expect(alertTitle).toBe(title);
  });
});