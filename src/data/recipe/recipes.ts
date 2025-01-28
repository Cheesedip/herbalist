import { PotionStrength } from './recipe';

export const recipes = [
  {
    id: 0,
    name: 'Potion of Swift Scribbling',
    ingredients: [
      { count: 1, plantId: 0 },
      { count: 2, plantId: 1 },
    ],
    effect:
      'You can write or draw twice as fast as normal, with perfect legibility, for the next 24 hours.',
    description:
      'Upon drinking this potion, the drinker feels a surge of energy in your hands, as if your fingers move of their own accord. The sensation is like a rapid flow of inspiration, allowing them to write or draw with remarkable speed and precision, all while maintaining flawless legibility.',
    strength: PotionStrength.Mild,
  },
  {
    id: 1,
    name: 'Potion of Delicate Drizzle',
    ingredients: [{ count: 2, plantId: 2 }],
    description:
      'After drinking this potion, the drinker feels a subtle, comforting warmth on their skin, as if shielded by an invisible barrier.',
    effect:
      'You no longer get wet in light rain or drizzle, though heavy rain still soaks you.',
    strength: PotionStrength.Mild,
  },
  {
    id: 2,
    name: 'Potion of Perfect Memory',
    ingredients: [
      { count: 2, plantId: 5 },
      { count: 1, plantId: 7 },
    ],
    effect:
      'You can perfectly recall a distant memory or detail that you focus on while drinking the potion, that you would normally struggle to remember.',
    description:
      'As the potion takes effect, a wave of clarity washes over the drinker’s mind, as if a fog has lifted. The memory they focus on sharpens with vivid detail, filling their senses with sights, sounds, and emotions long forgotten, as though reliving the moment itself with perfect lucidity.',
    strength: PotionStrength.Mild,
  },
  {
    id: 3,
    name: 'TODO',
    ingredients: [
      { count: 1, plantId: 8 },
      { count: 2, plantId: 11 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mild,
  },
  {
    id: 4,
    name: 'Potion of Masked Scent',
    ingredients: [
      { count: 2, plantId: 13 },
      { count: 1, plantId: 16 },
    ],
    effect:
      'For the next 8 hours, you emit no body odor or scent, making it harder for animals or creatures to track you by smell.',
    strength: PotionStrength.Mild,
  },
  {
    id: 5,
    name: 'Potion of Nimble Digits',
    ingredients: [{ count: 3, plantId: 17 }],
    effect:
      'For the next hour, your fingers are unusually dexterous, giving you advantage on Sleight of Hand checks involving delicate tasks (picking locks, performing tricks, sewing, etc.).',
    strength: PotionStrength.Mild,
  },
  {
    id: 6,
    name: 'Potion of Endless Breath',
    ingredients: [
      { count: 1, plantId: 18 },
      { count: 3, plantId: 23 },
    ],
    effect: 'You can hold your breath for up to 10 minutes without discomfort.',
    description:
      'Drinking this potion fills the drinker’s lungs with a cool, refreshing sensation, as if breathing in the purest mountain air. Their chest feels light and unstrained, granting them the ability to hold their breath effortlessly, even in the most suffocating conditions.',
    strength: PotionStrength.Mild,
  },
  {
    id: 7,
    name: 'Potion of Faultless Translation',
    ingredients: [
      { count: 1, plantId: 24 },
      { count: 2, plantId: 26 },
    ],
    effect:
      'For the next 30 minutes, you can read and understand any written language you encounter, though you cannot speak or write it.',
    strength: PotionStrength.Mild,
    description:
      'Upon drinking this potion, the drinker’s mind tingles with a strange clarity, as if unseen threads of meaning weave themselves together. Words in unfamiliar scripts or forgotten languages seem to rearrange before their eyes, revealing their true meaning with perfect clarity.',
  },
  {
    id: 8,
    name: 'Potion of Effortless Elegance',
    ingredients: [
      { count: 1, plantId: 28 },
      { count: 3, plantId: 29 },
    ],
    effect:
      'For the next 4 hours, your clothes remain clean and wrinkle-free, no matter what you do.',
    description:
      'As the potion takes effect, the drinker feels a faint warmth that seems to flow outward, enveloping their attire. Dirt, stains, and wrinkles seem to vanish on contact, leaving their clothes immaculate and perfectly pressed, as if untouched by the rigors of the day.',
    strength: PotionStrength.Mild,
  },
  {
    id: 9,
    name: 'Potion of Weightless Carrying',
    ingredients: [
      { count: 2, plantId: 30 },
      { count: 2, plantId: 31 },
    ],
    effect:
      'For 1 hour, any non-living object you carry feels 50% lighter, though its actual weight remains the same.',
    strength: PotionStrength.Mild,
  },
  {
    id: 10,
    name: 'Potion of Harmonious Presence',
    ingredients: [{ count: 4, plantId: 32 }],
    effect:
      'For the next hour, minor social faux pas (like interrupting someone or forgetting a name) are overlooked or easily forgiven by those around you.',
    strength: PotionStrength.Mild,
  },
  {
    id: 11,
    name: 'Darkvision Draught',
    ingredients: [
      { count: 2, plantId: 39 },
      { count: 2, plantId: 40 },
    ],
    effect: 'Grants temporary darkvision (up to 30 feet) for 1 hour.',
    strength: PotionStrength.Mild,
  },
  {
    id: 12,
    name: 'Potion of Lingering Warmth',
    ingredients: [
      { count: 1, plantId: 41 },
      { count: 3, plantId: 42 },
    ],
    effect:
      'You remain comfortably warm in cold weather for the next 8 hours, regardless of wind or frost.',
    strength: PotionStrength.Mild,
  },
  {
    id: 13,
    name: 'Elixir of Iron Stomach',
    ingredients: [
      { count: 2, plantId: 0 },
      { count: 1, plantId: 8 },
    ],
    effect:
      'For the next 24 hours, you can safely consume any food or drink, no matter how spoiled, bitter, or unusual. You’re immune to mild food poisoning or discomfort caused by exotic cuisine.',
    strength: PotionStrength.Mild,
  },
  {
    id: 14,
    name: 'Potion of Verdant Whispers',
    ingredients: [
      { count: 2, plantId: 5 },
      { count: 2, plantId: 11 },
    ],
    effect:
      'For the next 10 minutes, you can sense the general health and needs of plants within 30 feet.',
    strength: PotionStrength.Mild,
  },
  {
    id: 15,
    name: 'Soothing Poultice',
    ingredients: [
      { count: 1, plantId: 7 },
      { count: 3, plantId: 16 },
    ],
    effect:
      'Causes a deep, healing sleep and wards off nightmares for 8 hours.',
    strength: PotionStrength.Mild,
  },
  {
    id: 16,
    name: 'Potion of Subtle Influence',
    ingredients: [
      { count: 2, plantId: 2 },
      { count: 2, plantId: 13 },
    ],
    effect:
      'For the next hour, your posture, tone, and demeanor exude confidence, giving you advantage on Persuasion checks involving non-hostile NPCs.',
    strength: PotionStrength.Mild,
  },
  {
    id: 17,
    name: 'Cooling Draught',
    ingredients: [
      { count: 1, plantId: 17 },
      { count: 3, plantId: 18 },
    ],
    effect: 'Creates a mild cooling effect that soothes fever or heat.',
    strength: PotionStrength.Mild,
  },
  {
    id: 18,
    name: 'TODO',
    ingredients: [
      { count: 2, plantId: 24 },
      { count: 2, plantId: 23 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mild,
  },
  {
    id: 19,
    name: 'TODO',
    ingredients: [
      { count: 1, plantId: 26 },
      { count: 3, plantId: 28 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mild,
  },
  {
    id: 20,
    name: 'TODO',
    ingredients: [
      { count: 2, plantId: 29 },
      { count: 2, plantId: 30 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mild,
  },
  {
    id: 21,
    name: 'TODO',
    ingredients: [
      { count: 1, plantId: 31 },
      { count: 3, plantId: 32 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mild,
  },
  {
    id: 22,
    name: 'Healing Mist',
    ingredients: [
      { count: 2, plantId: 39 },
      { count: 2, plantId: 42 },
    ],
    effect: 'For one hour anyone you touch feels ticklish for one minute.',
    strength: PotionStrength.Mild,
  },
  {
    id: 23,
    name: 'Furry Floof Tonic',
    ingredients: [
      { count: 1, plantId: 40 },
      { count: 1, plantId: 41 },
      { count: 1, plantId: 42 },
    ],
    effect:
      'Your body always has a comfortable temperature, even in extreme cold or heat.',
    description:
      'Upon drinking this tonic, the drinker grows a soft layer of fluffy, downy hair across their body. The fur provides gentle warmth and insulation, giving them the cozy appearance of a winter creature.',
    strength: PotionStrength.Mild,
  },
  {
    id: 24,
    name: 'Night Vision Tea',
    ingredients: [
      { count: 1, plantId: 1 },
      { count: 3, plantId: 8 },
    ],
    effect:
      'Everything you say is sung in an opera voice instead for 2 minutes.',
    strength: PotionStrength.Mild,
  },
  {
    id: 25,
    name: 'Smoke grenade',
    ingredients: [
      { count: 1, plantId: 3 },
      { count: 3, plantId: 45 },
    ],
    effect: `As an action, a character can throw a grenade at a point up to 60 feet away. One round after a smoke grenade lands, it emits a cloud of smoke that creates a heavily obscured area in a 20-foot radius. A moderate wind (at least 10 miles per hour) disperses the smoke in 4 rounds; a strong wind (20 or more miles per hour) disperses it in 1 round.`,
    strength: PotionStrength.Potent,
    description:
      'This small, spherical container hums faintly with contained energy, its surface etched with swirling patterns resembling rising smoke. When thrown, it shatters with a sharp crack, releasing a thick, billowing cloud of smoke that blankets the area in a dense, obscuring fog.',
  },
  {
    id: 26,
    name: 'TODO',
    ingredients: [{ count: 2, plantId: 12 }],
    effect: 'TODO',
    strength: PotionStrength.Potent,
  },
  {
    id: 27,
    name: 'Fear Calming Elixir',
    ingredients: [
      { count: 2, plantId: 14 },
      { count: 1, plantId: 15 },
    ],
    effect: 'Immune to being frightened for 1 minute.',
    description: `Drinking this elixir brings an immediate wave of soothing calm, as if a comforting presence has settled deep within. The drinker's heart steadies, their mind clears, and even the most terrifying sights fail to unsettle them, leaving them calm and resolute in the face of fear.`,
    strength: PotionStrength.Potent,
  },
  {
    id: 28,
    name: 'Frostshield Brew',
    ingredients: [
      { count: 1, plantId: 20 },
      { count: 2, plantId: 22 },
    ],
    effect: 'Grants resistance to cold damage for 1 hour.',
    strength: PotionStrength.Potent,
  },
  {
    id: 29,
    name: 'Insight Elixir',
    ingredients: [
      { count: 2, plantId: 25 },
      { count: 1, plantId: 33 },
    ],
    effect: 'Advantage on insight checks for 1 hour.',
    strength: PotionStrength.Potent,
  },
  {
    id: 30,
    name: 'Invisibility Tonic',
    ingredients: [{ count: 3, plantId: 34 }],
    effect: 'You completely turn to stone for 30 seconds.',
    strength: PotionStrength.Potent,
  },
  {
    id: 31,
    name: 'TODO',
    ingredients: [
      { count: 1, plantId: 35 },
      { count: 3, plantId: 43 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
  },
  {
    id: 32,
    name: 'TODO',
    ingredients: [
      { count: 1, plantId: 44 },
      { count: 2, plantId: 45 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
  },
  {
    id: 33,
    name: `Mage's Bane Potion`,
    ingredients: [
      { count: 2, plantId: 3 },
      { count: 2, plantId: 20 },
    ],
    description:
      'When the potion is applied, the weapon shimmers faintly with shifting arcs of violet and silver light, as if rippling with trapped magical energy. Upon striking a target, the energy surges into them, briefly illuminating your body with flickering, fading glyphs as the magic forcefully disrupts their arcane reserves.',
    effect:
      'For one action this potion can be applied to a melee weapon, ranged weapon or projectile. The first target hit by the weapon burns their lowest-level available spell slot, losing access to that magic until it can be restored by normal means. Targets without spell slots remain unaffected.',
    strength: PotionStrength.Potent,
  },
  // {
  //   id: 34,
  //   name: 'Chillwind Draught',
  //   ingredients: [
  //     { count: 1, plantId: 14 },
  //     { count: 3, plantId: 22 },
  //   ],
  //   effect: 'Grants resistance to fire damage for 1 hour.',
  //   strength: PotionStrength.Potent,
  // },
  {
    id: 35,
    name: 'Silent Steps Elixir',
    ingredients: [
      { count: 2, plantId: 15 },
      { count: 2, plantId: 25 },
    ],
    description:
      'Your movements becomes unnaturally smooth and soundless, as if your very presence is cushioned by an invisible force. In addition a subtle shadow-like aura seems to blur your outline, making you blend seamlessly into your surroundings.',
    effect: 'Throw an additional 1d8 when rolling for stealth',
    strength: PotionStrength.Potent,
  },
  {
    id: 36,
    name: 'Stone Skin Draught',
    ingredients: [
      { count: 1, plantId: 33 },
      { count: 3, plantId: 34 },
    ],
    effect:
      'Turns the skin into stone-like material, granting temporary hit points (1d6) for 1 hour.',
    strength: PotionStrength.Potent,
  },
  {
    id: 37,
    name: 'TODO',
    ingredients: [
      { count: 2, plantId: 43 },
      { count: 2, plantId: 45 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
  },
  {
    id: 38,
    name: 'TODO',
    ingredients: [
      { count: 3, plantId: 44 },
      { count: 1, plantId: 12 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
  },
  {
    id: 39,
    name: 'Armor of Frost',
    ingredients: [
      { count: 1, plantId: 4 },
      { count: 1, plantId: 35 },
      { count: 1, plantId: 7 },
    ],
    effect:
      'For the next minute, your Armor Class is increased by 1 and any creature that hits you with a melee attack takes 1d4 cold damage and has their movement reduced by half until the end of their next turn.',
    description:
      'As the potion takes effect, a shimmering layer of frost envelops your body, forming a crystalline armor that glints with icy blue hues. Your breath turns to mist, and the frost absorbs impacts like a protective shield.',
    strength: PotionStrength.Potent,
  },
  {
    id: 40,
    name: 'TODO',
    ingredients: [
      { count: 2, plantId: 3 },
      { count: 2, plantId: 15 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
  },
  {
    id: 41,
    name: 'TODO',
    ingredients: [
      { count: 3, plantId: 14 },
      { count: 1, plantId: 25 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
  },
  {
    id: 42,
    name: 'TODO',
    ingredients: [
      { count: 2, plantId: 4 },
      { count: 2, plantId: 43 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
  },
  {
    id: 43,
    name: 'Decurse Draught',
    ingredients: [
      { count: 1, plantId: 6 },
      { count: 3, plantId: 9 },
    ],
    effect: 'Removes a curse.',
    strength: PotionStrength.Infused,
  },
  {
    id: 44,
    name: 'TODO',
    ingredients: [
      { count: 2, plantId: 10 },
      { count: 2, plantId: 19 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Infused,
  },
  {
    id: 45,
    name: 'TODO',
    ingredients: [
      { count: 2, plantId: 21 },
      { count: 2, plantId: 36 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Infused,
  },
  {
    id: 46,
    name: 'TODO',
    ingredients: [
      { count: 1, plantId: 37 },
      { count: 3, plantId: 46 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Infused,
  },
  {
    id: 47,
    name: 'TODO',
    ingredients: [{ count: 4, plantId: 47 }],
    effect: 'TODO',
    strength: PotionStrength.Infused,
  },
  {
    id: 48,
    name: 'TODO',
    ingredients: [
      { count: 2, plantId: 6 },
      { count: 2, plantId: 21 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Infused,
  },
  {
    id: 49,
    name: 'TODO',
    ingredients: [
      { count: 3, plantId: 10 },
      { count: 1, plantId: 37 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Infused,
  },
  {
    id: 50,
    name: 'TODO',
    ingredients: [
      { count: 2, plantId: 19 },
      { count: 2, plantId: 46 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Infused,
  },
  {
    id: 51,
    name: 'TODO',
    ingredients: [
      { count: 1, plantId: 27 },
      { count: 1, plantId: 38 },
      { count: 1, plantId: 48 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mythic,
  },
  {
    id: 52,
    name: 'TODO',
    ingredients: [
      { count: 2, plantId: 27 },
      { count: 1, plantId: 48 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mythic,
  },
  {
    id: 53,
    name: 'TODO',
    ingredients: [
      { count: 3, plantId: 38 },
      { count: 1, plantId: 48 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mythic,
  },
];
