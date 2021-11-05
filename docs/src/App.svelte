<script>
  import { ToastProvider } from '../../src';
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';
</script>

<ToastProvider />
<Router {routes} />
