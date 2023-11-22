import classes from './WebsiteProjectImage.module.css';
import Image from 'next/image';

export default function WebsiteProjectImage(props) {
    const type = props.src.includes('desktop') ? 'desktop' : 'mobile'
    const video = props.src.includes('.mp4') ? true : false


    return (
        <div className={ classes[`wrapper-${type}`] }>
            <div className={ classes[`imageContainer-${type}`] }>
                {video ?
                    <video autoPlay loop muted playsInline
                        style={{ 
                            borderRadius: type === 'desktop' ? "1%/1.5%" : "8%/4%",
                            width: "100%",
                            height: "100%"
                        }}
                    >
                        <source src={props.src} type="video/mp4" />
                    </video>
                :
                    <Image
                        style={{ borderRadius: type === 'desktop' ? "0.5%/1.5%" : "8%/4%" }}
                        alt="Project Image"
                        src={props.src}
                        sizes="1080px"
                        fill={true}
                    />
                }
            </div>
            <div 
                className={classes.frame}
                style={{ 
                    backgroundImage: `url(/img/${type}.webp)`,
                    borderRadius: type === 'desktop' ? "3.2%/4%" : "15.3%/8%"
                }} 
            />
        </div>
    );
}
