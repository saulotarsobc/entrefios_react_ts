type TypeProps = {
  link: string;
  target: string;
  title: string;
};

export default function Item(props: TypeProps) {
  return (
    <a href={props.link} target={props.target} rel="noreferrer">
      <li className="link_iten">
        <img className="icon" src="" alt="iten icon" />
        <span className="link_title">{props.title}</span>
      </li>
    </a>
  );
}
