type ItenType = {
  title: string;
};

function Iten(props: ItenType) {
  return <div id="title">{props.title}</div>;
}

export default Iten;
