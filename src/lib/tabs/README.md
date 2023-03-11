---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Tabs component

### Usage

```sveltehtml
<script>
  import Tabs from '@specialdoom/proi-ui/tabs';
</script>

<Tabs>
  <Tabs.Pane index={0} title="Tab 1">
    Pane 1 content
  </Tabs.Pane>
  <Tabs.Pane index={2} title="Tab 2">
    Pane 2 content
  </Tabs.Pane>
</Tabs>
```

### API

| Property | Description                  | Type    | Default   |
| -------- | ---------------------------- | ------- | --------- |
| index    | Index of tab pane (required) | number  | undefined |
| title    | Title of tab (required)      | string  | undefined |
| disabled | Whether the tab is disabled  | boolean | false     |
