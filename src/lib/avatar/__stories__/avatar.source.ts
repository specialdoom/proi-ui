const template = `<script>
  import Avatar from "@specialdoom/proi-ui/avatar";
</script>
`;

export const withInitialsSource = `${template}

<Avatar initials="PU" />
`;

export const withImageSource = `${template}

<Avatar image="image_url" />
`;

export const defaultAvatarsSource = `${template}

<Avatar.Lauren />
<Avatar.Tim />
<Avatar.Leo />
<Avatar.Nikita />
`;
