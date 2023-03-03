import TechList from "@/components/layout/TechList";
import classes from "./ProjectHeaderDetails.module.css";
import LinkList from "./LinkList";

export default function HeaderDetails(props) {
    return (
        <div className={`${classes['header-details']} ${'fade-in'}`}>
            <h4 className={classes['title']}>Tech:</h4>
            <TechList tags={props.usedTechTags} />
            <h4 className={classes['title']}>Links:</h4>
            <LinkList links={props.links}/>
        </div>
    );
}