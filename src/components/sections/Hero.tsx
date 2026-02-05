"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, FileText, Building2, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Documentação Técnica Completa
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-text">Plataforma Integrada de</span>
          <br />
          <span className="gradient-text">Radiologia</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-12"
        >
          Documentação técnica completa do sistema PACS/RIS/HIS. Referência para 
          equipe de desenvolvimento com mais de 3.000 linhas de especificações funcionais.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/pacs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors"
          >
            Explorar PACS
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/arquitetura"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover text-text border border-border font-medium rounded-lg transition-colors"
          >
            Ver Arquitetura
          </Link>
        </motion.div>

        {/* System Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {/* PACS Card */}
          <Link
            href="/pacs"
            className="group p-6 bg-surface/80 backdrop-blur rounded-xl border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-indigo-400 flex items-center justify-center mb-4 mx-auto">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors">
              PACS
            </h3>
            <p className="text-sm text-muted">
              Picture Archiving and Communication System. Armazenamento e visualização de imagens DICOM.
            </p>
          </Link>

          {/* RIS Card */}
          <Link
            href="/ris"
            className="group p-6 bg-surface/80 backdrop-blur rounded-xl border border-border hover:border-accent/50 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center mb-4 mx-auto">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-accent transition-colors">
              RIS
            </h3>
            <p className="text-sm text-muted">
              Radiology Information System. Worklist, laudos, filtros e gestão de exames.
            </p>
          </Link>

          {/* HIS Card */}
          <Link
            href="/his"
            className="group p-6 bg-surface/80 backdrop-blur rounded-xl border border-border hover:border-success/50 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-success to-green-400 flex items-center justify-center mb-4 mx-auto">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-success transition-colors">
              Mini HIS
            </h3>
            <p className="text-sm text-muted">
              Hospital Information System. Gestão de usuários, TISS/TUSS e portais.
            </p>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
