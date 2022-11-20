/**
 * @description
 * Supported barcode format by jsBarcode package
 * for more: https://github.com/lindell/JsBarcode
 */
enum BarcodeFormat {
  Code128 = 'CODE128',
  Code128A = 'CODE128A',
  Code128B = 'CODE128B',
  Code128C = 'CODE128C',
  EAN = 'EAN',
  UPC = 'UPC',
  EAN8 = 'EAN8',
  EAN5 = 'EAN5',
  EAN2 = 'EAN2',
  CODE39 = 'CODE39',
  ITF14 = 'ITF14',
  MSI = 'MSI',
  MSI10 = 'MSI10',
  MSI11 = 'MSI11',
  MSI1010 = 'MSI1010',
  MSI1110 = 'MSI1110',
  Pharmacode = 'pharmacode',
  CodaBar = 'codabar',
}

/**
 * @description
 * A copy of barcode BaseOption from `jsbarcode` file
 * for more: https://github.com/lindell/JsBarcode
 */
interface BarcodeOptions {
  background?: string;
  displayValue?: boolean;
  font?: string;
  fontOptions?: string;
  fontSize?: number;
  format?: BarcodeFormat;
  height?: number;
  lineColor?: string;
  margin?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  text?: string;
  textAlign?: string;
  textMargin?: number;
  textPosition?: string;
  width?: number;
}

export { BarcodeFormat, BarcodeOptions };
