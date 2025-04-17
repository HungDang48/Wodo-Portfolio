export default function Footer() {
    return (
      <footer className="py-16 text-center">
        <h1 className="font-ibm italic font-bold text-2xl">WODO Portfolio</h1>
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} WODO – Developed by Hưng Đặng
        </p>
      </footer>
    );
  }
  