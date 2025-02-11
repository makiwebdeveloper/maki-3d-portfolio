import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { lerp } from "three/src/math/MathUtils.js";
import { useStorage } from "../hooks/useStorage";
import Desktop from "./computer/Desktop";
import PulsingCircle from "./PulsingCircle";
import { AtSignIcon, GithubIcon, LinkedinIcon } from "lucide-react";

const INITIAL_ROTATION_Y = -2.35;
const DURATION = 0.03;

export default function Room(props) {
  const { nodes, materials } = useGLTF("./models/portfolio_room_v3.glb");

  const scroll = useScroll();

  const ref = useRef();
  const lightRef = useRef();
  const lampRef = useRef();
  const [showComputer, setShowComputer] = useState(false);

  const {
    light,
    activeSection,
    setActiveSection,
    navigationAnchor,
    setNavigationAnchor,
    setSelectedSkill,
  } = useStorage();

  useFrame(({ camera }) => {
    if (ref.current) {
      let cameraParams = {
        posX: 0,
        posY: 0,
        posZ: 5,
        rotY: 0,
      };

      if (activeSection === 1) {
        setShowComputer(false);
      } else if (activeSection === 2) {
        setShowComputer(false);
        cameraParams = {
          posX: 0.1,
          posY: 2.3,
          posZ: 0.3,
          rotY: 0.9,
        };
      } else if (activeSection === 3) {
        setShowComputer(false);
        cameraParams = {
          posX: 0.1,
          posY: 0.35,
          posZ: 0.2,
          rotY: 1,
        };
      } else {
        setShowComputer(true);
        cameraParams = {
          posX: 0.32,
          posY: 0.4,
          posZ: -0.5,
          rotY: -0.07,
        };
      }

      camera.position.x = lerp(camera.position.x, cameraParams.posX, DURATION);
      camera.position.y = lerp(camera.position.y, cameraParams.posY, DURATION);
      camera.position.z = lerp(camera.position.z, cameraParams.posZ, DURATION);
      camera.rotation.y = lerp(camera.rotation.y, cameraParams.rotY, DURATION);
    }

    // Lamp first showing
    if (lampRef.current) {
      lampRef.current.intensity = lerp(lampRef.current.intensity, 1, 0.01);
    }

    // Light toggle
    if (lightRef) {
      if (light) {
        lightRef.current.intensity = lerp(lightRef.current.intensity, 4, 0.01);
      } else {
        lightRef.current.intensity = lerp(lightRef.current.intensity, 0, 0.03);
      }
    }

    // Active section
    if (scroll.offset < 0.25) {
      setActiveSection(1);
    } else if (scroll.offset >= 0.25 && scroll.offset < 0.5) {
      setActiveSection(2);
    } else if (scroll.offset >= 0.5 && scroll.offset < 0.75) {
      setActiveSection(3);
    } else {
      setActiveSection(4);
    }
  });

  useEffect(() => {
    if (navigationAnchor) {
      scroll.el.scrollTo({ top: window.innerHeight * (navigationAnchor - 1) });
      setNavigationAnchor(null);
    }
  }, [navigationAnchor]);

  return (
    <group
      {...props}
      ref={ref}
      dispose={null}
      position={[0, 0.6, 0]}
      rotation={[0, INITIAL_ROTATION_Y, 0]}
      scale={1.9}
    >
      <pointLight
        ref={lightRef}
        intensity={0}
        color={"#C29DFF"}
        position={[0, 0.3, 0]}
      />
      <pointLight
        ref={lampRef}
        intensity={0}
        color={"#2832FF"}
        position={[-0.5, 0, -0.1]}
        decay={2}
      />
      {/* Skills */}
      <Html
        position={[0.69, 0.525, 0.67]}
        rotation={[0, 0.25, 0]}
        transform
        occlude
        portal={{ current: scroll.fixed }}
        scale={0.02}
      >
        <div
          onMouseOver={() => setSelectedSkill("typescript")}
          onMouseLeave={() => setSelectedSkill(null)}
          className="cursor-pointer  w-[300px] h-[330px] opacity-30 transition  hover:opacity-100"
        >
          <PulsingCircle
            focused
            className="absolute top-[50%] left-[50%] translate-[-50%]"
          >
            <div className="w-[15px] h-[15px] rounded-full bg-white"></div>
          </PulsingCircle>
        </div>
      </Html>
      <Html
        position={[0.39, 0.61, 0.75]}
        rotation={[0, 0.25, 0]}
        transform
        occlude
        portal={{ current: scroll.fixed }}
        scale={0.02}
      >
        <div
          onMouseOver={() => setSelectedSkill("html-css-js")}
          onMouseLeave={() => setSelectedSkill(null)}
          className="cursor-pointer w-[650px] h-[630px] opacity-30 transition  hover:opacity-100"
        >
          <PulsingCircle
            focused
            className="absolute top-[50%] left-[50%] translate-[-50%]"
          >
            <div className="w-[15px] h-[15px] rounded-full bg-white"></div>
          </PulsingCircle>
        </div>
      </Html>
      <Html
        position={[0.01, 0.76, 0.85]}
        rotation={[0, 0.12, 0]}
        transform
        occlude
        portal={{ current: scroll.fixed }}
        scale={0.02}
      >
        <div
          onMouseOver={() => setSelectedSkill("react")}
          onMouseLeave={() => setSelectedSkill(null)}
          className="cursor-pointer w-[350px] h-[350px] opacity-30 transition  hover:opacity-100"
        >
          <PulsingCircle
            focused
            className="absolute top-[50%] left-[50%] translate-[-50%]"
          >
            <div className="w-[15px] h-[15px] rounded-full bg-white"></div>
          </PulsingCircle>
        </div>
      </Html>
      <Html
        position={[0.08, 0.51, 0.72]}
        rotation={[0, 0.12, 0]}
        transform
        occlude
        portal={{ current: scroll.fixed }}
        scale={0.02}
      >
        <div
          onMouseOver={() => setSelectedSkill("sql")}
          onMouseLeave={() => setSelectedSkill(null)}
          className="cursor-pointer w-[220px] h-[310px] opacity-30 transition  hover:opacity-100"
        >
          <PulsingCircle
            focused
            className="absolute top-[50%] left-[50%] translate-[-50%]"
          >
            <div className="w-[15px] h-[15px] rounded-full bg-white"></div>
          </PulsingCircle>
        </div>
      </Html>
      <Html
        position={[-0.214, 0.528, 0.77]}
        rotation={[0, 0.12, 0]}
        transform
        occlude
        portal={{ current: scroll.fixed }}
        scale={0.02}
      >
        <div
          onMouseOver={() => setSelectedSkill("solidity")}
          onMouseLeave={() => setSelectedSkill(null)}
          className="cursor-pointer w-[320px] h-[260px] opacity-30 transition  hover:opacity-100"
        >
          <PulsingCircle
            focused
            className="absolute top-[50%] left-[50%] translate-[-50%]"
          >
            <div className="w-[15px] h-[15px] rounded-full bg-white"></div>
          </PulsingCircle>
        </div>
      </Html>
      <Html
        position={[-0.526, 0.49, 0.72]}
        rotation={[0, -0.5, 0]}
        transform
        occlude
        portal={{ current: scroll.fixed }}
        scale={0.018}
      >
        <div
          onMouseOver={() => setSelectedSkill("next")}
          onMouseLeave={() => setSelectedSkill(null)}
          className="cursor-pointer w-[670px] h-[220px] opacity-30 transition  hover:opacity-100"
        >
          <PulsingCircle
            focused
            className="absolute top-[50%] left-[50%] translate-[-50%]"
          >
            <div className="w-[15px] h-[15px] rounded-full bg-white"></div>
          </PulsingCircle>
        </div>
      </Html>
      {/* Computer */}
      <Html
        position={[-0.493, -0.094, 0.232]}
        rotation={[0, -0.85, 0]}
        transform
        occlude
        portal={{ current: scroll.fixed }}
        scale={0.09}
        wrapperClass={` ${showComputer ? "opacity-100" : "opacity-0"}`}
      >
        <Desktop />
      </Html>
      {/* Desk */}
      <Html
        position={[0.87, -0.15, 0.45]}
        rotation={[0.2, 0.25, 0]}
        transform
        occlude
        portal={{ current: scroll.fixed }}
        scale={0.04}
      >
        <PulsingCircle
          onClick={() => {
            navigator.clipboard.writeText("makiwebdeveloper@gmail.com");
          }}
          focused={activeSection === 3}
        >
          <AtSignIcon />
        </PulsingCircle>
      </Html>
      <Html
        position={[-0.075, -0.25, 0.7]}
        rotation={[0.2, 0.25, 0]}
        transform
        occlude
        portal={{ current: scroll.fixed }}
        scale={0.04}
      >
        <PulsingCircle
          focused={activeSection === 3}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/makiwebdeveloper",
              "_blank"
            );
          }}
        >
          <LinkedinIcon />
        </PulsingCircle>
      </Html>
      <Html
        position={[0.89, -0.37, 0.45]}
        rotation={[0.2, 0.25, 0]}
        transform
        occlude
        portal={{ current: scroll.fixed }}
        scale={0.04}
      >
        <PulsingCircle
          onClick={() => {
            window.open("https://github.com/makiwebdeveloper", "_blank");
          }}
          focused={activeSection === 3}
        >
          <GithubIcon />
        </PulsingCircle>
      </Html>

      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.room_base_color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.room_floor_color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_3.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_4.geometry}
          material={materials.window_glow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_5.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_6.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_7.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_8.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_9.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_10.geometry}
          material={materials["Material.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_11.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_12.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_13.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_14.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_15.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_16.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_17.geometry}
          material={materials["Material.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_18.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_19.geometry}
          material={materials["Material.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_20.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_21.geometry}
          material={materials["Material.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_22.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_23.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_24.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_25.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_26.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_27.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_28.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_29.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_30.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_31.geometry}
          material={materials.Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_32.geometry}
          material={materials.Base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_33.geometry}
          material={materials["07___Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_34.geometry}
          material={materials["13___Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_35.geometry}
          material={materials["14___Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_36.geometry}
          material={materials.lamp_a}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_37.geometry}
          material={materials["Material.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_38.geometry}
          material={materials["Material.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_39.geometry}
          material={materials["Material.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_40.geometry}
          material={materials["Material.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_41.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_42.geometry}
          material={materials["Material.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_43.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_44.geometry}
          material={materials["Material.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_45.geometry}
          material={nodes.Cube002_45.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_46.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_47.geometry}
          material={materials["Material.016"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/portfolio_room_v3.glb");
