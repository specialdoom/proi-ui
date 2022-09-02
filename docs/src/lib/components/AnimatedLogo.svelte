<svg
  id="ezT6IuhkUXB1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 40 40"
  shape-rendering="geometricPrecision"
  text-rendering="geometricPrecision"
>
  <g id="outer_circle_rotate" transform="translate(20,20) rotate(0)">
    <path
      d="M1,20C1,30.4934,9.50659,39,20,39s19-8.5066,19-19-8.5066-19-19-19"
      transform="translate(-20,-20)"
      fill="none"
      stroke="#2398ab"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <g id="middle_circle_move" transform="translate(20,20)">
    <g id="middle_cirecle_rotate" transform="rotate(0)">
      <path
        d="M32,27c0-6.6274-5.3726-12-12-12s-12,5.3726-12,12s5.3726,12,12,12"
        transform="translate(-20,-27)"
        fill="none"
        stroke="#2398ab"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </g>
  <g id="inner_circle_move" transform="translate(20,20)">
    <g id="inner_circle_rotate" transform="rotate(0)">
      <path
        d="M14,32.5c0,3.5899,2.9101,6.5,6.5,6.5s6.5-2.9101,6.5-6.5-2.9101-6.5-6.5-6.5"
        transform="translate(-20.5,-32.5)"
        fill="none"
        stroke="#2398ab"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </g>
</svg>

<style>
  #outer_circle_rotate {
    animation: outer_circle_rotate_anim 3000ms linear 1 normal forwards;
  }
  @keyframes outer_circle_rotate_anim {
    0% {
      transform: translate(20px, 20px) rotate(0deg);
    }
    66.666667% {
      transform: translate(20px, 20px) rotate(360deg);
    }
    100% {
      transform: translate(20px, 20px) rotate(360deg);
    }
  }
  #middle_circle_move {
    animation: middle_circle_move_anim 3000ms linear 1 normal forwards;
  }
  @keyframes middle_circle_move_anim {
    0% {
      transform: translate(20px, 20px);
    }
    33.333333% {
      transform: translate(20px, 20px);
    }
    66.666667% {
      transform: translate(20px, 27px);
    }
    100% {
      transform: translate(20px, 27px);
    }
  }
  #middle_cirecle_rotate {
    animation: middle_cirecle_rotate_anim 3000ms linear 1 normal forwards;
  }
  @keyframes middle_cirecle_rotate_anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  #inner_circle_move {
    animation: inner_circle_move_anim 3000ms linear 1 normal forwards;
  }
  @keyframes inner_circle_move_anim {
    0% {
      transform: translate(20px, 20px);
    }
    33.333333% {
      transform: translate(20px, 20px);
    }
    100% {
      transform: translate(20px, 32.5px);
    }
  }
  #inner_circle_rotate {
    animation: inner_circle_rotate_anim 3000ms linear 1 normal forwards;
  }
  @keyframes inner_circle_rotate_anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  path {
    animation: fillcolor 3s linear 1 normal forwards;
  }

  @keyframes fillcolor {
    0%,
    50% {
      stroke: #2398ab;
    }
    50%,
    100% {
      stroke: #357266;
    }
  }
</style>
