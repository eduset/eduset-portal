import { useEffect } from "react";
import "./App.css";

const services = [
  { name: "충북과학고등학교", link: "https://cbsh.edu-set.com" },
];
function App() {
  useEffect(() => {
    if (services.length === 1) {
      window.open(services[0].link, "_blank");
    }
  }, []);

  return (
    <>
      <div className="portal-container">
        <h1 className="portal-title">학생관리시스템으로 이동</h1>
        <div className="button-container">
          {services.map((service, index) => (
            <a key={index} href={service.link} className="service-button">
              {service.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
