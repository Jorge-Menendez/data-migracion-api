import * as XLSX from 'xlsx';


export function readExcel(filePath: string): any[] {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet);
}

export function getDataExcel(file: string): any[] {
    return readExcel(file).map(dataExcel =>
        Object.fromEntries(
            Object.entries(dataExcel)
                .map(([key, value]) => [key.toLowerCase(), value])
        ) as unknown as any
    );
}