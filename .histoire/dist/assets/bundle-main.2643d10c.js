import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, w as withCtx, a as createBaseVNode, b as renderSlot, n as normalizeClass, e as withKeys, m as mergeProps, f as watch, s as scrollIntoView, g as onMounted, u as useCssVars, h as unref, i as computed, j as useRoute, k as ref, l as createElementBlock, p as createVNode, I as Icon, t as toDisplayString, q as createCommentVNode, v as createRouter, x as createWebHistory, y as createWebHashHistory, z as defineStore, A as useStorage, F as Fragment, B as renderList, C as onUnmounted, D as withModifiers, E as normalizeStyle, G as useEventListener, H as isRef, J as resolveDirective, K as withDirectives, L as useMediaQuery, T as Transition, M as createTextVNode, N as pushScopeId, O as popScopeId, P as defineAsyncComponent, Q as vShow, R as reactive, S as useTitle, U as createApp, V as createPinia, W as plugin } from "./vendor.9762286d.js";
import { _ as __vitePreload, h as histoireConfig, i as isDark, c as customLogos, t as toggleDark, f as files, m as mapFile, a as tree, b as _sfc_main$e } from "./GenericMountStory.vue_vue_type_script_setup_true_lang.c2e15f4e.js";
const style$1 = "";
const style = "";
const __resolved__virtual_$histoireTheme = "";
const _sfc_main$d = defineComponent({
  inheritAttrs: false,
  props: {
    isActive: {
      type: Boolean,
      default: void 0
    }
  },
  emits: {
    navigate: () => true
  },
  setup(props, { emit }) {
    function handleNavigate(event, navigate) {
      emit("navigate");
      navigate(event);
    }
    return {
      handleNavigate
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$d = ["href", "onClick", "onKeyup"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createBlock(_component_RouterLink, mergeProps(_ctx.$attrs, { custom: "" }), {
    default: withCtx(({ isActive: linkIsActive, href, navigate }) => [
      createBaseVNode("a", {
        href,
        class: normalizeClass(["htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          (_ctx.isActive != null ? _ctx.isActive : linkIsActive) ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: ($event) => _ctx.handleNavigate($event, navigate),
        onKeyup: [
          withKeys(($event) => _ctx.handleNavigate($event, navigate), ["enter"]),
          withKeys(($event) => _ctx.handleNavigate($event, navigate), ["space"])
        ]
      }, [
        renderSlot(_ctx.$slots, "default", {
          active: _ctx.isActive != null ? _ctx.isActive : linkIsActive
        })
      ], 42, _hoisted_1$d)
    ]),
    _: 3
  }, 16);
}
const BaseListItemLink = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render]]);
function useScrollOnActive(active, el) {
  watch(active, (value) => {
    if (value) {
      autoScroll();
    }
  });
  function autoScroll() {
    if (el.value) {
      scrollIntoView(el.value, {
        scrollMode: "if-needed",
        block: "center",
        inline: "nearest",
        behavior: "smooth"
      });
    }
  }
  onMounted(() => {
    if (active.value) {
      autoScroll();
    }
  });
  return {
    autoScroll
  };
}
const _hoisted_1$c = { class: "bind-tree-margin htw-flex htw-items-center htw-gap-2 htw-pl-4 htw-min-w-0" };
const _hoisted_2$7 = { class: "htw-truncate" };
const _hoisted_3$6 = {
  key: 0,
  class: "htw-opacity-40 htw-text-sm"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "StoryListItem",
  props: {
    story: null,
    depth: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "7f500e3a": unref(filePadding),
      "6930c8c2": __props.story.iconColor
    }));
    const filePadding = computed(() => {
      return props.depth * 12 + "px";
    });
    const route = useRoute();
    const isActive = computed(() => route.params.storyId === props.story.id);
    const el = ref();
    useScrollOnActive(isActive, el);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        "data-test-id": "story-list-item"
      }, [
        createVNode(BaseListItemLink, {
          to: {
            name: "story",
            params: {
              storyId: __props.story.id
            }
          },
          class: "htw-pl-0.5 htw-pr-2 htw-py-2 md:htw-py-1.5 htw-mx-1 htw-rounded-sm"
        }, {
          default: withCtx(({ active }) => {
            var _a;
            return [
              createBaseVNode("span", _hoisted_1$c, [
                createVNode(unref(Icon), {
                  icon: (_a = __props.story.icon) != null ? _a : "carbon:cube",
                  class: normalizeClass(["htw-w-5 htw-h-5 sm:htw-w-4 sm:htw-h-4 htw-flex-none", {
                    "htw-text-primary-500": !active && !__props.story.iconColor,
                    "bind-icon-color": !active && __props.story.iconColor
                  }])
                }, null, 8, ["icon", "class"]),
                createBaseVNode("span", _hoisted_2$7, toDisplayString(__props.story.title), 1)
              ]),
              !__props.story.docsOnly ? (openBlock(), createElementBlock("span", _hoisted_3$6, toDisplayString(__props.story.variants.length), 1)) : createCommentVNode("", true)
            ];
          }),
          _: 1
        }, 8, ["to"])
      ], 512);
    };
  }
});
const StoryListItem = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-d1a05247"]]);
const base = "/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.0c8b0385.js"), true ? ["assets/HomeView.0c8b0385.js","assets/GenericMountStory.vue_vue_type_script_setup_true_lang.c2e15f4e.js","assets/vendor.9762286d.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.43040a68.js"), true ? ["assets/StoryView.43040a68.js","assets/vendor.9762286d.js","assets/BaseEmpty.4d3e8856.js","assets/state.61ab8ad4.js","assets/GenericMountStory.vue_vue_type_script_setup_true_lang.c2e15f4e.js"] : void 0)
    }
  ]
});
const useStoryStore = defineStore("story", () => {
  const stories = ref([]);
  function setStories(value) {
    stories.value = value;
  }
  const currentStory = computed(() => stories.value.find((s) => s.id === router.currentRoute.value.params.storyId));
  const currentVariant = computed(() => {
    var _a;
    return (_a = currentStory.value) == null ? void 0 : _a.variants.find((v) => v.id === router.currentRoute.value.query.variantId);
  });
  const maps = computed(() => {
    const storyMap = /* @__PURE__ */ new Map();
    const variantMap = /* @__PURE__ */ new Map();
    for (const story of stories.value) {
      storyMap.set(story.id, story);
      for (const variant of story.variants) {
        variantMap.set(`${story.id}:${variant.id}`, variant);
      }
    }
    return {
      stories: storyMap,
      variants: variantMap
    };
  });
  function getStoryById(id) {
    return maps.value.stories.get(id);
  }
  function getVariantById(idWithStoryId) {
    return maps.value.variants.get(idWithStoryId);
  }
  return {
    stories,
    setStories,
    currentStory,
    currentVariant,
    getStoryById,
    getVariantById
  };
});
const useFolderStore = defineStore("folder", () => {
  const openedFolders = useStorage(
    "_histoire-tree-state",
    /* @__PURE__ */ new Map()
  );
  function getStringPath(path) {
    return path.join("\u241C");
  }
  function toggleFolder(path, defaultToggleValue = true) {
    const stringPath = getStringPath(path);
    const currentValue = openedFolders.value.get(stringPath);
    if (currentValue == null) {
      setFolderOpen(stringPath, defaultToggleValue);
    } else if (currentValue) {
      setFolderOpen(stringPath, false);
    } else {
      setFolderOpen(stringPath, true);
    }
  }
  function setFolderOpen(path, value) {
    const stringPath = typeof path === "string" ? path : getStringPath(path);
    openedFolders.value.set(stringPath, value);
  }
  function isFolderOpened(path, defaultValue = false) {
    const value = openedFolders.value.get(getStringPath(path));
    if (value == null) {
      return defaultValue;
    }
    return value;
  }
  function openFileFolders(path) {
    for (let pathLength = 1; pathLength < path.length; pathLength++) {
      setFolderOpen(path.slice(0, pathLength), true);
    }
  }
  const storyStore = useStoryStore();
  watch(() => storyStore.currentStory, (story) => {
    if (story) {
      openFileFolders(story.file.path);
    }
  });
  return {
    isFolderOpened,
    toggleFolder
  };
});
const _hoisted_1$b = { "data-test-id": "story-list-folder" };
const _hoisted_2$6 = ["onKeyup"];
const _hoisted_3$5 = { class: "bind-tree-padding htw-flex htw-items-center htw-gap-2 htw-min-w-0" };
const _hoisted_4$2 = { class: "htw-flex htw-flex-none htw-items-center" };
const _hoisted_5$1 = { class: "htw-truncate" };
const _hoisted_6 = { key: 0 };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "StoryListFolder",
  props: {
    path: { default: () => [] },
    folder: null,
    stories: null,
    depth: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "a50b6116": unref(folderPadding)
    }));
    const folderStore = useFolderStore();
    const folderPath = computed(() => [...props.path, props.folder.title]);
    const isFolderOpen = computed(() => folderStore.isFolderOpened(folderPath.value));
    function toggleOpen() {
      folderStore.toggleFolder(folderPath.value);
    }
    const folderPadding = computed(() => {
      return props.depth * 12 + "px";
    });
    return (_ctx, _cache) => {
      const _component_StoryListFolder = resolveComponent("StoryListFolder", true);
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createBaseVNode("div", {
          role: "button",
          tabindex: "0",
          class: "htw-px-0.5 htw-py-2 md:htw-py-1.5 htw-mx-1 htw-rounded-sm hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900 htw-cursor-pointer htw-select-none htw-flex",
          onClick: toggleOpen,
          onKeyup: [
            withKeys(toggleOpen, ["enter"]),
            withKeys(toggleOpen, ["space"])
          ]
        }, [
          createBaseVNode("span", _hoisted_3$5, [
            createBaseVNode("span", _hoisted_4$2, [
              createVNode(unref(Icon), {
                icon: "carbon:caret-right",
                class: normalizeClass(["htw-w-4 htw-h-4 htw-transition-transform htw-duration-150 htw-opacity-30", {
                  "htw-rotate-90": unref(isFolderOpen)
                }])
              }, null, 8, ["class"]),
              createVNode(unref(Icon), {
                icon: "carbon:folder",
                class: "htw-w-5 htw-h-5 sm:htw-w-4 sm:htw-h-4"
              })
            ]),
            createBaseVNode("span", _hoisted_5$1, toDisplayString(__props.folder.title), 1)
          ])
        ], 40, _hoisted_2$6),
        unref(isFolderOpen) ? (openBlock(), createElementBlock("div", _hoisted_6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.folder.children, (element) => {
            return openBlock(), createElementBlock(Fragment, {
              key: element.title
            }, [
              element.children ? (openBlock(), createBlock(_component_StoryListFolder, {
                key: 0,
                path: unref(folderPath),
                folder: element,
                stories: __props.stories,
                depth: __props.depth + 1
              }, null, 8, ["path", "folder", "stories", "depth"])) : (openBlock(), createBlock(StoryListItem, {
                key: 1,
                story: __props.stories[element.index],
                depth: __props.depth + 1
              }, null, 8, ["story", "depth"]))
            ], 64);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const StoryListFolder = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-41fb5f7e"]]);
const _hoisted_1$a = {
  "data-test-id": "story-group",
  class: "htw-my-2 first:htw-mt-0 last:htw-mb-0"
};
const _hoisted_2$5 = ["onKeyup"];
const _hoisted_3$4 = { class: "htw-truncate htw-opacity-50" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("span", { class: "htw-h-[1px] htw-flex-1 htw-bg-gray-500/10 htw-mx-2" }, null, -1);
const _hoisted_5 = { key: 1 };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "StoryGroup",
  props: {
    path: { default: () => [] },
    group: null,
    stories: null
  },
  setup(__props) {
    const props = __props;
    const folderStore = useFolderStore();
    const folderPath = computed(() => [...props.path, props.group.title]);
    const isFolderOpen = computed(() => folderStore.isFolderOpened(folderPath.value, true));
    function toggleOpen() {
      folderStore.toggleFolder(folderPath.value, false);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        __props.group.title ? (openBlock(), createElementBlock("div", {
          key: 0,
          role: "button",
          tabindex: "0",
          class: "htw-px-0.5 htw-py-2 md:htw-py-1.5 htw-mx-1 htw-rounded-sm hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900 htw-cursor-pointer htw-select-none htw-flex htw-items-center htw-gap-1 htw-min-w-0",
          onClick: toggleOpen,
          onKeyup: [
            withKeys(toggleOpen, ["enter"]),
            withKeys(toggleOpen, ["space"])
          ]
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:caret-right",
            class: normalizeClass(["htw-w-4 htw-h-4 htw-transition-transform htw-duration-150 htw-opacity-30 htw-flex-none", {
              "htw-rotate-90": unref(isFolderOpen)
            }])
          }, null, 8, ["class"]),
          createBaseVNode("span", _hoisted_3$4, toDisplayString(__props.group.title), 1),
          _hoisted_4$1
        ], 40, _hoisted_2$5)) : createCommentVNode("", true),
        unref(isFolderOpen) ? (openBlock(), createElementBlock("div", _hoisted_5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.group.children, (element) => {
            return openBlock(), createElementBlock(Fragment, {
              key: element.title
            }, [
              element.children ? (openBlock(), createBlock(StoryListFolder, {
                key: 0,
                path: unref(folderPath),
                folder: element,
                stories: __props.stories,
                depth: 0
              }, null, 8, ["path", "folder", "stories"])) : (openBlock(), createBlock(StoryListItem, {
                key: 1,
                story: __props.stories[element.index],
                depth: 0
              }, null, 8, ["story"]))
            ], 64);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$9 = { class: "htw-overflow-y-auto" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "StoryList",
  props: {
    tree: null,
    stories: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tree, (element) => {
          return openBlock(), createElementBlock(Fragment, {
            key: element.title
          }, [
            element.group ? (openBlock(), createBlock(_sfc_main$a, {
              key: 0,
              group: element,
              stories: __props.stories
            }, null, 8, ["group", "stories"])) : element.children ? (openBlock(), createBlock(StoryListFolder, {
              key: 1,
              folder: element,
              stories: __props.stories
            }, null, 8, ["folder", "stories"])) : (openBlock(), createBlock(StoryListItem, {
              key: 2,
              story: __props.stories[element.index]
            }, null, 8, ["story"]))
          ], 64);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$8 = ["onMousedown"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "BaseSplitPane",
  props: {
    orientation: {
      type: String,
      default: "landscape",
      validator: (value) => ["landscape", "portrait"].includes(value)
    },
    defaultSplit: {
      type: Number,
      default: 50
    },
    split: {
      type: Number,
      default: void 0
    },
    min: {
      type: Number,
      default: 20
    },
    max: {
      type: Number,
      default: 80
    },
    draggerOffset: {
      type: String,
      default: "center",
      validator: (value) => ["before", "center", "after"].includes(value)
    },
    saveId: {
      type: String,
      default: null
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:split": (value) => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const SAVE_PREFIX = "__histoire";
    const currentSplit = ref(props.defaultSplit);
    watch(() => props.split, (value) => {
      if (value !== void 0) {
        currentSplit.value = value;
      }
    }, {
      immediate: true
    });
    if (props.saveId) {
      const storageKey = `${SAVE_PREFIX}-split-pane-${props.saveId}`;
      const savedValue = localStorage.getItem(storageKey);
      if (savedValue != null) {
        let parsedValue;
        try {
          parsedValue = JSON.parse(savedValue);
        } catch (e) {
          console.error(e);
        }
        if (typeof parsedValue === "number") {
          currentSplit.value = parsedValue;
        }
      }
      watch(currentSplit, (value) => {
        localStorage.setItem(storageKey, JSON.stringify(value));
      });
      watch(currentSplit, (value) => {
        if (value !== props.split) {
          emit("update:split", value);
        }
      }, {
        immediate: true
      });
    }
    const boundSplit = computed(() => {
      if (currentSplit.value < props.min) {
        return props.min;
      } else if (currentSplit.value > props.max) {
        return props.max;
      } else {
        return currentSplit.value;
      }
    });
    const leftStyle = computed(() => ({
      [props.orientation === "landscape" ? "width" : "height"]: props.fixed ? `${boundSplit.value}px` : `${boundSplit.value}%`
    }));
    const rightStyle = computed(() => ({
      [props.orientation === "landscape" ? "width" : "height"]: props.fixed ? null : `${100 - boundSplit.value}%`
    }));
    const dragging = ref(false);
    let startPosition = 0;
    let startSplit = 0;
    const el = ref(null);
    function dragStart(e) {
      dragging.value = true;
      startPosition = props.orientation === "landscape" ? e.pageX : e.pageY;
      startSplit = boundSplit.value;
      window.addEventListener("mousemove", dragMove);
      window.addEventListener("mouseup", dragEnd);
    }
    function dragMove(e) {
      if (dragging.value) {
        let position;
        let totalSize;
        if (props.orientation === "landscape") {
          position = e.pageX;
          totalSize = el.value.offsetWidth;
        } else {
          position = e.pageY;
          totalSize = el.value.offsetHeight;
        }
        const dPosition = position - startPosition;
        if (props.fixed) {
          currentSplit.value = startSplit + dPosition;
        } else {
          currentSplit.value = startSplit + ~~(dPosition / totalSize * 200) / 2;
        }
      }
    }
    function dragEnd() {
      dragging.value = false;
      removeDragListeners();
    }
    function removeDragListeners() {
      window.removeEventListener("mousemove", dragMove);
      window.removeEventListener("mouseup", dragEnd);
    }
    onUnmounted(() => {
      removeDragListeners();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: normalizeClass(["htw-flex htw-h-full htw-isolate htw-overflow-auto", {
          "htw-flex-col": __props.orientation === "portrait",
          "htw-cursor-ew-resize": dragging.value && __props.orientation === "landscape",
          "htw-cursor-ns-resize": dragging.value && __props.orientation === "portrait",
          [__props.orientation]: true
        }])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["htw-relative htw-top-0 htw-left-0 htw-z-20", {
            "htw-pointer-events-none": dragging.value,
            "htw-border-r htw-border-gray-300/30 dark:htw-border-gray-800": __props.orientation === "landscape",
            "htw-flex-none": __props.fixed
          }]),
          style: normalizeStyle(unref(leftStyle))
        }, [
          renderSlot(_ctx.$slots, "first", {}, void 0, true),
          createBaseVNode("div", {
            class: normalizeClass(["dragger htw-absolute htw-z-100 hover:htw-bg-primary-500/50 htw-transition-colors htw-duration-150 htw-delay-150", {
              "htw-top-0 htw-bottom-0 htw-cursor-ew-resize": __props.orientation === "landscape",
              "htw-left-0 htw-right-0 htw-cursor-ns-resize": __props.orientation === "portrait",
              [`dragger-offset-${__props.draggerOffset}`]: true,
              "htw-bg-primary-500/25": dragging.value
            }]),
            onMousedown: withModifiers(dragStart, ["prevent"])
          }, null, 42, _hoisted_1$8)
        ], 6),
        createBaseVNode("div", {
          class: normalizeClass(["htw-relative htw-bottom-0 htw-right-0", {
            "htw-pointer-events-none": dragging.value,
            "htw-border-t htw-border-gray-300/30 dark:htw-border-gray-800": __props.orientation === "portrait",
            "htw-flex-1": __props.fixed
          }]),
          style: normalizeStyle(unref(rightStyle))
        }, [
          renderSlot(_ctx.$slots, "last", {}, void 0, true)
        ], 6)
      ], 2);
    };
  }
});
const BaseSplitPane = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-bb6c600c"]]);
const HistoireLogoDark = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMTUzNiIKICAgaGVpZ2h0PSI1MTIiCiAgIHZpZXdCb3g9IjAgMCAxNTM2IDUxMiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNSIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8ZwogICAgIGlkPSJsYXllcjEiPgogICAgPHJlY3QKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuNTtmaWxsOiMzNGQzOTk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjEuMDAzNzUiCiAgICAgICBpZD0icmVjdDEzNzIiCiAgICAgICB3aWR0aD0iMzE0LjMwOTIzIgogICAgICAgaGVpZ2h0PSI0MDYuNjA5MDEiCiAgICAgICB4PSItMjYuNTY1MDYzIgogICAgICAgeT0iMTM0Ljc1MDc5IgogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoLTIzLjgyMTI2MikiCiAgICAgICByeT0iOCIgLz4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDojMzRkMzk5O2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDoxLjAwMzc1IgogICAgICAgaWQ9InJlY3Q4NTAiCiAgICAgICB3aWR0aD0iMzE0LjMwOTIzIgogICAgICAgaGVpZ2h0PSI0MDYuNjA5MDEiCiAgICAgICB4PSI3Ny41NzE4MzgiCiAgICAgICB5PSI3Mi44MDg3MDgiCiAgICAgICByeT0iOCIKICAgICAgIHRyYW5zZm9ybT0icm90YXRlKC00LjU3NDQ1MzQpIiAvPgogIDwvZz4KICA8ZwogICAgIGlkPSJsYXllcjMiPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoMTY1Ny0zIgogICAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6I2FkZWRkNjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2FkZWRkNjtzdHJva2Utd2lkdGg6OC4zNDkyMztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAzNTkuMzg5NDcsMzU1Ljk1MTM0IDMyMC43MjkzNSwxNzYuNTI5NDIgMjM4LjM0NjEzLDIzOC45NDExOCBaIE0gMjczLjY0MTI0LDI3My4wNjYwOCAxNTIuNTk3ODgsMTU2LjA1NTkxIDE5MS4yNTgwNCwzMzUuNDc3ODYgWiIgLz4KICAgIDxnCiAgICAgICBhcmlhLWxhYmVsPSJIaXN0b2lyZSIKICAgICAgIGlkPSJ0ZXh0MTgyMS00IgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZToyMzEuOTI2cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpTZW47LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpTZW47ZmlsbDojYWRlZGQ2O2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDo1Ljc5ODEzIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4xNTAwNTU2LDAsMCwxLjE1MDA1NTYsLTEwNS40MDE1NiwtMzguNDE0MjMzKSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gNjkzLjg3NTkxLDM0NC4yNDc4MyBWIDE4MS44OTk2NCBoIDI1LjA0ODAxIHYgMTYyLjM0ODE5IHogbSAtMTA1Ljk5MDE4LDAgViAxODEuODk5NjQgaCAyNS4wNDgwMSB2IDE2Mi4zNDgxOSB6IG0gMTAuOTAwNTIsLTY4Ljg4MjAyIHYgLTI0LjEyMDMgaCAxMDYuMjIyMTEgdiAyNC4xMjAzIHoiCiAgICAgICAgIHN0eWxlPSJmb250LWZhbWlseTonTGV4ZW5kIERlY2EnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0xleGVuZCBEZWNhJztmaWxsOiNhZGVkZDY7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICAgIGlkPSJwYXRoMTY4NTciIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gNzYyLjI5NCwzNDQuMjQ3ODMgViAyMjIuNDg2NjkgaCAyMy44ODgzOCB2IDEyMS43NjExNCB6IG0gMTEuNTk2MywtMTQ4LjY2NDU2IHEgLTcuNjUzNTYsMCAtMTEuODI4MjIsLTMuOTQyNzQgLTQuMTc0NjcsLTMuOTQyNzQgLTQuMTc0NjcsLTExLjEzMjQ1IDAsLTYuNzI1ODUgNC4xNzQ2NywtMTAuOTAwNTIgNC40MDY1OSwtNC4xNzQ2NyAxMS44MjgyMiwtNC4xNzQ2NyA3LjY1MzU2LDAgMTEuODI4MjMsMy45NDI3NCA0LjE3NDY2LDMuOTQyNzUgNC4xNzQ2NiwxMS4xMzI0NSAwLDYuNzI1ODUgLTQuNDA2NTksMTAuOTAwNTIgLTQuMTc0NjcsNC4xNzQ2NyAtMTEuNTk2Myw0LjE3NDY3IHoiCiAgICAgICAgIHN0eWxlPSJmb250LWZhbWlseTonTGV4ZW5kIERlY2EnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0xleGVuZCBEZWNhJztmaWxsOiNhZGVkZDY7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICAgIGlkPSJwYXRoMTY4NTkiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gODYzLjQxMzcxLDM0Ni41NjcwOSBxIC0xNS4zMDcxMSwwIC0yNy41OTkxOSwtNS4zMzQyOSAtMTIuMjkyMDgsLTUuMzM0MyAtMjAuNDA5NDksLTE1Ljc3MDk3IGwgMTYuMjM0ODIsLTEzLjkxNTU2IHEgNi45NTc3OCw4LjExNzQxIDE1LjA3NTE5LDExLjgyODIyIDguMzQ5MzQsMy40Nzg4OSAxOC43ODYwMSwzLjQ3ODg5IDQuMTc0NjYsMCA3LjY1MzU1LC0wLjkyNzcgMy43MTA4MiwtMS4xNTk2MyA2LjI2MjAxLC0zLjI0Njk2IDIuNzgzMTEsLTIuMDg3MzQgNC4xNzQ2NiwtNC44NzA0NSAxLjM5MTU2LC0zLjAxNTA0IDEuMzkxNTYsLTYuNDkzOTMgMCwtNi4wMzAwNyAtNC40MDY1OSwtOS43NDA4OSAtMi4zMTkyNiwtMS42MjM0OCAtNy40MjE2NCwtMy40Nzg4OSAtNC44NzA0NCwtMi4wODczMyAtMTIuNzU1OTMsLTQuMTc0NjcgLTEzLjQ1MTcsLTMuNDc4ODkgLTIyLjAzMjk3LC03Ljg4NTQ4IC04LjU4MTI2LC00LjQwNjYgLTEzLjIxOTc4LC05Ljk3MjgyIC0zLjQ3ODg5LC00LjQwNjU5IC01LjEwMjM3LC05LjUwODk3IC0xLjYyMzQ4LC01LjMzNDI5IC0xLjYyMzQ4LC0xMS41OTYyOSAwLC03LjY1MzU2IDMuMjQ2OTYsLTEzLjkxNTU2IDMuNDc4ODksLTYuNDkzOTMgOS4yNzcwNCwtMTEuMTMyNDUgNi4wMzAwOCwtNC44NzA0NSAxMy45MTU1NiwtNy40MjE2MyA4LjExNzQxLC0yLjU1MTE5IDE3LjE2MjUzLC0yLjU1MTE5IDguNTgxMjYsMCAxNi45MzA1OSwyLjMxOTI2IDguNTgxMjYsMi4zMTkyNiAxNS43NzA5Nyw2LjcyNTg1IDcuMTg5NzEsNC40MDY2IDEyLjA2MDE1LDEwLjQzNjY3IGwgLTEzLjY4MzYzLDE1LjA3NTE5IHEgLTQuNDA2NiwtNC40MDY1OSAtOS43NDA4OSwtNy42NTM1NSAtNS4xMDIzNywtMy40Nzg4OSAtMTAuNDM2NjcsLTUuMzM0MyAtNS4zMzQzLC0xLjg1NTQxIC05Ljc0MDg5LC0xLjg1NTQxIC00Ljg3MDQ1LDAgLTguODEzMTksMC45Mjc3IC0zLjk0Mjc0LDAuOTI3NzEgLTYuNzI1ODYsMi43ODMxMiAtMi41NTExOCwxLjg1NTQgLTMuOTQyNzQsNC42Mzg1MiAtMS4zOTE1NSwyLjc4MzExIC0xLjM5MTU1LDYuMjYyIDAuMjMxOTIsMy4wMTUwNCAxLjM5MTU1LDUuNzk4MTUgMS4zOTE1NiwyLjU1MTE4IDMuNzEwODIsNC40MDY1OSAyLjU1MTE4LDEuODU1NDEgNy42NTM1NiwzLjk0Mjc0IDUuMTAyMzcsMi4wODczNCAxMi45ODc4NSwzLjk0Mjc0IDExLjU5NjMsMy4wMTUwNCAxOS4wMTc5Myw2LjcyNTg2IDcuNjUzNTYsMy40Nzg4OSAxMi4wNjAxNSw4LjExNzQxIDQuNjM4NTIsNC40MDY1OSA2LjQ5MzkzLDEwLjIwNDc0IDEuODU1NDEsNS43OTgxNSAxLjg1NTQxLDEyLjk4Nzg2IDAsMTAuNDM2NjcgLTYuMDMwMDgsMTguNzg2IC01Ljc5ODE1LDguMTE3NDEgLTE1Ljc3MDk2LDEyLjc1NTkzIC05Ljk3MjgyLDQuNjM4NTIgLTIyLjI2NDksNC42Mzg1MiB6IgogICAgICAgICBzdHlsZT0iZm9udC1mYW1pbHk6J0xleGVuZCBEZWNhJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidMZXhlbmQgRGVjYSc7ZmlsbDojYWRlZGQ2O2ZpbGwtb3BhY2l0eToxIgogICAgICAgICBpZD0icGF0aDE2ODYxIiAvPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDk0OC45OTM5OCwzNDQuMjQ3ODMgViAxOTEuNDA4NiBoIDIzLjg4ODM4IHYgMTUyLjgzOTIzIHogbSAtMjUuMjc5OTMsLTk4LjU2ODU0IHYgLTIzLjE5MjYgaCA3Ny40NjMyNSB2IDIzLjE5MjYgeiIKICAgICAgICAgc3R5bGU9ImZvbnQtZmFtaWx5OidMZXhlbmQgRGVjYSc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTGV4ZW5kIERlY2EnO2ZpbGw6I2FkZWRkNjtmaWxsLW9wYWNpdHk6MSIKICAgICAgICAgaWQ9InBhdGgxNjg2MyIgLz4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSAxMDc2LjU1MjgsMzQ2LjU2NzA5IHEgLTE3Ljg1ODMsMCAtMzIuMDA1OCwtOC4xMTc0MSAtMTMuOTE1NiwtOC4zNDkzMyAtMjIuMDMzLC0yMi40OTY4MiAtOC4xMTc0LC0xNC4zNzk0MSAtOC4xMTc0LC0zMi43MDE1NiAwLC0xOC4zMjIxNiA4LjExNzQsLTMyLjQ2OTY0IDguMTE3NCwtMTQuMzc5NDEgMjIuMDMzLC0yMi40OTY4MiAxNC4xNDc1LC04LjM0OTM0IDMyLjAwNTgsLTguMzQ5MzQgMTcuNjI2MywwIDMxLjU0MTksOC4zNDkzNCAxNC4xNDc1LDguMTE3NDEgMjIuMjY0OSwyMi40OTY4MiA4LjExNzQsMTQuMTQ3NDggOC4xMTc0LDMyLjQ2OTY0IDAsMTguMzIyMTUgLTguMTE3NCwzMi43MDE1NiAtOC4xMTc0LDE0LjE0NzQ5IC0yMi4yNjQ5LDIyLjQ5NjgyIC0xMy45MTU2LDguMTE3NDEgLTMxLjU0MTksOC4xMTc0MSB6IG0gMCwtMjEuODAxMDQgcSAxMC45MDA1LDAgMTkuNDgxOCwtNS4zMzQzIDguNTgxMiwtNS41NjYyMiAxMy40NTE3LC0xNC44NDMyNiA0Ljg3MDQsLTkuNTA4OTcgNC42Mzg1LC0yMS4zMzcxOSAwLjIzMTksLTEyLjA2MDE2IC00LjYzODUsLTIxLjMzNzE5IC00Ljg3MDUsLTkuNTA4OTcgLTEzLjQ1MTcsLTE0Ljg0MzI3IC04LjU4MTMsLTUuMzM0MyAtMTkuNDgxOCwtNS4zMzQzIC0xMC45MDA1LDAgLTE5LjcxMzcsNS41NjYyMyAtOC41ODEzLDUuMzM0MyAtMTMuNDUxNywxNC44NDMyNiAtNC44NzA1LDkuMjc3MDQgLTQuNjM4NiwyMS4xMDUyNyAtMC4yMzE5LDExLjgyODIyIDQuNjM4NiwyMS4zMzcxOSA0Ljg3MDQsOS4yNzcwNCAxMy40NTE3LDE0Ljg0MzI2IDguODEzMiw1LjMzNDMgMTkuNzEzNyw1LjMzNDMgeiIKICAgICAgICAgc3R5bGU9ImZvbnQtZmFtaWx5OidMZXhlbmQgRGVjYSc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTGV4ZW5kIERlY2EnO2ZpbGw6I2FkZWRkNjtmaWxsLW9wYWNpdHk6MSIKICAgICAgICAgaWQ9InBhdGgxNjg2NSIgLz4KICAgICAgPHBhdGgKICAgICAgICAgZD0iTSAxMTY4LjM5NTQsMzQ0LjI0NzgzIFYgMjIyLjQ4NjY5IGggMjMuODg4NCB2IDEyMS43NjExNCB6IG0gMTEuNTk2MywtMTQ4LjY2NDU2IHEgLTcuNjUzNiwwIC0xMS44MjgyLC0zLjk0Mjc0IC00LjE3NDcsLTMuOTQyNzQgLTQuMTc0NywtMTEuMTMyNDUgMCwtNi43MjU4NSA0LjE3NDcsLTEwLjkwMDUyIDQuNDA2NSwtNC4xNzQ2NyAxMS44MjgyLC00LjE3NDY3IDcuNjUzNSwwIDExLjgyODIsMy45NDI3NCA0LjE3NDcsMy45NDI3NSA0LjE3NDcsMTEuMTMyNDUgMCw2LjcyNTg1IC00LjQwNjYsMTAuOTAwNTIgLTQuMTc0Nyw0LjE3NDY3IC0xMS41OTYzLDQuMTc0NjcgeiIKICAgICAgICAgc3R5bGU9ImZvbnQtZmFtaWx5OidMZXhlbmQgRGVjYSc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTGV4ZW5kIERlY2EnO2ZpbGw6I2FkZWRkNjtmaWxsLW9wYWNpdHk6MSIKICAgICAgICAgaWQ9InBhdGgxNjg2NyIgLz4KICAgICAgPHBhdGgKICAgICAgICAgZD0iTSAxMjI4LjkyOCwzNDQuMjQ3ODMgViAyMjIuNDg2NjkgaCAyNC4xMjAzIHYgMzguMjY3NzkgbCAtMi4zMTkyLC05LjI3NzA0IHEgMi41NTEyLC04LjgxMzE5IDguNTgxMiwtMTYuMDAyOSA2LjI2MiwtNy4xODk3IDE0LjE0NzUsLTExLjM2NDM3IDguMTE3NCwtNC4xNzQ2NyAxNi42OTg3LC00LjE3NDY3IDMuOTQyNywwIDcuNDIxNiwwLjY5NTc4IDMuNzEwOSwwLjY5NTc4IDUuNzk4MiwxLjYyMzQ4IGwgLTYuMjYyLDI1Ljk3NTcxIHEgLTIuNzgzMSwtMS4xNTk2MyAtNi4yNjIsLTEuODU1NDEgLTMuMjQ3LC0wLjkyNzcgLTYuNDkzOSwtMC45Mjc3IC02LjI2MiwwIC0xMi4wNjAyLDIuNTUxMTkgLTUuNTY2MiwyLjMxOTI2IC05Ljk3MjgsNi43MjU4NSAtNC4xNzQ3LDQuMTc0NjcgLTYuNzI1OSw5Ljk3MjgyIC0yLjU1MTIsNS41NjYyMiAtMi41NTEyLDEyLjI5MjA3IHYgNjcuMjU4NTQgeiIKICAgICAgICAgc3R5bGU9ImZvbnQtZmFtaWx5OidMZXhlbmQgRGVjYSc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTGV4ZW5kIERlY2EnO2ZpbGw6I2FkZWRkNjtmaWxsLW9wYWNpdHk6MSIKICAgICAgICAgaWQ9InBhdGgxNjg2OSIgLz4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSAxMzc0LjExMzQsMzQ2LjU2NzA5IHEgLTE4Ljc4NiwwIC0zMy4zOTczLC03Ljg4NTQ4IC0xNC4zNzk0LC04LjExNzQxIC0yMi43Mjg4LC0yMi4wMzI5NyAtOC4xMTc0LC0xMy45MTU1NiAtOC4xMTc0LC0zMi4wMDU3OSAwLC0xNC4zNzk0MSA0LjYzODYsLTI2LjIwNzYzIDQuNjM4NSwtMTEuODI4MjMgMTIuNzU1OSwtMjAuNDA5NDkgOC4zNDkzLC04LjgxMzE5IDE5LjcxMzcsLTEzLjQ1MTcxIDExLjU5NjMsLTQuODcwNDUgMjUuMDQ4LC00Ljg3MDQ1IDExLjgyODIsMCAyMi4wMzMsNC42Mzg1MiAxMC4yMDQ3LDQuNDA2NiAxNy42MjYzLDEyLjI5MjA4IDcuNjUzNiw3Ljg4NTQ5IDExLjU5NjMsMTguNzg2MDEgNC4xNzQ3LDEwLjY2ODU5IDMuOTQyOCwyMy40MjQ1MiBsIC0wLjIzMTksMTAuMjA0NzUgaCAtOTkuNDk2MyBsIC01LjMzNDMsLTE5LjAxNzk0IGggODQuMTg5MSBsIC0zLjQ3ODgsMy45NDI3NSB2IC01LjU2NjIzIHEgLTAuNjk1OCwtNy42NTM1NSAtNS4xMDI0LC0xMy42ODM2MyAtNC40MDY2LC02LjAzMDA4IC0xMS4xMzI1LC05LjUwODk3IC02LjcyNTgsLTMuNDc4ODkgLTE0LjYxMTMsLTMuNDc4ODkgLTEyLjUyNCwwIC0yMS4xMDUzLDQuODcwNDUgLTguNTgxMiw0LjYzODUyIC0xMi45ODc4LDEzLjkxNTU2IC00LjQwNjYsOS4wNDUxMSAtNC40MDY2LDIyLjQ5NjgyIDAsMTIuNzU1OTMgNS4zMzQzLDIyLjI2NDkgNS4zMzQzLDkuMjc3MDQgMTUuMDc1MiwxNC4zNzk0MSA5Ljc0MDksNS4xMDIzNyAyMi40OTY4LDUuMTAyMzcgOS4wNDUxLDAgMTYuNjk4NywtMy4wMTUwNCA3Ljg4NTUsLTMuMDE1MDQgMTYuOTMwNiwtMTAuOTAwNTIgbCAxMi4wNjAxLDE2LjkzMDYgcSAtNS41NjYyLDUuNTY2MjIgLTEzLjY4MzYsOS43NDA4OSAtNy44ODU1LDQuMTc0NjcgLTE2LjkzMDYsNi43MjU4NSAtOC44MTMyLDIuMzE5MjYgLTE3LjM5NDUsMi4zMTkyNiB6IgogICAgICAgICBzdHlsZT0iZm9udC1mYW1pbHk6J0xleGVuZCBEZWNhJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidMZXhlbmQgRGVjYSc7ZmlsbDojYWRlZGQ2O2ZpbGwtb3BhY2l0eToxIgogICAgICAgICBpZD0icGF0aDE2ODcxIiAvPgogICAgPC9nPgogIDwvZz4KICA8ZwogICAgIGlkPSJsYXllcjIiCiAgICAgc3R5bGU9ImRpc3BsYXk6bm9uZSI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGgxNjU3IgogICAgICAgc3R5bGU9ImZpbGw6I2I0ZmFlMjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2I0ZmFlMjtzdHJva2Utd2lkdGg6ODtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAyOTYsMTAzLjk4MjQyIC0xMzUuNTMxMjUsMTc3Ljk2NjggaCA4OC43MDExNyB6IE0gMjYyLjgzMDA4LDIzMC4wNTA3OCAyMTYsNDA4LjAxNzU4IDM1MS41MzEyNSwyMzAuMDUwNzggWiIKICAgICAgIHRyYW5zZm9ybT0icm90YXRlKC00LjE1NjU1MywyNTYsMjU2LjAwNjkxKSIgLz4KICA8L2c+Cjwvc3ZnPgo=";
const HistoireLogoLight = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMTUzNiIKICAgaGVpZ2h0PSI1MTIiCiAgIHZpZXdCb3g9IjAgMCAxNTM2IDUxMiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNSIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8ZwogICAgIGlkPSJsYXllcjEiPgogICAgPHJlY3QKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuNTtmaWxsOiMzNGQzOTk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjEuMDAzNzUiCiAgICAgICBpZD0icmVjdDEzNzIiCiAgICAgICB3aWR0aD0iMzE0LjMwOTIzIgogICAgICAgaGVpZ2h0PSI0MDYuNjA5MDEiCiAgICAgICB4PSItMjYuNTY1MDYzIgogICAgICAgeT0iMTM0Ljc1MDc5IgogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoLTIzLjgyMTI2MikiCiAgICAgICByeT0iOCIgLz4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDojMzRkMzk5O2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDoxLjAwMzc1IgogICAgICAgaWQ9InJlY3Q4NTAiCiAgICAgICB3aWR0aD0iMzE0LjMwOTIzIgogICAgICAgaGVpZ2h0PSI0MDYuNjA5MDEiCiAgICAgICB4PSI3Ny41NzE4MzgiCiAgICAgICB5PSI3Mi44MDg3MDgiCiAgICAgICByeT0iOCIKICAgICAgIHRyYW5zZm9ybT0icm90YXRlKC00LjU3NDQ1MzQpIiAvPgogIDwvZz4KICA8ZwogICAgIGlkPSJsYXllcjMiPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoMTY1Ny0zIgogICAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6I2FkZWRkNjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2FkZWRkNjtzdHJva2Utd2lkdGg6OC4zNDkyMztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAzNTkuMzg5NDcsMzU1Ljk1MTM0IDMyMC43MjkzNSwxNzYuNTI5NDIgMjM4LjM0NjEzLDIzOC45NDExOCBaIE0gMjczLjY0MTI0LDI3My4wNjYwOCAxNTIuNTk3ODgsMTU2LjA1NTkxIDE5MS4yNTgwNCwzMzUuNDc3ODYgWiIgLz4KICAgIDxnCiAgICAgICBhcmlhLWxhYmVsPSJIaXN0b2lyZSIKICAgICAgIGlkPSJ0ZXh0MTgyMSIKICAgICAgIHN0eWxlPSJmb250LXNpemU6MjMxLjkyNnB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6U2VuOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246U2VuO2ZpbGw6IzJiYzc4ZTtzdHJva2Utd2lkdGg6NS43OTgxMztmaWxsLW9wYWNpdHk6MSIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMTUwMDU1NiwwLDAsMS4xNTAwNTU2LC0xMDUuNDAxNTYsLTM4LjQxNDIzMykiPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDY5My44NzU5MSwzNDQuMjQ3ODMgViAxODEuODk5NjQgaCAyNS4wNDgwMSB2IDE2Mi4zNDgxOSB6IG0gLTEwNS45OTAxOCwwIFYgMTgxLjg5OTY0IGggMjUuMDQ4MDEgdiAxNjIuMzQ4MTkgeiBtIDEwLjkwMDUyLC02OC44ODIwMiB2IC0yNC4xMjAzIGggMTA2LjIyMjExIHYgMjQuMTIwMyB6IgogICAgICAgICBzdHlsZT0iZm9udC1mYW1pbHk6J0xleGVuZCBEZWNhJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidMZXhlbmQgRGVjYSc7ZmlsbDojMmJjNzhlO2ZpbGwtb3BhY2l0eToxIgogICAgICAgICBpZD0icGF0aDE2ODU3IiAvPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDc2Mi4yOTQsMzQ0LjI0NzgzIFYgMjIyLjQ4NjY5IGggMjMuODg4MzggdiAxMjEuNzYxMTQgeiBtIDExLjU5NjMsLTE0OC42NjQ1NiBxIC03LjY1MzU2LDAgLTExLjgyODIyLC0zLjk0Mjc0IC00LjE3NDY3LC0zLjk0Mjc0IC00LjE3NDY3LC0xMS4xMzI0NSAwLC02LjcyNTg1IDQuMTc0NjcsLTEwLjkwMDUyIDQuNDA2NTksLTQuMTc0NjcgMTEuODI4MjIsLTQuMTc0NjcgNy42NTM1NiwwIDExLjgyODIzLDMuOTQyNzQgNC4xNzQ2NiwzLjk0Mjc1IDQuMTc0NjYsMTEuMTMyNDUgMCw2LjcyNTg1IC00LjQwNjU5LDEwLjkwMDUyIC00LjE3NDY3LDQuMTc0NjcgLTExLjU5NjMsNC4xNzQ2NyB6IgogICAgICAgICBzdHlsZT0iZm9udC1mYW1pbHk6J0xleGVuZCBEZWNhJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidMZXhlbmQgRGVjYSc7ZmlsbDojMmJjNzhlO2ZpbGwtb3BhY2l0eToxIgogICAgICAgICBpZD0icGF0aDE2ODU5IiAvPgogICAgICA8cGF0aAogICAgICAgICBkPSJtIDg2My40MTM3MSwzNDYuNTY3MDkgcSAtMTUuMzA3MTEsMCAtMjcuNTk5MTksLTUuMzM0MjkgLTEyLjI5MjA4LC01LjMzNDMgLTIwLjQwOTQ5LC0xNS43NzA5NyBsIDE2LjIzNDgyLC0xMy45MTU1NiBxIDYuOTU3NzgsOC4xMTc0MSAxNS4wNzUxOSwxMS44MjgyMiA4LjM0OTM0LDMuNDc4ODkgMTguNzg2MDEsMy40Nzg4OSA0LjE3NDY2LDAgNy42NTM1NSwtMC45Mjc3IDMuNzEwODIsLTEuMTU5NjMgNi4yNjIwMSwtMy4yNDY5NiAyLjc4MzExLC0yLjA4NzM0IDQuMTc0NjYsLTQuODcwNDUgMS4zOTE1NiwtMy4wMTUwNCAxLjM5MTU2LC02LjQ5MzkzIDAsLTYuMDMwMDcgLTQuNDA2NTksLTkuNzQwODkgLTIuMzE5MjYsLTEuNjIzNDggLTcuNDIxNjQsLTMuNDc4ODkgLTQuODcwNDQsLTIuMDg3MzMgLTEyLjc1NTkzLC00LjE3NDY3IC0xMy40NTE3LC0zLjQ3ODg5IC0yMi4wMzI5NywtNy44ODU0OCAtOC41ODEyNiwtNC40MDY2IC0xMy4yMTk3OCwtOS45NzI4MiAtMy40Nzg4OSwtNC40MDY1OSAtNS4xMDIzNywtOS41MDg5NyAtMS42MjM0OCwtNS4zMzQyOSAtMS42MjM0OCwtMTEuNTk2MjkgMCwtNy42NTM1NiAzLjI0Njk2LC0xMy45MTU1NiAzLjQ3ODg5LC02LjQ5MzkzIDkuMjc3MDQsLTExLjEzMjQ1IDYuMDMwMDgsLTQuODcwNDUgMTMuOTE1NTYsLTcuNDIxNjMgOC4xMTc0MSwtMi41NTExOSAxNy4xNjI1MywtMi41NTExOSA4LjU4MTI2LDAgMTYuOTMwNTksMi4zMTkyNiA4LjU4MTI2LDIuMzE5MjYgMTUuNzcwOTcsNi43MjU4NSA3LjE4OTcxLDQuNDA2NiAxMi4wNjAxNSwxMC40MzY2NyBsIC0xMy42ODM2MywxNS4wNzUxOSBxIC00LjQwNjYsLTQuNDA2NTkgLTkuNzQwODksLTcuNjUzNTUgLTUuMTAyMzcsLTMuNDc4ODkgLTEwLjQzNjY3LC01LjMzNDMgLTUuMzM0MywtMS44NTU0MSAtOS43NDA4OSwtMS44NTU0MSAtNC44NzA0NSwwIC04LjgxMzE5LDAuOTI3NyAtMy45NDI3NCwwLjkyNzcxIC02LjcyNTg2LDIuNzgzMTIgLTIuNTUxMTgsMS44NTU0IC0zLjk0Mjc0LDQuNjM4NTIgLTEuMzkxNTUsMi43ODMxMSAtMS4zOTE1NSw2LjI2MiAwLjIzMTkyLDMuMDE1MDQgMS4zOTE1NSw1Ljc5ODE1IDEuMzkxNTYsMi41NTExOCAzLjcxMDgyLDQuNDA2NTkgMi41NTExOCwxLjg1NTQxIDcuNjUzNTYsMy45NDI3NCA1LjEwMjM3LDIuMDg3MzQgMTIuOTg3ODUsMy45NDI3NCAxMS41OTYzLDMuMDE1MDQgMTkuMDE3OTMsNi43MjU4NiA3LjY1MzU2LDMuNDc4ODkgMTIuMDYwMTUsOC4xMTc0MSA0LjYzODUyLDQuNDA2NTkgNi40OTM5MywxMC4yMDQ3NCAxLjg1NTQxLDUuNzk4MTUgMS44NTU0MSwxMi45ODc4NiAwLDEwLjQzNjY3IC02LjAzMDA4LDE4Ljc4NiAtNS43OTgxNSw4LjExNzQxIC0xNS43NzA5NiwxMi43NTU5MyAtOS45NzI4Miw0LjYzODUyIC0yMi4yNjQ5LDQuNjM4NTIgeiIKICAgICAgICAgc3R5bGU9ImZvbnQtZmFtaWx5OidMZXhlbmQgRGVjYSc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTGV4ZW5kIERlY2EnO2ZpbGw6IzJiYzc4ZTtmaWxsLW9wYWNpdHk6MSIKICAgICAgICAgaWQ9InBhdGgxNjg2MSIgLz4KICAgICAgPHBhdGgKICAgICAgICAgZD0iTSA5NDguOTkzOTgsMzQ0LjI0NzgzIFYgMTkxLjQwODYgaCAyMy44ODgzOCB2IDE1Mi44MzkyMyB6IG0gLTI1LjI3OTkzLC05OC41Njg1NCB2IC0yMy4xOTI2IGggNzcuNDYzMjUgdiAyMy4xOTI2IHoiCiAgICAgICAgIHN0eWxlPSJmb250LWZhbWlseTonTGV4ZW5kIERlY2EnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0xleGVuZCBEZWNhJztmaWxsOiMyYmM3OGU7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICAgIGlkPSJwYXRoMTY4NjMiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMTA3Ni41NTI4LDM0Ni41NjcwOSBxIC0xNy44NTgzLDAgLTMyLjAwNTgsLTguMTE3NDEgLTEzLjkxNTYsLTguMzQ5MzMgLTIyLjAzMywtMjIuNDk2ODIgLTguMTE3NCwtMTQuMzc5NDEgLTguMTE3NCwtMzIuNzAxNTYgMCwtMTguMzIyMTYgOC4xMTc0LC0zMi40Njk2NCA4LjExNzQsLTE0LjM3OTQxIDIyLjAzMywtMjIuNDk2ODIgMTQuMTQ3NSwtOC4zNDkzNCAzMi4wMDU4LC04LjM0OTM0IDE3LjYyNjMsMCAzMS41NDE5LDguMzQ5MzQgMTQuMTQ3NSw4LjExNzQxIDIyLjI2NDksMjIuNDk2ODIgOC4xMTc0LDE0LjE0NzQ4IDguMTE3NCwzMi40Njk2NCAwLDE4LjMyMjE1IC04LjExNzQsMzIuNzAxNTYgLTguMTE3NCwxNC4xNDc0OSAtMjIuMjY0OSwyMi40OTY4MiAtMTMuOTE1Niw4LjExNzQxIC0zMS41NDE5LDguMTE3NDEgeiBtIDAsLTIxLjgwMTA0IHEgMTAuOTAwNSwwIDE5LjQ4MTgsLTUuMzM0MyA4LjU4MTIsLTUuNTY2MjIgMTMuNDUxNywtMTQuODQzMjYgNC44NzA0LC05LjUwODk3IDQuNjM4NSwtMjEuMzM3MTkgMC4yMzE5LC0xMi4wNjAxNiAtNC42Mzg1LC0yMS4zMzcxOSAtNC44NzA1LC05LjUwODk3IC0xMy40NTE3LC0xNC44NDMyNyAtOC41ODEzLC01LjMzNDMgLTE5LjQ4MTgsLTUuMzM0MyAtMTAuOTAwNSwwIC0xOS43MTM3LDUuNTY2MjMgLTguNTgxMyw1LjMzNDMgLTEzLjQ1MTcsMTQuODQzMjYgLTQuODcwNSw5LjI3NzA0IC00LjYzODYsMjEuMTA1MjcgLTAuMjMxOSwxMS44MjgyMiA0LjYzODYsMjEuMzM3MTkgNC44NzA0LDkuMjc3MDQgMTMuNDUxNywxNC44NDMyNiA4LjgxMzIsNS4zMzQzIDE5LjcxMzcsNS4zMzQzIHoiCiAgICAgICAgIHN0eWxlPSJmb250LWZhbWlseTonTGV4ZW5kIERlY2EnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0xleGVuZCBEZWNhJztmaWxsOiMyYmM3OGU7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICAgIGlkPSJwYXRoMTY4NjUiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMTE2OC4zOTU0LDM0NC4yNDc4MyBWIDIyMi40ODY2OSBoIDIzLjg4ODQgdiAxMjEuNzYxMTQgeiBtIDExLjU5NjMsLTE0OC42NjQ1NiBxIC03LjY1MzYsMCAtMTEuODI4MiwtMy45NDI3NCAtNC4xNzQ3LC0zLjk0Mjc0IC00LjE3NDcsLTExLjEzMjQ1IDAsLTYuNzI1ODUgNC4xNzQ3LC0xMC45MDA1MiA0LjQwNjUsLTQuMTc0NjcgMTEuODI4MiwtNC4xNzQ2NyA3LjY1MzUsMCAxMS44MjgyLDMuOTQyNzQgNC4xNzQ3LDMuOTQyNzUgNC4xNzQ3LDExLjEzMjQ1IDAsNi43MjU4NSAtNC40MDY2LDEwLjkwMDUyIC00LjE3NDcsNC4xNzQ2NyAtMTEuNTk2Myw0LjE3NDY3IHoiCiAgICAgICAgIHN0eWxlPSJmb250LWZhbWlseTonTGV4ZW5kIERlY2EnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0xleGVuZCBEZWNhJztmaWxsOiMyYmM3OGU7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICAgIGlkPSJwYXRoMTY4NjciIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMTIyOC45MjgsMzQ0LjI0NzgzIFYgMjIyLjQ4NjY5IGggMjQuMTIwMyB2IDM4LjI2Nzc5IGwgLTIuMzE5MiwtOS4yNzcwNCBxIDIuNTUxMiwtOC44MTMxOSA4LjU4MTIsLTE2LjAwMjkgNi4yNjIsLTcuMTg5NyAxNC4xNDc1LC0xMS4zNjQzNyA4LjExNzQsLTQuMTc0NjcgMTYuNjk4NywtNC4xNzQ2NyAzLjk0MjcsMCA3LjQyMTYsMC42OTU3OCAzLjcxMDksMC42OTU3OCA1Ljc5ODIsMS42MjM0OCBsIC02LjI2MiwyNS45NzU3MSBxIC0yLjc4MzEsLTEuMTU5NjMgLTYuMjYyLC0xLjg1NTQxIC0zLjI0NywtMC45Mjc3IC02LjQ5MzksLTAuOTI3NyAtNi4yNjIsMCAtMTIuMDYwMiwyLjU1MTE5IC01LjU2NjIsMi4zMTkyNiAtOS45NzI4LDYuNzI1ODUgLTQuMTc0Nyw0LjE3NDY3IC02LjcyNTksOS45NzI4MiAtMi41NTEyLDUuNTY2MjIgLTIuNTUxMiwxMi4yOTIwNyB2IDY3LjI1ODU0IHoiCiAgICAgICAgIHN0eWxlPSJmb250LWZhbWlseTonTGV4ZW5kIERlY2EnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0xleGVuZCBEZWNhJztmaWxsOiMyYmM3OGU7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICAgIGlkPSJwYXRoMTY4NjkiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMTM3NC4xMTM0LDM0Ni41NjcwOSBxIC0xOC43ODYsMCAtMzMuMzk3MywtNy44ODU0OCAtMTQuMzc5NCwtOC4xMTc0MSAtMjIuNzI4OCwtMjIuMDMyOTcgLTguMTE3NCwtMTMuOTE1NTYgLTguMTE3NCwtMzIuMDA1NzkgMCwtMTQuMzc5NDEgNC42Mzg2LC0yNi4yMDc2MyA0LjYzODUsLTExLjgyODIzIDEyLjc1NTksLTIwLjQwOTQ5IDguMzQ5MywtOC44MTMxOSAxOS43MTM3LC0xMy40NTE3MSAxMS41OTYzLC00Ljg3MDQ1IDI1LjA0OCwtNC44NzA0NSAxMS44MjgyLDAgMjIuMDMzLDQuNjM4NTIgMTAuMjA0Nyw0LjQwNjYgMTcuNjI2MywxMi4yOTIwOCA3LjY1MzYsNy44ODU0OSAxMS41OTYzLDE4Ljc4NjAxIDQuMTc0NywxMC42Njg1OSAzLjk0MjgsMjMuNDI0NTIgbCAtMC4yMzE5LDEwLjIwNDc1IGggLTk5LjQ5NjMgbCAtNS4zMzQzLC0xOS4wMTc5NCBoIDg0LjE4OTEgbCAtMy40Nzg4LDMuOTQyNzUgdiAtNS41NjYyMyBxIC0wLjY5NTgsLTcuNjUzNTUgLTUuMTAyNCwtMTMuNjgzNjMgLTQuNDA2NiwtNi4wMzAwOCAtMTEuMTMyNSwtOS41MDg5NyAtNi43MjU4LC0zLjQ3ODg5IC0xNC42MTEzLC0zLjQ3ODg5IC0xMi41MjQsMCAtMjEuMTA1Myw0Ljg3MDQ1IC04LjU4MTIsNC42Mzg1MiAtMTIuOTg3OCwxMy45MTU1NiAtNC40MDY2LDkuMDQ1MTEgLTQuNDA2NiwyMi40OTY4MiAwLDEyLjc1NTkzIDUuMzM0MywyMi4yNjQ5IDUuMzM0Myw5LjI3NzA0IDE1LjA3NTIsMTQuMzc5NDEgOS43NDA5LDUuMTAyMzcgMjIuNDk2OCw1LjEwMjM3IDkuMDQ1MSwwIDE2LjY5ODcsLTMuMDE1MDQgNy44ODU1LC0zLjAxNTA0IDE2LjkzMDYsLTEwLjkwMDUyIGwgMTIuMDYwMSwxNi45MzA2IHEgLTUuNTY2Miw1LjU2NjIyIC0xMy42ODM2LDkuNzQwODkgLTcuODg1NSw0LjE3NDY3IC0xNi45MzA2LDYuNzI1ODUgLTguODEzMiwyLjMxOTI2IC0xNy4zOTQ1LDIuMzE5MjYgeiIKICAgICAgICAgc3R5bGU9ImZvbnQtZmFtaWx5OidMZXhlbmQgRGVjYSc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTGV4ZW5kIERlY2EnO2ZpbGw6IzJiYzc4ZTtmaWxsLW9wYWNpdHk6MSIKICAgICAgICAgaWQ9InBhdGgxNjg3MSIgLz4KICAgIDwvZz4KICA8L2c+CiAgPGcKICAgICBpZD0ibGF5ZXIyIgogICAgIHN0eWxlPSJkaXNwbGF5Om5vbmUiPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoMTY1NyIKICAgICAgIHN0eWxlPSJmaWxsOiNiNGZhZTI7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNiNGZhZTI7c3Ryb2tlLXdpZHRoOjg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMjk2LDEwMy45ODI0MiAtMTM1LjUzMTI1LDE3Ny45NjY4IGggODguNzAxMTcgeiBNIDI2Mi44MzAwOCwyMzAuMDUwNzggMjE2LDQwOC4wMTc1OCAzNTEuNTMxMjUsMjMwLjA1MDc4IFoiCiAgICAgICB0cmFuc2Zvcm09InJvdGF0ZSgtNC4xNTY1NTMsMjU2LDI1Ni4wMDY5MSkiIC8+CiAgPC9nPgo8L3N2Zz4K";
const _hoisted_1$7 = ["src", "alt"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AppLogo",
  setup(__props) {
    const logoUrl = computed(() => {
      var _a, _b;
      if (isDark.value) {
        return ((_a = histoireConfig.theme.logo) == null ? void 0 : _a.dark) ? customLogos.dark : HistoireLogoDark;
      }
      return ((_b = histoireConfig.theme.logo) == null ? void 0 : _b.light) ? customLogos.light : HistoireLogoLight;
    });
    const altText = computed(() => histoireConfig.theme.title + " logo");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("img", {
        src: unref(logoUrl),
        alt: unref(altText)
      }, null, 8, _hoisted_1$7);
    };
  }
});
const isMac = navigator.platform.toLowerCase().includes("mac");
function onKeyboardShortcut(shortcut, handler, options = {}) {
  var _a;
  useEventListener((_a = options.event) != null ? _a : "keydown", (event) => {
    if (isMatchingShortcut(isRef(shortcut) ? shortcut.value : shortcut)) {
      handler(event);
    }
  });
}
const modifiers = {
  ctrl: { key: "Control", pressed: false },
  alt: { key: "Alt", pressed: false },
  shift: { key: "Shift", pressed: false },
  meta: { key: "Meta", pressed: false }
};
const pressedKeys = /* @__PURE__ */ new Set();
window.addEventListener("keydown", (event) => {
  for (const i in modifiers) {
    const mod = modifiers[i];
    if (mod.key === event.key) {
      mod.pressed = true;
      return;
    }
  }
  pressedKeys.add(event.key.toLocaleLowerCase());
});
window.addEventListener("keyup", (event) => {
  requestAnimationFrame(() => {
    pressedKeys.clear();
    for (const i in modifiers) {
      const mod = modifiers[i];
      if (mod.key === event.key) {
        mod.pressed = false;
        break;
      }
    }
  });
});
window.addEventListener("blur", () => {
  pressedKeys.clear();
  for (const i in modifiers) {
    const mod = modifiers[i];
    mod.pressed = false;
  }
});
function isMatchingShortcut(shortcut) {
  for (const combination of shortcut) {
    if (isMatchingCombination(combination.toLowerCase())) {
      return true;
    }
  }
  return false;
}
function isMatchingCombination(combination) {
  const splitted = combination.split("+").map((key) => key.trim());
  const targetKey = splitted.pop();
  for (const mod in modifiers) {
    const containsMod = splitted.includes(mod);
    const isPressed = modifiers[mod].pressed;
    if (containsMod !== isPressed) {
      return false;
    }
  }
  return pressedKeys.has(targetKey);
}
function formatKey(key) {
  key = key.toLowerCase();
  if (key === "ctrl") {
    return isMac ? "^" : "Ctrl";
  }
  if (key === "alt") {
    return isMac ? "\u2387" : "Alt";
  }
  if (key === "shift") {
    return "\u21E7";
  }
  if (key === "meta") {
    return "\u2318";
  }
  return key.charAt(0).toUpperCase() + key.substring(1).toLowerCase();
}
function makeTooltip(descriptionHtml, keyboardShortcut) {
  return {
    content: `<div>${descriptionHtml}</div><div class="htw-flex htw-items-center htw-gap-1 htw-mt-2 htw-text-sm">${genKeyboardShortcutHtml(keyboardShortcut({ isMac }))}</div>`,
    html: true
  };
}
function genKeyboardShortcutHtml(shortcut) {
  return shortcut.split("+").map((k) => k.trim()).map((key) => `<span class="htw-bg-gray-500 htw-border-b-2 htw-border-gray-600 htw-px-1 htw-rounded-sm">${formatKey(key)}</span>`).join("");
}
const _hoisted_1$6 = { class: "htw-px-4 htw-h-16 htw-flex htw-items-center htw-gap-2" };
const _hoisted_2$4 = { class: "htw-py-3 sm:htw-py-4 htw-flex-1 htw-h-full htw-flex htw-items-center htw-pr-2" };
const _hoisted_3$3 = ["href"];
const _hoisted_4 = { class: "htw-ml-auto htw-flex-none htw-flex" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  emits: {
    search: () => true
  },
  setup(__props) {
    const themeIcon = computed(() => {
      return isDark.value ? "carbon:moon" : "carbon:sun";
    });
    onKeyboardShortcut(["ctrl+shift+d", "meta+shift+d"], (event) => {
      event.preventDefault();
      toggleDark();
    });
    return (_ctx, _cache) => {
      var _a;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("a", {
            href: (_a = unref(histoireConfig).theme) == null ? void 0 : _a.logoHref,
            target: "_blank",
            class: "htw-w-full htw-h-full htw-flex htw-items-center"
          }, [
            createVNode(_sfc_main$7, { class: "htw-max-w-full htw-max-h-full" })
          ], 8, _hoisted_3$3)
        ]),
        createBaseVNode("div", _hoisted_4, [
          withDirectives((openBlock(), createElementBlock("a", {
            class: "htw-p-2 sm:htw-p-1 hover:htw-text-primary-500 dark:hover:htw-text-primary-400 htw-cursor-pointer htw-text-gray-900 dark:htw-text-gray-100",
            "data-test-id": "search-btn",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("search"))
          }, [
            createVNode(unref(Icon), {
              icon: "carbon:search",
              class: "htw-w-6 htw-h-6 sm:htw-w-4 sm:htw-h-4"
            })
          ])), [
            [_directive_tooltip, unref(makeTooltip)("Search", ({ isMac: isMac2 }) => isMac2 ? "meta+k" : "ctrl+k")]
          ]),
          withDirectives((openBlock(), createElementBlock("a", {
            class: "htw-p-2 sm:htw-p-1 hover:htw-text-primary-500 dark:hover:htw-text-primary-400 htw-cursor-pointer htw-text-gray-900 dark:htw-text-gray-100",
            onClick: _cache[1] || (_cache[1] = ($event) => unref(toggleDark)())
          }, [
            createVNode(unref(Icon), {
              icon: unref(themeIcon),
              class: "htw-w-6 htw-h-6 sm:htw-w-4 sm:htw-h-4"
            }, null, 8, ["icon"])
          ])), [
            [_directive_tooltip, unref(makeTooltip)("Toggle dark mode", ({ isMac: isMac2 }) => isMac2 ? "meta+shift+d" : "ctrl+shift+d")]
          ])
        ])
      ]);
    };
  }
});
const isMobile = useMediaQuery("(max-width: 640px)");
const _hoisted_1$5 = {
  key: 0,
  class: "htw-absolute htw-z-10 htw-bg-white dark:htw-bg-gray-700 htw-w-screen htw-h-screen htw-inset-0 htw-overflow-hidden htw-flex htw-flex-col"
};
const _hoisted_2$3 = { class: "htw-p-4 htw-h-16 htw-flex htw-border-b htw-border-gray-100 dark:htw-border-gray-800 htw-items-center htw-place-content-between" };
const _hoisted_3$2 = { class: "htw-text-gray-500" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "MobileOverlay",
  props: {
    title: null,
    opened: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "__histoire-fade-bottom" }, {
        default: withCtx(() => [
          __props.opened ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
            createBaseVNode("div", _hoisted_2$3, [
              createBaseVNode("span", _hoisted_3$2, toDisplayString(__props.title), 1),
              createBaseVNode("a", {
                class: "htw-p-1 hover:htw-text-primary-500 dark:hover:htw-text-primary-400 htw-cursor-pointer",
                onClick: _cache[0] || (_cache[0] = ($event) => emits("close"))
              }, [
                createVNode(unref(Icon), {
                  icon: "carbon:close",
                  class: "htw-w-8 htw-h-8 htw-shrink-0"
                })
              ])
            ]),
            renderSlot(_ctx.$slots, "default")
          ])) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-3c779b73"), n = n(), popScopeId(), n);
const _hoisted_1$4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "htw-opacity-40" }, " / ", -1));
const _hoisted_2$2 = { class: "htw-flex htw-items-center htw-gap-2" };
const _hoisted_3$1 = { class: "htw-opacity-40 htw-text-sm" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  props: {
    tree: null,
    stories: null
  },
  setup(__props) {
    useCssVars((_ctx) => {
      var _a;
      return {
        "0fe094b1": (_a = unref(story)) == null ? void 0 : _a.iconColor
      };
    });
    const storyStore = useStoryStore();
    const story = computed(() => storyStore.currentStory);
    const folders = computed(() => {
      return story.value.file.path.slice(0, -1);
    });
    const isMenuOpened = ref(false);
    function openMenu() {
      isMenuOpened.value = true;
    }
    function closeMenu() {
      isMenuOpened.value = false;
    }
    watch(story, () => {
      isMenuOpened.value = false;
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createBaseVNode("a", {
            class: "htw-px-6 htw-h-12 hover:htw-text-primary-500 dark:hover:htw-text-primary-400 htw-cursor-pointer htw-flex htw-gap-2 htw-flex-wrap htw-w-full htw-items-center",
            onClick: openMenu
          }, [
            unref(story) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(folders), (file, key) => {
                return openBlock(), createElementBlock(Fragment, { key }, [
                  createBaseVNode("span", null, toDisplayString(file), 1),
                  _hoisted_1$4
                ], 64);
              }), 128)),
              createBaseVNode("span", _hoisted_2$2, [
                createVNode(unref(Icon), {
                  icon: (_a = unref(story).icon) != null ? _a : "carbon:cube",
                  class: normalizeClass(["htw-w-5 htw-h-5 htw-flex-none", {
                    "htw-text-primary-500": !unref(story).iconColor,
                    "bind-icon-color": unref(story).iconColor
                  }])
                }, null, 8, ["icon", "class"]),
                createTextVNode(" " + toDisplayString(unref(story).title) + " ", 1),
                createBaseVNode("span", _hoisted_3$1, toDisplayString(unref(story).variants.length), 1)
              ])
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(" Select a story... ")
            ], 64)),
            createVNode(unref(Icon), {
              icon: "carbon:chevron-sort",
              class: "htw-w-5 htw-h-5 htw-shrink-0 htw-ml-auto"
            })
          ])
        ]),
        createVNode(_sfc_main$5, {
          title: "Select a story",
          opened: isMenuOpened.value,
          onClose: closeMenu
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$9, {
              tree: __props.tree,
              stories: __props.stories,
              class: "htw-flex-1 htw-overflow-y-scroll"
            }, null, 8, ["tree", "stories"])
          ]),
          _: 1
        }, 8, ["opened"])
      ], 64);
    };
  }
});
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3c779b73"]]);
const _hoisted_1$3 = { class: "htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500 htw-h-[51px] htw-opacity-30" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SearchLoading",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(unref(Icon), {
          icon: "carbon:search",
          class: "flex-none htw-w-4 htw-h-4"
        }),
        createTextVNode(" Loading... ")
      ]);
    };
  }
});
const _hoisted_1$2 = {
  class: "htw-fixed htw-inset-0 htw-bg-white/80 dark:htw-bg-gray-700/80 htw-z-20",
  "data-test-id": "search-modal"
};
const _hoisted_2$1 = { class: "htw-bg-white dark:htw-bg-gray-700 md:htw-mt-16 md:htw-mx-auto htw-w-screen htw-max-w-[512px] htw-shadow-xl htw-border htw-border-gray-200 dark:htw-border-gray-850 htw-rounded-lg htw-relative htw-divide-y htw-divide-gray-200 dark:htw-divide-gray-850" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchModal",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const SearchPane = defineAsyncComponent({
      loader: () => __vitePreload(() => import("./SearchPane.0b2f8680.js"), true ? ["assets/SearchPane.0b2f8680.js","assets/GenericMountStory.vue_vue_type_script_setup_true_lang.c2e15f4e.js","assets/vendor.9762286d.js","assets/BaseEmpty.4d3e8856.js"] : void 0),
      loadingComponent: _sfc_main$3,
      delay: 0
    });
    function close() {
      emit("close");
    }
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", {
          class: "htw-absolute htw-inset-0",
          onClick: _cache[0] || (_cache[0] = ($event) => close())
        }),
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(unref(SearchPane), {
            shown: __props.shown,
            onClose: _cache[1] || (_cache[1] = ($event) => close())
          }, null, 8, ["shown"])
        ])
      ], 512)), [
        [vShow, __props.shown]
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "htw-fixed htw-inset-0 htw-bg-white dark:htw-bg-gray-700 htw-flex htw-flex-col htw-gap-6 htw-items-center htw-justify-center" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InitialLoading",
  setup(__props) {
    const progress = reactive({
      loaded: 0,
      total: 0
    });
    const maxCols = window.innerWidth / 20;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(Transition, { name: "__histoire-fade" }, {
          default: withCtx(() => [
            progress.total > 0 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "htw-grid htw-gap-2",
              style: normalizeStyle({
                gridTemplateColumns: `repeat(${Math.min(Math.ceil(Math.sqrt(progress.total)), maxCols)}, minmax(0, 1fr))`
              })
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(progress.total, (n) => {
                return openBlock(), createElementBlock("div", {
                  key: n,
                  class: "htw-bg-primary-500/10 htw-rounded-full"
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["htw-w-3 htw-h-3 htw-bg-primary-500 htw-rounded-full htw-duration-150 htw-ease-out", {
                      "htw-transition-transform htw-scale-0": n >= progress.loaded
                    }])
                  }, null, 2)
                ]);
              }), 128))
            ], 4)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "htw-hidden"
};
const _hoisted_2 = {
  key: 0,
  class: "htw-h-full htw-flex htw-flex-col htw-divide-y htw-divide-gray-100 dark:htw-divide-gray-800"
};
const _hoisted_3 = { class: "htw-flex htw-flex-col htw-h-full htw-bg-gray-100 dark:htw-bg-gray-750 __histoire-pane-shadow-from-right" };
const __default__ = {
  name: "HistoireApp"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const files$1 = ref(files.map((file) => mapFile(file)));
    const tree$1 = ref(tree);
    const stories = computed(() => files$1.value.reduce((acc, file) => {
      acc.push(file.story);
      return acc;
    }, []));
    const storyStore = useStoryStore();
    watch(stories, (value) => {
      storyStore.setStories(value);
    }, {
      immediate: true
    });
    useTitle(computed(() => {
      if (storyStore.currentStory) {
        let title = storyStore.currentStory.title;
        if (storyStore.currentVariant) {
          title += ` \u203A ${storyStore.currentVariant.title}`;
        }
        return `${title} | ${histoireConfig.theme.title}`;
      }
      return histoireConfig.theme.title;
    }));
    const loadSearch = ref(false);
    const isSearchOpen = ref(false);
    watch(isSearchOpen, (value) => {
      if (value) {
        loadSearch.value = true;
      }
    });
    onKeyboardShortcut(["ctrl+k", "meta+k"], (event) => {
      isSearchOpen.value = true;
      event.preventDefault();
    });
    const loading = ref(false);
    const mounted = ref(false);
    onMounted(() => {
      mounted.value = true;
    });
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createElementBlock(Fragment, null, [
        unref(storyStore).currentStory ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(), createBlock(_sfc_main$e, {
            key: unref(storyStore).currentStory.id,
            story: unref(storyStore).currentStory
          }, null, 8, ["story"]))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "htw-h-screen htw-bg-white dark:htw-bg-gray-700 dark:htw-text-gray-100",
          style: normalizeStyle({
            opacity: mounted.value && !loading.value ? 1 : 0
          })
        }, [
          unref(isMobile) ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(_sfc_main$6, {
              onSearch: _cache[0] || (_cache[0] = ($event) => isSearchOpen.value = true)
            }),
            createVNode(Breadcrumb, {
              tree: tree$1.value,
              stories: unref(stories)
            }, null, 8, ["tree", "stories"]),
            createVNode(_component_RouterView, { class: "htw-grow" })
          ])) : (openBlock(), createBlock(BaseSplitPane, {
            key: 1,
            "save-id": "main-horiz",
            min: 5,
            max: 50,
            "default-split": 15,
            class: "htw-h-full"
          }, {
            first: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createVNode(_sfc_main$6, {
                  class: "htw-flex-none",
                  onSearch: _cache[1] || (_cache[1] = ($event) => isSearchOpen.value = true)
                }),
                createVNode(_sfc_main$9, {
                  tree: tree$1.value,
                  stories: unref(stories),
                  class: "htw-flex-1"
                }, null, 8, ["tree", "stories"])
              ])
            ]),
            last: withCtx(() => [
              createVNode(_component_RouterView)
            ]),
            _: 1
          })),
          loadSearch.value ? (openBlock(), createBlock(_sfc_main$2, {
            key: 2,
            shown: isSearchOpen.value,
            onClose: _cache[2] || (_cache[2] = ($event) => isSearchOpen.value = false)
          }, null, 8, ["shown"])) : createCommentVNode("", true)
        ], 4),
        createVNode(Transition, { name: "__histoire-fade" }, {
          default: withCtx(() => [
            loading.value ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
function mountMainApp() {
  const app = createApp(_sfc_main);
  app.use(createPinia());
  app.use(plugin, {
    overflowPadding: 4,
    arrowPadding: 8,
    themes: {
      tooltip: {
        distance: 8
      },
      dropdown: {
        computeTransformOrigin: true,
        distance: 8
      }
    }
  });
  app.use(router);
  app.mount("#app");
}
mountMainApp();
export {
  BaseListItemLink as B,
  _export_sfc as _,
  useStoryStore as a,
  base as b,
  BaseSplitPane as c,
  _sfc_main$5 as d,
  isMobile as i,
  onKeyboardShortcut as o,
  useScrollOnActive as u
};
