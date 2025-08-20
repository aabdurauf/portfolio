import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, RootState, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { random } from "maath";
import { useTheme } from "../../context/themeContext";

const Stars = (props: any) => {
  const ref = useRef<any>();
  const { theme } = useTheme()

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((_state: RootState, delta: number) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={theme === "Dark" ? "#f272c8" : "#050816"}
          size={0.002}
          sizeAttention={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
