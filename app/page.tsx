import Banner from "./components/Banner/index";
import Aboutus from "./components/Aboutus/index";
import Dedicated from "./components/Dedicated/index";
import Digital from "./components/Digital/index";
import Beliefs from "./components/Beliefs/index";
import Wework from "./components/Wework/index";
import Ourteam from "./components/Ourteam/index";
import Featured from "./components/Featured/index";
// import Manage from './components/Manage/index';
import FAQ from "./components/FAQ/index";
import Testimonials from "./components/Testimonials/index";
import Articles from "./components/Articles/index";
import Joinus from "./components/Joinus/index";
import Insta from "./components/Insta/index";
import { Thing, WithContext } from "schema-dts";

export default function Home() {
  type NewType = WithContext<Thing>;

  const schema: WithContext<Thing> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home Page",
    "description": "This is the home page of the website.",
    "url": "https://yourwebsite.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Your Organization",
      "url": "https://yourwebsite.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourwebsite.com/logo.png",
        "width": "600",
        "height": "60"
      },
      "sameAs": [
        "https://www.facebook.com/yourorganization",
        "https://www.instagram.com/yourorganization",
        "https://www.linkedin.com/company/yourorganization"
      ]
    }
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    <main>
      <Banner />
      <Aboutus />
      <Digital />
      <Beliefs />
      <Dedicated />
      <Wework />

      <Ourteam />
      <Featured />
      {/* <Manage /> */}

      <Articles />
      <Joinus />
      <Testimonials />
      <FAQ />

      <Insta />
    </main>
    </div>
  );
}
