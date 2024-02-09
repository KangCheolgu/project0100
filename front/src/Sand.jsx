import * as THREE from 'three'
import { createNoise2D } from 'simplex-noise'
import { useLoader } from '@react-three/fiber'
import { RepeatWrapping } from 'three'
import seedrandom from 'seedrandom'

function Sand(props) {
  const texture = useLoader(THREE.TextureLoader, '/sand.webp')
  texture.wrapS = texture.wrapT = RepeatWrapping
  texture.repeat.set(25, 25)

  const seed = 'my-seed' // set a fixed random seed value
  const simplex = createNoise2D(seedrandom(seed))

  function getHeight(x, y) {
    // Scale the coordinates
    x *= 0.01
    y *= 0.01

    // Generate noise
    const noise = simplex(x, y)

    // Map noise to height
    let height = Math.pow(noise, 3) * 5

    // Add a dune at (100, 100)
    const duneX = 100
    const duneY = 100
    const duneHeight = 20
    const duneWidth = 30
    const duneDist = Math.sqrt((x - duneX) ** 2 + (y - duneY) ** 2)
    if (duneDist < duneWidth) {
      height += duneHeight * (1 - duneDist / duneWidth)
    }

    return height
  }

  const width = 150
  const height = 100
  const widthSegments = 258
  const heightSegments = 258

  const geometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments)

  const positionAttribute = geometry.getAttribute('position')

  for (let i = 0; i < positionAttribute.count; i++) {
    const x = positionAttribute.getX(i) + width / 2
    const y = positionAttribute.getY(i) + height / 2
    const z = getHeight(x, y)

    positionAttribute.setZ(i, z)
  }

  positionAttribute.needsUpdate = true

  geometry.computeVertexNormals()

  return (
    <group>
      <group position={[30, -0.5, 56]}>
        <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
          <meshLambertMaterial attach="material" map={texture} color="#EDC9AF" />
        </mesh>
      </group>
    </group>
  )
}

export default Sand