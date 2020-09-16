'use strict';

const fs = require('fs');

const entityName = 'creeper';
const newEntityName = 'creeper_titan';
const scaleFactor = 8.0;

const vanillaPath = '../../Vanilla_Resource_Pack_1.16.20';
const entityPath = 'models/entity';
const fileExtension = `.geo.json`;

const entityData = JSON.parse(fs.readFileSync(`${vanillaPath}/${entityPath}/${entityName}${fileExtension}`));

let newEntityData = {};
for (const [key, value] of Object.entries(entityData)) {
  if(key.includes('geometry')) {
    console.log(key);
    value.texturewidth = mul(value.texturewidth);
    value.textureheight = mul(value.textureheight);
    value.visible_bounds_width = mul(value.textureheight);
    value.visible_bounds_height = mul(value.textureheight);
    value.visible_bounds_offset = value.visible_bounds_offset.map(mul);
    if(value.bones !== undefined){
      value.bones = value.bones.map(scaleBone);
    }
    newEntityData[key.replace(entityName, newEntityName)] = value;
  } else {
    newEntityData[key] = value;
  }
}

fs.writeFileSync(`../${entityPath}/${newEntityName}${fileExtension}`, JSON.stringify(newEntityData));

function scaleBone(bone){
  console.log(bone.name);
  let retBone = {
    // inflate: bone.inflate ? bone.inflate * scaleFactor : scaleFactor,
    cubes: bone.cubes.map(scaleCube),
  };

  if(bone.rotation){
    retBone.rotation = bone.rotation.map(mul);
  }

  if(bone.pivot){
    retBone.pivot = bone.pivot.map(mul);
  }

  return {
    ...bone,
    ...retBone,
  };
}

function scaleCube(cube){
  return {
    ...cube,
    origin: cube.origin.map(mul),
    size: cube.size.map(mul),
    uv: cube.uv.map(mul),
  };
}

function mul(x){
  return x * scaleFactor;
}
