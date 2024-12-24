import { Biome } from './biome';
import { Plant } from './plant';
import { PlantRarity } from './rarity';

export const plants: Omit<Plant, 'imageUrl'>[] = [
  {
    id: 0,
    name: 'Sunspire Daisy',
    appearance: 'Tall daisy with golden petals shimmering in sunlight.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 1,
    name: 'Bluebloom Clover',
    appearance: 'Small blue clover-like plant glowing faintly at dusk.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 2,
    name: 'Honeydrop Orchid',
    appearance: 'Yellow and white orchid with a honey-like scent.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 3,
    name: 'Wildheart Poppy',
    appearance: 'Bright red with black and white stripes at the base.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 4,
    name: 'Frostpetal Violet',
    appearance: 'Purple flower with frost-tipped petals.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 5,
    name: 'Amberdew Lily',
    appearance: 'Small orange flower that releases sticky sap at night.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 6,
    name: 'Silverthread Fern',
    appearance: 'Pale green leaves with silver veins.',
    rarity: PlantRarity.RARE,
    biome: Biome.MEADOW,
  },
  {
    id: 7,
    name: 'Glowvine Blossom',
    appearance: 'Creeping vine with glowing green flowers.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 8,
    name: 'Starflax',
    appearance: 'Tiny white flowers shaped like stars.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 9,
    name: 'Dreamcatcher Lily',
    appearance: 'Lavender flower with wispy petals.',
    rarity: PlantRarity.RARE,
    biome: Biome.MEADOW,
  },
  {
    id: 10,
    name: 'Moonshade Bell',
    appearance: 'Small, silver bell-shaped flower blooming under moonlight.',
    rarity: PlantRarity.RARE,
    biome: Biome.FOREST,
  },
  {
    id: 11,
    name: 'Crimsonthorn Bloom',
    appearance: 'Bright red flower growing among thorny bushes.',
    rarity: PlantRarity.COMMON,
    biome: Biome.FOREST,
  },
  {
    id: 12,
    name: 'Whisperpetal Orchid',
    appearance: 'Pale blue with petals vibrating in the wind.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.FOREST,
  },
  {
    id: 13,
    name: 'Mossrose',
    appearance: 'Rose-like flower with moss-covered stems.',
    rarity: PlantRarity.COMMON,
    biome: Biome.FOREST,
  },
  {
    id: 14,
    name: 'Etherfern',
    appearance: 'Glowing fern-like flower with faint blue luminescence.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.FOREST,
  },
  {
    id: 15,
    name: 'Foxglimmer',
    appearance: 'Gold and orange blossoms sparkling faintly in darkness.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.FOREST,
  },
  {
    id: 16,
    name: 'Blightbane Lily',
    appearance: 'White petals with black streaks.',
    rarity: PlantRarity.COMMON,
    biome: Biome.FOREST,
  },
  {
    id: 17,
    name: 'Tanglethorn Blossom',
    appearance: 'Green flower with long, vine-like tendrils.',
    rarity: PlantRarity.COMMON,
    biome: Biome.FOREST,
  },
  {
    id: 18,
    name: 'Verdant Torch',
    appearance: 'Tall stalk with bright green, flame-like flowers.',
    rarity: PlantRarity.COMMON,
    biome: Biome.FOREST,
  },
  {
    id: 19,
    name: 'Glowcap Mushroom',
    appearance: 'Small, bioluminescent blue mushroom.',
    rarity: PlantRarity.RARE,
    biome: Biome.CAVE,
  },
  {
    id: 20,
    name: 'Frostroot Reed',
    appearance: 'Icy-blue reeds with frozen tips.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.CAVE,
  },
  {
    id: 21,
    name: 'Nightveil Rose',
    appearance: 'Black rose with silver edges.',
    rarity: PlantRarity.RARE,
    biome: Biome.CAVE,
  },
  {
    id: 22,
    name: 'Ironthorn Blossom',
    appearance: 'Small, gray flower with thorny stems as hard as iron.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.CAVE,
  },
  {
    id: 23,
    name: 'Ashen Petal',
    appearance: 'Charcoal-gray petals with ashy dust.',
    rarity: PlantRarity.COMMON,
    biome: Biome.CAVE,
  },
  {
    id: 24,
    name: 'Cavernshade Orchid',
    appearance: 'Dark purple petals with a faintly sweet aroma.',
    rarity: PlantRarity.COMMON,
    biome: Biome.CAVE,
  },
  {
    id: 25,
    name: 'Crystalfrost Lily',
    appearance: 'Translucent flower resembling icy crystals.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.CAVE,
  },
  {
    id: 26,
    name: 'Shadowbloom Fern',
    appearance: 'Deep black fern with faint purple highlights.',
    rarity: PlantRarity.COMMON,
    biome: Biome.CAVE,
  },
  {
    id: 27,
    name: 'Sporefern Blossom',
    appearance: 'Yellow flower releasing spores when disturbed.',
    rarity: PlantRarity.EPIC,
    biome: Biome.CAVE,
  },
  {
    id: 28,
    name: 'Bloodroot Vine',
    appearance: 'Thick, dark red vines with sap resembling blood.',
    rarity: PlantRarity.COMMON,
    biome: Biome.CAVE,
  },
  {
    id: 29,
    name: 'Windveil Grass',
    appearance: 'Long, silver-tipped blades that shimmer in the wind.',
    rarity: PlantRarity.COMMON,
    biome: Biome.HILLS,
  },
  {
    id: 30,
    name: 'Hillspur Bloom',
    appearance: 'Bright orange flower with spiked petals, growing in rocky crevices.',
    rarity: PlantRarity.COMMON,
    biome: Biome.HILLS,
  },
  {
    id: 31,
    name: 'Boulder Ivy',
    appearance: 'Thick, stone-colored vines clinging to boulders.',
    rarity: PlantRarity.COMMON,
    biome: Biome.HILLS,
  },
  {
    id: 32,
    name: 'Stoneshade Moss',
    appearance: 'Dark green moss with a faint metallic sheen, covering large rocks.',
    rarity: PlantRarity.COMMON,
    biome: Biome.HILLS,
  },
  {
    id: 33,
    name: 'Highridge Thistle',
    appearance: 'Pale purple thistles with sharp, bluish-green leaves.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.HILLS,
  },
  {
    id: 34,
    name: 'Golden Fern',
    appearance: 'A short fern with vibrant golden fronds that glimmer in sunlight.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.HILLS,
  },
  {
    id: 35,
    name: 'Whisproot Sapling',
    appearance: 'Small, twisted saplings with pale, whispering leaves.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.HILLS,
  },
  {
    id: 36,
    name: 'Ironbark Shrub',
    appearance: 'Sturdy shrubs with bark as hard as iron and dark green foliage.',
    rarity: PlantRarity.RARE,
    biome: Biome.HILLS,
  },
  {
    id: 37,
    name: 'Cloudblossom',
    appearance: 'White, fluffy flowers resembling small clouds atop slender stalks.',
    rarity: PlantRarity.RARE,
    biome: Biome.HILLS,
  },
  {
    id: 38,
    name: 'Emberleaf',
    appearance: 'Red-tinged leaves that seem to flicker like flames in the wind.',
    rarity: PlantRarity.EPIC,
    biome: Biome.HILLS,
  },
  {
    id: 39,
    name: 'Frostpetal Lily',
    appearance: 'A small, pale blue flower with icy, translucent petals.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MOUNTAINS,
  },
  {
    id: 40,
    name: 'Stonepine',
    appearance: 'A hardy conifer with dark gray bark and short, needle-like leaves.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MOUNTAINS,
  },
  {
    id: 41,
    name: 'Cragthorn Vine',
    appearance: 'Thorny vines with a rugged, brown texture, clinging to cliff faces.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MOUNTAINS,
  },
  {
    id: 42,
    name: 'Glacier Fern',
    appearance: 'Silver-hued ferns with frost-covered fronds, thriving near icy crevices.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MOUNTAINS,
  },
  {
    id: 43,
    name: 'Firepeak Orchid',
    appearance: 'Bright red orchid with golden veins, growing near volcanic vents.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.MOUNTAINS,
  },
  {
    id: 44,
    name: 'Ironroot Sprout',
    appearance: 'Tiny, gnarled shrubs with roots that burrow into solid rock.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.MOUNTAINS,
  },
  {
    id: 45,
    name: 'Cloudveil Moss',
    appearance: 'Soft, white moss that looks like patches of cloud on high cliffs.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.MOUNTAINS,
  },
  {
    id: 46,
    name: 'Thunderleaf',
    appearance: 'Large, jagged leaves that vibrate in strong winds, producing a faint hum.',
    rarity: PlantRarity.RARE,
    biome: Biome.MOUNTAINS,
  },
  {
    id: 47,
    name: 'Shardbloom',
    appearance: 'A crystalline flower that sparkles in sunlight, often found in mineral-rich areas.',
    rarity: PlantRarity.RARE,
    biome: Biome.MOUNTAINS,
  },
  {
    id: 48,
    name: 'Peaksage Herb',
    appearance: 'A low-growing herb with silvery leaves, often found in sheltered mountain crevices.',
    rarity: PlantRarity.EPIC,
    biome: Biome.MOUNTAINS,
  },
];