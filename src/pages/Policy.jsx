import React from "react";
import styles from "../assets/css/policy.module.css";
import Policy1and2 from "../components/policy/Policy1and2";
import Policy3 from "../components/policy/Policy3";
import Policy4 from "../components/policy/Policy4";
import Policy5 from "../components/policy/Policy5";
import Policy6 from "../components/policy/Policy6";

const Policy = () => {
  return (
    <div className={styles.policyBg}>
      <div className="container">
        <Policy1and2 />
        <Policy3 />
        <Policy4 />
        <Policy5 />
        <Policy6 />
      </div>
    </div>
  );
};

export default Policy;
