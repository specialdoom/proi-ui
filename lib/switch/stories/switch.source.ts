const template = `<script>
  import {Switch} from "@specialdoom/proi-ui";
</script>
`;

export const defaultSource = `${template}
<Switch />
`;

export const withLabel = `${template}
<Switch>Switch label</Switch>
`;

export const checked = `${template}
<Switch checked>Switch label</Switch>
`;

export const disabled = `${template}
<Switch disabled>Switch label</Switch>
`;

export const error = `${template}
<Switch error>Switch label</Switch>
`;

export const checkedAndDisabled = `${template}
 <Switch
   checked
   disabled
 >
   Switch label
 </Switch>
`;
