<script>
  import { ToastProvider } from '@specialdoom/proi-ui';
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';
  const config = {
    urlTransform: {
      apply: (url) => `/proi-ui${url}`, //external URL
      remove: (url) => url.replace('/proi-ui', '') //internal URL
    }
  };
</script>

<ToastProvider />
<Router {routes} {config} />
