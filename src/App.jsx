import Sidebar from "./components/Sidebar.jsx";
import Output from "./components/Output.jsx";
import { useState, useRef } from "react";
import "./styles/styles.css";
import { useReactToPrint } from "react-to-print";
import { v4 as uuidv4 } from "uuid";
import IMAGE from "./assets/image.jpg";

function App() {
  let [personalData, setPersonalData] = useState({
    name: "Gertrude McFuzz",
    email: "gertrudemcfuzz@gmail.com",
    phone: "(783) 345-3432",
    title: "Software engineer",
    photo: IMAGE,
    location: "New York, NY",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris vitae. Habitasse platea dictumst quisque sagittis purus. Ornare quam viverra orci sagittis eu volutpat. Vel facilisis volutpat est velit egestas. Neque viverra justo nec ultrices dui sapien eget mi. Arcu odio ut sem nulla. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. ",
    skills: "HTML,JavaScript,CSS,React",
    interests:
      "Web Development,Programming Languages,Data Structures, Algorithms",
  });
  let [education, setEducation] = useState([
    {
      schoolName: "Fake University",
      titleOfStudy: "Bachelor's of Science",
      yearStarted: "2012",
      yearCompleted: "2016",
      major: "Computer Science",
      grade: "A++",
      id: uuidv4(),
    },
  ]);
  let [experience, setExperience] = useState([
    {
      companyName: "Fake Company",
      positionTitle: "Full-Stack Software Engineer",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris vitae. Habitasse platea dictumst quisque sagittis purus. Ornare quam viverra orci sagittis eu volutpat. Vel facilisis volutpat est velit egestas. Neque viverra justo nec ultrices dui sapien eget mi. Arcu odio ut sem nulla. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. ",
      description: "Front-end Development,Back-end Development",
      startDate: "04/2020",
      endDate: "05/2024",

      id: uuidv4(),
    },
    {
      companyName: "Fake Company",
      positionTitle: "Full-Stack Software Engineer",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris vitae. Habitasse platea dictumst quisque sagittis purus. Ornare quam viverra orci sagittis eu volutpat. Vel facilisis volutpat est velit egestas. Neque viverra justo nec ultrices dui sapien eget mi. Arcu odio ut sem nulla. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. ",
      description: "Front-end Development,Back-end Development",
      startDate: "04/2020",
      endDate: "05/2024",

      id: uuidv4(),
    },
  ]);

  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Resume",
    removeAfterPrint: true,
  });

  return (
    <>
      <Sidebar
        personalData={personalData}
        setPersonalData={setPersonalData}
        education={education}
        setEducation={setEducation}
        experience={experience}
        setExperience={setExperience}
      ></Sidebar>

      <div className="main">
        <button
          className="print"
          onClick={() => {
            handlePrint(null, () => contentToPrint.current);
          }}
        >
          PRINT
        </button>
        <Output
          ref={contentToPrint}
          personalData={personalData}
          education={education}
          experience={experience}
        ></Output>
      </div>
    </>
  );
}

export default App;
