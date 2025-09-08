import React from "react";
import "./TermsOfService.css";

const TermsOfService = ({ onBack }) => {
  return (
    <div className="terms-of-service">
      <div className="container">
        <div className="terms-of-service-header">
          <button onClick={onBack} className="back-button">
            ← Back to Home
          </button>
          <h1>Terms of Service</h1>
        </div>
        <div className="terms-of-service-content">
          <p>
            <strong>Last updated: May 14, 2025</strong>
          </p>

          <p>
            Welcome to WinToday. These Terms of Service ("Terms") govern your
            use of the mobile application WinToday (the "App"), which is owned
            and operated by Andy Okamoto and Diego Martinez ("we," "us," or
            "our"), partners in the development and operation of the App.
          </p>

          <p>
            By using the App, you agree to be bound by these Terms. If you do
            not agree, do not download or use the App.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            To use WinToday, you must be at least 13 years old or the minimum
            age in your country to use social media platforms. If you are under
            18, you must have your parent or guardian's permission to use the
            App. By using the App, you represent and warrant that you meet these
            requirements.
          </p>

          <h2>2. Use of the App</h2>
          <p>
            WinToday is a free mobile app that allows users to track habits,
            complete tasks, and share content (photos, text, and comments) with
            friends or a broader community through a global feed. You agree to
            use WinToday only for lawful purposes and in a way that does not
            infringe on the rights of others or restrict their use of the App.
          </p>
          <p>
            You are responsible for your own behavior on the platform, including
            any content you submit, share, or interact with.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            To use certain features of WinToday, you may be required to create
            an account and provide your email address. You agree to provide
            accurate and current information and to keep it updated. You are
            responsible for maintaining the security of your account and are
            fully responsible for all activities that occur under your account.
          </p>

          <h2>4. User-Generated Content</h2>
          <p>
            You may submit content to the App, including text, photos, and habit
            submissions ("User Content"). You retain ownership of your User
            Content, but by posting it on WinToday, you grant us a
            non-exclusive, worldwide, royalty-free license to use, display, and
            distribute that content in connection with operating and promoting
            the App.
          </p>
          <p>You represent and warrant that:</p>
          <ul>
            <li>
              You own or have the necessary rights to the content you submit.
            </li>
            <li>
              Your content does not infringe any intellectual property rights,
              privacy rights, or any other legal rights of a third party.
            </li>
            <li>
              Your content does not violate any law, contain hate speech,
              nudity, harassment, violence, threats, or promote self-harm or
              illegal activity.
            </li>
          </ul>
          <p>
            We reserve the right to remove or restrict access to any User
            Content that violates these Terms or is otherwise objectionable, at
            our sole discretion and without notice.
          </p>

          <h2>5. Community Guidelines</h2>
          <p>
            To maintain a positive and respectful environment, you agree not to:
          </p>
          <ul>
            <li>Bully, harass, or threaten other users.</li>
            <li>
              Post content that is defamatory, pornographic, obscene, or
              otherwise inappropriate.
            </li>
            <li>
              Use the App for commercial purposes or to promote outside
              services.
            </li>
            <li>Impersonate another person or misrepresent your identity.</li>
            <li>
              Exploit or misuse the App for anything other than its intended
              purpose.
            </li>
            <li>Circumvent moderation tools, filters, or reporting systems.</li>
          </ul>
          <p>
            Violation of these guidelines may result in removal of content,
            suspension, or permanent banning from the App.
          </p>

          <h2>6. Content Moderation and Reporting</h2>
          <p>
            The App includes user-reporting features to help enforce community
            standards. We reserve the right to review, moderate, or remove any
            content at any time and take appropriate action based on community
            reports or observed violations. Moderation is not guaranteed to be
            immediate.
          </p>
          <p>
            We may also terminate or suspend your access to the App at our
            discretion if we believe you have violated these Terms or pose a
            risk to the community.
          </p>

          <h2>7. Privacy</h2>
          <p>
            Your use of the App is subject to our WinToday Privacy Policy which
            explains how we collect, use, and share your data. By using the App,
            you consent to the data practices described in the Privacy Policy.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content and materials in the App, other than User Content,
            including design, code, and branding, are the property of Andy
            Okamoto and Diego Martinez and are protected by copyright and other
            laws. You may not reproduce, modify, or distribute any part of the
            App without permission.
          </p>

          <h2>9. Disclaimers</h2>
          <p>
            The App is provided "as is" and "as available" with no warranties,
            express or implied. We do not guarantee that the App will be secure,
            error-free, or available at all times. You use the App at your own
            risk.
          </p>
          <p>
            We are not responsible for the conduct, content, or communications
            of users on the platform.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we will not be liable for
            any damages arising from your use or inability to use the App,
            including lost data, harm from user interactions, or exposure to
            offensive content. In no event shall our total liability exceed $0,
            as the App is provided free of charge.
          </p>

          <h2>11. Termination</h2>
          <p>
            You may stop using the App at any time. We reserve the right to
            suspend or terminate access at any time for violations of these
            Terms or for any reason we deem necessary to protect the community.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We may revise these Terms at any time. If we make material changes,
            we will notify you within the App. Continued use of the App after
            the changes means you accept the revised Terms.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Utah, United
            States, without regard to its conflict of laws principles. Any
            disputes shall be resolved in the courts of Salt Lake County, Utah.
          </p>

          <h2>14. Contact</h2>
          <p>If you have questions or concerns, contact us at:</p>
          <p>
            <a href="mailto:andy.okamoto@icloud.com" className="terms-link">
              andy.okamoto@icloud.com
            </a>
          </p>

          <p>
            <strong>End of Terms of Service</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
