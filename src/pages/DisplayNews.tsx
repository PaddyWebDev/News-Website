import {
  Link,
  Image,
  Navbar,
  Footer,
  useRouter,
  axios,
  ApiKey,
} from "@/pages/layouts/Imports";

const DisplayNews: React.FC = ({ SearchNews }: any) => {
  console.log(SearchNews);
  const router = useRouter()

  return (
    <main className="bg-slate-900 ">
      <Navbar />
      <section className=" mx-auto p-2  grid place-items-start  lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-10  mt-20 mb-32     ">
        {/* {dpsNews &&
          dpsNews.map((news, index) => (
            <div
              className="max-w-md border  mx-auto bg-slate-900 text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
              key={index}
            >
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    width={132}
                    height={132}
                    className="h-48 w-full  md:h-full md:w-48"
                    src={news.urlToImage || "/images/noImg.png"}
                    alt="Modern building architecture"
                  />
                </div>
                <div className="p-8">
                  <Link
                    href={news.url}
                    className="block mt-1 text-xl leading-tight font-medium  text-zinc-50 hover:underline"
                  >
                    {news.title}
                  </Link>
                  <p className="mt-2 text-sm text-[#fafafa]">
                    {news.description || news.content}
                  </p>
                </div>
              </div>
            </div>
          ))} */}
      </section>
      <Footer />
    </main>
  );
};
export async function getServerSideProps({ query }: any) {

  // Retrieve the query parameter (form data) from the URL
  const { data } = query;

  const response = await axios.get(
    ` https://newsapi.org/v2/everything?q=${data}&pageSize=6&page=5&apiKey=${ApiKey}`
  );

  return {
    props: {
      SearchNews: response.data.articles,
    },
  };
}

export default DisplayNews;
