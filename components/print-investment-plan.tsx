"use client"

export default function PrintInvestmentPlan() {
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

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 1cm;
          }
          
          body {
            background: white !important;
            margin: 0;
            padding: 0;
            font-size: 11pt;
          }
          
          h1 {
            font-size: 18pt !important;
            margin-bottom: 0.5cm !important;
          }
          
          h2 {
            font-size: 14pt !important;
            margin-bottom: 0.3cm !important;
            page-break-after: avoid;
          }
          
          table {
            font-size: 9pt !important;
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1cm;
          }
          
          th, td {
            border: 1px solid #ddd;
            padding: 4pt;
          }
          
          th {
            background-color: #f0f0f0;
            font-weight: bold;
            text-align: left;
          }
          
          tr:nth-child(even) {
            background-color: #f9f9f9;
          }
          
          .quarterly-table {
            page-break-before: always;
          }
          
          .highlight-row {
            background-color: #e6f0ff !important;
          }
        }
      `}</style>

      <h1 className="text-3xl font-bold text-center mb-6">Piano di Investimento per la Pensione - Antonio Cozzupoli</h1>

      <p className="mb-4">
        Piano di investimento trentennale con versamenti trimestrali crescenti dell&apos;2% annuo. Ogni anno sono
        previsti 4 versamenti, con le seguenti date fisse:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Q1: 18 marzo</li>
        <li>Q2: 18 giugno</li>
        <li>Q3: 18 settembre</li>
        <li>Q4: 18 dicembre</li>
      </ul>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Allocazione degli investimenti:</h4>
        <ul className="list-disc pl-6">
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
                  goldBondData.isInvestmentYear ? "highlight-row" : index % 2 === 0 ? "bg-white" : "bg-gray-50"
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

      <div className="quarterly-table">
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
                  className={isSpecialRow ? "highlight-row" : index % 2 === 0 ? "bg-white" : "bg-gray-50"}
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

      {/* Watermark per la stampa */}
      <div className="text-center mt-8 pt-4 border-t">
        <div className="text-sm text-gray-500">
          Creato da Mastromarino Domenico, consulente finanziario indipendente, per Antonio Cozzupoli
        </div>
      </div>
    </div>
  )
}

