import { 
  ArrowDown, 
  Target, 
  Globe, 
  CheckCircle, 
  Box, 
  Cpu, 
  HardDrive, 
  Headphones, 
  Activity, 
  Server, 
  ArrowRight, 
  Package, 
  Briefcase, 
  CreditCard, 
  Award, 
  Map, 
  BookOpen, 
  Layers, 
  Anchor, 
  Mail, 
  MapPin 
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import PillarCard from "@/app/components/pillar-card";
import { getSiteContent } from "@/app/actions";
export default async function Home() {
  const pillars = await getSiteContent("pillar");
  const fallbackPillars = [
    { number: "01", title: "African-Centered AI Research", description: "Focus on embedding African languages and indigenous knowledge into AI to create culturally relevant technologies.", icon: "Database", color: "indigo" },
    { number: "02", title: "Educational Transformation", description: "Use XR and agentic AI technologies to revolutionize education and automate academic workflows.", icon: "Monitor", color: "amber" },
    { number: "03", title: "Entrepreneurship Empowerment", description: "Foster a culture of creators and innovators to promote entrepreneurship within academic communities.", icon: "Users", color: "emerald" },
    { number: "04", title: "Pan-African Innovation Network", description: "Build collaborative networks between universities and industries across Africa to drive innovation.", icon: "Share2", color: "purple" },
    { number: "05", title: "Sustainable Monetization", description: "Develop diverse revenue streams and marketplaces for AI and XR solutions to ensure sustainability.", icon: "TrendingUp", color: "rose" },
    { number: "06", title: "Accessibility & Scalability", description: "Ensure solutions are scalable and accessible across devices using cloud-based architectures.", icon: "Cloud", color: "cyan" },
  ];
  const displayPillars = pillars.length > 0 ? pillars.map(p => ({
    number: p.metadata?.number || "00",
    title: p.title,
    description: p.content,
    icon: p.icon,
    color: p.color
  })) : fallbackPillars;
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-900 to-slate-900"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-300">Pioneering Africa&apos;s AI Renaissance</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
                <span className="bg-gradient-to-r from-white via-indigo-200 to-amber-200 bg-clip-text text-transparent">NAIRA</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 mb-4 font-display animate-fade-in-up delay-200">
                NBU ARTIFICIAL INTELLIGENCE RESEARCH & ADVANCEMENT INSTITUTE
              </p>
              
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
                Transforming education and innovation through immersive XR experiences and agentic AI architectures, embedding African languages, culture, and indigenous knowledge into global technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
                <Link href="#vision" className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                  Explore Our Vision
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Link>
                <Link href="#partner" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105">
                  Partner With Us
                </Link>
              </div>
            </div>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-500">
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-display font-bold text-indigo-400 mb-1">6</div>
                <div className="text-sm text-slate-400">Strategic Pillars</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-display font-bold text-amber-400 mb-1">3</div>
                <div className="text-sm text-slate-400">Architecture Layers</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-display font-bold text-emerald-400 mb-1">XR</div>
                <div className="text-sm text-slate-400">Immersive Tech</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-display font-bold text-purple-400 mb-1">AI</div>
                <div className="text-sm text-slate-400">Agentic Systems</div>
              </div>
            </div>
          </div>
        </section>
        {/* Vision & Mission Section */}
        <section id="vision" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-amber-400 bg-clip-text text-transparent">
                    Vision & Mission
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    NAIRA aims to become Africa&apos;s foremost center for AI innovation and excellence, driving transformative research aligned with Africa&apos;s cultural contexts and development goals.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0 group-hover:bg-indigo-600/30 transition-colors">
                      <Target className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-white mb-2">AI Excellence Hub</h3>
                      <p className="text-slate-400">Positioning NBU as a premier AI center in Nigeria and across Africa, setting global standards for African-centered technological innovation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:bg-amber-600/30 transition-colors">
                      <Globe className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-white mb-2">Regional Leadership</h3>
                      <p className="text-slate-400">Leading Africa&apos;s AI-driven innovation and global competitiveness through cutting-edge research and applications.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-amber-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative glass-card rounded-3xl p-8 border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/images/vision-ai.jpg" alt="AI Innovation" className="w-full h-64 object-cover rounded-2xl mb-6" />
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-emerald-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Immersive Experiential Learning</span>
                    </div>
                    <div className="flex items-center gap-3 text-emerald-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">African-centered AI Research</span>
                    </div>
                    <div className="flex items-center gap-3 text-emerald-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Empowering Content Creation</span>
                    </div>
                    <div className="flex items-center gap-3 text-emerald-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Commercialization & Sustainability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Strategic Pillars Section */}
        <section id="pillars" className="py-24 bg-slate-950/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/images/pillars-bg.jpg')] bg-cover bg-center opacity-5"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">Our Foundation</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">Six Strategic Pillars</h2>
              <p className="text-slate-400 text-lg">Our comprehensive approach to transforming Africa&apos;s technological landscape through education, innovation, and sustainable growth.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPillars.map((pillar) => (
                <PillarCard 
                  key={pillar.number}
                  number={pillar.number}
                  title={pillar.title}
                  description={pillar.description}
                  iconName={pillar.icon}
                  color={pillar.color}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Architecture Section */}
        <section id="architecture" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-amber-400 font-medium tracking-wider uppercase text-sm">System Design</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">Three-Layer Architecture</h2>
              <p className="text-slate-400 text-lg">Our robust technological infrastructure designed for scalability, security, and immersive experiences.</p>
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Experience Layer */}
              <div className="glass-card rounded-2xl p-8 border-l-4 border-indigo-500 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <Box className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300 text-xs font-bold">LAYER 1</span>
                      <h3 className="text-2xl font-display font-bold text-white">Experience Layer</h3>
                    </div>
                    <p className="text-slate-300 mb-4">Focuses on immersive and interactive experiences using XR classrooms to provide immersive learning environments with AI-driven interfaces for students and faculty.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">XR Classrooms</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">AI Interfaces</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">Immersive Learning</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Intelligence Layer */}
              <div className="glass-card rounded-2xl p-8 border-l-4 border-amber-500 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Cpu className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-amber-600/20 text-amber-300 text-xs font-bold">LAYER 2</span>
                      <h3 className="text-2xl font-display font-bold text-white">Intelligence Layer</h3>
                    </div>
                    <p className="text-slate-300 mb-4">Integrates Generative AI and Agentic AI to provide intelligent decision-making and adaptive learning capabilities through autonomous educational agents.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">Generative AI</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">Agentic Systems</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">Adaptive Learning</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Data & Integration Layer */}
              <div className="glass-card rounded-2xl p-8 border-l-4 border-emerald-500 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <HardDrive className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-600/20 text-emerald-300 text-xs font-bold">LAYER 3</span>
                      <h3 className="text-2xl font-display font-bold text-white">Data & Integration Layer</h3>
                    </div>
                    <p className="text-slate-300 mb-4">Manages data flow and integrates diverse datasets with secure API Gateway and Event Bus enabling interoperability, scalability, and data sovereignty.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">Secure APIs</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">Data Sovereignty</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">System Connectivity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 glass-card rounded-3xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                <div className="flex-1 p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/20">
                  <Headphones className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                  <div className="font-display font-bold text-white">Experience</div>
                  <div className="text-xs text-slate-400 mt-1">XR & Interfaces</div>
                </div>
                <ArrowRight className="hidden md:block w-6 h-6 text-slate-600" />
                <ArrowDown className="md:hidden w-6 h-6 text-slate-600" />
                <div className="flex-1 p-6 rounded-2xl bg-amber-600/10 border border-amber-500/20">
                  <Activity className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="font-display font-bold text-white">Intelligence</div>
                  <div className="text-xs text-slate-400 mt-1">AI & Agents</div>
                </div>
                <ArrowRight className="hidden md:block w-6 h-6 text-slate-600" />
                <ArrowDown className="md:hidden w-6 h-6 text-slate-600" />
                <div className="flex-1 p-6 rounded-2xl bg-emerald-600/10 border border-emerald-500/20">
                  <Server className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <div className="font-display font-bold text-white">Data & Integration</div>
                  <div className="text-xs text-slate-400 mt-1">APIs & Security</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Revenue Streams Section */}
        <section id="revenue" className="py-24 bg-slate-950/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-emerald-400 font-medium tracking-wider uppercase text-sm">Sustainability</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">Revenue Streams</h2>
              <p className="text-slate-400 text-lg">Diverse monetization strategies ensuring long-term viability and growth of African AI/XR innovations.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Package className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">XR Modules Marketplace</h3>
                <p className="text-slate-400 leading-relaxed">Sell XR lessons to schools, corporate partners, and training centers as a core revenue stream, creating a vibrant ecosystem of African-centered educational content.</p>
              </div>
              <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Corporate & Government Training</h3>
                <p className="text-slate-400 leading-relaxed">Offer tailored AI and XR courses for professional development in corporate and government sectors, driving digital transformation across industries.</p>
              </div>
              <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-rose-600/20 border border-rose-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-7 h-7 text-rose-400" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Subscription Access</h3>
                <p className="text-slate-400 leading-relaxed">Provide premium subscriptions granting students and faculty access to advanced simulations and AI agents, ensuring continuous learning and innovation.</p>
              </div>
              <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Research Collaboration & Grants</h3>
                <p className="text-slate-400 leading-relaxed">Engage in joint research projects funded by African and global institutions to drive innovation and establish thought leadership in AI/XR domains.</p>
              </div>
            </div>
          </div>
        </section>
        {/* African Content Model */}
        <section id="content" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950/20 to-slate-900"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-amber-500/20 bg-gradient-to-br from-white/5 to-white/0">
              <div className="text-center mb-10">
                <Map className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">African-Centered Content Model</h2>
                <p className="text-slate-300 text-lg">Embedding local languages, culture, and indigenous knowledge systems into scalable, sustainable technological solutions.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-full bg-amber-600/20 border border-amber-500/30 flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">Cultural Relevance</h3>
                  <p className="text-slate-400 text-sm">Content reflects local languages, culture, and knowledge systems unique to Africa.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto">
                    <Layers className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">Scalable Design</h3>
                  <p className="text-slate-400 text-sm">Modular design allows expansion and supports sustainable revenue generation over time.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <Anchor className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">Reference Model Hub</h3>
                  <p className="text-slate-400 text-sm">NBU aims to be a flagship African AI and XR hub attracting students, faculty, and partnerships.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section id="partner" className="py-24 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Join the African AI Renaissance</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Be part of the transformation. Whether you&apos;re a student, educator, researcher, or industry partner, NAIRA offers pathways to innovate and grow.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h3 className="font-display text-3xl font-bold text-white mb-6">Partner With Us</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Interested in collaborating, investing, or bringing NAIRA modules to your institution? Fill out the form and our team will get back to you within 48 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-indigo-400" />
                    </div>
                    <span>partnership@naira-hub.edu</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-lg bg-amber-600/20 border border-amber-500/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-amber-400" />
                    </div>
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-3xl p-8 border border-white/10">
                <form action="https://formspree.io/f/xoqgdgzl" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="full-name" className="text-sm font-medium text-slate-300">Full Name</label>
                      <input type="text" id="full-name" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                      <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium text-slate-300">Organization</label>
                    <input type="text" id="organization" name="organization" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none" placeholder="University or Company Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                    <textarea id="message" name="message" rows={4} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none resize-none" placeholder="Tell us about your interest in NAIRA..."></textarea>
                  </div>
                  <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-amber-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
