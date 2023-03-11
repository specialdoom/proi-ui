const template = `<script>
  import Radio from "@specialdoom/proi-ui/Radio.svelte";
  
  let value = 0;
</script>
`;

export const defaultSource = `${template}
<Radio bind:group={value}>Radio label</Radio>
`;

export const checked = `${template}
<Radio {value} bind:group={value}>Radio label</Radio>
`;

export const disabled = `${template}
<Radio bind:group={value} disabled>Radio label</Radio>
`;

export const error = `${template}
<Radio bind:group={value} error>Radio label</Radio>
`;

export const bindGroup = `${template}
<Radio
  value={0}
  bind:group={value}
>
  🍎
</Radio>
<Radio
  value={1}
  bind:group={value}
>
  🥭
</Radio>
<Radio
  value={2}
  bind:group={value}
>
  🍐
</Radio>
`;
