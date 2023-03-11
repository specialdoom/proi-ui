---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Avatar component

### Usage

```sveltehtml
<script>
 import {Avatar} from '@specialdoom/proi-ui';
</script>;

<Avatar initials="PI" />
<Avatar image="https://avatars.githubusercontent.com/u/41910815?v=4" />
```

### API

| Property | Description                                                                                | Type   | Default |
| -------- | ------------------------------------------------------------------------------------------ | ------ | ------- |
| initials | Initials to display                                                                        | string | ''      |
| variant  | Variant of avatar component. Options: `pine, neutral, makido, vivid, flame, tufts, bright` | string | 'pine'  |
| image    | Image source of avatar                                                                     | string | ``      |

### Default avatars

There are 4 default avatars: Lauren, Leo, Nikita and Tim. You can use them like

```sveltehtml
<Avatar.Leo />
<Avatar.Lauren />
<Avatar.Nikita />
<Avatar.Tim />
```
