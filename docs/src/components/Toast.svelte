<script>
  import { toaster, Button } from 'proi-ui';
  import Highlight from '../shared/Highlight.svelte';

  function notify(type) {
    toaster.send({
      message: 'Notification message',
      type: type
    });
  }
</script>

<div class="container">
  <div class="title color">Toast component</div>
  <div class="sub-title">
    <span class="color">#</span>
    Usage
  </div>
  <Highlight>
    {`
<script ✂prettier:content✂="CiAgICBpbXBvcnQgeyB0b2FzdGVyLCBCdXR0b24gfSBmcm9tICdwcm9pLXVpJwoKICAgIC8vIGFzc3VtaW5nIHlvdSBhZGRlZCBUb2FzdGVyUHJvdmlkZXIgdG8gbWFpbiBwYWdlCiAgICAgICAgCiAgICBmdW5jdGlvbiBub3RpZnkgKHR5cGUpIHsKICAgICAgICB0b2FzdGVyLnNlbmQoewogICAgICAgICAgICBtZXNzYWdlOiAiTm90aWZpY2F0aW9uIG1lc3NhZ2UiLAogICAgICAgICAgICB0eXBlOiB0eXBlCiAgICAgICAgfSk7CiAgICB9CiAgICAvLyBvciB1c2luZyBzcGVjaWZpYyBtZXRob2RzCg==">{}</script>
        
<Button on:click={() => notify("success")}>Success notification</Button>
<Button on:click={() => notify("info")}>Info notification</Button>
<Button on:click={() => notify("error")}>Error notification</Button>
<Button on:click={() => notify("warning")}>Warning notification</Button>
<Button on:click={() => toaster.succss("Notification message")}>Specific success notification specific</Button>
<Button on:click={() => toaster.info("Notification message")}>Specific info notification</Button>
<Button on:click={() => toaster.error("Notification message")}>Specific error notification</Button>
<Button on:click={() => toaster.warning("Notification message")}>Specific warning notification</Button>
    `}
  </Highlight>
  <div class="sub-title">
    <span class="color">#</span>
    Output
  </div>
  <div class="alert-content">
    <Button on:click={() => notify('success')}>Success notification</Button>
    <Button on:click={() => notify('info')}>Info notification</Button>
    <Button on:click={() => notify('error')}>Error notification</Button>
    <Button on:click={() => notify('warning')}>Warning notification</Button>
    <Button on:click={() => toaster.success('Notification message')}
      >Specific success notification specific</Button
    >
    <Button on:click={() => toaster.info('Notification message')}
      >Specific info notification</Button
    >
    <Button on:click={() => toaster.error('Notification message')}
      >Specific error notification</Button
    >
    <Button on:click={() => toaster.warning('Notification message')}
      >Specific warning notification</Button
    >
  </div>
  <div class="sub-title">
    <span class="color">#</span>
    Objects
  </div>
  <div style="overflow: auto">
    <div class="table">
      <div class="table-header">
        <div>Name</div>
        <div>Type</div>
        <div>Used for</div>
      </div>
      <div class="table-data">
        <div>
          <div>ToastProvider</div>
          <div>Component</div>
          <div>Providing toasts container. Added to main page.</div>
        </div>
        <div>
          <div>toaster</div>
          <div>Object</div>
          <div>Providing send method to send a toast</div>
        </div>
      </div>
    </div>
  </div>
  <div class="sub-title">
    <span class="color">#</span>
    toaster
  </div>
  Has the<b>send</b> method used to send a toast and takes an object parameter
  having 2 properties
  <div style="overflow: auto">
    <div class="table">
      <div class="table-header">
        <div>Property name</div>
        <div>Value</div>
        <div>Details</div>
      </div>
      <div class="table-data">
        <div>
          <div>message</div>
          <div>String value</div>
          <div>Message to display inside the toast</div>
        </div>
        <div>
          <div>type</div>
          <div>success, info, warning, error</div>
          <div>Type of toast</div>
        </div>
      </div>
    </div>
  </div>
  and the specific methods<b>error</b>,<b>info</b>,<b>warning</b> and
  <b>success</b>
  by passing a string message
  <div style="overflow: auto">
    <div class="table">
      <div class="table-header">
        <div>Property name</div>
        <div>Value</div>
        <div>Details</div>
      </div>
      <div class="table-data">
        <div>
          <div>message</div>
          <div>String value</div>
          <div>Message to display inside the toast</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .alert-content {
    margin-bottom: 10px;
  }
</style>
