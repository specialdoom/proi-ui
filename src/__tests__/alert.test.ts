import { render } from '@testing-library/svelte';
import Alert from '../lib/alert/Alert.svelte';
import SlotWrapper from './SlotWrapper.svelte';

describe('Alert component', () => {
  const title = 'Custom title';
  const description = 'Custom description';
  const alertTestId = 'proi-alert';
  const alertTitleTestId = 'proi-alert-title';
  const alertDescriptionId = 'proi-alert-description';

  it('should render success alert with custom title', () => {
    const { getByTestId } = render(Alert, { props: { title } });
    const alertTitleElement = getByTestId(alertTitleTestId);
    const alertElement = getByTestId(alertTestId);

    expect(alertElement.className).toContain('success');
    expect(alertTitleElement.innerHTML).toBe('Custom title');
  });

  ['success', 'error', 'info', 'warning'].forEach(variant => {
    it(`it should render ${variant} alert with custom title`, () => {
      const { getByTestId } = render(Alert, {
        props: {
          variant,
          title
        }
      })
      const alertElementClass = getByTestId(alertTestId).className;

      expect(alertElementClass).toContain(variant);
    });
  });

  it('should render success alert with custom title and custom description', () => {
    const { getByTestId } = render(SlotWrapper, {
      props: {
        componentProps: {
          title
        },
        component: Alert,
        slot: description
      }
    });
    const alertDescriptionElement = getByTestId(alertDescriptionId);
    const alertTitleElement = getByTestId(alertTitleTestId);
    const alertElement = getByTestId(alertTestId);

    expect(alertElement.className).toContain('success');
    expect(alertTitleElement.innerHTML).toBe(title);
    expect(alertDescriptionElement.innerHTML).toBe(description);
  });
});