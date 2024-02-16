export default function Lists({ list, name }) {
  return (
    <div className="bg-gray-100">
      <div className="px-14 py-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-500">
          {name}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {list.map((product, index) => (
            <div key={index} className="group relative rounded-xl p-3 shadow-xl bg-white flex hover:bg-gray-300 hover:shadow-zinc-500 cursor-pointer">
              <div className="w-12 h-12 overflow-hidden rounded-3xl lg:aspect-none group-hover:opacity-50 ">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mx-4">
                <div>
                  <h3 className=" text-black text-xl">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.first_name +" "+ product.last_name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{product.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
