import * as THREE from "three";
import React, {Component} from "react";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

class Planet extends THREE.Mesh {
    constructor(){
        const geometry = new THREE.SphereGeometry(0,2, 32, 32);
        const material = new THREE.MeshBasicMaterial({color: 0xff00ff});
        super(geometry, material);
    }
    update(){
        console.log(this.position);
    }
}

class ThreeScene extends Component {
    componentDidMount(){
        
    }
}
