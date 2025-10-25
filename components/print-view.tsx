"use client"

export default function PrintView() {
  return (
    <div className="print-container">
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 1cm;
          }
          
          body {
            background: white !important;
            margin: 0;
            padding: 0;
          }
          
          /* Tratta ogni indicatore come un'unità indivisibile */
          .print-indicator {
            page-break-inside: avoid;
            page-break-after: always;
            display: block;
            height: auto;
            max-height: 100%;
            overflow: visible;
            padding: 1cm 0;
          }
          
          .print-indicator:last-child {
            page-break-after: auto;
          }
          
          /* Assicurati che il titolo e il contenuto rimangano insieme */
          h1, h2, h3 {
            page-break-after: avoid;
          }
          
          /* Riduci le dimensioni dei titoli per risparmiare spazio */
          h1 {
            font-size: 24pt !important;
            margin-bottom: 0.5cm !important;
          }
          
          h2 {
            font-size: 18pt !important;
            margin-bottom: 0.3cm !important;
          }
          
          h3 {
            font-size: 14pt !important;
          }
          
          p, li {
            font-size: 11pt !important;
          }
          
          /* Riduci lo spazio tra gli elementi */
          .card {
            margin-bottom: 0.3cm !important;
            page-break-inside: avoid;
          }
          
          .card-content {
            padding: 0.3cm !important;
          }
          
          /* Nascondi elementi non necessari per la stampa */
          button, .no-print, .screen-only {
            display: none !important;
          }
          
          /* Mostra elementi solo per la stampa */
          .print-only {
            display: block !important;
          }
          
          /* Rimuovi ombre e bordi arrotondati per la stampa */
          .shadow-lg, .rounded-xl {
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          
          /* Assicurati che le formule siano ben visibili */
          .bg-slate-50 {
            background-color: white !important;
            border: 1px solid #ddd;
          }
          
          /* Riduci i margini e i padding per ottimizzare lo spazio */
          .p-8 {
            padding: 0.5cm !important;
          }
          
          .gap-6 {
            gap: 0.3cm !important;
          }
          
          .my-4 {
            margin-top: 0.2cm !important;
            margin-bottom: 0.2cm !important;
          }
          
          .mb-6 {
            margin-bottom: 0.3cm !important;
          }
          
          .mb-4 {
            margin-bottom: 0.2cm !important;
          }
          
          .mb-2 {
            margin-bottom: 0.1cm !important;
          }
        }
      `}</style>

      <div className="print-indicator">
        <div className="compact-print">
          <h1 className="text-3xl font-bold text-center mb-4">Expected Return</h1>
          <div className="grid gap-4">
            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Definizione</h2>
              <p className="text-gray-700">
                L&apos;expected return è la media ponderata dei possibili rendimenti futuri, dove ogni possibile
                risultato viene moltiplicato per la probabilità che si verifichi.
              </p>
            </div>

            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
              <p className="text-gray-700">
                Questo valore è basato su ipotesi e modelli; il risultato effettivo può variare se le condizioni di
                mercato cambiano.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="print-indicator">
        <div className="compact-print">
          <h1 className="text-3xl font-bold text-center mb-4">Sharpe Ratio</h1>
          <div className="grid gap-4">
            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Definizione</h2>
              <p className="text-gray-700">
                Misura la quantità di rendimento in eccesso (rispetto a un tasso privo di rischio) che si ottiene per
                ogni unità di rischio (volatilità) assunta.
              </p>
            </div>

            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Formula</h2>
              <div className="flex justify-center my-2">
                <div className="bg-slate-50 p-3 rounded text-center font-serif text-lg">
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
              <ul className="list-disc pl-6 mb-2 text-gray-700">
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
            </div>

            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Limiti</h2>
              <p className="text-gray-700">
                La deviazione standard considera tutte le oscillazioni, sia positive che negative, senza distinguere tra
                quelle "buone" e quelle "cattive".
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="print-indicator">
        <div className="compact-print">
          <h1 className="text-3xl font-bold text-center mb-4">CAPE Ratio</h1>
          <div className="grid gap-4">
            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Definizione</h2>
              <p className="text-gray-700">
                Il CAPE è il rapporto tra il prezzo attuale di un&apos;azione e la media degli utili reali (normalizzati
                per l&apos;inflazione) degli ultimi 10 anni.
              </p>
            </div>

            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Formula</h2>
              <div className="flex justify-center my-2">
                <div className="bg-slate-50 p-3 rounded text-center font-serif text-lg">
                  CAPE ={" "}
                  <div className="inline-block align-middle mx-2">
                    <div className="border-b border-black">Prezzo</div>
                    <div>Media utili 10 anni</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
              <p className="text-gray-700">
                Questo indicatore è più utile per valutazioni a lungo termine, anche se eventi eccezionali possono
                distorcere il dato. Un CAPE elevato potrebbe indicare che il mercato (o il titolo) è sopravvalutato,
                mentre un valore basso potrebbe suggerire il contrario.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="print-indicator">
        <div className="compact-print">
          <h1 className="text-3xl font-bold text-center mb-4">Beta</h1>
          <div className="grid gap-4">
            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Definizione</h2>
              <p className="text-gray-700">
                Il beta misura la sensibilità del portafoglio rispetto alle variazioni del mercato generale.
              </p>
            </div>

            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Formula</h2>
              <div className="flex justify-center my-2">
                <div className="bg-slate-50 p-3 rounded text-center font-serif text-lg">
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
              <ul className="list-disc pl-6 mb-2 text-gray-700">
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
            </div>

            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
              <p className="text-gray-700">
                Il beta si basa su dati storici e potrebbe non prevedere perfettamente il comportamento futuro. Se un
                portafoglio ha un beta di 1,2, significa che se il mercato aumenta del 10%, il portafoglio potrebbe
                aumentare del 12%. Al contrario, un beta di 0,8 implica un aumento dell&apos;8% in condizioni simili.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="print-indicator">
        <div className="compact-print">
          <h1 className="text-3xl font-bold text-center mb-4">Sortino Ratio</h1>
          <div className="grid gap-4">
            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Definizione</h2>
              <p className="text-gray-700">
                Variante dello Sharpe Ratio, lo Sortino Ratio misura il rendimento in eccesso rispetto al rischio,
                considerando solo la volatilità negativa (i rendimenti al di sotto di una soglia minima, ad esempio il
                tasso privo di rischio).
              </p>
            </div>

            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Formula</h2>
              <div className="flex justify-center my-2">
                <div className="bg-slate-50 p-3 rounded text-center font-serif text-lg">
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
              <ul className="list-disc pl-6 mb-2 text-gray-700">
                <li>
                  σ<sub>d</sub> = deviazione standard dei rendimenti negativi
                </li>
              </ul>
            </div>

            <div className="card border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Vantaggi</h2>
              <p className="text-gray-700">
                Ignora la volatilità dovuta a rendimenti positivi, offrendo una visione più mirata del rischio reale.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="print-indicator">
        <div className="compact-print">
          <h1 className="text-3xl font-bold text-center mb-4">Indicatori Aggiuntivi</h1>

          <div className="grid gap-4 mb-6">
            <h2 className="text-2xl font-semibold">Alpha</h2>
            <div className="card border rounded p-4">
              <h3 className="text-lg font-semibold mb-1">Definizione</h3>
              <p className="text-gray-700">
                L&apos;alpha misura il rendimento extra ottenuto dal portafoglio rispetto a quello che ci si
                aspetterebbe in base al rischio sistemico (beta).
              </p>
            </div>
            <div className="card border rounded p-4">
              <h3 className="text-lg font-semibold mb-1">Interpretazione</h3>
              <p className="text-gray-700">
                Un alpha positivo indica una performance migliore rispetto al benchmark; uno negativo indica il
                contrario. Se, basandosi sul beta, ci si aspetta un rendimento dell&apos;8% e il portafoglio rende il
                10%, allora l&apos;alpha è del 2%.
              </p>
            </div>
          </div>

          <div className="grid gap-4 mb-6">
            <h2 className="text-2xl font-semibold">Treynor Ratio</h2>
            <div className="card border rounded p-4">
              <h3 className="text-lg font-semibold mb-1">Definizione</h3>
              <p className="text-gray-700">
                Simile allo Sharpe Ratio, il Treynor Ratio usa il beta per misurare il rendimento in eccesso per unità
                di rischio sistemico.
              </p>
            </div>
            <div className="card border rounded p-4">
              <h3 className="text-lg font-semibold mb-1">Formula</h3>
              <div className="flex justify-center my-2">
                <div className="bg-slate-50 p-3 rounded text-center font-serif text-lg">
                  Treynor Ratio ={" "}
                  <div className="inline-block align-middle mx-2">
                    <div className="border-b border-black">
                      R<sub>p</sub> - R<sub>f</sub>
                    </div>
                    <div>β</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 mb-6">
            <h2 className="text-2xl font-semibold">Maximum Drawdown</h2>
            <div className="card border rounded p-4">
              <h3 className="text-lg font-semibold mb-1">Definizione</h3>
              <p className="text-gray-700">
                Indica la perdita massima (in percentuale) subita dal portafoglio dal suo picco massimo al punto più
                basso.
              </p>
            </div>
            <div className="card border rounded p-4">
              <h3 className="text-lg font-semibold mb-1">Utilità</h3>
              <p className="text-gray-700">
                Aiuta a comprendere quanto il portafoglio possa subire perdite significative in periodi di crisi. Se il
                valore di un portafoglio raggiunge un massimo di 120 e poi scende a 80, il massimo drawdown è (120 - 80)
                / 120 ≈ 33%.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Volatilità</h2>
            <div className="card border rounded p-4">
              <h3 className="text-lg font-semibold mb-1">Definizione</h3>
              <p className="text-gray-700">
                La volatilità rappresenta la variabilità dei rendimenti, misurata tramite la deviazione standard.
              </p>
            </div>
            <div className="card border rounded p-4">
              <h3 className="text-lg font-semibold mb-1">Interpretazione</h3>
              <p className="text-gray-700">
                Maggiore è la volatilità, maggiore è il rischio percepito (anche se non sempre corrisponde a perdite
                effettive). Un portafoglio con rendimenti che oscillano molto (ad es. +15% un mese, -10% il mese
                successivo) ha una volatilità elevata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

