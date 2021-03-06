const BIOMES_ANY = [
    "ALL_MAIN",
    "ANY_LAND",
    "ANY_OCEAN",
    "ANY_LAKE",
    "ANY_TEMPERATE_LAKE",
    "ANY_TROPICAL_LAKE",
    "ANY_RIVER",
    "ANY_TEMPERATE_RIVER",
    "ANY_TROPICAL_RIVER",
    "ANY_POOL",
    "NOT_FREEZING",
    "ANY_TEMPERATE",
    "ANY_TROPICAL",
    "ANY_FOREST",
    "ANY_SHRUBLAND",
    "ANY_GRASSLAND",
    "ANY_SAVANNA",
    "ANY_TEMPERATE_FOREST",
    "ANY_TROPICAL_FOREST",
    "ANY_TEMPERATE_BROADLEAF",
    "ANY_TROPICAL_BROADLEAF",
    "ANY_WETLAND",
    "ANY_TROPICAL_WETLAND",
    "ANY_TEMPERATE_WETLAND",
    "ANY_TROPICAL_MARSH",
    "ANY_TEMPERATE_MARSH",
    "ANY_TROPICAL_SWAMP",
    "ANY_TEMPERATE_SWAMP",
    "ANY_DESERT"
]

const BIOMES_SPECIFIC = [
    "MOUNTAIN",
    "SWAMP_TEMPERATE_FRESHWATER",
    "SWAMP_TEMPERATE_SALTWATER",
    "MARSH_TEMPERATE_FRESHWATER",
    "MARSH_TEMPERATE_SALTWATER",
    "SWAMP_TROPICAL_FRESHWATER",
    "SWAMP_TROPICAL_SALTWATER",
    "SWAMP_MANGROVE",
    "MARSH_TROPICAL_FRESHWATER",
    "MARSH_TROPICAL_SALTWATER",
    "FOREST_TAIGA",
    "TAIGA",
    "FOREST_TEMPERATE_BROADLEAF",
    "FOREST_TROPICAL_CONIFER",
    "FOREST_TROPICAL_DRY_BROADLEAF",
    "FOREST_TROPICAL_MOIST_BROADLEAF",
    "GRASSLAND_TEMPERATE",
    "SAVANNA_TEMPERATE",
    "SHRUBLAND_TEMPERATE",
    "GRASSLAND_TROPICAL",
    "SAVANNA_TROPICAL",
    "SHRUBLAND_TROPICAL",
    "DESERT_BADLAND",
    "DESERT_ROCK",
    "DESERT_SAND",
    "OCEAN_TROPICAL",
    "OCEAN_TEMPERATE",
    "OCEAN_ARCTIC",
    "POOL_TEMPERATE_FRESHWATER",
    "POOL_TEMPERATE_BRACKISHWATER",
    "POOL_TEMPERATE_SALTWATER",
    "POOL_TROPICAL_FRESHWATER",
    "POOL_TROPICAL_BRACKISHWATER",
    "POOL_TROPICAL_SALTWATER",
    "LAKE_TEMPERATE_FRESHWATER",
    "LAKE_TEMPERATE_BRACKISHWATER",
    "LAKE_TEMPERATE_SALTWATER",
    "LAKE_TROPICAL_FRESHWATER",
    "LAKE_TROPICAL_BRACKISHWATER",
    "LAKE_TROPICAL_SALTWATER",
    "RIVER_TEMPERATE_FRESHWATER",
    "RIVER_TEMPERATE_BRACKISHWATER",
    "RIVER_TEMPERATE_SALTWATER",
    "RIVER_TROPICAL_FRESHWATER",
    "RIVER_TROPICAL_BRACKISHWATER",
    "RIVER_TROPICAL_SALTWATER",
    "SUBTERRANEAN_WATER",
    "SUBTERRANEAN_CHASM",
    "SUBTERRANEAN_LAVA"
];

const BIOMES = BIOMES_ANY.concat(BIOMES_SPECIFIC);

const ALL_SKILLS = [
    "MINING", "WOODCUTTING", "CARPENTRY", "DETAILSTONE", "MASONRY", "ANIMALTRAIN", "ANIMALCARE", "DISSECT_FISH", "DISSECT_VERMIN", "PROCESSFISH",
    "BUTCHER", "TRAPPING", "TANNER", "WEAVING", "BREWING", "ALCHEMY", "CLOTHESMAKING", "MILLING", "PROCESSPLANTS", "CHEESEMAKING", "MILK", "COOK",
    "PLANT", "HERBALISM", "FISH", "SMELT", "EXTRACT_STRAND", "FORGE_WEAPON", "FORGE_ARMOR", "FORGE_FURNITURE", "CUTGEM", "ENCRUSTGEM",
    "WOODCRAFT", "STONECRAFT", "METALCRAFT", "GLASSMAKER", "LEATHERWORK", "BONECARVE", 
    "AXE", "SWORD", "DAGGER", "MACE", "HAMMER", "SPEAR", "CROSSBOW", "SHIELD", "ARMOR", "SIEGECRAFT", "SIEGEOPERATE", 
    "BOWYER", "PIKE", "WHIP", "BOW", "BLOWGUN", "THROW",
    "MECHANICS", "MAGIC_NATURE", "SNEAK", "DESIGNBUILDING", "DRESS_WOUNDS", "DIAGNOSE", "SURGERY", "SET_BONE", "SUTURE", "CRUTCH_WALK",
    "WOOD_BURNING", "LYE_MAKING", "SOAP_MAKING", "POTASH_MAKING", "DYER", "OPERATE_PUMP",
    "SWIMMING",
    "PERSUASION", "NEGOTIATION", "JUDGING_INTENT", "APPRAISAL", "ORGANIZATION", "RECORD_KEEPING", "LYING", "INTIMIDATION", "CONVERSATION",
    "COMEDY", "FLATTERY", "CONSOLE", "PACIFY", "TRACKING", "KNOWLEDGE_ACQUISITION", "CONCENTRATION", "DISCIPLINE", "SITUATIONAL_AWARENESS",
    "WRITING", "PROSE", "POETRY", "READING", "SPEAKING", "COORDINATION", "BALANCE", "LEADERSHIP", "TEACHING", 
    "MELEE_COMBAT", "RANGED_COMBAT", "WRESTLING", "BITE", "GRASP_STRIKE", "STANCE_STRIKE", "DODGING", "MISC_WEAPON", "KNAPPING", "MILITARY_TACTICS",
    "SHEARING", "SPINNING", "POTTERY", "GLAZING", "PRESSING", "BEEKEEPING", "WAX_WORKING", "CLIMBING", "GELD", 
    "DANCE", "MAKE_MUSIC", "SING", "PLAY_KEYBOARD_INSTRUMENT", "PLAY_STRINGED_INSTRUMENT", "PLAY_WIND_INSTRUMENT", "PLAY_PERCUSSION_INSTRUMENT",
    "CRITICAL_THINKING", "LOGIC", "MATHEMATICS", "ASTRONOMY", "CHEMISTRY", "GEOGRAPHY", "OPTICS_ENGINEER", "FLUID_ENGINEER", 
    "PAPERMAKING", "BOOKBINDING", "INTRIGUE", "RIDING"
];

const PHYSICAL_ATTRIBUTES = [
    "STRENGTH", "AGILITY", "TOUGHNESS", "ENDURANCE", 
    "RECUPERATION", "DISEASE_RESISTANCE"
];

const MENTAL_ATTRIBUTES = [
    "ANALYTICAL_ABILITY", "FOCUS", "WILLPOWER", "PATIENCE", "MEMORY", "LINGUISTIC_ABILITY", "MUSICALITY", "SOCIAL_AWARENESS"
];

const ALL_ATTRIBUTES =  PHYSICAL_ATTRIBUTES.concat(MENTAL_ATTRIBUTES);

const PERSONALITY_TRAITS_FACETS = [
    "LOVE_PROPENSITY",
    "HATE_PROPENSITY",
    "ENVY_PROPENSITY",
    "CHEER_PROPENSITY",
    "DEPRESSION_PROPENSITY",
    "ANGER_PROPENSITY",
    "ANXIETY_PROPENSITY",
    "LUST_PROPENSITY",
    "STRESS_VULNERABILITY",
    "GREED",
    "IMMODERATION",
    "VIOLENT",
    "PERSEVERANCE",
    "WASTEFULNESS",
    "DISCORD",
    "FRIENDLINESS",
    "POLITENESS",
    "DISDAIN_ADVICE",
    "BRAVERY",
    "CONFIDENCE",
    "VANITY",
    "AMBITION",
    "GRATITUDE",
    "IMMODESTY",
    "HUMOR",
    "VENGEFUL",
    "PRIDE",
    "CRUELTY",
    "SINGLEMINDED",
    "HOPEFUL",
    "CURIOUS",
    "BASHFUL",
    "PRIVACY",
    "PERFECTIONIST",
    "CLOSEMINDED",
    "TOLERANT",
    "EMOTIONALLY_OBSESSIVE",
    "SWAYED_BY_EMOTIONS",
    "ALTRUISM",
    "DUTIFULNESS",
    "THOUGHTLESSNESS",
    "ORDERLINESS",
    "TRUST",
    "GREGARIOUSNESS",
    "ASSERTIVENESS",
    "ACTIVITY_LEVEL",
    "EXCITEMENT_SEEKING",
    "IMAGINATION",
    "ABSTRACT_INCLINED",
    "ART_INCLINED"
];

const CREATURE_FLAGS = [
    "ALL_CASTES_ALIVE",
    "ARTIFICIAL_HIVEABLE",
    "BIOME_DESERT_BADLAND",
    "BIOME_DESERT_ROCK",
    "BIOME_DESERT_SAND",
    "BIOME_FOREST_TAIGA",
    "BIOME_FOREST_TEMPERATE_BROADLEAF",
    "BIOME_FOREST_TEMPERATE_CONIFER",
    "BIOME_FOREST_TROPICAL_CONIFER",
    "BIOME_FOREST_TROPICAL_DRY_BROADLEAF",
    "BIOME_FOREST_TROPICAL_MOIST_BROADLEAF",
    "BIOME_GLACIER",
    "BIOME_GRASSLAND_TEMPERATE",
    "BIOME_GRASSLAND_TROPICAL",
    "BIOME_LAKE_TEMPERATE_BRACKISHWATER",
    "BIOME_LAKE_TEMPERATE_FRESHWATER",
    "BIOME_LAKE_TEMPERATE_SALTWATER",
    "BIOME_LAKE_TROPICAL_BRACKISHWATER",
    "BIOME_LAKE_TROPICAL_FRESHWATER",
    "BIOME_LAKE_TROPICAL_SALTWATER",
    "BIOME_MARSH_TEMPERATE_FRESHWATER",
    "BIOME_MARSH_TEMPERATE_SALTWATER",
    "BIOME_MARSH_TROPICAL_FRESHWATER",
    "BIOME_MARSH_TROPICAL_SALTWATER",
    "BIOME_MOUNTAIN",
    "BIOME_OCEAN_ARCTIC",
    "BIOME_OCEAN_TEMPERATE",
    "BIOME_OCEAN_TROPICAL",
    "BIOME_POOL_TEMPERATE_BRACKISHWATER",
    "BIOME_POOL_TEMPERATE_FRESHWATER",
    "BIOME_POOL_TEMPERATE_SALTWATER",
    "BIOME_POOL_TROPICAL_BRACKISHWATER",
    "BIOME_POOL_TROPICAL_FRESHWATER",
    "BIOME_POOL_TROPICAL_SALTWATER",
    "BIOME_RIVER_TEMPERATE_BRACKISHWATER",
    "BIOME_RIVER_TEMPERATE_FRESHWATER",
    "BIOME_RIVER_TEMPERATE_SALTWATER",
    "BIOME_RIVER_TROPICAL_BRACKISHWATER",
    "BIOME_RIVER_TROPICAL_FRESHWATER",
    "BIOME_RIVER_TROPICAL_SALTWATER",
    "BIOME_SAVANNA_TEMPERATE",
    "BIOME_SAVANNA_TROPICAL",
    "BIOME_SHRUBLAND_TEMPERATE",
    "BIOME_SHRUBLAND_TROPICAL",
    "BIOME_SUBTERRANEAN_CHASM",
    "BIOME_SUBTERRANEAN_LAVA",
    "BIOME_SUBTERRANEAN_WATER",
    "BIOME_SWAMP_MANGROVE",
    "BIOME_SWAMP_TEMPERATE_FRESHWATER",
    "BIOME_SWAMP_TEMPERATE_SALTWATER",
    "BIOME_SWAMP_TROPICAL_FRESHWATER",
    "BIOME_SWAMP_TROPICAL_SALTWATER",
    "BIOME_TUNDRA",
    "DOES_NOT_EXIST",
    "EQUIPMENT",
    "EQUIPMENT_WAGON",
    "EVIL",
    "FANCIFUL",
    "GENERATED",
    "GOOD",
    "HAS_ANY_BENIGN",
    "HAS_ANY_CANNOT_BREATHE_AIR",
    "HAS_ANY_CANNOT_BREATHE_WATER",
    "HAS_ANY_CAN_SWIM",
    "HAS_ANY_CARNIVORE",
    "HAS_ANY_COMMON_DOMESTIC",
    "HAS_ANY_CURIOUS_BEAST",
    "HAS_ANY_DEMON",
    "HAS_ANY_FEATURE_BEAST",
    "HAS_ANY_FLIER",
    "HAS_ANY_FLY_RACE_GAIT",
    "HAS_ANY_GRASP",
    "HAS_ANY_GRAZER",
    "HAS_ANY_HAS_BLOOD",
    "HAS_ANY_IMMOBILE",
    "HAS_ANY_INTELLIGENT_LEARNS",
    "HAS_ANY_INTELLIGENT_SPEAKS",
    "HAS_ANY_LARGE_PREDATOR",
    "HAS_ANY_LOCAL_POPS_CONTROLLABLE",
    "HAS_ANY_LOCAL_POPS_PRODUCE_HEROES",
    "HAS_ANY_MEGABEAST",
    "HAS_ANY_MISCHIEVIOUS",
    "HAS_ANY_NATURAL_ANIMAL",
    "HAS_ANY_NIGHT_CREATURE",
    "HAS_ANY_NIGHT_CREATURE_BOGEYMAN",
    "HAS_ANY_NIGHT_CREATURE_EXPERIMENTER",
    "HAS_ANY_NIGHT_CREATURE_HUNTER",
    "HAS_ANY_NIGHT_CREATURE_NIGHTMARE",
    "HAS_ANY_NOT_FIREIMMUNE",
    "HAS_ANY_NOT_FLIER",
    "HAS_ANY_NOT_LIVING",
    "HAS_ANY_OUTSIDER_CONTROLLABLE",
    "HAS_ANY_POWER",
    "HAS_ANY_RACE_GAIT",
    "HAS_ANY_SEMIMEGABEAST",
    "HAS_ANY_SLOW_LEARNER",
    "HAS_ANY_SUPERNATURAL",
    "HAS_ANY_TITAN",
    "HAS_ANY_UNIQUE_DEMON",
    "HAS_ANY_UTTERANCES",
    "HAS_ANY_VERMIN_HATEABLE",
    "HAS_ANY_VERMIN_MICRO",
    "HAS_FEMALE",
    "HAS_MALE",
    "LARGE_ROAMING",
    "LOOSE_CLUSTERS",
    "MATES_TO_BREED",
    "MUNDANE",
    "OCCURS_AS_ENTITY_RACE",
    "SAVAGE",
    "SMALL_RACE",
    "TWO_GENDERS",
    "UBIQUITOUS",
    "VERMIN_EATER",
    "VERMIN_FISH",
    "VERMIN_GROUNDER",
    "VERMIN_ROTTER",
    "VERMIN_SOIL",
    "VERMIN_SOIL_COLONY"
];

const CASTE_FLAGS = [
    "ADOPTS_OWNER",
    "ALCOHOL_DEPENDENT",
    "ALL_ACTIVE",
    "AMBUSHPREDATOR",
    "AQUATIC_UNDERSWIM",
    "ARENA_RESTRICTED",
    "AT_PEACE_WITH_WILDLIFE",
    "BENIGN",
    "BLOODSUCKER",
    "BONECARN",
    "CANNOT_BREATHE_AIR",
    "CANNOT_CLIMB",
    "CANNOT_JUMP",
    "CANOPENDOORS",
    "CAN_BREATHE_WATER",
    "CAN_LEARN / INTELLIGENT_LEARNS",
    "CAN_SPEAK / INTELLIGENT_SPEAKS",
    "CAN_SWIM",
    "CAN_SWIM_INNATE",
    "CARNIVORE",
    "CAVE_ADAPT",
    "COLONY_EXTERNAL",
    "COMMON_DOMESTIC",
    "CONVERTED_SPOUSE",
    "COOKABLE_LIVE",
    "CRAZED",
    "CREPUSCULAR",
    "CURIOUS_BEAST",
    "CURIOUS_BEAST_EATER",
    "CURIOUS_BEAST_GUZZLER",
    "CURIOUS_BEAST_ITEM",
    "DEMON",
    "DIE_WHEN_VERMIN_BITE",
    "DIURNAL",
    "DIVE_HUNTS_VERMIN",
    "EQUIPS",
    "EXTRAVISION",
    "FEATURE_ATTACK_GROUP",
    "FEATURE_BEAST",
    "FIREIMMUNE",
    "FIREIMMUNE_SUPER",
    "FISHITEM",
    "FLEEQUICK",
    "FLIER",
    "GELDABLE",
    "GETS_INFECTIONS_FROM_ROT",
    "GETS_WOUND_INFECTIONS",
    "GNAWER",
    "GRAZER",
    "HASSHELL",
    "HAS_BABYSTATE",
    "HAS_BLOOD",
    "HAS_CHILDSTATE",
    "HAS_COLOR",
    "HAS_FLY_RACE_GAIT",
    "HAS_GLOW_COLOR",
    "HAS_GLOW_TILE",
    "HAS_GRASP",
    "HAS_NERVES",
    "HAS_PUS",
    "HAS_RACE_GAIT",
    "HAS_ROTTABLE",
    "HAS_SECRETION",
    "HAS_SOLDIER_TILE",
    "HAS_SOUND_ALERT",
    "HAS_SOUND_PEACEFUL_INTERMITTENT",
    "HAS_TILE",
    "HUNTS_VERMIN",
    "IMMOBILE",
    "IMMOBILE_LAND",
    "IMMOLATE",
    "ITEMCORPSE",
    "LAIR_HUNTER",
    "LARGE_PREDATOR",
    "LAYS_EGGS",
    "LAYS_UNUSUAL_EGGS",
    "LIGAMENTS",
    "LIGHT_GEN",
    "LISP",
    "LOCAL_POPS_CONTROLLABLE",
    "LOCAL_POPS_PRODUCE_HEROES",
    "LOCKPICKER",
    "MAGICAL",
    "MAGMA_VISION",
    "MANNERISM_BREATH",
    "MANNERISM_EYELIDS",
    "MANNERISM_LAUGH",
    "MANNERISM_POSTURE",
    "MANNERISM_SIT",
    "MANNERISM_SMILE",
    "MANNERISM_STRETCH",
    "MANNERISM_WALK",
    "MATUTINAL",
    "MEANDERER",
    "MEGABEAST",
    "MILKABLE",
    "MISCHIEVIOUS",
    "MOUNT",
    "MOUNT_EXOTIC",
    "MULTIPART_FULL_VISION",
    "MULTIPLE_LITTER_RARE",
    "NATURAL_ANIMAL",
    "NIGHT_CREATURE",
    "NIGHT_CREATURE_BOGEYMAN",
    "NIGHT_CREATURE_EXPERIMENTER",
    "NIGHT_CREATURE_HUNTER",
    "NIGHT_CREATURE_NIGHTMARE",
    "NOBONES",
    "NOBREATHE",
    "NOCTURNAL",
    "NOEMOTION",
    "NOEXERT",
    "NOFEAR",
    "NOMEAT",
    "NONAUSEA",
    "NOPAIN",
    "NOSKIN",
    "NOSKULL",
    "NOSMELLYROT",
    "NOSTUCKINS",
    "NOSTUN",
    "NOTHOUGHT",
    "NOT_BUTCHERABLE",
    "NOT_LIVING",
    "NO_AUTUMN",
    "NO_CONNECTIONS_FOR_MOVEMENT",
    "NO_DIZZINESS",
    "NO_DRINK",
    "NO_EAT",
    "NO_FEVERS",
    "NO_PHYS_ATT_GAIN",
    "NO_PHYS_ATT_RUST",
    "NO_SLEEP",
    "NO_SPRING",
    "NO_SUMMER",
    "NO_THOUGHT_CENTER_FOR_MOVEMENT",
    "NO_UNIT_TYPE_COLOR",
    "NO_VEGETATION_PERTURB",
    "NO_WINTER",
    "OPPOSED_TO_LIFE",
    "OUTSIDER_CONTROLLABLE",
    "PACK_ANIMAL",
    "PARALYZEIMMUNE",
    "PATTERNFLIER",
    "PEARL",
    "PET",
    "PET_EXOTIC",
    "POWER",
    "REMAINS_ON_VERMIN_BITE_DEATH",
    "REMAINS_UNDETERMINED",
    "RETURNS_VERMIN_KILLS_TO_OWNER",
    "SEMIMEGABEAST",
    "SLOW_LEARNER",
    "SPOUSE_CONVERSION_TARGET",
    "SPOUSE_CONVERTER",
    "SPREAD_EVIL_SPHERES_IF_RULER",
    "STANCE_CLIMBER",
    "STRANGE_MOODS",
    "SUPERNATURAL",
    "TENDONS",
    "THICKWEB",
    "TITAN",
    "TRAINABLE_HUNTING",
    "TRAINABLE_WAR",
    "TRANCES",
    "TRAPAVOID",
    "UNIQUE_DEMON",
    "UTTERANCES",
    "VEGETATION",
    "VERMIN_GOBBLER",
    "VERMIN_HATEABLE",
    "VERMIN_MICRO",
    "VERMIN_NOFISH",
    "VERMIN_NOROAM",
    "VERMIN_NOTRAP",
    "VESPERTINE",
    "WAGON_PULLER",
    "WEBBER",
    "WEBIMMUNE"
];

const MATERIAL_TYPES = [
    "INORGANIC",
    "COAL",
    "CREATURE_MAT",
    "LOCAL_CREATURE_MAT",
    "PLANT_MAT",
    "LOCAL_PLANT_MAT",
    "GET_MATERIAL_FROM_REAGENT",
    "MATERIAL_NAME"
];

const HARDCODED_MATERIALS = [
    "INORGANIC",
    "AMBER",
    "CORAL",
    "GLASS_GREEN",
    "GLASS_CLEAR",
    "GLASS_CRYSTAL",
    "WATER",
    "COAL",
    "POTASH",
    "ASH",
    "PEARLASH",
    "LYE",
    "MUD",
    "VOMET",
    "SALT",
    "FILTH_B",
    "FILTH_Y",
    "UNKNOWN_SUBSTANCE",
    "GRIME"
];

const GROWTH_ITEMS =[
    "SMALLGEM",
    "BLOCKS",
    "ROUGH",
    "BOULDER",
    "BRANCH",
    "DOOR",
    "FLOODGATE",
    "HATCH_COVER",
    "GRATE",
    "TRACTION_BENCH",
    "CHAIR",
    "CHAIN",
    "FLASK",
    "GOBLET",
    "TOOL",
    "WINDOW",
    "CAGE",
    "BARREL",
    "BUCKET",
    "ANIMALTRAP",
    "TABLE",
    "COFFIN",
    "STATUE",
    "SLAB",
    "BOOK",
    "QUERN",
    "MILLSTONE",
    "WEAPON",
    "GLOVES",
    "ARMORSTAND",
    "WEAPONRACK",
    "CABINET",
    "FIGURINE",
    "AMULET",
    "SCEPTER",
    "CROWN",
    "RING",
    "EARRING",
    "BRACELET",
    "ANVIL",
    "CORPSEPIECE",
    "REMAINS",
    "MEAT",
    "FISH_RAW",
    "VERMIN",
    "SEEDS",
    "SKIN_TANNED",
    "PLANT_GROWTH",
    "THREAD",
    "CLOTH",
    "SHEET",
    "TOTEM",
    "BACKPACK",
    "QUIVER",
    "SPLINT",
    "ORTHOPEDIC_CAST",
    "CRUTCH",
    "CATAPULTPARTS",
    "BALLISTAPARTS",
    "BALLISTAARROWHEAD",
    "TRAPPARTS",
    "TRAPCOMP",
    "DRINK",
    "POWDER_MISC",
    "CHEESE",
    "COIN",
    "GLOB",
    "ROCK",
    "PIPE_SECTION"
];
