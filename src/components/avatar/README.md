---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Avatar component

### Usage

```sveltehtml
<script>
<script>
 import {Avatar} from 'proi-ui';
</script>;

<Avatar title="Proi Ui" description="Library" />
<Avatar
  title="specialdoom"
  description="creator"
  image="https://avatars.githubusercontent.com/u/41910815?v=4"
/>
```

### API

| Property    | Description                     | Type   | Default |
| ----------- | ------------------------------- | ------ | ------- |
| title       | Title of the avatar             | string | ''      |
| description | Short description of the avatar | string | ''      |
| image       | Source of avatar image          | string | ''      |
| class       | Class name for avatar container | string | ''      |
