import Image from "next/image";

function TextCell({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 cursor-pointer px-6 py-4 w-full">
      <span className="font-bold text-xs md:text-sm uppercase tracking-wide text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

function ImageCell({ name, image }: { name: string; image: string }) {
  return (
    <div className="relative rounded-md overflow-hidden aspect-[4/3] group cursor-pointer">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 40vw, 20vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

export default function CategorySection() {
  return (
    <section className="w-full px-6 py-12 md:px-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Category</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div className="row-span-2 flex flex-col gap-4">
            <div className="flex items-center">
              <TextCell name="Football" />
            </div>
            <div className="flex-1 rounded-md overflow-hidden">
              <ImageCell name="Football" image="/images/football.png" />
            </div>
          </div>
          <div className="row-span-2 flex flex-col gap-4">
            <div className="flex-1 rounded-md overflow-hidden">
              <ImageCell name="Basketball" image="/images/basketball.png" />
            </div>
            <div className="flex items-center">
              <TextCell name="Basket Ball" />
            </div>
          </div>

          <div className="row-span-2 flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <TextCell name="Car Sport" />
            </div>
            <div className="flex-1 rounded-md overflow-hidden">
              <ImageCell name="Car Sport" image="/images/carsport.png" />
            </div>
          </div>

          <div className="row-span-2 flex flex-col gap-4">
            <div className="flex-1 rounded-md overflow-hidden bg-black">
              <ImageCell name="Table Tennis" image="/images/tabletennis.png" />
            </div>
            <div className="flex items-center justify-end">
              <TextCell name="Table Tennis" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
