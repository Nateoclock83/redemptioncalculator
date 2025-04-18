import ProductEntryWithExport from "@/components/product-entry-with-export"

export default function DPLExportPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Outta Boundz</h1>
          <p className="text-gray-600">DPL Export Tool</p>
        </header>

        <ProductEntryWithExport />
      </div>
    </main>
  )
}
