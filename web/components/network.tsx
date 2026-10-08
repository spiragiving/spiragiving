"use client";
import Link from "next/link";
import {
  Github,
  Cloud,
  Database,
  CreditCard,
  BrainCircuit,
  MessageSquare,
  BarChart3,
  Workflow,
  Radio,
} from "lucide-react";
import { BrandMark } from "./brand";
const nodes = [
  { icon: Github, label: "Development", href: "github", x: 24, y: 16 },
  { icon: Cloud, label: "Cloud", href: "cloudflare", x: 73, y: 16 },
  { icon: Database, label: "Database", href: "supabase", x: 11, y: 46 },
  { icon: CreditCard, label: "Payments", href: "stripe", x: 86, y: 46 },
  { icon: BrainCircuit, label: "AI", href: "openai", x: 27, y: 79 },
  { icon: MessageSquare, label: "Messaging", href: "slack", x: 70, y: 80 },
];
export function NetworkVisual() {
  return (
    <div className="network-scene">
      <div className="network-grid" />
      <div className="network-ring ring-one" />
      <div className="network-ring ring-two" />
      <svg className="network-lines" viewBox="0 0 500 440" aria-hidden="true">
        <defs>
          <linearGradient id="line-gradient">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        {nodes.map((n) => (
          <path
            key={n.label}
            d={`M250 210 Q${n.x * 5} 210 ${n.x * 5} ${n.y * 4.4}`}
            fill="none"
            stroke="url(#line-gradient)"
            strokeWidth="1.4"
          />
        ))}
        <path
          className="signal-line"
          d="M250 210 Q430 210 430 202"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="3"
        />
      </svg>
      <div className="network-center">
        <BrandMark />
        <span>SPIRAGIVING</span>
      </div>
      {nodes.map(({ icon: Icon, ...n }, i) => (
        <Link
          key={n.label}
          href={`/integrations/${n.href}`}
          className={`network-node node-${i}`}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span>
            <Icon size={23} />
          </span>
          <small>{n.label}</small>
        </Link>
      ))}
      <div className="network-toast">
        <span className="status-light" />
        <div>
          <strong>Workflow completed</strong>
          <small>Sample event · just now</small>
        </div>
        <Workflow size={16} />
      </div>
      <div className="network-top-label">
        <Radio size={14} />
        <span>ONE CONNECTED ECOSYSTEM</span>
      </div>
      <div className="network-caption">
        <span>Illustrative connections</span>
        <span>Built to work together</span>
      </div>
    </div>
  );
}
