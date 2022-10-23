const template = `<script>
  import {Avatar} from "@specialdoom/proi-ui"
</script>
`;

export let withInitialsSource = `${template}

<Avatar initials="PU" />
`

export let withImageSource = `${template}

<Avatar image="image_url" />
`;

export let defaultAvatarsSource = `${template}

<Avatar.Lauren />
<Avatar.Tim />
<Avatar.Leo />
<Avatar.Nikita />
`;