import React from 'react';

export default function Donate() {
  return (
    <section className="container mx-auto py-16 px-4" data-aos="fade-up">
      <h2 className="section-heading mb-8 text-center">Quyên góp cộng đồng</h2>
      <p className="max-w-2xl mx-auto mb-8 text-center text-gray-300">
        Hỗ trợ các chương trình thiện nguyện và dự án cộng đồng của chúng tôi. Mọi đóng góp của bạn đều
        mang lại sự thay đổi tích cực cho xã hội.
      </p>
      <form className="grid gap-6 max-w-md mx-auto bg-[#111] p-8 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Tên của bạn"
          className="bg-transparent border-b-2 border-fg p-4 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border-b-2 border-fg p-4 outline-none"
        />
        <input
          type="number"
          placeholder="Số tiền (VNĐ)"
          className="bg-transparent border-b-2 border-fg p-4 outline-none"
        />
        <textarea
          rows="3"
          placeholder="Lời nhắn của bạn"
          className="bg-transparent border-b-2 border-fg p-4 outline-none"
        />
        <button
          type="submit"
          className="border-2 border-fg rounded-lg py-3 font-bold hover:bg-fg hover:text-bg transition"
        >
          Quyên góp ngay
        </button>
      </form>
    </section>
  );
}