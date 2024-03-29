const Goals = () => (
  <div>
    <div className="goals-container">
      <div className="goals-content">
        <div className="goals-header">
          <h1 className="title">أهدافنا</h1>
          <div className="goal-line" />
        </div>
        <div className="goals-items">
          <p className="desc_en">
            Our goal is to revolutionize the world of luxury leasing by fostering an environment of
            creativity and innovation, utilizing obstacles and challenges as opportunities for
            growth, and establishing a collaborative and practical community among all stakeholders
            in the industry. We aim to be the industry leader in performance, setting new standards
            in luxury leasing and elevating the entire sector to new heights.
          </p>
          <p className="desc_ar">
            هدفنا هو إحداث ثورة في عالم التأجير الفاخر من خلال تعزيز بيئة من الإبداع والابتكار ،
            والاستفادة من العقبات والتحديات كفرص للنمو ، وإنشاء مجتمع تعاوني وعملي بين جميع أصحاب
            المصلحة في مجالنا. نهدف إلى أن نكون رواد الصناعة في الأداء ، ووضع معايير جديدة في
            التأجير الفاخر ورفع القطاع بأكمله إلى آفاق جديدة.
          </p>
        </div>
        <img
          className="goals-img"
          src="./assets/goals.WebP"
          alt="goals_word"
          width="100%"
          height="100%"
        />
        <foot className="goals-footer">
          <img
            src="./assets/goals-footer.WebP"
            alt="goals_image"
            width="100%"
            height="100%"
          />
        </foot>
      </div>
    </div>
  </div>
);

export default Goals;
