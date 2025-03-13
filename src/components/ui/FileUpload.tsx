import { ChangeEvent, forwardRef, useRef } from 'react';
import { cn, formatBytes } from '../../lib/utils';
import { Upload, X } from 'lucide-react';
import { Button } from './Button';

export interface FileUploadProps {
  className?: string;
  error?: string;
  label?: string;
  accept?: string;
  maxSize?: number;
  multiple?: boolean;
  value?: File | File[] | null;
  onChange?: (files: File | File[] | null) => void;
  required?: boolean;
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, error, label, accept, maxSize, multiple, value, onChange, required }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
      inputRef.current?.click();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      
      if (maxSize) {
        const validFiles = files.filter((file) => file.size <= maxSize);
        if (validFiles.length !== files.length) {
          console.error(`Some files exceed the maximum size of ${formatBytes(maxSize)}`);
          return;
        }
      }

      if (multiple) {
        onChange?.(files);
      } else {
        onChange?.(files[0] || null);
      }
    };

    const handleRemove = (fileToRemove: File) => {
      if (multiple && Array.isArray(value)) {
        onChange?.(value.filter((file) => file !== fileToRemove));
      } else {
        onChange?.(null);
      }
    };

    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
        />

        <div
          className={cn(
            'border-2 border-dashed rounded-lg p-4',
            'hover:border-green-500 transition-colors',
            'cursor-pointer text-center',
            error ? 'border-red-500' : 'border-gray-300'
          )}
          onClick={handleClick}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-2">
            <p className="text-sm text-gray-600">
              Click to upload or drag and drop
            </p>
            {maxSize && (
              <p className="text-xs text-gray-500">
                Max file size: {formatBytes(maxSize)}
              </p>
            )}
          </div>
        </div>

        {value && (
          <div className="mt-4 space-y-2">
            {Array.isArray(value) ? (
              value.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded"
                >
                  <span className="text-sm text-gray-700">{file.name}</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleRemove(file)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-700">{value.name}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleRemove(value)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        )}

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';

export { FileUpload };