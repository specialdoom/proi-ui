import type { ButtonVariant } from "../button.types";

const template = `<script>
  import Button from "@specialdoom/proi-ui/Button";
</script>
`;

export const defaultSource = `${template}
<Button>Click me</Button>
`;

export const disabledSource = `${template}
<Button disabled>Click me</Button>
`;

export const block = `${template}
<Button block>Click me</Button>
`;

export function variantButton(variant: ButtonVariant) {
  return `${template}
<Button variant="${variant}">Click me</Button>
`;
}

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
