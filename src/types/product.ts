export type ProductType = 'bulk_raw_cannabis_flower' | 'bulk_cannabis_derivatives' | 'finished_cannabis_products';

export type StrainType = 'indica' | 'sativa' | 'hybrid';

export type CertificationGrade = 'GMP - Good Manufactory Practice' | 'GACP - Good Agricultural and Collection Practices' 

export type FlowerStructure = 'dense' | 'medium' | 'loose';

export type FlowerSize = 'small' | 'medium' | 'large';

export type TrichomeCoverage = 'light' | 'medium' | 'heavy';

export type CultivationType = 'indoor' | 'outdoor' | 'greenhouse';

export type ContractType = 'Recurring Contract' | "Single Purchase"

export interface ChemovarProfile {
  thc: number;
  cbd: number;
  cbg: number;
  cbn: number;
}

export interface TerpeneProfile {
  myrcene: number;
  limonene: number;
  pinene: number;
  other?: string;
}

export interface ProductFormData {
  // Step 1: Basic Information
  productName: string;
  productType: ProductType;
  thumbnailImage: File | null;
  certificationGrade: CertificationGrade;
  shortDescription: string;
  longDescription: string;
  images: File[];
  contractType: ContractType[];

  // Step 2: Strain/Genetics
  strainName: string;
  strainType: StrainType;
  genetics: string;
  chemotype: string;
  chemovarProfile: ChemovarProfile;
  terpeneProfile: TerpeneProfile;
  aromaProfile: string[];
  effectsProfile: string[];

  // Step 3: Appearance
  flowerStructure: FlowerStructure;
  flowerSize: FlowerSize;
  trichomeCoverage: TrichomeCoverage;
  color: string;

  // Step 4: Product Details
  batchNumber: string;
  ingredients: string[];
  moistureContent: number;
  cultivationType: CultivationType;
  harvestDate: string;
  packagingDate: string;
  expirationDate: string;
  stabilityData: string;
  extractionMethod: string;
  processingMethod: string;

  // Step 5: Testing & Compliance
  labResults: File | null;
  heavyMetalsTest: boolean;
  pesticidesTest: boolean;
  microbialTest: boolean;
  phytosanitaryCertificates: File[];
  testedBy: string;
  testDate: string;
  complianceInfo: string;

  // Step 6: Sales & Distribution
  availableQuantity: number;
  minimumOrderQuantity: number;
  unitPrice: number;
  cultivatorId: string;
  cultivationRegion: string;

  // Step 7: Sale Terms & Treatment
  minimumPricePerGram: number;
  minimumQuantity: number;
  paymentTerms: string;
  ebeamTreatment: boolean;
  ebeamTreatmentDetails?: string;
  otherProcessingMethods: string;
}