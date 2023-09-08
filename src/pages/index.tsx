import { Inter } from 'next/font/google'
import { axios, ApiKey, Navbar, Image, Link, React, Footer } from "@/pages/layouts/Imports"

const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = ({ hLayout, vLayout }: any) => {
  console.log(hLayout);
  console.log(vLayout);
  return (
    <main
      className={` min-h-screen bg-slate-200 dark:bg-slate-900  ${inter.className}`}
    >
      <Navbar />
      <section className="flex flex-wrap my-10  ">
        <div className=" max-w-xl mx-auto lg:w-3/6  flex flex-wrap justify-evenly gap-5  p-6  ">
          {vLayout &&
            vLayout.map((news: any, index: number) => (
              <div
                key={index}
                className="  flex items-center justify-evenly  p-3x max-w-lg flex-wrap w-full rounded-lg shadow bg-slate-300  dark:bg-gray-800 dark:text-slate-200 dark:border-gray-700"
              >
                {" "}
                <Image
                  className="  rounded-lg w-32 h-32 object-contain "
                 src={news.urlToImage || "/images/NoImg.png "}
                  alt=""
                  width={132}
                  height={132}
                />
                <div className="  float-right p-3 w-72   ">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white dark:bg-slate-800 ">
                    {news.title}
                  </h5>
                  <Link
                    href={news.url}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
        </div>

          <section className="md:mb-1 mx-auto lg:w-3/6 sm:w-full   xl:mt-36 xl:w-[78rem] xl:h-[45rem]">
            <div className="p-5">
              <h1 className="text-3xl font-medium">News Today </h1>
              <p className="text-lg font-extralight mb-3 mx-auto">
                stream endlessly about the news happening right now in the world
                without any interruption
              </p>
            </div>
            <div className="  w-full ">
              <div className="flex items-center justify-between flex-wrap gap-10 p-6 ">
                {hLayout &&
                  hLayout.map((news: any, index: number) => (
                      <Link
                        key={index}
                        href={news.url}
                        className="flex mx-auto flex-col items-center bg-white  border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <Image
                          className=" w-36 h-full  mr-5  md:w-40 md:rounded-none "
                          src={news.urlToImage || "/images/NoImg.png "}
                          width={132}
                          height={132}
                          alt=""
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {news.title}
                          </h5>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {news.description || news.content}
                          </p>
                        </div>
                      </Link>
                  ))}
              </div>
            </div>
          </section>
      </section>
      <Footer />
    </main>
  )
}

export async function getServerSideProps() {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=india&pageSize=4&page=4&apiKey=${ApiKey}`
  );

  const response2 = await axios.get(
    `https://newsapi.org/v2/top-headlines?language=en&pageSize=6&page=6&apiKey=${ApiKey}`
  );
  return {
    props: {
      hLayout: response.data.articles,
      vLayout: response2.data.articles,
    },
  };
}

export default Home
