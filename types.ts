
export interface LabEquipmentInfo {
  name: string;
  category: string;
  description: string;
  primaryUse: string;
  maintenanceTips: string[];
  safetyPrecautions: string[];
  commonVariants: string[];
  historicalContext?: string;
}

export interface IdentificationHistory {
  id: string;
  timestamp: number;
  imageUrl: string;
  info: LabEquipmentInfo;
}
