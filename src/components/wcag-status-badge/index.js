const wcagStatusBadge = (props) => {
  let text = props?.component?.wcag ?? "WCAG Not reviewed";
  let aClass = "";
  switch (text) {
    case "WCAG Not reviewed":
      aClass = "pill--error";
      break;
    case "WCAG A":
      aClass = "pill--warn";
      break;
    case "WCAG AA":
      aClass = "pill--success";
      break;
    case "WCAG AA":
      aClass = "pill--success";
      break;
  }
  return <div class={`pill pill--square ${aClass}`}>{text}</div>;
};

export default wcagStatusBadge;
