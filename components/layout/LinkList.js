import LinkItem from "../UI/LinkItem";

import classes from './LinkList.module.css';

export default function LinkList(props) {
    return (
        <ul className={`${classes["link-list"]} swoop-in`}>
            {props.links.map((link) => (
                <LinkItem key={link.name} url={link.url} logo={link.logo} label={link.label} />
            ))};
        </ul>
    );
}