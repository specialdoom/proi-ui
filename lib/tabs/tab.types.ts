import { Writable } from "svelte/store";

export type Pane = {
  index: number;
  title: string;
  disabled: boolean;
};

export type TabsContext = {
  registerPane: (pane: Pane) => void;
  selectTab: (tabIndex: number) => void;
  current: Writable<number>;
};
