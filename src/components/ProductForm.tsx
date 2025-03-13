import React, { useState } from 'react';
import StrainGenetics from './StrainGenetics';

const ProductForm: React.FC = () => {
  const [strainName, setStrainName] = useState('');
  const [strainType, setStrainType] = useState<'indica' | 'sativa' | 'hybrid'>('indica');
  const [genetics, setGenetics] = useState('');
  const [chemotype, setChemotype] = useState('');
  const [chemovarProfile, setChemovarProfile] = useState({
    thc: 0,
    cbd: 0,
    cbg: 0,
    cbn: 0,
  });
  const [terpeneProfile, setTerpeneProfile] = useState({
    myrcene: 0,
    limonene: 0,
    pinene: 0,
    other: '',
  });
  const [aromaProfile, setAromaProfile] = useState<string[]>([]);
  const [effectsProfile, setEffectsProfile] = useState<string[]>([]);

  const handleChange = (field: string, value: any) => {
    switch (field) {
      case 'strainName':
        setStrainName(value);
        break;
      case 'strainType':
        setStrainType(value);
        break;
      case 'genetics':
        setGenetics(value);
        break;
      case 'chemotype':
        setChemotype(value);
        break;
      case 'chemovarProfile.thc':
        setChemovarProfile((prev) => ({ ...prev, thc: value }));
        break;
      case 'chemovarProfile.cbd':
        setChemovarProfile((prev) => ({ ...prev, cbd: value }));
        break;
      case 'chemovarProfile.cbg':
        setChemovarProfile((prev) => ({ ...prev, cbg: value }));
        break;
      case 'chemovarProfile.cbn':
        setChemovarProfile((prev) => ({ ...prev, cbn: value }));
        break;
      case 'terpeneProfile.myrcene':
        setTerpeneProfile((prev) => ({ ...prev, myrcene: value }));
        break;
      case 'terpeneProfile.limonene':
        setTerpeneProfile((prev) => ({ ...prev, limonene: value }));
        break;
      case 'terpeneProfile.pinene':
        setTerpeneProfile((prev) => ({ ...prev, pinene: value }));
        break;
      case 'terpeneProfile.other':
        setTerpeneProfile((prev) => ({ ...prev, other: value }));
        break;
      case 'aromaProfile':
        setAromaProfile(value);
        break;
      case 'effectsProfile':
        setEffectsProfile(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Product Form</h1>
      <StrainGenetics
        strainName={strainName}
        strainType={strainType}
        genetics={genetics}
        chemotype={chemotype}
        chemovarProfile={chemovarProfile}
        terpeneProfile={terpeneProfile}
        aromaProfile={aromaProfile}
        effectsProfile={effectsProfile}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductForm; 