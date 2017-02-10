import { Attributes } from '../components';

const calculateDamage = function calculateDamage(atk, def, lvl = 0) {
  const rawDamage = Math.floor(Math.random() * atk) + lvl;
  const mitigation = Math.floor(Math.random() * def);
  return Math.max(0, rawDamage - mitigation);
};

const assignDamage = function assignDamage(source, target) {
  const sAttr = source.getComponent('Attributes');
  const tAttr = target.getComponent('Attributes');
  const damage = calculateDamage(sAttr.atk, tAttr.def, sAttr.lvl);
  return [damage, new Attributes({...tAttr, hp: Math.max(0, tAttr.hp - damage) })];
};

const fight = function pickUp({ player, entities }, monster) {
  let message;
  const index = entities.indexOf(monster);
  const monsterName = monster.getComponent('Meta').name;

  const [pDamage, playerAttributes] = assignDamage(monster, player);
  const [mDamage, monsterAttributes] = assignDamage(player, monster);

  if (monsterAttributes.hp === 0) {
    entities = [...entities.slice(0, index), ...entities.slice(index + 1)];
    playerAttributes.exp += monsterAttributes.exp;
    message = `${monsterName} killed | +${monsterAttributes.exp} exp`;
  } else {
    const updatedMonster = monster.copy().setComponent(monsterAttributes);
    entities = [...entities.slice(0, index), updatedMonster, ...entities.slice(index + 1)];
    message = `${monsterName} takes ${mDamage} dmg | You take ${pDamage} dmg`;
  }

  const updatedPlayer = player.copy().setComponent(playerAttributes);
  if (playerAttributes.hp === 0) {
    message = `${monsterName} has killed you | Game Over`;
  }

  return {
    player: updatedPlayer,
    entities,
    message,
  };
};

export default {
  fight,
};
