import { Card, CardContent } from "@/components/ui/card"

export default function Beta() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Beta</h1>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Definizione</h2>
            <p className="text-gray-700">
              Il beta misura la sensibilità del portafoglio rispetto alle variazioni del mercato generale.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Formula</h2>
            <div className="flex justify-center my-4">
              <div className="bg-slate-50 p-4 rounded text-center font-serif text-xl">
                β ={" "}
                <div className="inline-block align-middle mx-2">
                  <div className="border-b border-black">
                    Cov(R<sub>p</sub>, R<sub>m</sub>)
                  </div>
                  <div>
                    σ<sub>m</sub>
                    <sup>2</sup>
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>
                R<sub>p</sub> = rendimento del portafoglio
              </li>
              <li>
                R<sub>m</sub> = rendimento del mercato
              </li>
              <li>
                σ<sub>m</sub>
                <sup>2</sup> = varianza del rendimento del mercato
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
            <p className="text-gray-700">
              Il beta si basa su dati storici e potrebbe non prevedere perfettamente il comportamento futuro. Se un
              portafoglio ha un beta di 1,2, significa che se il mercato aumenta del 10%, il portafoglio potrebbe
              aumentare del 12%. Al contrario, un beta di 0,8 implica un aumento dell&apos;8% in condizioni simili.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

