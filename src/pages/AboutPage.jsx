import React from "react";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>This is a simple app to keep track of your feedback.</p>
        <p>It is built with React, Redux, React Router, and Framer Motion.</p>
        <p>It is hosted on Netlify.</p>
        <p>It is deployed on Heroku.</p>
        <p>It is deployed on Firebase.</p>
      </div>
    </Card>
  );
}

export default AboutPage;
