import { Card, CardContent } from "@/components/ui/card"

export default function CapeRatio() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">CAPE (Cyclically Adjusted Price Earnings Ratio)</h1>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Definizione</h2>
            <p className="text-gray-700">
              Il CAPE è il rapporto tra il prezzo attuale di un&apos;azione e la media degli utili reali (normalizzati
              per l&apos;inflazione) degli ultimi 10 anni.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Formula</h2>
            <div className="flex justify-center my-4">
              <div className="bg-slate-50 p-4 rounded text-center font-serif text-xl">
                CAPE ={" "}
                <div className="inline-block align-middle mx-2">
                  <div className="border-b border-black">Prezzo</div>
                  <div>Media utili 10 anni</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
            <p className="text-gray-700">
              Questo indicatore è più utile per valutazioni a lungo termine, anche se eventi eccezionali possono
              distorcere il dato. Un CAPE elevato potrebbe indicare che il mercato (o il titolo) è sopravvalutato,
              mentre un valore basso potrebbe suggerire il contrario.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

