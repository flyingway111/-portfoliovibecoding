'use client'

import { Canvas, type ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  Lightformer,
  Line,
  RoundedBox,
  Text,
  useTexture,
} from '@react-three/drei'
import { Suspense, useMemo, useRef, useState } from 'react'
import {
  Group,
  MathUtils,
  MeshStandardMaterial,
  SRGBColorSpace,
  Vector3,
} from 'three'
import { portfolioProjects, type PortfolioProject } from './portfolio-projects'

type SceneProps = {
  activeProjectId: string
  onSelectProject: (id: string) => void
}

type OrbitRef = React.MutableRefObject<number>

function openExternal(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

function PhoneModel() {
  const phoneRef = useRef<Group>(null)
  const [hovered, setHovered] = useState(false)
  const screenTexture = useTexture('/telegram-screen.png')

  screenTexture.colorSpace = SRGBColorSpace
  screenTexture.anisotropy = 8

  useFrame(({ clock }, delta) => {
    if (!phoneRef.current) return

    const time = clock.getElapsedTime()
    const targetScale = hovered ? 1.025 : 1

    phoneRef.current.position.y = 0.22 + Math.sin(time * 0.72) * 0.11
    phoneRef.current.rotation.x = -0.045 + Math.sin(time * 0.32) * 0.012
    phoneRef.current.rotation.y = -0.24 + Math.sin(time * 0.28) * 0.026
    phoneRef.current.rotation.z = -0.075 + Math.sin(time * 0.38) * 0.009
    phoneRef.current.scale.setScalar(
      MathUtils.damp(phoneRef.current.scale.x, targetScale, 6, delta),
    )
  })

  return (
    <group
      ref={phoneRef}
      position={[0, 0.22, 0.42]}
      rotation={[-0.045, -0.24, -0.075]}
      onClick={(event) => {
        event.stopPropagation()
        openExternal('https://t.me/xapsu')
      }}
      onPointerEnter={(event) => {
        event.stopPropagation()
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerLeave={() => {
        setHovered(false)
        document.body.style.cursor = ''
      }}
    >
      <RoundedBox
        args={[2.42, 5.15, 0.46]}
        radius={0.31}
        smoothness={12}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color="#6d7d86"
          metalness={1}
          roughness={0.13}
          envMapIntensity={2.4}
        />
      </RoundedBox>

      <RoundedBox
        args={[2.28, 5.01, 0.14]}
        radius={0.275}
        smoothness={10}
        position={[0, 0, 0.255]}
      >
        <meshStandardMaterial
          color="#020507"
          metalness={0.64}
          roughness={0.12}
          envMapIntensity={1.5}
        />
      </RoundedBox>

      <mesh position={[0, 0, 0.342]}>
        <planeGeometry args={[2.17, 4.87]} />
        <meshBasicMaterial
          map={screenTexture}
          transparent
          alphaTest={0.02}
          toneMapped={false}
        />
      </mesh>

      <RoundedBox
        args={[0.73, 0.21, 0.07]}
        radius={0.1}
        smoothness={8}
        position={[0, 2.18, 0.405]}
      >
        <meshStandardMaterial color="#010304" metalness={0.35} roughness={0.32} />
      </RoundedBox>

      <RoundedBox
        args={[0.055, 0.74, 0.13]}
        radius={0.026}
        smoothness={5}
        position={[-1.235, 0.74, -0.01]}
      >
        <meshStandardMaterial color="#83919a" metalness={1} roughness={0.16} />
      </RoundedBox>
      <RoundedBox
        args={[0.055, 0.38, 0.13]}
        radius={0.026}
        smoothness={5}
        position={[-1.235, 1.48, -0.01]}
      >
        <meshStandardMaterial color="#83919a" metalness={1} roughness={0.16} />
      </RoundedBox>
      <RoundedBox
        args={[0.055, 0.86, 0.13]}
        radius={0.026}
        smoothness={5}
        position={[1.235, 0.58, -0.01]}
      >
        <meshStandardMaterial color="#667680" metalness={1} roughness={0.16} />
      </RoundedBox>

      <mesh position={[0, -2.31, 0.4]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.018, 0.52, 4, 16]} />
        <meshBasicMaterial color="#e7faff" transparent opacity={0.58} />
      </mesh>
    </group>
  )
}

type ProjectCardProps = {
  project: PortfolioProject
  index: number
  active: boolean
  onSelect: (id: string) => void
}

function ProjectCard({
  project,
  index,
  active,
  onSelect,
}: ProjectCardProps) {
  const groupRef = useRef<Group>(null)
  const frameMaterialRef = useRef<MeshStandardMaterial>(null)
  const [hovered, setHovered] = useState(false)
  const texture = useTexture(project.image)
  const { camera } = useThree()

  texture.colorSpace = SRGBColorSpace
  texture.anisotropy = 8
  texture.repeat.set(1, 0.69)
  texture.offset.set(0, project.imagePosition === 'top' ? 0.31 : 0.155)

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return

    const [baseX, baseY, baseZ] = project.position
    const time = clock.getElapsedTime()
    const localPhase = time * 0.16 + index * 1.13
    const x = baseX + Math.sin(localPhase) * 0.11
    const z = baseZ + Math.cos(localPhase) * 0.24
    const floatY = Math.sin(time * 0.58 + index * 1.13) * 0.055
    const targetScale = project.scale * (hovered ? 1.045 : active ? 1.018 : 1)

    groupRef.current.position.set(x, baseY + floatY, z)
    groupRef.current.quaternion.copy(camera.quaternion)
    groupRef.current.rotateY(MathUtils.degToRad(baseX < 0 ? 4 : -4))
    groupRef.current.rotateZ(Math.sin(time * 0.35 + index) * 0.008)
    groupRef.current.scale.setScalar(
      MathUtils.damp(groupRef.current.scale.x, targetScale, 6.5, delta),
    )

    if (frameMaterialRef.current) {
      frameMaterialRef.current.emissiveIntensity = MathUtils.damp(
        frameMaterialRef.current.emissiveIntensity,
        hovered ? 0.075 : active ? 0.034 : 0.012,
        7,
        delta,
      )
    }
  })

  const selectCard = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation()
    onSelect(project.id)
  }

  return (
    <group
      ref={groupRef}
      position={project.position}
      scale={project.scale}
      onClick={(event) => {
        event.stopPropagation()
        openExternal(project.liveUrl)
      }}
      onPointerEnter={(event) => {
        selectCard(event)
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerLeave={() => {
        setHovered(false)
        document.body.style.cursor = ''
      }}
    >
      <RoundedBox
        args={[2.5, 1.68, 0.18]}
        radius={0.14}
        smoothness={8}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          ref={frameMaterialRef}
          color="#0b1217"
          emissive="#35c8f5"
          emissiveIntensity={active ? 0.034 : 0.012}
          metalness={0.78}
          roughness={0.2}
          envMapIntensity={1.7}
        />
      </RoundedBox>

      <Text
        position={[-1.06, 0.61, 0.106]}
        fontSize={0.15}
        color="#edf8fb"
        anchorX="left"
        anchorY="middle"
        letterSpacing={-0.02}
      >
        {project.title}
      </Text>
      <Text
        position={[-1.06, 0.43, 0.108]}
        fontSize={0.067}
        color="#7f969f"
        anchorX="left"
        anchorY="middle"
        letterSpacing={0.03}
      >
        {project.kind}
      </Text>

      <RoundedBox
        args={[0.29, 0.29, 0.055]}
        radius={0.07}
        smoothness={5}
        position={[1.03, 0.55, 0.115]}
      >
        <meshStandardMaterial color="#17262f" metalness={0.55} roughness={0.25} />
      </RoundedBox>
      <Text
        position={[1.03, 0.555, 0.151]}
        fontSize={0.12}
        color="#dff8ff"
        anchorX="center"
        anchorY="middle"
      >
        ↗
      </Text>

      <mesh position={[0, -0.17, 0.103]}>
        <planeGeometry args={[2.22, 0.96]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      <mesh position={[0, -0.17, 0.119]}>
        <planeGeometry args={[2.22, 0.96]} />
        <meshPhysicalMaterial
          color="#d8f6ff"
          transparent
          opacity={0.028}
          roughness={0.06}
          clearcoat={1}
          clearcoatRoughness={0.04}
        />
      </mesh>
    </group>
  )
}

function OrbitGuides() {
  const paths = useMemo(() => {
    const pointCount = 160
    return [
      Array.from({ length: pointCount }, (_, index) => {
        const angle = (index / (pointCount - 1)) * Math.PI * 2
        return [
          Math.cos(angle) * 5.35,
          Math.sin(angle) * 1.25 + 0.08,
          Math.sin(angle + 0.55) * 1.78,
        ] as [number, number, number]
      }),
      Array.from({ length: pointCount }, (_, index) => {
        const angle = (index / (pointCount - 1)) * Math.PI * 2
        return [
          Math.cos(angle) * 5.2,
          Math.sin(angle + 1.22) * 0.78 - 0.03,
          Math.sin(angle) * 2.28,
        ] as [number, number, number]
      }),
      Array.from({ length: pointCount }, (_, index) => {
        const angle = (index / (pointCount - 1)) * Math.PI * 2
        return [
          Math.cos(angle) * 4.5,
          Math.sin(angle + 2.1) * 1.55 + 0.12,
          Math.sin(angle - 0.7) * 1.25,
        ] as [number, number, number]
      }),
    ]
  }, [])

  return (
    <>
      <Line points={paths[0]} color="#40c9f8" opacity={0.46} transparent lineWidth={0.8} />
      <Line points={paths[1]} color="#2fb8eb" opacity={0.3} transparent lineWidth={0.65} />
      <Line points={paths[2]} color="#5bd7ff" opacity={0.2} transparent lineWidth={0.55} />
    </>
  )
}

function OrbitNode({
  index,
  orbitPhaseRef,
}: {
  index: number
  orbitPhaseRef: OrbitRef
}) {
  const nodeRef = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (!nodeRef.current) return

    const angle = orbitPhaseRef.current * 2.2 + index * 1.61 + clock.getElapsedTime() * 0.08
    nodeRef.current.position.set(
      Math.cos(angle) * (index % 2 === 0 ? 5.25 : 4.6),
      Math.sin(angle + index * 0.7) * (index % 2 === 0 ? 1.1 : 1.5) + 0.08,
      Math.sin(angle + 0.45) * (index % 2 === 0 ? 1.85 : 1.3),
    )
  })

  return (
    <group ref={nodeRef}>
      <mesh>
        <sphereGeometry args={[index === 1 ? 0.05 : 0.034, 18, 18]} />
        <meshBasicMaterial color="#d7f8ff" />
      </mesh>
      <pointLight color="#35c9f7" intensity={3.2} distance={1.5} />
    </group>
  )
}

function Pedestal() {
  return (
    <group position={[0, -3.24, 0.2]}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[2.86, 3.08, 0.58, 96]} />
        <meshStandardMaterial
          color="#28343b"
          metalness={0.76}
          roughness={0.38}
          envMapIntensity={2.2}
        />
      </mesh>

      <mesh position={[0, 0.31, 0]} receiveShadow>
        <cylinderGeometry args={[2.82, 2.87, 0.08, 96]} />
        <meshStandardMaterial
          color="#52636d"
          metalness={1}
          roughness={0.12}
          envMapIntensity={2.5}
        />
      </mesh>

      <mesh position={[0, 0.365, 0]}>
        <torusGeometry args={[2.43, 0.028, 14, 128]} />
        <meshBasicMaterial color="#50d6ff" transparent opacity={0.78} />
      </mesh>

      <mesh position={[0, 0.355, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.35, 96]} />
        <meshBasicMaterial color="#159dcb" transparent opacity={0.27} />
      </mesh>
      <pointLight position={[0, 0.78, 0.2]} color="#37c9f5" intensity={4.5} distance={4.2} />
    </group>
  )
}

function CameraRig() {
  const { camera, pointer, size } = useThree()
  const target = useMemo(() => new Vector3(0, -0.16, 0), [])

  useFrame((_, delta) => {
    const aspect = size.width / size.height
    const compact = aspect < 1
    const targetZ = compact ? 20.5 : 12.4 + Math.max(0, 1.52 - aspect) * 5
    const targetX = pointer.x * (compact ? 0.12 : 0.27)
    const targetY = 0.42 + pointer.y * 0.12

    camera.position.x = MathUtils.damp(camera.position.x, targetX, 2.1, delta)
    camera.position.y = MathUtils.damp(camera.position.y, targetY, 2.1, delta)
    camera.position.z = MathUtils.damp(camera.position.z, targetZ, 2.4, delta)
    camera.lookAt(target)
  })

  return null
}

function SceneContent({ activeProjectId, onSelectProject }: SceneProps) {
  const orbitPhaseRef = useRef(0)

  useFrame((_, delta) => {
    orbitPhaseRef.current += delta * 0.018
  })

  return (
    <>
      <fog attach="fog" args={['#02070b', 13.5, 25]} />
      <CameraRig />

      <ambientLight intensity={0.42} />
      <directionalLight position={[4, 8, 6]} intensity={2.2} castShadow />
      <spotLight
        position={[-1.5, 7.5, 5.5]}
        intensity={74}
        angle={0.38}
        penumbra={0.94}
        color="#effbff"
        castShadow
      />
      <pointLight position={[-4.5, 0.8, 4]} intensity={12} distance={10} color="#34c8f5" />
      <pointLight position={[4.8, -0.6, 3]} intensity={9} distance={9} color="#167ea8" />

      <Environment resolution={160}>
        <Lightformer
          form="rect"
          intensity={3.3}
          color="#ecfbff"
          position={[-5, 3.5, 5]}
          rotation={[0, 0.52, 0]}
          scale={[2.8, 7, 1]}
        />
        <Lightformer
          form="rect"
          intensity={2.4}
          color="#20bde9"
          position={[5, 1, 3]}
          rotation={[0, -0.72, 0]}
          scale={[2.2, 5, 1]}
        />
        <Lightformer
          form="ring"
          intensity={1.8}
          color="#55d8ff"
          position={[0, -4, 2]}
          scale={4.8}
        />
      </Environment>

      <OrbitGuides />
      {[0, 1, 2, 3].map((index) => (
        <OrbitNode key={index} index={index} orbitPhaseRef={orbitPhaseRef} />
      ))}

      {portfolioProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          active={project.id === activeProjectId}
          onSelect={onSelectProject}
        />
      ))}

      <PhoneModel />
      <Pedestal />

      <ContactShadows
        position={[0, -3.55, 0.15]}
        opacity={0.82}
        scale={12}
        blur={2.7}
        far={9}
        frames={110}
        color="#000000"
      />

      <mesh position={[0, -3.57, -1.2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[60, 48]} />
        <meshStandardMaterial color="#03070a" roughness={0.54} metalness={0.2} />
      </mesh>
    </>
  )
}

export default function Portfolio3DScene(props: SceneProps) {
  return (
    <Canvas
      className="portfolio-webgl"
      dpr={[1, 1.6]}
      shadows
      camera={{ position: [0, 0.42, 12.4], fov: 44, near: 0.1, far: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <SceneContent {...props} />
      </Suspense>
    </Canvas>
  )
}
