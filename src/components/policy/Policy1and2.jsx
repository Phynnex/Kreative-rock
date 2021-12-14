import React from "react";
import styles from "../../assets/css/policy.module.css";

const Policy1and2 = () => {
  return (
    <div>
      <h2 className={`text-center ${styles.policyHeader}`}>
        KREATIVEROCK PRIVACY
      </h2>

      <div className={styles.policySection}>
        <h2>1. INTRODUCTION</h2>
        <p>
          KreativeRock Digital Limited (hereinafter referred to as
          “KreativeRock”) is a complete marketing management company employing
          the use of technology to create innovative business solutions and
          advancement across all sectors and help to position brands for
          sustained business growth.{" "}
        </p>
        <p>
          Services provided in KreativeRock Digital Limited include mobile
          texting solutions; digital marketing solutions; brand management and
          email signature management. It is therefore important that the policy
          statement is read thoroughly by users of the platform.
        </p>
      </div>

      <div className={styles.policySection}>
        <h2>2. DEFINITION OF TERMS</h2>
        <p>
          <b>“Subscribers”</b>
          {""} mean any person or entity that is registered with KreativeRock to
          use the platform.
        </p>
        <p>
          <b>“Contact”</b>
          {""} means any person a subscriber may contact through our service or
          interact with and has giving information through such interaction.
        </p>
        <p>
          <b>“Distribution List”</b>
          {""} means a list of contacts a subscriber may upload or manage on our
          platform and all associated information related to those contacts (for
          example, email addresses; phone numbers).
        </p>
        <p>
          <b>“Mobile App(s)”</b>
          {""} means any one or all of KreativeRock applications available for
          subscribers to use on their mobile devices.
        </p>
        <p>
          <b>“Personal Information”</b>
          {""} means any information that identifies or can be used to identify
          an individual directly or indirectly. Examples of personal information
          include, but not limited to names, addresses (physical and email),
          phone number, gender, occupation, date of birth, or other demographic
          information. has its extended definition in our Standard Terms of Use.
        </p>
        <p>
          <b>“Visitor(s)”</b>
          {""} means, subject to the context for which it is used, any person
          who visits our site, office, or otherwise engages with us at our
          events or in connection with our marketing or recruitment activities.
          has its extended definition in our Standard Terms of Use,
        </p>
        <p>
          <b>“You”</b>
          {""} or <b>“your”</b>
          {""} means, subject to the context for which it is used, either a
          subscriber, a contact or a visitor.
        </p>
      </div>
    </div>
  );
};

export default Policy1and2;
