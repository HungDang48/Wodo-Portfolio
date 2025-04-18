export default function Contact() {
  return (
    <section className="container mx-auto py-16 px-4" data-aos="fade-up">
      <h2 className="section-heading mb-8 text-center">Kết nối</h2>
      <div className="max-w-lg mx-auto bg-[#111] p-8 rounded-xl shadow-lg">
        <div className="mb-6 text-gray-300">
          <p><strong>Email:</strong> support@novaspace.org</p>
          <p><strong>Điện thoại:</strong> +84 912 345 678</p>
          <p><strong>Địa chỉ:</strong> 123 Đường Lương Y, Quận 1, TP. HCM</p>
        </div>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Tên của bạn"
            className="bg-transparent border-b-2 border-fg p-4 outline-none"
          />
          <input
            type="email"
            placeholder="Email của bạn"
            className="bg-transparent border-b-2 border-fg p-4 outline-none"
          />
          <textarea
            rows="4"
            placeholder="Bạn cần hỗ trợ gì?"
            className="bg-transparent border-b-2 border-fg p-4 outline-none"
          />
          <button
            type="submit"
            className="border-2 border-fg rounded-lg py-3 font-bold hover:bg-fg hover:text-bg transition"
          >
            Gửi liên hệ
          </button>
        </form>
      </div>
    </section>
  );
}
