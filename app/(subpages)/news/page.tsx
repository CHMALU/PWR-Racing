// pages/about-us.jsx
import Container from "@/app/components/Container";
import NewsCard from "@/app/components/NewsCard";
import { fetchNews } from "@/app/actions/getNews";

const AboutUs = async () => {
  const news = await fetchNews();
  return (
    <div className=" pt-[100px] md:pt-[120px] bg-neutral-900">
      <Container>
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              id={item.id}
              title={item.title}
              short_description={item.short_description}
              length_time={item.length_time}
              logo={item.logo || "/images/logo-czarne.svg"}
              main_image={item.main_image}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
