import WebsiteProjectImage from './WebsiteProjectImage'
import MobileProjectImage from './MobileProjectImage';
import classes from './ProjectDescriptionSection.module.css'

export default function ProjectDescriptionSection(props) {
    function renderSection() {
        if (props.type === "website") {
            const desktopAlign = props.index % 2 === 0 ? {
                padding: '0 0 0 8rem',
                order1: 1,
                order2: 2,
                left: '-20%',
                textAlign: 'left',
            } : {
                padding: '0 8rem 0 0',
                order1: 2,
                order2: 1,
                left: '90%',
                textAlign: 'right',
            };

            return (
                <>
                    <div className={classes['project-description-container']}>
                        <p
                            className="description-text"
                            dangerouslySetInnerHTML={{
                                __html: props.projectDescription,
                            }}
                        />
                    </div>
                    <div 
                        className={classes['image-content-container']}
                        style={{ padding: desktopAlign.padding }}
                    >
                        <div 
                            className={classes['desktop-image-container']}
                            style={{ order: desktopAlign.order1 }}
                        >
                            <WebsiteProjectImage src={props.desktopImage} />
                            <div 
                                className={classes['mobile-overlay-container']}
                                style={{left: desktopAlign.left }}
                            >
                                <WebsiteProjectImage src={props.mobileImage} />
                            </div>
                        </div>
                        <div 
                            className={classes['image-description-container']}
                            style={{ order: desktopAlign.order2 }}
                        >
                            <p
                                className={classes['image-description-text']}
                                style={{ 
                                    textAlign: desktopAlign.textAlign,
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: props.imageDescription,
                                }}
                            />
                        </div>
                    </div>
                </>
            )
        } else if (props.type === "mobile") {
            return (
                <>
                    <div className={classes['project-description-container']}>
                        <p
                            className="description-text"
                            dangerouslySetInnerHTML={{
                                __html: props.projectDescription,
                            }}
                        />
                    </div>
                    <div 
                        className={classes['image-content-container']}
                    >
                        <div 
                            className={classes['mobile-image-container']}
                        >
                            <MobileProjectImage src={props.image} />
                        </div>
                        <div 
                            className={classes['image-description-container']}
                        >
                            <p
                                className={classes['image-description-text']}
                                dangerouslySetInnerHTML={{
                                    __html: props.imageDescription,
                                }}
                            />
                        </div>
                    </div>
                </>
            )

        }
    }

    return renderSection()
}
