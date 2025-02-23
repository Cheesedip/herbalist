import { PotionStrength, Recipe } from './recipe';

export const recipes: Recipe[] = [
  {
    id: 0,
    name: 'Potion of Swift Scribbling',
    ingredients: [
      { count: 1, id: 0 },
      { count: 2, id: 1 },
    ],
    effect:
      'You can write or draw twice as fast as normal, with perfect legibility, for the next 24 hours.',
    description:
      'Upon drinking this potion, the drinker feels a surge of energy in your hands, as if your fingers move of their own accord. The sensation is like a rapid flow of inspiration, allowing them to write or draw with remarkable speed and precision, all while maintaining flawless legibility.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 1,
    name: 'Potion of Delicate Drizzle',
    ingredients: [{ count: 2, id: 2 }],
    description:
      'After drinking this potion, the drinker feels a subtle, comforting warmth on their skin, as if shielded by an invisible barrier.',
    effect:
      'You no longer get wet in light rain or drizzle, though heavy rain still soaks you.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_1.webp',
    count: 0,
  },
  {
    id: 2,
    name: 'Potion of Perfect Memory',
    ingredients: [
      { count: 2, id: 5 },
      { count: 1, id: 7 },
    ],
    effect:
      'You can perfectly recall a distant memory or detail that you focus on while drinking the potion, that you would normally struggle to remember.',
    description:
      'As the potion takes effect, a wave of clarity washes over the drinker’s mind, as if a fog has lifted. The memory they focus on sharpens with vivid detail, filling their senses with sights, sounds, and emotions long forgotten, as though reliving the moment itself with perfect lucidity.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_2.webp',
    count: 0,
  },
  {
    id: 3,
    name: 'Potion of Healing',
    ingredients: [
      { count: 1, id: 8 },
      { count: 2, id: 11 },
    ],
    effect: 'Heals the drinker for 2d4 + 2 hit points.',
    description:
      'The moment this warm, slightly tangy liquid touches your lips, a soothing energy spreads through your body. Wounds knit together, bruises fade, and a revitalizing warmth fills your limbs, replacing pain with a gentle surge of renewed strength.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_3.webp',
    count: 0,
  },
  {
    id: 4,
    name: 'Potion of Masked Scent',
    ingredients: [
      { count: 2, id: 13 },
      { count: 1, id: 16 },
    ],
    effect:
      'For the next 8 hours, you emit no body odor or scent, making it harder for animals or creatures to track you by smell.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_4.webp',
    count: 0,
  },
  {
    id: 5,
    name: 'Potion of Nimble Digits',
    ingredients: [{ count: 3, id: 17 }],
    effect:
      'For the next hour, your fingers are unusually dexterous, giving you advantage on Sleight of Hand checks involving delicate tasks (picking locks, performing tricks, sewing, etc.).',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_5.webp',
    count: 0,
  },
  {
    id: 6,
    name: 'Potion of Endless Breath',
    ingredients: [
      { count: 1, id: 18 },
      { count: 3, id: 23 },
    ],
    effect: 'You can hold your breath for up to 10 minutes without discomfort.',
    description:
      'Drinking this potion fills the drinker’s lungs with a cool, refreshing sensation, as if breathing in the purest mountain air. Their chest feels light and unstrained, granting them the ability to hold their breath effortlessly, even in the most suffocating conditions.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_6.webp',
    count: 0,
  },
  {
    id: 7,
    name: 'Potion of Faultless Translation',
    ingredients: [
      { count: 1, id: 24 },
      { count: 2, id: 26 },
    ],
    effect:
      'For the next 30 minutes, you can read and understand any written language you encounter, though you cannot speak or write it.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_7.webp',
    count: 0,
    description:
      'Upon drinking this potion, the drinker’s mind tingles with a strange clarity, as if unseen threads of meaning weave themselves together. Words in unfamiliar scripts or forgotten languages seem to rearrange before their eyes, revealing their true meaning with perfect clarity.',
  },
  {
    id: 8,
    name: 'Potion of Effortless Elegance',
    ingredients: [
      { count: 1, id: 28 },
      { count: 3, id: 29 },
    ],
    effect:
      'For the next 4 hours, your clothes remain clean and wrinkle-free, no matter what you do.',
    description:
      'As the potion takes effect, the drinker feels a faint warmth that seems to flow outward, enveloping their attire. Dirt, stains, and wrinkles seem to vanish on contact, leaving their clothes immaculate and perfectly pressed, as if untouched by the rigors of the day.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_8.webp',
    count: 0,
  },
  {
    id: 9,
    name: 'Potion of Weightless Carrying',
    ingredients: [
      { count: 2, id: 30 },
      { count: 2, id: 31 },
    ],
    effect:
      'For 1 hour, any non-living object you carry feels 50% lighter, though its actual weight remains the same.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_9.webp',
    count: 0,
  },
  {
    id: 10,
    name: 'Potion of Harmonious Presence',
    ingredients: [{ count: 4, id: 32 }],
    effect:
      'For the next hour, minor social faux pas (like interrupting someone or forgetting a name) are overlooked or easily forgiven by those around you.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_10.webp',
    count: 0,
  },
  {
    id: 11,
    name: 'Darkvision Draught',
    ingredients: [
      { count: 2, id: 39 },
      { count: 2, id: 40 },
    ],
    effect: 'Grants temporary darkvision (up to 30 feet) for 1 hour.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_11.webp',
    count: 0,
  },
  {
    id: 12,
    name: 'Potion of Lingering Warmth',
    ingredients: [
      { count: 1, id: 41 },
      { count: 3, id: 42 },
    ],
    effect:
      'You remain comfortably warm in cold weather for the next 8 hours, regardless of wind or frost.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_12.webp',
    count: 0,
  },
  {
    id: 13,
    name: 'Elixir of Iron Stomach',
    ingredients: [
      { count: 2, id: 0 },
      { count: 1, id: 8 },
    ],
    effect:
      'For the next 24 hours, you can safely consume any food or drink, no matter how spoiled, bitter, or unusual. You’re immune to mild food poisoning or discomfort caused by exotic cuisine.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_13.webp',
    count: 0,
  },
  {
    id: 14,
    name: 'Potion of Verdant Whispers',
    ingredients: [
      { count: 2, id: 5 },
      { count: 2, id: 11 },
    ],
    effect:
      'For the next 10 minutes, you can sense the general health and needs of plants within 30 feet.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_14.webp',
    count: 0,
  },
  {
    id: 15,
    name: 'Soothing Poultice',
    ingredients: [
      { count: 1, id: 7 },
      { count: 3, id: 16 },
    ],
    effect:
      'Causes a deep, healing sleep and wards off nightmares for 8 hours.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_15.webp',
    count: 0,
  },
  {
    id: 16,
    name: 'Potion of Subtle Influence',
    ingredients: [
      { count: 2, id: 2 },
      { count: 2, id: 13 },
    ],
    effect:
      'For the next hour, your posture, tone, and demeanor exude confidence, giving you advantage on Persuasion checks involving non-hostile NPCs.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_16.webp',
    count: 0,
  },
  {
    id: 17,
    name: 'Cooling Draught',
    ingredients: [
      { count: 1, id: 17 },
      { count: 3, id: 18 },
    ],
    effect: 'Creates a mild cooling effect that soothes fever or heat.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_17.webp',
    count: 0,
  },
  {
    id: 18,
    name: 'TODO',
    ingredients: [
      { count: 2, id: 24 },
      { count: 2, id: 23 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_18.webp',
    count: 0,
  },
  {
    id: 19,
    name: 'TODO',
    ingredients: [
      { count: 1, id: 26 },
      { count: 3, id: 28 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_19.webp',
    count: 0,
  },
  {
    id: 20,
    name: 'Potion of Watchful Rest',
    ingredients: [
      { count: 2, id: 29 },
      { count: 2, id: 30 },
    ],
    effect: `When you drink this potion, you gain the following benefits for the next 8 hours: magic can't put you to sleep, and you can remain awake during a long rest and still gain its benefits.
This sweet, amber-colored brew has no effect on creatures that don't require sleep, such as elves.`,
    description:
      'A comforting clarity settles over your mind. The usual pull of exhaustion fades into the background, replaced by a steady, restful alertness. Your body feels relaxed, yet your senses remain sharp, allowing you to stay vigilant without the weight of fatigue.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_20.webp',
    count: 0,
  },
  {
    id: 21,
    name: 'TODO',
    ingredients: [
      { count: 1, id: 31 },
      { count: 3, id: 32 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_21.webp',
    count: 0,
  },
  {
    id: 22,
    name: 'Healing Mist',
    ingredients: [
      { count: 2, id: 39 },
      { count: 2, id: 42 },
    ],
    effect: 'For one hour anyone you touch feels ticklish for one minute.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_22.webp',
    count: 0,
  },
  {
    id: 23,
    name: 'Furry Floof Tonic',
    ingredients: [
      { count: 1, id: 40 },
      { count: 1, id: 41 },
      { count: 1, id: 42 },
    ],
    effect:
      'Your body always has a comfortable temperature, even in extreme cold or heat.',
    description:
      'Upon drinking this tonic, the drinker grows a soft layer of fluffy, downy hair across their body. The fur provides gentle warmth and insulation, giving them the cozy appearance of a winter creature.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_23.webp',
    count: 0,
  },
  {
    id: 24,
    name: 'Night Vision Tea',
    ingredients: [
      { count: 1, id: 1 },
      { count: 3, id: 8 },
    ],
    effect:
      'Everything you say is sung in an opera voice instead for 2 minutes.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_24.webp',
    count: 0,
  },
  {
    id: 25,
    name: 'Smoke grenade',
    ingredients: [
      { count: 1, id: 3 },
      { count: 3, id: 45 },
    ],
    effect: `As an action, a character can throw a grenade at a point up to 60 feet away. One round after a smoke grenade lands, it emits a cloud of smoke that creates a heavily obscured area in a 20-foot radius. A moderate wind (at least 10 miles per hour) disperses the smoke in 4 rounds; a strong wind (20 or more miles per hour) disperses it in 1 round.`,
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_25.webp',
    count: 0,
    description:
      'This small, spherical container hums faintly with contained energy, its surface etched with swirling patterns resembling rising smoke. When thrown, it shatters with a sharp crack, releasing a thick, billowing cloud of smoke that blankets the area in a dense, obscuring fog.',
  },
  {
    id: 26,
    name: 'Potion of Greater Healing',
    ingredients: [
      { count: 2, id: 12 },
      { count: 2, id: 11 },
    ],
    effect: 'Heals the drinker for 4d4 + 4 hit points.',
    description:
      'The moment this warm, slightly tangy liquid touches your lips, a soothing energy spreads through your body. Wounds knit together, bruises fade, and a revitalizing warmth fills your limbs, replacing pain with a gentle surge of renewed strength.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_26.webp',
    count: 0,
  },
  {
    id: 27,
    name: 'Fear Calming Elixir',
    ingredients: [
      { count: 2, id: 14 },
      { count: 1, id: 15 },
    ],
    effect: 'Immune to being frightened for 1 minute.',
    description: `Drinking this elixir brings an immediate wave of soothing calm, as if a comforting presence has settled deep within. The drinker's heart steadies, their mind clears, and even the most terrifying sights fail to unsettle them, leaving them calm and resolute in the face of fear.`,
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_27.webp',
    count: 0,
  },
  {
    id: 28,
    name: 'Frostshield Brew',
    ingredients: [
      { count: 1, id: 20 },
      { count: 2, id: 22 },
    ],
    effect: 'Grants resistance to cold damage for 1 hour.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_28.webp',
    count: 0,
  },
  {
    id: 29,
    name: 'Insight Elixir',
    ingredients: [
      { count: 2, id: 25 },
      { count: 1, id: 33 },
    ],
    effect: 'Advantage on insight checks for 1 hour.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_29.webp',
    count: 0,
  },
  {
    id: 30,
    name: 'Invisibility Tonic',
    ingredients: [{ count: 3, id: 34 }],
    effect: 'You completely turn to stone for 30 seconds.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_30.webp',
    count: 0,
  },
  {
    id: 31,
    name: 'TODO',
    ingredients: [
      { count: 1, id: 35 },
      { count: 3, id: 43 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_31.webp',
    count: 0,
  },
  {
    id: 32,
    name: 'TODO',
    ingredients: [
      { count: 1, id: 44 },
      { count: 2, id: 45 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_32.webp',
    count: 0,
  },
  {
    id: 33,
    name: `Mage's Bane Potion`,
    ingredients: [
      { count: 2, id: 3 },
      { count: 2, id: 20 },
    ],
    description:
      'When the potion is applied, the weapon shimmers faintly with shifting arcs of violet and silver light, as if rippling with trapped magical energy. Upon striking a target, the energy surges into them, briefly illuminating your body with flickering, fading glyphs as the magic forcefully disrupts their arcane reserves.',
    effect:
      'For one action this potion can be applied to a melee weapon, ranged weapon or projectile. The first target hit by the weapon burns their lowest-level available spell slot, losing access to that magic until it can be restored by normal means. Targets without spell slots remain unaffected.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_33.webp',
    count: 0,
  },
  {
    id: 34,
    name: 'Chillwind Draught',
    ingredients: [
      { count: 1, id: 14 },
      { count: 3, id: 22 },
    ],
    effect: 'Grants resistance to fire damage for 1 hour.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_34.webp',
    count: 0,
  },
  {
    id: 35,
    name: 'Silent Steps Elixir',
    ingredients: [
      { count: 2, id: 15 },
      { count: 2, id: 25 },
    ],
    description:
      'Your movements becomes unnaturally smooth and soundless, as if your very presence is cushioned by an invisible force. In addition a subtle shadow-like aura seems to blur your outline, making you blend seamlessly into your surroundings.',
    effect: 'Throw an additional 1d8 when rolling for stealth',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 36,
    name: 'Stone Skin Draught',
    ingredients: [
      { count: 1, id: 33 },
      { count: 3, id: 34 },
    ],
    effect:
      'Turns the skin into stone-like material, granting temporary hit points (1d6) for 1 hour.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 37,
    name: 'TODO',
    ingredients: [
      { count: 2, id: 43 },
      { count: 2, id: 45 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 38,
    name: 'TODO',
    ingredients: [
      { count: 3, id: 44 },
      { count: 1, id: 12 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 39,
    name: 'Armor of Frost',
    ingredients: [
      { count: 1, id: 4 },
      { count: 1, id: 35 },
      { count: 1, id: 7 },
    ],
    effect:
      'For the next minute, your Armor Class is increased by 1 and any creature that hits you with a melee attack takes 1d4 cold damage and has their movement reduced by half until the end of their next turn.',
    description:
      'As the potion takes effect, a shimmering layer of frost envelops your body, forming a crystalline armor that glints with icy blue hues. Your breath turns to mist, and the frost absorbs impacts like a protective shield.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 40,
    name: 'TODO',
    ingredients: [
      { count: 2, id: 3 },
      { count: 2, id: 15 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 41,
    name: 'TODO',
    ingredients: [
      { count: 3, id: 14 },
      { count: 1, id: 25 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 42,
    name: 'TODO',
    ingredients: [
      { count: 2, id: 4 },
      { count: 2, id: 43 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 43,
    name: 'Decurse Draught',
    ingredients: [
      { count: 1, id: 6 },
      { count: 1, id: 9 },
      { count: 1, id: 37 },
    ],
    effect:
      'Can be applied to an object or consumed by a creature. All curses affecting the target end. If the object is a cursed magic item, its curse remains, but the effect breaks its owner’s attunement to the object so it can be removed or discarded.',
    description:
      'Upon drinking or applying this shimmering silver potion, a soothing warmth spreads through the target, unraveling unseen chains of dark magic. A faint hum fills the air as lingering curses dissolve, leaving behind a sense of clarity and relief, while cursed items loosen their grip, allowing their owners to break free at last.',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 44,
    name: 'Polyjuice potion',
    ingredients: [
      { count: 1, id: 10 },
      { count: 1, id: 19 },
      { count: 1, id: 36 },
    ],
    effect:
      'For the next hour, you take on the exact appearance of another creature whose hair, blood, or other genetic material was added to the potion. Your voice, scent, and physical form perfectly mimic the target, though your abilities remain unchanged.',
    description:
      'Upon drinking this thick, bubbling potion, the drinker’s body twists and morphs, bones shifting and muscles reshaping with an unsettling sensation. Within moments, they have seamlessly taken on the appearance of the chosen individual, indistinguishable from the original in every physical detail.',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 45,
    name: 'Potion of Superior Healing',
    ingredients: [
      { count: 2, id: 21 },
      { count: 2, id: 36 },
      { count: 2, id: 12 },
      { count: 2, id: 11 },
    ],
    effect: 'Heals the drinker for 8d4 + 8 hit points.',
    description:
      'The moment this warm, slightly tangy liquid touches your lips, a soothing energy spreads through your body. Wounds knit together, bruises fade, and a revitalizing warmth fills your limbs, replacing pain with a gentle surge of renewed strength.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_26.webp',
    count: 0,
  },
  {
    id: 46,
    name: 'TODO',
    ingredients: [
      { count: 1, id: 37 },
      { count: 3, id: 46 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 47,
    name: 'TODO',
    ingredients: [{ count: 4, id: 47 }],
    effect: 'TODO',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 48,
    name: 'TODO',
    ingredients: [
      { count: 2, id: 6 },
      { count: 2, id: 21 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 49,
    name: 'TODO',
    ingredients: [
      { count: 3, id: 10 },
      { count: 1, id: 37 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 50,
    name: 'TODO',
    ingredients: [
      { count: 2, id: 19 },
      { count: 2, id: 46 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 51,
    name: 'TODO',
    ingredients: [
      { count: 1, id: 27 },
      { count: 1, id: 38 },
      { count: 1, id: 48 },
    ],
    effect: 'TODO',
    strength: PotionStrength.Mythic,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 52,
    name: 'Potion of Giant Size',
    ingredients: [
      { count: 1, id: 27 },
      { count: 1, id: 48 },
      { count: 1, id: 50 },
    ],
    effect: `When you drink this potion, you become Huge for 24 hours if you are Medium or smaller, otherwise the potion does nothing. For that duration, your Strength becomes 25, if it isn't already higher, and your hit point maximum is doubled (your current hit points are doubled when you drink the potion). In addition, the reach of your melee attacks increases by 5 feet.
Everything you are carrying and wearing also increases in size for the duration. When rolling damage for weapons enlarged in this manner, roll three times the normal number of dice; for example, an enlarged longsword would deal 3d8 slashing damage (instead of 1d8), or 3d10 slashing damage (instead of 1d10) when used with two hands.
When the effect ends, any hit points you have above your hit point maximum become temporary hit points.`,
    description:
      'This potion is a pale white liquid made from the tongue of a giant clam, with a pungent aroma akin to that of rotting algae. It tastes sweet, however, when consumed.',
    strength: PotionStrength.Mythic,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 53,
    name: `Potion of Dragon's Majesty`,
    ingredients: [
      { count: 1, id: 38 },
      { count: 1, id: 48 },
      { count: 1, id: 49 },
    ],
    effect:
      'The transformation lasts for 1 hour. For the duration, you use the game statistics of the adult dragon instead of your own, but you retain your languages, personality, and memories. You can’t use a dragon’s Change Shape or its legendary or lair actions.',
    description:
      'This potion looks like liquid gold, with a single scale from a chromatic, gem, or metallic dragon suspended in it. When you drink this potion, you transform into an adult dragon of the same kind as the dragon the scale came from. Any equipment you are wearing or carrying melds into your new form or falls to the ground (your choice).',
    strength: PotionStrength.Mythic,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 54,
    name: 'Potion of Supreme Healing',
    ingredients: [
      { count: 4, id: 26 },
      { count: 5, id: 17 },
      { count: 2, id: 12 },
      { count: 2, id: 11 },
      { count: 2, id: 27 },
    ],
    effect: 'Heals the drinker for 10d4 + 20 hit points.',
    description:
      'The moment this warm, slightly tangy liquid touches your lips, a soothing energy spreads through your body. Wounds knit together, bruises fade, and a revitalizing warmth fills your limbs, replacing pain with a gentle surge of renewed strength.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_54.webp',
    count: 0,
  },
];
