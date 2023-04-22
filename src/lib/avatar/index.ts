import AvatarComponent from "./Avatar.svelte";
import Leo from "./defaults/Leo.svelte";
import Lauren from "./defaults/Lauren.svelte";
import Tim from "./defaults/Tim.svelte";
import Nikita from "./defaults/Nikita.svelte";

const Avatar = Object.assign(AvatarComponent, {
  Leo,
  Nikita,
  Lauren,
  Tim
});

export default Avatar;
