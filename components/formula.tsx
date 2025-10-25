"use client"

import { useEffect, useRef } from "react"

interface FormulaProps {
  formula: string
}

export function Formula({ formula }: FormulaProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      // In a real implementation, you would use MathJax or KaTeX
      // This is a simplified version that displays formulas in a more mathematical style
      containerRef.current.innerHTML = `
        <div class="bg-slate-50 p-4 rounded text-center font-serif text-lg">
          ${formatFormula(formula)}
        </div>
      `
    }
  }, [formula])

  // Simple formatter to make formulas more readable
  const formatFormula = (formula: string) => {
    // Replace common LaTeX patterns with HTML equivalents
    return formula
      .replace(/\\text\{([^}]+)\}/g, '<span class="font-sans">$1</span>')
      .replace(
        /\\frac\{([^}]+)\}\{([^}]+)\}/g,
        '<div class="inline-block align-middle mx-2"><div class="border-b border-black">$1</div><div>$2</div></div>',
      )
      .replace(/\\approx/g, "≈")
      .replace(/\\beta/g, "β")
      .replace(/\\sigma/g, "σ")
      .replace(/_\{([^}]+)\}/g, "<sub>$1</sub>")
      .replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>")
      .replace(/\\times/g, "×")
  }

  return <div ref={containerRef} className="w-full overflow-x-auto" />
}

