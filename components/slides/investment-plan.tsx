"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Printer, Info, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function InvestmentPlan({ onPrint }: { onPrint: () => void }) {
  // Stato per gestire il dialog
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [isQuarterlyView, setIsQuarterlyView] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedQuarter, setSelectedQuarter] = useState<string | null>(null)

  // Dati del piano di investimento
  const annualData = [
    { year: 1, yearDate: 2025, annual: 2520.0, quarterly: 630.0 },
    { year: 2, yearDate: 2026, annual: 2570.0, quarterly: 642.5 },
    { year: 3, yearDate: 2027, annual: 2622.0, quarterly: 655.5 },
    { year: 4, yearDate: 2028, annual: 2674.0, quarterly: 668.5 },
    { year: 5, yearDate: 2029, annual: 2728.0, quarterly: 682.0 },
    { year: 6, yearDate: 2030, annual: 2782.0, quarterly: 695.5 },
    { year: 7, yearDate: 2031, annual: 2838.0, quarterly: 709.5 },
    { year: 8, yearDate: 2032, annual: 2895.0, quarterly: 723.75 },
    { year: 9, yearDate: 2033, annual: 2953.0, quarterly: 738.25 },
    { year: 10, yearDate: 2034, annual: 3012.0, quarterly: 753.0 },
    { year: 11, yearDate: 2035, annual: 3072.0, quarterly: 768.0 },
    { year: 12, yearDate: 2036, annual: 3133.0, quarterly: 783.25 },
    { year: 13, yearDate: 2037, annual: 3196.0, quarterly: 799.0 },
    { year: 14, yearDate: 2038, annual: 3260.0, quarterly: 815.0 },
    { year: 15, yearDate: 2039, annual: 3325.0, quarterly: 831.25 },
    { year: 16, yearDate: 2040, annual: 3392.0, quarterly: 848.0 },
    { year: 17, yearDate: 2041, annual: 3459.0, quarterly: 864.75 },
    { year: 18, yearDate: 2042, annual: 3529.0, quarterly: 882.25 },
    { year: 19, yearDate: 2043, annual: 3599.0, quarterly: 899.75 },
    { year: 20, yearDate: 2044, annual: 3671.0, quarterly: 917.75 },
    { year: 21, yearDate: 2045, annual: 3745.0, quarterly: 936.25 },
    { year: 22, yearDate: 2046, annual: 3819.0, quarterly: 954.75 },
    { year: 23, yearDate: 2047, annual: 3896.0, quarterly: 974.0 },
    { year: 24, yearDate: 2048, annual: 3974.0, quarterly: 993.5 },
    { year: 25, yearDate: 2049, annual: 4053.0, quarterly: 1013.25 },
    { year: 26, yearDate: 2050, annual: 4134.0, quarterly: 1033.5 },
    { year: 27, yearDate: 2051, annual: 4217.0, quarterly: 1054.25 },
    { year: 28, yearDate: 2052, annual: 4301.0, quarterly: 1075.25 },
    { year: 29, yearDate: 2053, annual: 4387.0, quarterly: 1096.75 },
    { year: 30, yearDate: 2054, annual: 4475.0, quarterly: 1118.75 },
  ]

  // Genera i dati dettagliati per trimestre
  const generateQuarterlyData = () => {
    const quarters = ["Q1", "Q2", "Q3", "Q4"]
    const dates = ["18/03", "18/06", "18/09", "18/12"]

    return annualData.flatMap((yearData) =>
      quarters.map((quarter, idx) => ({
        year: yearData.year,
        quarter,
        date: `${dates[idx]}/${yearData.yearDate}`,
        amount: yearData.quarterly.toFixed(2),
      })),
    )
  }

  const quarterlyData = generateQuarterlyData()

  // Funzione per calcolare la suddivisione dell'investimento trimestrale
  const calculateQuarterlyAllocation = (amount: number) => {
    const msciWorld = amount * 0.8
    // Oro e obbligazioni sono 0 per i trimestri normali
    return {
      msciWorld: msciWorld.toFixed(2),
      gold: "0.00",
      govBond: "0.00",
    }
  }

  // Funzione per calcolare l'importo accumulato per oro e obbligazioni ogni 4 anni
  const calculateGoldBondAccumulation = (year: number) => {
    // Verifica se è un anno di ingresso (1, 5, 9, 13, 17, 21, 25, 29)
    if ((year - 1) % 4 === 0) {
      // Calcola la somma degli importi annuali per i prossimi 4 anni (o meno se siamo verso la fine)
      let totalAmount = 0
      for (let i = 0; i < 4; i++) {
        const yearIndex = year + i - 1
        if (yearIndex < annualData.length) {
          totalAmount += annualData[yearIndex].annual
        }
      }

      // 10% per oro e 10% per obbligazioni
      const goldAmount = totalAmount * 0.1
      const govBondAmount = totalAmount * 0.1

      return {
        gold: goldAmount.toFixed(2),
        govBond: govBondAmount.toFixed(2),
        isInvestmentYear: true,
      }
    }

    return {
      gold: "0.00",
      govBond: "0.00",
      isInvestmentYear: false,
    }
  }

  // Funzione per mostrare i dettagli dell'allocazione
  const showAllocationDetails = (amount: number, year?: number, quarter?: string) => {
    setSelectedAmount(amount)
    setSelectedYear(year || null)
    setSelectedQuarter(quarter || null)
    setIsQuarterlyView(!!quarter)
    setDialogOpen(true)
  }

  // Componente per il pulsante info
  const InfoButton = ({ amount, year, quarter }: { amount: number; year?: number; quarter?: string }) => {
    return (
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-6 w-6 p-0 rounded-full hover:bg-muted"
        onClick={() => showAllocationDetails(amount, year, quarter)}
      >
        <Info className="h-4 w-4" />
        <span className="sr-only">Dettaglio allocazione</span>
      </Button>
    )
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Piano di Investimento per la Pensione - Antonio Cozzupoli</h1>
        <Button variant="outline" onClick={onPrint} className="flex items-center gap-2">
          <Printer className="h-4 w-4" /> Stampa piano di investimento
        </Button>
      </div>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="summary">Riepilogo Annuale</TabsTrigger>
          <TabsTrigger value="detailed">Dettaglio Trimestrale</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                Piano di investimento trentennale con versamenti trimestrali crescenti dell&apos;2% annuo. Ogni anno
                sono previsti 4 versamenti, con le seguenti date fisse:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Q1: 18 marzo</li>
                <li>Q2: 18 giugno</li>
                <li>Q3: 18 settembre</li>
                <li>Q4: 18 dicembre</li>
              </ul>
              <div className="bg-muted p-3 rounded-md">
                <h4 className="font-medium mb-2">Allocazione degli investimenti:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>
                    80% in iShares Core MSCI World UCITS ETF USD (IE00B4L5Y983) -{" "}
                    <strong>investimento trimestrale</strong>
                  </li>
                  <li>
                    10% in Ishares Physical Gold ETC (IE00B4ND3602) - <strong>investimento ogni 4 anni</strong>
                  </li>
                  <li>
                    10% in Amundi Euro Government Bond 7-10Y UCITS ETF Acc (LU1287023185) -{" "}
                    <strong>investimento ogni 4 anni</strong>
                  </li>
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gli investimenti in oro e obbligazioni avvengono ogni 4 anni (anni 1, 5, 9, 13, 17, 21, 25, 29)
                  accumulando gli importi che sarebbero stati investiti nei 4 anni.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {annualData.map((data) => {
              const goldBondData = calculateGoldBondAccumulation(data.year)
              return (
                <Card
                  key={data.year}
                  className={`hover:shadow-md transition-shadow ${goldBondData.isInvestmentYear ? "border-primary border-2" : ""}`}
                >
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">
                        Anno {data.year} ({data.yearDate})
                      </h3>
                      <InfoButton amount={data.annual} year={data.year} />
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Versamento annuo:</span>
                        <span className="font-medium">€{data.annual.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Versamento trimestrale:</span>
                        <span className="font-medium flex items-center gap-1">
                          €{data.quarterly.toFixed(2)}
                          <InfoButton amount={data.quarterly} />
                        </span>
                      </div>
                      {goldBondData.isInvestmentYear && (
                        <>
                          <div className="flex justify-between items-center pt-2 border-t mt-2">
                            <span className="text-gray-600">Investimento in Oro:</span>
                            <span className="font-medium text-amber-600">€{goldBondData.gold}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Investimento in Obbligazioni:</span>
                            <span className="font-medium text-blue-600">€{goldBondData.govBond}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="detailed">
          <Card>
            <CardContent className="pt-6">
              <ScrollArea className="h-[60vh]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-2 text-left">Anno</th>
                      <th className="border p-2 text-left">Trimestre</th>
                      <th className="border p-2 text-left">Data</th>
                      <th className="border p-2 text-right">Versamento (€)</th>
                      <th className="border p-2 text-right">MSCI World (€)</th>
                      <th className="border p-2 text-right">Gold ETC (€)</th>
                      <th className="border p-2 text-right">Gov Bond (€)</th>
                      <th className="border p-2 text-center">Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quarterlyData.map((item, index) => {
                      const amount = Number.parseFloat(item.amount)
                      const msciWorldAmount = amount * 0.8

                      // Verifica se è il primo trimestre di un anno di investimento in oro e obbligazioni
                      const isFirstQuarterOfYear = item.quarter === "Q1"
                      const goldBondData = isFirstQuarterOfYear
                        ? calculateGoldBondAccumulation(item.year)
                        : { gold: "0.00", govBond: "0.00", isInvestmentYear: false }

                      const isSpecialRow = isFirstQuarterOfYear && goldBondData.isInvestmentYear

                      return (
                        <tr
                          key={index}
                          className={isSpecialRow ? "bg-primary/10" : index % 2 === 0 ? "bg-white" : "bg-muted/30"}
                        >
                          <td className="border p-2">{item.year}</td>
                          <td className="border p-2">{item.quarter}</td>
                          <td className="border p-2">{item.date}</td>
                          <td className="border p-2 text-right">{item.amount}</td>
                          <td className="border p-2 text-right">{msciWorldAmount.toFixed(2)}</td>
                          <td className="border p-2 text-right">{isSpecialRow ? goldBondData.gold : "0.00"}</td>
                          <td className="border p-2 text-right">{isSpecialRow ? goldBondData.govBond : "0.00"}</td>
                          <td className="border p-2 text-center">
                            <InfoButton amount={amount} year={item.year} quarter={item.quarter} />
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dialog per mostrare i dettagli dell'allocazione */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>Dettaglio Allocazione</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 rounded-full"
                onClick={() => setDialogOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Chiudi</span>
              </Button>
            </DialogTitle>
          </DialogHeader>
          {selectedAmount && (
            <div className="space-y-4">
              {isQuarterlyView ? (
                <>
                  <h4 className="font-medium">
                    Suddivisione del versamento trimestrale di €{selectedAmount.toFixed(2)}
                    {selectedYear && selectedQuarter && ` (Anno ${selectedYear}, ${selectedQuarter})`}
                  </h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 p-3 bg-muted/50 rounded-md">
                      <div className="font-medium">iShares Core MSCI World UCITS ETF USD (80%)</div>
                      <div className="text-right font-bold">€{(selectedAmount * 0.8).toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground">IE00B4L5Y983</div>
                      <div></div>
                    </div>

                    {selectedYear && selectedQuarter === "Q1" && (selectedYear - 1) % 4 === 0 ? (
                      <>
                        <div className="grid grid-cols-2 gap-2 p-3 bg-amber-50 rounded-md">
                          <div className="font-medium">Ishares Physical Gold ETC (10%)</div>
                          <div className="text-right font-bold text-amber-600">
                            €{calculateGoldBondAccumulation(selectedYear).gold}
                          </div>
                          <div className="text-xs text-muted-foreground">IE00B4ND3602</div>
                          <div></div>
                          <div className="col-span-2 text-xs text-muted-foreground mt-1">
                            Investimento accumulato per 4 anni
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 p-3 bg-blue-50 rounded-md">
                          <div className="font-medium">Amundi Euro Government Bond 7-10Y UCITS ETF Acc (10%)</div>
                          <div className="text-right font-bold text-blue-600">
                            €{calculateGoldBondAccumulation(selectedYear).govBond}
                          </div>
                          <div className="text-xs text-muted-foreground">LU1287023185</div>
                          <div></div>
                          <div className="col-span-2 text-xs text-muted-foreground mt-1">
                            Investimento accumulato per 4 anni
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-2 gap-2 p-3 bg-muted/30 rounded-md">
                          <div className="font-medium text-muted-foreground">Ishares Physical Gold ETC</div>
                          <div className="text-right">€0.00</div>
                          <div className="text-xs text-muted-foreground">IE00B4ND3602</div>
                          <div></div>
                          <div className="col-span-2 text-xs text-muted-foreground mt-1">
                            Investimento solo negli anni 1, 5, 9, 13, 17, 21, 25, 29
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 p-3 bg-muted/30 rounded-md">
                          <div className="font-medium text-muted-foreground">
                            Amundi Euro Government Bond 7-10Y UCITS ETF Acc
                          </div>
                          <div className="text-right">€0.00</div>
                          <div className="text-xs text-muted-foreground">LU1287023185</div>
                          <div></div>
                          <div className="col-span-2 text-xs text-muted-foreground mt-1">
                            Investimento solo negli anni 1, 5, 9, 13, 17, 21, 25, 29
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <h4 className="font-medium">
                    Suddivisione dell&apos;investimento di €{selectedAmount.toFixed(2)}
                    {selectedYear && ` (Anno ${selectedYear})`}
                  </h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 p-3 bg-muted/50 rounded-md">
                      <div className="font-medium">iShares Core MSCI World UCITS ETF USD (80%)</div>
                      <div className="text-right font-bold">€{(selectedAmount * 0.8).toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground">IE00B4L5Y983</div>
                      <div></div>
                    </div>

                    {selectedYear && (selectedYear - 1) % 4 === 0 ? (
                      <>
                        <div className="grid grid-cols-2 gap-2 p-3 bg-amber-50 rounded-md">
                          <div className="font-medium">Ishares Physical Gold ETC (10%)</div>
                          <div className="text-right font-bold text-amber-600">
                            €{calculateGoldBondAccumulation(selectedYear).gold}
                          </div>
                          <div className="text-xs text-muted-foreground">IE00B4ND3602</div>
                          <div></div>
                          <div className="col-span-2 text-xs text-muted-foreground mt-1">
                            Investimento accumulato per 4 anni
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 p-3 bg-blue-50 rounded-md">
                          <div className="font-medium">Amundi Euro Government Bond 7-10Y UCITS ETF Acc (10%)</div>
                          <div className="text-right font-bold text-blue-600">
                            €{calculateGoldBondAccumulation(selectedYear).govBond}
                          </div>
                          <div className="text-xs text-muted-foreground">LU1287023185</div>
                          <div></div>
                          <div className="col-span-2 text-xs text-muted-foreground mt-1">
                            Investimento accumulato per 4 anni
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-2 gap-2 p-3 bg-muted/30 rounded-md">
                          <div className="font-medium text-muted-foreground">Ishares Physical Gold ETC</div>
                          <div className="text-right">€0.00</div>
                          <div className="text-xs text-muted-foreground">IE00B4ND3602</div>
                          <div></div>
                          <div className="col-span-2 text-xs text-muted-foreground mt-1">
                            Investimento solo negli anni 1, 5, 9, 13, 17, 21, 25, 29
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 p-3 bg-muted/30 rounded-md">
                          <div className="font-medium text-muted-foreground">
                            Amundi Euro Government Bond 7-10Y UCITS ETF Acc
                          </div>
                          <div className="text-right">€0.00</div>
                          <div className="text-xs text-muted-foreground">LU1287023185</div>
                          <div></div>
                          <div className="col-span-2 text-xs text-muted-foreground mt-1">
                            Investimento solo negli anni 1, 5, 9, 13, 17, 21, 25, 29
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contenuto per la stampa - visibile solo durante la stampa */}
      <div className="hidden print:block">
        <h1 className="text-3xl font-bold text-center mb-6">
          Piano di Investimento per la Pensione - Antonio Cozzupoli
        </h1>

        <div className="mb-6">
          <h4 className="font-medium mb-2">Allocazione degli investimenti:</h4>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              80% in iShares Core MSCI World UCITS ETF USD (IE00B4L5Y983) - <strong>investimento trimestrale</strong>
            </li>
            <li>
              10% in Ishares Physical Gold ETC (IE00B4ND3602) - <strong>investimento ogni 4 anni</strong>
            </li>
            <li>
              10% in Amundi Euro Government Bond 7-10Y UCITS ETF Acc (LU1287023185) -{" "}
              <strong>investimento ogni 4 anni</strong>
            </li>
          </ul>
          <p className="mt-2 text-sm">
            Gli investimenti in oro e obbligazioni avvengono ogni 4 anni (anni 1, 5, 9, 13, 17, 21, 25, 29) accumulando
            gli importi che sarebbero stati investiti nei 4 anni.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Riepilogo Annuale</h2>
        <table className="w-full border-collapse mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Anno</th>
              <th className="border p-2 text-left">Anno Solare</th>
              <th className="border p-2 text-right">Versamento Annuo (€)</th>
              <th className="border p-2 text-right">MSCI World (€)</th>
              <th className="border p-2 text-right">Gold ETC (€)</th>
              <th className="border p-2 text-right">Gov Bond (€)</th>
              <th className="border p-2 text-right">Versamento Trimestrale (€)</th>
            </tr>
          </thead>
          <tbody>
            {annualData.map((data, index) => {
              const msciWorldAmount = data.annual * 0.8
              const goldBondData = calculateGoldBondAccumulation(data.year)

              return (
                <tr
                  key={index}
                  className={
                    goldBondData.isInvestmentYear ? "bg-primary/10" : index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }
                >
                  <td className="border p-2">{data.year}</td>
                  <td className="border p-2">{data.yearDate}</td>
                  <td className="border p-2 text-right">{data.annual.toFixed(2)}</td>
                  <td className="border p-2 text-right">{msciWorldAmount.toFixed(2)}</td>
                  <td className="border p-2 text-right">{goldBondData.gold}</td>
                  <td className="border p-2 text-right">{goldBondData.govBond}</td>
                  <td className="border p-2 text-right">{data.quarterly.toFixed(2)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <h2 className="text-2xl font-bold mt-8 mb-4">Dettaglio Trimestrale</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Anno</th>
              <th className="border p-2 text-left">Trimestre</th>
              <th className="border p-2 text-left">Data</th>
              <th className="border p-2 text-right">Versamento (€)</th>
              <th className="border p-2 text-right">MSCI World (€)</th>
              <th className="border p-2 text-right">Gold ETC (€)</th>
              <th className="border p-2 text-right">Gov Bond (€)</th>
            </tr>
          </thead>
          <tbody>
            {quarterlyData.map((item, index) => {
              const amount = Number.parseFloat(item.amount)
              const msciWorldAmount = amount * 0.8

              // Verifica se è il primo trimestre di un anno di investimento in oro e obbligazioni
              const isFirstQuarterOfYear = item.quarter === "Q1"
              const goldBondData = isFirstQuarterOfYear
                ? calculateGoldBondAccumulation(item.year)
                : { gold: "0.00", govBond: "0.00", isInvestmentYear: false }

              const isSpecialRow = isFirstQuarterOfYear && goldBondData.isInvestmentYear

              return (
                <tr
                  key={index}
                  className={isSpecialRow ? "bg-primary/10" : index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border p-2">{item.year}</td>
                  <td className="border p-2">{item.quarter}</td>
                  <td className="border p-2">{item.date}</td>
                  <td className="border p-2 text-right">{item.amount}</td>
                  <td className="border p-2 text-right">{msciWorldAmount.toFixed(2)}</td>
                  <td className="border p-2 text-right">{isSpecialRow ? goldBondData.gold : "0.00"}</td>
                  <td className="border p-2 text-right">{isSpecialRow ? goldBondData.govBond : "0.00"}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

