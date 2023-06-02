const About = () => (
  <div
    id="about"
    className="about_container"
  >
    <div className="about-image1">
      <img
        src="./Images/about-img.png"
        alt="car"
      />
    </div>
    <div className="about-items">
      <div className="about_content">
        <div className="content_1">
          <h2 className="title">
            من نحن
            <div className="about-line" />
          </h2>
          <img
            className="about-01"
            src="./Images/01.png"
            alt="arrows"
          />
        </div>
        <div className="content_2">
          <p className="desc_ar">
            نلتزم نحن شركة تسارع لتأجير السيارات بتوفير أكثر الوسائل كفاءة وتفوقًا في تأجير أنواع
            مختلفة من السيارات والمركبات الفاخرة. مع التركيز على الابتكار ، أنشأنا بيئة مميزة وعملية
            مصممة لتقديم حلول متكاملة تلبي جميع شرائح قاعدة عملائنا المتنوعة. من خلال توفير الوصول
            إلى أحدث وأجود المركبات ، نسعى جاهدين لتلبية رغبات واحتياجات كل عميل بأقصى درجات الرضا.
          </p>
          <p className="desc_en">
            We are committed to providing the most efficient and superior means of renting various
            types of cars and luxury vehicles. With a focus on innovation, we have established a
            distinctive and practical environment designed to offer integrated solutions that cater
            to all segments of our diverse customer base. By offering access to the latest and
            finest vehicles, we endeavor to meet the desires and needs of every customer with the
            utmost satisfaction.
          </p>
        </div>
      </div>
      <img
        className="about-arraows"
        src="./Images/arrows.png"
        alt="arrows"
      />
      <img
        className="about-arraows-hr"
        src="./Images/arrows-hr.png"
        alt="arrows"
      />
    </div>
  </div>
);

export default About;
