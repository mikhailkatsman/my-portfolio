import classes from './ProjectImageDesktop.module.css';
import Image from 'next/image';

export default function ProjectImageDesktop(props) {
    const type = props.src.includes('desktop') ? 'desktop' : 'mobile'


    return (
        <div className={ classes[`wrapper-${type}`] }>
            <div className={ classes[`imageContainer-${type}`] }>
                <Image
                    style={{ borderRadius: type === 'desktop' ? "0.6rem" : "3rem" }}
                    alt="Project Image"
                    src={props.src}
                    fill={true}
                />
            </div>
            <div 
                className={classes.frame}
                style={{ backgroundImage: `url(/img/${type}.webp)` }} 
            />
        </div>
    );
}
