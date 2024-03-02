import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./guidelines.css";

const guildelines = () => {
  useEffect(() => {
    document.title = "Guidelines | CSI Convention 2024";
  });
  return (
    <React.Fragment>
      <Helmet>
        <title>Guidelines | CSI Convention 2024</title>
        <meta
          name="description"
          content="Explore the comprehensive guidelines for attendees at the CSI convention event. From professionalism and diversity to networking and code of conduct, discover how to maximize your experience while ensuring a safe, respectful, and inclusive environment for all participants."
        />
      </Helmet>
      <div className="parent-guidelines">
        <h1 className="guidelines-title">Guidelines</h1>
        <div className="guidelines-container">
          <div className="guidelines-content">
            <div className="guidelines-1">
              1. Maintain professional conduct throughout the event, both
              in-person and online. 👔
              <br />
              <br />
              2. Adhere to the event's code of conduct to ensure a safe and
              inclusive environment for everyone. 🛡️
              <br />
              <br />
              3. Respect the time allocated for each session and adhere to
              schedules to ensure a smooth flow of events. ⏰<br />
              <br />
              4. Explore connections between different tech disciplines,
              promoting a holistic understanding of the industry. 🔗
              <br />
              <br />
              5. Take advantage of networking opportunities to connect with
              fellow attendees. 🤝
              <br />
              <br />
              6. Capture memorable moments 📸, share your experiences 🗣️, and
              celebrate the event's highlights. 🎊
              <br />
              <br />
              7. Share constructive feedback to help organizers improve future
              events and enhance participant experience. 📝
              <br />
              <br />
              8. Contribute to a positive and supportive atmosphere, creating an
              environment conducive to learning and collaboration. 🌟
              <br />
              <br />
              9. Dress professionally to make a positive impression and create a
              conducive atmosphere. 👗
              <br />
              <br />
              10. Treat fellow participants, speakers, and event staff with
              courtesy. 🙏
              <br />
              <br />
            </div>
            <div className="guidelines-2">
              11. Embrace the diversity of the tech community 🌐 and engage with
              participants from various backgrounds. 👫
              <br />
              <br />
              12. Be mindful of privacy concerns; seek permission before sharing
              photos or information about others. 🤳
              <br />
              <br />
              13. Adhere to event rules and guidelines to ensure a smooth and
              respectful environment for all. 📜
              <br />
              <br />
              14. Embrace unexpected changes or adaptations in the schedule with
              flexibility and a positive mindset. 🔄
              <br />
              <br />
              15. Don't hesitate to seek assistance from event staff if you have
              questions or need support. 🙋‍♂️
              <br />
              <br />
              16. Silence or turn off electronic devices during sessions to
              minimize distractions and disruptions. 📵
              <br />
              <br />
              17. Uphold ethical standards in technology usage, emphasizing
              responsibility and accountability. 🤖
              <br />
              <br />
              18. Arrive on time to make the most of your experience. ⏱️
              <br />
              <br />
              19. Most importantly, have fun, enjoy the experience 🎉, and make
              the most of the valuable opportunities the event offers. 😊
              <br />
              <br />
              20. Take breaks, stay hydrated, ensure you have the energy to
              fully participate in the event⚡
              <br />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default guildelines;
