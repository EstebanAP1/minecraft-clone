import { grassImg, dirtImg, glassImg, logImg, woodImg } from './images'
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const groundTexture = new TextureLoader().load(grassImg)
const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const glassTexture = new TextureLoader().load(glassImg)
const logTexture = new TextureLoader().load(logImg)
const woodTexture = new TextureLoader().load(woodImg)

groundTexture.wrapT = groundTexture.wrapS = RepeatWrapping
groundTexture.magFilter = NearestFilter

grassTexture.wrapT = grassTexture.wrapS = RepeatWrapping
grassTexture.magFilter = NearestFilter

dirtTexture.wrapT = dirtTexture.wrapS = RepeatWrapping
dirtTexture.magFilter = NearestFilter

glassTexture.wrapT = glassTexture.wrapS = RepeatWrapping
glassTexture.magFilter = NearestFilter

logTexture.wrapT = logTexture.wrapS = RepeatWrapping
logTexture.magFilter = NearestFilter

woodTexture.wrapT = woodTexture.wrapS = RepeatWrapping
woodTexture.magFilter = NearestFilter

export {
  groundTexture,
  grassTexture,
  dirtTexture,
  glassTexture,
  logTexture,
  woodTexture
}
