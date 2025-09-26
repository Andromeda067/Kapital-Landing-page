"use client"

import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LocationSection() {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Nossa <span className="text-primary">Localização</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Estamos estrategicamente localizados para melhor atendê-lo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rua Ana Luiza de Souza, 613 - Pioneiros
                  <br />
                  Campo grande - MS, 79070-140
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Segunda a Sexta:</strong> 08:00 às 18:00
                  </p>
                  <p>
                    <strong>Sábado:</strong> 08:00 às 12:00
                  </p>
                  <p>
                    <strong>Domingo:</strong> Fechado
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Phone className="w-5 h-5 text-primary mr-2" />
                    Telefone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">(67) 3388-1003</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Mail className="w-5 h-5 text-primary mr-2" />
                    E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">contato@autoescola.com.br</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Rua+Ana+Luiza+de+Souza,+613+-+Pioneiros,+Mato+Grosso+do+Sul"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden shadow-2xl aspect-video"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.789359143338!2d-54.61166332471275!3d-20.514859481009037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486ef62ac9ea507%3A0x6717a0545c006870!2sR.%20Ana%20Lu%C3%ADsa%20de%20Souza%2C%20613%20-%20Universit%C3%A1rio%2C%20Campo%20Grande%20-%20MS%2C%2079070-140!5e0!3m2!1spt-BR!2sbr!4v1758848422814!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full pointer-events-none"
              ></iframe>
            </a>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-float">
              <MapPin className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>


          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-float">
            <MapPin className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>
      </div>
    </section >
  )
}
