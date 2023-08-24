import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [answer, setAnswer] = useState("");

  const HandleClick = (e: any) => {
    setAnswer(answer.concat(e.target.value));
  };

  const Calculate = () => {
    try {
      setAnswer(eval(answer));
    } catch (err) {
      setAnswer("error");
    }
  };

  const Clear = () => {
    setAnswer("");
  };

  const Back = () => {
    setAnswer(answer.slice(0, -1));
  };

  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <input value={answer} />
        </div>

        <div className={styles.middle}>
          <div className={styles.gridContainer}>
            <button onClick={HandleClick} value={"1"} className={styles.num}>
              1
            </button>
            <button onClick={HandleClick} value={"2"} className={styles.num}>
              2
            </button>
            <button onClick={HandleClick} value={"3"} className={styles.num}>
              3
            </button>
            <button onClick={HandleClick} value={"4"} className={styles.num}>
              4
            </button>
            <button onClick={HandleClick} value={"5"} className={styles.num}>
              5
            </button>
            <button onClick={HandleClick} value={"6"} className={styles.num}>
              6
            </button>
            <button onClick={HandleClick} value={"7"} className={styles.num}>
              7
            </button>
            <button onClick={HandleClick} value={"8"} className={styles.num}>
              8
            </button>
            <button onClick={HandleClick} value={"9"} className={styles.num}>
              9
            </button>
          </div>
        </div>

        <div className={styles.calCont}>
          <div className={styles.enter} onClick={Clear}>
            clear
          </div>
          <div className={styles.enter} onClick={Back}>
            back
          </div>
          <div className={styles.enter} onClick={Calculate}>
            enter
          </div>
        </div>

        <div className={styles.lower}>
          <button onClick={HandleClick} value={"+"} className={styles.conj}>
            +
          </button>
          <button onClick={HandleClick} value={"-"} className={styles.conj}>
            -
          </button>
          <button onClick={HandleClick} value={"/"} className={styles.conj}>
            /
          </button>
          <button onClick={HandleClick} value={"*"} className={styles.conj}>
            *
          </button>
        </div>
      </div>
    </div>
  );
}
