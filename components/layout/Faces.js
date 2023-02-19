import Face from "./Face";
import Card from "../UI/Card";
import styles from "./Faces.module.css";

export default function Faces() {
    return (
        <section className={styles["face-section"]}>
            <div className={styles["face-section-row"]}>
                <Face id="face-1" plain="y-plain">
                    <Card id="card-1" type="pivot-right">
                        <p>
                            My name is Mikhail
                        </p>
                    </Card>
                </Face>
                <Face id="face-2" plain="z-plain">
                    <Card id="card-2" type="pivot-left">
                        <h1>HEY!</h1>
                    </Card>
                </Face>
            </div>
            <Face id="face-3" plain="x-plain">

            </Face>
            <div className={styles["face-section-row"]}>
                <Face id="face-4" plain="z-plain">

                </Face>
                <Face id="face-5" plain="y-plain">

                </Face>
            </div>
        </section>
    );
}
