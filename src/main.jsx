import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import sfsuLogo from "../public/san-francisco-state-university-logo-png_seeklogo-348088.png";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  ChevronRight,
  Cloud,
  Command,
  Cpu,
  GraduationCap,
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
  ["Wireless", "Ruckus • Ubiquiti • Enterprise Wi-Fi", Wifi],
  ["Automation", "Python • PowerShell • Netmiko", Braces],
  ["Cloud & Systems", "Azure • Hyper-V • Windows Server", Cloud],
  ["Operations", "Monitoring • SOPs • Vendors • MSPs", Layers3],
];

const education = [
  [
    "Degree",
    "San Francisco State University",
    "B.S. Computer Science",
    "Software development, systems, networking and computer science fundamentals.",
  ],
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

  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const [shellOpen, setShellOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
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
      progress += Math.floor(Math.random() * 3) + 1;

      if (progress > 100) {
        progress = 100;
      }

      setBootProgress(progress);

      const newIndex = Math.min(Math.floor(progress / 15), messages.length - 1);

      if (newIndex !== messageIndex) {
        messageIndex = newIndex;
        setBootText(messages[newIndex]);
      }

      if (progress >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setBooting(false);
        }, 1200);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [booting]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const height = document.documentElement.scrollHeight - window.innerHeight;

      const progress = height > 0 ? (scrollTop / height) * 100 : 0;

      setScrollProgress(progress);

      const sections = ["home", "work", "experience", "education", "skills"];

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= window.innerHeight * 0.35) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });

      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);

      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouse);

    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();

    if (!q) return projects;

    return projects.filter((project) =>
      project.join(" ").toLowerCase().includes(q),
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

            <div className="boot-title">ARSANY ATTALLA</div>

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
              <span>NETWORK / SECURITY / AUTOMATION</span>

              <span>{String(bootProgress).padStart(3, "0")}%</span>
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

      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      <div
        className="mouse-glow"
        style={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
        }}
      />

      <div className="noise" />
      <div className="grid" />

      <header>
        <button className="brand" onClick={() => go("home")}>
          <span>
            <Radio size={17} />
          </span>
          ARSANY
        </button>

        <nav className={menu ? "open" : ""}>
          {["home", "projects", "experience", "education", "skills"].map((x) => (
            <button
              key={x}
              className={active === x ? "active" : ""}
              onClick={() => go(x)}
            >
              {x}
            </button>
          ))}

          <button className="kbd" onClick={() => setCmd(true)}>
            <Command size={13} />K
          </button>
        </nav>

        <button className="mobile" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <h1 align="center">Arsany Attalla</h1>

            <p className="lead" align="center">
              Network Administrator @ 1st United Credit Union
            </p>

            <div className="actions">
              <button className="primary" onClick={() => go("work")}>
                Explore my work
                <ArrowDownRight size={17} />
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

              <strong>network-admin</strong>

              <div>
                <b>arsany@network</b>:~$ status
              </div>

              <strong>
                <em>●</em> all systems nominal
              </strong>

              <button
                className="terminal-launch"
                onClick={() => setShellOpen(true)}
              >
                <Terminal size={14} />
                OPEN INTERACTIVE SHELL
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>

          <div className="visual reveal">
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

              <Metric l="PACKETS" v={packets.toLocaleString()} />

              <Metric l="NODES" v="24" />
            </div>
          </div>
        </section>

        
        <section id="projects" className="section">
          <Heading t="Projects" />

          <div className="search reveal">
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
                  className={`project ${p[5]} reveal`}
                  onClick={() => setSelected(p)}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();

                    const x = e.clientX - rect.left;

                    const y = e.clientY - rect.top;

                    e.currentTarget.style.setProperty("--card-x", `${x}px`);

                    e.currentTarget.style.setProperty("--card-y", `${y}px`);
                  }}
                >
                  <span className="num">0{i + 1}</span>

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
          <Heading  t="Experience" />

          <div className="timeline">
            {timeline.map((x, i) => (
              <div className="item reveal" key={x[2]}>
                <div className="year">{x[0]}</div>

                <div className="dot">{i === 0 ? <Zap size={12} /> : <i />}</div>

                <div>
                  <h3>{x[1]}</h3>
                  <b>{x[2]}</b>
                  <p>{x[3]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section education">
          <Heading k="EDUCATION" t="Where I learned the fundamentals." />

          <div className="education-layout">
            {education.map((x) => {
              return (
                <div className="education-card reveal" key={x[1]}>
                  <div className="education-icon">
                    <img src={sfsuLogo} alt={x[1]} />
                  </div>

                  <div className="education-degree">
                    <span>{x[0]}</span>
                    <h3>{x[1]}</h3>
                    <p>{x[2]}</p>
                  </div>

                  <div className="education-description">
                    <small>FIELD OF STUDY</small>

                    <p>{x[3]}</p>
                  </div>

                  <div className="education-scan">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

       <section id="skills" className="section about">
  <div className="about-content">
    <div className="eyebrow">SKILLS</div>

    <h2 className="about-title">
      What I <span>work with.</span>
    </h2>


    <div className="skills">
      {skills.map((s) => {
        const Icon = s[2];

        return (
          <div key={s[0]} className="skill-card reveal">
            <div className="skill-icon">
              <Icon size={28} strokeWidth={1.8} />
            </div>

            <div className="skill-info">
              <strong>{s[0]}</strong>
              <small>{s[1]}</small>
            </div>
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
            Let's build something!
            <br />
          </h2>

          <p>
            Open to conversations around network engineering, infrastructure and
            cybersecurity.
          </p>

          <a className="primary" href="mailto:arsanyattalla10@gmail.com">
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
        <div className="backdrop" onClick={() => setCmd(false)}>
          <div className="cmd" onClick={(e) => e.stopPropagation()}>
            <div className="cmdsearch">
              <Search />

              <input autoFocus placeholder="Jump to..." />
            </div>

            {[
              ["Home", "home"],
              ["Projects", "projects"],
              ["Experience", "experience"],
              ["Education", "education"],
              ["Skills", "about"],
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

            <button
              onClick={() => {
                setCmd(false);
                setShellOpen(true);
              }}
            >
              Live Shell
              <Terminal size={15} />
            </button>

            <small>ESC to close · CTRL K to open</small>
          </div>
        </div>
      )}

      {selected && (
        <div className="backdrop" onClick={() => setSelected(null)}>
          <div
            className={`case ${selected[5]}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close" onClick={() => setSelected(null)}>
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
              CASE STUDY MODULE — add screenshots, architecture diagrams, GitHub
              links and implementation details here.
            </aside>
          </div>
        </div>
      )}

      {shellOpen && <LiveShell onClose={() => setShellOpen(false)} go={go} />}
    </div>
  );
}

function LiveShell({ onClose, go }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "ARSANY.NET INTERACTIVE SHELL v1.0",
    },
    {
      type: "system",
      text: "Secure session established.",
    },
    {
      type: "system",
      text: 'Type "help" to view available commands.',
    },
  ]);

  const [commandHistory, setCommandHistory] = useState([]);

  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);

  const commands = {
    help: [
      "Available commands:",
      "",
      "  help         Show available commands",
      "  whoami       Display operator information",
      "  status       Show system status",
      "  skills       List technical skills",
      "  education    Display education",
      "  projects     List selected projects",
      "  experience   Display career timeline",
      "  neofetch     Display system information",
      "  clear        Clear terminal",
      "  exit         Close shell",
    ],

    whoami: [
      "arsany",
      "",
      "Role: Network Administrator",
      "Focus: Network Engineering",
      "",
      "Location: SF / CA",
    ],

    status: [
      "SYSTEM STATUS",
      "────────────────────────",
      "NETWORK       [ ONLINE ]",
      "SECURITY      [ ONLINE ]",
      "AUTOMATION    [ ONLINE ]",
      "INFRASTRUCTURE[ ONLINE ]",
      "",
      "ALL SYSTEMS NOMINAL",
    ],

    skills: [
      "TECHNICAL SKILLS",
      "────────────────────────",
      "Network Architecture",
      "Cisco",
      "SD-WAN",
      "LAN / WAN / VLAN",
      "Palo Alto",
      "Firewalls",
      "VPN",
      "Ruckus",
      "Ubiquiti",
      "Python",
      "PowerShell",
      "Netmiko",
      "Azure",
      "Hyper-V",
      "Windows Server",
    ],

    education: [
      "EDUCATION",
      "────────────────────────",
      "B.S. San Francisco State University",
      "",
      "Field: Computer Science",
    ],

    projects: [
      "SELECTED PROJECTS",
      "────────────────────────",
      "01  Network Command Center",
      "02  Config Backup Automation",
      "03  Security Lab",
    ],

    experience: [
      "TRANSMISSION LOG",
      "────────────────────────",
      "NOW   Network Administrator",
      "      1st United Credit Union",
      "",
      "2025  IT Systems Administrator / Engineer",
      "      Draeger’s Supermarkets",
      "",
      "2025  End User Support Analyst",
      "      Fidelity Investments",
      "",
      "2023  Customer Application Engineer",
      "      Qureez / Zome",
    ],

    neofetch: [
      "              ARSANY.NET",
      "",
      "OS        : Network Infrastructure",
      "HOST      : Enterprise",
      "KERNEL    : Security Focused",
      "SHELL     : ArsanyShell",
      "NETWORK   : Cisco / Palo Alto",
      "SD-WAN    : VeloCloud",
      "WIRELESS  : Ruckus / Ubiquiti",
      "AUTOMATION: Python / Netmiko",
      "STATUS    : ONLINE",
    ],
  };

  const runCommand = (command) => {
    const clean = command.trim().toLowerCase();

    if (!clean) return;

    setCommandHistory((prev) => [...prev.filter((x) => x !== clean), clean]);

    setHistoryIndex(-1);

    setHistory((prev) => [
      ...prev,
      {
        type: "command",
        text: `arsany@network:~$ ${command}`,
      },
    ]);

    if (clean === "clear") {
      setHistory([]);
      return;
    }

    if (clean === "exit") {
      onClose();
      return;
    }

    if (clean === "work") {
      onClose();
      go("work");
      return;
    }

    if (clean === "education") {
      setHistory((prev) => [
        ...prev,
        ...commands.education.map((text) => ({
          type: "output",
          text,
        })),
      ]);
      return;
    }

    if (commands[clean]) {
      setHistory((prev) => [
        ...prev,
        ...commands[clean].map((text) => ({
          type: "output",
          text,
        })),
      ]);

      return;
    }

    setHistory((prev) => [
      ...prev,
      {
        type: "error",
        text: `command not found: ${clean}`,
      },
      {
        type: "output",
        text: 'Type "help" for available commands.',
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    runCommand(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (!commandHistory.length) return;

      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (historyIndex === -1) return;

      const nextIndex = historyIndex + 1;

      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="shell-backdrop" onClick={onClose}>
      <div className="live-shell" onClick={(e) => e.stopPropagation()}>
        <div className="shell-header">
          <div className="shell-title">
            <span className="shell-status" />
            ARSANY.NET / LIVE SHELL
          </div>

          <div className="shell-controls">
            <span>●</span>
            <span>●</span>
            <button onClick={onClose}>
              <X size={15} />
            </button>
          </div>
        </div>

        <div className="shell-body" onClick={() => inputRef.current?.focus()}>
          {history.map((item, index) => (
            <div
              className={`shell-line ${item.type}`}
              key={`${index}-${item.text}`}
            >
              {item.text || "\u00A0"}
            </div>
          ))}

          <form className="shell-input-line" onSubmit={handleSubmit}>
            <span>arsany@network:~$</span>

            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />

            <span className="cursor" />
          </form>
        </div>

        <div className="shell-footer">
          <span>↑ ↓ HISTORY</span>

          <span>
            TYPE <b>HELP</b> FOR COMMANDS
          </span>

          <span>ESC TO CLOSE</span>
        </div>
      </div>
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
    <div className="heading reveal">
      <div className="eyebrow">{k}</div>
      <h2>{t}</h2>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
