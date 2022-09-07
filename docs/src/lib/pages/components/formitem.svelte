<script>
  import { FormItem, Input } from "@specialdoom/proi-ui";
  import { config } from "../../configs/components/form-item.js";
  import Docs from "../../components/Docs.svelte";
</script>

<Docs {config}>
  <FormItem label="First name">
    <Input placeholder="First name" />
  </FormItem>
  <FormItem
    label="Email"
    description="e.g. email@domain.com"
    error="Incorrect email!"
  >
    <Input value="email@" error />
  </FormItem>
</Docs>
