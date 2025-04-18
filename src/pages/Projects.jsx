import React from 'react';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';

export default function Projects() {
  const phases = [
    {
      title: 'Giai đoạn 1',
      img: './src/assets/WODO LOGO 2.png',
      sections: [
        { title: 'Giới thiệu', content: 'Mô tả ngắn gọn về dự án Novaspace, mục tiêu và ý nghĩa.' },
        { title: 'Phạm vi', content: 'Phạm vi công việc bao gồm thiết kế giao diện, phát triển backend REST API và triển khai.' },
        { title: 'Mục tiêu', content: 'Tối ưu hóa trải nghiệm người dùng và tăng mức độ tương tác.' },
        { title: 'Deliverables', content: 'Báo cáo thiết kế, mã nguồn, tài liệu sử dụng và hướng dẫn vận hành.' }
      ]
    },
    {
      title: 'Giai đoạn 2',
      img: './src/assets/WODO LOGO 2.png',
      sections: [
        { title: 'Giới thiệu', content: 'Dự án Novaship hướng đến giải pháp giao nhận linh hoạt và theo dõi thời gian thực.' },
        { title: 'Phạm vi', content: 'Xây dựng hệ thống theo dõi đơn hàng, tối ưu lộ trình giao hàng.' },
        { title: 'Mục tiêu', content: 'Giảm thời gian giao hàng trung bình xuống dưới 30 phút.' },
        { title: 'Deliverables', content: 'Ứng dụng di động cho tài xế, dashboard quản trị và API.' }
      ]
    },
    {
      title: 'Giai đoạn 3',
      img: './src/assets/WODO LOGO 2.png',
      sections: [
        { title: 'Giới thiệu', content: 'Novascentauri là nền tảng cung cấp phân tích dữ liệu vũ trụ ảo.' },
        { title: 'Phạm vi', content: 'Thu thập dữ liệu, xử lý hình ảnh và trực quan hóa kết quả.' },
        { title: 'Mục tiêu', content: 'Khám phá kết cấu và hành vi đối tượng không gian.' },
        { title: 'Deliverables', content: 'Hệ thống trực quan hóa 3D và báo cáo khoa học.' }
      ]
    },
    {
      title: 'Giai đoạn 4',
      img: './src/assets/WODO LOGO 2.png',
      sections: [
        { title: 'Giới thiệu', content: 'Hoàn thiện và tối ưu, triển khai toàn diện hệ thống.' },
        { title: 'Phạm vi', content: 'Kiểm thử toàn diện, hướng dẫn vận hành và đào tạo người dùng.' },
        { title: 'Mục tiêu', content: 'Đảm bảo tính ổn định, scalability và security.' },
        { title: 'Deliverables', content: 'Bản release chính thức, tài liệu quản trị và báo cáo tổng kết.' }
      ]
    }
  ];

  return (
    <section className="container mx-auto py-16" data-aos="fade-up">
      <h2 className="section-heading mb-8 text-center">CÁC GIAI ĐOẠN CHÍNH</h2>
      <Swiper
        effect="cube"
        grabCursor
        cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
        pagination
        modules={[EffectCube, Pagination]}
        className="mySwiper max-w-4xl mx-auto"
      >
        {phases.map((phase) => (
          <SwiperSlide key={phase.title}>
            <div className="bg-[#111] rounded-xl overflow-hidden shadow-lg p-6 h-full flex flex-col">
              <img src={phase.img} alt={phase.title} className="w-full h-40 object-cover brightness-90 rounded-md mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-center">{phase.title}</h3>
              <div className="flex-1 overflow-auto">
                {phase.sections.map((sec) => (
                  <div key={sec.title} className="mb-3">
                    <h4 className="text-lg font-semibold">{sec.title}</h4>
                    <p className="text-sm leading-snug">{sec.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
