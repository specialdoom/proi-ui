const template = `<script>
  import {Dropdown} from "@specialdoom/proi-ui";

  let options = [
    { label: "🍎", value: "🍎" },
    { label: "🥭", value: "🥭" }
  ];
</script>
`;

export const defaultSource = `${template}
<Dropdown {options} />
`;

export const opened = `${template}
Dropdown
  {options}
  open
/>
`;

export const withPlaceholder = `${template}
Dropdown
  {options}
  placeholder="Choose option"
/>
`;

export const disabled = `${template}
Dropdown
  {options}
  disabled
/>
`;

export const disabledWithSelectedOption = `${template}
Dropdown
  {options}
  disabled
  value="🍎"
/>
`;

export const error = `${template}
<Dropdown
  {options}
  error
/>
`;
