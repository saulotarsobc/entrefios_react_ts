import "./index.scss";

type SubTitleTypes = {
  subtitle: string;
};

function SubTitle(props: SubTitleTypes) {
  return <div id="subtitle">{props.subtitle}</div>;
}

export default SubTitle;
