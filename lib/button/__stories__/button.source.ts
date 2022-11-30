const template = `<script>
  import {Button} from "@specialdoom/proi-ui";
</script>
`;

export const defaultSource = `${template}
<Button>Click me</Button>
`;

export const secondary = `${template}
<Button variant="secondary">Click me</Button>
`;

export const ghost = `${template}
<Button variant="ghost">Click me</Button>
`;

export const danger = `${template}
<Button variant="danger">Click me</Button>
`;

export const disabled = `${template}
<Button disabled>Click me</Button>
`;

export const block = `${template}
<Button block>Click me</Button>
`;

export const withGap = `${template}
<Button>
  <span>🍕</span>
  Click me
</Button>
`;

export const onEvents = `${template}
<Button 
  on:click={() => console.log("click")} 
  on:keyup={() => console.log("keyup")} 
  on:keydown={() => console.log("keydown")} 
 >
  Click me
</Button>
`;
