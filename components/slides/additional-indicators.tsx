import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdditionalIndicators() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Indicatori Aggiuntivi</h1>

      <Tabs defaultValue="alpha" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="alpha">Alpha</TabsTrigger>
          <TabsTrigger value="treynor">Treynor Ratio</TabsTrigger>
          <TabsTrigger value="drawdown">Maximum Drawdown</TabsTrigger>
          <TabsTrigger value="volatility">Volatilità</TabsTrigger>
        </TabsList>

        <TabsContent value="alpha">
          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-2">Definizione</h2>
                <p className="text-gray-700">
                  L&apos;alpha misura il rendimento extra ottenuto dal portafoglio rispetto a quello che ci si
                  aspetterebbe in base al rischio sistemico (beta).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-2">Interpretazione</h2>
                <p className="text-gray-700">
                  Un alpha positivo indica una performance migliore rispetto al benchmark; uno negativo indica il
                  contrario. Se, basandosi sul beta, ci si aspetta un rendimento dell&apos;8% e il portafoglio rende il
                  10%, allora l&apos;alpha è del 2%.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="treynor">
          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-2">Definizione</h2>
                <p className="text-gray-700">
                  Simile allo Sharpe Ratio, il Treynor Ratio usa il beta per misurare il rendimento in eccesso per unità
                  di rischio sistemico.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-2">Formula</h2>
                <div className="flex justify-center my-4">
                  <div className="bg-slate-50 p-4 rounded text-center font-serif text-xl">
                    Treynor Ratio ={" "}
                    <div className="inline-block align-middle mx-2">
                      <div className="border-b border-black">
                        R<sub>p</sub> - R<sub>f</sub>
                      </div>
                      <div>β</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="drawdown">
          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-2">Definizione</h2>
                <p className="text-gray-700">
                  Indica la perdita massima (in percentuale) subita dal portafoglio dal suo picco massimo al punto più
                  basso.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-2">Utilità</h2>
                <p className="text-gray-700">
                  Aiuta a comprendere quanto il portafoglio possa subire perdite significative in periodi di crisi. Se
                  il valore di un portafoglio raggiunge un massimo di 120 e poi scende a 80, il massimo drawdown è (120
                  - 80) / 120 ≈ 33%.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="volatility">
          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-2">Definizione</h2>
                <p className="text-gray-700">
                  La volatilità rappresenta la variabilità dei rendimenti, misurata tramite la deviazione standard.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-2">Interpretazione</h2>
                <p className="text-gray-700">
                  Maggiore è la volatilità, maggiore è il rischio percepito (anche se non sempre corrisponde a perdite
                  effettive). Un portafoglio con rendimenti che oscillano molto (ad es. +15% un mese, -10% il mese
                  successivo) ha una volatilità elevata.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

