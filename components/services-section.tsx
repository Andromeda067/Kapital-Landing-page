"use client"

import { Car, BookOpen, FileText, Clock, MapPin, Bike, Truck, Bus, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: BookOpen,
    title: "Aulas Teóricas",
    description: "Curso completo de legislação de trânsito com material didático atualizado",
    features: ["Material didático incluso", "Aulas presenciais e online", "Simulados para práticar"],
  },
  {
    icon: FileText,
    title: "Primeira Habilitação",
    description: "Processo completo para tirar sua primeira CNH categoria A ou B",
    features: ["Documentação inclusa", "Acompanhamento total", "Suporte até após a aprovação"],
  },
  {
    icon: Car,
    title: "Aulas Práticas - Carro",
    description: "Aprenda a dirigir carros com segurança em veículos modernos e revisados",
    features: ["Veículos com duplo comando", "Instrutores certificados", "Horários flexíveis"],
  },
  {
    icon: Bike,
    title: "Aulas Práticas - Moto",
    description: "Habilitação categoria A para motocicletas e ciclomotores",
    features: ["Moto 150cc", "Equipamentos de segurança", "Treinamento em circuito fechado"],
  },
  {
    icon: MapPin,
    title: "Mudança de Categoria",
    description: "Adicione novas categorias à sua habilitação existente",
    features: ["Categoria A para B", "Categoria B para A", "Categorias especiais"],
  },
  {
    icon: Bus,
    title: "Aulas Práticas - Ônibus",
    description: "Habilitação categoria D para transporte de passageiros",
    features: ["Ônibus urbanos", "Treinamento específico", "Curso de transporte escolar"],
  },
  {
    icon: Truck,
    title: "Aulas Práticas - Carreta",
    description: "Categoria C, D e E para veículos de carga e transporte",
    features: ["Caminhões e carretas", "Instrutores especializados", "Aulas em pista e via pública"],
  },
  {
    icon: Heart,
    title: "Suporte para alunos PCD's",
    description: "Programa especializado para pessoas com deficiência",
    features: ["Veículos adaptados", "Instrutores capacitados", "Acompanhamento personalizado"],
  },
  {
    icon: Clock,
    title: "Renovação de CNH",
    description: "Renove sua carteira de habilitação de forma rápida e prática",
    features: ["Processo agilizado", "Exames médicos", "Entrega em casa"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para todas as suas necessidades de habilitação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
