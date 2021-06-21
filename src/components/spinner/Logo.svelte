<script>
  export let small = false;
</script>

<svg
  version="1.1"
  id="spinner"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 100 100"
  style="enable-background:new 0 0 100 100;"
  xml:space="preserve"
  class={small ? 'sd-spinner-small' : 'sd-spinner'}
>
  <style type="text/css">
    .st0 {
      fill: none;
      stroke: #2398ab;
      stroke-width: 3;
      stroke-linecap: round;
      stroke-miterlimit: 10;
    }
  </style>
  <g>
    <path class="st0" d="M50,95" />
    <path class="st0" d="M50,95C25.1,95,5,74.9,5,50S25.1,5,50,5s45,20.1,45,45	">
      <animateTransform
        accumulate="none"
        additive="replace"
        attributeName="transform"
        attributeType="XML"
        calcMode="linear"
        dur="3s"
        fill="remove"
        from="0 50 50"
        repeatCount="indefinite"
        restart="always"
        to="360 50 50"
        type="rotate"
      />
    </path>
  </g>
  <g>
    <path class="st0" d="M50,21" />
    <path class="st0" d="M50,21c16,0,29,13,29,29S66,79,50,79S21,66,21,50	">
      <animateTransform
        accumulate="none"
        additive="replace"
        attributeName="transform"
        attributeType="XML"
        calcMode="linear"
        dur="3s"
        fill="remove"
        from="360 50 50"
        repeatCount="indefinite"
        restart="always"
        to="0 50 50"
        type="rotate"
      />
    </path>
  </g>
  <g>
    <path class="st0" d="M50,62" />
    <path class="st0" d="M50,62c-6.6,0-12-5.4-12-12s5.4-12,12-12s12,5.4,12,12	">
      <animateTransform
        accumulate="none"
        additive="replace"
        attributeName="transform"
        attributeType="XML"
        calcMode="linear"
        dur="3s"
        fill="remove"
        from="0 50 50"
        repeatCount="indefinite"
        restart="always"
        to="360 50 50"
        type="rotate"
      />
    </path>
  </g>
</svg>

<style>
  .sd-spinner-small {
    height: 30px;
    width: 30px;
  }

  .sd-spinner {
    height: 60px;
    width: 60px;
  }
</style>
