"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import { companyInfo } from "@/lib/mock-data"

export function StickyButtons() {
  const handleCall = () => {
    window.open(`tel:${companyInfo.phone}`, "_self")
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <Button
        onClick={handleCall}
        size="icon"
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </Button>

      <Button
        onClick={handleWhatsApp}
        size="icon"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
