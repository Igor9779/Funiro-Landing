import CouchSlider from '../components/CouchSlider';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-start">
      <div className="absolute inset-0 bg-[#FCF8F3] z-10" />
      <div className="absolute left-0 w-[964px] h-full bg-[#F9F1E7] z-20" />
      <div className="relative z-30 w-full">
        <CouchSlider />
      </div>
      <div className="absolute top-[56px] left-[100px] text-center bg-white bg-[rgba(255,255,255,0.8)] p-12 shadow-lg w-[494px] h-[553px] z-40">
        <h1 className="font-gilroy text-[56px] font-bold leading-[67.2px] text-left mb-4">
            High-Quality Furniture Just For You
        </h1>
        <p className="font-gilroy text-[20px] font-medium leading-[30px] text-left text-[#898989] mb-[46px]">
            Our furniture is made from selected and best quality materials that are suitable for your dream home.
        </p>
        <button className="bg-[#D1A56F] text-white px-6 py-3 w-[374px] h-[78px]">Shop Now</button>
      </div>
    </section>
  );
}


