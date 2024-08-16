import React from "react";

const Wplink = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.paragraph}>
          Here's your link to join our Karma Batch for Test Series
        </p>
        <a
          href="https://wa.me/919883284104?text=Hello%20I%27m%20interested%20in%20your%20Karma%20Batch.%20Can%20you%20share%20me%20the%20QR%20code?"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.whatsappButton}
        >
          Tap to join our KARMA Batch.
        </a>
      </div>
      <div style={styles.container}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.paragraph}>
          Here's your link to join our Baazigar Batch for Mentorship Program.
        </p>
        <a
          href="https://wa.me/919883284104?text=Hello%20I%27m%20interested%20in%20your%20Baazigar%20Batch.%20Can%20you%20share%20me%20the%20QR%20code?"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.whatsappButton}
        >
          Tap to join our BAAZIGAR Batch.
        </a>
      </div>
      <div style={styles.container}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.paragraph}>
          Here's your link to join our Saarthi Batch for Personal Guidance.
        </p>
        <a
          href="https://wa.me/919883284104?text=Hello%20I%27m%20interested%20in%20your%20Saarthi%20Batch.%20Can%20you%20share%20me%20the%20QR%20code?"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.whatsappButton}
        >
          Tap to join our Saarthi Batch.
        </a>
      </div>
    </>
  );
};
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff", // Keep the final backgroundColor declaration
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    margin: 0,
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#333",
  },
  paragraph: {
    color: "#555",
    marginBottom: "20px",
  },
  whatsappButton: {
    display: "inline-block",
    backgroundColor: "#25D366",
    color: "white",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default Wplink;
