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
<Avatar.Leo />
```

### API

| Property    | Description                                                           | Type   | Default |
| ----------- | --------------------------------------------------------------------- | ------ | ------- |
| initials       | Initials to display                                                   | string | ''      |
| color | Text color of avatar. Available when `initials` not empty                                       | string | #EFF1F3      |
| background       | Background color of avatar. Available when `initials` not empty                                                | string | '#357266'      |
| image   | Image source of avatar | string | ``  |
