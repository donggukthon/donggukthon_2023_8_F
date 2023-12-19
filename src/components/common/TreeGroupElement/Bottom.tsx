import { useGLTF } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'

export const BOTTOM = [
  {
    name: '받침대',
    fileName: '/models/bottom.glb',
    img: '/models/img/Bottom/bottom1.png',
  },
  {
    name: '받침대1',
    fileName: '/models/bottom_1.glb',
    img: '/models/img/Bottom/bottom1.png',
  },
  {
    name: '받침대2',
    fileName: '/models/bottom_2.glb',
    img: '/models/img/Bottom/bottom2.png',
  },
  {
    name: '받침대3',
    fileName: '/models/bottom_3.glb',
    img: '/models/img/Bottom/bottom3.png',
  },
]

interface BottomProps {
  scale: number
  position: THREE.Vector3
  bottomID: number
  title: string
  color: THREE.Color
}

export const Bottom: React.FC<BottomProps> = ({ scale, position, bottomID, title, color }) => {
  const bottom = useGLTF(BOTTOM[bottomID].fileName).scene.clone()
  const nameTag = bottom.getObjectByName('nameTag') as THREE.Mesh
  if (nameTag) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const material = nameTag.material as THREE.MeshStandardMaterial
    canvas.width = 1024
    canvas.height = 1024

    if (context) {
      context.fillStyle = '#ffffff'
      context.fillRect(0, 0, 1024, 1024)
      context.font = 'Bold 100px KingSejongInstitute'
      context.fillStyle = '#ffffff'
      context.textBaseline = 'middle'
      let textWidth = context.measureText(title).width
      if (textWidth > 1000) {
        context.font = 'Bold 50px KingSejongInstitute'
      }
      textWidth = context.measureText(title).width
      context.fillText(title, canvas.width / 2 - textWidth / 2, 1024 / 8, 1024)
    }
    const nameTexture = new THREE.CanvasTexture(canvas)
    material.map = nameTexture
    material.bumpMap = nameTexture
  }
  const mainColor = bottom.getObjectByName('mainColor') as THREE.Mesh
  if (mainColor) {
    const material = mainColor.material as THREE.MeshStandardMaterial
    material.color = color
  }

  bottom.scale.set(scale, scale, scale)
  bottom.position.set(position.x, position.y, position.z)

  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={bottom} />
}
