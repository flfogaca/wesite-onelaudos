"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, FileText, Building2, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Dynamic gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/5" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* Badge with pulse animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-8 backdrop-blur-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold text-primary">
              Documentação Técnica Completa
            </span>
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>

          {/* Main heading with enhanced styling */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight"
          >
            <span className="block text-text mb-2">Plataforma Integrada</span>
            <span className="block gradient-text">PACS · RIS · HIS</span>
          </motion.h1>

          {/* Enhanced subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-4 leading-relaxed"
          >
            Sistema completo de radiologia com armazenamento DICOM, gestão de laudos
            e integração hospitalar
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-text-tertiary max-w-3xl mx-auto mb-12"
          >
            Mais de 3.000 linhas de especificações técnicas consolidadas
          </motion.p>

          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-20"
          >
            <Link
              href="/pacs"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-hover text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5"
            >
              Explorar PACS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/arquitetura"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-elevated hover:bg-surface-hover text-text border-2 border-border-light font-semibold rounded-xl transition-all hover:border-primary/50"
            >
              Ver Arquitetura
            </Link>
          </motion.div>
        </div>

        {/* Enhanced system cards with better styling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <Link
            href="/pacs"
            className="group relative p-8 bg-surface/90 backdrop-blur-xl rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-shadow hover:card-shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                PACS
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Picture Archiving and Communication System
              </p>
              <p className="text-sm text-text-tertiary">
                Armazenamento e visualização avançada de imagens médicas DICOM
              </p>
            </div>
          </Link>

          <Link
            href="/ris"
            className="group relative p-8 bg-surface/90 backdrop-blur-xl rounded-2xl border-2 border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 card-shadow hover:card-shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mb-6 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                RIS
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Radiology Information System
              </p>
              <p className="text-sm text-text-tertiary">
                Worklist inteligente, laudos e gestão completa de exames
              </p>
            </div>
          </Link>

          <Link
            href="/his"
            className="group relative p-8 bg-surface/90 backdrop-blur-xl rounded-2xl border-2 border-border hover:border-success/50 transition-all duration-300 hover:-translate-y-2 card-shadow hover:card-shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-success to-green-400 flex items-center justify-center mb-6 shadow-lg shadow-success/20 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-success transition-colors">
                Mini HIS
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Hospital Information System
              </p>
              <p className="text-sm text-text-tertiary">
                RBAC, TISS/TUSS, portais e integração hospitalar completa
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
