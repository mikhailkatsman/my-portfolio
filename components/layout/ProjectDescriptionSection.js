import ProjectImage from './ProjectImage'
import classes from './ProjectDescriptionSection.module.css'

export default function ProjectDescriptionSection(props) {
    const align = props.index % 2 === 0 ? {
        padding: '0 0 0 8rem',
        order1: 1,
        order2: 2,
        left: '-20%',
        textAlign: 'left'
    } : {
        padding: '0 8rem 0 0',
        order1: 2,
        order2: 1,
        left: '90%',
        textAlign: 'right'
    };

    return (
        <div 
            className={classes['content-container']}
            style={{ padding: align.padding }}
        >
            <div 
                className={classes['desktop-image-container']}
                style={{ order: align.order1 }}
            >
                <ProjectImage src={props.desktopImage} />
                <div 
                    className={classes['mobile-overlay-container']}
                    style={{left: align.left }}
                >
                    <ProjectImage src={props.mobileImage} />
                </div>
            </div>
            <div 
                className={classes['text-container']}
                style={{ order: align.order2 }}
            >
                <p
                    className={classes['description-text']}
                    style={{ textAlign: align.textAlign }}
                    dangerouslySetInnerHTML={{
                        __html: props.text,
                    }}
                />
            </div>
        </div>
    )
}
