const wcagStatusBadge = (props) => {
  let text = props?.component?.wcag ?? "WCAG Not reviewed";
  let aClass = "";
  debugger;
  switch (text) {
    case "WCAG Not reviewed":
      aClass = "pill--error";
      break;
    case "WCAG A":
      aClass = "pill--warn";
      break;
    case "WCAG AA":
      aClass = "pill--success pill--outlined";
      break;
    case "WCAG AAA":
      aClass = "pill--success pill--outlined";
      break;
  }
  return <div class={`pill pill--outlined pill--square ${aClass}`}>{text}</div>;
};

export default wcagStatusBadge;
