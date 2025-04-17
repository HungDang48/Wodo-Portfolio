export default function Contact() {
    return (
      <section className="container mx-auto py-16" data-aos="fade-up">
        <h2 className="section-heading">Kết nối</h2>
        <form className="grid gap-4 max-w-md mx-auto">
          <input type="text"  placeholder="Tên của bạn"
                 className="bg-transparent border-b-2 border-fg p-4 outline-none"/>
          <input type="email" placeholder="Email"
                 className="bg-transparent border-b-2 border-fg p-4 outline-none"/>
          <textarea rows="4"   placeholder="Bạn cần hỗ trợ gì?"
                 className="bg-transparent border-b-2 border-fg p-4 outline-none"/>
          <button type="submit"
                  className="border-2 border-fg rounded-lg py-3 font-bold
                             hover:bg-fg hover:text-bg transition">
            Gửi
          </button>
        </form>
      </section>
    );
  }
  