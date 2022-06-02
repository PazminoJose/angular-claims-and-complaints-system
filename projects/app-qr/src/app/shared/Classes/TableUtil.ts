import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

const getFileName = (name?: string) => {
  let timeSpan = new Date().toISOString();
  let sheetName = name || "ExportResult";
  let fileName = `${sheetName}-${timeSpan}`;
  return {
    sheetName,
    fileName
  };
};
export class TableUtil {
  static exportArrayToExcel(arr: any[], name?: string) {
    let { sheetName, fileName } = getFileName(name);

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(arr);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
  static exportTableToPDF(head: string[], body: any[], name: string) {
    const doc = new jsPDF()
    autoTable(doc, { head: [head], body: body });
    doc.save(name);
  }
}
