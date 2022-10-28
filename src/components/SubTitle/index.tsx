import "./index.scss";

type SubTitleTypes = {
  subtitle: string;
};

function index(props: SubTitleTypes) {
  return <div id="subtitle">{props.subtitle}</div>;
}

export default index;
