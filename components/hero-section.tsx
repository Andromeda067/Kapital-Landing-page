"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Users } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-20"
    >
      <div className="absolute inset-0 bg-[url('/modern-car-driving-school-background.jpg')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-up opacity-100" : "opacity-0"}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Mais de 18 anos formando condutores
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
              Sua <span className="text-primary">habilitação</span> com
              <br />
              segurança e qualidade
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              Na AutoEscola Kapital, transformamos sonhos em realidade. Aprenda a dirigir com os melhores instrutores e
              conquiste sua liberdade com total segurança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#contato"> <Button size="lg" className="text-lg px-8 py-6">
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              </a>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-scale opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Seguro</h3>
              <p className="text-muted-foreground text-center">Veículos revisados e instrutores certificados</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aprovação Garantida</h3>
              <p className="text-muted-foreground text-center">80% de aprovação na primeira tentativa</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">+5000 Alunos</h3>
              <p className="text-muted-foreground text-center">Milhares de condutores formados com sucesso</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
