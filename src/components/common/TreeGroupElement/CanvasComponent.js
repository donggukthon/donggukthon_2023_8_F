/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-unknown-property */
import styled from '@emotion/styled'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

const Snow = ({ radius, centerPosition, rangeRadius, isSnowing, model }) => {
  const snowRef = useRef(null)
  const position = new THREE.Vector3(
    centerPosition.x - rangeRadius + Math.random() * rangeRadius * 2,
    centerPosition.y + rangeRadius + Math.random() * 2 * rangeRadius,
    centerPosition.z - rangeRadius + Math.random() * rangeRadius * 2
  )

  const snow = useGLTF(`/models/snow_flake_${model + 1}.glb`).scene.clone()

  snow.position.set(position.x, position.y, position.z)
  snow.scale.set(radius, radius, radius)
  snow.rotation.y = Math.random()
  useFrame((_, delta) => {
    const snow = snowRef.current
    const speed = 0.3 * delta
    if (snow) {
      if (snow.position.y <= 0) {
        snow.position.y = centerPosition.y + rangeRadius + Math.random() * rangeRadius * 0.005
      }
      snow.position.y -= speed
      snow.rotation.y += speed

      if (snow.position.distanceTo(centerPosition) > rangeRadius - 0.1) {
        snow.visible = false
      } else {
        snow.visible = true
      }
    }
  })
  if (isSnowing) return null

  return <primitive object={snow} ref={snowRef} />
}

const GLBDecorationModel = ({ color, url, position, scale, rotate, isVisible = false }) => {
  const gltf = useGLTF(url, true)
  const sceneClone = useMemo(() => gltf.scene.clone(true), [gltf.scene])
  const [newPosition, setNewPosition] = useState(position)

  const meshRef = useRef()

  const newScale = isVisible ? scale : [0, 0, 0]

  useEffect(() => {
    if (meshRef.current) {
      if (url === '/models/tree_1.glb') {
        setNewPosition([0, 0.3, 0])
      }
      if (url === '/models/tree_2.glb') {
        setNewPosition([0, 0.4, 0])
      }
      if (url === '/models/tree_3.glb') {
        setNewPosition([0, 0.33, 0])
      }
      if (url === '/models/tree_4.glb') {
        setNewPosition([0, 0.3, 0])
      }
    }
  }, [url, setNewPosition])

  try {
    useEffect(() => {
      if (meshRef.current) {
        if (rotate) {
          meshRef.current.rotation.x = rotate[0]
          meshRef.current.rotation.y = rotate[1]
          meshRef.current.rotation.z = rotate[2]
        }
        if (position) {
          if (!(url === '/models/tree_2.glb' || url === '/models/tree_3.glb')) {
            setNewPosition(position)
          }
        }
      }
    }, [rotate, position])

    return (
      <primitive
        ref={meshRef}
        object={sceneClone}
        position={newPosition}
        scale={newScale}
        rotation={rotate}
        color={color}
      />
    )
  } catch (e) {
    console.log(e)
  }
}

const GROUP_GAP_DISTANCE = 0.8
const MAIN_GROUP_RATE = 1.2

const GroupModel = ({ autoRotate, decorationList, index, order, incrementValue }) => {
  const ref = useRef()
  const positionY = GROUP_GAP_DISTANCE * index - GROUP_GAP_DISTANCE * incrementValue

  useFrame(() => {
    if (ref.current && autoRotate) {
      ref.current.rotation.y += 0.006
    }
  })
  useEffect(() => {
    if (ref.current) {
      // ref.current.rotation.x = -1.2
      ref.current.position.x = positionY
      ref.current.opacity = 1
      if (index === order) {
        ref.current.scale.x = MAIN_GROUP_RATE
        ref.current.scale.y = MAIN_GROUP_RATE
        ref.current.scale.z = MAIN_GROUP_RATE
      } else {
        ref.current.scale.x = 1
        ref.current.scale.y = 1
        ref.current.scale.z = 1
      }
    }
  }, [index, positionY, order])

  return (
    <group ref={ref} position={[0, 0, 0]} rotate={[0.8, 0.8, 0]}>
      {decorationList &&
        decorationList.map((value, index) => (
          <GLBDecorationModel
            {...value}
            url={value.url}
            isVisible={true}
            key={`canvas_component_decoration_item_${index}_${value.url}`}
          />
        ))}
      {/* {decorationList &&
        decorationList.map((value, index) =>
          value.urlList?.map((elementUrl) => (
            <GLBDecorationModel
              {...value}
              url={elementUrl}
              isVisible={elementUrl === value.url}
              key={`canvas_component_decoration_item_${index}_${elementUrl}`}
            />
          ))
        )} */}
    </group>
  )
}

const CanvasComponent = ({
  cameraPosition = [0, 0, 5],
  cameraFov = 20,
  autoRotate = true,
  testTreeList = [],
  order = 2,
  incrementValue = 0,
  width,
  height = 500,
  isSnowing = false,
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const cameraRef = useRef(null)
  const orbitRef = useRef(null)

  const glassRadius = 1
  const glassPosition = new THREE.Vector3(0, glassRadius / 2, 0)

  const snows = Array.from({ length: 70 }, (_, i) => (
    <Snow
      key={i}
      isSnowing={isSnowing}
      centerPosition={glassPosition}
      rangeRadius={glassRadius}
      radius={0.03 + Math.random() * 0.05}
      model={Math.floor(Math.random() * 2)}
    />
  ))

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <StyledCanvas camera={{ fov: cameraFov, position: cameraPosition }} width={width} height={height} ref={cameraRef}>
        <ambientLight intensity={1} color={'#cfcabb'} />
        <directionalLight position={[5, 7, 3]} intensity={2} color={'#f1e0c8'} castShadow />
        <directionalLight position={[5, 7, -3]} intensity={2} color={'#f1e0c8'} castShadow />
        <directionalLight position={[-5, 7, 0]} intensity={2} color={'#f1e0c8'} castShadow />
        {snows}
        {testTreeList.map((value, index) => (
          <GroupModel
            autoRotate={autoRotate}
            decorationList={value.decorationList}
            index={index}
            order={order}
            incrementValue={incrementValue}
            key={`group_model_${index}`}
          />
        ))}
        <OrbitControls
          ref={orbitRef}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          target={[0, 0, 0]}
        />
      </StyledCanvas>
    </>
  )
}

const StyledCanvas = styled(Canvas)`
  canvas {
    width: 100%;
    height: ${(props) => props.height}px;
  }
`

export default CanvasComponent
