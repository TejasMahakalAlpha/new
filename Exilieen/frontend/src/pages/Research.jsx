import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Research.css";
import research1 from "../assets/research/research1.jpg";
import research2 from "../assets/research/research2.jpg";
import {
  FaClipboardList,
  FaHandshake,
  FaRegClock,
  FaUserAlt
} from "react-icons/fa";

const Research = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="research-section">
      <div className="breadcrumb" data-aos="fade-in">
        <span>Home &gt; Services &gt; Research</span>
      </div>

      <div className="research-container">
        <h1 className="section-title" data-aos="fade-up">Research Facilities</h1>

        <div className="section" data-aos="fade-up">
          <div className="text-content">
            <h2>Research</h2>
            <p>
              MIT CARS is having expertise in various portfolio and having strength
              of sophisticated instrumentation facilities coupled with dedicated
              team of experts.
            </p>
            <p>
              We undertake research projects from stakeholders, research
              organisations, students, government organisations under the scope of
              agriculture, food, environment and biotechnology.
            </p>
            <p>
              Researchers can directly contact to MIT CARS for their research need
              and support. <a href="#">Contact Us</a>
            </p>
            <p>
              We welcome quality, productive and object-oriented research projects
              in associationship. <a href="#">Email</a>
            </p>
          </div>
          <div className="image-container">
            <img src={research1} alt="MIT CARS" />
          </div>
        </div>

        <div className="section" data-aos="fade-up">
          <div className="text-content">
            <h2>On Going Research Projects</h2>
            <ul className="research-list">
              {[
                "Analysis and product formulation of organic honey funded by M/s Honeywala.",
                "Adulteration analysis of spices.",
                "Assessment of organic and inorganic cucumber growth impact and changes.",
                "Development in standardization of rapid toolkit test for identification of adulteration in spices and condiments.",
                "Comparative evaluation of mineral profile and heavy metal analysis of lab grown organic and inorganic fruits and vegetables.",
                "Research on extraction and isolation of coloring and flavoring compounds from food waste and their invitro food system stability and control release studies.",
                "Research work on fungal strain for development on natural food grade color.",
                "Evaluation of lab scale extracted crude oil from oil seeds for thermal and oxidative stabilities and shelf life studies."
              ].map((item, index) => (
                <li key={index}><span>✔</span> {item}</li>
              ))}
            </ul>
          </div>
          <div className="image-container">
            <img src={research2} alt="MIT CARS" />
          </div>
        </div>

        <div className="consultancy-stats" data-aos="fade-up">
          <div className="stat-item">
            <span className="stat-number">14</span>
            <div className="stat-label">
              <FaClipboardList className="stat-icon" />
              <div>PROJECTS COMPLETED</div>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-number">4789</span>
            <div className="stat-label">
              <FaHandshake className="stat-icon" />
              <div>HAPPY CLIENTS</div>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-number">0 lac</span>
            <div className="stat-label">
              <FaRegClock className="stat-icon" />
              <div>SOIL HEALTH CARD DISTRIBUTED</div>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-number">13</span>
            <div className="stat-label">
              <FaUserAlt className="stat-icon" />
              <div>OUR EXPERTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
