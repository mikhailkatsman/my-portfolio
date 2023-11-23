import classes from './MobileProjectImage.module.css';
import Image from 'next/image';

export default function MobileProjectImage(props) {
    const video = props.src.includes('.mp4') ? true : false

    return (
        <div className={ classes.wrapper }>
            <div className={ classes.imageContainer }>
                {video ?
                    <video autoPlay loop muted playsInline
                        style={{ 
                            borderRadius: "7%/3%",
                            width: "100%",
                            height: "100%"
                        }}
                    >
                        <source src={props.src} type="video/mp4" />
                    </video>
                :
                    <Image
                        style={{ borderRadius: "7%/3%" }}
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
                    backgroundImage: `url(/img/android.webp)`,
                    borderRadius: "9.8%/4.3%"
                }} 
            />
        </div>
    );
}
