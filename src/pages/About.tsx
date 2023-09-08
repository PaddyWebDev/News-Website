

export default function About() {
  return (
    <main className="min-h-screen select-none border">
      {/* <Navbar /> */}
      <section className=" w-full flex items-center justify-evenly flex-wrap   mx-auto my-10">
        <div className=" sm:mx-auto xl:m-0 sm:w-full md:w-full md:mx-auto  lg:w-[25rem]  p-5 ">
          {/* <Image
            draggable="false"
           
            src={"/images/AboutUs.jpg"}
            className=" object-contain mx-auto rounded-3xl "
            width={500}
            height={600}
            alt=""
          /> */}
        </div>
        <div className=" text-justify    p-5 md:w-full lg:w-[45rem]">
          <h3 className="mb-2 text-lg font-light">
            <span className="text-4xl"> Welcome to News Today </span>, your
            trusted source for the latest news, updates, and insights from
            around the world. We are dedicated to delivering accurate, timely,
            and comprehensive news coverage across various topics including
            politics, business, technology, entertainment, sports, and more.
          </h3>
          <h3 className="mb-2 text-lg font-light">
            At News Today, we believe in the power of journalism to inform,
            inspire, and foster meaningful conversations. Our team of
            experienced journalists and writers is committed to upholding the
            highest standards of journalistic integrity, providing you with
            well-researched and objective reporting.
          </h3>
          <h3 className="mb-2 text-lg font-light">
            In addition to our commitment to factual reporting, we value
            diversity and inclusivity. We believe in representing a wide range
            of perspectives and giving voice to underrepresented communities.
            Through our reporting, we aim to promote understanding, empathy, and
            dialogue among our readers.
          </h3>
          <h3 className="mb-2 text-lg font-light">
            Thank you for choosing News Today as your go-to source for news. We
            are honored to be a part of your journey to stay informed and
            connected. Together, lets explore the world through the power of
            news.
          </h3>
        </div>
      </section>
    </main>
  );
}
