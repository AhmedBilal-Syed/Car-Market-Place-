const brands = () => {
  const brands = [
    "Suzuki", "Toyota", "Honda", "KIA", "Hyundai", "MG",
    "Changan", "BYD", "BMW", "Audi", "Proton", "Porsche",
    "Mercedes Benz", "Prince", "DFSK", "Isuzu", "Haval", "BAIC",
    "Peugeot", "ORA", "JAC", "JW Forland", "Tank", "Chery"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">New Cars by Make</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <div 
            key={index}
            className="p-4 border rounded-lg hover:bg-gray-50 hover:shadow-sm transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-center h-16 mb-2">
              <img 
                src={`https://logo.clearbit.com/${brand.toLowerCase().replace(/\s/g, '')}.com`} 
                alt={brand}
                className="h-full object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/60';
                }}
              />
            </div>
            <p className="text-center font-medium">{brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default brands;