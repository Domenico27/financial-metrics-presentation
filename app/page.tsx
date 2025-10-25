"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import InvestmentPlan from "@/components/slides/investment-plan"
import ExpectedReturn from "@/components/slides/expected-return"
import SharpeRatio from "@/components/slides/sharpe-ratio"
import CapeRatio from "@/components/slides/cape-ratio"
import Beta from "@/components/slides/beta"
import SortinoRatio from "@/components/slides/sortino-ratio"
import AdditionalIndicators from "@/components/slides/additional-indicators"
import PrintView from "@/components/print-view"
import PrintInvestmentPlan from "@/components/print-investment-plan"

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPrintView, setIsPrintView] = useState(false)
  const [isPrintInvestmentPlan, setIsPrintInvestmentPlan] = useState(false)

  const slides = [
    <InvestmentPlan key="investment-plan" onPrint={handlePrintInvestmentPlan} />,
    <ExpectedReturn key="expected-return" />,
    <SharpeRatio key="sharpe-ratio" />,
    <CapeRatio key="cape-ratio" />,
    <Beta key="beta" />,
    <SortinoRatio key="sortino-ratio" />,
    <AdditionalIndicators key="additional-indicators" />,
  ]

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  function handlePrint() {
    setIsPrintView(true)
    setTimeout(() => {
      window.print()
      setIsPrintView(false)
    }, 100)
  }

  function handlePrintInvestmentPlan() {
    setIsPrintInvestmentPlan(true)
    setTimeout(() => {
      window.print()
      setIsPrintInvestmentPlan(false)
    }, 100)
  }

  if (isPrintView) {
    return <PrintView />
  }

  if (isPrintInvestmentPlan) {
    return <PrintInvestmentPlan />
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        {slides[currentSlide]}

        <div className="flex justify-between items-center p-4 border-t">
          <Button
            variant="outline"
            onClick={goToPrevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>

          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          <Button
            variant="outline"
            onClick={goToNextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2"
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

