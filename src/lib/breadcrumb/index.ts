import BreadcrumbComponent from "./Breadcrumb.svelte";
import BreadcrumbItem from "./BreadcrumbItem.svelte";

const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Pane: BreadcrumbItem
});

export default Breadcrumb;
