import Effect from './model/Effect';

export const EFFECT_STARS_AMOUNT = {
    attack: [ 4, 5, 6 ],
    idol: [ 3, 4, 5 ],
    inseparable: [ 7, 8, 9 ],
    mutantagenda: [ 8, 10, 12 ],
    critrate: [ 5, 6, 7 ],
    critdamage: [ 15, 20, 25 ],
    bleed: [ 15, 20, 25 ],
    stunactivation: [ 5, 10, 15 ],
    stunspecial: [ 15, 20, 25 ],
    powergain: [ 3, 4, 5 ],
    perfectblock: [ 3, 4, 5 ],
    block: [ 10, 15, 20 ],
    armor: [ 5, 6, 7 ],
    health: [ 4, 5, 6 ],
    heroesforhire: [ 3, 4, 5 ],
    thunderbolts: [ 4, 5, 6 ],
};
export const EFFECT_STARS_INDEX = { 1: 0, 2: 0, 3: 1, 4: 2, 5: 3 };

const effects = [

    { uid: 'attack', base: 5 },
    { uid: 'idol', base: 3 },
    { uid: 'inseparable', base: 8 },
    { uid: 'mutantagenda', base: 8 },
    { uid: 'critrate', base: 5 },
    { uid: 'critdamage', base: 15 },
    { uid: 'bleed', base: 15 },
    { uid: 'stunactivation', base: 5 },
    { uid: 'stunspecial', base: 15 },
    { uid: 'powergain', base: 3 },
    //{ uid: 'powersteal', base: 3 },
    { uid: 'perfectblock', base: 3 },
    { uid: 'block', base: 10 },
    { uid: 'armor', base: 4 },
    { uid: 'health', base: 4 },
    //{ uid: 'healthsteal', base: 4 },
    { uid: 'heroesforhire', base: 4 },
    { uid: 'thunderbolts', base: 5 },

].map((effect) => new Effect(effect));

const effectImages = {
    'attack': 'attack',
    'idol': 'idol',
    'inseparable': 'inseparable',
    'mutantagenda': 'mutant_agenda',
    'critrate': 'critical_rate',
    'critdamage': 'critical_damage',
    'bleed': 'bleed',
    'stunactivation': 'stun',
    'stunspecial': 'stun',
    'powergain': 'mana',
    'powersteal': 'mana_steal',
    'perfectblock': 'perfectblock',
    'block': 'block',
    'armor': 'armor_up',
    'health': 'health',
    'healthsteal': 'health_steal',
    'heroesforhire': 'heroes_for_hire',
    'thunderbolts': 'thunderbolts',
    'mastermind': 'mastermind',
};

function effectImage(uid, append = 'black') {
    return effectImages[ uid ]? `images/effects/${
        effectImages[ uid ]
    }_${
        append
    }.png`: null;
}

const effectBases = {};
effects.forEach(({ attr }) => (effectBases[ attr.uid ] = attr.base));
function effectBase(uid) {
    return effectBases[ uid ];
}

const uids = [ ...new Set(effects.map(({ attr }) => attr.uid)) ];

export { effectImage, effectBase };
export { uids };
export default effects;
