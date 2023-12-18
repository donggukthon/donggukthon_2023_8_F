/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-unknown-property */
import styled from '@emotion/styled'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'

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
      ref.current.rotation.y += 0.008
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
  height = 500,
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const cameraRef = useRef(null)
  const orbitRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <StyledCanvas camera={{ fov: cameraFov, position: cameraPosition }} height={height}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 0, 5]} />
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
        <OrbitControls ref={orbitRef} enableZoom={false} enablePan={false} target={[0, 0, 0]} />
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
