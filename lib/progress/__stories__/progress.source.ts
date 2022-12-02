const template = `<script>
  import {Progress} from "@specialdoom/proi-ui";
</script>
`;

export const defaultSource = `${template}
<Progress />
`;

export const small = `${template}
<Progress
  small
  percent={37}
/>
`;

export const indeterminate = `${template}
<Progress indeterminate />
`;

export const ongoing = `${template}
<Progress percent={87} />
`;

export const complete = `${template}
<Progress percent={100} />
`;

export const error = `${template}
<Progress
  percent={50}
  error
/>
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
