import React from 'react';

interface ChemovarProfile {
  thc: number;
  cbd: number;
  cbg: number;
  cbn: number;
}

interface TerpeneProfile {
  myrcene: number;
  limonene: number;
  pinene: number;
  other?: string;
}

interface StrainGeneticsProps {
  strainName: string;
  strainType: 'indica' | 'sativa' | 'hybrid';
  genetics: string;
  chemotype: string;
  chemovarProfile: ChemovarProfile;
  terpeneProfile: TerpeneProfile;
  aromaProfile: string[];
  effectsProfile: string[];
  onChange: (field: string, value: any) => void; // Function to handle input changes
}

const StrainGenetics: React.FC<StrainGeneticsProps> = ({
  strainName,
  strainType,
  genetics,
  chemotype,
  chemovarProfile,
  terpeneProfile,
  aromaProfile,
  effectsProfile,
  onChange,
}) => {
  return (
    <div>
      <h2>Strain & Genetics</h2>
      <label>
        Strain Name:
        <input
          type="text"
          value={strainName}
          onChange={(e) => onChange('strainName', e.target.value)}
        />
      </label>
      <label>
        Strain Type:
        <select
          value={strainType}
          onChange={(e) => onChange('strainType', e.target.value)}
        >
          <option value="indica">Indica</option>
          <option value="sativa">Sativa</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </label>
      <label>
        Genetics:
        <input
          type="text"
          value={genetics}
          onChange={(e) => onChange('genetics', e.target.value)}
        />
      </label>
      <label>
        Chemotype:
        <input
          type="text"
          value={chemotype}
          onChange={(e) => onChange('chemotype', e.target.value)}
        />
      </label>
      <h3>Chemovar Profile</h3>
      <label>
        THC:
        <input
          type="number"
          value={chemovarProfile.thc}
          onChange={(e) => onChange('chemovarProfile.thc', Number(e.target.value))}
        />
      </label>
      <label>
        CBD:
        <input
          type="number"
          value={chemovarProfile.cbd}
          onChange={(e) => onChange('chemovarProfile.cbd', Number(e.target.value))}
        />
      </label>
      <label>
        CBG:
        <input
          type="number"
          value={chemovarProfile.cbg}
          onChange={(e) => onChange('chemovarProfile.cbg', Number(e.target.value))}
        />
      </label>
      <label>
        CBN:
        <input
          type="number"
          value={chemovarProfile.cbn}
          onChange={(e) => onChange('chemovarProfile.cbn', Number(e.target.value))}
        />
      </label>
      <h3>Terpene Profile</h3>
      <label>
        Myrcene:
        <input
          type="number"
          value={terpeneProfile.myrcene}
          onChange={(e) => onChange('terpeneProfile.myrcene', Number(e.target.value))}
        />
      </label>
      <label>
        Limonene:
        <input
          type="number"
          value={terpeneProfile.limonene}
          onChange={(e) => onChange('terpeneProfile.limonene', Number(e.target.value))}
        />
      </label>
      <label>
        Pinene:
        <input
          type="number"
          value={terpeneProfile.pinene}
          onChange={(e) => onChange('terpeneProfile.pinene', Number(e.target.value))}
        />
      </label>
      <label>
        Other:
        <input
          type="text"
          value={terpeneProfile.other}
          onChange={(e) => onChange('terpeneProfile.other', e.target.value)}
        />
      </label>
      <label>
        Aroma Profile:
        <input
          type="text"
          value={aromaProfile.join(', ')}
          onChange={(e) => onChange('aromaProfile', e.target.value.split(', '))}
        />
      </label>
      <label>
        Effects Profile:
        <input
          type="text"
          value={effectsProfile.join(', ')}
          onChange={(e) => onChange('effectsProfile', e.target.value.split(', '))}
        />
      </label>
    </div>
  );
};

export default StrainGenetics; 