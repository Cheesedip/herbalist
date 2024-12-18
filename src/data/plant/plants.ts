import { Biome } from './biome';
import { Plant } from './plant';
import { PlantRarity } from './rarity';

export const plants: Omit<Plant, 'imageUrl'>[] = [
  {
    id: 0,
    name: 'Sunspire Daisy',
    appearance: 'Tall daisy with golden petals shimmering in sunlight.',
    use: 'Brewed for a tea that grants minor healing (1d4 HP).',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 1,
    name: 'Bluebloom Clover',
    appearance: 'Small blue clover-like plant glowing faintly at dusk.',
    use: 'Ground into a paste to soothe burns and minor wounds.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 2,
    name: 'Honeydrop Orchid',
    appearance: 'Yellow and white orchid with a honey-like scent.',
    use: 'Nectar used in potions to boost charisma for an hour (+1 Charisma).',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 3,
    name: 'Wildheart Poppy',
    appearance: 'Bright red with black and white stripes at the base.',
    use: 'Calms fear and panic (advantage on Wisdom saves).',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 4,
    name: 'Frostpetal Violet',
    appearance: 'Purple flower with frost-tipped petals.',
    use: 'Used in alchemical cooling agents or frost-related spells.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 5,
    name: 'Amberdew Lily',
    appearance: 'Small orange flower that releases sticky sap at night.',
    use: 'Enhances focus; grants advantage on concentration checks.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 6,
    name: 'Silverthread Fern',
    appearance: 'Pale green leaves with silver veins.',
    use: 'Essential for invisibility potions.',
    rarity: PlantRarity.RARE,
    biome: Biome.MEADOW,
  },
  {
    id: 7,
    name: 'Glowvine Blossom',
    appearance: 'Creeping vine with glowing green flowers.',
    use: 'Creates a potion that lights dim areas.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 8,
    name: 'Starflax',
    appearance: 'Tiny white flowers shaped like stars.',
    use: 'Boosts energy; temporarily reduces exhaustion by 1 level.',
    rarity: PlantRarity.COMMON,
    biome: Biome.MEADOW,
  },
  {
    id: 9,
    name: 'Dreamcatcher Lily',
    appearance: 'Lavender flower with wispy petals.',
    use: 'Eases sleep and wards off nightmares.',
    rarity: PlantRarity.RARE,
    biome: Biome.MEADOW,
  },
  {
    id: 10,
    name: 'Moonshade Bell',
    appearance: 'Small, silver bell-shaped flower blooming under moonlight.',
    use: 'Key ingredient in potions of night vision.',
    rarity: PlantRarity.RARE,
    biome: Biome.FOREST,
  },
  {
    id: 11,
    name: 'Crimsonthorn Bloom',
    appearance: 'Bright red flower growing among thorny bushes.',
    use: 'Poisonous but diluted for paralysis effects.',
    rarity: PlantRarity.COMMON,
    biome: Biome.FOREST,
  },
  {
    id: 12,
    name: 'Whisperpetal Orchid',
    appearance: 'Pale blue with petals vibrating in the wind.',
    use: 'Enhances perception (advantage on Insight checks).',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.FOREST,
  },
  {
    id: 13,
    name: 'Mossrose',
    appearance: 'Rose-like flower with moss-covered stems.',
    use: 'An antidote to minor poisons.',
    rarity: PlantRarity.COMMON,
    biome: Biome.FOREST,
  },
  {
    id: 14,
    name: 'Etherfern',
    appearance: 'Glowing fern-like flower with faint blue luminescence.',
    use: 'Used in invisibility and etherealness potions.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.FOREST,
  },
  {
    id: 15,
    name: 'Foxglimmer',
    appearance: 'Gold and orange blossoms sparkling faintly in darkness.',
    use: 'Enhances stealth checks in forests (1d6 bonus).',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.FOREST,
  },
  {
    id: 16,
    name: 'Blightbane Lily',
    appearance: 'White petals with black streaks.',
    use: 'Counteracts necrotic damage effects.',
    rarity: PlantRarity.COMMON,
    biome: Biome.FOREST,
  },
  {
    id: 17,
    name: 'Tanglethorn Blossom',
    appearance: 'Green flower with long, vine-like tendrils.',
    use: 'Used in binding potions or spells.',
    rarity: PlantRarity.COMMON,
    biome: Biome.FOREST,
  },
  {
    id: 18,
    name: 'Verdant Torch',
    appearance: 'Tall stalk with bright green, flame-like flowers.',
    use: 'Boosts nature-based spell effects.',
    rarity: PlantRarity.COMMON,
    biome: Biome.FOREST,
  },
  {
    id: 19,
    name: 'Glowcap Mushroom',
    appearance: 'Small, bioluminescent blue mushroom.',
    use: 'Emits light and is used in light-enhancing potions.',
    rarity: PlantRarity.RARE,
    biome: Biome.CAVE,
  },
  {
    id: 20,
    name: 'Frostroot Reed',
    appearance: 'Icy-blue reeds with frozen tips.',
    use: 'Used in cold resistance potions.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.CAVE,
  },
  {
    id: 21,
    name: 'Nightveil Rose',
    appearance: 'Black rose with silver edges.',
    use: 'Mixed into necromantic potions or spells.',
    rarity: PlantRarity.RARE,
    biome: Biome.CAVE,
  },
  {
    id: 22,
    name: 'Ironthorn Blossom',
    appearance: 'Small, gray flower with thorny stems as hard as iron.',
    use: 'Used in strengthening or armor-enchanting potions.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.CAVE,
  },
  {
    id: 23,
    name: 'Ashen Petal',
    appearance: 'Charcoal-gray petals with ashy dust.',
    use: 'Ground into powder for smoke bombs or obscuring potions.',
    rarity: PlantRarity.COMMON,
    biome: Biome.CAVE,
  },
  {
    id: 24,
    name: 'Cavernshade Orchid',
    appearance: 'Dark purple petals with a faintly sweet aroma.',
    use: 'Grants temporary immunity to fear effects.',
    rarity: PlantRarity.COMMON,
    biome: Biome.CAVE,
  },
  {
    id: 25,
    name: 'Crystalfrost Lily',
    appearance: 'Translucent flower resembling icy crystals.',
    use: 'Essential for crafting frost grenades.',
    rarity: PlantRarity.UNCOMMON,
    biome: Biome.CAVE,
  },
  {
    id: 26,
    name: 'Shadowbloom Fern',
    appearance: 'Deep black fern with faint purple highlights.',
    use: 'Grants temporary darkvision (up to 30 feet).',
    rarity: PlantRarity.COMMON,
    biome: Biome.CAVE,
  },
  {
    id: 27,
    name: 'Sporefern Blossom',
    appearance: 'Yellow flower releasing spores when disturbed.',
    use: 'Can cause sleep effects; also used for making sedatives.',
    rarity: PlantRarity.RARE,
    biome: Biome.CAVE,
  },
  {
    id: 28,
    name: 'Bloodroot Vine',
    appearance: 'Thick, dark red vines with sap resembling blood.',
    use: 'Used in potions to enhance strength temporarily.',
    rarity: PlantRarity.COMMON,
    biome: Biome.CAVE,
  },
];
