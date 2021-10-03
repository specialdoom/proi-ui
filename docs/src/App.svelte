<script>
  import { ToastProvider } from 'proi-ui';
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';
</script>

<ToastProvider />
<Router {routes} />
