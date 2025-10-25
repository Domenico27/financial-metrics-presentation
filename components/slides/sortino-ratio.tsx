import { Card, CardContent } from "@/components/ui/card"

export default function SortinoRatio() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Sortino Ratio</h1>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Definizione</h2>
            <p className="text-gray-700">
              Variante dello Sharpe Ratio, lo Sortino Ratio misura il rendimento in eccesso rispetto al rischio,
              considerando solo la volatilità negativa (i rendimenti al di sotto di una soglia minima, ad esempio il
              tasso privo di rischio).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Formula</h2>
            <div className="flex justify-center my-4">
              <div className="bg-slate-50 p-4 rounded text-center font-serif text-xl">
                Sortino Ratio ={" "}
                <div className="inline-block align-middle mx-2">
                  <div className="border-b border-black">
                    R<sub>p</sub> - R<sub>f</sub>
                  </div>
                  <div>
                    σ<sub>d</sub>
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>
                σ<sub>d</sub> = deviazione standard dei rendimenti negativi
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Vantaggi</h2>
            <p className="text-gray-700">
              Ignora la volatilità dovuta a rendimenti positivi, offrendo una visione più mirata del rischio reale.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

