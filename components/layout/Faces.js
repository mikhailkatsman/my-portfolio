import Face from "./Face";
import styles from "./Faces.module.css";

export default function Faces() {
    return (
        <section className={styles["face-section"]}>
            <div className={styles["face-section-row"]}>
                <Face id="face-1" plain="y-plain"></Face>
                <Face id="face-2" plain="z-plain"></Face>
            </div>
            <Face id="face-3" plain="x-plain"></Face>
            <div className={styles["face-section-row"]}>
                <Face id="face-4" plain="z-plain"></Face>
                <Face id="face-5" plain="y-plain"></Face>
            </div>
        </section>
    );
}
