import { useEffect, useState } from "react";
import { socket } from "../Scene.jsx";

export const useVehicleControls = (vehicleApi, chassisApi, id, state) => {
    const [controls, setControls] = useState({});
    const engineForce = 120;
    
    const KeDownPressHandler = (e) => {
        if(!controls[e.key]) {
            setControls((controls) => ({ 
                ...controls, [e.key]: true 
            }));
            // console.log('Down',e.code)
        }
    }

    const KeUpPressHandler = (e) => {
        setControls((controls) => ({ 
            ...controls, [e.key]: false,
        }));
        // console.log('Up',e.code)
    }

    useEffect(()=>{
        if(state === true){
            if(socket.id === id){            
                    window.addEventListener('keydown', KeDownPressHandler);
                    window.addEventListener('keyup', KeUpPressHandler);
                
                return () => {
                    window.removeEventListener('keydown', KeDownPressHandler);
                    window.removeEventListener('keyup', KeUpPressHandler);
                }
            }
        }
    })

    useEffect(() => {
        if (controls.ArrowUp || controls.w) {
          vehicleApi.applyEngineForce(engineForce, 2);
          vehicleApi.applyEngineForce(engineForce, 3);
        } else if (controls.ArrowDown || controls.s) {
          vehicleApi.applyEngineForce(-engineForce, 2);
          vehicleApi.applyEngineForce(-engineForce, 3);
        } else {
          vehicleApi.applyEngineForce(0, 2);
          vehicleApi.applyEngineForce(0, 3);
        }
    
        if (controls.ArrowLeft || controls.a) {
          vehicleApi.setSteeringValue(0.3, 2);
          vehicleApi.setSteeringValue(0.3, 3);
          vehicleApi.setSteeringValue(-0.07, 0);
          vehicleApi.setSteeringValue(-0.07, 1);
        } else if (controls.ArrowRight || controls.d) {
          vehicleApi.setSteeringValue(-0.3, 2);
          vehicleApi.setSteeringValue(-0.3, 3);
          vehicleApi.setSteeringValue(0.07, 0);
          vehicleApi.setSteeringValue(0.07, 1);
        } else {
          for (let i = 0; i < 4; i++) {
            vehicleApi.setSteeringValue(0, i);
          }
        }
    
      }, [controls, vehicleApi, chassisApi]);

    return controls;
}