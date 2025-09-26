"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Maria Silva",
    age: 28,
    category: "CNH B",
    rating: 5,
    text: "Excelente autoescola! Os instrutores são muito pacientes e profissionais. Passei na primeira tentativa graças ao ensino de qualidade.",
    avatar: "/smiling-woman-portrait.png",
  },
  {
    name: "João Santos",
    age: 35,
    category: "CNH A",
    rating: 5,
    text: "Recomendo demais! Estrutura moderna, aulas bem organizadas e preço justo. Consegui minha habilitação sem complicações.",
    avatar: "/smiling-man-portrait.png",
  },
  {
    name: "Ana Costa",
    age: 22,
    category: "CNH B",
    rating: 5,
    text: "Estava muito nervosa para aprender a dirigir, mas os instrutores me deixaram super confortável. Ambiente acolhedor e profissional.",
    avatar: "/young-woman-happy-portrait.jpg",
  },
  {
    name: "Carlos Oliveira",
    age: 45,
    category: "Renovação",
    rating: 5,
    text: "Processo de renovação super rápido e eficiente. Atendimento nota 10 e sem burocracia desnecessária.",
    avatar: "/middle-aged-man-portrait.jpg",
  },
  {
    name: "Lucia Ferreira",
    age: 58,
    category: "CNH B",
    rating: 5,
    text: "Nunca pensei que conseguiria tirar minha carteira aos 58 anos, mas aqui me senti acolhida e respeitada. Obrigada!",
    avatar: "/older-woman-smiling-portrait.jpg",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            O que nossos <span className="text-primary">alunos dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Mais de 5.000 alunos satisfeitos compartilham suas experiências conosco
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card shadow-xl border-0">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-muted-foreground text-sm">
                            {testimonial.age} anos • {testimonial.category}
                          </p>
                          <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                        </div>
                        <Quote className="w-8 h-8 text-primary/20 ml-auto" />
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed italic">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-background shadow-lg"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-background shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-muted-foreground/30"
                }`}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
