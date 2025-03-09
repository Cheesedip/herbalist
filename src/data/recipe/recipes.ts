import { PotionStrength, Recipe } from './recipe';

export const recipes: Recipe[] = [
  {
    id: 0,
    name: 'Potion of Swift Scribbling',
    ingredients: [
      { count: 1, id: 0 },
      { count: 1, id: 1 },
      { count: 2, id: 2 },
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
    ingredients: [
      { count: 1, id: 5 },
      { count: 1, id: 2 },
      { count: 1, id: 8 },
    ],
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
      { count: 1, id: 8 },
      { count: 1, id: 16 },
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
      { count: 1, id: 23 },
      { count: 1, id: 24 },
    ],
    effect: 'Heals the drinker for 2d4 + 2 hit points.',
    description:
      'The moment this warm, slightly tangy liquid touches your lips, a soothing energy spreads through your body. Wounds knit together, bruises fade, and a revitalizing warmth fills your limbs, replacing pain with a gentle surge of renewed strength.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 4,
    name: 'Potion of Masked Scent',
    ingredients: [
      { count: 1, id: 26 },
      { count: 1, id: 28 },
    ],
    effect:
      'For the next 8 hours, you emit no body odor or scent, making it harder for animals or creatures to track you by smell.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 5,
    name: 'Potion of Nimble Digits',
    ingredients: [
      { count: 1, id: 31 },
      { count: 1, id: 39 },
    ],
    effect:
      'For the next hour, your fingers are unusually dexterous, giving you advantage on Sleight of Hand checks involving delicate tasks (picking locks, performing tricks, sewing, etc.).',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 6,
    name: 'Potion of Endless Breath',
    ingredients: [
      { count: 1, id: 41 },
      { count: 2, id: 0 },
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
      { count: 1, id: 7 },
      { count: 1, id: 8 },
      { count: 1, id: 18 },
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
      { count: 1, id: 11 },
      { count: 1, id: 18 },
      { count: 1, id: 16 },
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
      { count: 2, id: 23 },
      { count: 1, id: 24 },
    ],
    effect:
      'For 1 hour, any non-living object you carry feels 50% lighter, though its actual weight remains the same.',
    description:
      'As the cool, effervescent potion takes effect, a strange sensation washes over your arms and shoulders. The strain of heavy burdens fades, replaced by an effortless ease, as if the weight of your gear has been lifted by an unseen force, making even the heaviest loads feel manageable.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 10,
    name: 'Potion of Harmonious Presence',
    ingredients: [
      { count: 1, id: 18 },
      { count: 1, id: 7 },
      { count: 1, id: 2 },
    ],
    effect:
      'For the next 4 hours, minor social faux pas (like interrupting someone or forgetting a name) are overlooked or easily forgiven by those around you.',
    description:
      'A calming aura surrounds you. Awkward moments slip by unnoticed, and those around you seem naturally inclined to view your actions with warmth and understanding, smoothing over social missteps with ease.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 11,
    name: 'Darkvision Draught',
    ingredients: [
      { count: 1, id: 31 },
      { count: 1, id: 28 },
      { count: 1, id: 39 },
    ],
    effect: 'Grants temporary darkvision (up to 30 feet) for 1 hour.',
    description:
      'A tingling sensation spreads behind your eyes. The darkness around you gradually shifts, shadows sharpening into clear shapes, and the once-impenetrable gloom now reveals its hidden details in shades of gray.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 12,
    name: 'Potion of Lingering Warmth',
    ingredients: [
      { count: 1, id: 41 },
      { count: 2, id: 1 },
    ],
    effect:
      'You remain comfortably warm in cold weather for the next 24 hours, regardless of wind or frost.',
    description:
      'A comforting heat spreads through your body. The chill of the air around you fades, leaving you wrapped in a cozy warmth that shields you from the biting cold, no matter how harsh the weather becomes.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 13,
    name: 'Elixir of Iron Stomach',
    ingredients: [
      { count: 1, id: 0 },
      { count: 1, id: 5 },
      { count: 1, id: 7 },
    ],
    effect:
      'For the next 24 hours, you can safely consume any food or drink, no matter how spoiled, bitter, or unusual. You’re immune to mild food poisoning or discomfort caused by exotic cuisine.',
    description:
      'A warm, reassuring sensation fills your stomach. Any queasiness you might have felt from spoiled or strange foods vanishes, replaced by a newfound confidence in your ability to consume anything without harm or discomfort, no matter how unappealing it may seem.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_13.webp',
    count: 0,
  },
  {
    id: 14,
    name: 'Potion of Verdant Whispers',
    ingredients: [
      { count: 1, id: 24 },
      { count: 1, id: 28 },
      { count: 2, id: 39 },
    ],
    effect:
      'For the next 10 minutes, you can sense the general health and needs of plants within 30 feet.',
    description:
      'A faint hum resonates in your mind, as if the world around you is breathing in rhythm with nature. You can now sense the subtle needs of nearby plants—whether they crave sunlight, water, or simply need a gentle touch, their whispers echo in your thoughts.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 15,
    name: 'Soothing Poultice',
    ingredients: [{ count: 2, id: 11 }],
    effect:
      'Causes a deep, healing sleep and wards off nightmares for 8 hours. You gain the effect of a long rest and awake with 1d6 temporary hit points.',
    description:
      'A wave of relaxation washes over you. Your body begins to unwind, and soon you find yourself drifting into a peaceful, restorative sleep, free from the troubling dreams that usually plague your nights. You feel fully rested and at ease when you awaken, as if the sleep itself healed you.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 16,
    name: 'Potion of Underwater Breating',
    ingredients: [
      { count: 1, id: 23 },
      { count: 1, id: 26 },
      { count: 1, id: 39 },
    ],
    effect: 'You can breathe underwater for the next 20 minutes.',
    description:
      'Within moments of consuming the potion, small, webbed gills begin to form along your neck, allowing you to breathe in the water with ease.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 17,
    name: 'Anti Gravity Brew',
    ingredients: [
      { count: 2, id: 28 },
      { count: 1, id: 5 },
    ],
    effect: 'You become weightless for the next 1 minute',
    description:
      'A strange lightness fills your body. You feel gravity lose its grip on you, and within moments, you begin to float gently off the ground.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 18,
    name: 'Potion of Fertile Manure',
    ingredients: [
      { count: 1, id: 39 },
      { count: 1, id: 41 },
      { count: 1, id: 31 },
    ],
    effect:
      'After drinking the potion and consuming a seed, you vomit, and the plant or tree from the seed instantly grows before your eyes, flourishing in an instant.',
    description:
      'As you drink the potion, an earthy, pungent flavor lingers on your tongue. You then consume the seed, and a wave of discomfort hits you as your stomach churns. Moments later, you violently vomit, the seed sprouts immediately, growing rapidly into its full form. In mere seconds, a fully grown plant or tree stands where there was once only the seed.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 19,
    name: 'Potion of Erratic Teleportation',
    ingredients: [
      { count: 1, id: 7 },
      { count: 2, id: 11 },
    ],
    effect:
      'For the next 5 minutes you get hiccups (every two turns - 12 seconds), every time you hiccup, you teleport 15 feet in a random direction.',
    description:
      'Your body is plagued by an uncontrollable series of hiccups. Each time you hiccup, your body vanishes and reappears.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 20,
    name: 'Potion of Watchful Rest',
    ingredients: [
      { count: 1, id: 23 },
      { count: 2, id: 28 },
    ],
    effect: `When you drink this potion, you gain the following benefits for the next 8 hours: magic can't put you to sleep, and you can remain awake during a long rest and still gain its benefits.
This sweet, amber-colored brew has no effect on creatures that don't require sleep, such as elves.`,
    description:
      'A comforting clarity settles over your mind. The usual pull of exhaustion fades into the background, replaced by a steady, restful alertness. Your body feels relaxed, yet your senses remain sharp, allowing you to stay vigilant without the weight of fatigue.',
    strength: PotionStrength.Mild,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  // {
  //   id: 21,
  //   name: 'TODO',
  //   ingredients: [
  //     { count: 1, id: 31 },
  //     { count: 3, id: 32 },
  //   ],
  //   effect: 'TODO',
  //   strength: PotionStrength.Mild,
  //   imageUrl: 'assets/recipes/recipe_0.webp',
  //   count: 0,
  // },
  // {
  //   id: 22,
  //   name: 'Potion of Water Breathing',
  //   ingredients: [
  //     { count: 2, id: 39 },
  //     { count: 2, id: 42 },
  //   ],
  //   effect: 'When drunk, a creature can breathe underwater for 1 hour.',
  //   strength: PotionStrength.Mild,
  //   imageUrl: 'assets/recipes/recipe_0.webp',
  //   count: 0,
  // },
  {
    id: 23,
    name: 'Furry Floof Tonic',
    ingredients: [
      { count: 1, id: 31 },
      { count: 2, id: 41 },
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
    name: 'Potion of Mind Reading',
    ingredients: [
      { count: 1, id: 1 },
      { count: 3, id: 8 },
    ],
    effect:
      'When drunk, a creature gains the effect of the detect thoughts spell (save DC 13).',
    description:
      'Upon drinking, the imbiber’s mind opens to the thoughts of those around them, like a veil lifting to reveal a hidden world. ',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
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
      { count: 2, id: 1 },
    ],
    effect: 'Heals the drinker for 4d4 + 4 hit points.',
    description:
      'The moment this warm, slightly tangy liquid touches your lips, a soothing energy spreads through your body. Wounds knit together, bruises fade, and a revitalizing warmth fills your limbs, replacing pain with a gentle surge of renewed strength.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 27,
    name: 'Fear Calming Elixir',
    ingredients: [
      { count: 2, id: 14 },
      { count: 1, id: 15 },
    ],
    effect: 'Immune to being frightened for the next 1 minute.',
    description: `Drinking this elixir brings an immediate wave of soothing calm, as if a comforting presence has settled deep within. The drinker's heart steadies, their mind clears, and even the most terrifying sights fail to unsettle them, leaving them calm and resolute in the face of fear.`,
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_27.webp',
    count: 0,
  },
  {
    id: 28,
    name: 'Potion of Noxious Winds',
    ingredients: [
      { count: 1, id: 20 },
      { count: 2, id: 22 },
    ],
    effect:
      'For 30 seconds, a gas cloud with a 20-foot radius surrounds you. Anyone within this cloud must make a DC 10 Constitution saving throw or take 1d4 poison damage at the start of their turn.',
    description:
      'Upon drinking this potion, you release an intensely foul and toxic fart, creating a noxious gas cloud that surrounds you for the next 30 seconds. The air becomes thick with poison, and those unfortunate enough to be caught within it suffer from the poisonous fumes.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  // {
  //   id: 29,
  //   name: 'Insight Elixir',
  //   ingredients: [
  //     { count: 2, id: 25 },
  //     { count: 1, id: 33 },
  //   ],
  //   effect: 'Advantage on insight checks for 1 hour.',
  //   strength: PotionStrength.Potent,
  //   imageUrl: 'assets/recipes/recipe_29.webp',
  //   count: 0,
  // },
  // {
  //   id: 30,
  //   name: 'Invisibility Tonic',
  //   ingredients: [{ count: 3, id: 34 }],
  //   effect: 'You completely turn to stone for 30 seconds.',
  //   strength: PotionStrength.Potent,
  //   imageUrl: 'assets/recipes/recipe_30.webp',
  //   count: 0,
  // },
  // {
  //   id: 31,
  //   name: 'TODO',
  //   ingredients: [
  //     { count: 1, id: 35 },
  //     { count: 3, id: 43 },
  //   ],
  //   effect: 'TODO',
  //   strength: PotionStrength.Potent,
  //   imageUrl: 'assets/recipes/recipe_31.webp',
  //   count: 0,
  // },
  // {
  //   id: 32,
  //   name: 'TODO',
  //   ingredients: [
  //     { count: 1, id: 44 },
  //     { count: 2, id: 45 },
  //   ],
  //   effect: 'TODO',
  //   strength: PotionStrength.Potent,
  //   imageUrl: 'assets/recipes/recipe_32.webp',
  //   count: 0,
  // },
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
  // {
  //   id: 34,
  //   name: 'Chillwind Draught',
  //   ingredients: [
  //     { count: 1, id: 14 },
  //     { count: 3, id: 22 },
  //   ],
  //   effect: 'Grants resistance to fire damage for 1 hour.',
  //   strength: PotionStrength.Potent,
  //   imageUrl: 'assets/recipes/recipe_34.webp',
  //   count: 0,
  // },
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
  // {
  //   id: 36,
  //   name: 'Stone Skin Draught',
  //   ingredients: [
  //     { count: 1, id: 33 },
  //     { count: 3, id: 34 },
  //   ],
  //   effect:
  //     'Turns the skin into stone-like material, granting temporary hit points (1d6) for 1 hour.',
  //   strength: PotionStrength.Potent,
  //   imageUrl: 'assets/recipes/recipe_0.webp',
  //   count: 0,
  // },
  // {
  //   id: 37,
  //   name: 'TODO',
  //   ingredients: [
  //     { count: 2, id: 43 },
  //     { count: 2, id: 45 },
  //   ],
  //   effect: 'TODO',
  //   strength: PotionStrength.Potent,
  //   imageUrl: 'assets/recipes/recipe_0.webp',
  //   count: 0,
  // },
  // {
  //   id: 38,
  //   name: 'TODO',
  //   ingredients: [
  //     { count: 3, id: 44 },
  //     { count: 1, id: 12 },
  //   ],
  //   effect: 'TODO',
  //   strength: PotionStrength.Potent,
  //   imageUrl: 'assets/recipes/recipe_0.webp',
  //   count: 0,
  // },
  {
    id: 39,
    name: 'Armor of Frost',
    ingredients: [
      { count: 1, id: 4 },
      { count: 1, id: 35 },
      { count: 1, id: 2 },
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
    name: 'Potion of Feign Death',
    ingredients: [
      { count: 1, id: 3 },
      { count: 1, id: 15 },
      { count: 1, id: 35 },
    ],
    effect:
      'You drop to 1 hp, appear dead, with no heartbeat or breath for the next 1 hour or until you decide to take your next action, bonus action or reaction.',
    description:
      'Upon drinking this potion, your body immediately goes into a deathlike state. Your breathing ceases, your heart stops, and you appear lifeless. For the next hour, you are undetectable by normal means, showing no signs of life, as if you are truly deceased. While in this state, and you remain unresponsive to external stimuli until the potion’s effects wear off.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 41,
    name: 'Potion of Fire Breath',
    ingredients: [
      { count: 3, id: 14 },
      { count: 1, id: 25 },
    ],
    effect:
      'When drunk, a creature can use its bonus action to exhale fire at a target within 30 feet. The target must take 4d6 fire damage or succeed on a DC 13 Dexterity saving throw to halve the damage. The effect ends after exhaling fire 3 times, or after 1 hour.',
    description:
      'A warm, tingling sensation fills the throat, and a burning heat builds within.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 42,
    name: 'Potion of Invulnerability',
    ingredients: [
      { count: 2, id: 4 },
      { count: 2, id: 43 },
    ],
    effect:
      'When drunk, a creature gains resistance to all damage for 1 minute.',
    description:
      'Drinking this potion envelops the consumer in a shimmering aura of protective energy',
    strength: PotionStrength.Infused,
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
      { count: 2, id: 35 },
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
      { count: 2, id: 12 },
      { count: 2, id: 0 },
      { count: 2, id: 22 },
    ],
    effect: 'Heals the drinker for 8d4 + 8 hit points.',
    description:
      'The moment this warm, slightly tangy liquid touches your lips, a soothing energy spreads through your body. Wounds knit together, bruises fade, and a revitalizing warmth fills your limbs, replacing pain with a gentle surge of renewed strength.',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 46,
    name: 'Potion of Manic Energy',
    ingredients: [
      { count: 1, id: 37 },
      { count: 2, id: 20 },
    ],
    effect: `Until your next long rest you either become 'Very Happy' (+2 char and +1 dex) or 'Very Sad' (-2 char and -1 dex)`,
    description:
      'After drinking the potion, you may feel incredibly cheerful and outgoing, or you may become despondent, losing confidence and agility. The mood shift lasts until your next long rest.',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 47,
    name: 'Potion of heroism',
    ingredients: [
      { count: 3, id: 12 },
      { count: 1, id: 4 },
    ],
    effect:
      'When drunk, a creature gains 10 temporary HP that last for 1 hour as well as the effects of the bless spell (no concentration required) for the same duration.',
    description:
      'A surge of vitality and courage courses through the body. The drinker feels an immediate sense of strength and confidence, as though they have been blessed by a divine force.',
    strength: PotionStrength.Potent,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 48,
    name: 'Potion of Invisibility',
    ingredients: [
      { count: 2, id: 6 },
      { count: 1, id: 45 },
    ],
    effect:
      'When drunk, a creature becomes invisible for 1 hour along with anything it’s carrying or wearing. The effect ends early if the creature makes an attack or casts a spell.',
    description:
      'The world around you seems to blur and fade, as if your very presence is being erased. A subtle, almost imperceptible shimmer dances across your body, and suddenly, you vanish from sight',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  // {
  //   id: 49,
  //   name: 'TODO',
  //   ingredients: [
  //     { count: 3, id: 10 },
  //     { count: 1, id: 37 },
  //   ],
  //   effect: 'TODO',
  //   strength: PotionStrength.Infused,
  //   imageUrl: 'assets/recipes/recipe_0.webp',
  //   count: 0,
  // },
  {
    id: 50,
    name: 'Potion of Longevity',
    ingredients: [
      { count: 2, id: 19 },
      { count: 1, id: 43 },
    ],
    effect:
      'When drunk, a creature’s physical age is reduced by 1d6 + 6 years, to a minimum of 13 years. Each subsequent time a creature drinks this potion, there is 10% cumulative chance that it will instead age 1d6 +6 years.',
    description:
      'This rare elixir shimmers with a soft glow, promising the fleeting gift of time. Upon drinking your skin smooths and your vitality returns. It’s as if the hands of time have been reversed, though the potion’s effects are not without risk. Each use carries the danger of overindulgence, causing the drinker to age prematurely with each subsequent sip. The temptation of eternal youth comes at a cost—some find themselves trapped in an unending cycle of both rejuvenation and decay.',
    strength: PotionStrength.Mythic,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 51,
    name: 'Oil of Sharpness',
    ingredients: [
      { count: 1, id: 38 },
      { count: 1, id: 48 },
      { count: 1, id: 25 },
    ],
    effect:
      'The vial has enough oil to coat one slashing or piercing weapon or up to 5 pieces of ammunition; 1 minute to apply. The coated item has a +3 bonus to attack and damage rolls for 1 hour.',
    description: 'A silvery gleaming oil',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
  {
    id: 52,
    name: 'Potion of Giant Size',
    ingredients: [
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
      { count: 1, id: 9 },
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
      { count: 2, id: 12 },
      { count: 2, id: 10 },
      { count: 1, id: 9 },
    ],
    effect: 'Heals the drinker for 10d4 + 20 hit points.',
    description:
      'The moment this warm, slightly tangy liquid touches your lips, a soothing energy spreads through your body. Wounds knit together, bruises fade, and a revitalizing warmth fills your limbs, replacing pain with a gentle surge of renewed strength.',
    strength: PotionStrength.Infused,
    imageUrl: 'assets/recipes/recipe_0.webp',
    count: 0,
  },
];
