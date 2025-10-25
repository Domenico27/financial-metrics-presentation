import { Card, CardContent } from "@/components/ui/card"

export default function ExpectedReturn() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Expected Return</h1>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Definizione</h2>
            <p className="text-gray-700">
              L&apos;expected return è la media ponderata dei possibili rendimenti futuri, dove ogni possibile risultato
              viene moltiplicato per la probabilità che si verifichi.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
            <p className="text-gray-700">
              Questo valore è basato su ipotesi e modelli; il risultato effettivo può variare se le condizioni di
              mercato cambiano.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

