import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = ({ onBack }) => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="privacy-policy-header">
          <button onClick={onBack} className="back-button">
            ← Back to Home
          </button>
          <h1>Privacy Policy</h1>
        </div>
        <div className="privacy-policy-content">
          <p>
            <strong>Last Updated: May 14, 2025</strong>
          </p>

          <p>
            This Privacy Policy ("Policy") explains how WinToday ("we," "us," or
            "our") collects, uses, and shares personal information when you use
            our mobile application ("WinToday" or "the App"). By accessing or
            using the App, you agree to the collection and use of information in
            accordance with this Policy. If you do not agree with this Policy,
            you must not use the App.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect the following types of information when you use
            WinToday:
          </p>

          <h3>Personal Information</h3>
          <p>
            We collect personal information when you provide it directly to us.
            This may include:
          </p>
          <ul>
            <li>
              <strong>Name</strong> – Collected if provided during account
              creation or interactions.
            </li>
            <li>
              <strong>Email Address</strong> – Collected if provided for login
              (via Apple/Google), support, or communication purposes.
            </li>
            <li>
              <strong>Authentication Info</strong> – We may receive anonymized
              tokens or limited profile data from Apple/Google sign-in.
            </li>
          </ul>

          <h3>User-Generated Content</h3>
          <p>
            You may submit content to the App, including but not limited to:
          </p>
          <ul>
            <li>
              <strong>Photos or Videos</strong> – Collected if you upload proof
              of a habit, send media in group chats, or post to feeds.
            </li>
            <li>
              <strong>Text Submissions</strong> – Habit descriptions, comments,
              nudges, messages, and other in-app user content.
            </li>
            <li>
              <strong>Group Chats</strong> – Text and media shared in group
              chats are stored securely and may be visible to other chat
              members.
            </li>
          </ul>

          <h3>Usage and Diagnostic Information</h3>
          <p>
            We collect data to improve our service and monitor app performance,
            including:
          </p>
          <ul>
            <li>
              <strong>Product Interaction</strong> – Data about how you use
              WinToday (e.g., features accessed, buttons clicked).
            </li>
            <li>
              <strong>Crash and Error Reports</strong> – Data collected via
              Firebase services for app performance monitoring.
            </li>
            <li>
              <strong>Performance Metrics</strong> – Information such as load
              time and responsiveness.
            </li>
            <li>
              <strong>Device Type, OS, and other diagnostics</strong> –
              Anonymized data related to your device for troubleshooting and app
              improvement.
            </li>
          </ul>

          <h3>Identifiers</h3>
          <ul>
            <li>
              <strong>User ID</strong> – A unique identifier linked to your
              account or device.
            </li>
            <li>
              <strong>Device Info</strong> – Anonymous device-level data used
              for analytics and diagnostics.
            </li>
          </ul>

          <h3>Optional Access</h3>
          <ul>
            <li>
              <strong>Contacts</strong> – If you choose to link your contacts to
              enhance social features, the data is not stored or linked to your
              identity unless you explicitly opt in.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Operate and personalize your WinToday experience.</li>
            <li>Enable habit sharing, commenting, and group chat features.</li>
            <li>Provide support and respond to inquiries.</li>
            <li>
              Monitor app performance and stability (e.g., using Firebase).
            </li>
            <li>Improve app functionality and reliability.</li>
          </ul>
          <p>
            We do not use your data for advertising or sell your data to third
            parties.
          </p>

          <h2>3. How We Share Your Information</h2>
          <p>
            We do not sell your personal information. However, we may share
            limited data with the following parties:
          </p>
          <ul>
            <li>
              <strong>Firebase (Google)</strong> – To provide analytics,
              diagnostics, and performance monitoring for the App.
              <br />
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-link"
              >
                Firebase Privacy Policy
              </a>
            </li>
            <li>
              <strong>Service Providers</strong> – Third-party companies that
              assist us with hosting, technical support, or customer service,
              bound by strict confidentiality agreements.
            </li>
            <li>
              <strong>Legal Authorities</strong> – If required by law, court
              order, or to protect the rights, safety, or property of WinToday
              or its users.
            </li>
          </ul>

          <h2>4. Data Retention and Deletion</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes described in this Policy. You may request the
            deletion of your account and associated data at any time by
            contacting us at the email below.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We use industry-standard security measures, such as encryption and
            secure storage, to protect your personal data. However, no system is
            entirely secure, and we cannot guarantee that unauthorized third
            parties will never be able to defeat our security measures. You use
            the App at your own risk.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            WinToday is not intended for use by children under the age of 13,
            and we do not knowingly collect personal information from
            individuals under the age of 13. If we become aware that a child
            under 13 has provided us with personal information, we will take
            steps to delete such information from our records.
          </p>

          <h2>
            7. U.S. State Privacy Rights (e.g., California Consumer Privacy Act
            - CCPA)
          </h2>
          <p>
            If you are a resident of California or another state with applicable
            privacy laws, you may have rights regarding your personal
            information. These rights may include:
          </p>
          <ul>
            <li>
              <strong>Access</strong> – The right to request the information we
              have collected about you.
            </li>
            <li>
              <strong>Deletion</strong> – The right to request the deletion of
              your personal information.
            </li>
            <li>
              <strong>Opt-Out</strong> – The right to opt-out of certain types
              of data sharing.
            </li>
          </ul>
          <p>
            <strong>Note:</strong> We do not sell your data, but third-party
            services may interpret certain data sharing as a "sale."
          </p>
          <p>
            To exercise any of these rights, please contact us at:{" "}
            <a href="mailto:diego.martlnez@icloud.com" className="privacy-link">
              diego.martlnez@icloud.com
            </a>
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted with a revised "Last Updated" date. Continued use of the App
            constitutes acceptance.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us at:
          </p>
          <p>
            <a href="mailto:andy.okamoto@icloud.com" className="privacy-link">
              andy.okamoto@icloud.com
            </a>
          </p>

          <p>
            <strong>End of Privacy Policy</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
