// Fish & Livestock Data matching Midhula Farm Hut design & catalogue

export const SPECIES_DATA = [
  {
    id: 'guppies',
    name: 'Fancy Guppies',
    subtitle: 'Red, Metallic Blue & Mixed Strains',
    malayalamName: 'ഫാൻസി ഗപ്പികൾ',
    category: 'Livebearers',
    temperament: 'Peaceful Community',
    level: 'Beginner Friendly',
    minTankL: 40,
    tank: '40L+',
    temp: '22–28°C',
    image: '/images/guppies.jpg',
    price: 220,
    unit: 'Pair (1M + 1F)',
    desc: 'Hardy, colorful livebearers bred in Kerala outdoor and indoor racks. Ideal for planted home aquariums and beginner setups.',
    care: 'Keep 1 male to 2 females to reduce chasing; thrives on micro-pellets and live Moina.',
    compatGroup: 'peaceful_small'
  },
  {
    id: 'shrimps',
    name: 'Cherry & Dwarf Shrimps',
    subtitle: 'Neocaridina Algae-Grazing Colony',
    malayalamName: 'റെഡ് ചെറി ചെമ്മീൻ',
    category: 'Shrimps & Cleaners',
    temperament: 'Peaceful Community',
    level: 'Beginner Friendly',
    minTankL: 20,
    tank: '20L+',
    temp: '20–26°C',
    image: '/images/shrimps.jpg',
    price: 250,
    unit: 'Pack of 10 (+2 Free)',
    desc: 'Active crimson dwarf shrimps that graze constantly on biofilm and soft algae across moss and driftwood.',
    care: 'Needs stable aged water, sponge filter protection, and moss cover away from larger cichlids.',
    compatGroup: 'shrimp'
  },
  {
    id: 'polar',
    name: 'Polar Blue Parrot Cichlid',
    subtitle: 'Compact Striped Hybrid Cichlid',
    malayalamName: 'പോളാർ ബ്ലൂ പാരറ്റ് ഫിഷ്',
    category: 'Cichlids',
    temperament: 'Semi-Aggressive',
    level: 'Intermediate',
    minTankL: 80,
    tank: '80L+',
    temp: '24–28°C',
    image: '/images/polar.jpg',
    price: 220,
    unit: 'Active Pair',
    desc: 'Plump, expressive cichlids with crisp blue-black vertical barring. Popular for species tanks and active cichlid setups.',
    care: 'Provide smooth river stones or clay pots for territory; pair-bonds strongly during breeding.',
    compatGroup: 'cichlid_semi'
  },
  {
    id: 'jewel',
    name: 'Jewel Cichlid',
    subtitle: 'Red-Spotted Freshwater Cichlid',
    malayalamName: 'ജുവൽ സിക്ലിഡ് (ജ്വല്ലറി ഫിഷ്)',
    category: 'Cichlids',
    temperament: 'Semi-Aggressive',
    level: 'Intermediate',
    minTankL: 100,
    tank: '100L+',
    temp: '24–28°C',
    image: '/images/jewel.jpg',
    price: 180,
    unit: 'Breeding Pair',
    desc: 'Brilliant crimson cichlids speckled with iridescent blue-white spots that intensify during breeding.',
    care: 'Best kept with similarly sized hardy cichlids in spacious tanks with rock caves.',
    compatGroup: 'cichlid_semi'
  },
  {
    id: 'swordtails',
    name: 'Swordtails',
    subtitle: 'Tangerine & Red Livebearers',
    malayalamName: 'റെഡ് സ്വോർഡ് ടെയിൽ',
    category: 'Livebearers',
    temperament: 'Peaceful Community',
    level: 'Beginner Friendly',
    minTankL: 60,
    tank: '60L+',
    temp: '22–28°C',
    image: '/images/swordtails.jpg',
    price: 150,
    unit: 'Pair (1M + 1F)',
    desc: 'Energetic, bright orange livebearers known for the male’s elongated lower tail sword and easy care.',
    care: 'Active swimmers that appreciate a fitted tank lid and a mix of flake food and blanched greens.',
    compatGroup: 'peaceful_medium'
  },
  {
    id: 'platies',
    name: 'Platies',
    subtitle: 'Sunset, Tuxedo & Coral Varieties',
    malayalamName: 'സൺസെറ്റ് പ്ലാറ്റി',
    category: 'Livebearers',
    temperament: 'Peaceful Community',
    level: 'Beginner Friendly',
    minTankL: 40,
    tank: '40L+',
    temp: '22–27°C',
    image: '/images/platies.jpg',
    price: 140,
    unit: 'Pair (1M + 1F)',
    desc: 'Gentle, colorful community fish that pair naturally with guppies, swordtails, and peaceful schooling species.',
    care: 'Very adaptable to Kerala freshwater conditions; breed readily in planted tanks.',
    compatGroup: 'peaceful_small'
  },
  {
    id: 'kribensis',
    name: 'Kribensis Cichlid',
    subtitle: 'Pelvicachromis pulcher Dwarf Cichlid',
    malayalamName: 'റെയിൻബോ ക്രിബെൻസിസ്',
    category: 'Cichlids',
    temperament: 'Peaceful Community',
    level: 'Beginner Friendly',
    minTankL: 75,
    tank: '75L+',
    temp: '24–27°C',
    image: '/images/kribensis.jpg',
    price: 280,
    unit: 'Bonded Pair (1M + 1F)',
    desc: 'Peaceful West African dwarf cichlid with a ruby belly and patterned dorsal fin, ideal for planted community tanks.',
    care: 'Stays near the bottom substrate; enjoys coconut shell caves and calm mid-water tankmates.',
    compatGroup: 'dwarf_cichlid'
  },
  {
    id: 'zebras',
    name: 'Zebra Danios',
    subtitle: 'Fast-Swimming Striped Schoolers',
    malayalamName: 'സീബ്ര ഡാനിയോസ്',
    category: 'Schooling & Koi',
    temperament: 'Peaceful Community',
    level: 'Beginner Friendly',
    minTankL: 40,
    tank: '40L+',
    temp: '18–26°C',
    image: '/images/zebras.jpg',
    price: 160,
    unit: 'School of 6',
    desc: 'Ultra-hardy silver-and-blue striped schooling fish that bring lively upper-water movement to any tank.',
    care: 'Keep in groups of 5 or more so they school comfortably and leave slow-finned fish alone.',
    compatGroup: 'peaceful_small'
  },
  {
    id: 'koi',
    name: 'Japanese Koi Carp',
    subtitle: 'Outdoor Pond & Tub Ornamental Carp',
    malayalamName: 'ജാപ്പനീസ് കോയി കാർപ്പ്',
    category: 'Schooling & Koi',
    temperament: 'Peaceful Community',
    level: 'Beginner Friendly',
    minTankL: 300,
    tank: 'Pond / 300L+',
    temp: '15–28°C',
    image: '/images/koi.jpg',
    price: 450,
    unit: 'Pack of 3 Active Koi',
    desc: 'Patterned ornamental carp raised in our Nooluvally ponds, suited for garden ponds, cement tubs, and large outdoor tanks.',
    care: 'Requires strong aeration and spacious outdoor water volume rather than small indoor glass tanks.',
    compatGroup: 'pond_large'
  }
];

export const CATEGORIES = [
  'All',
  'Livebearers',
  'Shrimps & Cleaners',
  'Cichlids',
  'Schooling & Koi'
];

export const TEMPERAMENTS = [
  'All',
  'Beginner Friendly',
  'Peaceful Community',
  'Semi-Aggressive'
];

export const PACK_OPTIONS = [
  { value: 'Pairs (1M+1F)', label: 'Pairs (1M+1F)' },
  { value: 'Trio (1M+2F)', label: 'Trio (1M+2F)' },
  { value: 'Breeding Colony (10 Pcs)', label: 'Breeding Colony (10 Pcs)' },
  { value: 'Wholesale Box (50 Pcs)', label: 'Wholesale Box (50 Pcs)' }
];

export function evaluateCompatibility(fishAId, fishBId) {
  const a = SPECIES_DATA.find(s => s.id === fishAId);
  const b = SPECIES_DATA.find(s => s.id === fishBId);
  if (!a || !b) return null;

  const minVol = Math.max(a.minTankL, b.minTankL);
  let status = 'Great Community Match';
  let style = 'bg-emerald-50 border-emerald-200 text-emerald-950';
  let badgeColor = 'text-emerald-700 bg-emerald-100 border-emerald-300';
  let note = `${a.name} and ${b.name} share peaceful temperaments and thrive together in a planted ${minVol}L+ setup.`;

  if (a.id === b.id) {
    status = 'Same Species Group';
    style = 'bg-teal-50 border-teal-200 text-teal-950';
    badgeColor = 'text-teal-700 bg-teal-100 border-teal-300';
    note = `Keeping ${a.name} together works well in a ${minVol}L+ tank. Maintain balanced male-to-female ratios or caves for cichlids.`;
  } else if (a.compatGroup === 'pond_large' || b.compatGroup === 'pond_large') {
    status = 'Not Recommended Together';
    style = 'bg-rose-50 border-rose-200 text-rose-950';
    badgeColor = 'text-rose-700 bg-rose-100 border-rose-300';
    note = `Japanese Koi Carp grow large and belong in outdoor ponds or 300L+ tubs, while smaller aquarium fish may get eaten or stressed.`;
  } else if (
    (a.compatGroup === 'cichlid_semi' && (b.compatGroup === 'shrimp' || b.compatGroup === 'peaceful_small')) ||
    (b.compatGroup === 'cichlid_semi' && (a.compatGroup === 'shrimp' || a.compatGroup === 'peaceful_small'))
  ) {
    status = 'Not Recommended Together';
    style = 'bg-rose-50 border-rose-200 text-rose-950';
    badgeColor = 'text-rose-700 bg-rose-100 border-rose-300';
    note = `Semi-aggressive cichlids (Polar Parrot / Jewel Cichlid) will nip or prey on small Guppies, Platies, Zebras, or Dwarf Shrimps. Keep them in separate tanks.`;
  } else if (a.compatGroup === 'cichlid_semi' && b.compatGroup === 'cichlid_semi') {
    status = 'Caution — Needs Caves & Space';
    style = 'bg-amber-50 border-amber-200 text-amber-950';
    badgeColor = 'text-amber-800 bg-amber-100 border-amber-300';
    note = `Polar Parrot and Jewel Cichlids can coexist only in larger 120L+ tanks with plenty of rock caves and visual dividers.`;
  } else if (
    (a.compatGroup === 'dwarf_cichlid' && b.compatGroup === 'shrimp') ||
    (b.compatGroup === 'dwarf_cichlid' && a.compatGroup === 'shrimp')
  ) {
    status = 'Caution — Provide Dense Moss';
    style = 'bg-amber-50 border-amber-200 text-amber-950';
    badgeColor = 'text-amber-800 bg-amber-100 border-amber-300';
    note = `Kribensis are mostly peaceful, but may nibble baby shrimps. Use dense java moss and driftwood hiding spots.`;
  }

  return { status, style, badgeColor, note, minVol };
}
