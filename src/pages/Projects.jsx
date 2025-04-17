export default function Projects() {
    const list = [
      { title:'Novaspace',     img:'./src/assets/WODO LOGO 2.png' },
      { title:'Novaship',      img:'./src/assets/WODO LOGO 2.png' },
      { title:'Novascentauri', img:'./src/assets/WODO LOGO 2.png' }
    ];
  
    return (
      <section className="container mx-auto py-16" data-aos="fade-up">
        <h2 className="section-heading">Dự án nổi bật</h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
          {list.map(p => (
            <div key={p.title}
                 className="relative rounded-xl overflow-hidden cursor-pointer group bg-[#111]">
              <img src={p.img} alt={p.title}
                   className="object-cover w-full h-full brightness-100 group-hover:brightness-50 transition" />
              <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-2xl font-bold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  