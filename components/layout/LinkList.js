import Tag from "../UI/Tag";

import classes from './LinkList.module.css';

export default function LinkList(props) {
    return (
        <ul className={`${classes["link-list"]} swoop-in`}>
            {props.links.map((link) => (
                <Tag key={link.name} url={link.url} logo={link.logo} label={link.label} />
            ))}
        </ul>
    );
}