function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
