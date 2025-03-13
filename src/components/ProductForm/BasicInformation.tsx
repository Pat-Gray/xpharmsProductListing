import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { FileUpload } from '../ui/FileUpload';
import { PRODUCT_TYPES, CERTIFICATION_GRADES, CONTRACT_TYPES } from './formConfig';
import { ProductFormData } from '../../types/product';

interface BasicInformationProps {
  data: Partial<ProductFormData>;
  onChange: (field: keyof ProductFormData, value: any) => void;
  errors: Partial<Record<keyof ProductFormData, string>>;
}

export function BasicInformation({ data, onChange, errors }: BasicInformationProps) {
  return (
    <div className="space-y-6">
      <Input
        label="Product Name"
        required
        maxLength={255}
        value={data.productName || ''}
        onChange={(e) => onChange('productName', e.target.value)}
        error={errors.productName}
      />

      <Select
        label="Product Type"
        required
        options={PRODUCT_TYPES}
        value={data.productType || ''}
        onChange={(e) => onChange('productType', e.target.value)}
        error={errors.productType}
      />

      <FileUpload
        label="Thumbnail Image"
        required
        accept="image/jpeg,image/png"
        maxSize={2 * 1024 * 1024} // 2MB
        value={data.thumbnailImage}
        onChange={(file) => onChange('thumbnailImage', file)}
        error={errors.thumbnailImage}
      />

      <Select
        label="Certification Grade"
        required
        options={CERTIFICATION_GRADES}
        value={data.certificationGrade || ''}
        onChange={(e) => onChange('certificationGrade', e.target.value)}
        error={errors.certificationGrade}
      />

      <Input
        label="Short Description"
        required
        maxLength={255}
        value={data.shortDescription || ''}
        onChange={(e) => onChange('shortDescription', e.target.value)}
        error={errors.shortDescription}
      />

      <textarea
        className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        rows={4}
        placeholder="Enter a detailed description of your product..."
        value={data.longDescription || ''}
        onChange={(e) => onChange('longDescription', e.target.value)}
      />

      <FileUpload
        label="Additional Images"
        accept="image/jpeg,image/png"
        maxSize={2 * 1024 * 1024} // 2MB
        multiple
        value={data.images}
        onChange={(files) => onChange('images', files)}
        error={errors.images}
      />

      <Select
        label="Contract Type"
        required
        options={CONTRACT_TYPES}
        value={data.contractType || ''}
        onChange={(e) => onChange('contractType', e.target.value)}
        error={errors.contractType}
      />
    </div>
  );
}