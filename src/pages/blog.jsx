import React from "react";

const blogPosts = [
  {
    title: "Bezos-Backed Slate Auto Reveals Anti Tesla Budget EV Truck",
    image: "/evtruck.png",
    category: "NEW CARS",
    author: "Omar Faruq",
    date: "May 15, 2025",
    views: 41,
    comments: 0,
    excerpt:
      "A new name is shaking up the electric vehicle world—and it’s not Tesla. Say hello to Slate Auto, a fresh American EV startup with a bold idea: an EV truck that’s affordable, simple, and built for the everyday...",
  },
  {
    title: "Suzuki GS150 Is Now Available On Installments",
    image: "bike.png",
    category: "BIKES IN PAKISTAN",
    author: "Omar Faruq",
    date: "May 14, 2025",
    views: 6775,
    comments: 0,
    excerpt:
      "For those who dream of owning a motorcycle that combines performance, comfort, and style, the Suzuki GS150 can be a good choice. Now, Suzuki makes it more accessible with an installment plan starting at just...",
  },
  {
    title: "PAMA – Car Sales Decreased By 5% Last Month",
    image: "carsales.png",
    category: "CARS IN PAKISTAN",
    author: "Omar Faruq",
    date: "May 14, 2025",
    views: 21345,
    comments: 0,
    excerpt:
      "This month, we bring you an updated analysis of the financial performance of local car manufacturers, focusing on the sales data from the previous month. Our report offers an in-depth look at the best-selling…",
  },
  {
    title: "Audi Pakistan Announces Updated Price List",
    image: "audi.png",
    category: "NEWS",
    author: "Sulmana ALi",
    date: "May 10, 2025",
    views: 7690,
    comments: 0,
    excerpt:
      "Audi Pakistan has officially revealed its 2025 price list, and it includes a mix of high-performance EVs and petrol-powered SUVs. Whether you’re into sleek electric mobility or traditional turbocharged muscle,…",
  },
  {
    title: "Straight-Up Scam FX beats Every Civic in Sight Drag Race",
    image: "scamrace.png",
    category: "CAR REVIEWs",
    author: "Sulmana ALi",
    date: "May 11, 2025",
    views: 610,
    comments: 4,
    excerpt:
      "Pakistan’s drag racing scene just witnessed one of the biggest shockers—and it came from the unlikeliest of contenders: a modest-looking Suzuki FX, now earning its nickname as the “Scam Car.” This tiny…",
  },
  {
    title: "2026 Corolla Cross Gets New GR Sporty Look",
    image: "toyota26.png",
    category: "NEW CARS",
    author: "Umer Farooq",
    date: "May 6, 2025",
    views: 30456,
    comments: 550,
    excerpt:
      "The Toyota Corolla Cross has always been known for being practical and reliable — not exactly the kind of ride that gets your heart pumping. But for 2026, Toyota’s given it a bit of a glow-up. With updates…",
  },
  {
    title:
      "JAC T9 Hunter Makes History with 24-Hour Speed Endurance Record in South Africa",
    image: "jac.png",
    category: "PAID PARTNERSHIP",
    author: "Umer Farooq",
    date: "May 8, 2025",
    views: 5990,
    comments: 298,
    excerpt:
      "The JAC T9 Hunter, a powerful and stylish Chinese double-cab pickup, has made headlines by setting a new endurance record for commercial vehicles in South Africa — a feat that reflects the impressive…",
  },
  {
    title:
      "Hyundai Santa Fe Signature vs. Kia Sorento 1.6 FWD | D-SUVs from Korea",
    image: "santafe.png",
    category: "CAR COMPARISON",
    author: "Ahsan Tahir",
    date: "May 13, 2025",
    views: 8799,
    comments: 120,
    excerpt:
      "It's 2025 and Pakistan has now got a lot of choices in C and D-segment SUVs. Whether, it's H6, Jolion, Santa Fe, HS, Atto3 or Fortuner, the options are endless now. It didn't end here, because just few days ago",
  },
  {
    title: "EV Pickup Truck Riddara RD6 Is Coming to Pakistan – Global Specs",
    image: "ev2.png",
    category: "NEW CARS",
    author: "Muhammad ali",
    date: "May 11, 2025",
    views: 3390,
    comments: 345,
    excerpt:
      "About a week ago, we made a statement that after the SUV culture, pickup trucks have started emerging, and we supported this claim by highlighting the recent JAC T9 and the new-generation Isuzu D-Max introduced…",
  },
  {
    title: "Kia Sorento 4th Generation | All Variants Comparison",
    image: "sorento.png",
    category: "CAR COMPARISON",
    author: "Umer Farooq",
    date: "May 10, 2025",
    views: 2202,
    comments: 560,
    excerpt:
      "Previously, we compared the 4th-generation Sorento with the Carnival. Today, here is a detailed comparison of all three Kia Sorento variants: the 3.5 MPI FWD, 1.6T FWD HEV, and 1.6T AWD HEV. The comparison…",
  },
];

// Sample data for News & Auto Events
const newsPosts = [
  {
    id: 1,
    title: "Isuzu D-Max to Get a New Variant in Pakistan Soon – Pictures & Specs",
    image: "dmax.png",
    category: "News",
    author: "Sulman Ali",
    date: "May 16, 2025",
    excerpt:
      "In March, Ghandhara Industries launched the all-new Isuzu D-Max X-Terrain in Pakistan, creating a long-awaited buzz…",
  },
  {
    id: 2,
    title: "All New Cars Coming To Pakistan – Shanghai AutoShow 2025",
    image: "autoshow.png",
    category: "Auto Events",
    author: "Sulman Ali",
    date: "April 29, 2025",
    excerpt:
      "Massive lineup of futuristic models was showcased at the Shanghai AutoShow 2025.",
  },
];
const tipsPosts = [
  {
    id: 1,
    title: "How To Buy A Used Car – A Complete Guide!",
    category: "GUIDES",
    image: "/buyanewcar.png",
    author: "Ahsan Tahir",
    date: "Dec 11, 2024",
  },
  {
    id: 2,
    title: "Simple Road Rules For Female Scooter Riders – A Guide",
    category: "GUIDES",
    image: "/scooter.png",
    author: "Ahsan Tahir",
    date: "Oct 29, 2024",
  },
  {
    id: 3,
    title: "Tips To Improve Mileage Of Honda CG 125",
    category: "TIPS & ADVICES",
    image: "/cg125.png",
    author: "Maryam Altaf",
    date: "Oct 2, 2024",
  },
  {
    id: 4,
    title: "How Do You Spot Legitimately Looking Fake Engine Oil?",
    category: "TIPS & ADVICES",
    image: "/engineoil.png",
    author: "Ahsan Tahir",
    date: "Sep 27, 2024",
  },
  {
    id: 5,
    title: "How Modern Steering Wheel Features Improve Driving Comfort?",
    category: "TIPS & ADVICES",
    image: "/modernsteering.png",
    author: "Maryam Altaf",
    date: "Sep 27, 2024",
  },
  {
    id: 6,
    title: "How To Confirm If Your Bike Engine Is Sealed Or Not?",
    category: "TIPS & ADVICES",
    image: "/bikeengine.png",
    author: "Ahsan Tahir",
    date: "Sep 26, 2024",
  },
  {
    id: 7,
    title: "How To Clean Car Headlights – Home Remedy",
    category: "TIPS & ADVICES",
    image: "/clean.png",
    author: "Maryam Altaf",
    date: "Sep 25, 2024",
  },
  {
    id: 8,
    title: "When To Replace The Car Headlights?",
    category: "TIPS & ADVICES",
    image: "/headlights.png",
    author: "Maryam Altaf",
    date: "Sep 25, 2024",
  },
];

const Posts = [
  {
    id: 1,
    title: "Our Best Hand-Picked Builds – Revisiting PakWheels Cool Rides",
    category: "OPINIONS",
    image: "/coolrides.png",
    author: "Ahsan Tahir",
    date: "May 11, 2025",
  },
  {
    id: 2,
    title: "Real Life Cars From GTA VI Trailer 2",
    category: "OPINIONS",
    image: "/gta6.png",
    author: "Ahsan Tahir",
    date: "May 5, 2025",
  },
  {
    id: 3,
    title: "Why Stock Car Audio Systems Sound Not So Good?",
    category: "OPINIONS",
    image: "/speaker.png",
    author: "Maryam Altaf",
    date: "May 7, 2025",
  },
  {
    id: 4,
    title: "From SUVs to Pickup Trucks: Is Pakistan Shifting Gears?",
    category: "OPINIONS",
    image: "/suv.png",
    author: "Omar Farooq",
    date: "May 4, 2025",
  },
  {
    id: 5,
    title: "Why Suzuki Only Focuses on Small Car Segment in Pakistan?",
    category: "CARS IN PAKISTAN",
    image: "/alto.png",
    author: "Maryam Altaf",
    date: "April 27, 2025",
  },
  {
    id: 6,
    title: "Why We Think 2025 is Pakistan’s Big Year for Car Launches",
    category: "OPINIONS",
    image: "/newcars2025.png",
    author: "Ahsan Tahir",
    date: "Apr 25, 2025",
  },
  {
    id: 7,
    title: "Upgraded Suzuki Alto 2025 – What’s Good & What was Overdue?",
    category: "OPINIONS",
    image: "/altonew.png",
    author: "Ahsan Tariq",
    date: "Apr 25, 2025",
  },
  {
    id: 8,
    title: "IMF Tariff Cuts: Car Prices May Come Down in Pakistan",
    category: "NEW CARS",
    image: "/tarrif.png",
    author: "Omar Farooq",
    date: "Apr 23, 2025",
  },
];

const guides = [
  {
    title: "What is Torque? – A Simple Explanation",
    image: "/torque.jpg",
  },
  {
    title: "Are Damages from Hailstorm Covered by Car Insurance?",
    image: "/damcars.jpg",
  },
  {
    title: "Easy Ways to Spot a Flooded Car and Why You Should Avoid It",
    image: "/drowncars.jpg",
  },
  {
    title: "Tyre Pressure: What Really Happens When It’s Too Low or Too...",
    image: "/tyrepressure.jpg",
  },
  {
    title: "Safety Hazards of Not Using Motorcycle Chain Cover",
    image: "https://picsum.photos/id/1/200/200",
  },
];

const reviews = [
  {
    title: "Pakistan’s First Sonata N Line Bought By Rajab Butt",
    image: "rajab.png",
  },
  {
    title: "JAC T9 Hunter Price Hike Coming Soon?- Discussion &...",
    image: "jact2.png",
  },
  {
    title: "Suneel Pushing Limits of Hyundai Sonata N Line – Test...",
    image: "nline.png",
  },
  {
    title: "New Hyundai Sonata N-Line – First Look Review by...",
    image: "nlinefirstlook.png",
  },
  {
    title: "Toyota Revo vs JAC T9 Hunter, Which One Wins?",
    image: "jacvsrevo.png",
  },
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="w-full lg:w-2/3">
          {/* Recent Posts */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-4 bg-red-700"></div>
            <span className="text-xl font-bold">Recent Posts</span>
          </div>

          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 mb-8 border-b pb-4"
            >
              <div className="relative top-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full md:w-56 h-64 object-fill- md:h-32 md:object-cover rounded"
                />
                <span className="absolute bottom-0  text-xs text-white bg-red-700 px-2 py-1  uppercase">
                  {post.category}
                </span>
              </div>
              <div className="flex-1">
                <div className="h-px bg-gray-300 my-2 w-full"></div>
                <span className="w-full font-semibold text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-1">
                  {post.title}
                </span>
                <div className="text-xs text-gray-500 flex gap-4 flex-wrap">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                  <span>{post.views} views</span>
                  <span>{post.comments} comments</span>
                </div>
                <p className="text-sm text-gray-700 space-y-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}

          {/* News & Auto Events - VERTICAL RENDER FIXED */}
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-red-700"></div>
              <span className="text-xl font-bold">News & Auto Events</span>
            </div>
            <div className=" grid grid-cols-2 gap-5 ">
              {newsPosts.map((news) => (
                <div
                  key={news.id}
                  className="flex flex-col gap-4 border-b pb-4"
                >
                  <div className="relative flex w-50 h-30 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover rounded"
                    />
                         <span className=" absolute bottom-0 text-xs text-white bg-red-700 px-2 py-1 uppercase inline-block ">
                        {news.category}
                      </span>
                  </div>

                  <div>
                    <div>
                 
                    </div>
                    <span className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                      {news.title}
                    </span>
                    <div className="text-xs text-gray-500 flex gap-2 mb-1">
                      <span>{news.author}</span>•<span>{news.date}</span>
                    </div>
                    <p className="text-sm text-gray-700">{news.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="w-full lg:w-1/3 space-y-8">
          {/* Guides */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-700"></div>
              <span className="text-lg font-bold">Guides</span>
            </div>
            <div className="h-px bg-gray-300 my-2 w-full"></div>
            <div className="space-y-4">
              {guides.map((guide, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <p className="text-sm text-gray-800 hover:text-blue-600 cursor-pointer">
                    {guide.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination between guides and reviews */}
          <div className="flex justify-center items-center gap-4 mt-6">
            {/* PREV Button */}
            <button className="flex items-center gap-1 border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded bg-white hover:bg-red-600 hover:text-white hover:border-red-600 transition">
              PREV <span className="text-xs">&larr;</span>
            </button>

            {/* Page Counter */}
            <span className="text-sm text-gray-800 font-medium">1 to 55</span>

            {/* NEXT Button */}
            <button className="flex items-center gap-1 border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded bg-white hover:bg-red-600 hover:text-white hover:border-red-600 transition">
              NEXT <span className="text-xs">&rarr;</span>
            </button>
          </div>

          {/* Reviews */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-700"></div>
              <span className="text-lg font-bold">Reviews</span>
            </div>
            <div className="h-px bg-gray-300 my-2 w-full"></div>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-20 h-14 object-cover rounded"
                  />
                  <p className="text-sm text-gray-800 hover:text-blue-600 cursor-pointer">
                    {review.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Pagination between guides and reviews */}
          <div className="flex justify-center items-center gap-4 mt-6">
            {/* PREV Button */}
            <button className="flex items-center gap-1 border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded bg-white hover:bg-red-600 hover:text-white hover:border-red-600 transition">
              PREV <span className="text-xs">&larr;</span>
            </button>

            {/* Page Counter */}
            <span className="text-sm text-gray-800 font-medium">1 to 47</span>

            {/* NEXT Button */}
            <button className="flex items-center gap-1 border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded bg-white hover:bg-red-600 hover:text-white hover:border-red-600 transition">
              NEXT <span className="text-xs">&rarr;</span>
            </button>
          </div>

          {/* Search Cars & Bikes */}
          <div className="mt-8 border p-4 rounded-md shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-red-700"></div>
              <h3 className="text-lg font-bold">Search Cars & Bikes</h3>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Form */}
            <form className="space-y-3 text-sm">
              <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-200">
                <option>Bikes</option>
                <option>Cars</option>
              </select>

              <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-200">
                <option>- Select Make -</option>
                <option>Adam</option>
                <option>Austin</option>
                <option>Audi</option>
                <option>BAIC</option>
                <option>Bentley</option>
                <option>BMW</option>
                <option>BYD</option>
                <option>Cherry</option>
                <option>Chevrolet</option>
                <option>Cadillac</option>
                <option>Dodge</option>
                <option>DFSK</option>
                <option>Daihatsu</option>
                <option>Daewoo</option>
                <option>Deepal</option>
                <option>Ferrari</option>
                <option>Faw</option>
                <option>Ford</option>
                <option>GMC</option>
                <option>Golf</option>
                <option>Hillman</option>
                <option>Hino</option>
                <option>Haval</option>
                <option>Honda</option>
                <option>Hummer</option>
                <option>Hyundai</option>
                <option>iszu</option>
                <option>JAC</option>
                <option>Jaguar</option>
                <option>JMC</option>
                <option>Jeep</option>
                <option>KIA</option>
                <option>Lamborgini</option>
                <option>Land Rover</option>
                <option>Lexus</option>
                <option>Mazda</option>
                <option>Mitsubishi</option>
                <option>Mercedes</option>
                <option>MINI</option>
                <option>Mclaren</option>
                <option>MG</option>
                <option>Nissan</option>
                <option>OPAL</option>
                <option>ORA</option>
                <option>proton</option>
                <option>Peugeot</option>
                <option>Porsche</option>
                <option>Power</option>
                <option>Rolls Royce</option>
                <option>Rover</option>
                <option>Royal Enfield</option>
                <option>Seres</option>
                <option>Skoda</option>
                <option>Sogo</option>
                <option>Smart</option>
                <option>Suzuki</option>
                <option>Tesla</option>
                <option>Toyota</option>
                <option>TANK</option>
                <option>United</option>
                <option>Volkswagen</option>
                <option>Volvo</option>
                <option>Willys</option>
                <option>Xiaomi</option>
                <option>ZOTYE</option>
              </select>

              <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-200">
                <option>- Select Model -</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>

              <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-200">
                <option>- Select Version -</option>
              </select>

              <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-200">
                <option>- Price Upto -</option>
                <option>3000,000</option>
                <option>800,000</option>
                <option>1,300,000</option>
                <option>1,800,000</option>
                <option>2,300,000</option>
                <option>2,800,000</option>
                <option>3,300,000</option>
                <option>3,800,000</option>
                <option>4,300,000</option>
                <option>4,800,000</option>
                <option>5,300,000</option>
                <option>5,800,000</option>
                <option>6,300,000</option>
                <option>6,800,000</option>
                <option>7,300,000</option>
                <option>8,300,000+</option>
              </select>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded hover:bg-opacity-80 transition"
              >
                SEARCH
              </button>
            </form>
          </div>

          {/* Recently Listed Section */}
          <div className="mt-8 border p-4 rounded-md shadow-sm">
            {/* Tabs */}
            <div className="flex justify-between text-sm font-semibold mb-4 border-b">
              <button className="px-4 py-2 border-b-2 border-red-700 text-red-700">
                Cars
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-red-700">
                Bikes
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-red-700">
                Accessories
              </button>
            </div>

            {/* Listed Items */}
            <div className="space-y-4 text-sm">
              {[
                {
                  image: "/bolan.png",
                  title: "Suzuki Bolan",
                  price: "PKR 440,000",
                  km: "650,000KM",
                },
                {
                  image: "/mira.png",
                  title: "Daihatsu Mira ",
                  price: "PKR 2,550,000",
                  km: "12,000 KM",
                },
                {
                  image: "/suzukialto.png",
                  title: "Suzuki Alto ",
                  price: "PKR 2,400,000",
                  km: "9990 KM",
                },
                {
                  image: "/jolion.png",
                  title: "Haval Jolion",
                  price: "PKR 8,996,000",
                  km: "2952 KM",
                },
                {
                  image: "/sportage.png",
                  title: "KIA Sportage",
                  price: "PKR 6,500,000",
                  km: "37500 KM",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-800 truncate">
                      {item.title}
                    </p>
                    <p className="text-gray-600">{item.price}</p>
                    <p className="text-gray-500 text-xs">{item.km}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center mt-4 text-sm text-blue-600 cursor-pointer hover:underline">
              View All
            </div>

            {/* Sell Your Car Button */}
            <button className="mt-3 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded  hover:bg-opacity-80 transition">
              SELL YOUR CAR
            </button>
          </div>

          {/* Popular Tags Section */}
          <div className="mt-8 border p-4 rounded-md shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-red-700"></div>
              <h3 className="text-lg font-bold">Popular Tags</h3>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "10th Generation Honda Civic",
                "2016 Honda Civic",
                "Atlas Honda",
                "Audi",
                "BMW",
                "cars",
                "Car Sales",
                "Cars in Pakistan",
                "Civic",
                "Corolla",
                "Honda",
                "Honda Atlas",
                "Honda City",
                "honda civic",
                "Hybrid",
                "Hyundai",
                "imported cars",
                "indus motors",
                "Kia Sportage",
                "lamborghini",
                "Mercedes",
                "Nissan",
                "Pakistan",
                "Pak Suzuki",
                "pakWheels",
                "PAMA",
                "petrol",
                "Petrol Price",
                "Petrol Price in Pakistan",
                "petrol prices",
                "Suzuki",
                "Suzuki Alto",
                "Suzuki Mehran",
                "Suzuki Swift",
                "Tesla",
                "Toyota",
                "Toyota Corolla",
                "Toyota Pakistan",
                "Toyota Prius",
                "Toyota yaris",
                "used cars",
                "Yamaha",
                "گاڑیاں",
                "کار",
                "موٹر سائیکل",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-gray-300 rounded-full cursor-pointer hover:bg-red-700 hover:text-white  hover:border-red-700 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Tips & Advice Grid - 2 Rows x 4 Columns */}
      <div className="mt-10">
        <h2 className="text-lg font-bold mb-4 border-b pb-2 hover:text-red-700">
          Tips & Advice
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {tipsPosts.slice(0, 8).map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-sm rounded overflow-hidden"
            >
              <div className="relative h-28">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 inline-block bg-red-700 text-white text-[10px] px-2 py-[2px]  uppercase">
                  {post.category}
                </span>
              </div>
              <div className="p-2">
                <h3 className="text-[13px] font-semibold text-gray-800 leading-tight hover:text-blue-600 cursor-pointer line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[10px] text-gray-500 mt-1">
                  {post.author} &nbsp; • &nbsp; {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* OPINIONS - 2 Rows x 4 Columns */}
      <div className="mt-10">
        <h2 className="text-lg font-bold mb-4 border-b pb-2 hover:text-red-700">
          OPINIONS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Posts.slice(0, 8).map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-sm rounded overflow-hidden"
            >
              <div className="relative h-28">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 inline-block bg-red-700 text-white text-[10px] px-2 py-[2px]  uppercase">
                  {post.category}
                </span>
              </div>
              <div className="p-2">
                <h3 className="text-[13px] font-semibold text-gray-800 leading-tight hover:text-blue-600 cursor-pointer line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[10px] text-gray-500 mt-1">
                  {post.author} &nbsp; • &nbsp; {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 space-y-8 text-sm text-gray-700">
        <div>
          <h3 className="font-semibold text-base mb-2 hover:text-red-700">
            Popular Cars
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-1">
            {[
              "Toyota Corolla",
              "Honda Civic",
              "Honda City",
              "Suzuki Mehran",
              "Suzuki WagonR",
              "Suzuki Cultus",
              "Daihatsu Mira",
              "Daihatsu Move",
              "Suzuki Alto",
              "Toyota Vitz",
              "Toyota Aqua",
              "Toyota Prado",
              "Honda Vezel",
              "Honda N Wgn",
              "Honda Fit",
              "Daihatsu Cuore",
            ].map((car, idx) => (
              <a
                key={idx}
                href="#"
                className="text-blue-600 hover:text-red-700 hover:underline"
              >
                {car}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-2 hover:text-red-700">
            Browse Cars by City
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-1">
            {[
              "Cars Lahore",
              "Cars Karachi",
              "Cars Islamabad",
              "Cars Rawalpindi",
              "Cars Peshawar",
              "Cars Faisalabad",
              "Cars Multan",
              "Cars Gujranwala",
              "Cars Bahawalpur",
              "Cars Sialkot",
              "Cars Abbottabad",
              "Cars Sargodha",
              "Cars Mardan",
              "Cars Wah cantt",
              "Cars Hyderabad",
              "Cars Gujrat",
            ].map((city, idx) => (
              <a
                key={idx}
                href="#"
                className="text-blue-600 hover:text-red-700 hover:underline"
              >
                {city}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-2 hover:text-red-700">
            Popular Bikes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-1">
            {[
              "Honda CG125",
              "Honda CD70",
              "Suzuki GD 110S",
              "Yamaha YBR 125",
              "Yamaha YBR 125G",
              "Suzuki GS 150",
              "Yamaha YB 125Z",
              "Benelli 302r",
              "Honda CB 150F",
              "Honda CG 125 Deluxe",
              "Yamaha YZF R6",
              "Suzuki GS 150SE",
              "Suzuki GSX-R600",
              "Road Prince Wego 150",
              "Honda Pridor",
              "Yamaha YZF R1",
            ].map((bike, idx) => (
              <a
                key={idx}
                href="#"
                className="text-blue-600 hover:text-red-700 hover:underline"
              >
                {bike}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2 hover:text-red-700">
            Top Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-1">
            {[
              "660cc Cars",
              "1000cc Cars",
              "1300cc Cars",
              "Japanese Cars",
              "Cheap Cars",
              "Low Priced Cars",
              "Automatic Cars",
              "Small Cars",
              "Big Cars",
              "Carry Daba",
              "Jeep",
              "Hybrid Cars",
              "Sports Cars",
              "Imported Cars",
            ].map((category, idx) => (
              <a
                key={idx}
                href="#"
                className="text-blue-600 hover:text-red-700 hover:underline"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2 hover:text-red-700">
            Top Auto Parts Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-1">
            {[
              "Tyres & Wheels",
              "Audio & Vedio Accessories",
              "Light & Electrical",
              "Car Care Accessories",
              "Exterior Parts & Accessories",
              "Engine & Mechanical Parts",
              "Brake Parts",
              "Interior Parts & Accessories",
              "Security Sensors",
              "Oils & Lubricants",
              "Tools & Gadgets",
              "Bike Parts & Accessories",
              "Bicycle Parts & Accessories",
              "Other Parts & Accessories",
            ].map((auto, idx) => (
              <a
                key={idx}
                href="#"
                className="text-blue-600 hover:text-red-700 hover:underline"
              >
                {auto}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-base mb-2 hover:text-red-700">
            Top Auto Parts Sub-Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-1">
            {[
              "Alloy Wheels",
              "Bike Parts",
              "Complete Engines",
              "Tyres",
              "Car LCD & Vedio Displays",
              "Helmets",
              "Woofers",
              "Seat Covers",
              "Speakers",
              "Car Seats",
              "Spoilers & Body Kits",
              "LED Lights",
              "Pressure Washers",
              "Car Door Parts",
              "Amplifiers",
              "HID Lights",
            ].map((auto, idx) => (
              <a
                key={idx}
                href="#"
                className="text-blue-600 hover:text-red-700 hover:underline"
              >
                {auto}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
