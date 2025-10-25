import { Card, CardContent } from "@/components/ui/card"

export default function SharpeRatio() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Sharpe Ratio</h1>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Definizione</h2>
            <p className="text-gray-700">
              Misura la quantità di rendimento in eccesso (rispetto a un tasso privo di rischio) che si ottiene per ogni
              unità di rischio (volatilità) assunta.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Formula</h2>
            <div className="flex justify-center my-4">
              <div className="bg-slate-50 p-4 rounded text-center font-serif text-xl">
                Sharpe Ratio ={" "}
                <div className="inline-block align-middle mx-2">
                  <div className="border-b border-black">
                    R<sub>p</sub> - R<sub>f</sub>
                  </div>
                  <div>
                    σ<sub>p</sub>
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>
                R<sub>p</sub> = rendimento del portafoglio
              </li>
              <li>
                R<sub>f</sub> = rendimento del tasso privo di rischio
              </li>
              <li>
                σ<sub>p</sub> = deviazione standard (volatilità)
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Limiti</h2>
            <p className="text-gray-700">
              La deviazione standard considera tutte le oscillazioni, sia positive che negative, senza distinguere tra
              quelle "buone" e quelle "cattive".
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

