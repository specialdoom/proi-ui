import { render } from "@testing-library/svelte";
import Avatar from '../lib/avatar/index.js';

describe('Avatar component', () => {
  const initials = 'CI';
  const testId = 'proi-avatar';

  it('should render pine Avatar with empty initials', () => {
    const { getByTestId } = render(Avatar);
    const avatarElement = getByTestId(testId);

    expect(avatarElement.innerHTML).toBe('');
    expect(avatarElement.className).toContain('pine');
  });

  ['pine', 'makido', 'vivid', 'flame', 'neutral', 'tufts'].forEach(variant => {
    it(`should render ${variant} Avatar with empty initials`, () => {
      const { getByTestId } = render(Avatar, { props: { variant } });
      const avatarElement = getByTestId(testId);

      expect(avatarElement.className).toContain(variant);
      expect(avatarElement.innerHTML).toBe('');
    });
  });

  it('should render pine Avatar with custom initials', () => {
    const { getByTestId } = render(Avatar, { props: { initials } });
    const avatarElement = getByTestId(testId);

    expect(avatarElement.innerHTML).toBe('CI');
    expect(avatarElement.className).toContain('pine');
  });

  [
    { component: Avatar.Lauren, name: 'lauren' },
    { component: Avatar.Tim, name: 'tim' },
    { component: Avatar.Nikita, name: 'nikita' },
    { component: Avatar.Leo, name: 'leo' }
  ].forEach(defaultAvatar => {
    it('shoudl render default avatars', () => {
      const { getByTestId } = render(defaultAvatar.component);
      const defaultAvatarElement = getByTestId('proi-default-avatar');

      expect(defaultAvatarElement.getAttribute('data-name')).toBe(defaultAvatar.name);
    });
  });
});