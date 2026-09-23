"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Lock, Activity, ChevronRight } from "lucide-react";

export default function AISecurityLanding() {
  const features = [
    { icon: Shield, title: "Agent Protection", desc: "Monitor and protect AI agents across enterprise environments." },
    { icon: Cpu, title: "AI Visibility", desc: "Understand behaviors, interactions and emerging risks." },
    { icon: Lock, title: "Threat Prevention", desc: "Detect vulnerabilities before they become incidents." },
    { icon: Activity, title: "Risk Intelligence", desc: "Quantify exposure with real-time analytics." }
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-600/10 blur-[180px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-widest">
            GUARDBASE
          </div>
          {/* CORREÇÃO AQUI: Tags de link ajustadas para o padrão HTML/JSX */}
          <nav className="hidden md:flex gap-8 text-gray-300">
            <a href="#platform" className="hover:text-cyan-400 transition-colors">Platform</a>
            <a href="#solutions" className="hover:text-cyan-400 transition-colors">Solutions</a>
            <a href="#security" className="hover:text-cyan-400 transition-colors">Security</a>
            <a href="#resources" className="hover:text-cyan-400 transition-colors">Resources</a>
          </nav>
          <button className="px-5 py-2 rounded-full bg-cyan-500 text-black font-semibold">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-28">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="inline-flex px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 mb-8">
            AI Security Platform
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-none">
            Secure <br /> AI Agents
          </h1>
          <p className="max-w-3xl mx-auto mt-8 text-xl text-gray-400">
            Enterprise-grade visibility, protection and risk intelligence designed for the next generation of AI-powered systems.
          </p>
          <div className="flex justify-center gap-4 mt-10">
            <button className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold">
              Start Free
            </button>
            <button className="px-8 py-4 rounded-2xl border border-white/20">
              Explore Platform
            </button>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ repeat: Infinity, duration: 5 }}
          className="mt-24"
        >
          <div className="relative max-w-5xl mx-auto h-[500px] rounded-[40px] border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-transparent backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_70%)]" />
            <div className="absolute inset-10 rounded-3xl border border-white/10">
              <div className="grid grid-cols-3 h-full">
                <div className="border-r border-white/10" />
                <div className="border-r border-white/10" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Shield size={180} className="text-cyan-400" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "99.99%", label: "Uptime" },
            { value: "24/7", label: "Monitoring" },
            { value: "500+", label: "Enterprise Clients" },
            { value: "100M+", label: "Threats Blocked" }
          ].map((stat) => (
            // AJUSTE: Estrutura interna melhorada para exibir valor e rótulo com Key única
            <div key={stat.value} className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <h2 className="text-5xl font-bold"> Purpose-built for AI security </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <Icon className="text-cyan-400 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4"> {feature.title} </h3>
                <p className="text-gray-400"> {feature.desc} </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <div className="relative rounded-[40px] overflow-hidden border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-16 text-center">
          <h2 className="text-5xl font-bold mb-6"> Ready to protect your AI ecosystem? </h2>
          <p className="text-gray-400 max-w-2xl mx-auto"> Monitor, understand and secure AI agents with a modern enterprise platform. </p>
          <button className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black rounded-2xl font-bold">
            Request Demo <ChevronRight />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        © 2026 AI Security Platform
      </footer>
    </div>
  );
}
