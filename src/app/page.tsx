import ExcelExport from "@/components/ExportExcel";

export default function Home() {
  return (
    <div className="max-w-5xl p-4 mx-auto">
      <h1 className="text-4xl my-6">JSON to Excel</h1>
      <ExcelExport />
    </div>
  );
}
