---
[proi-ui](https://github.com/specialdoom/proi-ui)
### Usage
You should bind to Radio group attribute.
```sveltehtml
<script>
    import {Spinner} from 'proi-ui';
  </script>

  <Spinner />
  <Spinner small/>
  <Spinner labeled/>
  <Spinner labeled label="Custom label..."/>
  <Spinner labeled label="A quite long label for this spinner, but who cares?"/>
```
### Attributes
| Parameter | description | type | optional value | default value |
| --- | --- | --- | --- | --- |
| small | Small spinner | Boolean | - | false |
| labeled | Display label. Not working with small. | Boolean | - | false |
| label | Label for spinner | String | - | Loading... |