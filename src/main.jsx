import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  ChevronRight,
  Cloud,
  Command,
  Cpu,
  Globe2,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  Radio,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wifi,
  X,
  Zap,
} from "lucide-react";

import "./styles.css";

const projects = [
  [
    "Network Command Center",
    "NETWORK",
    "Interactive enterprise network visualization with gateways, branches, firewalls, SD-WAN and wireless infrastructure.",
    ["Cisco", "Palo Alto", "VeloCloud", "Ruckus"],
    Network,
    "cyan",
  ],
  [
    "Config Backup Automation",
    "AUTOMATION",
    "Python workflow for collecting device configurations, organizing backups and preparing repeatable changes.",
    ["Python", "Netmiko", "Git", "CI/CD"],
    Terminal,
    "violet",
  ],
  [
    "Security Lab",
    "SECURITY",
    "A lab environment for segmentation, firewall policies, VPN access, monitoring and incident-response workflows.",
    ["Palo Alto", "VPN", "VLAN", "Monitoring"],
    LockKeyhole,
    "lime",
  ],
];

const timeline = [
  [
    "NOW",
    "Network Administrator",
    "1st United Credit Union",
    "Network architecture, SD-WAN, Cisco, Palo Alto, wireless, vendor coordination and infrastructure operations.",
  ],
  [
    "2025",
    "IT Systems Administrator / Engineer",
    "Draeger’s Supermarkets",
    "Windows Server, Active Directory, DNS, DHCP, GPO, Cisco, Palo Alto, VeloCloud, VPN, VoIP and cloud systems.",
  ],
  [
    "2025",
    "End User Support Analyst",
    "Fidelity Investments",
    "Enterprise endpoint support, Intune, Azure AD, networking, VPN, Autopilot and regional support.",
  ],
  [
    "2023",
    "Customer Application Engineer",
    "Qureez / Zome",
    "Application development, APIs, cloud services and connected-device workflows.",
  ],
];

const skills = [
  ["Network Architecture", "Cisco • SD-WAN • LAN/WAN • VLANs", Network],
  ["Security", "Palo Alto • Firewalls • VPN • Segmentation", ShieldCheck],
  ["Wireless", "Ruckus • Ubiquiti • Meraki", Wifi],
  ["Automation", "Python • PowerShell • Netmiko", Braces],
  ["Cloud & Systems", "Azure • Hyper-V • Windows Server", Cloud],
  ["Operations", "Monitoring • SOPs • Vendors • MSPs", Layers3],
];

function App() {
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);
  const [cmd, setCmd] = useState(false);
  const [query, setQuery] = useState("");
  const [live, setLive] = useState(98.7);
  const [packets, setPackets] = useState(1284);
  const [selected, setSelected] = useState(null);

  const [booting, setBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [bootText, setBootText] = useState("INITIALIZING NETWORK");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();
        setCmd(true);
      }

      if (e.key === "Escape") {
        setCmd(false);
        setSelected(null);
        setMenu(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPackets((p) => p + Math.floor(Math.random() * 21));
      setLive(+(98.2 + Math.random() * 1.7).toFixed(1));
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const messages = [
    "INITIALIZING NETWORK",
    "LOADING SECURITY MODULES",
    "CONNECTING INFRASTRUCTURE",
    "VERIFYING SYSTEMS",
    "SCANNING NETWORK NODES",
    "ESTABLISHING SECURE SESSION",
    "SYSTEM ONLINE",
  ];

  let progress = 0;
  let messageIndex = 0;

  const interval = setInterval(() => {
    // Much slower progress
    progress += Math.floor(Math.random() * 3) + 1;

    if (progress > 100) {
      progress = 100;
    }

    setBootProgress(progress);

    // Change status messages gradually
    const newIndex = Math.min(
      Math.floor(progress / 15),
      messages.length - 1
    );

    if (newIndex !== messageIndex) {
      messageIndex = newIndex;
      setBootText(messages[newIndex]);
    }

    if (progress >= 100) {
      clearInterval(interval);

      // Stay on SYSTEM ONLINE for a moment
      setTimeout(() => {
        setBooting(false);
      }, 1200);
    }
  }, 150);

  return () => clearInterval(interval);
}, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();

    if (!q) return projects;

    return projects.filter((project) =>
      project.join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  const go = (id) => {
    setActive(id);
    setMenu(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      {booting && (
        <div
          className={`boot-screen ${
            bootProgress >= 100 ? "boot-complete" : ""
          }`}
        >
          <div className="boot-grid" />

          <div className="boot-content">
            <div className="boot-logo">
              <div className="boot-ring ring-one" />
              <div className="boot-ring ring-two" />
              <div className="boot-ring ring-three" />

              <div className="boot-core">
                <Network size={32} />
              </div>
            </div>

            <div className="boot-title">
              ARSANY
            </div>

            <div className="boot-status">
              <span className="boot-dot" />
              {bootText}
            </div>

            <div className="boot-progress">
              <div
                className="boot-progress-fill"
                style={{
                  width: `${bootProgress}%`,
                }}
              />
            </div>

            <div className="boot-footer">
              <span>
                NETWORK / SECURITY / AUTOMATION
              </span>

              <span>
                {String(bootProgress).padStart(3, "0")}%
              </span>
            </div>
          </div>

          <div className="boot-lines">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      )}

      <div className="noise" />
      <div className="grid" />

      <header>
        <button
          className="brand"
          onClick={() => go("home")}
        >
          <span>
            <Radio size={17} />
          </span>

          ARSANY
          
        </button>

        <nav className={menu ? "open" : ""}>
          {["home", "work", "experience", "about"].map((x) => (
            <button
              key={x}
              className={active === x ? "active" : ""}
              onClick={() => go(x)}
            >
              {x}
            </button>
          ))}

          <button
            className="kbd"
            onClick={() => setCmd(true)}
          >
            <Command size={13} />
            K
          </button>
        </nav>

        <button
          className="mobile"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>

        <section id="home" className="hero section" >
          <div>
            

            <h1 align='center'>Arsany Attalla</h1>

            <p className="lead" align='center'>
              Network Administrator @ 1st United Credit Union
            </p>

            
            <div className="actions">
              <button
                className="primary"
                onClick={() => go("work")}
              >
                Explore my work
                <ArrowDownRight size={17} />
              </button>

              <button
                className="ghost"
                onClick={() => go("about")}
              >
                Who is Arsany?
              </button>
            </div>

            <div className="terminal">
              <div className="termtop">
                <span>● LIVE SHELL</span>
                <span>SF / CA</span>
              </div>

              <div>
                <b>arsany@network</b>:~$ whoami
              </div>

              <strong>
                network-admin
              </strong>

              <div>
                <b>arsany@network</b>:~$ status
              </div>

              <strong>
                <em>●</em> all systems nominal
              </strong>
            </div>
          </div>

          <div className="visual">
            <div className="orbital">
              <div className="orbit a" />
              <div className="orbit b" />
              <div className="orbit c" />

              <div className="core">
                <Network size={44} />

                <small>
                  NETWORK
                  <br />
                  CORE
                </small>
              </div>

              <Node c="n1" I={Network} />
              <Node c="n2" I={ShieldCheck} />
              <Node c="n3" I={Cloud} />
              <Node c="n4" I={Server} />
            </div>

            <div className="metrics">
              <Metric l="UPTIME" v={`${live}%`} />
              <Metric
                l="PACKETS"
                v={packets.toLocaleString()}
              />
              <Metric l="NODES" v="24" />
            </div>
          </div>
        </section>

        <div className="ticker">
          NETWORK ARCHITECTURE
          <span>✦</span>
          SECURITY
          <span>✦</span>
          SD-WAN
          <span>✦</span>
          AUTOMATION
          <span>✦</span>
          INFRASTRUCTURE
          <span>✦</span>
          NETWORK ARCHITECTURE
        </div>

        <section id="work" className="section">
          <Heading
            k="SELECTED WORK"
            t="Things I've been building."
          />

          <div className="search">
            <Search size={16} />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, technologies, systems..."
            />

            <span>{filtered.length} PROJECTS</span>
          </div>

          <div className="projects">
            {filtered.map((p, i) => {
              const Icon = p[4];

              return (
                <button
                  key={p[0]}
                  className={`project ${p[5]}`}
                  onClick={() => setSelected(p)}
                >
                  <span className="num">
                    0{i + 1}
                  </span>

                  <div className="picon">
                    <Icon size={24} />
                  </div>

                  <small>{p[1]}</small>

                  <h3>{p[0]}</h3>

                  <p>{p[2]}</p>

                  <div className="chips">
                    {p[3].map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>

                  <label>
                    OPEN CASE STUDY
                    <ArrowUpRight size={15} />
                  </label>
                </button>
              );
            })}
          </div>
        </section>

        <section id="experience" className="section exp">
          <Heading
            k="TRANSMISSION LOG"
            t="Where I've been."
          />

          <div className="timeline">
            {timeline.map((x, i) => (
              <div className="item" key={x[2]}>
                <div className="year">{x[0]}</div>

                <div className="dot">
                  {i === 0 ? <Zap size={12} /> : <i />}
                </div>

                <div>
                  <h3>{x[1]}</h3>
                  <b>{x[2]}</b>
                  <p>{x[3]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div className="aboutcard">
            <div>
              <div className="eyebrow">
                01 / PHILOSOPHY
              </div>

              <h2>Infrastructure is a product.</h2>

              <p>
                The best network is not the one with the most
                features. It's the one that is predictable,
                observable, secure and easy for the next engineer
                to understand.
              </p>
            </div>

            <div className="stats">
              <Stat
                I={Cpu}
                a="NETWORK"
                b="Primary focus"
              />

              <Stat
                I={ShieldCheck}
                a="SECURITY"
                b="Next chapter"
              />

              <Stat
                I={Braces}
                a="PYTHON"
                b="Automation"
              />
            </div>
          </div>

          <div>
            <div className="eyebrow">
              02 / TOOLBOX
            </div>

            <div className="skills">
              {skills.map((s) => {
                const Icon = s[2];

                return (
                  <div key={s[0]}>
                    <Icon size={19} />

                    <span>
                      <strong>{s[0]}</strong>
                      <small>{s[1]}</small>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta section">
          <div className="ctagrid" />

          <div className="eyebrow">
            <Sparkles size={14} />
            END OF TRANSMISSION
          </div>

          <h2>
            Let's build something
            <br />
            <span>that stays up.</span>
          </h2>

          <p>
            Open to conversations around network engineering,
            infrastructure and cybersecurity.
          </p>

          <a
            className="primary"
            href="mailto:hello@example.com"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </a>
        </section>

      </main>

      <footer>
        <span>© 2026 ARSANY ATTALLA</span>
        <span>NETWORK / SECURITY / AUTOMATION</span>
        <span>BUILT WITH REACT</span>
      </footer>

      {cmd && (
        <div
          className="backdrop"
          onClick={() => setCmd(false)}
        >
          <div
            className="cmd"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cmdsearch">
              <Search />

              <input
                autoFocus
                placeholder="Jump to..."
              />
            </div>

            {[
              ["Home", "home"],
              ["Selected Work", "work"],
              ["Experience", "experience"],
              ["About", "about"],
            ].map((x) => (
              <button
                key={x[1]}
                onClick={() => {
                  setCmd(false);
                  go(x[1]);
                }}
              >
                {x[0]}
                <ChevronRight size={15} />
              </button>
            ))}

            <small>
              ESC to close · CTRL K to open
            </small>
          </div>
        </div>
      )}

      {selected && (
        <div
          className="backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className={`case ${selected[5]}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>

            <small>{selected[1]}</small>

            <h2>{selected[0]}</h2>

            <p>{selected[2]}</p>

            <div className="diagram">
              <div>
                <Globe2 />
                USERS
              </div>

              <ArrowRight />

              <div>
                <Network />
                NETWORK
              </div>

              <ArrowRight />

              <div>
                <ShieldCheck />
                SECURITY
              </div>
            </div>

            <div className="chips">
              {selected[3].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>

            <aside>
              CASE STUDY MODULE — add screenshots,
              architecture diagrams, GitHub links and
              implementation details here.
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}

function Node({ c, I }) {
  return (
    <div className={`node ${c}`}>
      <I size={21} />
    </div>
  );
}

function Metric({ l, v }) {
  return (
    <div>
      <small>{l}</small>
      <strong>{v}</strong>
    </div>
  );
}

function Stat({ I, a, b }) {
  return (
    <div>
      <I size={17} />
      <strong>{a}</strong>
      <small>{b}</small>
    </div>
  );
}

function Heading({ k, t }) {
  return (
    <div className="heading">
      <div className="eyebrow">{k}</div>
      <h2>{t}</h2>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);