import React from 'react';

export default function About() {
  const members = [
    {
      name: 'Khánh Ngân',
      role: 'Leader',
      img: './src/assets/KHÁNH NGÂN (1).jpg',
      desc: `Một leader chuẩn mực với phong cách làm việc nghiêm túc, luôn đảm bảo mọi thứ chạy đúng deadline kể cả khi sát nút thời gian. Tuy nhiên, đằng sau vẻ ngoài chuyên nghiệp ấy là một tâm hồn 'vô tri đáng yêu', luôn sẵn sàng cà khịa nhẹ mọi lúc, mang lại không khí vui vẻ cho cả team.`
    },
    {
      name: 'Quang Khánh',
      role: 'Sinh hoạt',
      img: './src/assets/KHÁNH 3.png',
      desc: `Tuổi trẻ tài năng, lanh lợi và luôn tràn đầy nhiệt huyết. Trong những lúc team rơi vào tình huống khó xử tưởng như ‘toang’ đến nơi, bạn ấy luôn kịp thời xuất hiện như một ‘người hùng thầm lặng’, đưa ra giải pháp nhanh gọn, giúp cả nhóm vượt qua khủng hoảng một cách ngoạn mục.`
    },
    {
      name: 'Bảo Ngọc',
      role: 'Sinh hoạt',
      img: './src/assets/BẢO NGỌC.jpg',
      desc: `Hơi vô tri một chút, nhưng lại cực kỳ dễ thương và luôn biết cách pha trò, mang đến không khí vui vẻ cho cả nhóm. Dù có phần nụ cười ngây ngô, nhưng đừng để bị đánh lừa nhé, vì đôi lúc lại rất đáng tin cậy khi cần.`
    },
    {
      name: 'Hoàng Nguyên',
      role: 'Truyền thông',
      img: './src/assets/HOÀNG NGUYÊN (2).jpg',
      desc: `Tài năng, năng lượng và kiến thức đi đôi với trách nhiệm lớn lao nhưng đôi lúc thiếu một chút nghiêm túc trong công việc.`
    },
    {
      name: 'Việt Hưng',
      role: 'Hành chánh',
      img: './src/assets/VIỆT HƯNG.jpg',
      desc: `5 quả trứng vịt lộn không làm khó anh ấy, vì anh ấy là người rất cẩn thận và tỉ mỉ. Vì vậy, mọi người luôn tin tưởng giao cho anh ấy những nhiệm vụ quan trọng, như công việc kế toán đảm bảo sau dự án sẽ chẳng ai ngạc nhiên nếu anh ấy mua được con Fujifilm XT3.`
    },
    {
      name: 'Tường Vy',
      role: 'Hành chánh',
      img: './src/assets/TƯỜNG VY (3).jpg',
      desc: `Kể từ sau trại, bạn ấy như “ẩn sĩ giang hồ”, nhưng sự tỉ mỉ, trách nhiệm và tinh thần đồng đội của bạn ấy đã góp phần không nhỏ.`
    }
  ];

  return (
    <section id="about" className="container mx-auto py-16" data-aos="fade-up">
      <h2 className="section-heading text-center mb-8">Ban Điều Hành</h2>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {members.map((m) => (
          <article key={m.name} className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={m.img}
              alt={m.name}
              className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4 bg-gray-900 text-white">
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{m.role}</p>
              <p className="text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-300">{m.desc}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
              <p className="text-white mb-4">{m.desc}</p>
              <button className="px-6 py-2 border border-white rounded-xl text-white hover:bg-white hover:text-black transition-colors duration-300">
                TÌM HIỂU THÊM
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
