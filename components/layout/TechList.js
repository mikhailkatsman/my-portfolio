import Tag from "../UI/Tag";
import classes from "./TechList.module.css";

export default function TechList(props) {
	return (
        <ul className={`${classes["tech-list"]} swoop-in`}>
            {props.tags.map((tech) => (
                <Tag key={tech.name} url={tech.url} logo={tech.logo} label={tech.label} />
            ))}
        </ul>
	);
}
