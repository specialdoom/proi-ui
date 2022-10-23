import { X as SvelteComponentDev, Y as init, Z as safe_not_equal, _ as dispatch_dev, $ as validate_slots, a0 as svg_element, a1 as claim_svg_element, a2 as children, a3 as detach_dev, a4 as attr_dev, a5 as add_location, a6 as insert_hydration_dev, a7 as append_hydration_dev, a8 as noop, a9 as compute_slots, aa as create_slot, ab as empty, ac as transition_in, ad as group_outros, ae as transition_out, af as check_outros, ag as element, ah as create_component, ai as space, aj as text, ak as claim_element, al as claim_component, am as claim_space, an as claim_text, ao as mount_component, ap as destroy_component, aq as set_data_dev, ar as listen_dev, as as update_slot_base, at as get_all_dirty_from_scope, au as get_slot_changes, av as binding_callbacks, aw as bind, ax as add_flush_callback, ay as Logo_square, az as Logo_dark, aA as useDark, aB as useToggle, f as watch, aC as markRaw, R as reactive, d as defineComponent, k as ref, aD as watchEffect, o as openBlock, c as createBlock, m as mergeProps, aE as resolveDynamicComponent, q as createCommentVNode } from "./vendor.9762286d.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const file$5 = "D:/code/proi-ui/lib/icons/CheckIcon.svelte";
function create_fragment$6(ctx) {
  let svg;
  let path0;
  let path1;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path0 = claim_svg_element(svg_nodes, "path", {
        d: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true
      });
      children(path0).forEach(detach_dev);
      path1 = claim_svg_element(svg_nodes, "path", {
        d: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true
      });
      children(path1).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path0, "d", "M10 17.5C11.7352 17.5 13.4166 16.8984 14.7579 15.7976C16.0992 14.6968 17.0174 13.165 17.3559 11.4632C17.6944 9.76135 17.4324 7.9948 16.6144 6.46453C15.7965 4.93425 14.4732 3.73492 12.8701 3.0709C11.267 2.40689 9.48332 2.31926 7.82287 2.82295C6.16242 3.32664 4.72799 4.39049 3.76398 5.83322C2.79997 7.27596 2.36604 9.00832 2.53611 10.7351C2.70619 12.4619 3.46975 14.0764 4.6967 15.3033");
      attr_dev(path0, "stroke", "#357266");
      attr_dev(path0, "stroke-width", "2");
      attr_dev(path0, "stroke-linecap", "round");
      add_location(path0, file$5, 7, 2, 116);
      attr_dev(path1, "d", "M13.3334 8.33334L10.5688 11.6509C9.91318 12.4376 9.58539 12.8309 9.14482 12.8509C8.70425 12.8709 8.3422 12.5088 7.6181 11.7847L6.66671 10.8333");
      attr_dev(path1, "stroke", "#357266");
      attr_dev(path1, "stroke-width", "2");
      attr_dev(path1, "stroke-linecap", "round");
      add_location(path1, file$5, 13, 2, 597);
      attr_dev(svg, "width", "20");
      attr_dev(svg, "height", "20");
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$5, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      append_hydration_dev(svg, path0);
      append_hydration_dev(svg, path1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$6($$self, $$props) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("CheckIcon", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<CheckIcon> was created with unknown prop '${key}'`);
  });
  return [];
}
class CheckIcon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "CheckIcon",
      options,
      id: create_fragment$6.name
    });
  }
}
const file$4 = "D:/code/proi-ui/lib/icons/CloseIcon.svelte";
function create_fragment$5(ctx) {
  let svg;
  let path0;
  let path1;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path0 = claim_svg_element(svg_nodes, "path", {
        d: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true
      });
      children(path0).forEach(detach_dev);
      path1 = claim_svg_element(svg_nodes, "path", {
        d: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true
      });
      children(path1).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path0, "d", "M15 5L5 15");
      attr_dev(path0, "stroke", "#223843");
      attr_dev(path0, "stroke-width", "2");
      attr_dev(path0, "stroke-linecap", "round");
      attr_dev(path0, "stroke-linejoin", "round");
      add_location(path0, file$4, 7, 2, 116);
      attr_dev(path1, "d", "M5 5L15 15");
      attr_dev(path1, "stroke", "#223843");
      attr_dev(path1, "stroke-width", "2");
      attr_dev(path1, "stroke-linecap", "round");
      attr_dev(path1, "stroke-linejoin", "round");
      add_location(path1, file$4, 14, 2, 252);
      attr_dev(svg, "width", "20");
      attr_dev(svg, "height", "20");
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$4, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      append_hydration_dev(svg, path0);
      append_hydration_dev(svg, path1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("CloseIcon", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<CloseIcon> was created with unknown prop '${key}'`);
  });
  return [];
}
class CloseIcon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "CloseIcon",
      options,
      id: create_fragment$5.name
    });
  }
}
const file$3 = "D:/code/proi-ui/lib/icons/InfoIcon.svelte";
function create_fragment$4(ctx) {
  let svg;
  let circle;
  let path0;
  let path1;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      circle = svg_element("circle");
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      circle = claim_svg_element(svg_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        stroke: true,
        "stroke-width": true
      });
      children(circle).forEach(detach_dev);
      path0 = claim_svg_element(svg_nodes, "path", { d: true, fill: true, stroke: true });
      children(path0).forEach(detach_dev);
      path1 = claim_svg_element(svg_nodes, "path", {
        d: true,
        stroke: true,
        "stroke-width": true
      });
      children(path1).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(circle, "cx", "10");
      attr_dev(circle, "cy", "10");
      attr_dev(circle, "r", "7.5");
      attr_dev(circle, "stroke", "#2178C0");
      attr_dev(circle, "stroke-width", "2");
      add_location(circle, file$3, 7, 2, 116);
      attr_dev(path0, "d", "M10.4167 6.25001C10.4167 6.48013 10.2302 6.66668 10 6.66668C9.76992 6.66668 9.58337 6.48013 9.58337 6.25001C9.58337 6.01989 9.76992 5.83334 10 5.83334C10.2302 5.83334 10.4167 6.01989 10.4167 6.25001Z");
      attr_dev(path0, "fill", "#2178C0");
      attr_dev(path0, "stroke", "#2178C0");
      add_location(path0, file$3, 8, 2, 188);
      attr_dev(path1, "d", "M10 14.1667V8.33334");
      attr_dev(path1, "stroke", "#2178C0");
      attr_dev(path1, "stroke-width", "2");
      add_location(path1, file$3, 13, 2, 454);
      attr_dev(svg, "width", "20");
      attr_dev(svg, "height", "20");
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$3, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      append_hydration_dev(svg, circle);
      append_hydration_dev(svg, path0);
      append_hydration_dev(svg, path1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("InfoIcon", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<InfoIcon> was created with unknown prop '${key}'`);
  });
  return [];
}
class InfoIcon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "InfoIcon",
      options,
      id: create_fragment$4.name
    });
  }
}
const file$2 = "D:/code/proi-ui/lib/icons/WarningIcon.svelte";
function create_fragment$3(ctx) {
  let svg;
  let circle;
  let path0;
  let path1;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      circle = svg_element("circle");
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      circle = claim_svg_element(svg_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        transform: true,
        stroke: true,
        "stroke-width": true
      });
      children(circle).forEach(detach_dev);
      path0 = claim_svg_element(svg_nodes, "path", { d: true, fill: true, stroke: true });
      children(path0).forEach(detach_dev);
      path1 = claim_svg_element(svg_nodes, "path", {
        d: true,
        stroke: true,
        "stroke-width": true
      });
      children(path1).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(circle, "cx", "10");
      attr_dev(circle, "cy", "10");
      attr_dev(circle, "r", "7.5");
      attr_dev(circle, "transform", "rotate(-180 10 10)");
      attr_dev(circle, "stroke", "#D8A200");
      attr_dev(circle, "stroke-width", "2");
      add_location(circle, file$2, 7, 2, 116);
      attr_dev(path0, "d", "M9.58329 13.75C9.58329 13.5199 9.76984 13.3333 9.99996 13.3333C10.2301 13.3333 10.4166 13.5199 10.4166 13.75C10.4166 13.9801 10.2301 14.1667 9.99996 14.1667C9.76984 14.1667 9.58329 13.9801 9.58329 13.75Z");
      attr_dev(path0, "fill", "#D8A200");
      attr_dev(path0, "stroke", "#D8A200");
      add_location(path0, file$2, 15, 2, 252);
      attr_dev(path1, "d", "M10 5.83332L10 11.6667");
      attr_dev(path1, "stroke", "#E8AD00");
      attr_dev(path1, "stroke-width", "2");
      add_location(path1, file$2, 20, 2, 522);
      attr_dev(svg, "width", "20");
      attr_dev(svg, "height", "20");
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      append_hydration_dev(svg, circle);
      append_hydration_dev(svg, path0);
      append_hydration_dev(svg, path1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("WarningIcon", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<WarningIcon> was created with unknown prop '${key}'`);
  });
  return [];
}
class WarningIcon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "WarningIcon",
      options,
      id: create_fragment$3.name
    });
  }
}
const file$1 = "D:/code/proi-ui/lib/icons/StopIcon.svelte";
function create_fragment$2(ctx) {
  let svg;
  let circle;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      circle = svg_element("circle");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      circle = claim_svg_element(svg_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        stroke: true,
        "stroke-width": true
      });
      children(circle).forEach(detach_dev);
      path = claim_svg_element(svg_nodes, "path", {
        d: true,
        stroke: true,
        "stroke-width": true
      });
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(circle, "cx", "10");
      attr_dev(circle, "cy", "10");
      attr_dev(circle, "r", "7.5");
      attr_dev(circle, "stroke", "#B53C17");
      attr_dev(circle, "stroke-width", "2");
      add_location(circle, file$1, 7, 2, 116);
      attr_dev(path, "d", "M6.25 10H13.75");
      attr_dev(path, "stroke", "#B53C17");
      attr_dev(path, "stroke-width", "2");
      add_location(path, file$1, 8, 2, 188);
      attr_dev(svg, "width", "20");
      attr_dev(svg, "height", "20");
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      append_hydration_dev(svg, circle);
      append_hydration_dev(svg, path);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("StopIcon", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<StopIcon> was created with unknown prop '${key}'`);
  });
  return [];
}
class StopIcon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "StopIcon",
      options,
      id: create_fragment$2.name
    });
  }
}
const Alert_svelte_svelte_type_style_lang = "";
const file = "D:/code/proi-ui/lib/alert/Alert.svelte";
function create_if_block(ctx) {
  let div3;
  let div2;
  let div0;
  let switch_instance;
  let t0;
  let div1;
  let t1;
  let t2;
  let t3;
  let div3_class_value;
  let current;
  var switch_value = ctx[4][ctx[0]];
  function switch_props(ctx2) {
    return { $$inline: true };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }
  let if_block0 = ctx[2] && create_if_block_2(ctx);
  let if_block1 = ctx[6].default && create_if_block_1(ctx);
  const block = {
    c: function create() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      t0 = space();
      div1 = element("div");
      t1 = text(ctx[1]);
      t2 = space();
      if (if_block0)
        if_block0.c();
      t3 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true, "data-testid": true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true, "data-testid": true });
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes, ctx[1]);
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      if (if_block0)
        if_block0.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      if (if_block1)
        if_block1.l(div3_nodes);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "proi-alert-icon s-r7B_8kAwLa4n");
      add_location(div0, file, 22, 6, 707);
      attr_dev(div1, "class", "proi-alert-title s-r7B_8kAwLa4n");
      attr_dev(div1, "data-testid", "proi-alert-title");
      add_location(div1, file, 25, 6, 810);
      attr_dev(div2, "class", "proi-alert s-r7B_8kAwLa4n");
      add_location(div2, file, 21, 4, 675);
      attr_dev(div3, "class", div3_class_value = "proi-alert-container " + ctx[0] + " s-r7B_8kAwLa4n");
      attr_dev(div3, "data-testid", "proi-alert");
      add_location(div3, file, 20, 2, 600);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div3, anchor);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, div0);
      if (switch_instance) {
        mount_component(switch_instance, div0, null);
      }
      append_hydration_dev(div2, t0);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, t1);
      append_hydration_dev(div2, t2);
      if (if_block0)
        if_block0.m(div2, null);
      append_hydration_dev(div3, t3);
      if (if_block1)
        if_block1.m(div3, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (switch_value !== (switch_value = ctx2[4][ctx2[0]])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div0, null);
        } else {
          switch_instance = null;
        }
      }
      if (!current || dirty & 2)
        set_data_dev(t1, ctx2[1]);
      if (ctx2[2]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div2, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[6].default) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 64) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div3, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!current || dirty & 1 && div3_class_value !== (div3_class_value = "proi-alert-container " + ctx2[0] + " s-r7B_8kAwLa4n")) {
        attr_dev(div3, "class", div3_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div3);
      if (switch_instance)
        destroy_component(switch_instance);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(20:0) {#if !closed}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let div;
  let closeicon;
  let current;
  let mounted;
  let dispose;
  closeicon = new CloseIcon({ $$inline: true });
  const block = {
    c: function create() {
      div = element("div");
      create_component(closeicon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(closeicon.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "proi-alert-close-icon s-r7B_8kAwLa4n");
      add_location(div, file, 29, 8, 934);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(closeicon, div, null);
      current = true;
      if (!mounted) {
        dispose = listen_dev(div, "click", ctx[5], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(closeicon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(closeicon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(closeicon);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(29:6) {#if closable}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let div;
  let current;
  const default_slot_template = ctx[8].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[7], null);
  const block = {
    c: function create() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true, "data-testid": true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "proi-alert-description s-r7B_8kAwLa4n");
      attr_dev(div, "data-testid", "proi-alert-description");
      add_location(div, file, 35, 6, 1087);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 128)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[7],
            !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, null),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(35:4) {#if $$slots.default}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let if_block_anchor;
  let current;
  let if_block = !ctx[3] && create_if_block(ctx);
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (!ctx2[3]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Alert", slots, ["default"]);
  const $$slots = compute_slots(slots);
  let { variant = "success" } = $$props;
  let { title } = $$props;
  let { closable = false } = $$props;
  const icons = {
    success: CheckIcon,
    error: StopIcon,
    info: InfoIcon,
    warning: WarningIcon
  };
  let closed = false;
  const close = () => $$invalidate(3, closed = true);
  const writable_props = ["variant", "title", "closable"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Alert> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("variant" in $$props2)
      $$invalidate(0, variant = $$props2.variant);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("closable" in $$props2)
      $$invalidate(2, closable = $$props2.closable);
    if ("$$scope" in $$props2)
      $$invalidate(7, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    CheckIcon,
    CloseIcon,
    InfoIcon,
    WarningIcon,
    StopIcon,
    variant,
    title,
    closable,
    icons,
    closed,
    close
  });
  $$self.$inject_state = ($$props2) => {
    if ("variant" in $$props2)
      $$invalidate(0, variant = $$props2.variant);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("closable" in $$props2)
      $$invalidate(2, closable = $$props2.closable);
    if ("closed" in $$props2)
      $$invalidate(3, closed = $$props2.closed);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [variant, title, closable, closed, icons, close, $$slots, $$scope, slots];
}
class Alert extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { variant: 0, title: 1, closable: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Alert",
      options,
      id: create_fragment$1.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[1] === void 0 && !("title" in props)) {
      console.warn("<Alert> was created without expected prop 'title'");
    }
  }
  get variant() {
    throw new Error("<Alert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set variant(value) {
    throw new Error("<Alert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get title() {
    throw new Error("<Alert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set title(value) {
    throw new Error("<Alert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get closable() {
    throw new Error("<Alert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set closable(value) {
    throw new Error("<Alert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_default_slot_10(ctx) {
  let alert;
  let current;
  alert = new Alert({
    props: { title: ctx[1] },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(alert.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(alert.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(alert, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const alert_changes = {};
      if (dirty & 2)
        alert_changes.title = ctx2[1];
      alert.$set(alert_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(alert.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(alert.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(alert, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_10.name,
    type: "slot",
    source: '(10:2) <Hst.Variant title=\\"Default\\">',
    ctx
  });
  return block;
}
function create_default_slot_9(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(ctx[4]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, ctx[4]);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 16)
        set_data_dev(t, ctx2[4]);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(15:4) <Alert {title}>",
    ctx
  });
  return block;
}
function create_default_slot_8(ctx) {
  let alert;
  let current;
  alert = new Alert({
    props: {
      title: ctx[1],
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(alert.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(alert.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(alert, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const alert_changes = {};
      if (dirty & 2)
        alert_changes.title = ctx2[1];
      if (dirty & 528) {
        alert_changes.$$scope = { dirty, ctx: ctx2 };
      }
      alert.$set(alert_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(alert.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(alert.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(alert, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_8.name,
    type: "slot",
    source: '(14:2) <Hst.Variant title=\\"With description\\">',
    ctx
  });
  return block;
}
function create_default_slot_7(ctx) {
  let alert;
  let current;
  alert = new Alert({
    props: {
      title: ctx[1],
      variant: "success"
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(alert.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(alert.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(alert, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const alert_changes = {};
      if (dirty & 2)
        alert_changes.title = ctx2[1];
      alert.$set(alert_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(alert.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(alert.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(alert, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_7.name,
    type: "slot",
    source: '(18:2) <Hst.Variant title=\\"Success alert\\">',
    ctx
  });
  return block;
}
function create_default_slot_6(ctx) {
  let alert;
  let current;
  alert = new Alert({
    props: {
      title: ctx[1],
      variant: "warning"
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(alert.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(alert.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(alert, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const alert_changes = {};
      if (dirty & 2)
        alert_changes.title = ctx2[1];
      alert.$set(alert_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(alert.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(alert.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(alert, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_6.name,
    type: "slot",
    source: '(22:2) <Hst.Variant title=\\"Warning alert\\">',
    ctx
  });
  return block;
}
function create_default_slot_5(ctx) {
  let alert;
  let current;
  alert = new Alert({
    props: {
      title: ctx[1],
      variant: "error"
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(alert.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(alert.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(alert, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const alert_changes = {};
      if (dirty & 2)
        alert_changes.title = ctx2[1];
      alert.$set(alert_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(alert.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(alert.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(alert, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_5.name,
    type: "slot",
    source: '(26:2) <Hst.Variant title=\\"Error alert\\">',
    ctx
  });
  return block;
}
function create_default_slot_4(ctx) {
  let alert;
  let current;
  alert = new Alert({
    props: { title: ctx[1], variant: "info" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(alert.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(alert.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(alert, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const alert_changes = {};
      if (dirty & 2)
        alert_changes.title = ctx2[1];
      alert.$set(alert_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(alert.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(alert.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(alert, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4.name,
    type: "slot",
    source: '(30:2) <Hst.Variant title=\\"Info alert\\">',
    ctx
  });
  return block;
}
function create_default_slot_3(ctx) {
  let alert;
  let current;
  alert = new Alert({
    props: {
      title: ctx[1],
      variant: ctx[2],
      closable: true
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(alert.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(alert.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(alert, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const alert_changes = {};
      if (dirty & 2)
        alert_changes.title = ctx2[1];
      if (dirty & 4)
        alert_changes.variant = ctx2[2];
      alert.$set(alert_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(alert.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(alert.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(alert, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3.name,
    type: "slot",
    source: '(34:2) <Hst.Variant title=\\"Closable\\">',
    ctx
  });
  return block;
}
function create_default_slot_2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(ctx[4]);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, ctx[4]);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & 16)
        set_data_dev(t, ctx2[4]);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(39:4) <Alert {title} {variant} {closable}>",
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let alert;
  let current;
  alert = new Alert({
    props: {
      title: ctx[1],
      variant: ctx[2],
      closable: ctx[3],
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(alert.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(alert.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(alert, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const alert_changes = {};
      if (dirty & 2)
        alert_changes.title = ctx2[1];
      if (dirty & 4)
        alert_changes.variant = ctx2[2];
      if (dirty & 8)
        alert_changes.closable = ctx2[3];
      if (dirty & 528) {
        alert_changes.$$scope = { dirty, ctx: ctx2 };
      }
      alert.$set(alert_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(alert.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(alert.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(alert, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(38:2) <Hst.Variant title=\\"Playground\\">',
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_text0;
  let updating_value;
  let t0;
  let hst_text1;
  let updating_value_1;
  let t1;
  let hst_select;
  let updating_value_2;
  let t2;
  let hst_checkbox;
  let updating_value_3;
  let current;
  function hst_text0_value_binding(value) {
    ctx[5](value);
  }
  let hst_text0_props = { title: "Title" };
  if (ctx[1] !== void 0) {
    hst_text0_props.value = ctx[1];
  }
  hst_text0 = new ctx[0].Text({ props: hst_text0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text0, "value", hst_text0_value_binding));
  function hst_text1_value_binding(value) {
    ctx[6](value);
  }
  let hst_text1_props = { title: "Description" };
  if (ctx[4] !== void 0) {
    hst_text1_props.value = ctx[4];
  }
  hst_text1 = new ctx[0].Text({ props: hst_text1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_text1, "value", hst_text1_value_binding));
  function hst_select_value_binding(value) {
    ctx[7](value);
  }
  let hst_select_props = {
    title: "Variant",
    options: [
      { label: "Success", value: "success" },
      { label: "Info", value: "info" },
      { label: "Error", value: "error" },
      { label: "Warning", value: "warning" }
    ]
  };
  if (ctx[2] !== void 0) {
    hst_select_props.value = ctx[2];
  }
  hst_select = new ctx[0].Select({ props: hst_select_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_select, "value", hst_select_value_binding));
  function hst_checkbox_value_binding(value) {
    ctx[8](value);
  }
  let hst_checkbox_props = { title: "Closable" };
  if (ctx[3] !== void 0) {
    hst_checkbox_props.value = ctx[3];
  }
  hst_checkbox = new ctx[0].Checkbox({
    props: hst_checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(hst_checkbox, "value", hst_checkbox_value_binding));
  const block = {
    c: function create() {
      create_component(hst_text0.$$.fragment);
      t0 = space();
      create_component(hst_text1.$$.fragment);
      t1 = space();
      create_component(hst_select.$$.fragment);
      t2 = space();
      create_component(hst_checkbox.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_text0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(hst_text1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(hst_select.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(hst_checkbox.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_text0, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      mount_component(hst_text1, target, anchor);
      insert_hydration_dev(target, t1, anchor);
      mount_component(hst_select, target, anchor);
      insert_hydration_dev(target, t2, anchor);
      mount_component(hst_checkbox, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_text0_changes = {};
      if (!updating_value && dirty & 2) {
        updating_value = true;
        hst_text0_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_text0.$set(hst_text0_changes);
      const hst_text1_changes = {};
      if (!updating_value_1 && dirty & 16) {
        updating_value_1 = true;
        hst_text1_changes.value = ctx2[4];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_text1.$set(hst_text1_changes);
      const hst_select_changes = {};
      if (!updating_value_2 && dirty & 4) {
        updating_value_2 = true;
        hst_select_changes.value = ctx2[2];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_select.$set(hst_select_changes);
      const hst_checkbox_changes = {};
      if (!updating_value_3 && dirty & 8) {
        updating_value_3 = true;
        hst_checkbox_changes.value = ctx2[3];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_checkbox.$set(hst_checkbox_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_text0.$$.fragment, local);
      transition_in(hst_text1.$$.fragment, local);
      transition_in(hst_select.$$.fragment, local);
      transition_in(hst_checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_text0.$$.fragment, local);
      transition_out(hst_text1.$$.fragment, local);
      transition_out(hst_select.$$.fragment, local);
      transition_out(hst_checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_text0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_text1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_select, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_checkbox, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(41:4) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let hst_variant0;
  let t0;
  let hst_variant1;
  let t1;
  let hst_variant2;
  let t2;
  let hst_variant3;
  let t3;
  let hst_variant4;
  let t4;
  let hst_variant5;
  let t5;
  let hst_variant6;
  let t6;
  let hst_variant7;
  let current;
  hst_variant0 = new ctx[0].Variant({
    props: {
      title: "Default",
      $$slots: { default: [create_default_slot_10] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new ctx[0].Variant({
    props: {
      title: "With description",
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant2 = new ctx[0].Variant({
    props: {
      title: "Success alert",
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant3 = new ctx[0].Variant({
    props: {
      title: "Warning alert",
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant4 = new ctx[0].Variant({
    props: {
      title: "Error alert",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant5 = new ctx[0].Variant({
    props: {
      title: "Info alert",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant6 = new ctx[0].Variant({
    props: {
      title: "Closable",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant7 = new ctx[0].Variant({
    props: {
      title: "Playground",
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot_1]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t0 = space();
      create_component(hst_variant1.$$.fragment);
      t1 = space();
      create_component(hst_variant2.$$.fragment);
      t2 = space();
      create_component(hst_variant3.$$.fragment);
      t3 = space();
      create_component(hst_variant4.$$.fragment);
      t4 = space();
      create_component(hst_variant5.$$.fragment);
      t5 = space();
      create_component(hst_variant6.$$.fragment);
      t6 = space();
      create_component(hst_variant7.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_variant0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(hst_variant1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(hst_variant2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(hst_variant3.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(hst_variant4.$$.fragment, nodes);
      t4 = claim_space(nodes);
      claim_component(hst_variant5.$$.fragment, nodes);
      t5 = claim_space(nodes);
      claim_component(hst_variant6.$$.fragment, nodes);
      t6 = claim_space(nodes);
      claim_component(hst_variant7.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      mount_component(hst_variant1, target, anchor);
      insert_hydration_dev(target, t1, anchor);
      mount_component(hst_variant2, target, anchor);
      insert_hydration_dev(target, t2, anchor);
      mount_component(hst_variant3, target, anchor);
      insert_hydration_dev(target, t3, anchor);
      mount_component(hst_variant4, target, anchor);
      insert_hydration_dev(target, t4, anchor);
      mount_component(hst_variant5, target, anchor);
      insert_hydration_dev(target, t5, anchor);
      mount_component(hst_variant6, target, anchor);
      insert_hydration_dev(target, t6, anchor);
      mount_component(hst_variant7, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & 514) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & 530) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
      const hst_variant2_changes = {};
      if (dirty & 514) {
        hst_variant2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant2.$set(hst_variant2_changes);
      const hst_variant3_changes = {};
      if (dirty & 514) {
        hst_variant3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant3.$set(hst_variant3_changes);
      const hst_variant4_changes = {};
      if (dirty & 514) {
        hst_variant4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant4.$set(hst_variant4_changes);
      const hst_variant5_changes = {};
      if (dirty & 514) {
        hst_variant5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant5.$set(hst_variant5_changes);
      const hst_variant6_changes = {};
      if (dirty & 518) {
        hst_variant6_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant6.$set(hst_variant6_changes);
      const hst_variant7_changes = {};
      if (dirty & 542) {
        hst_variant7_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant7.$set(hst_variant7_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      transition_in(hst_variant2.$$.fragment, local);
      transition_in(hst_variant3.$$.fragment, local);
      transition_in(hst_variant4.$$.fragment, local);
      transition_in(hst_variant5.$$.fragment, local);
      transition_in(hst_variant6.$$.fragment, local);
      transition_in(hst_variant7.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      transition_out(hst_variant2.$$.fragment, local);
      transition_out(hst_variant3.$$.fragment, local);
      transition_out(hst_variant4.$$.fragment, local);
      transition_out(hst_variant5.$$.fragment, local);
      transition_out(hst_variant6.$$.fragment, local);
      transition_out(hst_variant7.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_variant0, detaching);
      if (detaching)
        detach_dev(t0);
      destroy_component(hst_variant1, detaching);
      if (detaching)
        detach_dev(t1);
      destroy_component(hst_variant2, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(hst_variant3, detaching);
      if (detaching)
        detach_dev(t3);
      destroy_component(hst_variant4, detaching);
      if (detaching)
        detach_dev(t4);
      destroy_component(hst_variant5, detaching);
      if (detaching)
        detach_dev(t5);
      destroy_component(hst_variant6, detaching);
      if (detaching)
        detach_dev(t6);
      destroy_component(hst_variant7, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(9:0) <Hst.Story title=\\"Alert\\">',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new ctx[0].Story({
    props: {
      title: "Alert",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & 542) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Alert_story", slots, []);
  let { Hst } = $$props;
  let title = "Alert title";
  let variant = "success";
  let closable = true;
  let description = "Description";
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Alert_story> was created with unknown prop '${key}'`);
  });
  function hst_text0_value_binding(value) {
    title = value;
    $$invalidate(1, title);
  }
  function hst_text1_value_binding(value) {
    description = value;
    $$invalidate(4, description);
  }
  function hst_select_value_binding(value) {
    variant = value;
    $$invalidate(2, variant);
  }
  function hst_checkbox_value_binding(value) {
    closable = value;
    $$invalidate(3, closable);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Alert,
    Hst,
    title,
    variant,
    closable,
    description
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("variant" in $$props2)
      $$invalidate(2, variant = $$props2.variant);
    if ("closable" in $$props2)
      $$invalidate(3, closable = $$props2.closable);
    if ("description" in $$props2)
      $$invalidate(4, description = $$props2.description);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    title,
    variant,
    closable,
    description,
    hst_text0_value_binding,
    hst_text1_value_binding,
    hst_select_value_binding,
    hst_checkbox_value_binding
  ];
}
class Alert_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Alert_story",
      options,
      id: create_fragment.name
    });
    const { ctx } = this.$$;
    const props = options.props || {};
    if (ctx[0] === void 0 && !("Hst" in props)) {
      console.warn("<Alert_story> was created without expected prop 'Hst'");
    }
  }
  get Hst() {
    throw new Error("<Alert_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Alert_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [{ "id": "lib-alert-alert-story-svelte", "path": ["Alert"], "filePath": "lib/alert/Alert.story.svelte", "story": { "id": "lib-alert-alert-story-svelte", "title": "Alert", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "lib-alert-alert-story-svelte-0", "title": "Default", "icon": null, "iconColor": null }, { "id": "lib-alert-alert-story-svelte-1", "title": "With description", "icon": null, "iconColor": null }, { "id": "lib-alert-alert-story-svelte-2", "title": "Success alert", "icon": null, "iconColor": null }, { "id": "lib-alert-alert-story-svelte-3", "title": "Warning alert", "icon": null, "iconColor": null }, { "id": "lib-alert-alert-story-svelte-4", "title": "Error alert", "icon": null, "iconColor": null }, { "id": "lib-alert-alert-story-svelte-5", "title": "Info alert", "icon": null, "iconColor": null }, { "id": "lib-alert-alert-story-svelte-6", "title": "Closable", "icon": null, "iconColor": null }, { "id": "lib-alert-alert-story-svelte-7", "title": "Playground", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte3", "index": 0, component: Alert_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_lib-alert-alert-story-svelte.2037397c.js"), true ? [] : void 0) }];
let tree = [{ "title": "Alert", "index": 0 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "D:/code/proi-ui/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-svelte", "supportPlugin": { "id": "svelte3", "moduleName": "@histoire/plugin-svelte", "setupFn": "setupSvelte3" } }], "outDir": "D:/code/proi-ui/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/package/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "svelte", "patterns": ["**/*.svelte"], "pluginIds": ["svelte3"] }], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "logo": { "square": "@histoire/plugin-svelte/assets/histoire-svelte.svg", "light": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg", "dark": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg" } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent" }, { "label": "White", "color": "#fff" }, { "label": "Light gray", "color": "#aaa" }, { "label": "Dark gray", "color": "#333" }, { "label": "Black", "color": "#000" }], "sandboxDarkClass": "dark", "routerMode": "history", "viteIgnorePlugins": ["vite-plugin-svelte-kit"], "viteNodeInlineDeps": [], "setupFile": "./histoire.setup.js" };
const logos = { square: Logo_square, light: Logo_dark, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const isDark = useDark({ valueDark: "htw-dark" });
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file2, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file2) {
      if (key === "story") {
        Object.assign(result.story, {
          ...file2.story,
          file: markRaw(result),
          variants: file2.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        });
      } else if (key !== "component") {
        result[key] = file2[key];
      }
    }
  } else {
    result = {
      ...file2,
      component: markRaw(file2.component),
      story: {
        ...file2.story,
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor.9762286d.js").then((n) => n.b5), true ? [] : void 0),
  "svelte3": () => __vitePreload(() => import("./vendor.9762286d.js").then((n) => n.b6), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  toggleDark as t
};
