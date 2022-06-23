const statusBadge = (props) => {
  let text = props?.component?.status ?? "coming soon";
  let aClass = "";
  switch (text) {
    case "coming soon":
      aClass = "pill--warn";
      break;
    case "under review":
      aClass = "pill--warn";
      break;
    case "live":
      aClass = "pill--success";
      break;
    case "deprecated":
      aClass = "pill--error";
      break;
    case "removed":
      aClass = "pill--error";
      break;
    default:
      aClass = "pill--info";
      break;
  }
  return <div class={`pill pill--square ${aClass}`}>{text}</div>;
};

export default statusBadge;
