import React, {Component, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import styled from 'styled-components'


// class Planet extends THREE.Mesh {
//     constructor(){
//         const geometry = new THREE.SphereGeometry(0,2, 32, 32);
//         const material = new THREE.MeshBasicMaterial({color: 0xff00ff});
//         super(geometry, material);
//     }
//     update(){
//         console.log(this.position);
//     }
// }

// class ThreeScene extends Component {
//     componentDidMount(){
//
//     }
// }




function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


class ThreeScene extends Component{
    constructor(props){
        super(props);
        this.state = {
            planets: []
        }
        // setTimeout(function(){console.log(this)}, 5000);
    }
    componentDidMount(){
        this.setState({
            planets: this.props.planets,
        })
    }
    render(){
        const planets = this.state.planets.map((val) => {
            console.log(val)
            return(
                <Box key={val.name} position={[val.radius/10, 0,0]}/>
            )
        })
        console.log(planets)
        return (
            <StyledCanvasContainer>
                <Canvas>
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <Box position={[-1.2, 0, 0]} />
                  <Box position={[1.2, 0, 0]} />
                  {planets}
                </Canvas>
            </StyledCanvasContainer>
        )
    }
}

const StyledCanvasContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
`

export default ThreeScene;
