import { Recipe } from "./recipe";

export const recipes: Recipe[] = [
    {
      id: 0,
      name: "Healing Tea",
      ingredients: [{ count: 1, value: 0 }],
      effect: "Grants minor healing (1d4 HP)."
    },
    {
      id: 1,
      name: "Burn Soothing Ointment",
      ingredients: [{ count: 2, value: 1 }],
      effect: "Soothes burns and minor wounds."
    },
    {
      id: 2,
      name: "Charisma Boost Elixir",
      ingredients: [{ count: 2, value: 2 }],
      effect: "Boosts charisma for an hour (+1 Charisma)."
    },
    {
      id: 3,
      name: "Focus Elixir",
      ingredients: [{ count: 2, value: 5 }],
      effect: "Grants advantage on concentration checks."
    },
    {
      id: 4,
      name: "Light Essence",
      ingredients: [{ count: 3, value: 7 }],
      effect: "Creates a potion that lights dim areas."
    },
    {
      id: 5,
      name: "Energy Drink",
      ingredients: [{ count: 2, value: 8 }],
      effect: "Temporarily reduces exhaustion by 1 level."
    },
    {
      id: 6,
      name: "Paralysis Paralysis",
      ingredients: [{ count: 2, value: 11 }],
      effect: "Diluted to cause paralysis for a short duration."
    },
    {
      id: 7,
      name: "Antidote to Minor Poison",
      ingredients: [{ count: 2, value: 13 }],
      effect: "Cures minor poisons."
    },
    {
      id: 8,
      name: "Necrotic Counter-Potion",
      ingredients: [{ count: 2, value: 16 }],
      effect: "Counteracts necrotic damage effects for 1 hour."
    },
    {
      id: 9,
      name: "Binding Elixir",
      ingredients: [{ count: 2, value: 17 }],
      effect: "Used in binding potions or spells."
    },
    {
      id: 10,
      name: "Nature’s Boost",
      ingredients: [{ count: 2, value: 18 }],
      effect: "Enhances nature-based spell effects for 1 hour."
    },
    {
      id: 11,
      name: "Darkvision Draught",
      ingredients: [{ count: 2, value: 26 }],
      effect: "Grants temporary darkvision (up to 30 feet) for 1 hour."
    },
    {
      id: 12,
      name: "Smoke Bomb Powder",
      ingredients: [{ count: 2, value: 23 }],
      effect: "Ground into powder for use in smoke bombs or obscuring potions."
    },
    {
      id: 13,
      name: "Fear Immunity Brew",
      ingredients: [{ count: 2, value: 24 }],
      effect: "Grants temporary immunity to fear effects for 1 hour."
    },
    {
      id: 14,
      name: "Minor Healing Salve",
      ingredients: [
        { count: 1, value: 0 },
        { count: 1, value: 11 }
      ],
      effect: "Minor healing (1d4 HP) and removes paralysis for a short time."
    },
    {
      id: 15,
      name: "Soothing Poultice",
      ingredients: [
        { count: 1, value: 1 },
        { count: 1, value: 13 }
      ],
      effect: "Soothes minor wounds and poisons (Cures poison for 1 hour)."
    },
    {
      id: 16,
      name: "Charisma Boost Tea",
      ingredients: [
        { count: 1, value: 2 },
        { count: 1, value: 5 }
      ],
      effect: "Boosts charisma for 1 hour (+1 Charisma) and grants advantage on concentration checks."
    },
    {
      id: 17,
      name: "Cooling Draught",
      ingredients: [
        { count: 1, value: 4 },
        { count: 1, value: 7 }
      ],
      effect: "Creates a mild cooling effect that soothes fever or heat."
    },
    {
      id: 18,
      name: "Antidote Elixir",
      ingredients: [
        { count: 1, value: 13 },
        { count: 1, value: 16 }
      ],
      effect: "Antidote to both minor poisons and necrotic damage."
    },
    {
      id: 19,
      name: "Energy Reviver",
      ingredients: [
        { count: 2, value: 8 },
        { count: 1, value: 5 }
      ],
      effect: "Temporarily reduces exhaustion and boosts focus for 1 hour."
    },
    {
      id: 20,
      name: "Paralysis Remedy",
      ingredients: [
        { count: 1, value: 11 },
        { count: 1, value: 16 }
      ],
      effect: "Used to counter paralysis or poison-induced paralysis."
    },
    {
      id: 21,
      name: "Stealthy Elixir",
      ingredients: [
        { count: 1, value: 17 },
        { count: 1, value: 15 }
      ],
      effect: "Enhances stealth in forested environments for 1 hour."
    },
    {
      id: 22,
      name: "Healing Mist",
      ingredients: [
        { count: 1, value: 0 },
        { count: 1, value: 16 }
      ],
      effect: "A refreshing mist that heals minor wounds and counteracts necrotic damage."
    },
    {
      id: 23,
      name: "Cold Resistance Tonic",
      ingredients: [
        { count: 1, value: 4 },
        { count: 1, value: 20 }
      ],
      effect: "Grants resistance to cold damage for 1 hour."
    },
    {
      id: 24,
      name: "Night Vision Tea",
      ingredients: [
        { count: 1, value: 26 },
        { count: 1, value: 10 }
      ],
      effect: "Grants darkvision and mild night vision effects for 1 hour."
    },
    {
      id: 25,
      name: "Nature's Shield",
      ingredients: [
        { count: 1, value: 18 },
        { count: 1, value: 22 }
      ],
      effect: "Enhances nature-based spells and temporarily grants resistance to physical damage."
    },
    {
      id: 26,
      name: "Mind Focus Draught",
      ingredients: [
        { count: 1, value: 5 },
        { count: 1, value: 14 }
      ],
      effect: "Boosts concentration and mental focus, granting advantage on Intelligence checks for 1 hour."
    }
  ];