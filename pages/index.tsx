import styles from "../styles/index.module.css";
import Image from "next/image";

export default function Index() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.flexCenter}>
              <Image src="/logo.svg" width={150} height={100} />
            </div>

            <div>
              <div className={styles.title}>
                <h1> Green Got - REST APIs </h1>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <h2> Greetings </h2>
                <div className={styles.codeContainer}>
                  <pre className={styles.code} data-line="">
                    <span>GET /api/greetings/YOUR_FIRST_NAME</span>
                  </pre>
                </div>

                <h2> Create user </h2>
                <div className={styles.codeContainer}>
                  <pre className={styles.code} data-line="">
                    <span>POST /api/create_user</span> <br />
                    <span>
                      {`BODY {"firstName: "YOUR_FIRST_NAME", lastName: "YOUR_LAST_NAME"}`}
                    </span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
