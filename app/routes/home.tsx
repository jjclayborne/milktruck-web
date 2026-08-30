import SpeedStripes from "~/components/SpeedStripes";
import CheckerStrip from "~/components/CheckerStrip";
import Icon from "~/components/Icon";
import Button from "~/components/Button";
import "./home.css";

export function meta() {
  return [
    { title: "Milktruck" },
    { name: "description", content: "Milktruck — the full site is being built. Reach out anytime." },
  ];
}

const SHOW_CTA = true;

export default function Home() {
  return (
    <div className="hold-page">
      <SpeedStripes bars={2} trim={false} style={{ width: "100%", height: 26 }} />

      <main className="hold-page__main">
        <img src="/assets/logo-wordmark-blue.png" alt="Milktruck" className="hold-page__logo" />

        <div className="hold-page__tagline-block">
          <p className="hold-page__tagline">
            Partnership-oriented consulting
            <br />
            future-focused software solutions
            <span style={{ color: "var(--sunflower)" }}>.</span>
          </p>
          <div style={{ width: 64, height: 4, background: "var(--royal-blue)" }} />
        </div>

        <div className="hold-page__card">
          <div className="hold-page__identity">
            <div className="hold-page__name">Jack Johnson</div>
            <div className="hold-page__role">Consultant and Developer</div>
          </div>

          <div className="hold-page__contacts">
            <a href="mailto:jack@milktruck.io" className="hold-page__contact">
              <Icon name="envelope-simple" weight="fill" size={20} />
              <span>jack@milktruck.io</span>
            </a>
            <a href="tel:+19012867164" className="hold-page__contact">
              <Icon name="phone" weight="fill" size={20} />
              <span>(901) 286-7164</span>
            </a>
            <a
              href="https://www.linkedin.com/in/119jackjohnson/"
              target="_blank"
              rel="noopener"
              className="hold-page__contact"
            >
              <Icon name="linkedin-logo" weight="fill" size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          {SHOW_CTA && (
            <a
              href="mailto:jack@milktruck.io"
              style={{ display: "inline-flex", alignItems: "center", minHeight: 44, textDecoration: "none" }}
            >
              <Button variant="primary" size="md" icon="arrow-right">
                Email me
              </Button>
            </a>
          )}
        </div>

        <p className="hold-page__footnote">
          This is a temporary page. The milktruck.io site is being built, reach out anytime.
        </p>
      </main>

      <CheckerStrip size={12} tone="royal" style={{ width: "100%", height: 12 }} />
    </div>
  );
}
