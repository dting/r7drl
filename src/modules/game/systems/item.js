import { Attributes, Inventory } from '../components';

const pickUp = function pickUp({ player, entities }, item) {
  const index = entities.indexOf(item);
  const type = item.getComponent('Item').type;

  const itemAttributes = item.getComponent('Attributes');
  const playerAttributes = player.getComponent('Attributes');
  const updatedPlayer = player.copy().setComponent(new Attributes({
    atk: playerAttributes.atk + (itemAttributes.atk || 0),
    def: playerAttributes.def + (itemAttributes.def || 0),
    exp: playerAttributes.exp + (itemAttributes.exp || 0),
    hp: playerAttributes.hp + (itemAttributes.hp || 0),
    lvl: playerAttributes.lvl + (itemAttributes.lvl || 0),
  }));

  const { currentWeapon, currentArmor, archive } = player.getComponent('Inventory');
  if (type === 'Weapon') {
    updatedPlayer.setComponent(new Inventory({
      currentArmor,
      currentWeapon: item,
      archive: [...archive, currentWeapon],
    }));
  }
  if (type === 'Armor') {
    updatedPlayer.setComponent(new Inventory({
      currentArmor: item,
      currentWeapon,
      archive: [...archive, currentArmor],
    }));
  }

  return {
    player: updatedPlayer,
    message: `Picked up - ${item.getComponent('Meta').name}`,
    entities: [...entities.slice(0, index), ...entities.slice(index + 1)],
  };
};

export default {
  pickUp,
};
